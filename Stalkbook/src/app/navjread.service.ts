import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {INavchild} from './interfaces/INavchild';

@Injectable({
  providedIn: 'root'
})
export class NavjreadService {
  constructor(private http: HttpClient) { }
  getNavchild(_url: string): Observable<INavchild[]> {
    return this.http.get<INavchild[]>(_url);
  }
}
