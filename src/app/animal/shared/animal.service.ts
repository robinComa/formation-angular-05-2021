import { Injectable } from '@angular/core';

import { Animal } from './animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor() { }

  get(): Animal {
    return {
      name: 'Garfield',
      species: 'chat',
      comment: 'blabla',
      owner: {
        name: 'Mr Toto',
        phone: '0676563412',
        email: 'toto@gmail.com'
      }
    }
  }
}
