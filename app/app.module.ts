import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';


import { AppComponent }  from './app.component';
import { SpinnerComponent }  from './spinner.component';
import { CloudIntegrationsComponent } from './cloud-integrations.component'
import { CloudIntegrationsScrollComponent } from './cloud-integrations-scroll.component'
import { IntegrationService } from './integration.service'
import { routing } from './app.routing';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { IntegrationsNewForm } from './cloud-integrations-new-form';


import './rxjs-extensions';

@NgModule({
   imports: [
    BrowserModule,
    Ng2BootstrapModule,
    InfiniteScrollModule,
    FormsModule,
    routing,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    ReactiveFormsModule
  ],
  declarations: [ AppComponent, CloudIntegrationsComponent, CloudIntegrationsScrollComponent, IntegrationsNewForm, SpinnerComponent],
  providers: [
    IntegrationService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
