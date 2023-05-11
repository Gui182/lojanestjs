import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProdutoEntity } from "./produto.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly produtoRepoistory: Repository<ProdutoEntity>
    ) { }

    async criaProduto(produtoEntity: ProdutoEntity) {
        await this.produtoRepoistory.save(produtoEntity);
    }
}