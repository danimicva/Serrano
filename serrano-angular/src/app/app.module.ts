import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AutomataComponent } from './componentes/automata/automata.component';
import { FormsModule } from '@angular/forms';
import { ViewerComponent } from './componentes/viewer/viewer.component';
import { PixelViewerComponent } from './componentes/pixel-viewer/pixel-viewer.component';
import { MiniViewerComponent } from './componentes/mini-viewer/mini-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    AutomataComponent,
    ViewerComponent,
    PixelViewerComponent,
    MiniViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
