import { Invoice } from "../../models/invoice";

export const invoiceData: Invoice = {
  id: 1,
  name: 'Componentes de Computación',
  client: {
    name: 'Juan',
    lastname: 'Pérez',
    address: {
      country: 'Colombia',
      city: 'Bogotá',
      street: 'Calle 123',
      number: '456'
    },
  },
  company: {
    name: 'Mi Empresa S.A.S',
    nit: 123456789
  },
  items: [
    {
      id: 1,
      product: 'Monitor',
      description: 'Monitor de 24 pulgadas',
      quantity: 2,
      price: 300000,
    },
    {
      id: 2,
      product: 'Teclado',
      description: 'Teclado mecánico',
      quantity: 1,
      price: 150000,
    },
    {
      id: 3,
      product: 'Mouse',
      description: 'Mouse óptico',
      quantity: 1,
      price: 50000,
    }
  ]
}
