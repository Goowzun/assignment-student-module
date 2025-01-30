import { Test, TestingModule } from '@nestjs/testing'; // Importing test utilities
import { StudentController } from './student.controller'; // Importing the controller being tested

describe('StudentController', () => { 
  let controller: StudentController; // Declaring a variable for the controller instance

  beforeEach(async () => { 
    const module: TestingModule = await Test.createTestingModule({ // Setting up the testing module
      controllers: [StudentController], // Registering the controller
    }).compile(); 

    controller = module.get<StudentController>(StudentController); // Getting the controller instance
  });

  it('should be defined', () => { 
    expect(controller).toBeDefined(); // Checking if the controller is instantiated correctly
  });
});
