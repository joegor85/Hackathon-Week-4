var bday = new Cleave(".input-bday", {
  date: true,
  delimiter: "-",
  datePattern: ["m", "d", "Y"],
});

var creditCard = new Cleave(".input-cc", {
  creditCard: true,
  onCreditCardTypeChanged: function (type) {
    // update UI ...
  },
});

function setup() {
  createCanvas(1200, 800);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

