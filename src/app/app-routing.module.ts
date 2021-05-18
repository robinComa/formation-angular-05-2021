import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './animal/animal/animal.component';
import { AnimalsComponent } from './animal/animals/animals.component';

const routes: Routes = [{
  path: '',
  component: AnimalsComponent
}, {
  path: ':id',
  component: AnimalComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
