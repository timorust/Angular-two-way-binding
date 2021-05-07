import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private httpClient: HttpClient) { }

  getAlbums() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/photos');

  }
}
