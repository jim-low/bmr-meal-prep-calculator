import { Flex } from '@radix-ui/themes'
import './App.css'
import InputDashboard from './components/input-dashboard'
import ResultSection from './components/result-section'
import { useRecoilState } from 'recoil'
import { userInfoState } from './states'
import { useContext } from 'react'
import { MobileContext } from './contexts/is-mobile-context'

const App = ()  => {
    const isMobile = useContext(MobileContext);
    const [userInfo] = useRecoilState(userInfoState);

    return (
        <Flex direction={isMobile ? "column" : "row" } gap="5" p="3">
            <InputDashboard />
            {
                (userInfo.bmr && userInfo.bmr !== 0) &&
                    <ResultSection />
            }
        </Flex>
    )
}

export default App
