'use client'

import { useEffect, useState } from "react"
import { AppInstance } from "$types";

export default function useApp(app: AppInstance) {
    const [application, setApp] = useState<AppInstance>(app);

    const updateApp = async (newApp: AppInstance) => {
        try {
            const response = await fetch('/api/apps', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ data: newApp })
            })
            const data = await response.json();

            application.opened = newApp.opened
        } catch {}
    }

    return { application, updateApp };
}