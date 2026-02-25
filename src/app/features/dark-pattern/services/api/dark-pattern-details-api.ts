import {inject, Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../core/config/app-config.token';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {DarkPatternDto} from '../../pages/models/dark-pattern-dto';
import {DarkPatternType, getDarkPatternBySlug} from '../../pages/models/dark-pattern.type';
const darkPattern: DarkPatternDto = {
  id: '1',
  title: 'Замаскированное продвижение',
  titleOnAnotherLanguage:'Disguised Ads / Promos',
  subtitle: 'Сокрытие (Sneaking)',
  descriptions: ['манипулятивная практика, при которой рекламные или коммерческие материалы намеренно оформляются как нативные элементы интерфейса: новости, рекомендации, посты, кнопки системы, результаты поиска или контент других пользователей. Главная техника — маскировка коммерческой цели под обычный функционал.', 'Визуальное и смысловое оформление делается максимально похожим на естественный интерфейс: те же цвета, структура карточек, тайпскейл, подписи, иконки, расположение.'],
  keyMechanics: ['Замаскированное продвижение воздействует на пользователя через искажение источника и намерения информации, создавая ситуацию, в которой рекламный материал воспринимается как нейтральный, органический или рекомендательный контент платформы.', 'Механика построена на двойном когнитивном подменивании: подмене источника (кто создал контент) и подмене мотивов (зачем он показан).'],
  keyMechanicsVideo: '/videos/sneaking.mp4',
  consequencesForTheUser: ['Утрата доверия к платформе после обнаружения обмана', 'Рост общей утомляемости от интерфейса', 'Риск формирования привычки не распознавать рекламные сигналы'],
  alternatives: ['Ясная пометка «Реклама» / «Промо» без попыток стилизовать под интерфейс', 'Возможность отключить персонализированные промо', 'Рекламные карточки оформлены в иной цветовой схеме или имеют отличающуюся структуру', 'Возможность отключить персонализированные промо', 'Иконки и подписи однозначно сообщают о природе материала', 'Краткое сообщение о том, почему именно эта реклама показана пользователю'],
  previousDarkPattern:{
    id:'0',
    title:'Скрытая стоимость'
  },
  nextDarkPattern:{
    id:'2',
    title:'Непрозрачное согласие'
  },
}



@Injectable({
  providedIn: 'root',

})
export class DarkPatternDetailsApi {
  // private http: HttpClient = inject(HttpClient)
  // private config = inject(APP_CONFIG);

  getDarkPatternDetailsById(
    catalogSlug: DarkPatternType,
    darkPatternId: number
  ): Observable<DarkPatternDto | null> {

    const catalog = getDarkPatternBySlug(catalogSlug);

    if (!catalog) {
      console.warn('Invalid catalog slug:', catalogSlug);
      return of(null);
    }

    const parsedId = Number(darkPatternId);

    if (Number.isNaN(parsedId)) {
      console.warn('Invalid darkPatternId:', darkPatternId);
      return of(null);
    }

    // MOCK
    return of(darkPattern);

    // REAL API
    // return this.http.get<DarkPatternDto>(
    //   `${this.config.apiUrl}/dark-patterns-catalog/${catalog.id}/${parsedId}`
    // );
  }

}
