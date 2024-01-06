import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TaskDocuments = HydratedDocument<Task>;

@Schema()
export class Task {
  @Prop()
  title: string;
  @Prop()
  description: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);