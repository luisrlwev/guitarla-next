import Image from "next/image"
import Layout from "@/components/layout"
import styles from "@/styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description={'Aprende sobre GuitarLA, su historia y más.'}
    >
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>

          <div className={styles.contenido}>
            <Image src={'/img/nosotros.jpg'} width={1000} height={800} alt="nosotros"/>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec mattis odio, at viverra metus. Aliquam lobortis ante ut elit pretium tincidunt. Ut ut enim eleifend, tincidunt lorem sed, mattis erat. Etiam nec sem mollis, vestibulum nibh ut, ornare diam. Ut ac venenatis arcu. In volutpat semper risus at porta. Proin eget diam faucibus, mollis urna sit amet, pellentesque nunc. </p>
              <p>Duis et urna arcu. In mattis id ligula sit amet mattis. Suspendisse elementum et sem vitae molestie. Vivamus a justo at sem viverra congue eu at lacus. Vestibulum tincidunt lorem magna, id egestas tellus egestas a. Duis enim nulla, aliquam iaculis ante eget, imperdiet interdum urna. Pellentesque nulla tellus, dapibus vitae ipsum eu, sodales efficitur est. Donec ut est id tellus blandit imperdiet.</p>
            </div>
          </div>
        </main>
    </Layout>
  )
}
