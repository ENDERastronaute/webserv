import { AppInstance } from "@/lib/types";


export default class Menu {
    private instances: AppInstance[] = [];

    public constructor(instances: AppInstance[]) {
        this.instances = instances;
    }

    public show() {

    }

    public hide() {

    }
}