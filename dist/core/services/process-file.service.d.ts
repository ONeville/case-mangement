import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import { ExcetData } from '..';
export declare class ProcessFileService {
    private readonly configService;
    private readonly s3;
    constructor(configService: ConfigService);
    getFileData(): Promise<S3.Body>;
    mapData(data: ExcetData[]): {
        cabins: {
            id: string;
            cabinId: number;
            location: string;
            site: string;
            city: string;
            zipCode: number;
        }[];
        users: {
            firstName: string;
            lastName: string;
            dob: Date;
            phone: string;
            id: number;
        }[];
    };
}
