// http://localhost:3000/api/revalidate?path=/&secret=<TOKEN>

import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.query.secret !== process.env.MY_SECRET_TOKEN) { // Check if the secret token is correct
        return res.status(401).json({ message: 'Invalid token' }) // Return an error if the token is invalid
    }

    const path = req.query.path as string // Get the path from the query

    await res.revalidate(path) // Revalidate the path

    return res.json({ revalidated: true }) // Return a success message
}