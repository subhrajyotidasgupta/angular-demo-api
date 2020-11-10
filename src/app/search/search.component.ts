import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { ReviewsService } from '../reviews/reviews.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('f') searchForm: NgForm;

  constructor(private http: HttpClient,
              private reviewsService: ReviewsService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.fetchReviews(this.searchForm.value.movie);
  }

  private fetchReviews(movie) {
    this.http
      .get('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + movie + '&api-key=82d9xqsG1qYOamnQd4az8MlbhEalqGsf')
      .subscribe(reviews => {
        this.reviewsService.addReviews(reviews['results']);
        console.log(reviews['results']);
      })
  }

}
