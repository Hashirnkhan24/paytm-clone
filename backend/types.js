import z from 'zod'

const userData = z.object({
    username : z.string(),
    firstName : z.string(),
    lastName : z.string(),
    password : z.string()
})

export { userData }