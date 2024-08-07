import { IUserInfo, UserGoalType } from "../interfaces";

export function calculateBMR(info: IUserInfo): number {
    const baseBMR = (10 * info.weight) + (6.25 * info.height) - (5 * info.age);
    return info.gender === "male" ? baseBMR + 5 : baseBMR - 161;
}

export function getChartOptions(goal: UserGoalType) {
    const distributions = {
        protein: 0,
        carbs: 0,
        fats: 0,
    }

    if (goal === "maintain") {
        distributions.carbs = 55;
        distributions.protein = 25;
        distributions.fats = 20;
    }

    if (goal === "lose-fat") {
        distributions.carbs = 20;
        distributions.protein = 50;
        distributions.fats = 30;
    }

    if (goal === "gain-muscle") {
        distributions.carbs = 40;
        distributions.protein = 35;
        distributions.fats = 25;
    }

    return {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center'
        },
        series: [
            {
                name: 'Macronutrients Distribution',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: distributions.protein, name: 'Protein' },
                    { value: distributions.carbs, name: 'Carbohydrates' },
                    { value: distributions.fats, name: 'Fats' }
                ],
            }
        ]
    };
}
