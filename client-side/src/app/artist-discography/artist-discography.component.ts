import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.css']
})
export class ArtistDiscographyComponent implements OnInit {

  private albumSub : any;
  private artistSub : any;

  public albums : any;
  public artist : any;
  public temp : any;
  public id : any;

  constructor(private route: ActivatedRoute, private musicDataService: MusicDataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })

    this.artistSub = this.musicDataService.getArtistById(this.id).subscribe(data => this.artist = data);
    this.albumSub = this.musicDataService.getAlbumsByArtistId(this.id).subscribe(data => this.albums = data.items.filter((curValue:any, index: any, self: any) => self.findIndex((t: { name: any; }) => t.name.toUpperCase() === curValue.name.toUpperCase()) === index))
  }

  ngOnDestroy(): void{
    this.albumSub?.unsubscribe();
    this.artistSub?.unsubscribe();
  }

}
