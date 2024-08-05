import { Box, Button, Flex, RadioGroup } from "@radix-ui/themes"
import UserInput from "./user-input"
import { userInfoState } from "../states";
import { useRecoilState } from "recoil";

const InputDashboard = () => {
    const [userInfo, setUserInfo] = useRecoilState(userInfoState);

    function setCategory(category: string, e: string) {
        setUserInfo(prev => {
            return {
                ...prev,
                [category]: ["name", "gender"].includes(category) ? e : +e
            }
        })
    }

    return (
        <Flex direction="column" gap="3">
            <Box>
                <UserInput value={userInfo.name} setValue={e => setCategory("name", e)} placeholder="Name 名字" />
            </Box>
            <Flex direction="column" gap="3">
                <UserInput type="number" value={userInfo.weight.toString()} setValue={e => setCategory("weight", e)} placeholder="weight 体重" prefix="kg" />
                <UserInput type="number" value={userInfo.height.toString()} setValue={e => setCategory("height", e)} placeholder="height 体高" prefix="cm" />
                <UserInput type="number" value={userInfo.age.toString()} setValue={e => setCategory("age", e)} placeholder="age 年龄" prefix="years" />
            </Flex>
            <RadioGroup.Root value={userInfo.gender} onValueChange={e => setCategory("gender", e)}>
                <Flex align="center" gap="3">
                    <RadioGroup.Item value="male">Male</RadioGroup.Item>
                    <RadioGroup.Item value="female">Female</RadioGroup.Item>
                </Flex>
            </RadioGroup.Root>
            <Flex align="center" gap="3">
                <Button color="red">Restart</Button>
                <Button>Calculate</Button>
            </Flex>
        </Flex>
    )
}

export default InputDashboard
