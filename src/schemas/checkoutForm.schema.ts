import { z } from 'zod'

export const CheckoutSchema = z.object({
  cep: z
    .string()
    .min(8, { message: 'CEP Inválido' })
    .max(8, { message: 'CEP Inválido' }),
  endereco: z.string().min(3, { message: 'Digite um endereço válido' }),
  numero: z.string().min(1, { message: 'Digite um número válido' }),
  complemento: z.optional(z.string()),
  bairro: z
    .string()
    .min(4, { message: 'Digite um bairro válido' })
    .max(99, { message: 'Digite um bairro válido' }),
  cidade: z.string().min(1, { message: 'Insira uma cidade vália' }),
  UF: z
    .string()
    .refine((value) => value !== 'UF', { message: 'Selecione um estado' }),
  metodoPagamento: z
    .string()
    .min(1)
    .refine((value) => value !== '', {
      message: 'Por favor, forneça um método de pagamento.',
    }),
})

export type CheckoutSchemaType = z.infer<typeof CheckoutSchema>
