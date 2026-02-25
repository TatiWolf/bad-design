import {inject, Injectable} from '@angular/core';
import {map, Observable, shareReplay} from 'rxjs';
import {mapCatalogDtoToModel} from '../pages/models/catalog.mapper';
import {CatalogApiService} from '../../../core/services/api/catalog-api.service';
import {DarkPatternType} from '../pages/models/dark-pattern.type';
import {DarkPatternDetailsApi} from './api/dark-pattern-details-api';
import {mapDarkPatternDtoToDarkPattern} from '../pages/models/dark-pattern.mapper';
import {DarkPattern} from '../pages/models/dark-pattern';


@Injectable({
  providedIn: 'root',
})
export class DarkPatternService {
  private catalogApiService: CatalogApiService = inject(CatalogApiService);
private darkPatternDetailsApi: DarkPatternDetailsApi = inject(DarkPatternDetailsApi)
  getCatalog() {
    return this.catalogApiService.getCatalogs().pipe(
      map(dtos => dtos.map(mapCatalogDtoToModel)),
      shareReplay(1)
    );
  }

  getDarkPatternByAlias(type: DarkPatternType) {
    return this.getCatalog().pipe(
      map(catalogs =>
        catalogs.find(c => c.slug === type) ?? null
      )
    );
  }

  getDarkPatternBySlug(
    slug: DarkPatternType,
    darkPatternId: number
  ): Observable<DarkPattern | null> {

    return this.darkPatternDetailsApi
      .getDarkPatternDetailsById(slug, darkPatternId)
      .pipe(
        map(dto => dto ? mapDarkPatternDtoToDarkPattern(dto) : null)
      );
  }

}
