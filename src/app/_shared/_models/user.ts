import { Provider } from './enums/provider';
import { Role } from './enums/role';


export class User {
    id: number;
    name: string
    email: string;
    password: string;
    provider: Provider;
    authority: Role;
    token?: string;
}