import { ReCreateExpiredShortenedUrlUseCase } from '@modules/url/services/ReCreateExpiredShortenedUrlUseCase';
import { Request, Response } from 'express';
import { Get, Post, Route } from 'tsoa';
import { container } from 'tsyringe';

export class ReCreateExpiredShortenedUrlController {
    async handle(req: Request, res: Response): Promise<any> {
        const { shortUrl } = req.body;

        const reCreateExpiredShortenedUrlUseCase = container.resolve(
            ReCreateExpiredShortenedUrlUseCase
        );

        const urlShortened = await reCreateExpiredShortenedUrlUseCase.execute(shortUrl);

        return res.status(201).json({
            urlShortened,
            message: `URL RECRIADA COM SUCESSO`,
        });
    }
}
