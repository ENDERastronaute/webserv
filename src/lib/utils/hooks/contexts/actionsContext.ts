'use client'

import { AppInstance } from "@/lib/types";
import { createContext } from "react";

interface Actions {
    close: (instance: AppInstance) => void
    open: (instance: AppInstance) => void
}

const ActionsContext = createContext<Actions|null>(null);

export default ActionsContext;
