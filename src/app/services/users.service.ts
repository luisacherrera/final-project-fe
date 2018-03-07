import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class UsersService {
  API_URL = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getUsers(_id): Promise<any>  {
    return this.httpClient.get(`${this.API_URL}/users/all/${_id}`)
    .toPromise()
  }

  getSingleUser(id): Promise<any>  {
    return this.httpClient.get(`${this.API_URL}/users/${id}`)
    .toPromise()
  }

  sendMessage(id, data): Promise<any> {
    const options = {
      withCredentials: true
    };

    return this.httpClient.post(`${this.API_URL}/users/message/${id}`, data, options)
    .toPromise()
  }

}
