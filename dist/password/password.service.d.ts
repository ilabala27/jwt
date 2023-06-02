import { Model } from 'mongoose';
import { PasswordDocument } from './password.schema';
export declare class PasswordService {
    private readonly passwordModel;
    constructor(passwordModel: Model<PasswordDocument>);
    create(body: any): Promise<import("./password.schema").Password & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
