import { useContext } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Group, Text } from '@mantine/core';
import { ShopCartContext } from '../contexts/ShopCartContext';
import ShopItem from './ShopItem';

function ShopCart() {
  const [opened, { open, close }] = useDisclosure(false);
  const { cart, itemCount, clearCart } = useContext(ShopCartContext);

  return (
    <>
      <Drawer position="right" opened={opened} onClose={close} title={`🛒 Cart (${itemCount})`}>
        {cart.map((product) => (
          <ShopItem key={product.id} product={product} inCart />
        ))}
        {itemCount > 0 ? (
          <Group justify="center" gap="md" style={{ marginTop: 20 }}>
            <Button onClick={clearCart} color="green">Checkout</Button>
            <Button onClick={clearCart} color="red">Clear cart</Button>
          </Group>
        ) : (
          <Text align="center" size="xl">
            Your cart is empty
          </Text>
        )}
      </Drawer>

      {!opened &&
        <Button
          style={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}
          color="pink"
          radius="xl"
          onClick={opened ? close : open}
        >
          🛒 {itemCount > 0 ? itemCount : ''}
        </Button >
      }
    </>
  );
}

export default ShopCart;
