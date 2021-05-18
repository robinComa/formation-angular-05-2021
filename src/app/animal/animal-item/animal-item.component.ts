import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Animal } from '../shared/animal';

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.scss']
})
export class AnimalItemComponent implements OnInit {

  @Input() animal!: Animal;
  @Output() remove = new EventEmitter<Animal>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(): void {
    this.remove.emit(this.animal);
  }

}
