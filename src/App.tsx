import { Flex } from '@radix-ui/themes'
import './App.css'
import InputDashboard from './components/input-dashboard'
import ResultSection from './components/result-section'

const App = ()  => {
    return (
        <Flex justify="start" gap="5" p="3">
            <InputDashboard />
            <ResultSection />
        </Flex>
    )
}

export default App
