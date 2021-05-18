import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Animal } from '../shared/animal';
import { AnimalService } from '../shared/animal.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit, OnDestroy {

  animal!: Animal;

  private subscription!: Subscription;

  constructor(
    private animalService: AnimalService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      this.animalService.get(id).subscribe(animal => this.animal = animal);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
