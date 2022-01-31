import { gql, QueryResult, useQuery } from '@apollo/client';

import {Item} from "../models/item";
import {ITEM_FRAGMENT} from "./fragments";

const GET_ITEMS_QUERY = gql`
  {
    items {
      ...Item
    }
  }
  ${ITEM_FRAGMENT}
`;

interface GetItemsOutput {
  items: Item[]
}

function useItemsQuery(): QueryResult<GetItemsOutput> {
  return useQuery<GetItemsOutput>(GET_ITEMS_QUERY);
}

export { useItemsQuery };
