import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {TransactionsController} from './transactions.controller';
import {TransactionsService} from './transactions.service';
import {Transactions, TransactionsSchema} from '../schemas/transactions.schema';
import {GoogleSheetsModule} from "../google-sheets/google-sheets.module";

@Module({
    imports: [MongooseModule.forFeature([{name: Transactions.name, schema: TransactionsSchema}]),
        GoogleSheetsModule],
    controllers: [TransactionsController],
    providers: [TransactionsService],
})
export class TransactionsModule {
}
