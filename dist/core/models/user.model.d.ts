export declare class HomelessUser {
    firstName: string;
    lastName: string;
    phone?: string;
    tagId?: string;
    constructor(firstName: string, lastName: string, phone?: string, tagId?: string);
}
export interface ExcetData {
    Cabin: number;
    FirstName: string;
    LastName: string;
    CaseManagement: string;
    Need: string;
    Phone: string;
    MHprovider: string;
    SUDProvider: string;
}
export interface Case {
    "createdDate": string;
    "lastUpdateDate": string;
    "requestUser": {
        "fullName": string;
        "phone": string;
        "id": string;
    };
    "services": {
        "name": string;
        "organization": string;
    };
    "host": {
        "cabinId": string;
        "site": string;
        "loaction": string;
    };
    "status": string;
    "comments": string;
    "id": string;
    "caseId": string;
}
export interface Cabin {
    id: string;
    cabinId: number;
    location: string;
    site: string;
    city: string;
    zipCode: number;
}
