import { Platform } from "react-native";

let BASE_URL = "";

if (Platform.OS === "android") {
    BASE_URL = "https://e-week-app-backend-2.onrender.com/api/v1/" // for android emulator
} else {
    BASE_URL = "https://e-week-app-backend-2.onrender.com/api/v1/" // for ios emulator

}





export default BASE_URL;