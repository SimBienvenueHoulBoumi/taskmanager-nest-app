import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @ApiProperty({
    description: 'The name of the message',
    default: 'Message',
  })
  name: string;

  @ApiProperty({
    description: 'The description of the message',
    default: 'Description',
  })
  description: string;
}
