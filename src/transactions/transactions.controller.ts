import {Body, Controller, Get, UseGuards, Param, Post} from '@nestjs/common';
import {TransactionsService} from './transactions.service';
import {CreateTransactionsDto} from "./dto/create-transactions.dto";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';


@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getTransactions() {
        return this.transactionsService.getTransactions();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getTransaction(@Param('id') id: string) {
        return this.transactionsService.getTransaction(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createTransaction(@Body() createDto: CreateTransactionsDto) {
        return this.transactionsService.createTransaction(createDto);
    }
}
