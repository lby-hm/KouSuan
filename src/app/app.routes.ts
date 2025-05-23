import { Routes } from '@angular/router';
import { TwentyComponent } from './twenty/twenty.component';
import { HundredComponent } from './hundred/hundred.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'twenty', component: TwentyComponent },
  { path: 'hundred', component: HundredComponent },
];
