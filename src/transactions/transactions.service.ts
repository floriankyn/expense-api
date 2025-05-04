import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionsService {
    getTransaction(): string {
        return 'Transaction data!';
    }
}
