import { Request } from 'express';

export interface RequestWithTokenPayload extends Request {
    user: TokenPayload;
}

export interface TokenPayload {
    username: string;
    userId: number;
}
