// ----------- Using Cleave.js -----------
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

// var phone = new Cleave(".input-phone", {
//   phone: true,
//   phoneRegionCode: "{country}",
// });

// ------------- Using P5js -------------
let img;
function setup() {
  createCanvas(1000, 650, WEBGL);
  normalMaterial();
  img = loadImage("cooltexture.jpg");
  textureMode(NORMAL);
  describe(
    "Camera orbits around a box when mouse is hold-clicked & then moved."
  );
}

function draw() {
  background(100);
  texture(img);
  orbitControl(5, 5, 5);
  rotateY(millis() / 5000);
  // box(400, 400);
  torus(150, 150);
}

// Allowing the colorpicker to change the background
document.getElementById("colorpicker").addEventListener("change", function () {
  document.body.style.backgroundColor = this.value;
});
