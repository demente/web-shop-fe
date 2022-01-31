import {useItemsQuery} from "./api/useItemsQuery";
import {Item} from "./models/item";

export function useItems(): { items: Item[] } {
  const {data: getItems, error: getItemsError} = useItemsQuery();

  return {items: getItems?.items ?? []}
}
