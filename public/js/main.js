const addItemCard = document.querySelector("#addItem")
const itemSoldTable = document.querySelector("#itemsSold")

document.querySelector('#itemSelect').addEventListener('change', (event) => {
  const item = event.target.value
  if (item === 'Add Item') {
    addItemCard.classList.toggle('hidden')
    itemSoldTable.classList.add('hidden')
  }
});

document.querySelector('#itemSelect').addEventListener('change', (event) => {
  const item = event.target.value
  if (item === 'Items Sold') {
    itemSoldTable.classList.toggle('hidden')
    addItemCard.classList.add('hidden')
  }
});