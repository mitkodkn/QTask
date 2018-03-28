export class User {
    id: number;
    username: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string, username: string, email: string, passwordHash: string) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.username = username;
            this.email = email;
            this.passwordHash = passwordHash;
    };
}