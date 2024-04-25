'use client'

import { AppInstance } from "@/lib/types";
import { createContext } from "react";

interface Actions {
    close: (pid: string) => void
    open: (instance: AppInstance) => void
}

const ActionsContext = createContext<Actions|null>(null);

export default ActionsContext;