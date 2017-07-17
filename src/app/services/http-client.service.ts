import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Data {
  authorizationLevel: string;
  birthYear: number;
  created: number;
  creator: string;
  enabled: boolean;
  firstName: string;
  id: number;
  lastModification: number;
  lastName: string;
  modifier: string;
  organization: string;
  photo: string;
  title: string;
}

@Injectable()
export class HttpClientService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<Data[]>('http://localhost:8080/Kartyarendszer/api/CardRequest');
  }

}
