const Drawing = require("dxf-writer");
const d = new Drawing();
export function drawDXF(obj) {

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

  // const wT = (obj.tPLength / 1000) * 8.167 + (obj.tPWidth / 1000) * 2.5 + (spotsXYNr * 2.22) / 60 + (obj.tPLength / 1000 / 12) * (obj.tPWidth / 1000) * 7.5;

  // d.setActiveLayer("0");
  // d.drawText(5, -110, 15, 0, `Welding time: ${wT.toFixed(1)}min`);

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
  let pressed = false;

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
