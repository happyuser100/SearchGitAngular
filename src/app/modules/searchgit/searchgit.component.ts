import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms'
import { RepositoryService } from "./services/searchgit.service";
import { Observable } from "rxjs/Rx";

import { RepositoryModel } from "../shared/models/repositoryModel";
import { BookmarkModel } from "../shared/models/bookmarkModel";
import { SharingService } from "./services/sharing.service";

@Component({
  selector: 'app-searchgit',
  templateUrl: './searchgit.component.html',
  styleUrls: ['./searchgit.component.scss']
})
export class SearchgitComponent implements OnInit {
  form: FormGroup;
  obsRepos: Observable<RepositoryModel[]>;
  repos: RepositoryModel[];
  //bookmarks: string[];
  public bookmarks: BookmarkModel[] = [];

  constructor(
    private _router : Router,private route : ActivatedRoute,
    public fb: FormBuilder, 
    private repositoryService: RepositoryService,
    private sharingService : SharingService
    )
  {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      repo: ["", Validators.compose([Validators.required, Validators.maxLength(200)])],
    });
  }

  getGitRepository(repository: string) {    
    this.repositoryService.loadRepositories(repository).subscribe(repos => {
        this.repos = repos;
    }
    );
  }

  setBookmark(reponame: string)
  {
    let bookmark : BookmarkModel = new BookmarkModel();
    bookmark.name = reponame;
    this.bookmarks.push(bookmark);     
    alert("Bookmark successfully added!")
    //this.bookmarks.push(reponame);
  }

  getBookmarks()
  {
    this.sharingService.setData(this.bookmarks)
    this._router.navigate(['search/bookmarks']);
  }

}
