import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './heros/hero-list/hero-list.component';
import { AddHeroComponent } from './heros/add-hero/add-hero.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateHeroComponent } from './heros/update-hero/update-hero.component';

const routes: Routes = [
  {path:'',redirectTo:'hero-list', pathMatch:'full'},
  {path:'hero-list', component:HeroListComponent},
  {path:'add-hero', component:AddHeroComponent},
  {path:'update-hero/:id', component:UpdateHeroComponent},


  {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
