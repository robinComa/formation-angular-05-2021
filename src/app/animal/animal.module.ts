import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalComponent } from './animal/animal.component';
import { AnimalsComponent } from './animals/animals.component';

@NgModule({
  declarations: [
    AnimalComponent,
    AnimalsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AnimalsComponent
  ],
  providers: []
})
export class AnimalModule { }
