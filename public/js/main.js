const addItemCard = document.querySelector("#addItem")
const itemSoldTable = document.querySelector("#itemsSold")

if (localStorage.getItem('secondSelect') === 'Items Sold'){
  itemSoldTable.classList.toggle('hidden')
  addItemCard.classList.add('hidden')
  document.querySelector('.first').toggleAttribute('selected')
  document.querySelector('.second').toggleAttribute('selected')
} else if(localStorage.getItem('secondSelect') === 'Add Item') {
  addItemCard.classList.toggle('hidden')
  itemSoldTable.classList.add('hidden')
  document.querySelector('.first').toggleAttribute('selected')
  document.querySelector('.second').toggleAttribute('selected')
}

document.querySelector('#itemSelect').addEventListener('change', (event) => {
  const item = event.target.value
  if (item === 'Add Item') {
    localStorage.setItem('secondSelect','Add Item')
    addItemCard.classList.toggle('hidden')
    itemSoldTable.classList.add('hidden')
    document.querySelector('.first').toggleAttribute('selected')
    document.querySelector('.second').toggleAttribute('selected')

    localStorage.removeItem('secondSelect')
  }
});

document.querySelector('#itemSelect').addEventListener('change', (event) => {
  const item = event.target.value
  if (item === 'Items Sold') {
    localStorage.setItem('secondSelect','Items Sold')
    itemSoldTable.classList.toggle('hidden')
    addItemCard.classList.add('hidden')
    document.querySelector('.first').toggleAttribute('selected')
    document.querySelector('.second').toggleAttribute('selected')

    localStorage.removeItem('firstSelect')
  }
});