interface ApplicationInstance {
    top: number;
    left: number;
    height: number;
    width: number;
    name: string;
    pid: string;
}

export interface App {
    top: number;
    left: number;
    name: string;
    instances: AppInstance[];
}

export type AppInstance = {
    [K in keyof ApplicationInstance]: ApplicationInstance[K];
} & {
    [key: string]: any;
};