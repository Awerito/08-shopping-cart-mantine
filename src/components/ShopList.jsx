import { SimpleGrid } from "@mantine/core";
import ShopItem from "./ShopItem";

function ShopList({ products }) {
  return (
    <SimpleGrid
      cols={4}
      spacing="sm"
      verticalSpacing="sm"
      style={{ paddingTop: 20 }}
    >
      {products.map((product) => (
        <ShopItem key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
}

export default ShopList;
