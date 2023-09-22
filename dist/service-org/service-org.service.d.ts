import { CreateServiceOrgDto } from './dto/create-service-org.dto';
import { UpdateServiceOrgDto } from './dto/update-service-org.dto';
export declare class ServiceOrgService {
    create(createServiceOrgDto: CreateServiceOrgDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateServiceOrgDto: UpdateServiceOrgDto): string;
    remove(id: number): string;
}
