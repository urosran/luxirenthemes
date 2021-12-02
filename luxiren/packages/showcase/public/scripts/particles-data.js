var Canvas = document.getElementById('particle_art_hosting');
var ctx = Canvas.getContext('2d');

var resize = function() {
    Canvas.width = Canvas.clientWidth;
    Canvas.height = Canvas.clientHeight;
};
window.addEventListener('resize', resize);
resize();

var elements = [];
var presets = {};

presets.square = function (x, y, s, dx, dy, dr, r) {
  r = r || 0;
  return {
    x: x,
    y: y,
    s: 20 * s,
    w: 5 * s,
    r: r,
    dx: dx,
    dy: dy,
    dr: dr,
    draw: function (ctx, t) {
      this.x += this.dx;
      this.y += this.dy;
      this.r += this.dr;

      var _this = this;
      var line = function (x, y, tx, ty, c, o) {
        o = o || 0;
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = "#B3E5FC";
        ctx.rect(20, 20, 20, 20);
        ctx.stroke();
      };

      ctx.save();

      ctx.translate(this.x + Math.sin((x + (t / 10)) / 300) * 10, this.y + Math.sin((10 + x + (t / 500)) / 20) * 20);
      ctx.rotate(this.r * Math.PI / 180);

      line(-1, -1, 1, 1, '#36b2ff');

      ctx.restore();
    }
  }
};

presets.zig = function (x, y, s, dx, dy, dr, r) {
  r = r || 0;
  return {
    x: x,
    y: y,
    s: 20 * s,
    w: 5 * s,
    r: r,
    dx: dx,
    dy: dy,
    draw: function (ctx, t) {
      this.x += this.dx;
      this.y += this.dy;

      var _this = this;
      var path = new Path2D('M 50,50 h 25 v 25 h 25');
      var line = function (x, y, tx, ty, c, o) {
        o = o || 0;
        ctx.beginPath();
        ctx.moveTo(-o + ((_this.s / 2) * x), o + ((_this.s / 2) * y));
        ctx.lineTo(-o + ((_this.s / 2) * tx), o + ((_this.s / 2) * ty));
        ctx.lineWidth = 3;
        ctx.strokeStyle = c;
        ctx.stroke(path);
      };

      ctx.save();

      ctx.translate(this.x + Math.sin((x + (t / 10)) / 100) * 10, this.y + Math.sin((10 + x + (t / 10)) / 100) * 10);
      ctx.rotate(100);

      line(-1, -1, 1, 1, '#FFE0B2');

      ctx.restore();
    }
  }
};


presets.line = function (x, y, s, dx, dy, dr, r) {
  r = r || 0;
  return {
    x: x,
    y: y,
    s: 20 * s,
    w: 5 * s,
    r: r,
    dx: dx,
    dy: dy,
    dr: dr,
    draw: function (ctx, t) {
      this.x += this.dx;
      this.y += this.dy;
      let px = 8;
      var _this = this;
      var path = new Path2D('M 50,50 h 25 v 25 h 25');
      var line = function (pattern, h, x, y, tx, ty, c, o) {
        o = o || 0;
        ctx.beginPath();
        ctx.setLineDash(pattern);
        ctx.moveTo(px, o + ((_this.s / 2) * y));
        ctx.lineTo(px, h);
        ctx.lineWidth = 2;
        ctx.strokeStyle = c;
        ctx.stroke();
        px += 8;
      };

      ctx.save();

      ctx.translate(this.x + Math.sin((x + (t / 10)) / 100) * 1, this.y + Math.sin((10 + x + (t / 10)) / 100) * 10);

      line([5, 2, 15], 15, -1, -1, 1, 1, '#dddddd');
      line([10, 5], 18, -1, -1, 1, 1, '#dddddd');
      line([15, 2], 15, -1, -1, 1, 1, '#dddddd');

      ctx.restore();
    }
  }
};

for (var x = 0; x < Canvas.width; x++) {
  for (var y = 0; y < Canvas.height; y++) {
    if (Math.round(Math.random() * 100000) == 1) {
      var s = ((Math.random() * 5) + 1) / 10;
      elements.push(presets.zig(x, y, s, 0, 0, 0));
      if (Math.round(Math.random()) == 1) {
        elements.push(presets.square(x, y, s, 0, 0, 0));
      } else{
        elements.push(presets.line(x, y, s, 0, 0, 0));
      }
    }
  }
}

setInterval(function () {
  ctx.clearRect(0, 0, Canvas.width, Canvas.height);

  var time = new Date().getTime();
  for (var e in elements)
    elements[e].draw(ctx, time);
}, 0.2);