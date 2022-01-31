import { gql, MutationTuple, useMutation } from '@apollo/client';
import {Order} from "../models/order";

const COMPLETE_ORDER_MUTATION = gql`
  mutation completeOrder($itemIds: [String!]!, $email: String!) {
    completeOrder(itemIds: $itemIds, email: $email){
        id
    }
  }
`;

interface CompleteOrderVariables {
  itemIds: string[];
  email: string;
}

interface MutationResult {
  data: {
    completeOrder: Order;
  };
}

function useCompleteOrderMutation(
  variables: CompleteOrderVariables
): MutationTuple<MutationResult, CompleteOrderVariables> {
  return useMutation<MutationResult, CompleteOrderVariables>(
    COMPLETE_ORDER_MUTATION,
    {
      variables,
    }
  );
}

export type { CompleteOrderVariables };
export { useCompleteOrderMutation };
