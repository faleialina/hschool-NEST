import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StudService } from './students.service';

interface iStud {
  id: number;
  name: string;
  age: number;
  grade: string;
}

interface iBody {
  name: string;
  age: number;
  grade: string;
}

@Controller('/students')
export class StudController {
  constructor(private readonly appService: StudService) {}

  @Get()
  getAll(): iStud[] | string {
    try {
      return this.appService.getAll();
    } catch (error) {
      return (error as Error).message;
    }
  }
  @Post()
  createItem(@Body() obj: iBody): iStud[] | string {
    try {
      return this.appService.createItem(obj);
    } catch (error) {
      return (error as Error).message;
    }
  }
  @Put('/:id')
  updateItem(@Body() obj: iBody, @Param('id') id: string): iStud[] | string {
    try {
      return this.appService.updateItem(obj, id);
    } catch (error) {
      return (error as Error).message;
    }
  }
  @Delete('/:id')
  deleteItem(@Param('id') id: string): iStud[] | string {
    try {
      return this.appService.deleteItem(id);
    } catch (error) {
      return (error as Error).message;
    }
  }
}
