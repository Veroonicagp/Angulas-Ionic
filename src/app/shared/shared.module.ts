import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [ButtonsComponent,
                MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ],
  exports:[ButtonsComponent,
    MenuComponent
  ]
})
export class SharedModule { }
