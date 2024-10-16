import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getUser(id: number, format?: string): any {
    const user = this.users.find(u => u.id === id);
    if (!user) {
      return { message: 'User not found' };
    }
    if (format === 'short') {
      return { id: user.id, name: user.name };
    }
    return user;
  }

  createUser(userData: { name: string; email: string }): any {
    const newUser = {
      id: this.users.length + 1,
      ...userData,
    };
    this.users.push(newUser);
    return newUser;
  }
}