import { Flex, Text } from "@radix-ui/themes"
import ReactECharts from 'echarts-for-react';
import { getChartOptions } from "../functions";
import { useRecoilState } from "recoil";
import { userInfoState } from "../states";
import { useContext } from "react";
import { MobileContext } from "../contexts/is-mobile-context";

const MacronutrientDistribution = () => {
    const isMobile = useContext(MobileContext);
    const [userInfo] = useRecoilState(userInfoState);

    return (
        <Flex id="macronutrient-distribution" justify="start" align="center" p="5" direction={isMobile ? "column" : "row"}>
            <ReactECharts style={{ width: 400, height: 400 }} option={getChartOptions(userInfo.goal!)} />

            <Flex direction="column" justify="center" align="start" flexGrow="1">
                <Text as="p" m="0">Protein = {userInfo.bmr} x {userInfo.distribution?.protein}% = {(userInfo.bmr! * userInfo.distribution!.protein / 100 / 4).toFixed(2)}g</Text>
                <Text as="p" m="0">Carbohydrates = {userInfo.bmr} x {userInfo.distribution?.carbs}% = {(userInfo.bmr! * userInfo.distribution!.carbs / 100 / 4).toFixed(2)}g</Text>
                <Text as="p" m="0">Fats = {userInfo.bmr} x {userInfo.distribution?.fat}% = {(userInfo.bmr! * userInfo.distribution!.fat / 100 / 9).toFixed(2)}g</Text>
            </Flex>
        </Flex>
    )
}

export default MacronutrientDistribution
