import { Injectable } from '@angular/core';

import { Animal } from './animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor() { }

  get(): Animal {
    return this.findAll()[0];
  }

  findAll(): Animal[] {
    return [{
      name: 'Garfield 1',
      species: 'chat',
      comment: 'blabla',
      owner: {
        name: 'Mr Toto',
        phone: '0676563412',
        email: 'toto@gmail.com'
      }
    }, {
      name: 'Garfield 2',
      species: 'chat',
      comment: 'blabla',
      owner: {
        name: 'Mr Toto',
        phone: '0676563412',
        email: 'toto@gmail.com'
      }
    }];
  }
}
