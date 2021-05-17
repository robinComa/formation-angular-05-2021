import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalComponent } from './animal/animal.component';
import { AnimalsComponent } from './animals/animals.component';
import { MailtoDirective } from './shared/mailto.directive';
import { PhonePipe } from './shared/phone.pipe';

@NgModule({
  declarations: [
    AnimalComponent,
    AnimalsComponent,
    MailtoDirective,
    PhonePipe
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
