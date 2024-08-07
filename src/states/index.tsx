import { atom } from "recoil";
import { IUserInfo } from "../interfaces";

export const userInfoState = atom<IUserInfo>({
    key: "userInfoState",
    default: {
        name: "",
        gender: "",
        weight: 0,
        height: 0,
        age: 0,
        goal: "",
    }
})
