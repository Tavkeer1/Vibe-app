// sidebar
const menuItems = document.querySelectorAll(".menu-item");
// message
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
// search mechanism
const message = document.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");
// Theme customize
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
// fontsizechange
const fontSizes = document.querySelectorAll(".choose-size span");
// primary color
const colorPalette = document.querySelectorAll(".choose-color span");
// root
const root = document.querySelector(":root");
// background
const light = document.querySelector(".bg-1");
const dark = document.querySelector(".bg-3");
const dim = document.querySelector(".bg-2");
const para = document.querySelectorAll("p");
// friend request
const request = document.querySelectorAll(".action .accept");
const requestDecline = document.querySelectorAll(".action .decline");

const friendReq = document.querySelectorAll(".friend-requests .request");


// oo

// tyy

// sidebar //
// Function to remove active class from all menu items
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

// Function to toggle the display of the notification popup
const toggleNotificationPopup = () => {
  const notificationPopup = document.querySelector(".notification-popup");
  notificationPopup.style.display =
    notificationPopup.style.display === "block" ? "none" : "block";
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");

    if (item.id == "notifications") {
      toggleNotificationPopup();
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    } else {
      const notificationPopup = document.querySelector(".notification-popup");
      notificationPopup.style.display = "none";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "block";
    }
  });
});

messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotification.querySelector(".notification-count").style.display =
    "none";

  setTimeout(() => {
    messages.style.boxShadow = "none";
    messagesNotification.querySelector(".notification-count").style.display =
      "block";
  }, 2000);
});

const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();

  message.forEach((user) => {
    let name = user.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      user.style.display = "flex";
      console.log(name);
    } else {
      user.style.display = "none";
    }
  });
};

// search chat message
messageSearch.addEventListener("keyup", searchMessage);

// theme customization//
const openModal = () => {
  themeModal.style.display = "grid";
};
theme.addEventListener("click", openModal);

// closing the modal

const closeTheModal = (e) => {
  if (e.target.classList.contains("customize-theme"))
    themeModal.style.display = "none";
};

themeModal.addEventListener("click", closeTheModal);

// font change

const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    size.classList.toggle("active");
    let fontSize;

    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      size.style.setProperty("----sticky-top-left", "5.4rem");
      size.style.setProperty("----sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      size.style.setProperty("----sticky-top-left", "5.4rem");
      size.style.setProperty("----sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      size.style.setProperty("----sticky-top-left", "-2rem");
      size.style.setProperty("----sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      size.style.setProperty("----sticky-top-left", "-5rem");
      size.style.setProperty("----sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      size.style.setProperty("----sticky-top-left", "-12rem");
      size.style.setProperty("----sticky-top-right", "-35rem");
    }
    document.querySelector("html").style.fontSize = fontSize;
  });
});

//  PRIMARY COLOR//

// function removeActive(){
//   color.classList.remove('active')
// }

const removeActive = () => {
  colorPalette.forEach((size) => {
    size.classList.remove("active");
  });
};

colorPalette.forEach((color) => {
  color.style.cursor = "pointer";
  color.addEventListener("click", () => {
    removeActive();
    color.classList.toggle("active");
    if (color.classList.contains("color-1")) {
      root.style.setProperty("--primary-color-hue", "252");
    } else if (color.classList.contains("color-2")) {
      root.style.setProperty("--primary-color-hue", "52");
    } else if (color.classList.contains("color-3")) {
      root.style.setProperty("--primary-color-hue", "356");
    } else if (color.classList.contains("color-4")) {
      root.style.setProperty("--primary-color-hue", "152");
    } else if (color.classList.contains("color-5")) {
      root.style.setProperty("--primary-color-hue", "202");
    }
  });
  // root.style.setProperty('--color-primary',primaryHue)
});

// root.style.setProperty('--color-primary','red')

// requests
request.forEach((item) => {
  item.addEventListener("click", () => {
    item.style.display = "none";
    requestDecline.style.display = "none";
  });
});
friendReq.forEach((req) => {
  requestDecline.forEach((item) => {
    item.addEventListener("click", () => {
      req.style.display = "none";
    });
  });
});

// background
light.addEventListener("click", () => {
  root.style.setProperty("--color-white", "hsl(252, 60%, 100%)");
  root.style.setProperty("--color-light", "hsl(252, 30%, 95%)");
  root.style.setProperty("--color-grey", "hsl(252, 15%, 65%)");
});
dim.addEventListener("click", () => {
  root.style.setProperty("--color-light", "black");
  root.style.setProperty("--color-grey", "white");
  root.style.setProperty("--color-white", "#C0C0C0");
  para.forEach((item) => {
    item.style.color = "hsl(0°, 0%, 96.1%)";
  });
});
dark.addEventListener("click", () => {
  root.style.setProperty("--color-light", "black");
  root.style.setProperty("--color-white", "#778899");
  root.style.setProperty("--color-grey", "#F0F0F0");
  para.forEach((item) => {
    item.style.color = "white";
  });
});













const home = document.querySelector(".reload");
home.addEventListener("click", function () {
  location.reload();
});
