import { IMessageNotification } from "../interfaces/iMessageNotifcation.interface.js";
import { ApplicationMessage } from "../types/message.type.js";

export class EmailNotificationService implements IMessageNotification {
    public send(emailMessage: ApplicationMessage): void {
        if (!emailMessage.userEmail) {
            console.error(`User email is missing`);
            return;
        }

        console.log(`Sending email notification: ${emailMessage.message} to user with email ${emailMessage.userEmail}`);
    }

    public saveToDatabase(emailMessage: ApplicationMessage): void {
        console.log(`Saving email message to database: ${emailMessage.message} for user ${emailMessage.userEmail}`);
    }
}