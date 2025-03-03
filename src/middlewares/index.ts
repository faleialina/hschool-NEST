import { BadRequestException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { BodyDto } from 'src/students/dto/students.dto';

export function Validation(req: Request, res: Response, next: NextFunction) {
  const { name, age, grade } = req.body as BodyDto;
  if (!name) throw new BadRequestException('incorrect name');
  if (!age) throw new BadRequestException('incorrect age');
  if (!grade) throw new BadRequestException('incorrect grade');

  next();
}
