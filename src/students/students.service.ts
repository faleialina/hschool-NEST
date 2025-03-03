import { Injectable } from '@nestjs/common';
import students from 'src/storage/students';
import { BodyDto, IdDto } from './dto/students.dto';

interface iStud {
  id: number;
  name: string;
  age: number;
  grade: string;
}

@Injectable()
export class StudService {
  getAll(): iStud[] {
    if (!students.length) throw new Error('the db is empty');
    return students;
  }

  createItem(obj: BodyDto): iStud[] {
    const newId: number =
      students.length === 0 ? 1 : students[students.length - 1].id + 1;
    students.push({ id: newId, ...obj });
    return students;
  }
  updateItem(obj: BodyDto, id: IdDto): iStud[] {
    const indEl = students.findIndex((el) => el.id === +id);
    students[indEl] = { ...students[indEl], ...obj };
    return students;
  }
  deleteItem(id: IdDto): iStud[] {
    const indEl = students.findIndex((el) => el.id === +id);
    students.splice(indEl, 1);
    return students;
  }
}
