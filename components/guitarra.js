import Image from "next/image"
import Link from "next/link"

export default function Guitarra({guitarra}) {
  const { descripcion, imagen, nombre, precio, url } = guitarra
  return (
    <div>
      <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Guitarra ${nombre}`}/>
      <div>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>${precio}</p>
        <Link className="" href={`/guitarras/${url}`}>
          Ver producto
        </Link>
      </div>
    </div>
  )
}
