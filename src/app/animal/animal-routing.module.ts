import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './animal/animal.component';
import { AnimalsComponent } from './animals/animals.component';

const routes: Routes = [{
  path: '',
  component: AnimalsComponent
}, {
  path: ':id',
  component: AnimalComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalRoutingModule { }
