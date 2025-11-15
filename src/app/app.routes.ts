import { Routes } from '@angular/router';
import { TwentyComponent } from './components/twenty/twenty.component';
import { TwentyMinusComponent } from './components/twentyMinus/twentyMinus.component';
import { HundredComponent } from './components/hundred/hundred.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'twentyMinus', component: TwentyMinusComponent },
  { path: 'twenty', component: TwentyComponent },
  { path: 'hundred', component: HundredComponent },
];
