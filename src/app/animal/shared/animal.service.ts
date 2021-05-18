import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Animal } from './animal';

const api = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private httpClient: HttpClient) { }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${api}/animals/${id}`);
  }

  get(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(`${api}/animals/${id}`);
  }

  create(animal: Animal): Observable<void> {
    return this.httpClient.post<void>(`${api}/animals`, animal);
  }

  update(animal: Animal): Observable<void> {
    return this.httpClient.put<void>(`${api}/animals/${animal.id}`, animal);
  }

  findAll(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(`${api}/animals`);
  }
}
