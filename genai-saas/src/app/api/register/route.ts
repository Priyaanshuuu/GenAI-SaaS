import {prisma} from "@/lib/prisma"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"

export async function POST(req : Request){
    const {email , password , name} = await req.json();

    const existedUser = await prisma.user.findUnique({
        where : {email},
    });

    if(existedUser){
        return NextResponse.json(
            {error : "User Already Exists!!"},
            {status: 400}
        );
    }

    const hashedPassword = await bcrypt.hash(password , 10);

    const user = await prisma.user.create({
        data: {
            email,
            password : hashedPassword,
            name,
        },
    });

    return NextResponse.json(user)
}