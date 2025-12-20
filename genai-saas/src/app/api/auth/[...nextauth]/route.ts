import NextAuth from "next-auth"
import {PrismaAdaptor} from "@auth/prisma-adapter"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
import {prisma} from "@/lib/prisma"
//import bcrypt from "bcrypt"
//import { adapter } from "next/dist/server/web/adapter"

export const authOptions = {
    adapter :PrismaAdaptor(prisma),

    session: {
        strategy: "jwt"
    },

    providers: [
        Google({
            clientId : process.env.GOOGLE_CLIENT_ID!,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET!,
        }),

        Github({
            clientId : process.env.GITHUB_CLIENT_ID!,
            clientSecret : process.env.GOOGLE_CLIENT_SECRERT!,
        }),

        Credentials({
            name : "Credentials",
            credentials:{
                emial: {},
                password : {},
            },
            async authorize(credentials){
                if(!credentials?.emial || !credentials?.password) return null;

                const user = await prisma.user.findUnique({
                    where : {email: credentials.emial},
                });

                if(!user || !user.password) return null;

                const isValid = await bcrypt.compare(
                    credentials.password,
                    user.password
                );

                if(!isValid) return null;

                return {
                    id: user.id,
                    email : user.email,
                    name: user.name,
                };
            },
        }),
    ],

    callbacks: {
        async jwt({token , user}){
            if(user){
                token.id = user.id;
            }
            return token;
        },
        async session({session, token}){
            if(session.user){
                session.user.id = token.id as string;
            }
            return session;
        },
    },

    pages : {
        signIn : "/login",
    },
};

const handler = NextAuth(authOptions);
export {handler as GET , handler as POST};