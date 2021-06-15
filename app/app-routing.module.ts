import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedComponent } from './pages/completed/completed.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NoteDetailsComponent } from './pages/note-details/note-details.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UpcomingComponent } from './pages/upcoming/upcoming.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
    { path: 'note-list', component: NotesListComponent },
    { path: 'create-note', component: NoteDetailsComponent},
    { path: 'side-bar', component: SideBarComponent},
    { path: 'completed', component: CompletedComponent},
    { path: 'upcoming', component: UpcomingComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
