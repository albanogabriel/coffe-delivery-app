import coffeeExpressoTradicional from '../src/assets/coffee/expresso-tradicional.svg'
import coffeeAmericano from '../src/assets/coffee/americano.svg'
import coffeeExpressoCremoso from '../src/assets/coffee/expresso-cremoso.svg'
import coffeeExpressoGelado from '../src/assets/coffee/expresso-gelado.svg'
import coffeeCafeComLeite from '../src/assets/coffee/cafe-com-leite.svg'

export const coffeeList = [
  {
    id: 1,
    coffeeImg: coffeeExpressoTradicional,
    coffeeType: ['TRADICIONAL'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: '6,90',
  },
  {
    id: 2,
    coffeeImg: coffeeAmericano,
    coffeeType: ['TRADICIONAL'],
    title: 'Café Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: '9,90',
  },
  {
    id: 3,
    coffeeImg: coffeeExpressoCremoso,
    coffeeType: ['TRADICIONAL'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    value: '12,90',
  },
  {
    id: 4,
    coffeeImg: coffeeExpressoGelado,
    coffeeType: ['TRADICIONAL', 'GELADO'],
    title: 'Expresso Cremoso',
    description: 'Bebida Preparada com café expresso e cubos de gelo',
    value: '11,90',
  },
  {
    id: 5,
    coffeeImg: coffeeCafeComLeite,
    coffeeType: ['TRADICIONAL', 'COM LEITE'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: '13,90',
  },
]
