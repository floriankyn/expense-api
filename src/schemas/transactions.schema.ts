import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TransactionsDocument = HydratedDocument<Transactions>;

type AvailableCurrencies = 'USD' | 'EUR' | 'GBP' | 'JPY' | 'AUD' | 'CAD'

@Schema()
export class Transactions {
    @Prop()
    store: string;

    @Prop()
    amount: number;

    @Prop()
    currency: AvailableCurrencies;

    @Prop()
    card: string;

    @Prop()
    location: string;

    @Prop()
    date: string;
}

export const TransactionsSchema = SchemaFactory.createForClass(Transactions);
