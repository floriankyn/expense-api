// src/transactions/dto/create-transaction.dto.ts

import { IsString, IsNumber, IsIn, IsDateString } from 'class-validator';

type AvailableCurrencies = 'USD' | 'EUR' | 'GBP' | 'JPY' | 'AUD' | 'CAD';

export class CreateTransactionsDto {
  @IsString()
  store: string;

  @IsNumber()
  amount: number;

  @IsIn(['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD'])
  currency: AvailableCurrencies;

  @IsString()
  card: string;

  @IsString()
  location: string;

  @IsDateString()
  date: string;
}
