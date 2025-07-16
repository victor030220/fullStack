import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { LibraryApiService } from './library_api.service';
import { User } from './dto/user.dto';
import { Book } from './dto/book.dto';
import { Loan } from './dto/loan.dto';

@Controller('library')
export class LibraryApiController {
  constructor(private readonly libraryApiService: LibraryApiService) {}

  @Get('allbooks')
  allTheBooks() {
    return this.libraryApiService.allTheBooks();
  }

  @Get('allusers')
  allTheUsers() {
    return this.libraryApiService.allTheUsers();
  }

  @Get('booksavailable')
  booksAvailable() {
    return this.libraryApiService.allBooksAvailable();
  }

  @Get('loanhistory')
  loanHistory(@Body('id') id: number) {
    return this.libraryApiService.loanHistory(id);
  }

  @Post('newuser')
  insertUser(@Body() newUser: Omit<User, 'id'>) {
    this.libraryApiService.insertUser(newUser);
    return { response: `Se inserto al usuario ${newUser.name} con exito` };
  }

  @Post('newbook')
  insertBook(@Body() newBook: Omit<Book, 'id'>) {
    this.libraryApiService.insertBook(newBook);
    return { response: `Se inserto el libro ${newBook.title} con exito` };
  }

  @Post('newloan')
  insertLoan(@Body() newLoan: Omit<Loan, 'id'>) {
    this.libraryApiService.insertLoan(newLoan);
    return { response: `Se inserto el prestamo correctamente` };
  }

  @Put('registerreturn')
  registerReturn(@Body('id') id: number) {
    this.libraryApiService.registerReturn(id);
    return { response: `Se registro la devolucion del libro correctamente` };
  }
}
