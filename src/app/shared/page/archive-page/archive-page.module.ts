import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchivePageRoutingModule } from './archive-page-routing.module';
import { ArchivePageComponent } from './archive-page.component';
import { NoteComponent } from './components/note/note.component';
import {MatIconModule} from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu'

@NgModule({
  declarations: [ArchivePageComponent, NoteComponent],
  imports: [
    CommonModule,
    ArchivePageRoutingModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class ArchivePageModule { }
