import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CustomUppercasePipe } from './pipes/custom-uppercase.pipe';
import { TeamPipe } from './pipes/team.pipe';
import { OrderPipe } from './pipes/order.pipe';

@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    OrderComponent,
    CustomUppercasePipe,
    TeamPipe,
    OrderPipe,
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    OrderComponent,
  ],
})
export class SalesModule {}
