'use client'

import { useEffect, useState } from "react"
import { App } from "../files/applications";

export default function useApp(app: App) {
    const [application, setApp] = useState<App>(app);

    // const fetchApplication = async () => {

    //     console.log(app);
        
    //     try {
    //         const response = await fetch('/api/apps', {
    //             method: 'PUT',
    //             body: JSON.stringify({ data: app.name })
    //         });
    //         const data = await response.json();

    //         setApp(data.app);

    //         console.log(data.app);
            

    //     } catch {}
    // }

    const updateApp = async (newApp: App) => {
        try {
            const response = await fetch('/api/apps', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ data: newApp })
            })
            const data = await response.json();
        } catch {}
    }

    // useEffect(() => {
    //     (async () => await fetchApplication())()
    // }, []);


    return { application, updateApp };
}