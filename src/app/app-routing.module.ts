import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'note-page', loadChildren: () => import('./shared/page/note-page/note-page.module').then(m => m.NotePageModule) },
  { path: 'trash-page', loadChildren: () => import('./shared/page/trash-page/trash-page.module').then(m => m.TrashPageModule) },
  { path: 'archive-page', loadChildren: () => import('./shared/page/archive-page/archive-page.module').then(m => m.ArchivePageModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
