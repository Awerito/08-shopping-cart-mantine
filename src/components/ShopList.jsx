import { SimpleGrid, Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function ShopList({ products }) {
  return (
    <SimpleGrid cols={3} spacing="sm" verticalSpacing="sm" style={{ paddingTop: 20 }}>
      {products.map((product) => (
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
            <Badge color="pink">${product.price}</Badge>
          </Group>

          <Text size="sm" c="dimmed">{product.description}</Text>

          <Button color="green" fullWidth mt="md" radius="md">
            + Add to cart
          </Button>
        </Card>
      ))}
    </SimpleGrid>
  );
}

export default ShopList;
