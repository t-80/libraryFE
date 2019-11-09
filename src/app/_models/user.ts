import { Role } from "./role";

export class User {
    id: number;
    name: string;
    password: string;
    provider: string;
    authority: Role;
    token?: string;
}