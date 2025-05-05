import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {ConfigModule} from '@nestjs/config';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TransactionsModule} from './transactions/transactions.module';
import {AuthModule} from "./auth/auth.module";
import {GoogleSheetsModule} from "./google-sheets/google-sheets.module";


@Module({
    imports: [
        MongooseModule.forRoot(process.env.MONGODB_URI ?? "", {
            pass: process.env.MONGODB_PASS,
            user: process.env.MONGODB_USER,
        }),
        ConfigModule.forRoot({
            envFilePath: "./../.env.local",
            isGlobal: true,
        }),
        TransactionsModule,
        AuthModule,
        GoogleSheetsModule
    ],
    controllers: [AppController],
    providers: [AppService], // ModuleRef does not need to be added here
})
export class AppModule {
}
