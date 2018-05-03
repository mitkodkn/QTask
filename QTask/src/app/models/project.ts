import { User } from "./user";

export class Project {
    name: string;
    description: string;
    managerId: number;

    constructor(name: string, description: string, managerId: number) {
        this.name = name;   
        this.description = description;
        this.managerId = managerId;
    }
}