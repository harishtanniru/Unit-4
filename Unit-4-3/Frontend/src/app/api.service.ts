import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public addData(body: any) {
    return this.http.post('http://localhost:3000/add-todo', body);
  }
  public getAllData() {
    return this.http.get('http://localhost:3000/find-all-todos');
  }
  public findOne(id: any) {
    return this.http.get(`http://localhost:3000/find-todo/${id}`);
  }
  public delete(body: any) {
    return this.http.post('http://localhost:3000/delete-todo', body);
  }
  public update(body: any) {
    return this.http.post('http://localhost:3000/update-todo', body);
  }
}
