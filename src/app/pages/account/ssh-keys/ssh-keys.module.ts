import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SshKeysPage } from './ssh-keys.page';
import {ComponentsModule} from '../../../components/components.module';
import {Clipboard} from '@ionic-native/clipboard/ngx';

const routes: Routes = [
  {
    path: '',
    component: SshKeysPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [SshKeysPage],
  providers: [
    Clipboard
  ]
})
export class SshKeysPageModule {}
