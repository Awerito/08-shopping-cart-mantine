import { useState } from "react";
import { Group, InputLabel, Slider, Text, NativeSelect } from "@mantine/core";

const categories = ["All", "Groceries", "Furniture", "Beauty", "Fragrances"];

function ShopFilter({ filters, setFilters }) {
  const [minPrice, setMinPrice] = useState(filters.price);
  const [endMinPrice, setEndMinPrice] = useState(filters.price);

  const handlePriceChange = (value) => {
    setEndMinPrice(value);
    setFilters((prev) => ({ ...prev, price: value }));
  };

  const handleCategoryChange = ({ target }) => {
    setFilters((prev) => ({ ...prev, category: target.value.toLowerCase() }));
  };

  return (
    <Group position="apart" grow>
      <InputLabel>
        Price: ${endMinPrice}
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
  );
}

export default ShopFilter;
