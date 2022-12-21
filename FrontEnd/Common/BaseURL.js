import { Platform } from "react-native";

let BASE_URL = "";

if (Platform.OS === "android") {
    BASE_URL = "http://localhost:3000/api/v1/" // for android emulator
} else {
    BASE_URL = "http://localhost:3000/api/v1/" // for ios simulator

}

export default BASE_URL;