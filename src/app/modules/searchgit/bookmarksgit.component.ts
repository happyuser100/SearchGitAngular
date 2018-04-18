import { Component, OnInit, Input } from '@angular/core';
import { BookmarkModel } from "../shared/models/bookmarkModel";
import { SharingService } from "./services/sharing.service";

@Component({
  selector: 'bookmarksgit',
  templateUrl: './bookmarksgit.component.html',
  styleUrls: ['./bookmarksgit.component.scss']
})
export class BookmarksgitComponent implements OnInit {
  //@Input() bookmarks : BookmarkModel[];  
  bookmarks : BookmarkModel[];  
  constructor(private sharingService : SharingService) {  }

  ngOnInit() {
    this.bookmarks = this.sharingService.getData();
  }

}
