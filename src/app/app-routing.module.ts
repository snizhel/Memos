import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'note-page', loadChildren: () => import('./shared/page/note-page/note-page.module').then(m => m.NotePageModule) },
  { path: 'trash-page', loadChildren: () => import('./shared/page/trash-page/trash-page.module').then(m => m.TrashPageModule) },
  { path: 'signin-page', loadChildren: () => import('./shared/page/signin-page/signin-page.module').then(m => m.SigninPageModule) },
  { path: 'register-page', loadChildren: () => import('./shared/page/register-page/register-page.module').then(m => m.RegisterPageModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
