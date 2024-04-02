class ResizableParagraph {
  constructor(paragraph, increaseButton, decreaseButton) {
    this.paragraph = paragraph;
    this.increaseButton = increaseButton;
    this.decreaseButton = decreaseButton;
  }

  init() {
    this.increaseButton.addEventListener("click", this.increase);
    this.decreaseButton.addEventListener("click", this.decrease);
  }

  increase() {
    // Ha a konstruktorban átadott paragraphot használom, akkor exceptiont dob a getComputedStyle()
    const localP = document.getElementById("text");
    var computedFontSize = window
      .getComputedStyle(localP, null)
      .getPropertyValue("font-size");
    localP.style.fontSize = parseInt(computedFontSize) + 1 + "px";
  }

  decrease() {
    const localP = document.getElementById("text");
    var computedFontSize = window
      .getComputedStyle(localP, null)
      .getPropertyValue("font-size");
    localP.style.fontSize = parseInt(computedFontSize) - 1 + "px";
  }
}

const p = document.getElementById("text");
const iButton = document.getElementById("increase");
const dButton = document.getElementById("decrease");
const resizableParagraph = new ResizableParagraph(p, iButton, dButton);
resizableParagraph.init();
