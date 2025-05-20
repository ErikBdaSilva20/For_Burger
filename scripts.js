import { menuOptions } from './products.js'

const list = document.querySelector('ul')
const showAllProducts = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const onlyVeganButton = document.querySelector('.only-vegan')

function formatPrice(value) {
  const newValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)

  return newValue
}
function buttonShowAll(productsArray) {
  let liProducts = ''

  productsArray.forEach(product => {
    liProducts += `
      <li>
        <img src="${product.src}" />
        <p>${product.name}</p>
        <p class="item-price">${formatPrice(product.price)}</p>
      </li>
    `
  })

  list.innerHTML = liProducts
}

function mapAllItems() {
  const newPrices = menuOptions.map(product => ({
    ...product,
    price: product.price * 0.9, // 10% de desconto
  }))

  buttonShowAll(newPrices)
}

function sumAllItems() {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

  list.innerHTML = `
    <li>
        <p class="discount">O valor total dos produtos são ${formatPrice(
          totalValue,
        )}</p>
    </li>
      `
}

function onlyVegans() {
  const veganProducts = menuOptions.filter(product => product.vegan)

  buttonShowAll(veganProducts)
}

showAllProducts.addEventListener('click', () => buttonShowAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
onlyVeganButton.addEventListener('click', onlyVegans)
