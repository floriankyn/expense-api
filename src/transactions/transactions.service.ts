import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Transactions} from "../schemas/transactions.schema";
import {Model} from "mongoose";
import {CreateTransactionsDto} from "./dto/create-transactions.dto";
import {GoogleSheetsModule} from "../google-sheets/google-sheets.module";
import {GoogleSheetsService} from "../google-sheets/google-sheets.service";

@Injectable()
export class TransactionsService {
    constructor(
        @InjectModel(Transactions.name) private transactionsModel: Model<Transactions>,
    ) {
    }

    async getTransactions(): Promise<Transactions[]> {
        return this.transactionsModel.find().exec();
    }

    async getTransaction(id: string): Promise<Transactions> {
        const transactions = await this.transactionsModel.findById(id).exec();
        if (!transactions) {
            throw new Error(`Transaction with id ${id} not found`);
        }

        return transactions;
    }

    async createTransaction(createDto: CreateTransactionsDto): Promise<Transactions> {
        const newTransaction = new this.transactionsModel(createDto);

        await new GoogleSheetsService().updateSpreadsheet(createDto)

        return newTransaction.save();
    }

}
