import { Catch, Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';
import { Reservation } from './dto/reservation.dto';
import { ReservationCreate } from './dto/reservation-create.dto';
import { ReservationUpdate } from './dto/reservation-update.dto';

@Injectable()
export class ReservationService {
  private prisma = new PrismaClient();

  public async viewAll(): Promise<Reservation[]> {
    return this.prisma.reservation.findMany();
  }

  public async viewOne(id: number): Promise<Reservation | null> {
    return this.prisma.reservation.findUnique({ where: { id } });
  }

  public async createReservation(
    reservation: ReservationCreate,
  ): Promise<Reservation> {
    return this.prisma.reservation.create({
      data: {
        id_Customer: reservation.idCustomer,
        date: new Date(),
        id_Table: reservation.idTable,
      },
    });
  }

  public async updateReservation(
    reservation: ReservationUpdate,
  ): Promise<Reservation> {
    const { id, ...newData } = reservation;
    try {
      return await this.prisma.reservation.update({
        where: { id },
        data: newData,
      });
    } catch (err) {
      throw err;
    }
  }
}
