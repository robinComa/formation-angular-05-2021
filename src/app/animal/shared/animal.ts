import { Owner } from "./owner";

export interface Animal {
  name: string;
  species: string;
  comment: string;
  lastVisit: number;
  owner: Owner;
}
