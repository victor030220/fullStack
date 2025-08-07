import { Controller, Get, Post, Body, Delete, Put } from '@nestjs/common';
import { TableService } from './table.service';
import { Table } from './dto/table.dto';
import { TableCreate } from './dto/table-create.dto';
import { msjError } from 'src/common/error-dto/msjError.dto';
import { TableUpdate } from './dto/table-update.dto';

@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Get('viewall')
  public async findAll() {
    return this.tableService.viewAll();
  }

  @Get('viewone')
  public async viewOne(
    @Body('id') id: number,
  ): Promise<Table | msjError | null> {
    try {
      return await this.tableService.viewOne(id);
    } catch (err) {
      return { message: err };
    }
  }

  @Post('new')
  public async newTable(@Body() table: TableCreate): Promise<Table | msjError> {
    try {
      return await this.tableService.createTable(table);
    } catch (err) {
      return { message: err.meta.value };
    }
  }

  @Put('update')
  public async updateTable(
    @Body() table: TableUpdate,
  ): Promise<Table | msjError> {
    try {
      return await this.tableService.updateTable(table);
    } catch (err) {
      return { message: err.meta.value };
    }
  }

  @Delete('delete')
  public async deleteTable(@Body() id: number): Promise<Table | msjError> {
    try {
      return await this.tableService.deleteTable(id);
    } catch (err) {
      return { message: err.meta.value };
    }
  }
}
