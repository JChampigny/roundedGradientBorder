/**
 * Created with PyCharm.
 * User: jchampigny
 * Date: 3/21/13
 * Time: 1:30 PM
 * To change this template use File | Settings | File Templates.
 */

HTMLElement.prototype.castBorderWithGradient = function(size, colorTop, colorBottom) {
  var canvas = document.createElement('canvas'),
      context = canvas.getContext('2d'),
      radius = (this.style.borderRadius !== '') ? this.style.borderRadius
        : (this.style.mozBorderRadius !== '') ? this.style.mozBorderRadius
        : this.style.webkitBorderRadius;

  canvas.width = this.offsetWidth + size * 2;
  canvas.height = this.offsetHeight + size * 2;

  context.rect(0, 0, canvas.width, canvas.height);
  context.arcTo(0, radius, radius, 0, radius);

  var grd = context.createLinearGradient(0, 0, 0, canvas.height);
  grd.addColorStop(0, colorTop);
  grd.addColorStop(1, colorBottom);
  context.fillStyle = grd;
  context.fillRectR(0, 0, canvas.width, canvas.height, radius);

  canvas.style.position = "absolute";
  canvas.style.zIndex = "-100";
  canvas.style.display = document.defaultView.getComputedStyle(this, '').getPropertyValue('display');
  canvas.style.top = (this.offsetTop - size) + "px";
  canvas.style.left = (this.offsetLeft - size) + "px";

  document.body.insertBefore(canvas, this);
};

Object.getPrototypeOf(document.createElement('canvas').getContext('2d')).fillRectR = function(x, y, w, h, r) {
    if (typeof r === "undefined") {
        r = 5;
    }

    this.beginPath();
    this.moveTo(x + r, y);
    this.lineTo(x + w - r, y);
    this.quadraticCurveTo(x + w, y, x + w, y + r);
    this.lineTo(x + w, y + h - r);
    this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    this.lineTo(x + r, y + h);
    this.quadraticCurveTo(x, y + h, x, y + h - r);
    this.lineTo(x, y + r);
    this.quadraticCurveTo(x, y, x + r, y);
    this.closePath();
    this.fill();
};

Object.getPrototypeOf(document.createElement('canvas').getContext('2d')).strokeRectR = function(x, y, w, h, r) {
    if (typeof r === "undefined") {
        r = 5;
    }

    this.beginPath();
    this.moveTo(x + r, y);
    this.lineTo(x + w - r, y);
    this.quadraticCurveTo(x + w, y, x + w, y + r);
    this.lineTo(x + w, y + h - r);
    this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    this.lineTo(x + r, y + h);
    this.quadraticCurveTo(x, y + h, x, y + h - r);
    this.lineTo(x, y + r);
    this.quadraticCurveTo(x, y, x + r, y);
    this.closePath();
    this.stroke();
};