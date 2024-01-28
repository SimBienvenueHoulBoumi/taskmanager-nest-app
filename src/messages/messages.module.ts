import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { DatabaseModule } from '../database/database.module';
import { messageProviders } from './message.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [MessagesController],
  providers: [...messageProviders, MessagesService],
})
export class MessagesModule {}
