import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {AlbumsService} from "../../services/albums.service";
import {Album} from "../../album";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit, OnDestroy, OnChanges {
  @Input() newUser: boolean;

  //This is Dependency Injection
  constructor(private albumsService: AlbumsService) { }

  albumBackUpp:Album[] = [];
  albums:Album[] = [];
  albumsSub:any;


  ngOnInit(): void {
    this.albumsSub = this.albumsService.getAlbums()
      .subscribe((data:Album[]) => {
        this.albumBackUpp = data;
        this.albums = this.albumBackUpp.slice(0, 10);
    })
  }


  ngOnDestroy() {
    this.albumsSub.unsubscribe();
  }


  ngOnChanges(changes: SimpleChanges) {
    if(!this.newUser) {
      this.albums = this.albumBackUpp.slice(0, 4);
    }else {
      this.albums = this.albumBackUpp.slice(0, 10);
    }

  }

}
