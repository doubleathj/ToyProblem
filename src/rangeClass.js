let Range = function (start, end, step) {
  if (start === undefined) {
    return null;
  }

  this.start = start;

  if (end === undefined) {
    this.end = this.start;
  } else {
    this.end = end;
  }

  if (step === undefined) {
    this.step = this.start < this.end ? 1 : -1;
  } else {
    this.step = step;
  }

  return this;
};

Range.prototype.size = function () {
  return Math.floor((this.end - this.start) / this.step) + 1;
};

Range.prototype.each = function (callback) {
  if (this.step > 0) {
    for (var i = this.start; i <= this.end; i += this.step) {
      callback(i);
    }
  } else {
    for (var i = this.start; i >= this.end; i += this.step) {
      callback(i);
    }
  }
};

Range.prototype.includes = function (val) {
  return (
    val >= this.start && val <= this.end && (this.start - val) % this.step == 0
  );
};
