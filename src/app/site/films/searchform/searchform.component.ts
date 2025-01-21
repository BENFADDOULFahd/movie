import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SearchmovieService } from '../services/searchmovie.service';
import { FormValidators } from './validators/form.validators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-searchform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {
  searchForm: FormGroup;
  title: FormControl;
  year: FormControl;
  errors: string | null = null;
  results: any = null;

  constructor(private SearchmovieService: SearchmovieService, private fb: FormBuilder) {
    let titlePattern = '[a-zA-Z0-9,\\. ]+';
    let yearPattern = '[0-9]{4}';
    
    this.title = fb.control('', [
      Validators.required,
      Validators.maxLength(30),
      Validators.pattern(titlePattern)
    ]);

    this.year = fb.control('', [
      Validators.pattern(yearPattern),
      Validators.min(1900),
      Validators.max(2024),
      FormValidators.integerBetween(1900, 2024)
    ]);

    this.searchForm = fb.group({
      title: this.title,
      year: this.year
    });
  }

  startSearch() {
    let title = this.title.valid ? this.title.value : null;
    let year = this.year.valid ? this.year.value : null;
    let action = (data: any) => {
      console.log('Données reçues :', data);

      if (data.Error) {
        this.errors = data.Error; // Si l'erreur existe, on l'enregistre
        this.results = null;
      } else if (data.Response === 'False') {
        this.errors = 'Movie not found.';
        this.results = null;
      } else {
        this.errors = null;
        this.results = data; // Enregistre les résultats si aucune erreur
      }
    };

    if (title) {
      this.SearchmovieService.search(action, title, year);
    }
  }

  ngOnInit() { }
}