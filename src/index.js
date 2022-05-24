import "./styles/main.scss";
import "./showHolesForm.js";
import { drawDXF } from "./drawDXF";
// const axios = require("axios").default;

// const data = "";
// async function test() {
//   const res = await fetch("/.netlify/functions/status");
//   const data = await res.text();
//   console.log(data);
// }

// test();

// fetch("https://dog.ceo/api/breeds/image/random").then(res=>res.json()).then(data=>console.log(data));
// fetch("/.netlify/functions/dupa").then(res=>res.json()).then(data=>console.log(data));

// const fetchData = async () => {
// const res = await fetch("/.netlify/functions/dupa");
// const stat = await res.json();
// console.log(stat);
// }

// fetchData()

//  const fetchData = async () => {
//    try {
//      // const { data } = await axios.get("/.netlify/functions/dupa");
//      //  const { data } = await axios.get("https://dog.ceo/api/breeds/image/random");
//      const res = await fetch("https://dog.ceo/api/breeds/image/random");
//      const data = await res.json();
//      console.log(data);
//    } catch (err) {
//      console.log(err);
//    }
//  };

//  fetchData();

fetch("/.netlify/functions/status")
  .then((res) => res.text())
  .then((data) => {
    if (data * 1 === 50) {
      window.addEventListener("load", (e) => {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        const innerHeightRatio = 0.7;
        canvas.height = window.innerHeight * innerHeightRatio;
        // canvas.style.height = 500 + "px";

        // ctx.mozImageSmoothingEnabled = false;
        // ctx.webkitImageSmoothingEnabled = false;
        // ctx.msImageSmoothingEnabled = false;
        // ctx.imageSmoothingEnabled = false;

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
          holesOnTP();

          // // Set display size (css pixels).
          // var size = 300;
          // canvas.style.width = size + "px";
          // canvas.style.height = size + "px";

          // // Set actual size in memory (scaled to account for extra pixel density).
          // var scale1 = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.
          // canvas.width = Math.floor(size * scale1);
          // canvas.height = Math.floor(size * scale1);

          // // Normalize coordinate system to use CSS pixels.
          // ctx.scale(scale1, scale1);

          // ctx.fillStyle = "#bada55";
          // ctx.fillRect(10, 10, 300, 300);
          // ctx.fillStyle = "#ffffff";
          // ctx.font = "28px Arial";
          // ctx.textAlign = "center";
          // ctx.textBaseline = "middle";

          // var x = size / 2;
          // var y = size / 2;

          // var textString = "I love MDN";
          // ctx.fillText(textString, x, y);

          let transform = ctx.getTransform();
          ctx.restore();
          return transform;
        }

        function holesOnTP() {
          if (form.cbHoleLT.checked) {
            ctx.strokeStyle = "orangered";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(obj.tPholeLTposX + obj.tPOffsetX, obj.tPWidth - obj.tPholeLTposY + obj.tPOffsetY, obj.tPholeLTdiam / 2, 0, 2 * Math.PI);
            ctx.stroke();
          }
        }
        //  function holesOnTP() {
        //   // if (form.cbHoleLT.checked) {

        //   ctx.strokeStyle = "orangered";
        //   ctx.lineWidth = 1;
        //   ctx.beginPath();
        //   ctx.arc(obj.tPholeLTposX + obj.tPOffsetX, obj.tPWidth - obj.tPholeLTposY + obj.tPOffsetY, obj.tPholeLTdiam / 2, 0, 2 * Math.PI);
        //   ctx.stroke();

        //   // }
        //   // if (form.cbHoleLB.checked) {
        //   ctx.strokeStyle = "orangered";
        //   ctx.lineWidth = 1;
        //   ctx.beginPath();
        //   ctx.arc(obj.tPholeLBposX + obj.tPOffsetX, obj.tPholeLBposY + obj.tPOffsetY, obj.tPholeLBdiam / 2, 0, 2 * Math.PI);
        //   ctx.stroke();
        //   // }

        //   // if (form.cbHoleRT.checked) {
        //   ctx.strokeStyle = "orangered";
        //   ctx.lineWidth = 1;
        //   ctx.beginPath();
        //   ctx.arc(obj.tPLength + obj.tPOffsetX - obj.tPholeRTposX, obj.tPWidth - obj.tPholeRTposY + obj.tPOffsetY, obj.tPholeRTdiam / 2, 0, 2 * Math.PI);
        //   ctx.stroke();
        //   // }

        //   // if (form.cbHoleRB.checked) {
        //   ctx.strokeStyle = "orangered";
        //   ctx.lineWidth = 1;
        //   ctx.beginPath();
        //   ctx.arc(obj.tPLength + obj.tPOffsetX - obj.tPholeRBposX, obj.tPholeRBposY + obj.tPOffsetY, obj.tPholeRBdiam / 2, 0, 2 * Math.PI);
        //   ctx.stroke();
        //   // }
        // }

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

        // function holesOnTP() {
        //   // if (form.cbHoleLT.checked) {
        //   ctx.save();
        //   ctx.strokeStyle = "orangered";
        //   ctx.lineWidth = 1;
        //   ctx.beginPath();
        //   ctx.arc(obj.tPholeLTposX + obj.tPOffsetX, obj.tPWidth - obj.tPholeLTposY + obj.tPOffsetY, obj.tPholeLTdiam / 2, 0, 2 * Math.PI);
        //   ctx.stroke();
        //   ctx.restore();
        //   // }
        //   // if (form.cbHoleLB.checked) {
        //   ctx.strokeStyle = "orangered";
        //   ctx.lineWidth = 1;
        //   ctx.beginPath();
        //   ctx.arc(obj.tPholeLBposX + obj.tPOffsetX, obj.tPholeLBposY + obj.tPOffsetY, obj.tPholeLBdiam / 2, 0, 2 * Math.PI);
        //   ctx.stroke();
        //   // }

        //   // if (form.cbHoleRT.checked) {
        //   ctx.strokeStyle = "orangered";
        //   ctx.lineWidth = 1;
        //   ctx.beginPath();
        //   ctx.arc(obj.tPLength + obj.tPOffsetX - obj.tPholeRTposX, obj.tPWidth - obj.tPholeRTposY + obj.tPOffsetY, obj.tPholeRTdiam / 2, 0, 2 * Math.PI);
        //   ctx.stroke();
        //   // }

        //   // if (form.cbHoleRB.checked) {
        //   ctx.strokeStyle = "orangered";
        //   ctx.lineWidth = 1;
        //   ctx.beginPath();
        //   ctx.arc(obj.tPLength + obj.tPOffsetX - obj.tPholeRBposX, obj.tPholeRBposY + obj.tPOffsetY, obj.tPholeRBdiam / 2, 0, 2 * Math.PI);
        //   ctx.stroke();
        //   // }
        // }

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

          // wTime.textContent = `Welding time: ${wT.toFixed(1)} min`;
          wTime.textContent = `Welding time: ${convertHM(wT * 60)}`;
        }

        function convertHM(value) {
          const sec = parseInt(value, 10); // convert value to number if it's string
          let hours = Math.floor(sec / 3600); // get hours
          let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
          // let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
          // add 0 if value < 10; Example: 2 => 02
          if (hours < 10) {
            hours = "0" + hours;
          }
          if (minutes < 10) {
            minutes = "0" + minutes;
          }
          // if (seconds < 10) {
          //   seconds = "0" + seconds;
          // }
          // return hours + ":" + minutes + ":" + seconds; // Return is HH : MM : SS
          return hours + ":" + minutes; // Return is HH : MM
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
          const hr = (window.innerHeight * innerHeightRatio) / obj.bPWidth;

          scale = Math.min(wr, hr) * 0.9;

          const frameOnScreenWidth = obj.bPLength * scale;
          const frameOnScreenHeight = obj.bPWidth * scale;

          ctx.clearRect(0, 0, canvas.width, canvas.height);

          translatePos.x = Math.round(window.innerWidth / 2 - frameOnScreenWidth / 2);
          translatePos.y = Math.round((innerHeightRatio * window.innerHeight) / 2 - frameOnScreenHeight / 2);
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

        function validatetPholeLTdiam() {
          if (obj.tPholeLTdiam / 2 < obj.tPholeLTposX) {
            draw(scale, translatePos);
            tPholeLTdiam.style.color = "black";
          } else {
            tPholeLTdiam.style.color = "red";
          }
        }

        function validatettPholeLTposX() {
          if (obj.tPholeLTposX > obj.tPholeLTdiam / 2) {
            draw(scale, translatePos);
            tPholeLTposX.style.color = "black";
          } else {
            tPholeLTposX.style.color = "red";
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
        const tPholeLTdiam = document.getElementById("tPholeLTdiam");
        const tPholeLTposX = document.getElementById("tPholeLTposX");
        const tPholeLTposY = document.getElementById("tPholeLTposY");

        tPholeLTdiam.addEventListener("input", function () {
          getInputs();
          validatetPholeLTdiam();
        });
        tPholeLTposX.addEventListener("input", function () {
          getInputs();
          validatettPholeLTposX();
        });
        tPholeLTposY.addEventListener("input", function () {
          getInputs();
          draw(scale, translatePos);
        });

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
            h6.innerHTML = `x: ${(inverseZoomX * evt.offsetX - inverseZoomX * transform.e).toFixed(1)}; y: ${(inverseZoomY * evt.offsetY - inverseZoomY * transform.f + obj.bPWidth).toFixed(1)}`;
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
          canvas.height = window.innerHeight * innerHeightRatio;
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
      });
    }
  });
