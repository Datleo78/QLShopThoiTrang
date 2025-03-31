let products = [
  {
    id: 1,
    name: "Áo thun nam tay dài",
    price: 200000,
    img: "./assets/img/product/thun/thun1.webp",
    category: "thun",
  },
  {
    id: 2,
    name: "Áo Thun Nam Form Vừa",
    price: 200000,
    img: "./assets/img/product/thun/thun2.webp",
    category: "thun",
  },
  {
    id: 3,
    name: "Áo Thun Nam Sát Nách",
    price: 200000,
    img: "./assets/img/product/thun/thun3.webp",
    category: "thun",
  },
  {
    id: 4,
    name: "Áo Thun Nam Tay Ngắn",
    price: 200000,
    img: "./assets/img/product/thun/thun4.webp",
    category: "thun",
  },
  {
    id: 5,
    name: "Áo Sơ Mi ",
    price: 200000,
    img: "./assets/img/product/somi/somi1.webp",
    category: "somi",
  },
  {
    id: 6,
    name: "ÁO SƠ MI CÔNG SỞ",
    price: 200000,
    img: "./assets/img/product/somi/somi2.webp",
    category: "somi",
  },
  {
    id: 7,
    name: "Áo Sơ Mi Công Sở Ngắn",
    price: 200000,
    img: "./assets/img/product/somi/somi3.webp",
    category: "somi",
  },
  {
    id: 8,
    name: "Áo Sơ Mi Freelancer – FWWS25SS04C",
    price: 200000,
    img: "./assets/img/product/somi/somi4.webp",
    category: "somi",
  },
  {
    id: 9,
    name: "Áo Thun Nam Sát Nách",
    price: 200000,
    img: "./assets/img/product/thun/thun5.webp",
    category: "thun",
  },
  {
    id: 10,
    name: "Áo thun tay dài nam",
    price: 200000,
    img: "./assets/img/product/thun/thun6.webp",
    category: "thun",
  },
  {
    id: 11,
    name: "Áo Thun Nam Tay Ngắn Form Vừa ",
    price: 200000,
    img: "./assets/img/product/thun/thun7.webp",
    category: "thun",
  },
  {
    id: 12,
    name: "Áo Thun Nam Tay Ngắn Form Vừa",
    price: 200000,
    img: "./assets/img/product/thun/thun8.webp",
    category: "thun",
  },
  {
    id: 13,
    name: "ao somi 5",
    price: 200000,
    img: "./assets/img/product/somi/somi5.webp",
    category: "somi",
  },
  {
    id: 14,
    name: "ao somi 6",
    price: 200000,
    img: "./assets/img/product/somi/somi6.webp",
    category: "somi",
  },
  {
    id: 15,
    name: "ao somi 7",
    price: 200000,
    img: "./assets/img/product/somi/somi7.webp",
    category: "somi",
  },
  {
    id: 16,
    name: "ao somi 8",
    price: 200000,
    img: "./assets/img/product/somi/somi8.webp",
    category: "somi",
  },
];

//handleBtnAddToCart
function handleBtnAddToCart() {
  let btns = document.querySelectorAll(".js-btn-add-to-cart");
  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      let productElement = this.closest(".product"); //Tìm phần tử cha gần nhất có class .product (chính là thẻ chứa thông tin sản phẩm).
      console.log(productElement);
      let name = productElement.querySelector("h3").textContent;
      console.log(name);
      let price = productElement.querySelector("p").textContent;
      let img = productElement.querySelector("img").src;
      console.log(img);
      // Chuyển hướng sang trang chi tiết sản phẩm với dữ liệu trên URL
      window.location.href = `product-detail.html?name=${encodeURIComponent(
        name
      )}&price=${encodeURIComponent(price)}&img=${encodeURIComponent(img)}`;
    });
  });
}

function displayCategoryProducts(category, elementId) {
  let selectedProducts = products
    .filter((p) => p.category === category)
    .splice(0, 4);

  let productContainer = document.getElementById(elementId);
  console.log("productContainer", productContainer);
  if (!productContainer) {
    console.error(`Không tìm thấy phần tử có id: ${elementId}`);
    return;
  }
  let selectedProductsRender = selectedProducts
    .map(
      (product) =>
        `
        <div class="product">
          <div class="product-image">
            <img src="${product.img}" alt="${product.name}" />
          </div>
          <h3>${product.name}</h3>
          <p>${product.price.toLocaleString()} VND</p>
          <button class="btn-add-to-cart js-btn-add-to-cart" data-id=${
            product.id
          }>add to cart</button>
        </div>
        `
    )
    .join("");
  productContainer.innerHTML = selectedProductsRender;
}
document.addEventListener("DOMContentLoaded", function () {
  //kiểm tra xem phần tử có tồn tại không
  if (document.getElementById("products-thun")) {
    displayCategoryProducts("thun", "products-thun");
  }
  if (document.getElementById("products-somi")) {
    displayCategoryProducts("somi", "products-somi");
  }
  handleBtnAddToCart();
});

// window.onload = () => {
//   displayCategoryProducts("thun", "products-thun");
//   displayCategoryProducts("somi", "products-somi");
//   handleBtnAddToCart();
// };

// Lấy tham số từ URL
const params = new URLSearchParams(window.location.search); //lấy dữ liệu từ URL khi chuyển hướng từ trang danh sách sản phẩm (index.html) sang trang chi tiết sản phẩm (product-detail.html).
const name = params.get("name"); //Lấy giá trị của name
const price = params.get("price");
const img = params.get("img");

// Hiển thị thông tin sản phẩm
if (name && price && img) {
  document.querySelector(".product-detail-img").src = img;
  document.querySelector(".product-detail-info-name").textContent = name;
  document.querySelector(".product-detail-info-price").src = price;
}

// //updateCart
// function updateCartCount() {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//   document.getElementById("cart-count").textContent = totalItems;
// }
// // Gọi hàm ngay khi trang load
// document.addEventListener("DOMContentLoaded", updateCartCount);

// function addToCart(productId) {
//   let product = products.find((p) => p.id == productId);
//   if (!product) return;

//   let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   let existingProduct = cart.find((item) => item.id == productId);

//   if (existingProduct) {
//     existingProduct.quantity += 1;
//   } else {
//     cart.push({ ...product, quantity: 1 });
//   }

//   localStorage.setItem("cart", JSON.stringify(cart));

//   // Cập nhật số lượng trên header
//   updateCartCount();
//   alert("Đã thêm vào giỏ hàng!");
// }
