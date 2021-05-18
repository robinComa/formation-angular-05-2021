import { Injectable } from '@angular/core';

import { Animal } from './animal';

const animals: Animal[] = [];

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
