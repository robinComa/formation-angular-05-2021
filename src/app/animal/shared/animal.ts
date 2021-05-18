import { Owner } from "./owner";

export interface Animal {
  id: number;
  name: string;
  species: string;
  comment: string;
  lastVisit: number;
  owner: Owner;
}
