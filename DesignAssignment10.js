//Pop down controls that make sure that when the pen or erasor are clicked, that an additonal menu pops up with colors, pen sizes, and the style of the brush
function togglePopdown() {
  const popdown = document.getElementById("popdown");
  popdown.style.display = (popdown.style.display === "none" || popdown.style.display === "") ? "block" : "none";
}

//The change functions are allowing for when the icons are clicked, to change into the outlined png versions of themselves
function changeIcon(element, newIcon) {
  element.src = newIcon;
  const popdown = document.getElementById("popdown");

  if (newIcon === 'eraser.png' || element.parentNode.classList.contains('pen-icon')) {
    togglePopdown();
  } else if (newIcon === 'select-blue.png' || newIcon === 'camera-grey.png') {
    popdown.style.display = "none";
  }
}

function changePenColor(element, newPenIcon) {
  const penIcon = document.querySelector(".pen-icon img");
  penIcon.src = newPenIcon;

  // Reset the other icons in the left popdown group
  const leftGroup = element.closest('.popdown-icon-group.left');
  if (leftGroup) {
    const icons = leftGroup.getElementsByTagName('img');
    for (let icon of icons) {
      if (icon !== element) {
        icon.src = icon.src.replace('-click.png', '.png');
      }
    }
  }
}

function openRandomLink() {
  const randomLink = "https://ucsd.edu/"; // I decided to use a uniform link for all of the icons that were not important to the main message of my website
  window.open(randomLink, "_blank");
}

let selectedColor = null;

function toggleColor(element) {
  const currentSrc = element.src;
  const isSelected = currentSrc.includes('-click.png');
  const newSrc = isSelected ? currentSrc.replace('-click.png', '.png') : currentSrc.replace('.png', '-click.png');

  if (selectedColor && selectedColor !== element) {
    selectedColor.src = selectedColor.src.replace('-click.png', '.png');
  }

  element.src = newSrc;
  selectedColor = isSelected ? null : element;
}

function changePenSize(element, newPenSizeIcon) {
  element.src = newPenSizeIcon;

  // Reset the other icons in the middle popdown group
  const middleGroup = element.closest('.popdown-icon-group.middle');
  if (middleGroup) {
    const icons = middleGroup.getElementsByTagName('img');
    for (let icon of icons) {
      if (icon !== element) {
        icon.src = icon.src.replace('-click.png', '.png');
      }
    }
  }
}

function changeFlowType(element, newFlowTypeIcon) {
  element.src = newFlowTypeIcon;

  // Reset the other icons in the right popdown group
  const rightGroup = element.closest('.popdown-icon-group.right');
  if (rightGroup) {
    const icons = rightGroup.getElementsByTagName('img');
    for (let icon of icons) {
      if (icon !== element) {
        icon.src = icon.src.replace('-click.png', '.png');
      }
    }
  }
}

function toggleShareMessage() {
  var shareMessage = document.getElementById("share-message");
  if (shareMessage.style.display === "none" || shareMessage.style.display === "") {
      shareMessage.style.display = "block"; // Opens and displays the form
  } else {
      shareMessage.style.display = "none"; // Implemented in next block of code so that I can hide the message
  }
}

//This hides the form
function sendMessage() {
  var shareMessage = document.getElementById("share-message");
  shareMessage.style.display = "none"; // I wanted to hide the form once it was sent out to the recipient by the sender
  console.log("Message sent!"); // For debugging purposes
}
