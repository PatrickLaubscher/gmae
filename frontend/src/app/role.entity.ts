import { User } from "./user.entity"

export interface Role {
    id: number
    name: string
    user?: User[]
}