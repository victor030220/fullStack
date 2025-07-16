import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibraryApiModule } from './library_api/library_api.module';

@Module({
  imports: [LibraryApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
