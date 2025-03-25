import { Role } from "./role.entity"

export interface User {
    id: number
    email: string
    password_hash: string
    username: string
    secret_question?: string
    role?: Role[]
}