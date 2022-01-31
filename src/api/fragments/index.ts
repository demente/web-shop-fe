import {gql} from "@apollo/client";

const ITEM_FRAGMENT = gql`
  fragment Item on Item {
      id
      title
      description
      picture
  }
  `

export { ITEM_FRAGMENT}
