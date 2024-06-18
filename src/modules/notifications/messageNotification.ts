import { MessageStatus } from "./enums/messageStatus.enum.js";
import { NotificationType } from "./enums/notifications.enum.js";
import { IMessageNotification } from "./interfaces/iMessageNotifcation.interface.js";
import { EmailNotificationService } from "./services/emailNotifcation.service.js";
import { InAppNotificationService } from "./services/inAppNotification.service.js";
import { PushNotificationService } from "./services/pushNotification.service.js";
import { SMSNotificationService } from "./services/smsNotification.service.js";
import { ApplicationMessage } from "./types/message.type.js";

export class MessageNotification {
    private notificationService: IMessageNotification;

    public sendNotification(appMessage: ApplicationMessage): void {
        if (appMessage.status !== MessageStatus.PENDING) {
            console.error(`Message status is invalid`);
            return;
        }

        appMessage.status = MessageStatus.SENT;
        appMessage.sendAt = new Date();
        
        this.notificationService = this.configureNotificationService(appMessage.notificationType);
        this.notificationService.send(appMessage);
        this.notificationService.saveToDatabase(appMessage);
    }

    private configureNotificationService(notificationType: NotificationType): IMessageNotification {
        switch (notificationType) {
            case NotificationType.Email:
                return new EmailNotificationService();
            case NotificationType.SMS:
                return new SMSNotificationService();
            case NotificationType.PushNotification:
                return new PushNotificationService();
            case NotificationType.InAppNotification:
                return new InAppNotificationService();
            default:
                throw new Error(`Invalid notification type: ${notificationType}`);
        }
    }
}