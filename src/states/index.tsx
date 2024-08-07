import { atom } from "recoil";
import { IUserInfo } from "../interfaces";

export const userInfoState = atom<IUserInfo>({
    key: "userInfoState",
    default: {
        name: "Jim",
        gender: "male",
        weight: 76,
        height: 156,
        age: 22,
        goal: "maintain",
        distribution: {
            protein: 50,
            carbs: 20,
            fat: 20,
        }
    }
})
