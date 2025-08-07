import { Table } from './dto/table.dto';
import { TableCreate } from './dto/table-create.dto';
import { TableUpdate } from './dto/table-update.dto';
export declare class TableService {
    private prisma;
    viewAll(): Promise<Table[]>;
    viewOne(id: number): Promise<Table | null>;
    createTable(table: TableCreate): Promise<Table>;
    updateTable(table: TableUpdate): Promise<Table>;
    deleteTable(id: number): Promise<Table>;
}
