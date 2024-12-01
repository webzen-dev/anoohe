// start project *_* );
const PageRoutingButton = document.getElementById("menu-page-routing-button");
const PageRoutingBox = document.getElementById("menu-page-routing-box");
const searchBox = document.getElementById("search-box");
const closeSearchBoxButton = document.getElementById("close-search-box-button");
function openSearchBox() {
  searchBox.style.display = "flex";
}
closeSearchBoxButton.addEventListener("click", () => {
  searchBox.style.display = "none";
});
PageRoutingBox.style.display = "none";

PageRoutingButton.innerHTML = '<i class="bi bi-list"></i>';
PageRoutingButton.addEventListener("click", () => {
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
const products = [
  {
    id: 1,
    colors: ["Brown", "Cream", "Gray"],
  },
  {
    id: 2,
    colors: ["Orange", "White"],
  },
  {
    id: 3,
    colors: ["Black", "Red"],
  },
  {
    id: 4,
    colors: ["Brown", "Cream", "Gray"],
  },
  {
    id: 5,
    colors: ["Orange", "White"],
  },
  {
    id: 6,
    colors: ["Brown", "Cream", "Gray"],
  },
  {
    id: 7,
    colors: ["Orange", "White"],
  },
  {
    id: 8,
    colors: ["Black", "Red"],
  },
  {
    id: 9,
    colors: ["Brown", "Cream", "Gray"],
  },
  {
    id: 10,
    colors: ["Orange", "White"],
  },
  {
    id: 11,
    colors: ["Brown", "Cream", "Gray"],
  },
  {
    id: 12,
    colors: ["Orange", "White"],
  },
];

const colorMapping = {
  Brown: "#a5702a",
  Cream: "#FFFDD0",
  Red: "#FF0000",
  Gray: "#434343",
  Orange: "#FFA500",
  White: "#f0f0f0",
  Black: "#000000",
};
const homeProductItem = document
  .querySelectorAll(".home-product-link")
  .forEach((productItem, index) => {
    const productColors = products[index]?.colors || [];
    const productColorsContainer = productItem.querySelector(".colors");

    productColors.forEach((colorName) => {
      const colorDiv = document.createElement("div");
      colorDiv.classList.add("color");

      if (colorMapping[colorName]) {
        colorDiv.style.backgroundColor = colorMapping[colorName];
      } else {
        console.warn(`Color "${colorName}" not found in colorMapping.`);
      }

      productColorsContainer.appendChild(colorDiv);
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

function shoppingCart() {
  const chekoutForm = document.querySelector(".form-chekout");
  chekoutForm?.querySelectorAll('input[type="number"]').forEach((input) => {
    input?.addEventListener("input", () => {
      if (input.value.length > 11) {
        input.value = input.value.slice(0, 11);
      }
    });
  });
  const productItems = document.querySelectorAll(".product-item");

  productItems.forEach((item) => {
    const counter = item.querySelector(".counter-number");
    const increaseButton = item.querySelector(
      ".increase-counter-product-button"
    );
    const decreaseButton = item.querySelector(
      ".decrease-counter-product-button"
    );
    const deleteButton = item.querySelector(".delete-shopping-product-item");

    let countNumber = parseInt(counter.textContent, 10);

    increaseButton.addEventListener("click", () => {
      countNumber += 1;
      counter.textContent = countNumber;
    });

    decreaseButton.addEventListener("click", () => {
      if (countNumber > 1) {
        countNumber -= 1;
        counter.textContent = countNumber;
      }
    });

    deleteButton.addEventListener("click", () => {
      item.remove();
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
  let pricePerUnit = parseInt(
    mainProductPrice.textContent.replace(/\D/g, ""),
    10
  );

  if (isNaN(pricePerUnit)) {
    pricePerUnit = 0;
  }

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
      return JSON.parse(parts.pop().split(';').shift());
    }
    return null;
  }

  function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${JSON.stringify(value)}; expires=${expires}; path=/`;
  }

  const cartData = getCookie('cart');
  const products = cartData ? cartData : []; 

  const productList = document.querySelector('.shopping-cart .box .child-box .product-list');
  productList.innerHTML = '';

  products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.dataset.productId = product.id;

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image');
    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.name;
    image.draggable = false;
    imageDiv.appendChild(image);

    const textBox = document.createElement('div');
    textBox.classList.add('text-box');

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');
    nameDiv.textContent = product.name;
    const sizeSpan = document.createElement('span');
    sizeSpan.textContent = `سایز : ${product.size}`;
    const colorDiv = document.createElement('div');
    colorDiv.textContent = `رنگ: `;
    const colorBox = document.createElement('span');
    colorBox.style.backgroundColor = product.color;
    colorBox.style.display = 'inline-block';
    colorBox.style.width = '20px';
    colorBox.style.height = '20px';
    colorBox.style.marginRight = '5px';
    colorBox.style.border = '1px solid #ccc';
    colorBox.style.borderRadius = '50%';
    colorDiv.appendChild(colorBox);
    infoDiv.appendChild(nameDiv);
    infoDiv.appendChild(sizeSpan);
    infoDiv.appendChild(colorDiv);
    textBox.appendChild(infoDiv);

    const priceDiv = document.createElement('div');
    priceDiv.classList.add('price');
    priceDiv.textContent = `${product.price.toLocaleString()} تومان`;
    textBox.appendChild(priceDiv);

    const counterDiv = document.createElement('div');
    counterDiv.classList.add('counter');
    const increaseButton = document.createElement('button');
    increaseButton.classList.add('increase-counter-product-button');
    increaseButton.innerHTML = '<i class="bi bi-plus-lg"></i>';
    const quantitySpan = document.createElement('span');
    quantitySpan.classList.add('counter-number');
    quantitySpan.textContent = product.quantity;
    const decreaseButton = document.createElement('button');
    decreaseButton.classList.add('decrease-counter-product-button');
    decreaseButton.innerHTML = '<i class="bi bi-dash-lg"></i>';
    counterDiv.appendChild(increaseButton);
    counterDiv.appendChild(quantitySpan);
    counterDiv.appendChild(decreaseButton);
    textBox.appendChild(counterDiv);

    const totalPriceDiv = document.createElement('div');
    totalPriceDiv.classList.add('main-price');
    const totalPrice = product.price * product.quantity;
    totalPriceDiv.textContent = `${totalPrice.toLocaleString()} تومان`;
    textBox.appendChild(totalPriceDiv);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-shopping-product-item');
    deleteButton.innerHTML = '<i class="bi bi-trash3"></i>';
    productItem.appendChild(imageDiv);
    productItem.appendChild(textBox);
    productItem.appendChild(deleteButton);
    productList.appendChild(productItem);

    increaseButton.addEventListener("click", () => {
      product.quantity += 1;
      quantitySpan.textContent = product.quantity;
      totalPriceDiv.textContent = `${(product.price * product.quantity).toLocaleString()} تومان`;
      setCookie('cart', products, 7);
    });

    decreaseButton.addEventListener("click", () => {
      if (product.quantity > 1) {
        product.quantity -= 1;
        quantitySpan.textContent = product.quantity;
        totalPriceDiv.textContent = `${(product.price * product.quantity).toLocaleString()} تومان`;
        setCookie('cart', products, 7); 
      }
    });

    deleteButton.addEventListener("click", () => {
      const index = products.findIndex(p => p.id === product.id);
      if (index !== -1) {
        products.splice(index, 1);
        setCookie('cart', products, 7);
        productItem.remove();
      }
    });
  });
}
function updateCheckoutSummary() {
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return decodeURIComponent(parts.pop().split(';').shift()); 
    }
    return null; 
  }

  const cartData = getCookie('cart');
  const products = cartData ? JSON.parse(cartData) : [];

  

  let totalPrice = 0;
  let totalQuantity = 0;

  products.forEach(product => {
    totalPrice += product.price * product.quantity;
    totalQuantity += product.quantity; 
  });

  const formCheckout = document.querySelector('.shopping-cart .form-checkout');
  if (formCheckout) {
    const totalPriceElement = formCheckout.querySelector('.child-box .total-price'); 
    const totalQuantityElement = formCheckout.querySelector('.child-box .total-quantity');
    const grandTotalElement = formCheckout.querySelector('.child-box .grand-total'); 

    if (totalPriceElement) totalPriceElement.textContent = `${totalPrice.toLocaleString()} تومان`;
    if (totalQuantityElement) totalQuantityElement.textContent = `${totalQuantity}`;
    if (grandTotalElement) grandTotalElement.textContent = `${totalPrice.toLocaleString()} تومان`;
  }
}



updateCheckoutSummary();
document.addEventListener("DOMContentLoaded", () => {
  // renderCartItems();  
  pagination();
  // shoppingCart();
  productSlider();
  productDetail();
  handleAddToCart();
  manageShoppingCart();
  entetyProdocut();
  totalProductItem();
});
