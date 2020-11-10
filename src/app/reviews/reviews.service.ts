import { EventEmitter } from '@angular/core';

export class ReviewsService {
    private reviews: [];
    reviewAdded = new EventEmitter<[]>();

    addReviews(reviewsFromAPI) {
        this.reviews = reviewsFromAPI;
        this.reviewAdded.emit(this.reviews);
    }

    getReviews() {
        return this.reviews;
    }
}