import { Customer } from './dto/customer.dto';
import { CustomerUpdate } from './dto/custumer-update.dto';
import { CustomerCreate } from './dto/customer-create.dto';
export declare class CustomerService {
    private prisma;
    findAll(): Promise<Customer[]>;
    findOne(id: number): Promise<Customer | null>;
    createCustomer(customer: CustomerCreate): Promise<Customer>;
    updateCustomer(customer: CustomerUpdate): Promise<Customer>;
    deleteCustomer(id: number): Promise<Customer>;
}
