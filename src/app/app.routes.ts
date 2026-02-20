import {Routes} from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {MainComponent} from './main/main.component';
import {ObstructionComponent} from './obstruction/obstruction.component';
import {SneakingComponent} from './sneaking/sneaking.component';
import {NaggingComponent} from './nagging/nagging.component';
import {InterfaceInterferenceComponent} from './interface-interference/interface-interference.component';
import {ForcedActionComponent} from './forced-action/forced-action.component';

export const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'about', component: AboutComponent},
  {path: 'nagging', component: NaggingComponent},
  {path: 'obstruction', component: ObstructionComponent},
  {path: 'sneaking', component: SneakingComponent},
  {path:'interface-interference', component: InterfaceInterferenceComponent},
  {path:'forced-action', component: ForcedActionComponent},

];
