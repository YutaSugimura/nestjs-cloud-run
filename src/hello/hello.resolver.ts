import { Query, Resolver } from '@nestjs/graphql';
import { Hello } from './models/hello.model';
import { HelloService } from './hello.service';

@Resolver(() => Hello)
export class HelloResolver {
  constructor(private readonly helloService: HelloService) {}

  @Query(() => Hello)
  hello(): Hello {
    return this.helloService.getHello();
  }
}
