import {Routes} from '@angular/router';
import {MainLayoutComponent} from './shared/layout/main-layout/main-layout.component';

export const routes: Routes = [
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
