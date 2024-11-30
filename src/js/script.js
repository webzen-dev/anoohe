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
    });
  });

  const color = ["Brown", "Red", "Gray", "Orange", "White", "Black"];

  const colorMapping = {
    Brown: "#a5702a",
    Cream: "#FFFDD0",
    Gray: "#434343",
    Red: "#FF0000",
    Orange: "#FFA500",
    White: "#f0f0f0",
    Black: "#000000",
  };

  const colorBoxContainer = document.querySelector(
    ".product-detail-page .product-detail .detail-box .specifications-box .color-box .box"
  );

  if (colorBoxContainer) {
    color.forEach((colorName) => {
      const colorDiv = document.createElement("div");
      colorDiv.classList.add("color");
      const spanElmt = document.createElement("span");

      if (colorMapping[colorName]) {
        spanElmt.style.backgroundColor = colorMapping[colorName];
        colorDiv.style.borderColor = colorMapping[colorName];
      } else {
        console.warn(`Color "${colorName}" not found in colorMapping.`);
      }

      colorDiv.appendChild(spanElmt);
      colorBoxContainer.appendChild(colorDiv);
    });
  }

  const colorItems = document.querySelectorAll(
    ".product-detail-page .product-detail .detail-box .specifications-box .color-box .box .color"
  );

  if (colorItems.length > 0) {
    colorItems[0].classList.add("active");
  }

  colorItems.forEach((item) => {
    item?.addEventListener("click", () => {
      colorItems.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
    });
  });
}

productDetail();
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

  similarProductsContainer.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - similarProductsContainer.offsetLeft;
    scrollLeft = similarProductsContainer.scrollLeft;
    similarProductsContainer.style.cursor = "grabbing";
  });

  similarProductsContainer.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - similarProductsContainer.offsetLeft;
    const walk = (x - startX) * 1.5;
    similarProductsContainer.scrollLeft = scrollLeft - walk;
  });

  similarProductsContainer.addEventListener("mouseup", () => {
    isDragging = false;
    similarProductsContainer.style.cursor = "grab";
  });

  similarProductsContainer.addEventListener("mouseleave", () => {
    isDragging = false;
    similarProductsContainer.style.cursor = "grab";
  });

  similarProductsContainer.addEventListener("touchstart", (e) => {
    isDragging = true;
    const touch = e.touches[0];
    startX = touch.pageX - similarProductsContainer.offsetLeft;
    scrollLeft = similarProductsContainer.scrollLeft;
  });

  similarProductsContainer.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const x = touch.pageX - similarProductsContainer.offsetLeft;
    const walk = (x - startX) * 1.5;
    similarProductsContainer.scrollLeft = scrollLeft - walk;
  });

  similarProductsContainer.addEventListener("touchend", () => {
    isDragging = false;
  });

  prevButton.addEventListener("click", () => {
    similarProductsContainer.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  });

  nextButton.addEventListener("click", () => {
    similarProductsContainer.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  });
}
// Number of products in the shopping cart
function totalProductItem() {
  const productCounter = document.querySelector(".product-counter-box span");
  const increaseButton = document.querySelector(
    ".product-counter-box .increase-product"
  );
  const decreaseButton = document.querySelector(
    ".product-counter-box .decrease-product"
  );

  const mainProductPrice = document.querySelector(".main-product-price");
  const totalProductPrice = document.querySelector(".total-product-price");

  let number = parseInt(productCounter.textContent, 10);
  let pricePerUnit = parseInt(mainProductPrice.textContent.replace(/\D/g, ""), 10); 

  if (isNaN(number)) {
    number = 1;
    productCounter.textContent = number;
  }

  if (isNaN(pricePerUnit)) {
    pricePerUnit = 0;
  }

  const updateTotalPrice = () => {
    totalProductPrice.textContent ="مجموع قیمت  کل :  "+ (number * pricePerUnit).toLocaleString() + " تومان";
  };

  const updateDecreaseButtonState = () => {
    if (number <= 1) {
      decreaseButton.disabled = true;
    } else {
      decreaseButton.disabled = false;
    }
  };

  updateTotalPrice();
  updateDecreaseButtonState();

  increaseButton?.addEventListener("click", () => {
    number += 1;
    productCounter.textContent = number;
    updateTotalPrice();
    updateDecreaseButtonState();
  });

  decreaseButton?.addEventListener("click", () => {
    if (number > 1) {
      number -= 1;
      productCounter.textContent = number;
      updateTotalPrice();
      updateDecreaseButtonState();
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  pagination();
  shoppingCart();
  productSlider();
  totalProductItem();
});
