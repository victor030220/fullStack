import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservationModule } from './reservation/reservation.module';
import { TableModule } from './table/table.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [ReservationModule, TableModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
