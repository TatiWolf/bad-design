import {ChangeDetectionStrategy, Component, inject, Signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {StudyService} from '../services/study.service';
import {Study} from '../models/study.model';

@Component({
  selector: 'app-study',
  imports: [],
  templateUrl: './study.component.html',
  styleUrl: './study.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class StudyComponent {

  protected readonly images = [
    'study/study-1.svg',
    'study/study-2.svg',
    'study/study-3.svg',
    'study/study-4.svg',
    'study/study-5.svg',
    'study/study-6.svg'
  ];

  private readonly studyService: StudyService = inject(StudyService);

  readonly studies: Signal<Study[]> = toSignal(
    this.studyService.getStudies(),
    {initialValue: []}
  );

}
