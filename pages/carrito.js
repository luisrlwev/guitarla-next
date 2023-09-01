import Layout from "@/components/layout"
import styles from '@/styles/carrito.module.css'

export default function Carrito() {
  return (
    <Layout
        title="Carrito"
        description="Verifica tus productos y termina tu compra"
    >
        <main className="contenedor">
            <h1 className="heading">Carrito</h1>
            <div>
                <div>
                    <h2>Articulos</h2>
                </div>
                <aside>
                    <h3>Resumen del pedido</h3>
                    <p>Total a pagar: </p>
                </aside>
            </div>
        </main>
    </Layout>
  )
}
