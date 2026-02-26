import {inject, Injectable} from '@angular/core';
import {filter, map, Observable, shareReplay} from 'rxjs';
import {mapCatalogDtoToCatalogModel} from '../pages/models/catalog.mapper';
import {CatalogApiService} from '../../../core/services/api/catalog-api.service';
import {CatalogType} from '../pages/models/catalog.type';
import {DarkPatternDetailsApi} from './api/dark-pattern-details-api';
import {
  mapDarkPatternCatalogDtoToDarkPatternCatalog,
  mapDarkPatternDtoToDarkPattern
} from '../pages/models/dark-pattern.mapper';
import {DarkPatternInfo} from '../pages/models/dark-pattern-info';
import {DarkPatternApi} from './api/dark-pattern-api';
import {DarkPattern} from '../pages/models/catalog.model';


@Injectable({
  providedIn: 'root',
})
export class DarkPatternService {
  private catalogApiService: CatalogApiService = inject(CatalogApiService);
private darkPatternDetailsApi: DarkPatternDetailsApi = inject(DarkPatternDetailsApi)
  private darkPatternApi: DarkPatternApi = inject(DarkPatternApi)

  getCatalog() {
    return this.catalogApiService.getCatalogs().pipe(
      map(dtos => dtos.map(mapCatalogDtoToCatalogModel)),
      shareReplay(1)
    );
  }

  getDarkPatternById(type: CatalogType):Observable<DarkPattern[]> {
    return this.darkPatternApi.getDarkPatternById(type).pipe(
      filter(dto => !!dto),
      map(dto=>mapDarkPatternCatalogDtoToDarkPatternCatalog(dto))
    );
  }

  getDarkPatternBySlug(
    slug: CatalogType,
    darkPatternId: number
  ): Observable<DarkPatternInfo | null> {
    console.log('test')
    return this.darkPatternDetailsApi
      .getDarkPatternDetailsById(slug, darkPatternId)
      .pipe(
        map(dto => dto ? mapDarkPatternDtoToDarkPattern(dto) : null),
        map(test=> {
          console.log(test)
          return test;
        })
      );
  }

}
