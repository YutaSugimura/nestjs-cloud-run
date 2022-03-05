import { Injectable } from '@nestjs/common';
import { Hello } from './models/hello.model';

@Injectable()
export class HelloService {
  getHello(): Hello {
    return {
      title: 'Hello world',
      description: process.env.DESCRIPTION || 'env-var is not set correctly',
    };
  }
}
