import coffeeExpressoTradicional from '../src/assets/coffee/expresso-tradicional.svg'
import coffeeAmericano from '../src/assets/coffee/americano.svg'
import coffeeExpressoCremoso from '../src/assets/coffee/expresso-cremoso.svg'
import coffeeExpressoGelado from '../src/assets/coffee/expresso-gelado.svg'
import coffeeCafeComLeite from '../src/assets/coffee/cafe-com-leite.svg'
import coffeeLatte from '../src/assets/coffee/latte.svg'
import coffeeCapuccino from '../src/assets/coffee/capuccino.svg'
import coffeeMachiato from '../src/assets/coffee/macchiato.svg'
import coffeeMocaccino from '../src/assets/coffee/mochaccino.svg'
import coffeeChocolateQuente from '../src/assets/coffee/chocolate-quente.svg'
import coffeeCubano from '../src/assets/coffee/cubano.svg'
import coffeeHavaiano from '../src/assets/coffee/havaiano.svg'
import coffeeArabe from '../src/assets/coffee/arabe.svg'
import coffeeIrlandes from '../src/assets/coffee/irlandes.svg'

export const coffeeList = [
  {
    id: 1,
    coffeeImg: coffeeExpressoTradicional,
    coffeeType: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '6,90',
  },
  {
    id: 2,
    coffeeImg: coffeeAmericano,
    coffeeType: ['Tradicional'],
    title: 'Café Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
  },
  {
    id: 3,
    coffeeImg: coffeeExpressoCremoso,
    coffeeType: ['Tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '12,90',
  },
  {
    id: 4,
    coffeeImg: coffeeExpressoGelado,
    coffeeType: ['Tradicional', 'Gelado'],
    title: 'Expresso Cremoso',
    description: 'Bebida Preparada com café expresso e cubos de gelo',
    price: '11,90',
  },
  {
    id: 5,
    coffeeImg: coffeeCafeComLeite,
    coffeeType: ['Tradicional', 'Com Leite'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '13,90',
  },
  {
    id: 6,
    coffeeImg: coffeeLatte,
    coffeeType: ['Tradicional', 'Com Leite'],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
  },
  {
    id: 7,
    coffeeImg: coffeeCapuccino,
    coffeeType: ['Tradicional', 'Com leite'],
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
  },
  {
    id: 8,
    coffeeImg: coffeeMachiato,
    coffeeType: ['tradicional', 'Com leite'],
    title: 'Macchiatto',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
  },
  {
    id: 9,
    coffeeImg: coffeeMocaccino,
    coffeeType: ['Especial', 'Com leite'],
    title: 'Mocaccino',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
  },
  {
    id: 10,
    coffeeImg: coffeeChocolateQuente,
    coffeeType: ['Especial', 'Com leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
  },
  {
    id: 12,
    coffeeImg: coffeeCubano,
    coffeeType: ['Especial', 'Alcólico', 'Gelado'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
  },
  {
    id: 13,
    coffeeImg: coffeeHavaiano,
    coffeeType: ['Especial', 'Alcólico', 'Gelado'],
    title: 'Havaiano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
  },
  {
    id: 14,
    coffeeImg: coffeeArabe,
    coffeeType: ['Especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
  },
  {
    id: 15,
    coffeeImg: coffeeIrlandes,
    coffeeType: ['Especial', 'Alcoolico'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
  },
]
