import { useContext } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';
import { ShopCartContext } from '../contexts/ShopCartContext';
import ShopItem from './ShopItem';

function ShopCart() {
  const [opened, { open, close }] = useDisclosure(false);
  const { cart, itemCount } = useContext(ShopCartContext);

  return (
    <>
      <Drawer position="right" opened={opened} onClose={close} title={`🛒 Cart (${itemCount})`}>
        {cart.map((product) => (
          <ShopItem key={product.id} product={product} inCart />
        ))}
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
