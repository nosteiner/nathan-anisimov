import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from 'src/app/data.service';
import { HeaderComponent } from './components/header/header.component';
import { ImageComponent } from './components/image/image.component';
import { NgModule } from '@angular/core';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SingleSiteComponent } from './components/single-site/single-site.component';
import { SwiperModule } from "swiper/angular";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    ImageComponent,
    SingleSiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
