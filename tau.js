TAU = {};
TAU.Ticker = (function() {
  var s, t,
    ce = [],
    ct = {},
    a = function() {
      b();
      t = setInterval(b, 1000);
    },
    b = function() {
      ce.forEach((e, i) => e());
      if (ct.hasOwnProperty(s))
        ct[s].forEach((e, i) => e());
      if (--s < 0)
        f();
    },
    c = function(c) {
      ce.push(c);
    },
    d = function(c, t) {
      if (!ct.hasOwnProperty(t))
        ct[t] = [];
      ct[t].push(c);
    },
    e = function(a) {
      s = a;
    },
    f = function() {
      ce = [];
      ct = {};
      s = 0;
    };

  return {
    start: () => a(),
    setSeconds: (s) => e(s),
    getSeconds: () => {
      return s;
    },
    setCallback: (a) => c(a),
    setCallbackAt: (a, s) => d(a, s),
    flush: () => f(),
  }
}());