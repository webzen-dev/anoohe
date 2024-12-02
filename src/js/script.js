// start project *_* );
const PageRoutingButton = document.getElementById("menu-page-routing-button");
const PageRoutingBox = document.getElementById("menu-page-routing-box");
const searchBox = document.getElementById("search-box");
const closeSearchBoxButton = document.getElementById("close-search-box-button");
function openSearchBox() {
  searchBox.style.display = "flex";
}
closeSearchBoxButton?.addEventListener("click", () => {
  searchBox.style.display = "none";
});
PageRoutingBox.style.display = "none";

PageRoutingButton.innerHTML = '<i class="bi bi-list"></i>';
PageRoutingButton?.addEventListener("click", () => {
  if (PageRoutingBox.style.display === "none") {
    PageRoutingBox.style.display = "flex";
    PageRoutingButton.innerHTML = '<i class="bi bi-x-lg"></i>';
  } else {
    PageRoutingBox.style.display = "none";
    PageRoutingButton.innerHTML = '<i class="bi bi-list"></i>';
  }
});

const loginBox = document.querySelector("header .login");
const openLoginBoxBtn = document.querySelector(".profile-button");
openLoginBoxBtn.addEventListener("click", () => {
  loginBox.style.display = "flex";
});
document.querySelector(".close-login-box").addEventListener("click", () => {
  loginBox.style.display = "none";
});
const inputs = document.querySelectorAll(".authenticate-box .input-box input");

inputs.forEach((input, index) => {
  input.addEventListener("input", (event) => {
    const value = event.target.value;

    if (!isNaN(value) && value.length === 1) {
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    } else {
      event.target.value = "";
    }
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Backspace" && !input.value && index > 0) {
      inputs[index - 1].focus();
    }
  });
});
//open authenticate box
document
  .querySelector("header .login .login-button")
  .addEventListener("click", () => {
    document.querySelector(".authenticate-box").style.display = "flex";
  });
document
  .querySelector(".close-authenticate-box")
  .addEventListener("click", () => {
    document.querySelector(".authenticate-box").style.display = "none";
    loginBox.style.display = "none";
  });
const phoneInput = document.querySelector(".login-input");

phoneInput.addEventListener("input", () => {
  if (phoneInput.value.length > 11) {
    phoneInput.value = phoneInput.value.slice(0, 11);
  }
});

const cutomBox = document.querySelector(".customize-box");
document
  .querySelector(".request-to-customize")
  ?.addEventListener("click", () => {
    cutomBox.style.display = "flex";
  });
document.querySelector(".close-custom-box")?.addEventListener("click", () => {
  cutomBox.style.display = "none";
});
document.querySelectorAll(".home-product-link").forEach((productItem) => {
  const colorElements = productItem.querySelectorAll(".color");

  colorElements.forEach((colorElement) => {
    const colorValue = colorElement.getAttribute("data-color");
    if (colorValue) {
      colorElement.style.backgroundColor = colorValue;
    } else {
      console.warn("No color value found for this element.");
    }
  });
});

document.querySelectorAll(".home-product-item").forEach((productItem) => {
  productItem.addEventListener("click", (event) => {
    const target = event.target;

    if (target.closest(".sticker")) {
      event.preventDefault();
      console.log("محصول به سبد خرید اضافه شد!");
    }
  });
});
let layoutDirection = "isVertical";

const shopToolbarVerticalButton = document.getElementById(
  "shop-toolbar-vertical-button"
);
const shopToolbarHorizontalButton = document.getElementById(
  "shop-toolbar-horizontal-button"
);

const homeProductItems = document.querySelectorAll(".home-product-link");

function changeLayoutDirection(direction) {
  layoutDirection = direction;

  homeProductItems.forEach((item) => {
    if (layoutDirection === "isVertical") {
      item.classList.remove("home-product-item-horizontal");
      item.classList.add("home-product-item");
    } else if (layoutDirection === "isHorizontal") {
      item.classList.remove("home-product-item");
      item.classList.add("home-product-item-horizontal");
    }
  });
}

shopToolbarVerticalButton?.addEventListener("click", () =>
  changeLayoutDirection("isVertical")
);

shopToolbarHorizontalButton?.addEventListener("click", () =>
  changeLayoutDirection("isHorizontal")
);
function homeCategoryBoxFunc() {
  let isDown = false;
  let startX;
  let scrollLeft;
  const slider = document.getElementById("home-category-box");

  const end = () => {
    isDown = false;
    slider.classList.remove("active");
  };

  const start = (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };

  const move = (e) => {
    if (!isDown) return;

    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    const dist = x - startX;
    slider.scrollLeft = scrollLeft - dist;
  };

  (() => {
    slider?.addEventListener("mousedown", start);
    slider?.addEventListener("touchstart", start);

    slider?.addEventListener("mousemove", move);
    slider?.addEventListener("touchmove", move);

    slider?.addEventListener("mouseleave", end);
    slider?.addEventListener("mouseup", end);
    slider?.addEventListener("touchend", end);
  })();
}
homeCategoryBoxFunc();

function changeWhatsappPosition() {
  const elmnt = document.getElementById("whatsaapicon");
  if (!elmnt) {
    console.warn("Element with ID 'whatsaapicon' not found.");
    return;
  }
  dragElement(elmnt);

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    elmnt.onmousedown = dragMouseDown;
    elmnt.ontouchstart = dragTouchStart;

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();

      pos3 = e.clientX;
      pos4 = e.clientY;

      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;

      elmnt.setAttribute("draggable", "false");
    }

    function dragTouchStart(e) {
      e = e || window.event;
      e.preventDefault();

      const touch = e.touches[0];
      pos3 = touch.clientX;
      pos4 = touch.clientY;

      document.ontouchend = closeDragElement;
      document.ontouchmove = elementDrag;

      elmnt.setAttribute("draggable", "false");
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      pos1 = pos3 - clientX;
      pos2 = pos4 - clientY;
      pos3 = clientX;
      pos4 = clientY;

      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
      document.ontouchend = null;
      document.ontouchmove = null;

      elmnt.setAttribute("draggable", "true");
    }
  }
}

changeWhatsappPosition();
const whatsappIcon = document.getElementById("whatsaapicon");
whatsappIcon?.addEventListener("click", (e) => {
  if (!whatsappIcon.hasAttribute("draggable")) {
    e.preventDefault();
  }
});
//
function pagination() {
  const paginationNumbers = document.getElementById("pagination-numbers");
  const paginatedList = document.getElementById("home-paginated-list");

  if (!paginatedList) {
    console.warn("Element with ID 'home-paginated-list' not found.");
    return;
  }

  const listItems = paginatedList.querySelectorAll(".home-product-item");
  const nextButton = document.getElementById("pagination-next-button");
  const prevButton = document.getElementById("pagination-prev-button");

  const paginationLimit = 10;
  const pageCount = Math.ceil(listItems.length / paginationLimit);
  let currentPage = 1;

  const disableButton = (button) => {
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
  };

  const enableButton = (button) => {
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
  };

  const handlePageButtonsStatus = () => {
    if (currentPage === 1) {
      disableButton(prevButton);
    } else {
      enableButton(prevButton);
    }

    if (currentPage === pageCount) {
      disableButton(nextButton);
    } else {
      enableButton(nextButton);
    }
  };

  const handleActivePageNumber = () => {
    document.querySelectorAll(".pagination-number").forEach((button) => {
      button.classList.remove("active");
      const pageIndex = Number(button.getAttribute("page-index"));
      if (pageIndex === currentPage) {
        button.classList.add("active");
      }
    });
  };

  const appendPageNumber = (index) => {
    const pageNumber = document.createElement("button");
    pageNumber.className = "pagination-number";
    pageNumber.innerHTML = index;
    pageNumber.setAttribute("page-index", index);
    pageNumber.setAttribute("aria-label", "Page " + index);

    pageNumber.addEventListener("click", () => {
      setCurrentPage(index);
    });

    paginationNumbers.appendChild(pageNumber);
  };

  const getPaginationNumbers = () => {
    for (let i = 1; i <= pageCount; i++) {
      appendPageNumber(i);
    }
  };

  const setCurrentPage = (pageNum) => {
    currentPage = pageNum;

    handleActivePageNumber();
    handlePageButtonsStatus();

    const prevRange = (pageNum - 1) * paginationLimit;
    const currRange = pageNum * paginationLimit;

    listItems.forEach((item, index) => {
      if (index >= prevRange && index < currRange) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  };

  window.addEventListener("load", () => {
    getPaginationNumbers();
    setCurrentPage(1);

    prevButton.addEventListener("click", () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    });

    nextButton.addEventListener("click", () => {
      if (currentPage < pageCount) {
        setCurrentPage(currentPage + 1);
      }
    });
  });
}

// product detail script
function productDetail() {
  const largImage = document.querySelector(
    ".product-detail-page .product-detail .image-box .larg-image img"
  );
  const smallImages = document.querySelectorAll(
    ".product-detail-page .product-detail .image-box .small-image img"
  );
  const smallImageContainer = document.querySelector(
    ".product-detail-page .product-detail .image-box .small-image"
  );

  smallImages.forEach((img) => {
    img.setAttribute("draggable", false);

    img.addEventListener("click", () => {
      largImage.src = img.src;
    });
  });

  let isDragging = false;
  let startX, scrollLeft;

  smallImageContainer?.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - smallImageContainer.offsetLeft;
    scrollLeft = smallImageContainer.scrollLeft;
    smallImageContainer.style.cursor = "grabbing";
  });

  smallImageContainer?.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - smallImageContainer.offsetLeft;
    const walk = (x - startX) * 1.5;
    smallImageContainer.scrollLeft = scrollLeft - walk;
  });

  smallImageContainer?.addEventListener("mouseup", () => {
    isDragging = false;
    smallImageContainer.style.cursor = "grab";
  });

  smallImageContainer?.addEventListener("mouseleave", () => {
    isDragging = false;
    smallImageContainer.style.cursor = "grab";
  });

  smallImageContainer?.addEventListener("touchstart", (e) => {
    isDragging = true;
    const touch = e.touches[0];
    startX = touch.pageX - smallImageContainer.offsetLeft;
    scrollLeft = smallImageContainer.scrollLeft;
  });

  smallImageContainer?.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const x = touch.pageX - smallImageContainer.offsetLeft;
    const walk = (x - startX) * 1.5;
    smallImageContainer.scrollLeft = scrollLeft - walk;
  });

  smallImageContainer?.addEventListener("touchend", () => {
    isDragging = false;
  });

  const sizeItem = document.querySelectorAll(".product-detail .size-box .size");

  sizeItem.forEach((item) => {
    item?.addEventListener("click", () => {
      sizeItem.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");

      const selectedSize = item.textContent.trim();
      localStorage.setItem("selectedSize", selectedSize);
    });
  });

  const colorBoxContainer = document.querySelector(
    ".product-detail-page .product-detail .detail-box .specifications-box .color-box .box"
  );

  const colors = [];
  if (colorBoxContainer) {
    const colorItems = colorBoxContainer.querySelectorAll(".color");

    colorItems.forEach((colorDiv) => {
      const color = colorDiv.getAttribute("data-color");
      if (color) {
        colors.push(color);
        const spanElmt = colorDiv.querySelector("span");

        spanElmt.style.backgroundColor = color;
        colorDiv.style.borderColor = color;
      }
    });
  }

  const colorItems = document.querySelectorAll(
    ".product-detail-page .product-detail .detail-box .specifications-box .color-box .box .color"
  );

  window.addEventListener("load", () => {
    const savedSize = localStorage.getItem("selectedSize");
    const savedColor = localStorage.getItem("selectedColor");

    if (savedSize) {
      sizeItem.forEach((el) => {
        if (el.textContent.trim() === savedSize) {
          el.classList.add("active");
        }
      });
    } else {
      sizeItem[0]?.classList.add("active");
    }

    if (savedColor) {
      colorItems.forEach((el) => {
        if (el.getAttribute("data-color") === savedColor) {
          el.classList.add("active");
        }
      });
    } else {
      colorItems[0]?.classList.add("active");
    }
  });

  colorItems.forEach((item) => {
    item?.addEventListener("click", () => {
      colorItems.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");

      const selectedColor = item.getAttribute("data-color");
      localStorage.setItem("selectedColor", selectedColor);
    });
  });
}

const productFillter = document.getElementById("fillter-prodcuts");

document
  .getElementById("shop-toolbar-fillter")
  ?.addEventListener("click", () => {
    if (productFillter.style.display === "flex") {
      productFillter.style.display = "none";
    } else {
      productFillter.style.display = "flex";
    }
  });

function productSlider() {
  const similarProductsContainer = document.querySelector(
    ".similar-products-slider"
  );
  const prevButton = document.querySelector(".prev-similar-product-button");
  const nextButton = document.querySelector(".next-similar-product-button");

  let isDragging = false;
  let startX, scrollLeft;

  similarProductsContainer?.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - similarProductsContainer.offsetLeft;
    scrollLeft = similarProductsContainer.scrollLeft;
    similarProductsContainer.style.cursor = "grabbing";
  });

  similarProductsContainer?.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - similarProductsContainer.offsetLeft;
    const walk = (x - startX) * 1.5;
    similarProductsContainer.scrollLeft = scrollLeft - walk;
  });

  similarProductsContainer?.addEventListener("mouseup", () => {
    isDragging = false;
    similarProductsContainer.style.cursor = "grab";
  });

  similarProductsContainer?.addEventListener("mouseleave", () => {
    isDragging = false;
    similarProductsContainer.style.cursor = "grab";
  });

  similarProductsContainer?.addEventListener("touchstart", (e) => {
    isDragging = true;
    const touch = e.touches[0];
    startX = touch.pageX - similarProductsContainer.offsetLeft;
    scrollLeft = similarProductsContainer.scrollLeft;
  });

  similarProductsContainer?.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const x = touch.pageX - similarProductsContainer.offsetLeft;
    const walk = (x - startX) * 1.5;
    similarProductsContainer.scrollLeft = scrollLeft - walk;
  });

  similarProductsContainer?.addEventListener("touchend", () => {
    isDragging = false;
  });

  prevButton?.addEventListener("click", () => {
    similarProductsContainer.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  });

  nextButton?.addEventListener("click", () => {
    similarProductsContainer.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  });
}
// Number of products in the shopping cart
function totalProductItem() {
  const STORAGE_KEY = "productCount";

  function getSavedCount() {
    return parseInt(localStorage.getItem(STORAGE_KEY), 10) || 1;
  }

  function saveCount(count) {
    localStorage.setItem(STORAGE_KEY, count);
  }

  const productCounter = document.querySelector(".product-counter-box span");
  const increaseButton = document.querySelector(
    ".product-counter-box .increase-product"
  );
  const decreaseButton = document.querySelector(
    ".product-counter-box .decrease-product"
  );
  const mainProductPrice = document.querySelector(".main-product-price");
  const totalProductPrice = document.querySelector(".total-product-price");

  let number = getSavedCount();

  let pricePerUnit =
    parseInt(mainProductPrice.textContent.replace(/\D/g, ""), 10) || 0;

  productCounter.textContent = number;

  const updateTotalPrice = () => {
    totalProductPrice.textContent =
      "مجموع قیمت  کل :  " +
      (number * pricePerUnit).toLocaleString() +
      " تومان";
  };

  const updateDecreaseButtonState = () => {
    decreaseButton.disabled = number <= 1;
  };

  updateTotalPrice();
  updateDecreaseButtonState();

  increaseButton?.addEventListener("click", () => {
    number += 1;
    productCounter.textContent = number;
    saveCount(number);
    updateTotalPrice();
    updateDecreaseButtonState();
  });

  decreaseButton?.addEventListener("click", () => {
    if (number > 1) {
      number -= 1;
      productCounter.textContent = number;
      saveCount(number);
      updateTotalPrice();
      updateDecreaseButtonState();
    }
  });
  window.addEventListener("beforeunload", () => {
    saveCount(number);
  });
}

function handleAddToCart() {
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

  function updateCart(
    productId,
    productName,
    productSize,
    productColor,
    productPrice,
    newQuantity
  ) {
    const cart = JSON.parse(getCookie("cart") || "[]");

    const productIndex = cart.findIndex((item) => item.id === productId);
    const productImage = document.querySelector(
      ".product-detail-page .product-detail .image-box .larg-image img"
    )?.dataset.src;

    if (productIndex !== -1) {
      if (newQuantity > 0) {
        cart[productIndex].quantity = newQuantity;
        cart[productIndex].size = productSize;
        cart[productIndex].color = productColor;
      } else {
        cart.splice(productIndex, 1);
      }
    } else if (newQuantity > 0) {
      cart.push({
        id: productId,
        name: productName,
        price: productPrice,
        size: productSize,
        color: productColor,
        quantity: newQuantity,
        image: productImage,
      });
    }

    setCookie("cart", JSON.stringify(cart), 7);
  }

  function updateAddToCartButton() {
    const cart = JSON.parse(getCookie("cart") || "[]");
    const productElement = document.querySelector(".product-detail");
    const productId = productElement?.dataset.id;

    const existingProduct = cart.find((item) => item.id === productId);

    const addToCartButton = document.querySelector(
      ".add-product-to-cart-box button"
    );
    if (existingProduct) {
      addToCartButton.textContent = `${existingProduct.quantity} محصول اضافه شده`;
    } else {
      addToCartButton.textContent = "افزودن به سبد خرید";
    }
  }

  const productName =
    document.querySelector(".title")?.textContent.trim() || "";
  const productPriceElement = document.querySelector(".main-product-price");
  const productPrice = productPriceElement
    ? parseInt(productPriceElement.textContent.replace(/\D/g, ""), 10)
    : 0;

  const productCounterSpan = document.querySelector(
    ".product-counter-box span"
  );
  const increaseButton = document.querySelector(".increase-product");
  const decreaseButton = document.querySelector(".decrease-product");
  const addToCartButton = document.querySelector(
    ".add-product-to-cart-box button"
  );

  if (
    !productCounterSpan ||
    !increaseButton ||
    !decreaseButton ||
    !addToCartButton
  ) {
    console.error(
      "عناصر مربوط به شمارنده یا دکمه‌های اضافه‌کردن به سبد خرید یافت نشدند."
    );
    return;
  }

  let productCounter = parseInt(productCounterSpan.textContent, 10) || 1;
  productCounterSpan.textContent = productCounter;

  const updateCounterAndCart = () => {
    productCounterSpan.textContent = productCounter;
  };

  increaseButton.addEventListener("click", () => {
    productCounter += 1;
    updateCounterAndCart();
  });

  decreaseButton.addEventListener("click", () => {
    if (productCounter > 1) {
      productCounter -= 1;
      updateCounterAndCart();
    }
  });

  addToCartButton.addEventListener("click", () => {
    const productSize = localStorage.getItem("selectedSize") || "ندارد";
    const productColor = localStorage.getItem("selectedColor") || "ندارد";
    const productElement = document.querySelector(".product-detail");
    const productId = productElement?.dataset.id;

    updateCart(
      productId,
      productName,
      productSize,
      productColor,
      productPrice,
      productCounter
    );
    alert("محصول به سبد خرید اضافه شد!");
    updateAddToCartButton();
  });

  const sizeItems = document.querySelectorAll(
    ".product-detail .size-box .size"
  );
  sizeItems.forEach((item) => {
    item?.addEventListener("click", () => {
      sizeItems.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");

      const selectedSize = item.textContent.trim();
      localStorage.setItem("selectedSize", selectedSize);
      updateAddToCartButton();
    });
  });

  const colorItems = document.querySelectorAll(
    ".product-detail .specifications-box .color-box .color"
  );
  colorItems.forEach((item) => {
    item?.addEventListener("click", () => {
      colorItems.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");

      const selectedColor = item.getAttribute("data-color");
      localStorage.setItem("selectedColor", selectedColor);
      updateAddToCartButton();
    });
  });

  window.addEventListener("load", () => {
    const selectedSize = localStorage.getItem("selectedSize");
    const selectedColor = localStorage.getItem("selectedColor");

    if (selectedSize) {
      sizeItems.forEach((item) => {
        if (item.textContent.trim() === selectedSize) {
          item.classList.add("active");
        }
      });
    }

    if (selectedColor) {
      colorItems.forEach((item) => {
        if (item.getAttribute("data-color") === selectedColor) {
          item.classList.add("active");
        }
      });
    }

    updateAddToCartButton();
  });
}
function entetyProdocut() {
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  const shoppingCartLink = document.querySelector(".shopping-cart-link");
  if (!shoppingCartLink) return;

  const isActive = shoppingCartLink.querySelector(".isAcive");

  const cartCookie = getCookie("cart");
  const cart = cartCookie ? JSON.parse(cartCookie) : [];

  const uniqueProducts = cart.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = { ...item };
    } else {
      acc[item.id].quantity += item.quantity;
    }
    return acc;
  }, {});

  const totalUniqueItems = Object.keys(uniqueProducts).length;

  if (totalUniqueItems > 0) {
    isActive.classList.add("visible");
    isActive.textContent = totalUniqueItems;
  } else {
    isActive.classList.remove("visible");
    isActive.style.display = "none";
  }
}

function updateShoppingCart(newCart) {
  setCookie("cart", JSON.stringify(newCart), 7);
  entetyProdocut();
}

window.addEventListener("load", () => {
  entetyProdocut();
});

function addToCart(product) {
  const cartCookie = getCookie("cart");
  let cart = cartCookie ? JSON.parse(cartCookie) : [];

  const existingProductIndex = cart.findIndex((item) => item.id === product.id);

  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity += product.quantity;
  } else {
    cart.push(product);
  }

  updateShoppingCart(cart);
}
function manageShoppingCart() {
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return JSON.parse(parts.pop().split(";").shift());
    }
    return null;
  }

  function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${JSON.stringify(
      value
    )}; expires=${expires}; path=/`;
  }

  const cartData = getCookie("cart");
  const products = cartData ? cartData : [];

  const productList = document.querySelector(
    ".shopping-cart .box .child-box .product-list"
  );
  productList.innerHTML = "";

  products.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");
    productItem.dataset.productId = product.id;

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image");
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    image.draggable = false;
    imageDiv.appendChild(image);

    const textBox = document.createElement("div");
    textBox.classList.add("text-box");

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");
    const nameDiv = document.createElement("div");
    nameDiv.classList.add("name");
    nameDiv.textContent = product.name;
    const sizeSpan = document.createElement("span");
    sizeSpan.textContent = `سایز : ${product.size}`;
    const colorDiv = document.createElement("div");
    colorDiv.textContent = `رنگ: `;
    const colorBox = document.createElement("span");
    colorBox.style.backgroundColor = product.color;
    colorBox.style.display = "inline-block";
    colorBox.style.width = "20px";
    colorBox.style.height = "20px";
    colorBox.style.marginRight = "5px";
    colorBox.style.border = "1px solid #ccc";
    colorBox.style.borderRadius = "50%";
    colorDiv.appendChild(colorBox);
    infoDiv.appendChild(nameDiv);
    infoDiv.appendChild(sizeSpan);
    infoDiv.appendChild(colorDiv);
    textBox.appendChild(infoDiv);

    const priceDiv = document.createElement("div");
    priceDiv.classList.add("price");
    priceDiv.textContent = `${product.price.toLocaleString()} تومان`;
    textBox.appendChild(priceDiv);

    const counterDiv = document.createElement("div");
    counterDiv.classList.add("counter");
    const increaseButton = document.createElement("button");
    increaseButton.classList.add("increase-counter-product-button");
    increaseButton.innerHTML = '<i class="bi bi-plus-lg"></i>';
    const quantitySpan = document.createElement("span");
    quantitySpan.classList.add("counter-number");
    quantitySpan.textContent = product.quantity;
    const decreaseButton = document.createElement("button");
    decreaseButton.classList.add("decrease-counter-product-button");
    decreaseButton.innerHTML = '<i class="bi bi-dash-lg"></i>';
    counterDiv.appendChild(increaseButton);
    counterDiv.appendChild(quantitySpan);
    counterDiv.appendChild(decreaseButton);
    textBox.appendChild(counterDiv);

    const totalPriceDiv = document.createElement("div");
    totalPriceDiv.classList.add("main-price");
    const totalPrice = product.price * product.quantity;
    totalPriceDiv.textContent = `${totalPrice.toLocaleString()} تومان`;
    textBox.appendChild(totalPriceDiv);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-shopping-product-item");
    deleteButton.innerHTML = '<i class="bi bi-trash3"></i>';
    productItem.appendChild(imageDiv);
    productItem.appendChild(textBox);
    productItem.appendChild(deleteButton);
    productList.appendChild(productItem);

    increaseButton.addEventListener("click", () => {
      product.quantity += 1;
      quantitySpan.textContent = product.quantity;
      totalPriceDiv.textContent = `${(
        product.price * product.quantity
      ).toLocaleString()} تومان`;
      setCookie("cart", products, 7);
    });

    decreaseButton.addEventListener("click", () => {
      if (product.quantity > 1) {
        product.quantity -= 1;
        quantitySpan.textContent = product.quantity;
        totalPriceDiv.textContent = `${(
          product.price * product.quantity
        ).toLocaleString()} تومان`;
        setCookie("cart", products, 7);
      }
    });

    deleteButton.addEventListener("click", () => {
      const index = products.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        products.splice(index, 1);
        setCookie("cart", products, 7);
        productItem.remove();
      }
    });
  });
}
function updateCartTotal() {
  const cartCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("cart="));

  if (!cartCookie) {
    console.warn("کوکی 'cart' پیدا نشد!");
    return;
  }

  try {
    const cart = JSON.parse(decodeURIComponent(cartCookie.split("=")[1]));

    const totalPrice = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

    const totalPriceElement = document.querySelector(
      ".form-chekout .total-price"
    );
    const grandPriceElement = document.querySelector(
      ".form-chekout .grand-total"
    );
    if (totalPriceElement) {
      totalPriceElement.textContent = `${totalPrice.toLocaleString(
        "fa-IR"
      )} تومان`;
      grandPriceElement.textContent = `${totalPrice.toLocaleString(
        "fa-IR"
      )} تومان`;
    } else {
      console.warn("عنصر '.total-price' در صفحه پیدا نشد!");
    }

    const totalQuantityElement = document.querySelector(".total-quantity");
    if (totalQuantityElement) {
      totalQuantityElement.textContent = totalQuantity;
    } else {
      console.warn("عنصر '.total-quantity' در صفحه پیدا نشد!");
    }
  } catch (error) {
    console.error("خطا در پردازش کوکی 'cart':", error);
  }
}
function validateCooperationInput(input) {
  const errorMessage = document.getElementById("error-message");
  const value = input.value;

  if (!/^\d*$/.test(value)) {
    input.value = value.replace(/\D/g, "");
    return;
  }

  if (value.length > 11) {
    input.value = value.slice(0, 11);
    return;
  }

  if (value.length === 11 && !/^09\d{9}$/.test(value)) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
}
document
  .querySelectorAll(".frequently-asked-questions .questions-item")
  .forEach((item) => {
    item?.addEventListener("click", () => {
      const answer = item.querySelector(".answer");
      const icon = item.querySelector(".bi");

      if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.classList.replace("bi-dash-lg", "bi-plus-lg");
      } else {
        answer.style.display = "block";
        icon.classList.replace("bi-plus-lg", "bi-dash-lg");
      }
    });
  });

function shouldShowLayer() {
  const lastClickTime = localStorage.getItem("lastClickTime");
  if (!lastClickTime) return true;

  const now = new Date().getTime();
  const twoHoursInMilliseconds = 2 * 60 * 60 * 1000;

  return now - lastClickTime > twoHoursInMilliseconds;
}

document.addEventListener("DOMContentLoaded", () => {
  const detailLayer = document.querySelector(".detail-layer");
  const detailLayerButton = document.querySelector(".detail-layer-button");

  if (shouldShowLayer()) {
    detailLayer.style.display = "flex";
  } else {
    detailLayer.style.display = "none";
  }

  detailLayerButton?.addEventListener("click", () => {
    detailLayer.style.display = "none";
    localStorage.setItem("lastClickTime", new Date().getTime());
  });
});
document.addEventListener("DOMContentLoaded", () => {
  pagination();
  productSlider();
  productDetail();
  handleAddToCart();
  updateCartTotal();
  manageShoppingCart();
  entetyProdocut();
  totalProductItem();
  shouldShowLayer();
  validateCooperationInput();
});
