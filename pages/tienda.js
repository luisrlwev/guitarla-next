import Layout from "@/components/layout"
import ListadoGuitarras from "@/components/listado-guitarras"

export default function Tienda() {
  return (
    <Layout
      title={'Tienda'}
      description={'Descubre tu próxima guitarra favorita en GuitarLA.'}
    >
        <main className="contenedor">
          <h1 className="heading">Nuestra Colección</h1>
          <ListadoGuitarras
          
          />
        </main>
    </Layout>
  )
}
