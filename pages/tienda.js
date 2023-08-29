import Layout from "@/components/layout"
import ListadoGuitarras from "@/components/listado-guitarras"

export default function Tienda({guitarras}) {

  console.log(guitarras); // Imprime los datos en la consola

  return (
    <Layout
      title={'Tienda'}
      description={'Descubre tu próxima guitarra favorita en GuitarLA.'}
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <ListadoGuitarras
          guitarras={guitarras}
        />
      </main>
    </Layout>
  )
}

/* Consultar la API de forma estatica */
/*export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras/?populate=imagen`)
  const {data: guitarras} = await respuesta.json()
  return {
    props: {
      guitarras
    }
  };
}*/

/* Consultar la API de forma dinámica */
export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras/?populate=imagen`)
  const {data: guitarras} = await respuesta.json()
  return {
    props: {
      guitarras
    }
  };
}