import { createContext, useEffect, useState } from "react"

export const MobileContext = createContext(false);

const IsMobileContext = ({ children }: { children: React.ReactNode }) => {
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 540px)").matches);

    useEffect(() => {
        const handleMobile = () => { setIsMobile(window.matchMedia("(max-width: 540px)").matches); }

        window.addEventListener('resize', handleMobile);
        return () => {
            window.removeEventListener('resize', handleMobile);
        }
    }, [])

    return (
        <MobileContext.Provider value={isMobile}>
            {children}
        </MobileContext.Provider>
    )
}

export default IsMobileContext
