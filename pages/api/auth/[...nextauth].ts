import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GitHubProvider from 'next-auth/providers/github'
import EmailProvider from 'next-auth/providers/email'
// import prisma from '../../../lib/prisma'
import 'bootstrap/dist/css/bootstrap.css'
import GoogleProvider from "next-auth/providers/google"
import { Client } from 'podcast-api'
import { PrismaClient } from '@prisma/client'

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;
const prisma = new PrismaClient();

// const server = sgTransport({
//   auth: {
//     api_user: process.env.SENDGRID_API_USER,
//     api_key: process.env.SENDGRID_API_KEY
//   }
// });

const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // EmailProvider({
    //   server: {
    //     host: process.env.SMTP_HOST,
    //     port: Number(process.env.SMTP_PORT),
    //     auth: {
    //       user: process.env.SMTP_USER,
    //       pass: process.env.SMTP_PASSWORD,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM,
    // }),
    GoogleProvider({
       clientId: process.env.GOOGLE_CLIENT_ID,
       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
     }),
    // Client({
    //   apiKey: process.env.LISTEN_API_KEY || null,
    // })
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
};

