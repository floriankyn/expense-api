
import { Module } from '@nestjs/common';
import { GoogleSheetsController } from './google-sheets.controller';
import { GoogleSheetsService } from './google-sheets.service';

@Module({
    imports: [],
    controllers: [GoogleSheetsController],
    providers: [GoogleSheetsService],
})
export class GoogleSheetsModule {}
