import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';
import { Customer } from './dto/customer.dto';
import { CustomerUpdate } from './dto/custumer-update.dto';
import { CustomerCreate } from './dto/customer-create.dto';

@Injectable()
export class CustomerService {
  private prisma = new PrismaClient();

  public async findAll(): Promise<Customer[]> {
    try {
      return await this.prisma.customer.findMany();
    } catch (err) {
      throw err;
    }
  }

  public async findOne(id: number): Promise<Customer | null> {
    return await this.prisma.customer.findUnique({ where: { id } });
  }

  public async createCustomer(customer: CustomerCreate): Promise<Customer> {
    return await this.prisma.customer.create({
      data: { mail: customer.mail, name: customer.name },
    });
  }

  public async updateCustomer(customer: CustomerUpdate): Promise<Customer> {
    const { id, ...dataNew } = customer;
    try {
      return await this.prisma.customer.update({
        where: { id },
        data: dataNew,
      });
    } catch (er) {
      throw er;
    }
  }

  public async deleteCustomer(id: number): Promise<Customer> {
    try {
      return await this.prisma.customer.delete({ where: { id } });
    } catch (err) {
      throw err;
    }
  }
}
