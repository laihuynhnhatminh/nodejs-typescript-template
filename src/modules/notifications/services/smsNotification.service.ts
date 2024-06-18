import { IMessageNotification } from "../interfaces/iMessageNotifcation.interface.js";
import { ApplicationMessage } from "../types/message.type.js";

export class SMSNotificationService implements IMessageNotification {
    public send(appMessage: ApplicationMessage): void {
        if (!appMessage.userPhoneNumber) {
            console.error(`User phone number is missing`);
            return;
        }

        console.log(`Sending SMS notification: ${appMessage.message} to user with phone number ${appMessage.userPhoneNumber}`);
    }

    public saveToDatabase(appMessage: ApplicationMessage): void {
        console.log(`Saving SMS message to database: ${appMessage.message} for user ${appMessage.userEmail}`);
    }
}