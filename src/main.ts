import { MessageStatus } from "./modules/notifications/enums/messageStatus.enum.js";
import { NotificationType } from "./modules/notifications/enums/notifications.enum.js";
import { MessageNotification } from "./modules/notifications/messageNotification.js";
import { ApplicationMessage } from "./modules/notifications/types/message.type.js";


const notificationArray: ApplicationMessage[] = [
  {
    notificationType: NotificationType.Email,
    message: "Welcome to our platform",
    status: MessageStatus.PENDING,
    userEmail: "fakeUser@email.com",
  },
  {
    notificationType: NotificationType.SMS,
    message: "Your order has been shipped",
    status: MessageStatus.PENDING,
    userEmail: "fakeUser@email.com",
    userPhoneNumber: "+1234567890"
  },
  {
    notificationType: NotificationType.PushNotification,
    message: "You have a new friend request",
    userEmail: "fakeUser@email.com",
    status: MessageStatus.PENDING,
    userPhoneId: "abc123"
  },
  {
    notificationType: NotificationType.InAppNotification,
    message: "You have a new message",
    userEmail: "fakeUser@email.com",
    status: MessageStatus.PENDING,
    userPhoneId: "abc123"
  }
];

const messageNotification = new MessageNotification();

for (const notification of notificationArray) {
  messageNotification.sendNotification(notification);
}
