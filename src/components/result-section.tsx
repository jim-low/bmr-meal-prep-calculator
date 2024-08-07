import { Flex, RadioGroup, Text } from "@radix-ui/themes"
import { useRecoilState } from 'recoil'
import { userInfoState } from "../states";
import { calculateBMR } from "../functions";
import { UserGoalType } from "../interfaces";
import MacronutrientDistribution from "./macronutrient-distribution";

const ResultSection = () => {
    const [userInfo, setUserInfo] = useRecoilState(userInfoState);

    function setUserGoal(goal: UserGoalType) {
        setUserInfo(prev => {
            return {
                ...prev,
                goal
            }
        })
    }

    function handleUpdateDistribution(goal: UserGoalType) {
        const dist = {
            protein: 0,
            carbs: 0,
            fat: 0,
        }

        if (goal === "maintain") {
            dist.carbs = 55;
            dist.protein = 25;
            dist.fat = 20;
        }

        if (goal === "lose-fat") {
            dist.carbs = 20;
            dist.protein = 50;
            dist.fat = 30;
        }

        if (goal === "gain-muscle") {
            dist.carbs = 40;
            dist.protein = 35;
            dist.fat = 25;
        }

        setUserInfo(prev => {
            return {
                ...prev,
                distribution: {
                    ...dist
                }
            }
        })
    }

    return (
        <Flex flexGrow="1" direction="column" gap="3" id="result-section">
            <Flex direction="column">
                <Text as="p" m="0">
                    BMR = (10 × weight in kg) + (6.25 × height in cm) – (5 × age in years)
                    {' '}
                    {userInfo.gender === "male" ? "+ 5" : "- 161"}
                </Text>
                <Text as="p" m="0">
                    BMR = (10 × {userInfo.weight}kg) + (6.25 × {userInfo.height}cm) – (5 × {userInfo.age} years)
                    {' '}
                    {userInfo.gender === "male" ? "+ 5" : "- 161"}
                </Text>
                <Text as="p" m="0">
                    <Text style={{ visibility: "hidden" }}>BMR </Text>= ({10 * userInfo.weight}) + ({6.25 * userInfo.height}) – ({5 * userInfo.age})
                    {' '}
                    {userInfo.gender === "male" ? "+ 5" : "- 161"}
                </Text>
                <Text as="p" m="0">
                    <Text style={{ visibility: "hidden" }}>BMR </Text>= {calculateBMR(userInfo)} kcal
                </Text>
            </Flex>

            <RadioGroup.Root
                value={userInfo.goal}
                className="goals-selection"
                onValueChange={(e: UserGoalType) => {
                    setUserGoal(e);
                    handleUpdateDistribution(e);
                }}
            >
                <Flex justify="center" align="center" gap="3">
                    <RadioGroup.Item value="lose-fat">Lose Fat</RadioGroup.Item>
                    <RadioGroup.Item value="gain-muscle">Gain Muscle</RadioGroup.Item>
                    <RadioGroup.Item value="maintain">Maintain</RadioGroup.Item>
                </Flex>
            </RadioGroup.Root>

            { userInfo.goal && <MacronutrientDistribution /> }
        </Flex>
    )
}

export default ResultSection
