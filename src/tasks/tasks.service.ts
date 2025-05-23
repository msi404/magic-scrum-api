import type { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateTaskDto } from '@/tasks/dto/create-task.dto'
import { UpdateTaskDto } from '@/tasks/dto/update-task.dto'
import { Task } from '@/tasks/entities/task.entity'

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepo: Repository<Task>,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    const task = this.tasksRepo.create(createTaskDto)
    return this.tasksRepo.save(task)
  }

  findAll() {
    return this.tasksRepo.find()
  }

  findOne(id: number) {
    return this.tasksRepo.findOne({
      where: {
        id,
      },
    })
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.tasksRepo.update(id, updateTaskDto)
  }

  remove(id: number) {
    return this.tasksRepo.delete(id)
  }
}
