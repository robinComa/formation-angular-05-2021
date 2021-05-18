import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'animals',
  loadChildren: () => import('./animal/animal.module').then(m => m.AnimalModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
