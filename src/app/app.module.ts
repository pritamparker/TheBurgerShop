import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { LeftPanelComponent } from './dashboard/left-panel/left-panel.component';
import { MainPanelComponent } from './dashboard/main-panel/main-panel.component';
import { ApiService } from './_services/api.service';
import { SingleItemComponent } from './dashboard/main-panel/single-item/single-item.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftPanelComponent,
    MainPanelComponent,
    SingleItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
