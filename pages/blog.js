import Layout from "@/components/layout"
import Post from "@/components/post"

export default function Blog({posts}) {
  return (
    <Layout
      title={'Blog'}
      description={'Bienvenido al blog de GuitarLA en donde aprenderás todo sobre las guitarras y la música.'}
    >
        <main className="contenedor">
          <h1 className="heading">Blog</h1>
          <div>
            {posts?.map(post => (
              <Post
                key={post.id}
                post={post.attributes}
              />
            ))}
          </div>
        </main>
    </Layout>
  )
}

/* Consultar la API de forma estatica */
export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  const {data: posts} = await respuesta.json()
  return {
    props: {
      posts
    }
  };
}
