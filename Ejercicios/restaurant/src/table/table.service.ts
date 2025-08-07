import { Body, Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';
import { Table } from './dto/table.dto';
import { TableCreate } from './dto/table-create.dto';
import { TableUpdate } from './dto/table-update.dto';

@Injectable()
export class TableService {
  private prisma = new PrismaClient();

  public async viewAll(): Promise<Table[]> {
    return this.prisma.table.findMany();
  }

  public async viewOne(id: number): Promise<Table | null> {
    try {
      return this.prisma.table.findUnique({ where: { id } });
    } catch (err) {
      throw err;
    }
  }

  public async createTable(table: TableCreate): Promise<Table> {
    return this.prisma.table.create({
      data: { ability: table.ability, description: table.description },
    });
  }

  public async updateTable(table: TableUpdate): Promise<Table> {
    const { id, ...newData } = table;
    try {
      return await this.prisma.table.update({ where: { id }, data: newData });
    } catch (err) {
      throw err;
    }
  }

  public async deleteTable(id: number): Promise<Table> {
    try {
      return await this.prisma.table.delete({ where: { id } });
    } catch (err) {
      throw err;
    }
  }
}
