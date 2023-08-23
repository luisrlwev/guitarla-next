import Layout from "@/components/layout"
import Link from "next/link"

export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description={'Aprende sobre GuitarLA, su historia y más.'}
    >
        Desde nosotros.js
        <Link href="/">Ir a inicio</Link>
    </Layout>
  )
}
