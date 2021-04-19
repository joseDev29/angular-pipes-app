import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MenubarComponent } from './menubar/menubar.component';

@NgModule({
  declarations: [MenubarComponent],
  imports: [PrimeNgModule],
  exports: [MenubarComponent],
})
export class SharedModule {}
