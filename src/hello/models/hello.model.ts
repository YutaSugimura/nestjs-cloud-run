import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Hello {
  title: string;
  description: string;
}
