import { TableService } from './table.service';
import { Table } from './dto/table.dto';
import { TableCreate } from './dto/table-create.dto';
import { msjError } from 'src/common/error-dto/msjError.dto';
import { TableUpdate } from './dto/table-update.dto';
export declare class TableController {
    private readonly tableService;
    constructor(tableService: TableService);
    findAll(): Promise<Table[]>;
    viewOne(id: number): Promise<Table | msjError | null>;
    newTable(table: TableCreate): Promise<Table | msjError>;
    updateTable(table: TableUpdate): Promise<Table | msjError>;
    deleteTable(id: number): Promise<Table | msjError>;
}
