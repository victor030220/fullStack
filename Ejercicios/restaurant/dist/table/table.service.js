"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../generated/prisma/index.js");
let TableService = class TableService {
    prisma = new prisma_1.PrismaClient();
    async viewAll() {
        return this.prisma.table.findMany();
    }
    async viewOne(id) {
        try {
            return this.prisma.table.findUnique({ where: { id } });
        }
        catch (err) {
            throw err;
        }
    }
    async createTable(table) {
        return this.prisma.table.create({
            data: { ability: table.ability, description: table.description },
        });
    }
    async updateTable(table) {
        const { id, ...newData } = table;
        try {
            return await this.prisma.table.update({ where: { id }, data: newData });
        }
        catch (err) {
            throw err;
        }
    }
    async deleteTable(id) {
        try {
            return await this.prisma.table.delete({ where: { id } });
        }
        catch (err) {
            throw err;
        }
    }
};
exports.TableService = TableService;
exports.TableService = TableService = __decorate([
    (0, common_1.Injectable)()
], TableService);
//# sourceMappingURL=table.service.js.map