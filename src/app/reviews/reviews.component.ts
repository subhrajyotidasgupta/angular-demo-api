import { Component, OnInit } from '@angular/core';
import { ReviewsService } from './reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: [];

  constructor(private reviewsService: ReviewsService) {
    this.reviewsService.reviewAdded.subscribe(
      (reviewsFromAPI) => {
        this.reviews = reviewsFromAPI;
      }
    )
   }

  ngOnInit(): void {
    this.reviews = this.reviewsService.getReviews();
  }

}
