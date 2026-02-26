import {inject, Injectable} from '@angular/core';
import {catchError, Observable, of} from 'rxjs';
import {CatalogDto} from '../../../features/dark-pattern/pages/models/catalog-dto';
import {APP_CONFIG} from '../../config/app-config.token';
import {HttpClient} from '@angular/common/http';


  @Injectable({
  providedIn: 'root',
})

export class CatalogApiService {
  private http: HttpClient = inject(HttpClient)
  private config = inject(APP_CONFIG);


  getCatalogs(): Observable<CatalogDto[]> {
    return this.http.get<CatalogDto[]>(`${this.config.apiUrl}/catalogs`).pipe(
      catchError(err => {
        console.error('CatalogModel API error:', err);
        return of();
      })
    )
  }
}
