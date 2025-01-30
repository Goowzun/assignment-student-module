import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common'; // Importing decorators
import { StudentService } from './student.service'; // Importing the service
import { Student } from './student.entity'; // Importing the Student entity

@Controller('students') // Defines the base route '/students' for all endpoints
export class StudentController {
  constructor(private readonly studentService: StudentService) {} // Injecting the service

  @Post() // POST method to create a new student
  async createStudent(@Body() data: Partial<Student>): Promise<Student> { 
    return this.studentService.createStudent(data); // Calls service to create student
  }

  @Get() // GET method to retrieve all students
  async getStudents(): Promise<Student[]> { 
    return this.studentService.getStudents(); // Calls service to get all students
  }

  @Get(':id') // GET method to retrieve a student by ID
  async getStudentByID(@Param('id') id: number): Promise<Student> { 
    return this.studentService.getStudentById(id); // Calls service to get student by ID
  }

  @Put(':id') // PUT method to update a student's details
  async updateStudent(
    @Param('id') id: number, // Accepts the student ID
    @Body() data: Partial<Student>, // Accepts the updated data
  ): Promise<Student> { 
    return this.studentService.updateStudent(id, data); // Calls service to update student
  }

  @Delete(':id') // DELETE method to delete a student by ID
  async deleteStudent(@Param('id') id: number): Promise<void> { 
    return this.studentService.deleteStudent(id); // Calls service to delete student
  }
}
