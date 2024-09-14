import { IconPlus, IconMinus, IconTrash } from '@tabler/icons-react'
import { useContext } from 'react'
import { Card, Image, Group, Text, Badge, Button } from '@mantine/core'
import { ShopCartContext } from '../contexts/ShopCartContext'

function ShopItem({ product, inCart }) {
  const { removeOneFromCart, removeFromCart, addToCart } = useContext(ShopCartContext)

  return (
    <Card
      withBorder
      shadow="sm"
      padding="lg"
      radius="md"
      key={product.id}
      style={{ display: 'flex', flexDirection: 'column', height: '100%', marginBottom: inCart ? 10 : 0 }}
    >
      <Card.Section>
        <Image
          src={product.thumbnail}
          height={160}
          alt={product.title}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs" style={{ flexGrow: 1 }}>
        <Text fw={500} style={{ width: '60%' }}>{product.title}</Text>
        <Badge color="pink">{inCart ? `x${product.quantity}` : `$${product.price}`}</Badge>
      </Group>

      {!inCart && (
        <Text size="sm" c="dimmed" style={{ flexGrow: 1 }}>
          {product.description}
        </Text>
      )}

      {!inCart ? (
        <Button color="green" fullWidth mt="auto" radius="md" onClick={() => addToCart(product)}>
          + Add to cart
        </Button>
      ) : (
        <Group justify="center" gap="xs" style={{ marginTop: 'auto' }}>
          <Button color="red" radius="md" onClick={() => removeOneFromCart(product)}>
            <IconMinus />
          </Button>
          <Button color="gray" radius="md" onClick={() => removeFromCart(product)}>
            <IconTrash />
          </Button>
          <Button color="green" radius="md" onClick={() => addToCart(product)}>
            <IconPlus />
          </Button>
        </Group>
      )}
    </Card>
  )
}

export default ShopItem;
