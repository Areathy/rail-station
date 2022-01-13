import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsComponent } from './component/tickets/tickets.component';

const routes: Routes = [
  { path: "rail", component: TicketsComponent },
  // { path: "", redirectTo: "/tickets", pathMatch: "full" },
  // { path: "**", redirectTo: "/tickets", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

