'use client'

import { AppInstance } from "@/lib/types";
import { createContext } from "react";

type InstanceContextType = {
    instances: AppInstance[];
    setInstances: (instances: AppInstance[]) => void;
}

const InstancesContext = createContext<InstanceContextType|null>(null);

export default InstancesContext;