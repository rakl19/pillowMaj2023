const Drawing = require("dxf-writer");
import "./styles/main.scss";
import "./showHolesForm.js";

window.addEventListener("load", (e) => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight * 0.6;

  const h6 = document.getElementById("status");

  let scale = 1.0;
  const startDragOffset = {};
  const translatePos = {
    x: 50,
    y: 100,
  };
  let mouseDown = false;

  let form = document.forms.myForm;
  const obj = {};
  // let validate = true;

  function getInputs() {
    document.querySelectorAll("input").forEach((v) => {
      obj[v.name] = parseFloat(v.value);
    });
  }

  function draw(scale, translatePos) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    getInputs();
    ctx.save();
    ctx.translate(translatePos.x, translatePos.y);
    ctx.scale(scale, scale);

    drawBP();
    drawTP();
    drawSeam();
    drawSpots();
    weightTPBP();

    let transform = ctx.getTransform();
    ctx.restore();
    return transform;
  }

  function drawBP() {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.strokeRect(0, 0, obj.bPLength, obj.bPWidth);
    ctx.stroke();
    ctx.restore();
  }

  function drawTP() {
    ctx.save();
    ctx.strokeStyle = "orangered";
    ctx.lineWidth = 1;
    ctx.scale(1, -1);
    ctx.strokeRect(obj.tPOffsetX, obj.tPOffsetY - obj.bPWidth, obj.tPLength, obj.tPWidth);
    ctx.stroke();
    ctx.restore();
  }

  function drawSeam() {
    ctx.save();
    ctx.strokeStyle = "YellowGreen";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.scale(1, -1);
    ctx.moveTo(obj.tPOffsetX + obj.sPLeft, obj.tPOffsetY - obj.bPWidth + obj.sPBottom);
    ctx.lineTo(obj.tPLength + obj.tPOffsetX - obj.sPRight, obj.tPOffsetY - obj.bPWidth + obj.sPBottom);
    ctx.lineTo(obj.tPLength + obj.tPOffsetX - obj.sPRight, obj.tPOffsetY - obj.bPWidth + obj.tPWidth - obj.sPTop);
    ctx.lineTo(obj.tPOffsetX + obj.sPLeft, obj.tPOffsetY - obj.bPWidth + obj.tPWidth - obj.sPTop);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(obj.tPOffsetX + obj.sPLeft + 5, obj.tPOffsetY - obj.bPWidth + obj.sPBottom + 5);
    ctx.lineTo(obj.tPLength + obj.tPOffsetX - obj.sPRight - 5, obj.tPOffsetY - obj.bPWidth + obj.sPBottom + 5);
    ctx.lineTo(obj.tPLength + obj.tPOffsetX - obj.sPRight - 5, obj.tPOffsetY - obj.bPWidth + obj.tPWidth - obj.sPTop - 5);
    ctx.lineTo(obj.tPOffsetX + obj.sPLeft + 5, obj.tPOffsetY - obj.bPWidth + obj.tPWidth - obj.sPTop - 5);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }

  let pressed = false;
  const diceOne = document.getElementById("diceOne");
  const diceFour = document.getElementById("diceFour");
  const btnspotsInCorners = document.getElementById("spotsInCorners");
  btnspotsInCorners.addEventListener("click", function () {
    pressed = !pressed;
    draw(scale, translatePos);
    if (pressed) {
      diceOne.style.fontSize = "24px";
      diceFour.style.fontSize = "18px";
    } else {
      diceOne.style.fontSize = "18px";
      diceFour.style.fontSize = "24px";
    }
  });

  function drawSpots() {
    //spots
    obj.tPOffsetY = obj.tPOffsetY - obj.bPWidth; // bo scale(1,-1) i liczymy od zera

    let spotsLineX = obj.tPLength - obj.sPLeft - 2.5 - obj.sPRight - 2.5;
    let spotsLineY = obj.tPWidth - obj.sPBottom - 2.5 - obj.sPTop - 2.5;

    let liczbaSpotowOsX = Math.floor(spotsLineX / obj.wPX) + 1;
    let korektaSpotX = spotsLineX - Math.floor(spotsLineX / obj.wPX) * obj.wPX;

    let liczbaSpotowOsY = Math.floor(spotsLineY / obj.wPY) + 1;
    let korektaSpotY = spotsLineY - Math.floor(spotsLineY / obj.wPY) * obj.wPY;

    let spotX0 = obj.tPOffsetX + korektaSpotX / 2 + obj.sPLeft + 2.5;
    let spotY0 = obj.tPOffsetY + korektaSpotY / 2 + obj.sPBottom + 2.5;

    let spotsXYNr = 0;

    ctx.lineWidth = 1;
    ctx.scale(1, -1);

    if (pressed) {
      spotsXYNr = 0;

      ctx.strokeStyle = "blue";
      if (liczbaSpotowOsX % 2) {
        liczbaSpotowOsX--;
        korektaSpotX += obj.wPX;
        spotX0 += obj.wPX / 2;
      }
      if (liczbaSpotowOsY % 2) {
        liczbaSpotowOsY--;
        korektaSpotY += obj.wPY;
        spotY0 += obj.wPY / 2;
      }

      for (let j = 0; j < liczbaSpotowOsY; j++) {
        for (let i = 0; i < liczbaSpotowOsX; i++) {
          ctx.beginPath();
          ctx.arc(spotX0 + i * obj.wPX, spotY0 + j * obj.wPY, obj.wPfi / 2, 0, 2 * Math.PI);
          ctx.stroke();
        }
      }

      spotsXYNr = liczbaSpotowOsX * liczbaSpotowOsY; //blue spots
      // console.log(`ilość spotów blue: ${spotsXYNr}`);

      // // --------------------------------orange -----------------------

      if (korektaSpotX > obj.wPX) {
        spotX0 -= obj.wPX;
        liczbaSpotowOsX += 2;
      }
      if (korektaSpotY > obj.wPY) {
        spotY0 -= obj.wPY;
        liczbaSpotowOsY += 2;
      }
      ctx.strokeStyle = "darkblue";

      // if (!form.forceRibbon.checked) {
      for (let j = 0; j < liczbaSpotowOsY - 1; j++) {
        for (let i = 0; i < liczbaSpotowOsX - 1; i++) {
          ctx.beginPath();
          ctx.arc(spotX0 + obj.wPX / 2 + i * obj.wPX, spotY0 + obj.wPY / 2 + j * obj.wPY, obj.wPfi / 2, 0, 2 * Math.PI);
          ctx.stroke();
        }
      }
      spotsXYNr = spotsXYNr + (liczbaSpotowOsY - 1) * (liczbaSpotowOsX - 1);
      spotsInfo.textContent = `Nr of spots: ${spotsXYNr}`;
    } else if (!pressed) {
      spotsXYNr = 0;

      ctx.strokeStyle = "darkblue";

      if (liczbaSpotowOsX % 2) {
        liczbaSpotowOsX--;
        korektaSpotX += obj.wPX;
        spotX0 += obj.wPX / 2;
      }
      if (liczbaSpotowOsY % 2) {
        liczbaSpotowOsY--;
        korektaSpotY += obj.wPY;
        spotY0 += obj.wPY / 2;
      }
      spotX0 += obj.wPX / 2;

      if (liczbaSpotowOsY % 2) {
        liczbaSpotowOsY--;
        korektaSpotY += obj.wPY;
        spotY0 += obj.wPY / 2;
      }

      if (korektaSpotX > obj.wPX) {
        spotX0 -= obj.wPX;
        liczbaSpotowOsX += 2;
      }

      for (let j = 0; j < liczbaSpotowOsY; j++) {
        for (let i = 0; i < liczbaSpotowOsX - 1; i++) {
          ctx.beginPath();
          ctx.arc(spotX0 + i * obj.wPX, spotY0 + j * obj.wPY, obj.wPfi / 2, 0, 2 * Math.PI);
          ctx.stroke();
        }
      }
      spotsXYNr = (liczbaSpotowOsX - 1) * liczbaSpotowOsY;

      if (liczbaSpotowOsX % 2) {
        liczbaSpotowOsX--;
        korektaSpotX += obj.wPX;
        spotX0 += obj.wPX / 2;
      }

      if (korektaSpotY > obj.wPY) {
        spotY0 -= obj.wPY;
        liczbaSpotowOsY += 2;
      }

      if (korektaSpotX > obj.wPX) {
        spotX0 -= obj.wPX;
        liczbaSpotowOsX -= 2;
      }

      ctx.strokeStyle = "blue";

      spotX0 = obj.tPOffsetX + korektaSpotX / 2 + obj.sPLeft + 2.5;

      for (let j = 0; j < liczbaSpotowOsY - 1; j++) {
        for (let i = 0; i < liczbaSpotowOsX; i++) {
          ctx.beginPath();
          ctx.arc(spotX0 + i * obj.wPX, spotY0 + obj.wPY / 2 + j * obj.wPY, obj.wPfi / 2, 0, 2 * Math.PI);
          ctx.stroke();
        }
      }
      spotsXYNr += liczbaSpotowOsX * (liczbaSpotowOsY - 1); //blue spots
      spotsInfo.textContent = `Nr of spots: ${spotsXYNr}`;
    }
    const wTime = document.getElementById("weldT");
    // const wT = ((obj.tPLength / 1000) * 204 + (obj.tPWidth / 1000) * 170 + spotsXYNr * 2.25 + (obj.bPLength / 1000) * 330) / 60;
    const wT = (obj.tPLength / 1000) * 8.167 + (obj.tPWidth / 1000) * 2.5 + (spotsXYNr * 2.22) / 60 + (obj.tPLength / 1000 / 12) * (obj.tPWidth / 1000) * 7.5;
    // const wT2 = (0.495 * ((obj.tPLength / 1000) * 204 + (obj.tPWidth / 1000) * 170 + spotsXYNr * 2.25 + (obj.bPLength / 1000) * 330)) / 60;
    const wT2 = obj.tPWidth < 400 ? wT : wT * 0.495;

    wTime.textContent = `Welding time: ${wT.toFixed(1)} min`;
  }

  let scaleMultiplier = 0.9;

  document.getElementById("plus").addEventListener("click", () => {
    scale /= scaleMultiplier;
    draw(scale, translatePos);
  });

  document.getElementById("minus").addEventListener("click", () => {
    scale *= scaleMultiplier;
    draw(scale, translatePos);
  });

  function showAll() {
    // const frameWidth = widthInput.valueAsNumber;
    // const frameHeight = heightInput.valueAsNumber;
    // obj.bPLength = form.bPLength.valueAsNumber;
    // obj.bPWidth = form.bPWidth.valueAsNumber;

    const wr = window.innerWidth / obj.bPLength;
    const hr = (window.innerHeight * 0.6) / obj.bPWidth;

    scale = Math.min(wr, hr) * 0.9;

    const frameOnScreenWidth = obj.bPLength * scale;
    const frameOnScreenHeight = obj.bPWidth * scale;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    translatePos.x = Math.round(window.innerWidth / 2 - frameOnScreenWidth / 2);
    translatePos.y = Math.round((0.6 * window.innerHeight) / 2 - frameOnScreenHeight / 2);
    draw(scale, translatePos);
    //0.6 ->> canvas.height
  }

  //buttton showAll
  document.getElementById("showAll").addEventListener("click", () => {
    draw(scale, translatePos);
    showAll();
  });

  //sprawdzanie danych w inputach
  function validateLength() {
    if (obj.tPLength + obj.tPOffsetX > obj.bPLength) {
      //   bPLength.value = obj.tPLength + obj.tPOffsetX;
      bPLength.style.color = "red";
      tPLength.style.color = "red";
      tPOffsetX.style.color = "red";
      //   validate = false;
      // draw(scale, translatePos);
      // validate = false;
    } else {
      bPLength.style.color = "black";
      tPLength.style.color = "black";
      tPOffsetX.style.color = "black";
      //   validate = true;
      // validate = true;
      draw(scale, translatePos);
      showAll();
    }
  }

  function validateWidth() {
    if (obj.tPWidth + obj.tPOffsetY > obj.bPWidth) {
      //   bPWidth.value = obj.tPWidth + obj.tPOffsetY;
      bPWidth.style.color = "red";
      tPWidth.style.color = "red";
      tPOffsetY.style.color = "red";
      //   validate = false;
      // draw(scale, translatePos);
      // validate = false;
    } else {
      bPWidth.style.color = "black";
      tPWidth.style.color = "black";
      tPOffsetY.style.color = "black";
      //   validate = true;
      // validate = true;
      draw(scale, translatePos);
      showAll();
    }
  }

  function validateSpotPattern() {
    if (obj.wPX < 30 || obj.wPY < 30) {
      //   bPWidth.value = obj.tPWidth + obj.tPOffsetY;
      wPX.style.color = "red";
      wPY.style.color = "red";
      //   validate = false;
      // draw(scale, translatePos);
      // validate = false;
    } else {
      wPX.style.color = "black";
      wPY.style.color = "black";
      //   validate = true;
      // validate = true;
      draw(scale, translatePos);
    }
  }

  function validateSpotDiam() {
    if (obj.wPfi < 6 || obj.wPfi > 20) {
      wPfi.style.color = "red";
    } else {
      wPfi.style.color = "black";
      draw(scale, translatePos);
    }
  }

  const bPThickness = document.getElementById("bPThickness");
  const tPThickness = document.getElementById("tPThickness");

  bPThickness.addEventListener("input", function () {
    weightTPBP();
  });
  tPThickness.addEventListener("input", function () {
    weightTPBP();
  });

  function weightTPBP() {
    const bPTw = document.getElementById("bPweight");
    const tPTw = document.getElementById("tPweight");
    const bPInkg = ((((8 * bPThickness.value * obj.bPLength) / 1000) * obj.bPWidth) / 1000).toFixed(1);
    const tPInkg = ((((8 * tPThickness.value * obj.tPLength) / 1000) * obj.tPWidth) / 1000).toFixed(1);
    bPTw.textContent = `BP: ${bPInkg} kg`;
    tPTw.textContent = `TP: ${tPInkg} kg`;
  }

  //   bottom plate
  const bPLength = document.getElementById("bPLength");
  const bPWidth = document.getElementById("bPWidth");
  const tPLength = document.getElementById("tPLength");
  const tPWidth = document.getElementById("tPWidth");
  const tPOffsetX = document.getElementById("tPOffsetX");
  const tPOffsetY = document.getElementById("tPOffsetY");
  const wPX = document.getElementById("wPX");
  const wPY = document.getElementById("wPY");
  const wPfi = document.getElementById("wPfi");

  bPLength.addEventListener("input", function () {
    getInputs();
    validateLength();
  });
  bPWidth.addEventListener("input", function () {
    getInputs();
    validateWidth();
  });

  // top plate
  tPLength.addEventListener("input", function () {
    getInputs();
    validateLength();
  });

  tPWidth.addEventListener("input", function () {
    getInputs();
    validateWidth();
  });

  // offset x,y
  tPOffsetX.addEventListener("input", function () {
    getInputs();
    validateLength();
  });
  tPOffsetY.addEventListener("input", function () {
    getInputs();
    validateWidth();
  });

  // wPfi,wPX,wPY
  wPX.addEventListener("input", function () {
    getInputs();
    validateSpotPattern();
  });
  wPY.addEventListener("input", function () {
    getInputs();
    validateSpotPattern();
  });
  wPfi.addEventListener("input", function () {
    getInputs();
    validateSpotDiam();
    // showAll();
  });

  // add event listeners to handle screen drag
  canvas.addEventListener("mousedown", function (evt) {
    mouseDown = true;
    startDragOffset.x = evt.clientX - translatePos.x;
    startDragOffset.y = evt.clientY - translatePos.y;
  });

  canvas.addEventListener("mouseup", function (evt) {
    mouseDown = false;
    document.body.style.cursor = "";
  });

  canvas.addEventListener("mouseover", function (evt) {
    mouseDown = false;
    let transform = ctx.getTransform();
  });

  canvas.addEventListener("mouseout", function (evt) {
    mouseDown = false;
  });

  canvas.addEventListener("mousemove", function (evt) {
    //  currentTransformedCursor = getTransformedPoint(evt.offsetX, evt.offsetY);

    let transform = draw(scale, translatePos);
    if (mouseDown) {
      document.body.style.cursor = "move";
      translatePos.x = evt.clientX - startDragOffset.x;
      translatePos.y = evt.clientY - startDragOffset.y;
    } else {
      const inverseZoomX = 1 / transform.a;
      const inverseZoomY = 1 / transform.d;
      h6.innerHTML = `x: ${(inverseZoomX * evt.offsetX - inverseZoomX * transform.e).toFixed(1)}, y: ${(inverseZoomY * evt.offsetY - inverseZoomY * transform.f + obj.bPWidth).toFixed(1)}`;
    }
    // } else {
    //   const inverseZoomX = 1 / transform.a;
    //   const inverseZoomY = 1 / transform.d;
    //   h6.innerHTML = `${(inverseZoomX * evt.offsetX - inverseZoomX * transform.e).toFixed(1)}, ${(-(inverseZoomY * evt.offsetY - inverseZoomY * transform.f - obj.bPWidth)).toFixed(1)}`;
    // }
  });

  //skrolowanie rolkaaaaaaaaaaaaaaaaaaa
  // let currentTransformedCursor;
  // function onWheel(event) {
  //   const zoom = event.deltaY < 0 ? 1.1 : 0.9;

  //   ctx.translate(currentTransformedCursor.x, currentTransformedCursor.y);
  //   ctx.scale(zoom, zoom);
  //   ctx.translate(-currentTransformedCursor.x, -currentTransformedCursor.y);

  //   draw(scale, translatePos);
  //   event.preventDefault();
  // }
  // function fullGetTransformedPoint(x, y) {
  //   const inverseTransform = ctx.getTransform().invertSelf();
  //   const transformedX = inverseTransform.a * x + inverseTransform.c * y + inverseTransform.e;
  //   const transformedY = inverseTransform.b * x + inverseTransform.d * y + inverseTransform.f;
  //   return { x: transformedX, y: transformedY };
  // }

  // canvas.addEventListener("wheel", onWheel);

  //skrolowanie rolkaaaaaaaaaaaaaaaaaaa

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.6;
    draw(scale, translatePos);
    showAll();
  });

  draw(scale, translatePos);

  const btnLink = document.querySelector(".drawDXF");
  btnLink.addEventListener("click", function () {
    document.querySelectorAll("input").forEach((v) => {
      obj[v.name] = parseFloat(v.value);
    });
    // getInputs();
    drawDXF(obj);
  });

  function drawDXF(obj) {
    const d = new Drawing();

    //*************************** reference lines ***************************/
    d.setUnits("Millimeters").addLayer("ReferenceLine", Drawing.ACI.RED, "CONTINUOUS");
    d.setActiveLayer("ReferenceLine");
    d.drawLine(0, 0, obj.bPLength, 0);
    d.drawLine(0, 0, 0, obj.bPWidth);

    //*************************** TPL ***************************/
    d.setUnits("Millimeters").addLayer("TopPlateLength", Drawing.ACI.YELLOW, "CONTINUOUS");
    d.setActiveLayer("TopPlateLength");
    d.drawLine(obj.tPOffsetX + obj.sPLeft - 17.5 + 2.5, -0.5 + obj.tPOffsetY, obj.tPOffsetX + obj.tPLength - obj.sPRight + 17.5 - 2.5, -0.5 + obj.tPOffsetY);

    //*************************** BP ***************************/
    d.setUnits("Millimeters").addLayer("BottomPlate", Drawing.ACI.CYAN, "CONTINUOUS");
    d.setActiveLayer("BottomPlate");
    d.drawLine(0, 0, obj.bPLength, 0);
    d.drawLine(obj.bPLength, 0, obj.bPLength, obj.bPWidth);
    d.drawLine(obj.bPLength, obj.bPWidth, 0, obj.bPWidth);
    d.drawLine(0, obj.bPWidth, 0, 0);

    //*************************** TP ***************************/
    d.setUnits("Millimeters").addLayer("TopPlate", Drawing.ACI.RED, "CONTINUOUS");
    d.setActiveLayer("TopPlate");
    d.drawLine(obj.tPOffsetX, obj.tPOffsetY, obj.tPOffsetX + obj.tPLength, obj.tPOffsetY);
    d.drawLine(obj.tPOffsetX + obj.tPLength, obj.tPOffsetY, obj.tPOffsetX + obj.tPLength, obj.tPOffsetY + obj.tPWidth);
    d.drawLine(obj.tPOffsetX + obj.tPLength, obj.tPOffsetY + obj.tPWidth, obj.tPOffsetX, obj.tPOffsetY + obj.tPWidth);
    d.drawLine(obj.tPOffsetX, obj.tPOffsetY + obj.tPWidth, obj.tPOffsetX, obj.tPOffsetY);

    //*************************** SEAM ***************************/
    d.setUnits("Millimeters").addLayer("Seam", Drawing.ACI.GREEN, "CONTINUOUS");
    d.setActiveLayer("Seam");

    //external
    d.drawArc(obj.tPOffsetX + obj.sPLeft + 15, obj.tPOffsetY + obj.sPBottom + 15, 15, 180, 270);
    d.drawLine(obj.tPOffsetX + obj.sPLeft + 15, obj.tPOffsetY + obj.sPBottom, obj.tPOffsetX + obj.tPLength - obj.sPRight - 15, obj.tPOffsetY + obj.sPBottom);

    d.drawArc(obj.tPOffsetX + obj.tPLength - obj.sPRight - 15, obj.tPOffsetY + obj.sPBottom + 15, 15, 270, 360);
    d.drawLine(obj.tPOffsetX + obj.tPLength - obj.sPRight, obj.tPOffsetY + obj.sPBottom + 15, obj.tPOffsetX + obj.tPLength - obj.sPRight, obj.tPOffsetY + obj.tPWidth - obj.sPTop - 15);
    d.drawArc(obj.tPOffsetX + obj.tPLength - obj.sPRight - 15, obj.tPOffsetY + obj.tPWidth - obj.sPTop - 15, 15, 0, 90);
    d.drawLine(obj.tPOffsetX + obj.tPLength - obj.sPRight - 15, obj.tPOffsetY + obj.tPWidth - obj.sPTop, obj.tPOffsetX + obj.sPLeft + 15, obj.tPOffsetY + obj.tPWidth - obj.sPTop);
    d.drawArc(obj.tPOffsetX + obj.sPLeft + 15, obj.tPOffsetY + obj.tPWidth - obj.sPTop - 15, 15, 90, 180);
    d.drawLine(obj.tPOffsetX + obj.sPLeft, obj.tPOffsetY + obj.tPWidth - obj.sPTop - 15, obj.tPOffsetX + obj.sPLeft, obj.tPOffsetY + obj.sPBottom + 15);
    //internal
    d.drawArc(obj.tPOffsetX + obj.sPLeft + 15, obj.tPOffsetY + obj.sPBottom + 15, 10, 180, 270);
    d.drawLine(obj.tPOffsetX + obj.sPLeft + 15, obj.tPOffsetY + obj.sPBottom + 5, obj.tPOffsetX + obj.tPLength - obj.sPRight - 15, obj.tPOffsetY + obj.sPBottom + 5);
    d.drawArc(obj.tPOffsetX + obj.tPLength - obj.sPRight - 15, obj.tPOffsetY + obj.sPBottom + 15, 10, 270, 360);
    d.drawLine(obj.tPOffsetX + obj.tPLength - obj.sPRight - 5, obj.tPOffsetY + obj.sPBottom + 15, obj.tPOffsetX + obj.tPLength - obj.sPRight - 5, obj.tPOffsetY + obj.tPWidth - obj.sPTop - 15);
    d.drawArc(obj.tPOffsetX + obj.tPLength - obj.sPRight - 15, obj.tPOffsetY + obj.tPWidth - obj.sPTop - 15, 10, 0, 90);
    d.drawLine(obj.tPOffsetX + obj.tPLength - obj.sPRight - 15, obj.tPOffsetY + obj.tPWidth - obj.sPTop - 5, obj.tPOffsetX + obj.sPLeft + 15, obj.tPOffsetY + obj.tPWidth - obj.sPTop - 5);

    d.drawArc(obj.tPOffsetX + obj.sPLeft + 15, obj.tPOffsetY + obj.tPWidth - obj.sPTop - 15, 10, 90, 180);
    d.drawLine(obj.tPOffsetX + obj.sPLeft + 5, obj.tPOffsetY + obj.tPWidth - obj.sPTop - 15, obj.tPOffsetX + obj.sPLeft + 5, obj.tPOffsetY + obj.sPBottom + 15);

    /*************************** engraving ***************************/
    d.addLayer("Text", Drawing.ACI.YELLOW, "CONTINUOUS");
    d.setActiveLayer("Text");
    d.drawText(obj.tPOffsetX + 30, obj.tPOffsetY + 5, 5, 0, "2022 - PILLOW PLATE");

    const bPInkg = ((((8 * bPThickness.value * obj.bPLength) / 1000) * obj.bPWidth) / 1000).toFixed(1);
    const tPInkg = ((((8 * tPThickness.value * obj.tPLength) / 1000) * obj.tPWidth) / 1000).toFixed(1);

    d.setActiveLayer("BottomPlate");
    d.drawText(5, -50, 15, 0, `Bottom Plate: ${bPThickness.value}x${obj.bPLength}x${obj.bPWidth} - ${bPInkg}kg`);

    d.setActiveLayer("TopPlate");
    d.drawText(5, -70, 15, 0, `Top Plate: ${tPThickness.value}x${obj.tPLength}x${obj.tPWidth} - ${tPInkg}kg`);

    const wT = (obj.tPLength / 1000) * 8.167 + (obj.tPWidth / 1000) * 2.5 + (spotsXYNr * 2.22) / 60 + (obj.tPLength / 1000 / 12) * (obj.tPWidth / 1000) * 7.5;

    d.setActiveLayer("0");
    d.drawText(5, -110, 15, 0, `Welding time: ${wT.toFixed(1)}min`);

    /*************************** SPOTS ***************************/

    d.setUnits("Millimeters").addLayer("Spot", Drawing.ACI.BLUE, "CONTINUOUS");
    d.setActiveLayer("Spot");
    d.drawText(5, -90, 15, 0, `Pattern: ${obj.wPX.toFixed(1)}x${obj.wPY.toFixed(1)} %%c${obj.wPfi}mm`);

    let spotsLineX = obj.tPLength - obj.sPLeft - 2.5 - obj.sPRight - 2.5;
    let spotsLineY = obj.tPWidth - obj.sPBottom - 2.5 - obj.sPTop - 2.5;

    let liczbaSpotowOsX = Math.floor(spotsLineX / obj.wPX) + 1;
    let korektaSpotX = spotsLineX - Math.floor(spotsLineX / obj.wPX) * obj.wPX;

    let liczbaSpotowOsY = Math.floor(spotsLineY / obj.wPY) + 1;
    let korektaSpotY = spotsLineY - Math.floor(spotsLineY / obj.wPY) * obj.wPY;

    let spotX0 = obj.tPOffsetX + korektaSpotX / 2 + obj.sPLeft + 2.5;
    let spotY0 = obj.tPOffsetY + korektaSpotY / 2 + obj.sPBottom + 2.5;

    let spotsXYNr = 0;

    if (pressed) {
      if (liczbaSpotowOsX % 2) {
        liczbaSpotowOsX--;
        korektaSpotX += obj.wPX;
        spotX0 += obj.wPX / 2;
      }
      if (liczbaSpotowOsY % 2) {
        liczbaSpotowOsY--;
        korektaSpotY += obj.wPY;
        spotY0 += obj.wPY / 2;
      }

      for (let j = 0; j < liczbaSpotowOsY; j++) {
        for (let i = 0; i < liczbaSpotowOsX; i++) {
          d.drawCircle(spotX0 + i * obj.wPX, spotY0 + j * obj.wPY, obj.wPfi / 2);
        }
      }

      if (korektaSpotX > obj.wPX) {
        spotX0 -= obj.wPX;
        liczbaSpotowOsX += 2;
      }
      if (korektaSpotY > obj.wPY) {
        spotY0 -= obj.wPY;
        liczbaSpotowOsY += 2;
      }
      for (let j = 0; j < liczbaSpotowOsY - 1; j++) {
        for (let i = 0; i < liczbaSpotowOsX - 1; i++) {
          d.drawCircle(spotX0 + obj.wPX / 2 + i * obj.wPX, spotY0 + obj.wPY / 2 + j * obj.wPY, obj.wPfi / 2);
        }
      }
    } else if (!pressed) {
      if (liczbaSpotowOsX % 2) {
        liczbaSpotowOsX--;
        korektaSpotX += obj.wPX;
        spotX0 += obj.wPX / 2;
      }
      if (liczbaSpotowOsY % 2) {
        liczbaSpotowOsY--;
        korektaSpotY += obj.wPY;
        spotY0 += obj.wPY / 2;
      }
      spotX0 += obj.wPX / 2;

      if (liczbaSpotowOsY % 2) {
        liczbaSpotowOsY--;
        korektaSpotY += obj.wPY;
        spotY0 += obj.wPY / 2;
      }

      if (korektaSpotX > obj.wPX) {
        spotX0 -= obj.wPX;
        liczbaSpotowOsX += 2;
      }

      for (let j = 0; j < liczbaSpotowOsY; j++) {
        for (let i = 0; i < liczbaSpotowOsX - 1; i++) {
          d.drawCircle(spotX0 + i * obj.wPX, spotY0 + j * obj.wPY, obj.wPfi / 2);
        }
      }

      if (liczbaSpotowOsX % 2) {
        liczbaSpotowOsX--;
        korektaSpotX += obj.wPX;
        spotX0 += obj.wPX / 2;
      }

      if (korektaSpotY > obj.wPY) {
        spotY0 -= obj.wPY;
        liczbaSpotowOsY += 2;
      }

      if (korektaSpotX > obj.wPX) {
        spotX0 -= obj.wPX;
        liczbaSpotowOsX -= 2;
      }

      spotX0 = obj.tPOffsetX + korektaSpotX / 2 + obj.sPLeft + 2.5;

      for (let j = 0; j < liczbaSpotowOsY - 1; j++) {
        for (let i = 0; i < liczbaSpotowOsX; i++) {
          d.drawCircle(spotX0 + i * obj.wPX, spotY0 + obj.wPY / 2 + j * obj.wPY, obj.wPfi / 2);
        }
      }
    }

    // /*************************** holes on TP                  tPholeLT  ***************************/
    // if (form.cbHoleLT.checked) {
    //   d.setActiveLayer('TopPlate');
    //   d.drawCircle(obj.tPholeLTposX + obj.tPOffsetX, obj.tPWidth - obj.tPholeLTposY + obj.tPOffsetY, obj.tPholeLTdiam / 2);
    // }
    // if (form.cbHoleLB.checked) {
    //   d.setActiveLayer('TopPlate');
    //   d.drawCircle(obj.tPholeLBposX + obj.tPOffsetX, obj.tPholeLBposY + obj.tPOffsetY, obj.tPholeLBdiam / 2);
    // }
    // if (form.cbHoleRT.checked) {
    //   d.setActiveLayer('TopPlate');
    //   d.drawCircle(obj.tPLength + obj.tPOffsetX - obj.tPholeRTposX, obj.tPWidth - obj.tPholeRTposY + obj.tPOffsetY, obj.tPholeRTdiam / 2);
    // }
    // if (form.cbHoleRB.checked) {
    //   d.setActiveLayer('TopPlate');
    //   d.drawCircle(obj.tPLength + obj.tPOffsetX - obj.tPholeRBposX, obj.tPholeRBposY + obj.tPOffsetY, obj.tPholeRBdiam / 2);
    // }

    // //------------------------------------------------------------------------------
    // form.alignWithSpots.onclick = align;

    // function align() {
    //   if ((form.cbHoleRB.checked && form.cbHoleRT.checked) || (form.cbHoleLB.checked && form.cbHoleLT.checked)) {
    //     let dlY = obj.tPWidth - obj.tPholeLTposY - obj.tPholeLBposY;
    //     let arrY = [];
    //     arrY[0] = dlY;

    //     for (let i = 1; arrY[i - 1] > obj.wPY / 2; i++) {
    //       arrY[i] = dlY / i;
    //     }

    //     let goalY = obj.wPY;
    //     let closestY = arrY.reduce(function (prev, curr) {
    //       return Math.abs(curr - goalY) < Math.abs(prev - goalY) ? curr : prev;
    //     });
    //     form.wPY.value = closestY.toFixed(2);

    //     let dlX = obj.tPLength - obj.tPholeRBposX - obj.tPholeLBposX;
    //     let arrX = [];
    //     arrX[0] = dlX;

    //     for (let i = 1; arrX[i - 1] > obj.wPX / 2; i++) {
    //       arrX[i] = dlX / i;
    //     }

    //     let goalX = obj.wPX;
    //     let closestX = arrX.reduce(function (prev, curr) {
    //       return Math.abs(curr - goalX) < Math.abs(prev - goalX) ? curr : prev;
    //     });
    //     form.wPX.value = closestX.toFixed(2);
    //   }
    // }

    // /*************************** force ribbon ***************************/

    // if (form.forceRibbon.checked) {
    //   !pressed ? (spotX0 = spotX0 - obj.wPX / 2) : (spotX0 = spotX0);

    //   d.setUnits('Millimeters').addLayer('Seamr', Drawing.ACI.GREEN, 'CONTINUOUS');
    //   d.setActiveLayer('Seam');

    //   d.drawLine(obj.tPOffsetX + obj.sPLeft + 5, obj.tPOffsetY + spotsLineY / 2 + obj.sPBottom + 5, spotX0 + (Math.floor(spotsLineX / obj.wPX) - Math.floor(spotsLineY / obj.wPY) / 2) * obj.wPX, obj.tPOffsetY + spotsLineY / 2 + obj.sPBottom + 5);

    //   d.drawLine(obj.tPOffsetX + obj.sPLeft + 5, obj.tPOffsetY + spotsLineY / 2 + obj.sPBottom, spotX0 + (Math.floor(spotsLineX / obj.wPX) - Math.floor(spotsLineY / obj.wPY) / 2) * obj.wPX, obj.tPOffsetY + spotsLineY / 2 + obj.sPBottom);

    //   d.setUnits('Millimeters').addLayer('Serpentine', Drawing.ACI.MAGENTA, 'CONTINUOUS');
    //   d.setActiveLayer('Serpentine');
    //   d.drawArc(obj.tPOffsetX + 20 + obj.sPRight, obj.tPOffsetY + (obj.tPWidth + 5) / 2 + 15, 15, 180, 270);

    //   d.drawArc(obj.tPOffsetX + 20 + obj.sPRight, obj.tPOffsetY + (obj.tPWidth + 5) / 2 - 20, 15, 90, 180);

    // }

    const b = new Blob([d.toDxfString()], { type: "application/dxf" });
    document.getElementById("dxf").href = URL.createObjectURL(b);
  }
});
