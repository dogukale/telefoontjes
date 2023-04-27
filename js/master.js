const cardHeaders = document.getElementsByClassName("js--cardHeader");
const cardsList = document.getElementsByClassName("cardWrapper--card");
const searchBar = document.getElementById("js--searchBar");

const modalBtn = document.getElementById("btn--iphone-12");
const modalBtn2 = document.getElementById("btn--iphone-12-pro");
const modalBtn3 = document.getElementById("btn--iphone-12-pro-max");
const modalBtn4 = document.getElementById("btn--samsung-s21");
const modalBtn5 = document.getElementById("btn--samsung-s21-plus");
const modalBtn6 = document.getElementById("btn--samsung-s21-ultra");

const modalBg = document.getElementById("modal--iphone-12");
const modalBg2 = document.getElementById("modal--iphone-12-pro");
const modalBg3 = document.getElementById("modal--iphone-12-pro-max");
const modalBg4 = document.getElementById("modal--samsung-s21");
const modalBg5 = document.getElementById("modal--samsung-s21-plus");
const modalBg6 = document.getElementById("modal--samsung-s21-ultra");

const modalClose = document.getElementById('modal--close__1');
const modalClose2 = document.getElementById('modal--close__2');
const modalClose3 = document.getElementById('modal--close__3');
const modalClose4 = document.getElementById('modal--close__4');
const modalClose5 = document.getElementById('modal--close__5');
const modalClose6 = document.getElementById('modal--close__6');

const bestelKnop = document.getElementsByClassName('cardWrapper--card--buttons--bestellen');

searchBar.onkeyup = (event) => {
    let filter = event.target.value.toUpperCase();
    for (let i = 0; i < cardsList.length; i++) {
        let innerHTML = cardsList[i].innerHTML.toUpperCase();
        if (innerHTML.indexOf(filter) !== -1) {
            cardsList[i].style.display = "";
        } else {
            cardsList[i].style.display = "none";
        }
        cardsList[i].style.animationName = "none";
    }
}

// Keyboard trap on Modals
let focusedElementBeforeModal;

// Open Modal
modalBtn.addEventListener('click', function() {
  modalBg.classList.add('modal-active');
  // Close Modal
  modalClose.addEventListener('click', function() {
    modalBg.classList.remove('modal-active');
  });
  
  focusedElementBeforeModal = document.activeElement;

  modalBg.addEventListener('keydown', trapTapKey);

  let focusableElementsString = 'button, h2, i, [tabindex]:not([tabindex="-1"])';
  let focusableElements = modalBg.querySelectorAll(focusableElementsString);
  focusableElements = Array.prototype.slice.call(focusableElements);

  let firstTabStop = focusableElements[0];
  let lastTabStop = focusableElementsString[focusableElements.length - 1];

  firstTabStop.focus();

  function trapTapKey(e) {
    // Check for TAB key presses
    if (e.keyCode === 9) {

      // SHIFT + TAB
      if (e.shiftKey) {
        if (document.activeElement === firstTabStop) {
          e.preventDefault();
          lastTabStop.focus();
        }

      // TAB
      } else {
        if (document.activeElement === lastTabStop) {
          e.preventDefault();
          firstTabStop.focus();
        }
      }
      
      // ESCAPE
      if (e.keyCode === 27) {
        modalBg.classList.remove('modal-active');
      }
    }
  }
});



// Open Modal
modalBtn2.addEventListener('click', function() {
  modalBg2.classList.add('modal-active');
  // Close Modal
  modalClose2.addEventListener('click', function() {
    modalBg2.classList.remove('modal-active');
  });

  focusedElementBeforeModal = document.activeElement;

  modalBg2.addEventListener('keydown', trapTapKey);

  let focusableElementsString = 'button, h2, i, [tabindex]:not([tabindex="-1"])';
  let focusableElements = modalBg2.querySelectorAll(focusableElementsString);
  focusableElements = Array.prototype.slice.call(focusableElements);

  let firstTabStop = focusableElements[0];
  let lastTabStop = focusableElementsString[focusableElements.length - 1];

  firstTabStop.focus();

  function trapTapKey(e) {
    // Check for TAB key presses
    if (e.keyCode === 9) {

      // SHIFT + TAB
      if (e.shiftKey) {
        if (document.activeElement === firstTabStop) {
          e.preventDefault();
          lastTabStop.focus();
        }

      // TAB
      } else {
        if (document.activeElement === lastTabStop) {
          e.preventDefault();
          firstTabStop.focus();
        }
      }
      
      // ESCAPE
      if (e.keyCode === 27) {
        modalBg2.classList.remove('modal-active');
      }
    }
  }
});

// Open Modal
modalBtn3.addEventListener('click', function() {
  modalBg3.classList.add('modal-active');
  // Close Modal
  modalClose3.addEventListener('click', function() {
    modalBg3.classList.remove('modal-active');
  });

  focusedElementBeforeModal = document.activeElement;

  modalBg3.addEventListener('keydown', trapTapKey);

  let focusableElementsString = 'button, h2, i, [tabindex]:not([tabindex="-1"])';
  let focusableElements = modalBg3.querySelectorAll(focusableElementsString);
  focusableElements = Array.prototype.slice.call(focusableElements);

  let firstTabStop = focusableElements[0];
  let lastTabStop = focusableElementsString[focusableElements.length - 1];

  firstTabStop.focus();

  function trapTapKey(e) {
    // Check for TAB key presses
    if (e.keyCode === 9) {

      // SHIFT + TAB
      if (e.shiftKey) {
        if (document.activeElement === firstTabStop) {
          e.preventDefault();
          lastTabStop.focus();
        }

      // TAB
      } else {
        if (document.activeElement === lastTabStop) {
          e.preventDefault();
          firstTabStop.focus();
        }
      }
      
      // ESCAPE
      if (e.keyCode === 27) {
        modalBg3.classList.remove('modal-active');
      }
    }
  }
});

// Open Modal
modalBtn4.addEventListener('click', function() {
  modalBg4.classList.add('modal-active');
  // Close Modal
  modalClose4.addEventListener('click', function() {
    modalBg4.classList.remove('modal-active');
  });

  focusedElementBeforeModal = document.activeElement;

  modalBg4.addEventListener('keydown', trapTapKey);

  let focusableElementsString = 'button, h2, i, [tabindex]:not([tabindex="-1"])';
  let focusableElements = modalBg4.querySelectorAll(focusableElementsString);
  focusableElements = Array.prototype.slice.call(focusableElements);

  let firstTabStop = focusableElements[0];
  let lastTabStop = focusableElementsString[focusableElements.length - 1];

  firstTabStop.focus();

  function trapTapKey(e) {
    // Check for TAB key presses
    if (e.keyCode === 9) {

      // SHIFT + TAB
      if (e.shiftKey) {
        if (document.activeElement === firstTabStop) {
          e.preventDefault();
          lastTabStop.focus();
        }

      // TAB
      } else {
        if (document.activeElement === lastTabStop) {
          e.preventDefault();
          firstTabStop.focus();
        }
      }
      
      // ESCAPE
      if (e.keyCode === 27) {
        modalBg4.classList.remove('modal-active');
      }
    }
  }
});

// Open Modal
modalBtn5.addEventListener('click', function() {
  modalBg5.classList.add('modal-active');
  // Close Modal
  modalClose5.addEventListener('click', function() {
    modalBg5.classList.remove('modal-active');
  });

  focusedElementBeforeModal = document.activeElement;

  modalBg5.addEventListener('keydown', trapTapKey);

  let focusableElementsString = 'button, h2, i, [tabindex]:not([tabindex="-1"])';
  let focusableElements = modalBg5.querySelectorAll(focusableElementsString);
  focusableElements = Array.prototype.slice.call(focusableElements);

  let firstTabStop = focusableElements[0];
  let lastTabStop = focusableElementsString[focusableElements.length - 1];

  firstTabStop.focus();

  function trapTapKey(e) {
    // Check for TAB key presses
    if (e.keyCode === 9) {

      // SHIFT + TAB
      if (e.shiftKey) {
        if (document.activeElement === firstTabStop) {
          e.preventDefault();
          lastTabStop.focus();
        }

      // TAB
      } else {
        if (document.activeElement === lastTabStop) {
          e.preventDefault();
          firstTabStop.focus();
        }
      }
      
      // ESCAPE
      if (e.keyCode === 27) {
        modalBg5.classList.remove('modal-active');
      }
    }
  }
});

// Open Modal
modalBtn6.addEventListener('click', function() {
  modalBg6.classList.add('modal-active');
  // Close Modal
  modalClose6.addEventListener('click', function() {
    modalBg6.classList.remove('modal-active');
  });

  focusedElementBeforeModal = document.activeElement;

  modalBg6.addEventListener('keydown', trapTapKey);

  let focusableElementsString = 'button, h2, i, [tabindex]:not([tabindex="-1"])';
  let focusableElements = modalBg6.querySelectorAll(focusableElementsString);
  focusableElements = Array.prototype.slice.call(focusableElements);

  let firstTabStop = focusableElements[0];
  let lastTabStop = focusableElementsString[focusableElements.length - 1];

  firstTabStop.focus();

  function trapTapKey(e) {
    // Check for TAB key presses
    if (e.keyCode === 9) {

      // SHIFT + TAB
      if (e.shiftKey) {
        if (document.activeElement === firstTabStop) {
          e.preventDefault();
          lastTabStop.focus();
        }

      // TAB
      } else {
        if (document.activeElement === lastTabStop) {
          e.preventDefault();
          firstTabStop.focus();
        }
      }
      
      // ESCAPE
      if (e.keyCode === 27) {
        modalBg6.classList.remove('modal-active');
      }
    }
  }
});

// BestelKnop doorlinken naar Bestellen.html
let doorLinken = function() {
  window.location.href = 'bestellen.html';
};

for (let i = 0; i < bestelKnop.length; i++) {
  bestelKnop[i].addEventListener('click', doorLinken);
}