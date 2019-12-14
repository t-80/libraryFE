import { Role } from './enums';

export class CurrentUser {
    constructor(
        public id: number,
        public name: string,
        public authority: Role,
        public token?: string
    ) {}
}