import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

    //Assignment 1: Fibonacci Sequence
    @Get('fibonacci/:num')
    fibonacci(@Param('num') num: number): any {
        const fibonacci = (num) => {
            let a = 0, b = 1, c = 0, arr = [0, 1];
            for (let i = 2; i < num; i++) {
                c = a + b;
                a = b;
                b = c;
                arr.push(c);
            }
            return arr;
        }
        return { sequence: fibonacci(num) }
    }

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