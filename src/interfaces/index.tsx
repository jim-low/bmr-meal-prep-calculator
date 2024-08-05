export type UserGoal = "lose-fat" | "gain-muscle" | "maintain";

export interface IUserInfo {
    name: string;
    weight: number;
    height: number;
    age: number;
    gender: "male" | "female";
    bmr?: number;
    goal?: UserGoal;
    distribution?: {
        protein: number; // percentage
        carbs: number; // percentage
        fat: number; // percentage
    }
}
