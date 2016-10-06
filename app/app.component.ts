import { Component, ViewContainerRef } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
    selector: 'my-app',
    template: ` 
    <nav align="center">
        <a routerLink="/integrations" routerLinkActive="active">Cloud Integrations</a>
        <a routerLink="/integrationsscroll" routerLinkActive="active">Cloud Integrations Scroll</a>
        <br />
        <br />
       </nav> 
       <nav>
        <router-outlet></router-outlet> 
        </nav>
         
   `,
  styleUrls: ['app/app.component.css']
})

export class AppComponent { 

    title = 'iHub';
    // for ng2-bootstrap modal
    private viewContainerRef: ViewContainerRef;
    

    // You need this small hack in order to catch application root view container ref (for ng2-bootstrap modal)
    public constructor(viewContainerRef:ViewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }

}
