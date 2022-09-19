export interface IArticle {
  data: Daum[]
  meta: Meta
}

export interface Daum {
  id: number
  attributes: Attributes
}

export interface Attributes {
  email: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  nome: string
  celular: string
  cpf: string
  instituicao: string
  pais: string
  cidade: string
  uf: string
  cep: string
  endereco: string
  autores: string
  titulodoartigo: string
  areadeestudo: string
  modalidade: string
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export interface ISubscription {
  data: SubscriptionAttributes[]
  meta: Meta
}

export interface Subscription {
  id: number
  attributes: Attributes
}

export interface SubscriptionAttributes {
  nome: string
  email: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  cpf: string
  celular: string
  categoria: string
  semestre_de_graduacao: string
  instituicao: string
  pais: string
  cidade: string
  uf: string
  cep: string
  endereco: string
  bairro: string
  nome_do_pagador: string
  cpf_do_pagador: string
  numero: string
}
