import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';
import { Book } from './dto/book.dto';
import { User } from './dto/user.dto';
import { Loan } from './dto/loan.dto';

@Injectable()
export class LibraryApiService {
  private prisma = new PrismaClient();

  async allTheBooks(): Promise<Book[]> {
    return this.prisma.book.findMany();
  }

  async allTheUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async allBooksAvailable(): Promise<Book[]> {
    return this.prisma.book.findMany({ where: { available: true } });
  }

  async insertUser(newUser: Omit<User, 'id'>): Promise<User> {
    return this.prisma.user.create({ data: newUser });
  }

  async insertBook(newBook: Omit<Book, 'id'>) {
    return this.prisma.book.create({
      data: {
        author: newBook.author,
        title: newBook.title,
        published: new Date(newBook.published),
        available: newBook.available,
      },
    });
  }

  async insertLoan(newLoan: Omit<Loan, 'id'>) {
    return this.prisma.loan.create({
      data: {
        userId: newLoan.userId,
        bookId: newLoan.bookId,
        loanDate: new Date(),
      },
    });
  }

  async loanHistory(id: number): Promise<Loan[]> {
    return this.prisma.loan.findMany({
      where: { userId: id },
      include: { user: true, book: true },
    });
  }

  async registerReturn(idLoan: number) {
    return this.prisma.loan.update({
      where: { id: idLoan },
      data: { returnDate: new Date() },
    });
  }
}
