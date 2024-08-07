export type UserGoalType = "lose-fat" | "gain-muscle" | "maintain" | "";
export type GenderType = "male" | "female" | "";

export interface IUserInfo {
    name: string;
    weight: number;
    height: number;
    age: number;
    gender: GenderType;
    bmr?: number;
    goal?: UserGoalType;
    distribution?: {
        protein: number; // percentage
        carbs: number; // percentage
        fat: number; // percentage
    }
}
