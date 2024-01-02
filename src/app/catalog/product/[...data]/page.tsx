import { AddToCartButton } from './add-to-cart-button'

interface ProductProps {
  params: {
    data: string[]
  }
}

// Server component => A gente não USA JavaScipt no lado do cliente
// Client Components => O JavaScript é enviado ao navegador (cliente)

// Streaming SRR => Ler/escrever dados de forma parcil + Server-side Rendering
// Simula a requisição http --stream http://localhost:3000
// Renderizar um componente pelo lado do servidor de forma PARCIAL

export default async function Product({ params }: ProductProps) {
  const [productId, size, color] = params.data

  const response = await fetch('https://api.github.com/users/diego3g')
  const user = await response.json()
  // await e fetch causam vários recarregamentos de página em um use client

  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <AddToCartButton />
    </div>
  )
}
