import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchgitComponent } from './searchgit.component';
import { BookmarksgitComponent } from "./bookmarksgit.component";

const routes: Routes = [
  {path: '',  
   children: [
            { path: '', component: SearchgitComponent,},
            { path: 'bookmarks', component: BookmarksgitComponent},
        ]
    }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchGitRoutingModule { }
