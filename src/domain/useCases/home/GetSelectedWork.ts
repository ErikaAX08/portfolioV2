import { SelectedWorkRepository } from "@/data/repositories/SelectedWorkRepository";
import { SelectedWork } from "@/domain/models/SelectedWork";

export class GetSelectedWork {
    constructor(private readonly selectedWorkRepository: SelectedWorkRepository) {}
    
    async execute(): Promise<SelectedWork[]> {
        return await this.selectedWorkRepository.getSelectedWork()
    }
}