import { UserProfile } from "@clerk/nextjs"

import React from 'react'

export default function page() {
    return (
        <div>
            <div className="flex justify-center items-center py-8">
                <UserProfile path="/user-profile" />
            </div>
        </div>
    )
}
