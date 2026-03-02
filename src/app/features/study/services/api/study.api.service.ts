import {inject, Injectable} from '@angular/core';
import {catchError, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG} from '../../../../core/config/app-config.token';
import {StudyDto} from '../../models/study.dto';

@Injectable({
  providedIn: 'root',
})
export class StudyApi {

  private http: HttpClient = inject(HttpClient)
  private config = inject(APP_CONFIG);

  getStudies(): Observable<StudyDto[]> {

    return this.http.get<StudyDto[]>(
      `${this.config.apiUrl}/studies`
    ).pipe(
      catchError(err => {
        console.error('Study API error:', err);
        return of([]);
      })
    );
  }

}


