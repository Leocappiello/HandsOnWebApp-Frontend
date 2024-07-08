import { z } from 'zod';

export const applySchema = z.object({
    username: z
        .string()
        .min(3, {
            message: 'Username be at least 3 characters long'
        }),
    email: z
        .string()
        .email({
            message: 'Email format not valid'
        }),
    applianceText: z
        .string()
        .min(1, {
            message: 'Description should not be empty'
        })
})

export type Inputs = {
    username: string,
    email: string,
    applianceText: string
}