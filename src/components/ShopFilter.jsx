import { useState } from "react"
import { Group, InputLabel, Slider, Text, NativeSelect } from "@mantine/core"

const categories = ["All", "Groceries", "Furniture", "Beauty", "Fragrances"]

function ShopFilter({ filters, setFilters }) {
  const [minPrice, setMinPrice] = useState(filters.price)
  const [endMinPrice, setEndMinPrice] = useState(filters.price)

  const handlePriceChange = (value) => {
    setEndMinPrice(value)
    setFilters({ ...filters, price: value })
  }

  const handleCategoryChange = (event) => {
    setFilters({ ...filters, category: event.target.value.toLowerCase() })
  }

  return (
    <Group position="apart" grow>
      <InputLabel>
        Price:
        <Slider
          color="pink"
          min={0}
          max={100}
          step={1}
          value={minPrice}
          onChange={setMinPrice}
          onChangeEnd={handlePriceChange}
          label={(value) => `$ ${value}`}
        />
        <Text>${endMinPrice}</Text>
      </InputLabel>
      <InputLabel>
        Category:
        <NativeSelect
          defaultValue="All"
          data={categories}
          onChange={handleCategoryChange}
        />
      </InputLabel>
    </Group>
  )
}

export default ShopFilter
