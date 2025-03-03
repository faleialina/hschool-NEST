import { IsInt, IsString } from 'class-validator';

export class BodyDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  name: string;

  grade: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsInt()
  age: number;
}

export class IdDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  id: string;
}
