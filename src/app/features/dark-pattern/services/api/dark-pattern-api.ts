import {inject, Injectable} from '@angular/core';
import {CatalogType, getCatalogBySlug} from '../../pages/models/catalog.type';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG} from '../../../../core/config/app-config.token';
import {DarkPatternDto} from '../../pages/models/catalog-dto';

@Injectable({
  providedIn: 'root',
})
export class DarkPatternApi {

  private http: HttpClient = inject(HttpClient)
  private config = inject(APP_CONFIG);

  getDarkPatternById(
    catalogSlug: CatalogType,
  ): Observable<DarkPatternDto[] | null> {

    const catalog = getCatalogBySlug(catalogSlug);

    if (!catalog) {
      console.warn('Invalid catalog slug:', catalogSlug);
      return of(null);
    }

    return this.http.get<DarkPatternDto[]>(
      `${this.config.apiUrl}/catalogs/${catalog.id}/dark-patterns`
    );
  }

}


