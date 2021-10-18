import {NgModule} from "@angular/core";
import {LayoutSideComponent} from "./layout-side.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {AboutComponent} from "../../pages/about/about.component";
import { RouterModule } from "@angular/router";
import {PortfolioComponent} from "../../pages/portfolio/portfolio.component";

@NgModule({
  declarations: [LayoutSideComponent, AboutComponent, PortfolioComponent],
  imports: [CommonModule, SharedModule, RouterModule]
})
export class LayoutSideModule {}
