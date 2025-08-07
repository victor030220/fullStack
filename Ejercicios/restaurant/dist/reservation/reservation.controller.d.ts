import { ReservationService } from './reservation.service';
import { Reservation } from './dto/reservation.dto';
import { ReservationCreate } from './dto/reservation-create.dto';
import { ReservationUpdate } from './dto/reservation-update.dto';
import { msjError } from 'src/common/error-dto/msjError.dto';
export declare class ReservationController {
    private readonly reservationService;
    constructor(reservationService: ReservationService);
    viewAll(): Promise<Reservation[]>;
    viewOne(id: number): Promise<Reservation | null>;
    createReservation(reservation: ReservationCreate): Promise<Reservation>;
    updateReservation(reservation: ReservationUpdate): Promise<Reservation | msjError>;
}
