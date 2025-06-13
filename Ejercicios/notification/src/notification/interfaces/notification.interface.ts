export interface Notification {
  id: string;
  userId: string;
  message: string;
  type: 'info' | 'warning' | 'success';
  read: boolean;
  timestamp: Date;
}

export interface NotificationUser {
  id: string;
  socketId: string;
  userId: string;
}
