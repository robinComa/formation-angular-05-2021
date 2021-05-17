import { Owner } from "./owner";

export interface Animal {
  name: string;
  species: string;
  comment: string;
  owner: Owner;
}
