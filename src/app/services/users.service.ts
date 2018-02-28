import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class UsersService {
  API_URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Promise<any>  {
    return this.httpClient.get(`${this.API_URL}/users`)
    .toPromise()
  }

}
