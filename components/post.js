import Image from "next/image"
import Link from "next/link"
import { formatearFecha } from "@/utils/helpers"
import styles from "@/styles/blog.module.css"

export default function Post({post}) {

    const { contenido, imagen, titulo, url, publishedAt } = post

  return (
    <article>
        <Link href={`/blog/${url}`}><Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Blog sobre ${titulo}`}/></Link>
        <div className={styles.contenido}>
            <h3><Link href={`/blog/${url}`}>{titulo}</Link></h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.resumen}>{contenido}</p>
            <Link href={`/blog/${url}`} className={styles.enlace}>Leer post</Link>
        </div>
    </article>
  )
}
