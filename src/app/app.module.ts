import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { TableComponent } from './components/table/table.component';
import { TableListComponent } from './components/table-list/table-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    TableComponent,
    TableListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
