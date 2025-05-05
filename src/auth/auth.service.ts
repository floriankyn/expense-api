// src/auth/auth.service.ts

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    // Validate the secret token and generate an access token
    async loginWithToken(secretToken: string) {
        const validSecret = process.env.SECRET_TOKEN; // Replace this with your actual secret validation logic

        if (secretToken !== validSecret) {
            throw new Error('Invalid secret token');
        }

        const payload = { sub: 'system', username: 'admin' }; // Example payload
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
