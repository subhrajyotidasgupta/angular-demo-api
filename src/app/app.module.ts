import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewsService } from './reviews/reviews.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ReviewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
