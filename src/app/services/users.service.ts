import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class UsersService {
  API_URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getUsers(_id): Promise<any>  {
    return this.httpClient.get(`${this.API_URL}/users/all/${_id}`)
    .toPromise()
  }

  getSingleUser(id): Promise<any>  {
    return this.httpClient.get(`${this.API_URL}/users/${id}`)
    .toPromise()
  }

  // searchInterest(): Promise<any> {
  //   return this.httpClient.post(`${this.API_URL}/users/search`)
  //   .toPromise()
  // }

}
