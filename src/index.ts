import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function createUser(username: string, firstName: string, lastName: string, password: string) {
    const res = await prisma.user.create({
        data:{
            username,
            firstName,
            lastName,
            password
        }
    })
    console.log('result is ', res)
}

createUser("admin1", "123456", "harkirat", "singh")