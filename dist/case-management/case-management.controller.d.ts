import { CaseManagementService } from './case-management.service';
import { Case } from 'src/core';
export declare class CaseManagementController {
    private readonly caseManagementService;
    constructor(caseManagementService: CaseManagementService);
    add(createCaseManagementDto: Case): Promise<any>;
    getCases(): Promise<Case[]>;
}
