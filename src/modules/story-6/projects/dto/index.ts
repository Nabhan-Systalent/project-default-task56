import { ApiProperty } from '@nestjs/swagger';

export class Project {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;
}
