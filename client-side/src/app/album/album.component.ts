import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MusicDataService } from '../music-data.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  private albumSub: any;
  album : any;

  constructor(private snackBar : MatSnackBar, private musicDataService : MusicDataService, private route : ActivatedRoute) {  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.albumSub = this.musicDataService.getAlbumById(id).subscribe(data=> this.album = data);
  }

  addToFavourites(trackID:any){
    this.musicDataService.addToFavourites(trackID).subscribe(
      (_success) => {
        this.snackBar.open("Adding to Favourites...", "Done", { duration: 1500 });
      }, (_err) => {
        this.snackBar.open("Unable to add song to Favourites", "Done", { duration: 1500 });
      }
    ) 
   }

   ngOnDestroy(): void{
    this.albumSub?.unsubscribe();
  }
 }
 
