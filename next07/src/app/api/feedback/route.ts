import { NextResponse } from "next/server";

type Feedback = {
    name?: string
    email?: string
    message?: string
}

export async function POST(request: Request) {
    const data: Feedback = await request.json()
    console.log('data', data)
    const { name, email, message } = data

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    return NextResponse.json({ name, email, message })
}