'use client'
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

export default function Product({ params }: ProductProps) {
  const [productId, size, color] = params.data

  console.log(params)

  function addToCart() {
    console.log('adicionou ao carrinho')
  }

  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <button onClick={addToCart}>Adicionar ao carrinho</button>
    </div>
  )
}
