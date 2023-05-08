import { v4 as uuid } from 'uuid'

export class UsuarioEntity {

    constructor(nome: string, email: string, senha: string) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    id: string = uuid();
    nome: string;
    email: string;
    senha: string;
}