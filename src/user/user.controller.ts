import { Body, Controller, Delete, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guard/jwt.guard';
import { ExistingUserDTO } from './dto/existinguser.dto';
import { UserDetails } from './user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    
  @UseGuards(JwtGuard)
    @Get(':id')
    getUser(@Param('id') id: string): Promise<UserDetails | null> {
      return this.userService.findById(id);
    }


    @Get()
    getAll(): Promise<UserDetails[]>{
      return this.userService.getAll();
    }

    // @UseGuards(JwtGuard)
    @Patch(':id')
    async updateUser(
      @Param('id') id: string,
      @Body() updatedto: ExistingUserDTO) {
      return this.userService.update(id, updatedto);
  
    }
  
   
    @Delete(':id')
    async deleteUser(
      @Param('id') id: string) {
     return this.userService.delete(id);
    
    }
}
