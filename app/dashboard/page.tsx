import { auth, currentUser } from '@clerk/nextjs/server'
import React from 'react'

export default async function page() {
    const authObj = await auth();
    const userObj = await currentUser();

    console.log({authObj, userObj})

    return (
        <div>
            Dashboard
        </div>
    )
}
