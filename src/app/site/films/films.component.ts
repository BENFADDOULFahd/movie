import { Component } from '@angular/core';
import { SearchformComponent } from "./searchform/searchform.component";


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
  standalone:true,
  imports: [SearchformComponent,]
})
export class FilmsComponent {}
