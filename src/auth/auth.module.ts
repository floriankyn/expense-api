// src/auth/auth.module.ts

import {Module} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';
import {JwtStrategy} from './jwt.strategy';
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET, // Ensure this is set in your environment variables
            signOptions: {expiresIn: '10s'}, // Token expiration time
        }),
    ],
    controllers: [AuthController],
    providers: [JwtStrategy, AuthService],
    exports: [JwtModule],
})
export class AuthModule {
}
