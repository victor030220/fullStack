import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  private usersWithNotification: Map<string, number> = new Map<
    string,
    number
  >(); //usuario - cantidad de no leidos
  private unreadNotifications: Map<string, number> = new Map<string, number>(); // cantidad de Notificaicones no leidas por notificacion

  public addUsersWithNotification(userId: string) {
    let current: number;
    current = this.usersWithNotification.get(userId) || 0; // si es la primera notificacion no esta en este map
    this.usersWithNotification.set(userId, current + 1); //busca la clave, aumenta en 1
  }

  public addUnreadNotifications(notiId: string) {
    let current: number;
    current = this.unreadNotifications.get(notiId) || 0;
    this.unreadNotifications.set(notiId, current + 1);
  }

  public subtractUsersWithNotification(userId: string) {
    let current: number;
    current = this.usersWithNotification.get(userId) || 0; //No debiera de pasar que no este en el map, esto es por prevencion
    this.usersWithNotification.set(userId, Math.max(current - 1, 0)); //busca el usuario y le decrementa la cantidad
  }

  public subtractUnreadNotifications(notiId: string) {
    let current: number;
    current = this.unreadNotifications.get(notiId) || 0;
    this.unreadNotifications.set(notiId, Math.max(current - 1, 0));
  }
}
