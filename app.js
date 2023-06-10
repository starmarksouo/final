let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let listCards = {};

openShopping.addEventListener('click', () => {
  body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
  body.classList.remove('active');
});

function addToCard(button) {
  let item = button.parentNode;
  while (!item.classList.contains('item')) {
    item = item.parentNode;
  }

  let id = item.getAttribute('data-id');
  let name = item.getAttribute('data-name');
  let image = item.getAttribute('data-image');
  let price = parseInt(item.getAttribute('data-price'));

  if (listCards[id] == null) {
    listCards[id] = {
      id: id,
      name: name,
      image: image,
      pricePerItem: price,
      quantity: 1,
    };
  } else {
    listCards[id].quantity++;
  }

  reloadCard();
}

function reloadCard() {
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;

  for (let id in listCards) {
    let value = listCards[id];

    if (value !== null) {
      let newDiv = document.createElement('li');
      newDiv.innerHTML = `
        <div><img src="image/${value.image}" /></div>
        <div>${value.name}</div>
        <div>${(value.pricePerItem * value.quantity).toLocaleString()}</div>
        <div>
          <button onclick="changeQuantity('${value.id}', ${value.quantity - 1})">-</button>
          <div class="count">${value.quantity}</div>
          <button onclick="changeQuantity('${value.id}', ${value.quantity + 1})">+</button>
        </div>`;
      listCard.appendChild(newDiv);

      totalPrice += value.pricePerItem * value.quantity;
      count += value.quantity;
    }
  }

  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}

function changeQuantity(id, quantity) {
  if (quantity == 0) {
    delete listCards[id];
  } else {
    listCards[id].quantity = quantity;
  }
  reloadCard();
}
