import posts from '@/utils/posts'

export default function GET(request, { params }) {
    const data = posts.find((post) => post.id === params.id)

    return new Response(JSON.stringify(data))
}
