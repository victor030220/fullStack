import {
  WebSocketGateway,
  OnGatewayConnection, //para Cuando el gateway se conecte
  OnGatewayInit, //Para cuando el gateway este inicializado
  OnGatewayDisconnect, //para cuando el gateway se desconecte
  WebSocketServer,
  SubscribeMessage, //Suscribirse a un evento
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { NotificationUser } from './interfaces/notification.interface';
import { Notification } from './interfaces/notification.interface';
import { NotificationService } from './notification.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
}) //es como un inyectable, este seria el servidor
export class NotificationGateway
  implements OnGatewayConnection, OnGatewayInit, OnGatewayDisconnect
{
  constructor(private readonly notificationService: NotificationService) {}
  @WebSocketServer()
  public server: Server; //Con esto tenemos acceso al servidor en esta clase
  private usersConnected: Map<string, NotificationUser> = new Map<
    string,
    NotificationUser
  >();

  public afterInit(server: Server): void {
    console.log(`Server inicializado en: ${server.path()}`);
  }

  public handleConnection(client: Socket): void {
    const idUser: string = client.handshake.query.idUser as string;
    let user: NotificationUser = {
      id: '',
      socketId: client.id,
      userId: idUser,
    };
    this.usersConnected.set(idUser, user);
    console.log(`Cliente conectado: ${client.id}`);
  }

  public handleDisconnect(client: Socket): void {
    for (const [userId, user] of this.usersConnected) {
      if (user.socketId === client.id) {
        this.usersConnected.delete(userId); //elimino el usuario que se desconecto
        return;
      }
    }
  }

  //Recibe el nombre del evento y abajo la funcion a ejecutar
  @SubscribeMessage('send_noti') //evento notificar - enviar notificacion
  handlerSendNotiEvent(client: Socket, notification: Notification): boolean {
    let user: NotificationUser | undefined = this.usersConnected.get(
      notification.userId,
    );
    if (user == undefined) return false; //El usuario esta inactivo
    this.server.to(user.socketId).emit('recive_noti', notification); //el servidor le responde al destinatario que ejecute su evento de recibir
    this.server.to(user.socketId).emit('add_noti'); //Debe aumentar su contador de notificaciones no leidas el cliente
    this.notificationService.addUsersWithNotification(user.userId);
    this.notificationService.addUnreadNotifications(notification.id);
    return true; //le mando la notificacion bien
  }

  @SubscribeMessage('mark_as_read')
  handlerMarkReadEvent(
    client: Socket,
    notification: Notification,
  ): Notification | undefined {
    if (this.usersConnected.get(notification.userId) === undefined)
      return undefined; //el usuario no esta conectado
    this.server.to(client.id).emit('subtract-noti'); //Le digo al cliente que decremente su contador de notificaciones no leidas
    this.notificationService.subtractUsersWithNotification(notification.userId);
    this.notificationService.subtractUnreadNotifications(notification.id);
    notification.read = true;
    return notification; //le devolvemos la notificacion marcada como leida
  }
}
