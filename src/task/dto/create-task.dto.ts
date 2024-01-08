import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'The title of the task',
    example: 'Task 1',
  })
  title: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'The description of the task',
    example: 'Task 1 description',
  })
  description: string;

  @ApiProperty({
    description: 'The done status of the task',
    example: false,
  })
  done: boolean;
}
