import { useState, useEffect } from "react"
const useCounter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("count", count)
    }, [count])

    function increamentCount() {
        setCount(count + 1)
    }

    function decreamentCount() {
        setCount(count - 1)
    }
    return { count, increamentCount, decreamentCount }
}

export default useCounter;