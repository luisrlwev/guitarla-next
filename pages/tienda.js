import Layout from "@/components/layout"
import Guitarra from "@/components/guitarra"
import styles from "@/styles/grid.module.css"

export default function Tienda({guitarras}) {

  return (
    <Layout
      title={'Tienda'}
      description={'Descubre tu próxima guitarra favorita en GuitarLA.'}
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <div className={styles.grid}>
          {guitarras?.map(guitarra => (
            <Guitarra
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ))}
        </div>
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