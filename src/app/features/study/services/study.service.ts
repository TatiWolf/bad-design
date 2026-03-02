import {inject, Injectable} from '@angular/core';
import {map, shareReplay} from 'rxjs';
import {StudyApi} from './api/study.api.service';
import {mapStudiesDtoToStudiesModel} from '../models/study.mapper';


@Injectable({
  providedIn: 'root',
})
export class StudyService {

  private StudyApiService: StudyApi = inject(StudyApi)

  getStudies() {
    return this.StudyApiService.getStudies().pipe(
      map(dtos => mapStudiesDtoToStudiesModel(dtos)),
      shareReplay(1)
    );
  }

}
