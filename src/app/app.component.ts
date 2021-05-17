import { Component } from '@angular/core';
import { AnimalService } from './animal/shared/animal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private animalService: AnimalService) {
    console.log(this.animalService.get());
  }
}
