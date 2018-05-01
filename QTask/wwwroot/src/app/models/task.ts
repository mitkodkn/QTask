import { User } from './user'; 

export class Task {
    name: string;
    description: string;
    state: string;
    author: User;
    executor: User;

    constructor(name: string, description: string, state: string, author: User, executor: User) {
        this.name = name;
        this.description = description;
        this.state = state;
        this.author = author;
        this.executor = executor;
    };
}