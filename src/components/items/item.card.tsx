import {Item} from "../../models/item";
import {Button, Card, CardActions, CardContent, CardHeader, CardMedia} from "@mui/material";

export function ItemCard(props: { item: Item, addToCart: (item: Item) => void }) {
  const {item, addToCart} = props;

  return <Card variant={"outlined"}>
    <CardHeader title={item.title}/>
    <CardMedia component="img"
               height="194" image={item.picture}/>
    <CardContent>{item.description}</CardContent>
    <CardActions>
      <Button onClick={() => addToCart(item)}>Add to cart</Button>
    </CardActions>
  </Card>
}
