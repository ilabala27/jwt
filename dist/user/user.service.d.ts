import { Model } from 'mongoose';
import { ExistingUserDTO } from './dto/existinguser.dto';
import { UserDetails } from './user.interface';
import { UserDocument } from './user.schema';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    _getUserDetails(user: UserDocument): UserDetails;
    findByEmail(email: string): Promise<UserDocument | null>;
    findById(id: string): Promise<UserDetails | null>;
    create(name: string, email: string, hashedPassword: string): Promise<UserDocument>;
    getAll(): Promise<UserDetails[]>;
    update(id: string, updatedto: ExistingUserDTO): Promise<UserDetails>;
    delete(id: string): Promise<UserDetails>;
}
