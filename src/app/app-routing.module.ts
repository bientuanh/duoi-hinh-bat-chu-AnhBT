import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuPageComponent } from './menu-page/menu-page.component';
import { PlayGamePageComponent } from './play-game-page/play-game-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuPageComponent },
  { path: 'play-game', component: PlayGamePageComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
