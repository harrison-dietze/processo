import { Processo } from "./processo.model"

export const processosInicial: Processo[] = [
  {descricao: "Especificação",
  isAtivo: true,
  codigo: "1"},
  {descricao: "Desenvolvimento",
  isAtivo: true,
  codigo: "2"},
  {descricao: "Testes",
  isAtivo: false,
  codigo: "3"},
  {descricao: "Deploy",
  isAtivo: false,
  codigo: "4"}]