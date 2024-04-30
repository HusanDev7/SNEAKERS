// ........................................................

// DOM class

let modalOpen = document.querySelector(".modal");
let navbarBag = document.querySelector(".korzina");
let modalBtn = document.querySelector(".modal__btn");
let bgRemov = document.querySelector(".bg-reomov");
let like = document.querySelectorAll(".like");
let backBtn = document.querySelector(".back-btn");

let btnAdd = document.querySelectorAll(".btn-add");
let plus = document.querySelectorAll(".plus");
let addPlus = document.querySelectorAll(".galochka");
let listProduct = document.querySelector(".modal__box-two");
let basketNall = document.querySelector(".modal__box");
let dellProduct = document.querySelectorAll(".product__dell");
let totalSum = document.querySelector(".price__price");
let searchInput = document.querySelector("#searchInput");
let undefindProduct = document.querySelector(".undefind__box");

// DOM class

// ........................................................

// loading my website

window.addEventListener('load', () => {
    setTimeout(() => {
        const loading = document.querySelector('.loading');
        if (loading) {
            loading.style.display = 'none';
        }
    }, 4000)
});

// loading my website

// ........................................................

// navbar open and close function

navbarBag.addEventListener("click", () => {
  modalOpen.classList.add("active");
  bgRemov.classList.add("active");
});

modalBtn.addEventListener("click", closeModal);
bgRemov.addEventListener("click", closeModal);
backBtn.addEventListener("click", closeModal);

function closeModal() {
  modalOpen.classList.remove("active");
  bgRemov.classList.remove("active");
}

for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", () => {
    like[i].classList.add("active");
    addFavorite(like[i]);
  });
}

function addFavorite(likeIcon) {
  const parent = likeIcon.closest(".cotalock-box-mini");
  if (parent) {
    const id = parent.getAttribute("id").slice(7);
    const product = bag[`product${id}`];
    if (!products.find((item) => item.id === id)) {
      products.push(product);
      localStorage.setItem("fav", JSON.stringify(products));
    }
  }
}

// ........................................................

// products (SNEAKERS)

const bag = {
  product1: {
    id: 1,
    name: "Nike Blazer Mid Suede",
    price: 129.99,
    img: "img/1.jpg",
    amount: 0,
    get totalSum() {
      return this.price * this.amount;
    },
  },
  product2: {
    id: 2,
    name: "Nike Air Max 270",
    price: 129.99,
    img: "img/2.jpg",
    amount: 0,
    get totalSum() {
      return this.price * this.amount;
    },
  },
  product3: {
    id: 3,
    name: "Nike Blazer Mid Suede",
    price: 84.99,
    img: "img/3.jpg",
    amount: 0,
    get totalSum() {
      return this.price * this.amount;
    },
  },
  product4: {
    id: 4,
    name: "Puma X Aka Boku Future Rider",
    price: 129.99,
    img: "img/4.jpg",
    amount: 0,
    get totalSum() {
      return this.price * this.amount;
    },
  },
  product5: {
    id: 5,
    name: "Under Armour Curry 8",
    price: 84.99,
    img: "img/5.jpg",
    amount: 0,
    get totalSum() {
      return this.price * this.amount;
    },
  },
  product6: {
    id: 6,
    name: "Under Armour Curry 8",
    price: 151.99,
    img: "img/6.jpg",
    amount: 0,
    get totalSum() {
      return this.price * this.amount;
    },
  },
  product7: {
    id: 7,
    name: "Nike Kyrie 7",
    price: 107.99,
    img: "img/7.jpg",
    amount: 0,
    get totalSum() {
      return this.price * this.amount;
    },
  },
  product8: {
    id: 8,
    name: "Jordan Air Jordan 11",
    price: 164.99,
    img: "img/8.jpg",
    amount: 0,
    get totalSum() {
      return this.price * this.amount;
    },
  },
  product9: {
    id: 9,
    name: "Nike LeBron XVIII",
    price: 139.99,
    img: "img/9.jpg",
    amount: 0,
    get totalSum() {
      return this.price * this.amount;
    },
  },
  product10: {
    id: 10,
    name: "Nike Lebron XVIII Low",
    price: 84.99,
    img: "img/10.png",
    amount: 0,
    get totalSum() {
      return this.price * this.amount;
    },
  },
  product11: {
    id: 11,
    name: "Nike Blazer Mid Suede",
    price: 89.99,
    img: "img/11.png",
    amount: 0,
    get totalSum() {
      return this.price * this.amount;
    },
  },
  product12: {
    id: 12,
    name: "Nike Kyrie Flytrap IV",
    price: 11.299,
    img: "img/12.jpg",
    amount: 0,
    get totalSum() {
      return this.price * this.amount;
    },
  },
};

// products (SNEAKERS)

// btn active class code

// btnAdd.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     addAmount(btn);
//   });
// });

btnAdd.forEach((btn, index) => {
  btn.addEventListener('click', function () {
    const correspondingPlus = plus[index];
    const correspondingAddPlus = addPlus[index];
    if (!btn.classList.contains('active')) {
      btn.classList.add('active');
      correspondingPlus.classList.add('active');
      correspondingAddPlus.classList.add('active');
      addAmount(btn);
      localStorage.setItem('btnActive' + index, 'active');
    }
  });
});

window.addEventListener('load', function () {
  btnAdd.forEach((btn, index) => {
    if (localStorage.getItem('btnActive' + index) === 'active') {
      const correspondingPlus = plus[index];
      const correspondingAddPlus = addPlus[index];
      btn.classList.add('active');
      correspondingPlus.classList.add('active');
      correspondingAddPlus.classList.add('active');
      addAmount(btn);
    }
  });
});

// btn active class code

// ........................................................

// amount in bag products code

function addAmount(btn) {
  //   const correspondingPlus = plus[index];
  //   const correspondingAddPlus = addPlus[index];
  if (btn.classList.contains("btn-add")) {
    const correspondingPlus = btn.querySelector(".plus");
    const correspondingAddPlus = btn.querySelector(".galochka");
    correspondingPlus.classList.add("active");
    correspondingAddPlus.classList.add("active");
  } else {
    btn.classList.add("active");
    btn.nextElementSibling.classList.add("active");
  }
  const parent = btn.closest(".cotalock-box-mini");
  if (parent) {
    const id = parent.getAttribute("id");
    bag[id].amount++;
    basket(bag[id]);
  }
}

// amount in bag products code

// ........................................................

// code push product

const products = [] || JSON.parse(localStorage.getItem("fav"));

function basket(item) {
  products.push(item);

  listProduct.innerHTML = "";
  products.forEach((item) => {
    listProduct.innerHTML += createProduct(item);
  });

  basketNall.classList.add("active");

  totalSum.innerHTML = `${allSum()} руб.`;
  //   console.log(products);
}

// code push product

// ........................................................

// totalSum products

function allSum() {
  let allSum = 0;
  for (let i in bag) {
    allSum = allSum + bag[i].totalSum;
  }
  return allSum.toFixed(2);
}

// totalSum products

// ........................................................

// create product and delet product in javascript code

function createProduct(product) {
  const productCard = `
        <div class="modal__box-two__item">
            <div class="item">
                <div class="items"><img class="product__img" src="${product.img}" alt=""></div>
                <div class="items">
                    <p class="product__name">${product.name}</p>
                    <span class="product__price">${product.price} руб.</span>
                </div>
                <div class="items"><img class="product__dell" src="img/dell-btn.svg" alt="" onclick="deleteProduct(event, ${product.id})"></div>
            </div>
        </div>
    `;
  return productCard;
}

function createProductFilter(product) {
  const filterProduct = `
    <div class="cotalock-box-mini" id="product${product.id}">
    <i class='bx bxs-heart like'></i>
    <img class="sum-img" src="${product.img}" alt="">
    <p class="box-p"> Мужские Кроссовки ${product.name}</p>
    <div class="txt-box">
      <div class="txt-box-mini">
        <p class="sum">Цена:</p>
        <span class="sum-span">${product.price} руб.</span>
      </div>
      <div class="txt-box-mini">
        <button class="btn-add" onclick="addAmount(event.target)">
          <img class="plus" src="img/plus.svg" alt="">
          <img class="galochka" src="img/galochka.svg" alt="">
        </button>
      </div>
    </div>
  </div>`;
  return filterProduct;
}

function deleteProduct(event, id) {
  const productElement = event.target.closest(".modal__box-two__item");
  if (productElement) {
    productElement.remove();
    // removeItem()
    // deleteProduct(product)
    const productIndex = products.findIndex((item) => item.id == id);
    products.splice(productIndex, 1);
    const correspondingPlus = plus[id - 1];
    const correspondingAddPlus = addPlus[id - 1];
    correspondingPlus.classList.remove("active");
    correspondingAddPlus.classList.remove("active");
    localStorage.removeItem('btnActive' + (id - 1));
  }

  if (listProduct.children.length == 0) basketNall.classList.remove("active");

  console.log(products);
}

// create product and delet product in javascript code

// ........................................................

// filter product find product

searchInput.addEventListener("input", function () {
  const searchQuery = this.value.trim().toLowerCase();
  const filteredProducts = Object.values(bag).filter((product) => {
    return product.name.toLowerCase().includes(searchQuery);
  });

  FilteredProducts(filteredProducts);
});

function FilteredProducts(products) {
  let productHTML = "";
  products.forEach((product) => {
    productHTML += createProductFilter(product);
  });

  document.querySelector(".cotalock-box").innerHTML = productHTML;

  if (products >= 0) {
    undefindProduct.classList.add("active");
  } else {
    undefindProduct.classList.remove("active");
  }
}

// filter product find product

// ........................................................
