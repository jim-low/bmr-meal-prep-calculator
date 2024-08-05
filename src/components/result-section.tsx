import { Flex, Text } from "@radix-ui/themes"
import { useRecoilState } from 'recoil'
import { userInfoState } from "../states";

const ResultSection = () => {
    const [userInfo] = useRecoilState(userInfoState);

    return (
        <Flex flexGrow="1" direction="column">
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
                <Text style={{ visibility: "hidden" }}>BMR </Text>= {(10 * userInfo.weight) + (6.25 * userInfo.height) - (5 * userInfo.age)}
                {' '}
                {userInfo.gender === "male" ? "+ 5" : "- 161"}
            </Text>
        </Flex>
    )
}

export default ResultSection
