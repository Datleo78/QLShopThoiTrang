let products = [
  {
    id: 1,
    name: "Áo thun nam tay dài",
    price: 200000,
    img: "/assets/img/product/thun/thun1.webp",
    category: "thun",
  },
  {
    id: 2,
    name: "Áo Thun Nam Form Vừa",
    price: 200000,
    img: "/assets/img/product/thun/thun2.webp",
    category: "thun",
  },
  {
    id: 3,
    name: "Áo Thun Nam Sát Nách",
    price: 200000,
    img: "/assets/img/product/thun/thun3.webp",
    category: "thun",
  },
  {
    id: 4,
    name: "Áo Thun Nam Tay Ngắn",
    price: 200000,
    img: "/assets/img/product/thun/thun4.webp",
    category: "thun",
  },
  {
    id: 5,
    name: "ao somi 1",
    price: 200000,
    img: "/assets/img/product/somi/somi1.webp",
    category: "somi",
  },
  {
    id: 6,
    name: "ao somi 2",
    price: 200000,
    img: "/assets/img/product/somi/somi2.webp",
    category: "somi",
  },
  {
    id: 7,
    name: "ao somi 3",
    price: 200000,
    img: "/assets/img/product/somi/somi3.webp",
    category: "somi",
  },
  {
    id: 8,
    name: "ao somi 4",
    price: 200000,
    img: "/assets/img/product/somi/somi4.webp",
    category: "somi",
  },
  {
    id: 9,
    name: "Áo Thun Nam Sát Nách",
    price: 200000,
    img: "/assets/img/product/thun/thun5.webp",
    category: "thun",
  },
  {
    id: 10,
    name: "Áo thun tay dài nam",
    price: 200000,
    img: "/assets/img/product/thun/thun6.webp",
    category: "thun",
  },
  {
    id: 11,
    name: "Áo Thun Nam Tay Ngắn Form Vừa ",
    price: 200000,
    img: "/assets/img/product/thun/thun7.webp",
    category: "thun",
  },
  {
    id: 12,
    name: "Áo Thun Nam Tay Ngắn Form Vừa",
    price: 200000,
    img: "/assets/img/product/thun/thun8.webp",
    category: "thun",
  },
  {
    id: 13,
    name: "ao somi 5",
    price: 200000,
    img: "/assets/img/product/somi/somi5.webp",
    category: "somi",
  },
  {
    id: 14,
    name: "ao somi 6",
    price: 200000,
    img: "/assets/img/product/somi/somi6.webp",
    category: "somi",
  },
  {
    id: 15,
    name: "ao somi 7",
    price: 200000,
    img: "/assets/img/product/somi/somi7.webp",
    category: "somi",
  },
  {
    id: 16,
    name: "ao somi 8",
    price: 200000,
    img: "/assets/img/product/somi/somi8.webp",
    category: "somi",
  },
];

function getCategoryFromURL() {
  let params = new URLSearchParams(window.location.search);
  return params.get("category") || "thun";
}

function displayAllProducts(category) {
  document.getElementById("category-title").textContent =
    category === "thun" ? "Áo thun" : "Áo sơ mi";

  //lọc danh sách products để lấy các sản phẩm có category
  //giống với tham số truyền vào
  let selectedProducts = products.filter((p) => p.category === category);
  document.querySelector(".products").innerHTML = selectedProducts
    .map(
      (product) =>
        `
        <div class="product">
          <div class="product-image">
            <img src="${product.img}" alt="${product.name}" />
          </div>
          <h3>${product.name}</h3>
          <p>${product.price.toLocaleString()} VND</p>
          <button class="btn-add-to-cart js-add-to-cart" data-id=${
            product.id
          }>add to cart</button>
        </div>
        `
    )
    .join("");
  //Gán lại sự kiện click sau khi danh sách sản phẩm đã được render
  document.querySelectorAll(".js-add-to-cart").forEach((button) => {
    button.addEventListener("click", function () {
      let productId = this.dataset.id;
      addToCart(productId);
    });
  });
}
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

//updateCart
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-count").textContent = totalItems;
}
//Gọi hàm ngay khi trang load
document.addEventListener("DOMContentLoaded", updateCartCount);

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
  let product = products.find((p) => p.id == productId);
  if (!product) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let existingProduct = cart.find((item) => item.id == productId);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  // Cập nhật số lượng trên header
  updateCartCount();
  alert("Đã thêm vào giỏ hàng!");
}

//khi website load xong thực hiện đoạn code này
window.onload = () => {
  // handleBtnAddToCart();
  let category = getCategoryFromURL();
  displayAllProducts(category);
};
