// src/auth/auth.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    login(@Body() body: { username: string }) {
        // Normally you'd verify username/password here
        return this.authService.login({
            userId: '123',
            username: body.username,
        });
    }
}
