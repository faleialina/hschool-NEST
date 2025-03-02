import { BadRequestException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export function Validation(req: Request, res: Response, next: NextFunction) {
  const { name, age, grade } = req.body;
  if (!name) throw new BadRequestException('incorrect name');
  if (!age) throw new BadRequestException('incorrect age');
  if (!grade) throw new BadRequestException('incorrect grade');

  next();
}
