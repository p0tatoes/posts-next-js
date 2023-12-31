import posts from '@/utils/posts'

export async function GET(request) {
    const data = posts

    return new Response(JSON.stringify(data))
}

export async function POST(request) {
    const data = await request.json()

    return new Response(JSON.stringify({ message: 'POSTed' }))
}
