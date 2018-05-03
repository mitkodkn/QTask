export class User {
    id: number;
    // username: string;
    email: string;
    password: string;

    constructor(email: string, password: string) {
            this.email = email;
            this.password = password;
    };
}