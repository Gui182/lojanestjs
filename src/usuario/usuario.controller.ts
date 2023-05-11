import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AtualizaUsuarioDTO } from './dtos/AtualizaUsuario.dto';
import { CriaUsuarioDTO } from './dtos/CriaUsuario.dto';
import { ListaUsuarioDTO } from './dtos/ListaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';
import { UsuarioService } from './usuario.service';

@Controller('/usuarios')
export class UsuarioController {
  constructor(
    private usuarioRepository: UsuarioRepository,
    private usuarioService: UsuarioService,
  ) {}

  @Post()
  async criaUsuario(@Body() dadosUsuario: CriaUsuarioDTO) {
    const usuarioEntity = new UsuarioEntity(
      dadosUsuario.nome,
      dadosUsuario.email,
      dadosUsuario.senha,
    );

    this.usuarioService.criaUsuario(usuarioEntity);
    return {
      usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
      message: 'usuário criado com sucesso.',
    };
  }

  @Get()
  async listaUsuarios() {
    const usuariosSalvos = await this.usuarioService.listaUsuarios();

    return usuariosSalvos;
  }

  @Put('/:id')
  async atualizaUsuario(
    @Param('id') id: string,
    @Body() novosDados: AtualizaUsuarioDTO,
  ) {
    const usuarioAtualizado = await this.usuarioService.atualizaUsuario(
      id,
      novosDados,
    );

    return {
      usuario: usuarioAtualizado,
      message: 'usuario atualizado com sucesso',
    };
  }

  @Delete('/:id')
  async removeUsuario(@Param('id') id: string) {
    const usuarioRemovido = await this.usuarioService.deletaUsuario(id);

    return {
      usuario: usuarioRemovido,
      message: 'usuário removido com sucesso.',
    };
  }
}
