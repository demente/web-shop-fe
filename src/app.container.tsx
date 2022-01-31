import {SearchBar} from "./components/search/search";
import {Items} from "./components/items/items";
import {useItems} from "./app.hooks";
import {Item} from "./models/item";
import {ShoppingCart} from "./components/cart/shopping-cart";
import {useEffect, useState} from "react";

export function AppContainer() {
  const {items} = useItems();

  const [shoppingCart, setShoppingCart] = useState<Item[]>([]);
  const [shoppingCartVisible, setShoppingCartVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<Item[]>(items);

  useEffect(() => {
    setVisibleItems(items);
  }, [items])


  const search = (searchWord: string) => {
    setVisibleItems([...items.filter(item => item.description?.toLowerCase().includes(searchWord.toLowerCase()) || item.title.toLowerCase().includes(searchWord.toLowerCase()))]);
  }

  return (
      <>
        <SearchBar showShoppingCart={() => setShoppingCartVisible(true)}
                   search={(searchWord: string) => search(searchWord)}/>
        <Items items={visibleItems} addToCart={(item: Item) => {
          setShoppingCart([...shoppingCart, item]);
        }}/>
        <ShoppingCart shoppingCart={shoppingCart} isVisible={shoppingCartVisible}
                      handleClose={() => setShoppingCartVisible(false)}/>
      </>
  )
}
