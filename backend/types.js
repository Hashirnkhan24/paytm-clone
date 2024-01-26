import z from 'zod'

const userData = z.object({
    username : z.string(),
    firstName : z.string(),
    lastName : z.string(),
    password : z.string()
})

const updateBody = z.object({
    password  : z.string().optional(),
    firstName : z.string().optional(),
    lastName : z.string().optional
})
export { userData, updateBody }