import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
    //Assignment 3: Factorial Calculator
    @Get('factorial/:num')
    factorial(@Param('num') num: number): any {
        const factorial = (num) => {
            if (num === 0)
                return 1;
            return num * factorial(num - 1);
        }
        return { factorial: factorial(num) }
    }
}