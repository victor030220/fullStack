"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../generated/prisma/index.js");
let ReservationService = class ReservationService {
    prisma = new prisma_1.PrismaClient();
    async viewAll() {
        return this.prisma.reservation.findMany();
    }
    async viewOne(id) {
        return this.prisma.reservation.findUnique({ where: { id } });
    }
    async createReservation(reservation) {
        return this.prisma.reservation.create({
            data: {
                id_Customer: reservation.idCustomer,
                date: new Date(),
                id_Table: reservation.idTable,
            },
        });
    }
    async updateReservation(reservation) {
        const { id, ...newData } = reservation;
        try {
            return await this.prisma.reservation.update({
                where: { id },
                data: newData,
            });
        }
        catch (err) {
            throw err;
        }
    }
};
exports.ReservationService = ReservationService;
exports.ReservationService = ReservationService = __decorate([
    (0, common_1.Injectable)()
], ReservationService);
//# sourceMappingURL=reservation.service.js.map