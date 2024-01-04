import { NextResponse } from 'next/server'

const DATA_SOURCE_URL = 'https://jsonplaceholder.typicode.com/todos'

const API_KEY: string = process.env.DATA_API_KEY as string

/**
 * Fetches todos from the data source URL and returns them as a JSON response.
 * @returns {Promise<NextResponse>} A promise that resolves with a JSON response containing the todos.
 */
export async function GET(request: Request) {

    const origin = request.headers.get('origin')
    
    // Fetch todos from the data source URL
    const response = await fetch(DATA_SOURCE_URL)

    // Parse the response body as an array of todos
    const todos: Todo[] = await response.json()

    // Return a JSON response containing the todos
    return new NextResponse(JSON.stringify(todos), {
        headers: {
            'Access-Control-Allow-Origin': origin || '*',
            'Content-Type': 'application/json',
        }
    })
}

export async function DELETE(request: Request) {
    const { id }: Partial<Todo> = await request.json()

    if (!id) {
        return NextResponse.json({ error: 'Missing id' }, { status: 400 })
    }

    const response = await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY
        }
    })

    return NextResponse.json({ "message": `Todo ${id} deleted` })

}
export async function POST(request: Request) {
    const { userId, title }: Partial<Todo> = await request.json()

    if (!userId || !title) {
        return NextResponse.json({ error: 'Missing required data' }, { status: 400 })
    }

    const response = await fetch(DATA_SOURCE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY
        },
        body: JSON.stringify({ 
            userId, title, completed: false 
        })
    })

    const newTodo: Todo = await response.json()

    return NextResponse.json(newTodo)

}
export async function PUT(request: Request) {
    const { userId, id, title, completed }: Todo = await request.json()

    if (!userId || !id || !title || typeof completed !== 'boolean') {
        return NextResponse.json({ error: 'Missing required data' }, { status: 400 })
    }

    const response = await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY
        },
        body: JSON.stringify({ 
            userId, title, completed
        })
    })

    const updatedTodo: Todo = await response.json()

    return NextResponse.json(updatedTodo)

}