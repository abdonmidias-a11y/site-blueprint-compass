// Real photos supplied by Autoescola Abdon. Do not add stock or generic images here.
import fachada from "@/assets/fotos/fachada-abdon.jpg.asset.json";
import equipe from "@/assets/fotos/equipe-instrutores.jpg.asset.json";
import recepcao from "@/assets/fotos/recepcao-instrutores.jpg.asset.json";
import renegade from "@/assets/fotos/carro-renegade-aluna.jpg.asset.json";
import moto from "@/assets/fotos/moto-aluno.jpg.asset.json";
import aprovado1 from "@/assets/fotos/aprovado-carro-1.jpg.asset.json";
import aprovado2 from "@/assets/fotos/aprovada-carro-2.jpg.asset.json";
import aprovado3 from "@/assets/fotos/aprovado-carro-3.jpg.asset.json";
import placa from "@/assets/fotos/aprovado-placa.jpg.asset.json";

export type Photo = { url: string; alt: string };

export const PHOTOS = {
  fachada: { url: fachada.url, alt: "Fachada e entrada de uma unidade da Autoescola Abdon" },
  equipe: { url: equipe.url, alt: "Equipe de instrutores da Autoescola Abdon em ação do Outubro Rosa" },
  recepcao: { url: recepcao.url, alt: "Instrutores da Autoescola Abdon na recepção da unidade" },
  renegade: { url: renegade.url, alt: "Aluna da Autoescola Abdon ao lado do Jeep Renegade de instrução" },
  moto: { url: moto.url, alt: "Aluno da Autoescola Abdon com capacete ao lado de moto de instrução" },
} satisfies Record<string, Photo>;

export const APPROVED_PHOTOS: Photo[] = [
  { url: placa.url, alt: "Aluno aprovado com a placa “Me preparei na Auto Escola Abdon e passei!”" },
  { url: aprovado1.url, alt: "Aluno aprovado comemorando ao lado do carro de instrução da Abdon" },
  { url: aprovado2.url, alt: "Aluna aprovada ao lado do carro de instrução da Abdon" },
  { url: aprovado3.url, alt: "Aluno aprovado ao lado do carro de instrução da Abdon" },
  { url: moto.url, alt: "Aluno aprovado na categoria A com moto de instrução da Abdon" },
];

// Photos shown on each service page; only services with matching real photos get one.
export const SERVICE_PHOTOS: Record<string, Photo[]> = {
  "primeira-habilitacao": [PHOTOS.renegade, PHOTOS.moto],
  "inclusao-de-categoria": [PHOTOS.moto, PHOTOS.renegade],
};
