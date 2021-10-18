import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {AboutComponent} from "./pages/about/about.component";
import {LayoutFullComponent} from "./layouts/layout-full/layout-full.component";
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";
import {LayoutSideComponent} from "./layouts/layout-side/layout-side.component";
import {FaqComponent} from "./pages/faq/faq.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutFullComponent,
    children: [
      {
        path: "",
        component: DashboardComponent,
      },
      {
        path: 'about-us',
        component: AboutComponent,
      },
      {
        path: "faq",
        component: FaqComponent,
      }
    ]
  },
  {
    path: "",
    component: LayoutSideComponent,
    children: [
      {
        path: "portfolio",
        component: PortfolioComponent,
      }
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
