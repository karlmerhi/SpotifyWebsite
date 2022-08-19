import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  public results: any;
  public searchQuery: any;

  private resultsSub: any;
  private searchQuerySub: any;

  constructor(
    private route: ActivatedRoute,
    private musicDataService: MusicDataService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['q'];
    });

    this.results = this.musicDataService
      .searchArtists(this.searchQuery)
      .subscribe((data) => {
        this.results = data.artists.items.filter(
          (item) => item.images.length > 0
        );
      });
  }

  ngOnDestroy(): void {
    this.resultsSub?.unsubscribe();
    this.searchQuerySub?.unsubscribe();
  }
}
