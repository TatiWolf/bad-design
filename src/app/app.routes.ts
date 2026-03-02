import {Routes} from '@angular/router';
import {MainLayoutComponent} from './shared/layout/main-layout/main-layout.component';
import {ErrorLayoutComponent} from './shared/layout/error-layout/error-layout.component';

export const routes: Routes = [
  {path:'error', component: ErrorLayoutComponent},
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', loadComponent: () =>
          import('./features/main/main.component')
            .then(m => m.MainComponent)
      },

      { path: 'about', loadComponent: () =>
          import('./features/about/about.component')
            .then(m => m.AboutComponent)
      },
      {
        path: 'study',
        loadComponent: () =>
          import('./features/study/page/study.component')
            .then(m => m.StudyComponent)
      },
      {
        path: ':type',
        loadComponent: () =>
          import('./features/dark-pattern/pages/dark-pattern-list/dark-pattern-list.component')
            .then(m => m.DarkPatternListComponent)
      },
      {
        path: ':type/:id',
        loadComponent: () =>
          import('./features/dark-pattern/pages/dark-pattern-details/dark-pattern-details.component')
            .then(m => m.DarkPatternDetailsComponent)
      }
    ]
  }
];
