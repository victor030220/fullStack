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
exports.TableController = void 0;
const common_1 = require("@nestjs/common");
const table_service_1 = require("./table.service");
const table_create_dto_1 = require("./dto/table-create.dto");
const table_update_dto_1 = require("./dto/table-update.dto");
let TableController = class TableController {
    tableService;
    constructor(tableService) {
        this.tableService = tableService;
    }
    async findAll() {
        return this.tableService.viewAll();
    }
    async viewOne(id) {
        try {
            return await this.tableService.viewOne(id);
        }
        catch (err) {
            return { message: err.meta.value };
        }
    }
    async newTable(table) {
        try {
            return await this.tableService.createTable(table);
        }
        catch (err) {
            return { message: err.meta.value };
        }
    }
    async updateTable(table) {
        try {
            return await this.tableService.updateTable(table);
        }
        catch (err) {
            return { message: err.meta.value };
        }
    }
    async deleteTable(id) {
        try {
            return await this.tableService.deleteTable(id);
        }
        catch (err) {
            return { message: err.meta.value };
        }
    }
};
exports.TableController = TableController;
__decorate([
    (0, common_1.Get)('viewall'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TableController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('viewone/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TableController.prototype, "viewOne", null);
__decorate([
    (0, common_1.Post)('new'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [table_create_dto_1.TableCreate]),
    __metadata("design:returntype", Promise)
], TableController.prototype, "newTable", null);
__decorate([
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [table_update_dto_1.TableUpdate]),
    __metadata("design:returntype", Promise)
], TableController.prototype, "updateTable", null);
__decorate([
    (0, common_1.Delete)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TableController.prototype, "deleteTable", null);
exports.TableController = TableController = __decorate([
    (0, common_1.Controller)('table'),
    __metadata("design:paramtypes", [table_service_1.TableService])
], TableController);
//# sourceMappingURL=table.controller.js.map