import {Body, Controller, Get, UseGuards, Param, Post} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {GoogleSheetsService} from "./google-sheets.service";


@Controller('sheets')
export class GoogleSheetsController {
    constructor(private readonly GoogleSheetsService: GoogleSheetsService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getSheetStatus() {
        return await this.GoogleSheetsService.getSheetStatus();
    }
}
