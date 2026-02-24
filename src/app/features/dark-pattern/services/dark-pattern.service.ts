import {inject, Injectable} from '@angular/core';
import {map, shareReplay} from 'rxjs';
import {mapCatalogDtoToModel} from '../pages/models/catalog.mapper';
import {CatalogApiService} from '../../../core/services/api/catalog-api.service';
import {DarkPatternType} from '../pages/models/dark-pattern.type';


@Injectable({
  providedIn: 'root',
})
export class DarkPatternService {
  private api: CatalogApiService = inject(CatalogApiService);

  getCatalog() {
    return this.api.getCatalogs().pipe(
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

}
