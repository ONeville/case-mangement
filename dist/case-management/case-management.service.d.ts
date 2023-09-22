import { ProcessDataService, Case } from 'src/core';
export declare class CaseManagementService {
    private readonly dataService;
    constructor(dataService: ProcessDataService);
    addCase(record: Case): Promise<any>;
    getCases(): Promise<Case[]>;
}
