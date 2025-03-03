import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BodyDto, IdDto } from './dto/students.dto';
import { StudService } from './students.service';

interface iStud {
  id: number;
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
  createItem(@Body() obj: BodyDto): iStud[] | string {
    try {
      return this.appService.createItem(obj);
    } catch (error) {
      return (error as Error).message;
    }
  }
  @Put('/:id')
  updateItem(@Body() obj: BodyDto, @Param('id') id: IdDto): iStud[] | string {
    try {
      return this.appService.updateItem(obj, id);
    } catch (error) {
      return (error as Error).message;
    }
  }
  @Delete('/:id')
  deleteItem(@Param('id') id: IdDto): iStud[] | string {
    try {
      return this.appService.deleteItem(id);
    } catch (error) {
      return (error as Error).message;
    }
  }
}
