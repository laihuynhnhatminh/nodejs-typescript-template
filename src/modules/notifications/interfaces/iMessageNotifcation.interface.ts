import { ApplicationMessage } from "../types/message.type.js";

export interface IMessageNotification {
    send(appMessage: ApplicationMessage): void;
    saveToDatabase(appMessage: ApplicationMessage): void;
}