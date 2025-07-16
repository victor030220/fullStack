import { Module } from '@nestjs/common';
import { LibraryApiService } from './library_api.service';
import { LibraryApiController } from './library_api.controller';

@Module({
  controllers: [LibraryApiController],
  providers: [LibraryApiService],
})
export class LibraryApiModule {}
