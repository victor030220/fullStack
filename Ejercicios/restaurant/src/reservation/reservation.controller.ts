import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { Reservation } from './dto/reservation.dto';
import { ReservationCreate } from './dto/reservation-create.dto';
import { ReservationUpdate } from './dto/reservation-update.dto';
import { msjError } from 'src/common/error-dto/msjError.dto';

@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Get('viewall')
  public async viewAll(): Promise<Reservation[]> {
    return this.reservationService.viewAll();
  }

  @Get('viewone/:id')
  public async viewOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Reservation | null> {
    return this.reservationService.viewOne(id);
  }

  @Post('new')
  public async createReservation(
    @Body() reservation: ReservationCreate,
  ): Promise<Reservation> {
    console.log(reservation);
    return this.reservationService.createReservation(reservation);
  }

  @Put('update')
  public async updateReservation(
    @Body() reservation: ReservationUpdate,
  ): Promise<Reservation | msjError> {
    try {
      return await this.reservationService.updateReservation(reservation);
    } catch (err) {
      return { message: err.meta.cause };
    }
  }
}
