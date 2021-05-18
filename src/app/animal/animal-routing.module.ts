import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './animal/animal.component';
import { AnimalsComponent } from './animals/animals.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [{
  path: '',
  component: AnimalsComponent
}, {
  path: ':id',
  component: AnimalComponent
}, {
  path: 'form',
  children: [{
    path: '',
    component: FormComponent
  }, {
    path: ':id',
    component: FormComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalRoutingModule { }
