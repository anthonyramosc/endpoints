import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users/:id')
  getUser(@Param('id') id: string, @Query('format') format?: string) {
    return this.appService.getUser(+id, format);
  }

  @Post('users')
  createUser(@Body() userData: { name: string; email: string }) {
    return this.appService.createUser(userData);
  }
}
