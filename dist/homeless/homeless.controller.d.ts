import { Cabin } from './../core/models/user.model';
import { HomelessService } from './homeless.service';
import { ProcessFileService, ProcessDataService } from 'src/core';
export declare class HomelessController {
    private readonly homelessService;
    private fileService;
    private dataService;
    constructor(homelessService: HomelessService, fileService: ProcessFileService, dataService: ProcessDataService);
    loadDummy(): Promise<{
        id: string;
        cabinId: number;
        location: string;
        site: string;
        city: string;
        zipCode: number;
    }[]>;
    addCabin(request: Cabin): Promise<any>;
    getCabins(): Promise<any>;
    checkS3(): Promise<import("aws-sdk/clients/s3").Body>;
}
