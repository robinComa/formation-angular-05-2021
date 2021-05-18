import { Injectable } from '@angular/core';

import { Animal } from './animal';

const animals: Animal[] = [{
  id: 1,
  name: 'Garfield 1',
  species: 'chat',
  comment: 'blabla',
  lastVisit: 1234567890123,
  owner: {
    name: 'Mr Toto',
    phone: '06.76.56.34.12',
    email: 'toto@gmail.com'
  }
}, {
  id: 2,
  name: 'Garfield 2',
  species: 'chat',
  comment: 'blabla',
  lastVisit: 1234567890123,
  owner: {
    name: 'Mr Toto',
    phone: '06 76 56 34 12',
    email: 'toto@gmail.com'
  }
}];

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor() { }

  delete(id: number): void {
    const index = animals.findIndex((a: Animal) => a.id === id);
    animals.splice(index, 1);
  }

  get(id: number): Animal | undefined {
    return animals.find((a: Animal) => a.id === id);
  }

  create(animal: Animal): void {
    animals.push(animal);
  }

  update(animal: Animal): void {

  }

  findAll(): Animal[] {
    return animals.slice();
  }
}
