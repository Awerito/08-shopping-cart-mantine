import { useState } from "react"
import { Container, Title } from "@mantine/core"
import ShopFilter from "./components/ShopFilter"
import ShopList from "./components/ShopList"
import { products } from './mocks/products.json'

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
    <Container size="md">
      <Title order={1} align="center" style={{ marginTop: 20 }}>Shopping Cart</Title>

      <ShopFilter filters={filters} setFilters={setFilters} />

      <ShopList products={filterProducts(products)} />
    </Container>
  )
}

export default App
