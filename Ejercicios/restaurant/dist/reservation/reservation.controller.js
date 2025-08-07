"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationController = void 0;
const common_1 = require("@nestjs/common");
const reservation_service_1 = require("./reservation.service");
const reservation_create_dto_1 = require("./dto/reservation-create.dto");
const reservation_update_dto_1 = require("./dto/reservation-update.dto");
let ReservationController = class ReservationController {
    reservationService;
    constructor(reservationService) {
        this.reservationService = reservationService;
    }
    async viewAll() {
        return this.reservationService.viewAll();
    }
    async viewOne(id) {
        return this.reservationService.viewOne(id);
    }
    async createReservation(reservation) {
        return this.reservationService.createReservation(reservation);
    }
    async updateReservation(reservation) {
        try {
            return await this.reservationService.updateReservation(reservation);
        }
        catch (err) {
            return { message: err.meta.cause };
        }
    }
};
exports.ReservationController = ReservationController;
__decorate([
    (0, common_1.Get)('viewall'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReservationController.prototype, "viewAll", null);
__decorate([
    (0, common_1.Get)('viewone'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReservationController.prototype, "viewOne", null);
__decorate([
    (0, common_1.Post)('new'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reservation_create_dto_1.ReservationCreate]),
    __metadata("design:returntype", Promise)
], ReservationController.prototype, "createReservation", null);
__decorate([
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reservation_update_dto_1.ReservationUpdate]),
    __metadata("design:returntype", Promise)
], ReservationController.prototype, "updateReservation", null);
exports.ReservationController = ReservationController = __decorate([
    (0, common_1.Controller)('reservation'),
    __metadata("design:paramtypes", [reservation_service_1.ReservationService])
], ReservationController);
//# sourceMappingURL=reservation.controller.js.map