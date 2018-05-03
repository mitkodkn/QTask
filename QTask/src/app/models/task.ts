import { User } from './user'; 

export class Task {
    name: string;
    description: string;
    state: string;
    authorId: number;
    executorId: number;

    constructor(name: string, description: string, state: string, authorId: number, executorId: number) {
        this.name = name;
        this.description = description;
        this.state = state;
        this.authorId = authorId;
        this.executorId = executorId;
    };
}