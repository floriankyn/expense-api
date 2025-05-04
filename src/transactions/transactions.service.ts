import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Transactions} from "../schemas/transactions.schema";
import {Model} from "mongoose";
import {CreateTransactionsDto} from "./dto/create-transactions.dto";

@Injectable()
export class TransactionsService {
    constructor(@InjectModel(Transactions.name) private transactionsModel: Model<Transactions>) {
    }

    async getTransactions(id: string): Promise<Transactions> {
        const transactions = await this.transactionsModel.findById(id).exec();
        if (!transactions) {
            throw new Error(`Transaction with id ${id} not found`);
        }

        return transactions;
    }

    async createTransaction(createDto: CreateTransactionsDto): Promise<Transactions> {
        const newTransaction = new this.transactionsModel(createDto);
        return newTransaction.save();
    }

}
