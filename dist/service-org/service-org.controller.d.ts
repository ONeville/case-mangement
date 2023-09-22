import { ServiceOrgService } from './service-org.service';
import { CreateServiceOrgDto } from './dto/create-service-org.dto';
import { UpdateServiceOrgDto } from './dto/update-service-org.dto';
export declare class ServiceOrgController {
    private readonly serviceOrgService;
    constructor(serviceOrgService: ServiceOrgService);
    create(createServiceOrgDto: CreateServiceOrgDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateServiceOrgDto: UpdateServiceOrgDto): string;
    remove(id: string): string;
}
