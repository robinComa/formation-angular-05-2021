import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../shared/animal';
import { AnimalService } from '../shared/animal.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  animalForm!: FormGroup;
  submited = false;

  constructor(
    private animalService: AnimalService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initAnimal();
    const id = this.activatedRoute.snapshot.params.id;
    if (id) {
      this.animalService.get(id).subscribe((animal) => this.initAnimal(animal));
    }
  }

  onSubmit(): void {
    this.submited = true;
    if (this.animalForm.invalid) {
      return;
    }
    if (this.animalForm.value.id) {
      this.animalService.update(this.animalForm.value).subscribe(() => {
        this.router.navigate(['animals', this.animalForm.value.id]);
      });
    } else {
      this.animalService.create(this.animalForm.value).subscribe((animal) => {
        this.router.navigate(['animals', animal.id]);
      });
    }
  }

  private initAnimal(animal: Animal = {
    id: undefined as any,
    name: '',
    species: '',
    comment: '',
    lastVisit: Date.now(),
    owner: {
      name: '',
      email: '',
      phone: ''
    }
  }): void {
    this.animalForm = new FormGroup({
      id: new FormControl(animal.id),
      name: new FormControl(animal.name, [Validators.required, Validators.minLength(2)]),
      species: new FormControl(animal.species, [Validators.required]),
      comment: new FormControl(animal.comment),
      lastVisit: new FormControl(animal.lastVisit, [Validators.required]),
      owner: new FormGroup({
        name: new FormControl(animal.owner.name, [Validators.required]),
        email: new FormControl(animal.owner.email, [Validators.email]),
        phone: new FormControl(animal.owner.phone, [Validators.required]),
      })
    });
  }

}
