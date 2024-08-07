export type UserGoalType = "lose-fat" | "gain-muscle" | "maintain";

export interface IUserInfo {
    name: string;
    weight: number;
    height: number;
    age: number;
    gender: "male" | "female";
    bmr?: number;
    goal: UserGoalType;
    distribution: {
        protein: number; // percentage
        carbs: number; // percentage
        fat: number; // percentage
    }
}
