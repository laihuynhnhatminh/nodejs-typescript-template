import { MessageStatus } from "../enums/messageStatus.enum.js";
import { NotificationType } from "../enums/notifications.enum.js"

export type ApplicationMessage = {
    notificationType: NotificationType;
    message: string;
    status: MessageStatus;
    userEmail: string;
    userPhoneNumber?: string;
    userPhoneId?: string;
    sendAt?: Date;
}
