import { Cabin } from 'src/core/models/user.model';
import { ProcessDataService } from 'src/core';
export declare class HomelessService {
    private readonly dataService;
    private readonly tableName;
    constructor(dataService: ProcessDataService);
    addOneCabin(record: Cabin): Promise<any>;
    getCabins(): Promise<any>;
    getCase(): Promise<any>;
}
