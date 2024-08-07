import { Flex } from '@radix-ui/themes'
import './App.css'
import InputDashboard from './components/input-dashboard'
import ResultSection from './components/result-section'
import { useRecoilState } from 'recoil'
import { userInfoState } from './states'

const App = ()  => {
    const [userInfo] = useRecoilState(userInfoState);

    return (
        <Flex justify="start" gap="5" p="3">
            <InputDashboard />
            {
                (userInfo.bmr && userInfo.bmr !== 0) &&
                    <ResultSection />
            }
        </Flex>
    )
}

export default App
