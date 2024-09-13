import { useState } from "react"
import { Container, Title } from "@mantine/core"
import { products } from './mocks/products.json'
import { ShopCartProvider } from './contexts/ShopCartContext'
import ShopFilter from "./components/ShopFilter"
import ShopList from "./components/ShopList"
import ShopCart from "./components/ShopCart"

function App() {
  const [filters, setFilters] = useState({ price: 0, category: 'all' })

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        (filters.category === 'all' || product.category === filters.category) &&
        (filters.price === 0 || product.price >= filters.price)
      )
    })
  }

  return (
    <ShopCartProvider>
      <Container size="md">
        <Title order={1} align="center" style={{ marginTop: 20 }}>Shopping Cart</Title>

        <ShopCart />

        <ShopFilter filters={filters} setFilters={setFilters} />

        <ShopList products={filterProducts(products)} />
      </Container>
    </ShopCartProvider>
  )
}

export default App
