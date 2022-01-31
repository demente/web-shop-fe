import {Item} from "../../models/item";
import {ItemCard} from "./item.card";

export function Items(props: { items: Item[], addToCart: (item: Item)=>void}) {
  const {items, addToCart} = props;

  return (<div>
    {items.map(item => <ItemCard key={item.id} item={item} addToCart={addToCart}/>)}
  </div>)
}
