'use client'

import { useState, useEffect } from "react"
import { App } from "../files/applications";

export default function useApplications() {
    const [applications, setApplications] = useState<App[]>();

    const fetchApplications = async () => {
        const res = await fetch('/api/apps');
        const apps = await res.json();
        
        setApplications(apps);
    }

    useEffect(() => {
        (async () => await fetchApplications())()
    }, []);

    return applications;
}