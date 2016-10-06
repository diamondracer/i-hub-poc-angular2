import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';


// todo: change to ng2-bootstrap
import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';

import { IntegrationEntity } from './integration-entity';
import { IntegrationService } from './integration.service';
import { IntegrationsNewForm } from './cloud-integrations-new-form';



//let template = require('./modal-demo.html');


 @Component({
  selector: 'cloud-integrations',
  templateUrl: 'app/cloud-integrations.component.html',
  styleUrls:  ['app/cloud-integrations.component.css'],
  providers: [IntegrationService]
})

export class CloudIntegrationsComponent implements OnInit{
  @ViewChild('childModal') public childModal:ModalDirective;
  
  title = 'Cloud Integrations';
  integrationCollection: IntegrationEntity[];
  integration: IntegrationEntity;
  

  constructor (
    private router: Router,
    private integrationService: IntegrationService) {}

  getIntegrations(): void {
    this.integrationService.getIntegrations().then(integrationCollection => this.integrationCollection = integrationCollection.sort((
      a,b) => {if (a.id < b.id) return 1; else return -1;}));
  }

   ngOnInit(): void {
    this.getIntegrations();
    
  }
 
  public showChildModal():void {
    this.childModal.show();
   //alert('yo');
  }
 
  public hideChildModal():void {
    this.childModal.hide();
    //this.getIntegrations();
  }

  integrationCreated(integ: IntegrationEntity)
  {
    
    this.integrationCollection.unshift(integ);
    this.hideChildModal();
  }

  setStatusStyles()
  {
     let styles = {
      'color':  'red'
     };
     return styles;
  }
  
}

  

  



