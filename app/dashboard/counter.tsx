"use client"

import { useAuth, useUser } from "@clerk/nextjs";
import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0);

    const { isLoaded, userId, sessionId, getToken} = useAuth(); // uer user is not login, then conpnent will hide
    // const { isLoaded, isSignedIn, user} = useUser(); // if component show, if user either login on logout

    

    if (!isLoaded || !userId) {
        return null;
    }

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increament</button>
        </>
    )
}