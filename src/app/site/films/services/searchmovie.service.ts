import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class SearchmovieService {
 constructor(private http: HttpClient) {
 }

 search(action: (data: Object) => void, title: string, year: number = 0): void {
  const apiKey = 'b58f3dc8'; // Votre clé API
  const baseUrl = 'http://www.omdbapi.com/';

  // Construction de l'URL
  const url = `${baseUrl}?apikey=${apiKey}&t=${title}&y=${year}`;

  // Requête HTTP
  this.http.get(url).subscribe(
    (response) => {
      action(response); // Appeler la fonction de callback avec les données
      console.log(response);
    },
    
  );
}
 }
