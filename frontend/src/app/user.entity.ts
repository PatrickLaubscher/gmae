import { Role } from "./role.entity"

export interface User {
    id: number
    email: string
    pseudo: string
    password: string
    secret_question?: string
    secret_answer?: string
    role?: Role[]
}