import Image from "next/image"
import Link from "next/link"

export default function Post({post}) {

    const { contenido, imagen, titulo, url, publishedAt } = post

  return (
    <article>
        <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Blog sobre ${titulo}`}/>
        <div>
            <h3>{titulo}</h3>
            <p>{publishedAt}</p>
            <p>{contenido}</p>
            <Link href={`/blog/${url}`}>Leer post</Link>
        </div>
    </article>
  )
}
