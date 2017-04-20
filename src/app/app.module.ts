import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule}    from '@angular/http';

import {AppRoutingModule} from "./app-routing.module";

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from './in-memory-data.service';

import {HeroesComponent} from "./components/heroes.component";
import {HeroDetailComponent} from "./components/hero-detail.component";
import {AppComponent} from "./app.components";
import {DashboardComponent} from "./components/dashboard.component";
import {HeroService} from "./services/hero.service";


@NgModule({
  imports: [BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
