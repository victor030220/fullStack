import { Reservation } from './dto/reservation.dto';
import { ReservationCreate } from './dto/reservation-create.dto';
import { ReservationUpdate } from './dto/reservation-update.dto';
export declare class ReservationService {
    private prisma;
    viewAll(): Promise<Reservation[]>;
    viewOne(id: number): Promise<Reservation | null>;
    createReservation(reservation: ReservationCreate): Promise<Reservation>;
    updateReservation(reservation: ReservationUpdate): Promise<Reservation>;
}
