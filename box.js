function Box (width, height, color) {
  this.width = width || 50;
  this.height = height || 50;
  this.color = utils.parseColor(color) || "#ff0000";
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
  this.rotation = 0;
  this.scaleX = 1,
  this.scaleY = 1;
  this.lineWidth = 1;
}

Box.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.scale(this.scaleX, this.scaleY);
  context.lineWidth = this.lineWidth;
  context.fillStyle = this.color;
  context.beginPath();
  context.rect(0, 0, this.width, this.height);
  context.closePath()
  context.fill();
  if (this.lineWidth > 0) {
    context.stroke();
  }
  context.restore();
};