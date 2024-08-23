import { FilmeInterface } from "./FilmeInterface";

export class Filme {
    public nome?: string;
    public sinopse?: string;
    public genero?: string;
    public duracao?: number | string;
    public sessoes?: string;
    public imagemUrl?: string;


    constructor(nome: string, sinopse: string, genero: string, duracao: number | string, sessoes: string, imagemUrl: string) {
        this.nome = nome;
        this.sinopse = sinopse;
        this.genero = genero;
        this.duracao = duracao;
        this.sessoes = sessoes;
        this.imagemUrl = imagemUrl;
    }

    public getNome(): string | undefined {
        return this.nome;
    }
    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getSinopse(): string | undefined {
        return this.sinopse;
    }
    public setSinopse(sinopse: string): void {
        this.sinopse = sinopse;
    }

    public getGenero(): string | undefined {
        return this.genero;
    }
    public setGenero(genero: string): void {
        this.genero = genero;
    }

    public getDuracao(): number | string | undefined {
        return this.duracao;
    }
    public setDuracao(duracao: number | string): void {
        this.duracao = duracao;
    }

    public getSessoes(): string | undefined {
        return this.sessoes;
    }
    public setSessoes(sessoes: string): void {
        this.sessoes = sessoes;
    }

    public getImagemUrl(): string | undefined {
        return this.imagemUrl;
    }
    public setImagemUrl(imagemUrl: string): void {
        this.imagemUrl = imagemUrl;
    }

}