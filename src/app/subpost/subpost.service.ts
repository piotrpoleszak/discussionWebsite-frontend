import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubpostModel } from './subpost-response';

@Injectable({
  providedIn: 'root'
})
export class SubpostService {

  constructor(private http: HttpClient) { }

  getAllSubposts(): Observable<Array<SubpostModel>> {
    return this.http.get<Array<SubpostModel>>('http://localhost:8080/api/subpost');
  }

  createSubpost(subpostModel: SubpostModel): Observable<SubpostModel> {
    return this.http.post<SubpostModel>('http://localhost:8080/api/subpost',
      subpostModel);
  }
}
