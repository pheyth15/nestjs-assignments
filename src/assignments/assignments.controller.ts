import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
    //Assignment 2: Prime Number Checker
    @Get('prime/:num')
    prime(@Param('num') num: number): any {
        const prime = (num) => {
            for (let i = 2; i < num; i++)
                if (num % i === 0) return false;
            return num > 1;
        }
        return { isPrime: prime(num) }
    }
}