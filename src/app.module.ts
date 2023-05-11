import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOption } from './config/data-source';
import { ProdutoModule } from './produto/produto.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    UsuarioModule,
    ProdutoModule,
    TypeOrmModule.forRoot(dataSourceOption),
    ],
})
export class AppModule {}
