import CardList from "../components/CardList"
import ViewUserButton from "../components/ViewUserButton"


const base_url = "https://jsonplaceholder.typicode.com/posts"

interface Iposts {
    userId: number,
    id: number,
    title: string,
    body: string
}


const Posts = async () => {
    const response = await fetch(base_url, {
        next: {revalidate: 3600},
    })
    const posts: Iposts[] = await response.json()

    return (
        <>
        <p>{new Date().toLocaleTimeString()}</p>
            <h1 className="text-fuchsia-500 text-xl">Postingan Page</h1>
            {posts.map((post) => {
                return (
                    <CardList key={post.id}>
                        <p>{post.id}</p>
                        <i>{post.title}</i>
                        <p>{post.body}</p>
                        <ViewUserButton userId={post.userId}/>
                    </CardList>
                )
            })}
        </>
    )
}

export default Posts

