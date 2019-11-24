import { Role, Provider } from "./enums";

export class User {
    id: number;
    name: string;
    password: string;
    provider: Provider;
    authority: Role;
    token?: string;
}