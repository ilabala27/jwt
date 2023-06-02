import { ExistingUserDTO } from './dto/existinguser.dto';
import { UserDetails } from './user.interface';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUser(id: string): Promise<UserDetails | null>;
    getAll(): Promise<UserDetails[]>;
    updateUser(id: string, updatedto: ExistingUserDTO): Promise<UserDetails>;
    deleteUser(id: string): Promise<UserDetails>;
}
