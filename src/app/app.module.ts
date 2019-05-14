import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Material modules
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { HttpClientXsrfModule } from '@angular/common/http';
import {
  HomeComponent,
  ProfileComponent,
  BoardComponent,
  ListComponent,
} from './pages';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TasksApiService } from './tasks/services/tasks-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    BoardComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFToken',
    }),

    // Material modules
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    DragDropModule,
  ],
  providers: [
    TasksApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
