// src/auth/auth.service.ts

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    async login(user: { userId: string; username: string }) {
        const payload = { sub: user.userId, username: user.username };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
