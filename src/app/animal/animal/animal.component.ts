import { Component, OnInit } from '@angular/core';
import { Animal } from '../shared/animal';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {

  animal!: Animal;

  constructor() { }

  ngOnInit(): void {
    this.animal = {
      name: 'Garfield',
      species: 'chat',
      comment: 'blabla',
      owner: {
        name: 'Mr Toto',
        phone: '0676563412',
        email: 'toto@gmail.com'
      }
    };
  }

}
