import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

class Catalog {
  id: number;
  name:string;
  link: string;
  constructor(id: number, name: string, link: string) {
    this.id = id;
    this.name = name;
    this.link = link;
  }
}

@Component({
  selector: 'app-side-bar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent {

  catalog:Catalog[] =[
    new Catalog(1,'Навязчивость (Nagging)','nagging'),
    new Catalog(2,'Препятствия (Obstruction)','obstruction'),
    new Catalog(3,'Сокрытие (Sneaking)','sneaking'),
    new Catalog(4,'Манипуляция интерфейсом (Interface Interference)','interface-interference'),
    new Catalog(5,'Принуждение к действию (Forced Action)','forced-action'),
  ]

}
