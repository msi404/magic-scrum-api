import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TasksService } from '@/tasks/tasks.service'
import { TasksController } from '@/tasks/tasks.controller'
import { Task } from '@/tasks/entities/task.entity'
@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
