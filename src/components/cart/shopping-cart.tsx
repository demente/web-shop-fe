import {Item} from "../../models/item";
import {Box, Button, Card, CardActions, CardContent, CardHeader, Modal, TextField, Typography} from "@mui/material";
import {useCompleteOrderMutation} from "../../api/useCompleteOrderMutation";
import {useState} from "react";

export function ShoppingCart(props: { shoppingCart: Item[], isVisible: boolean, handleClose: () => void }) {
  const {shoppingCart, isVisible, handleClose} = props;

  const [email, setEmail] = useState<string>('');

  const [completeOrderMutation] = useCompleteOrderMutation({
    itemIds: shoppingCart.map(item => item.id),
    email
  });

  const checkout = async () => {
    await completeOrderMutation();
  }
  const grouped: Map<Item, number> = shoppingCart.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());

  return (<Modal
      open={isVisible}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
  >
    <Box style={{background: 'white'}}>

      <Card>
        <CardHeader title={`You have ${shoppingCart.length} items in your cart!`} />
        <CardContent>
          {Array.from(grouped.keys()).map(item => <div>{item.title} x{grouped.get(item)}</div>)}
        </CardContent>
        <CardActions>
          <Typography id="modal-modal-description" sx={{mt: 2}}>
            <TextField id="outlined-basic" label="Enter your email" variant="outlined"
                       onChange={(event) => setEmail(event.target.value)}/>

          </Typography>
          <Button variant={"outlined"} disabled={shoppingCart.length < 1 || !email}
                  onClick={() => checkout()}>Checkout</Button>
        </CardActions>
      </Card>

    </Box>
  </Modal>);
}
