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
    }
})
