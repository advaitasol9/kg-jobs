import * as Notifications from 'expo-notifications';
import Constants from "expo-constants";
import * as Cellular from "expo-cellular";
import * as Permissions from 'expo-permissions';

export async function requestForPushNotificationsAsync() {
    let token = '';
    if (Constants.isDevice) {
        if (Platform.OS === "ios") {
            const {status: existingStatus} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
            let finalStatus = existingStatus;
            if (existingStatus !== "granted") {
                const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
                finalStatus = status;
            }
            if (finalStatus !== "granted") {
                // alert("Failed to get push token for push notification!");
                return "";
            }
        }
        try {
            token = (await Notifications.getDevicePushTokenAsync()).data;

            if (Platform.OS === "ios") {
                token = (await Notifications.getExpoPushTokenAsync({
                    experienceId: "@kisangates/kg-jobs-mobile",
                    // devicePushToken: token,
                })).data;
            }
            console.log({token});
        } catch (e) {
            console.log({requestForPushNotificationsAsync: e})
        }
        // console.log({token});
    } else {
        alert("Must use physical device for Push Notifications");
    }
    return token;
}

