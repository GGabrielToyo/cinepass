import { UsuarioInterface } from "./UsuarioInterface";

export class Usuario {
    public nome?: string;
    private telefone?: string;
    private cpf?: string;
    public email?: string;
    public dataNascimento?: Date;

    constructor(nome: string, telefone: string, cpf: string, email: string, dataNascimento: Date) {
        this.nome = nome;
        this.telefone = telefone;
        this.cpf = cpf;
        this.email = email;
        this.dataNascimento = dataNascimento;

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