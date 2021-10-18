import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {RouterModule} from "@angular/router";
import { HomeInfoComponent } from './components/home-info/home-info.component';
import { HomePorfolioComponent } from './components/home-porfolio/home-porfolio.component';
import { PortfolioItemComponent } from './components/porfolio-item/portfolio-item.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    HomeInfoComponent,
    HomePorfolioComponent,
    PortfolioItemComponent
  ],
    imports: [
      CommonModule,
      RouterModule,
      MDBBootstrapModule.forRoot()
    ],
    exports: [
      FooterComponent,
      HeaderComponent,
      SidebarComponent,
      HomeInfoComponent,
      HomePorfolioComponent
    ]
})

export class SharedModule { }
