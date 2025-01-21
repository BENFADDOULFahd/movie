import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[movieList]',
})
export class ListDirective {
  private _list: Object = {};
  private _el: any;

  constructor(el: ElementRef) {
    this._el = el.nativeElement;
  }

  @Input()
  set movieList(movie: { Title: string; Year: string; Director: string }) {
    // Construire le contenu HTML à afficher
    let temp = `<a class="list-group-item list-group-item-action">`;
    temp += `Titre: ${movie.Title} Année: ${movie.Year} Réalisateur: ${movie.Director}`;
    temp += '</a>';

    // Ajouter le contenu au DOM
    this._el.innerHTML = temp;
  }
}

