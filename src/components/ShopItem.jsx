import { useContext } from 'react'
import { Card, Image, Group, Text, Badge, Button } from '@mantine/core'
import { ShopCartContext } from '../contexts/ShopCartContext'

function ShopItem({ product, inCart }) {
  const { removeOneFromCart, removeFromCart, addToCart } = useContext(ShopCartContext)

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder key={product.id}>
      <Card.Section>
        <Image
          src={product.thumbnail}
          height={160}
          alt={product.title}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{product.title}</Text>
        <Badge color="pink">{inCart ? `x${product.quantity}` : `$${product.price}`}</Badge>
      </Group>

      {!inCart && <Text size="sm" c="dimmed">{product.description}</Text>}

      {!inCart ? (
        <Button color="green" fullWidth mt="md" radius="md" onClick={() => addToCart(product)}>
          + Add to cart
        </Button>
      ) : (
        <Group justify="center" gap="xs">
          <Button color="red" mt="md" radius="md" onClick={() => removeOneFromCart(product)}>
            ➖
          </Button>
          <Button color="gray" mt="md" radius="md" onClick={() => removeFromCart(product)}>
            🗑️
          </Button>
          <Button color="green" mt="md" radius="md" onClick={() => addToCart(product)}>
            ➕
          </Button>
        </Group>
      )}
    </Card>
  )
}

export default ShopItem;
