import { NgModule }                            from '@angular/core';
import { CommonModule }                        from '@angular/common';
import { FormsModule,ReactiveFormsModule }     from '@angular/forms';

import { SearchGitRoutingModule }            from './searchgit-routing.module';
import { SearchgitComponent }                from './searchgit.component';
import { RepositoryService } from "./services/searchgit.service";
import { HttpService } from "../core/services/http.service";
import { SharingService } from "./services/sharing.service";
import { BookmarksgitComponent } from "./bookmarksgit.component";

@NgModule({
  imports: [CommonModule,
            SearchGitRoutingModule,
            FormsModule,ReactiveFormsModule,
  ],
  declarations: [ SearchgitComponent,BookmarksgitComponent,],
  providers: [RepositoryService,SharingService,HttpService]
})
export class SearchGitBookModule { }
