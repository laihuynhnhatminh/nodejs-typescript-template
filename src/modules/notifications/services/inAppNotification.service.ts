import { IMessageNotification } from "../interfaces/iMessageNotifcation.interface.js";
import { ApplicationMessage } from "../types/message.type.js";

export class InAppNotificationService implements IMessageNotification {
    public send(appMessage: ApplicationMessage): void {
        if (!appMessage.userPhoneId) {
            console.error(`User phone id is missing`);
            return;
        }

        console.log(`Sending in app notification: ${appMessage.message} to user with phone id ${appMessage.userPhoneId}`);
    }

    public saveToDatabase(appMessage: ApplicationMessage): void {
        console.log(`Saving message to database: ${appMessage.message} for user ${appMessage.userEmail}`);
    }
}