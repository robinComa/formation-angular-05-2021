import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalComponent } from './animal/animal.component';
import { AnimalsComponent } from './animals/animals.component';
import { MailtoDirective } from './shared/mailto.directive';

@NgModule({
  declarations: [
    AnimalComponent,
    AnimalsComponent,
    MailtoDirective
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
