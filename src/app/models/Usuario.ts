import { UsuarioInterface } from "./UsuarioInterface";

export class Usuario {
    public nome?: string;
    private telefone?: string;
    private cpf?: string;
    public email?: string;
    public dataNascimento?: Date;

    constructor(item: UsuarioInterface) {
        if (item) {
            this.nome = item.nome;
            this.telefone = item.telefone;
            this.cpf = item.cpf;
            this.email = item.email;
            this.dataNascimento = item.dataNascimento;
        }
    }

    public getNome(): string | undefined {
        return this.nome;
    }
    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getTelefone(): string | undefined {
        return this.telefone;
    }
    public setTelefone(telefone: string): void {
        this.telefone = telefone;
    }

    public getCpf(): string | undefined {
        return this.cpf;
    }
    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    public getEmail(): string | undefined {
        return this.email;
    }
    public setEmail(email: string): void {
        this.email = email;
    }

    public getDataNascimento(): Date | undefined {
        return this.dataNascimento;
    }
    public setDataNascimento(dataNascimento: Date): void {
        this.dataNascimento = dataNascimento;
    }

    public comprarIngresso(): void {
        console.log("Ingresso comprado com sucesso!");
    }

    public avaliarFilme(): void {
        console.log("Filme avaliado com sucesso!");
    }

}