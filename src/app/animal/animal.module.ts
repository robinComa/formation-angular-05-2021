import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AnimalComponent } from './animal/animal.component';
import { AnimalsComponent } from './animals/animals.component';
import { MailtoDirective } from './shared/mailto.directive';
import { PhonePipe } from './shared/phone.pipe';
import { AnimalItemComponent } from './animal-item/animal-item.component';
import { HttpRequestInterceptor } from './shared/http-request.interceptor';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AnimalComponent,
    AnimalsComponent,
    MailtoDirective,
    PhonePipe,
    AnimalItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    AnimalsComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }
  ]
})
export class AnimalModule { }
