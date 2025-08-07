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
exports.CustomerController = void 0;
const common_1 = require("@nestjs/common");
const customer_service_1 = require("./customer.service");
const customer_create_dto_1 = require("./dto/customer-create.dto");
const custumer_update_dto_1 = require("./dto/custumer-update.dto");
let CustomerController = class CustomerController {
    customerService;
    constructor(customerService) {
        this.customerService = customerService;
    }
    async viewAll() {
        try {
            return await this.customerService.findAll();
        }
        catch (err) {
            return { message: err.meta.cause };
        }
    }
    async viewOne(id) {
        return this.customerService.findOne(id);
    }
    async newCustomer(customer) {
        return this.customerService.createCustomer(customer);
    }
    async updateCustomer(customer) {
        try {
            return await this.customerService.updateCustomer(customer);
        }
        catch (err) {
            return { message: err };
        }
    }
    async deleteCustomer(id) {
        try {
            return await this.customerService.deleteCustomer(id);
        }
        catch (err) {
            return { message: err };
        }
    }
};
exports.CustomerController = CustomerController;
__decorate([
    (0, common_1.Get)('viewall'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "viewAll", null);
__decorate([
    (0, common_1.Get)('viewone'),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "viewOne", null);
__decorate([
    (0, common_1.Post)('new'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_create_dto_1.CustomerCreate]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "newCustomer", null);
__decorate([
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [custumer_update_dto_1.CustomerUpdate]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "updateCustomer", null);
__decorate([
    (0, common_1.Delete)('delete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "deleteCustomer", null);
exports.CustomerController = CustomerController = __decorate([
    (0, common_1.Controller)('customer'),
    __metadata("design:paramtypes", [customer_service_1.CustomerService])
], CustomerController);
//# sourceMappingURL=customer.controller.js.map