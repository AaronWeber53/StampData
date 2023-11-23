import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StampCardListComponent } from './stamp/stamp-card-list/stamp-card-list.component';

const routes: Routes = [
  { path: 'stamp', component: StampCardListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
