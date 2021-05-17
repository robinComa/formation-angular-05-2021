import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {

  animal: any;

  constructor() { }

  ngOnInit(): void {
    this.animal = {
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
