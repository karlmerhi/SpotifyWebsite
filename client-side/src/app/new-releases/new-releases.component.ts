import { Component, OnInit } from '@angular/core';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css']
})
export class NewReleasesComponent implements OnInit {

  private releaseSub : any;
  public releases : any;

  constructor(private musicDataService : MusicDataService) { 

  }

  ngOnInit(): void {
    this.releaseSub = this.musicDataService.getNewReleases().subscribe((data) => this.releases = data.albums.items);
    console.log(this.releases);
  }

  ngOnDestroy(): void{
    this.releaseSub?.unsubscribe();
  }
}
