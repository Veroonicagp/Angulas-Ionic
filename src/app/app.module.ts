import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { GroupsService } from './core/services/impl/groups.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { PEOPLE_API_URL_TOKEN, PEOPLE_REPOSITORY_MAPPING_TOKEN, PEOPLE_RESOURCE_NAME_TOKEN } from './core/repositories/repository.tokens';
import { PeopleMappingJsonServer } from './core/repositories/impl/people-mapping-json-server.service';
import { PeopleRepositoryFactory } from './core/repositories/repository.factory';
import { PeopleService } from './core/services/impl/people.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule,
     ReactiveFormsModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  provideHttpClient(),

  { provide: PEOPLE_RESOURCE_NAME_TOKEN, useValue: 'personas' },
  { provide: PEOPLE_RESOURCE_NAME_TOKEN, useValue: 'grupos' },
  { provide: PEOPLE_API_URL_TOKEN, useValue: 'http://localhost:3000' },
  { provide: PEOPLE_API_URL_TOKEN, useValue: 'http://localhost:3000' },
  { 
    provide: PEOPLE_REPOSITORY_MAPPING_TOKEN, 
    useClass: PeopleMappingJsonServer
  },
  { 
    provide: PEOPLE_REPOSITORY_MAPPING_TOKEN, 
    useClass: PeopleMappingJsonServer
  },
  PeopleRepositoryFactory,
  PeopleRepositoryFactory,
  // Registrar otros repositorios según sea necesario
  // Servicios de aplicación
  {
    provide: 'PeopleService',
    useClass: PeopleService
  },
  {
    provide: 'GroupsService',
    useClass: GroupsService
  }

],
  bootstrap: [AppComponent],
})
export class AppModule {}
