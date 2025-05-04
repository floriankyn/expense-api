import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TransactionsDocument = HydratedDocument<Transactions>;

@Schema()
export class Transactions {
    @Prop()
    name: string;

    @Prop()
    amount: number;

    @Prop()
    created_at: string;
}

export const TransactionsSchema = SchemaFactory.createForClass(Transactions);
