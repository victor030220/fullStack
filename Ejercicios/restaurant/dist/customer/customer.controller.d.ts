import { CustomerService } from './customer.service';
import { Customer } from './dto/customer.dto';
import { CustomerCreate } from './dto/customer-create.dto';
import { CustomerUpdate } from './dto/custumer-update.dto';
import { msjError } from 'src/common/error-dto/msjError.dto';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    viewAll(): Promise<Customer[] | msjError>;
    viewOne(id: number): Promise<Customer | null>;
    newCustomer(customer: CustomerCreate): Promise<Customer>;
    updateCustomer(customer: CustomerUpdate): Promise<Customer | msjError>;
    deleteCustomer(id: number): Promise<Customer | msjError>;
}
