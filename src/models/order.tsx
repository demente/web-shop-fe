import { Item } from "./item";

interface Order {
id: string;
email: string;
items: Item[];
}

export type {Order}
