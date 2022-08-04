export interface SubscriptionResponseType {
  data: Data
  meta: Meta
}

export interface Data {
  id: number
  attributes: Attributes
}

export interface Attributes {
  nome: string
  email: string
  phone: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Meta {}
