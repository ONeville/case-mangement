export declare class ProcessDataService {
    private readonly dynamoDB;
    addOne<T>(tableName: string, record: T): Promise<any>;
    batchInsert(tableName: string, records: any[]): Promise<void>;
    getData(tableName: string): Promise<any[]>;
}
