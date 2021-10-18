import {NgModule} from "@angular/core";
import {LayoutFullComponent} from "./layout-full.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {DashboardComponent} from "../../pages/dashboard/dashboard.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [LayoutFullComponent, DashboardComponent],
  imports: [CommonModule, SharedModule, RouterModule]
})
export class LayoutFullModule {}
