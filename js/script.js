var link = document.querySelector(".open-popup-map");

if (link) {
  var popup = document.querySelector(".popup-map");
  var close = popup.querySelector(".close-popup-map");
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  });
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

  var helplink = document.querySelector(".open-popup-help");
  var helppopup = document.querySelector(".popup-help");
  var helpclose = helppopup.querySelector(".close-popup-help");
  var form = helppopup.querySelector("form");
  var login = helppopup.querySelector("[name=name]");
  var email = helppopup.querySelector("[name=email]");
  var textarea = helppopup.querySelector("[name=textarea]");
  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }
  helplink.addEventListener("click", function (evt) {
    evt.preventDefault();
    helppopup.classList.add("modal-show");
    if (storage) {
      login.value = storage;
      password.focus();
    } else {
      login.focus();
    }
  });
  helpclose.addEventListener("click", function (evt) {
    evt.preventDefault();
    helppopup.classList.remove("modal-error");
    helppopup.classList.remove("modal-show");
  });
  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !textarea.value) {
      evt.preventDefault();
      helppopup.classList.remove("modal-error");
      helppopup.offsetWidth = helppopup.offsetWidth;
      helppopup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (helppopup.classList.contains("modal-show")) {
        helppopup.classList.remove("modal-show");
        helppopup.classList.remove("modal-error");
      }
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });









} else {
  var checkoutlink = document.querySelectorAll(".buy-btn");
  var checkoutpopup = document.querySelector(".popup-checkout");
  var checkoutclose = checkoutpopup.querySelector(".close-popup-checkout");
  for (i = 0; i < checkoutlink.length; i++) {
    checkoutlink[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      checkoutpopup.classList.add("modal-show");
    });
  }
  checkoutclose.addEventListener("click", function (evt) {
    evt.preventDefault();
    checkoutpopup.classList.remove("modal-show");
  });
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (checkoutpopup.classList.contains("modal-show")) {
        checkoutpopup.classList.remove("modal-show");
      }

    }
  });
}
