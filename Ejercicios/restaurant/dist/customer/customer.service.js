"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../generated/prisma/index.js");
let CustomerService = class CustomerService {
    prisma = new prisma_1.PrismaClient();
    async findAll() {
        try {
            return await this.prisma.customer.findMany();
        }
        catch (err) {
            throw err;
        }
    }
    async findOne(id) {
        return await this.prisma.customer.findUnique({ where: { id } });
    }
    async createCustomer(customer) {
        return await this.prisma.customer.create({
            data: { mail: customer.mail, name: customer.name },
        });
    }
    async updateCustomer(customer) {
        const { id, ...dataNew } = customer;
        try {
            return await this.prisma.customer.update({
                where: { id },
                data: dataNew,
            });
        }
        catch (er) {
            throw er;
        }
    }
    async deleteCustomer(id) {
        try {
            return await this.prisma.customer.delete({ where: { id } });
        }
        catch (err) {
            throw err;
        }
    }
};
exports.CustomerService = CustomerService;
exports.CustomerService = CustomerService = __decorate([
    (0, common_1.Injectable)()
], CustomerService);
//# sourceMappingURL=customer.service.js.map