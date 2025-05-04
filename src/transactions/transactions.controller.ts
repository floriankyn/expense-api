import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {TransactionsService} from './transactions.service';
import {CreateTransactionsDto} from "./dto/create-transactions.dto";

@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService) {
    }

    @Get(':id')
    getTransaction(@Param('id') id: string) {
        return this.transactionsService.getTransactions(id);
    }

    @Post()
    createTransaction(@Body() createDto: CreateTransactionsDto) {
        return this.transactionsService.createTransaction(createDto);
    }
}
