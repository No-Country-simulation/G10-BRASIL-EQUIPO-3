var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (
    t || (e((t = { exports: {} }).exports, t, t.exports), (e = null)),
    t.exports
  ),
  s = (e, n) => {
    let r = {};
    for (var i in e) t(r, i, { get: e[i], enumerable: !0 });
    return (n || t(r, Symbol.toStringTag, { value: `Module` }), r);
  },
  c = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            }));
    return e;
  },
  l = (n, r, o) => (
    (o = n == null ? {} : e(i(n))),
    c(
      r || !n || !n.__esModule || !a.call(n, `default`)
        ? t(o, `default`, { value: n, enumerable: !0 })
        : o,
      n,
    )
  );
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      (t.credentials =
        e.crossOrigin === `use-credentials`
          ? `include`
          : e.crossOrigin === `anonymous`
            ? `omit`
            : `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var u = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.for(`react.view_transition`),
      m = Symbol.iterator;
    function h(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (m && e[m]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var g = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      _ = Object.assign,
      v = {};
    function y(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = v),
        (this.updater = n || g));
    }
    ((y.prototype.isReactComponent = {}),
      (y.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`,
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (y.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      }));
    function b() {}
    b.prototype = y.prototype;
    function x(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = v),
        (this.updater = n || g));
    }
    var ee = (x.prototype = new b());
    ((ee.constructor = x), _(ee, y.prototype), (ee.isPureReactComponent = !0));
    var te = Array.isArray;
    function ne() {}
    var S = { H: null, A: null, T: null, S: null },
      C = Object.prototype.hasOwnProperty;
    function w(e, n, r) {
      var i = r.ref;
      return {
        $$typeof: t,
        type: e,
        key: n,
        ref: i === void 0 ? null : i,
        props: r,
      };
    }
    function re(e, t) {
      return w(e.type, t, e.props);
    }
    function ie(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function ae(e) {
      var t = { "=": `=0`, ":": `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var T = /\/+/g;
    function oe(e, t) {
      return typeof e == `object` && e && e.key != null
        ? ae(`` + e.key)
        : t.toString(36);
    }
    function se(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value;
        case `rejected`:
          throw e.reason;
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(ne, ne)
              : ((e.status = `pending`),
                e.then(
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `fulfilled`), (e.value = t));
                  },
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `rejected`), (e.reason = t));
                  },
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value;
            case `rejected`:
              throw e.reason;
          }
      }
      throw e;
    }
    function ce(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
                break;
              case d:
                return ((c = e._init), ce(c(e._payload), r, i, a, o));
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + oe(e, 0) : a),
          te(o)
            ? ((i = ``),
              c != null && (i = c.replace(T, `$&/`) + `/`),
              ce(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (ie(o) &&
                (o = re(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(T, `$&/`) + `/`) +
                    c,
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (te(e))
        for (var u = 0; u < e.length; u++)
          ((a = e[u]), (s = l + oe(a, u)), (c += ce(a, r, i, s, o)));
      else if (((u = h(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done; )
          ((a = a.value), (s = l + oe(a, u++)), (c += ce(a, r, i, s, o)));
      else if (s === `object`) {
        if (typeof e.then == `function`) return ce(se(e), r, i, a, o);
        throw (
          (r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`,
          )
        );
      }
      return c;
    }
    function le(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        ce(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function ue(e) {
      if (e._status === -1) {
        var t = e._result,
          n = t();
        (n.then(
          function (t) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1),
              (e._result = t),
              n.status === void 0 && ((n.status = `fulfilled`), (n.value = t)));
          },
          function (t) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2),
              (e._result = t),
              n.status === void 0 && ((n.status = `rejected`), (n.reason = t)));
          },
        ),
          e._status === -1 && ((e._status = 0), (e._result = n)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var de =
      typeof reportError == `function`
        ? reportError
        : function (e) {
            if (
              typeof window == `object` &&
              typeof window.ErrorEvent == `function`
            ) {
              var t = new window.ErrorEvent(`error`, {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == `object` && e && typeof e.message == `string`
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == `object` &&
              typeof process.emit == `function`
            ) {
              process.emit(`uncaughtException`, e);
              return;
            }
            console.error(e);
          };
    function fe(e) {
      var t = S.T,
        n = {};
      ((n.types = t === null ? null : t.types), (S.T = n));
      try {
        var r = e(),
          i = S.S;
        (i !== null && i(n, r),
          typeof r == `object` &&
            r &&
            typeof r.then == `function` &&
            r.then(ne, de));
      } catch (e) {
        de(e);
      } finally {
        (t !== null && n.types !== null && (t.types = n.types), (S.T = t));
      }
    }
    function pe(e) {
      var t = S.T;
      if (t !== null) {
        var n = t.types;
        n === null ? (t.types = [e]) : n.indexOf(e) === -1 && n.push(e);
      } else fe(pe.bind(null, e));
    }
    var me = {
      map: le,
      forEach: function (e, t, n) {
        le(
          e,
          function () {
            t.apply(this, arguments);
          },
          n,
        );
      },
      count: function (e) {
        var t = 0;
        return (
          le(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          le(e, function (e) {
            return e;
          }) || []
        );
      },
      only: function (e) {
        if (!ie(e))
          throw Error(
            `React.Children.only expected to receive a single React element child.`,
          );
        return e;
      },
    };
    ((e.Activity = f),
      (e.Children = me),
      (e.Component = y),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = x),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.ViewTransition = p),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = S),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return S.H.useMemoCache(e);
        },
      }),
      (e.addTransitionType = pe),
      (e.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (e.cacheSignal = function () {
        return null;
      }),
      (e.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(
            `The argument must be a React element, but you passed ` + e + `.`,
          );
        var r = _({}, e.props),
          i = e.key;
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !C.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
          r.children = o;
        }
        return w(e.type, i, r);
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (e.Provider = e),
          (e.Consumer = { $$typeof: o, _context: e }),
          e
        );
      }),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null;
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            C.call(t, r) &&
              r !== `key` &&
              r !== `__self` &&
              r !== `__source` &&
              (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1) i.children = n;
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
        return w(e, a, i);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = ie),
      (e.lazy = function (e) {
        return {
          $$typeof: d,
          _payload: { _status: -1, _result: e },
          _init: ue,
        };
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
      }),
      (e.startTransition = fe),
      (e.unstable_useCacheRefresh = function () {
        return S.H.useCacheRefresh();
      }),
      (e.use = function (e) {
        return S.H.use(e);
      }),
      (e.useActionState = function (e, t, n) {
        return S.H.useActionState(e, t, n);
      }),
      (e.useCallback = function (e, t) {
        return S.H.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return S.H.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return S.H.useDeferredValue(e, t);
      }),
      (e.useEffect = function (e, t) {
        return S.H.useEffect(e, t);
      }),
      (e.useEffectEvent = function (e) {
        return S.H.useEffectEvent(e);
      }),
      (e.useId = function () {
        return S.H.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return S.H.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return S.H.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return S.H.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return S.H.useMemo(e, t);
      }),
      (e.useOptimistic = function (e, t) {
        return S.H.useOptimistic(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return S.H.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return S.H.useRef(e);
      }),
      (e.useState = function (e) {
        return S.H.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return S.H.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return S.H.useTransition();
      }),
      (e.version = `19.3.1`));
  }),
  d = o((e, t) => {
    t.exports = u();
  }),
  f = o((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n; ) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
      for (var i = n(l); i !== null; ) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e)
          (r(l), (i.sortIndex = i.expirationTime), t(c, i));
        else break;
        i = n(l);
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m)) {
        if (n(c) !== null) ((m = !0), ee || ((ee = !0), re()));
        else {
          var t = n(l);
          t !== null && T(x, t.startTime - e);
        }
      }
    }
    var ee = !1,
      te = -1,
      ne = 5,
      S = -1;
    function C() {
      return g ? !0 : !(e.unstable_now() - S < ne);
    }
    function w() {
      if (((g = !1), ee)) {
        var t = e.unstable_now();
        S = t;
        var i = !0;
        try {
          a: {
            ((m = !1), h && ((h = !1), v(te), (te = -1)), (p = !0));
            var a = f;
            try {
              b: {
                for (
                  b(t), d = n(c);
                  d !== null && !(d.expirationTime > t && C());
                ) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    ((d.callback = null), (f = d.priorityLevel));
                    var s = o(d.expirationTime <= t);
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      ((d.callback = s), b(t), (i = !0));
                      break b;
                    }
                    (d === n(c) && r(c), b(t));
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = !0;
                else {
                  var u = n(l);
                  (u !== null && T(x, u.startTime - t), (i = !1));
                }
              }
              break a;
            } finally {
              ((d = null), (f = a), (p = !1));
            }
            i = void 0;
          }
        } finally {
          i ? re() : (ee = !1);
        }
      }
    }
    var re;
    if (typeof y == `function`)
      re = function () {
        y(w);
      };
    else if (typeof MessageChannel < `u`) {
      var ie = new MessageChannel(),
        ae = ie.port2;
      ((ie.port1.onmessage = w),
        (re = function () {
          ae.postMessage(null);
        }));
    } else
      re = function () {
        _(w, 0);
      };
    function T(t, n) {
      te = _(function () {
        t(e.unstable_now());
      }, n);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (ne = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0;
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null &&
                r === n(l) &&
                (h ? (v(te), (te = -1)) : (h = !0), T(x, a - o)))
            : ((r.sortIndex = s),
              t(c, r),
              m || p || ((m = !0), ee || ((ee = !0), re()))),
          r
        );
      }),
      (e.unstable_shouldYield = C),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      }));
  }),
  p = o((e, t) => {
    t.exports = f();
  }),
  m = o((e) => {
    var t = d();
    function n(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function r() {}
    var i = {
        d: {
          f: r,
          r: function () {
            throw Error(n(522));
          },
          D: r,
          C: r,
          L: r,
          m: r,
          X: r,
          S: r,
          M: r,
        },
        p: 0,
        findDOMNode: null,
      },
      a = Symbol.for(`react.portal`),
      o = Symbol.for(`react.recoverable`),
      s = Symbol.for(`react.optimistic_key`);
    function c(e, t, n) {
      var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: a,
        key: r == null ? null : r === s ? s : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    var l = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function u(e, t) {
      if (e === `font`) return ``;
      if (typeof t == `string`) return t === `use-credentials` ? t : ``;
    }
    ((e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
      (e.browser = function (e) {
        return { $$typeof: o, _reason: e };
      }),
      (e.createPortal = function (e, t) {
        var r =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
          throw Error(n(299));
        return c(e, t, null, r);
      }),
      (e.flushSync = function (e) {
        var t = l.T,
          n = i.p;
        try {
          if (((l.T = null), (i.p = 2), e)) return e();
        } finally {
          ((l.T = t), (i.p = n), i.d.f());
        }
      }),
      (e.preconnect = function (e, t) {
        typeof e == `string` &&
          (t
            ? ((t = t.crossOrigin),
              (t =
                typeof t == `string`
                  ? t === `use-credentials`
                    ? t
                    : ``
                  : void 0))
            : (t = null),
          i.d.C(e, t));
      }),
      (e.prefetchDNS = function (e) {
        typeof e == `string` && i.d.D(e);
      }),
      (e.preinit = function (e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
          var n = t.as,
            r = u(n, t.crossOrigin),
            a = typeof t.integrity == `string` ? t.integrity : void 0,
            o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
          n === `style`
            ? i.d.S(
                e,
                typeof t.precedence == `string` ? t.precedence : void 0,
                { crossOrigin: r, integrity: a, fetchPriority: o },
              )
            : n === `script` &&
              i.d.X(e, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
        }
      }),
      (e.preinitModule = function (e, t) {
        if (typeof e == `string`) {
          if (typeof t == `object` && t) {
            if (t.as == null || t.as === `script`) {
              var n = u(t.as, t.crossOrigin);
              i.d.M(e, {
                crossOrigin: n,
                integrity:
                  typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
                fetchPriority:
                  typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
              });
            }
          } else t ?? i.d.M(e);
        }
      }),
      (e.preload = function (e, t) {
        if (
          typeof e == `string` &&
          typeof t == `object` &&
          t &&
          typeof t.as == `string`
        ) {
          var n = t.as,
            r = u(n, t.crossOrigin);
          i.d.L(e, n, {
            crossOrigin: r,
            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            nonce: typeof t.nonce == `string` ? t.nonce : void 0,
            type: typeof t.type == `string` ? t.type : void 0,
            fetchPriority:
              typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            referrerPolicy:
              typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
            imageSrcSet:
              typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
            imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
            media: typeof t.media == `string` ? t.media : void 0,
          });
        }
      }),
      (e.preloadModule = function (e, t) {
        if (typeof e == `string`) {
          if (t) {
            var n = u(t.as, t.crossOrigin);
            i.d.m(e, {
              as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
              nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              fetchPriority:
                typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            });
          } else i.d.m(e);
        }
      }),
      (e.requestFormReset = function (e) {
        i.d.r(e);
      }),
      (e.unstable_batchedUpdates = function (e, t) {
        return e(t);
      }),
      (e.useFormState = function (e, t, n) {
        return l.H.useFormState(e, t, n);
      }),
      (e.useFormStatus = function () {
        return l.H.useHostTransitionStatus();
      }),
      (e.version = `19.3.1`));
  }),
  h = o((e, t) => {
    function n() {
      if (
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = m()));
  }),
  g = o((e) => {
    var t = p(),
      n = d(),
      r = h();
    function i(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function a(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function o(e) {
      for (var t = e, n = t; n && !n.alternate; )
        ((t = n), t.flags & 4098 && (e = t.return), (n = t.return));
      for (; t.return; ) t = t.return;
      return t.tag === 3 ? e : null;
    }
    function s(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function c(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function l(e) {
      if (o(e) !== e) throw Error(i(188));
    }
    function u(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = o(e)), t === null)) throw Error(i(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ; ) {
        var a = n.return;
        if (a === null) break;
        var s = a.alternate;
        if (s === null) {
          if (((r = a.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (a.child === s.child) {
          for (s = a.child; s; ) {
            if (s === n) return (l(a), e);
            if (s === r) return (l(a), t);
            s = s.sibling;
          }
          throw Error(i(188));
        }
        if (n.return !== r.return) ((n = a), (r = s));
        else {
          for (var c = !1, u = a.child; u; ) {
            if (u === n) {
              ((c = !0), (n = a), (r = s));
              break;
            }
            if (u === r) {
              ((c = !0), (r = a), (n = s));
              break;
            }
            u = u.sibling;
          }
          if (!c) {
            for (u = s.child; u; ) {
              if (u === n) {
                ((c = !0), (n = s), (r = a));
                break;
              }
              if (u === r) {
                ((c = !0), (r = s), (n = a));
                break;
              }
              u = u.sibling;
            }
            if (!c) throw Error(i(189));
          }
        }
        if (n.alternate !== r) throw Error(i(190));
      }
      if (n.tag !== 3) throw Error(i(188));
      return n.stateNode.current === n ? e : t;
    }
    function f(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (((t = f(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    function m(e, t, n, r, i, a) {
      for (; e !== null; ) {
        if (
          ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, r, i, a)) ||
          ((e.tag !== 22 || e.memoizedState === null) &&
            (t || (e.tag !== 5 && e.tag !== 27)) &&
            m(e.child, t, n, r, i, a))
        )
          return !0;
        e = e.sibling;
      }
      return !1;
    }
    function g(e) {
      for (e = e.return; e !== null; ) {
        if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
        e = e.return;
      }
      return null;
    }
    function _(e) {
      var t = !1;
      for (
        e = e.return;
        e !== null &&
        (e.tag === 4 && (t = !0), e.tag !== 3 && e.tag !== 5 && e.tag !== 27);
      )
        e = e.return;
      return t;
    }
    function v(e) {
      var t = [null, null],
        n = g(e);
      return (n === null || y(t, e, n.child, { foundSelf: !1 }), t);
    }
    function y(e, t, n, r) {
      for (; n !== null; ) {
        if (n === t) r.foundSelf = !0;
        else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
          if (r.foundSelf) return ((e[1] = n), !0);
          e[0] = n;
        } else if (
          (n.tag !== 22 || n.memoizedState === null) &&
          y(e, t, n.child, r)
        )
          return !0;
        n = n.sibling;
      }
      return !1;
    }
    function b(e) {
      switch (e.tag) {
        case 5:
        case 27:
        case 6:
          return e.stateNode;
        case 3:
          return e.stateNode.containerInfo;
        default:
          throw Error(i(559));
      }
    }
    var x = null,
      ee = null;
    function te(e, t, n) {
      return e === n || (e === t && ((x = e), !0));
    }
    function ne(e, t, n) {
      return e === n ? ((ee = e), !1) : e === t && (ee !== null && (x = e), !0);
    }
    function S(e) {
      if (e === null) return null;
      do e = e === null ? null : e.return;
      while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
      return e || null;
    }
    function C(e, t, n) {
      for (var r = 0, i = e; i; i = n(i)) r++;
      i = 0;
      for (var a = t; a; a = n(a)) i++;
      for (; 0 < r - i; ) ((e = n(e)), r--);
      for (; 0 < i - r; ) ((t = n(t)), i--);
      for (; r--; ) {
        if (e === t || (t !== null && e === t.alternate)) return e;
        ((e = n(e)), (t = n(t)));
      }
      return null;
    }
    var w = Object.assign,
      re = Symbol.for(`react.element`),
      ie = Symbol.for(`react.transitional.element`),
      ae = Symbol.for(`react.portal`),
      T = Symbol.for(`react.fragment`),
      oe = Symbol.for(`react.strict_mode`),
      se = Symbol.for(`react.profiler`),
      ce = Symbol.for(`react.consumer`),
      le = Symbol.for(`react.context`),
      ue = Symbol.for(`react.forward_ref`),
      de = Symbol.for(`react.suspense`),
      fe = Symbol.for(`react.suspense_list`),
      pe = Symbol.for(`react.memo`),
      me = Symbol.for(`react.lazy`),
      he = Symbol.for(`react.activity`),
      ge = Symbol.for(`react.legacy_hidden`),
      _e = Symbol.for(`react.memo_cache_sentinel`),
      ve = Symbol.for(`react.view_transition`),
      ye = Symbol.for(`react.recoverable`),
      be = Symbol.iterator;
    function xe(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (be && e[be]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var Se = Symbol.for(`react.client.reference`);
    function Ce(e) {
      if (e == null) return null;
      if (typeof e == `function`)
        return e.$$typeof === Se ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case T:
          return `Fragment`;
        case se:
          return `Profiler`;
        case oe:
          return `StrictMode`;
        case de:
          return `Suspense`;
        case fe:
          return `SuspenseList`;
        case he:
          return `Activity`;
        case ve:
          return `ViewTransition`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case ae:
            return `Portal`;
          case le:
            return e.displayName || `Context`;
          case ce:
            return (e._context.displayName || `Context`) + `.Consumer`;
          case ue:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case pe:
            return (
              (t = e.displayName || null),
              t === null ? Ce(e.type) || `Memo` : t
            );
          case me:
            ((t = e._payload), (e = e._init));
            try {
              return Ce(e(t));
            } catch {}
        }
      return null;
    }
    var we = Array.isArray,
      E = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      D = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      Te = { pending: !1, data: null, method: null, action: null },
      Ee = [],
      De = -1;
    function Oe(e) {
      return { current: e };
    }
    function ke(e) {
      0 > De || ((e.current = Ee[De]), (Ee[De] = null), De--);
    }
    function O(e, t) {
      (De++, (Ee[De] = e.current), (e.current = t));
    }
    var Ae = Oe(null),
      je = Oe(null),
      Me = Oe(null),
      Ne = Oe(null);
    function Pe(e, t) {
      switch ((O(Me, t), O(je, e), O(Ae, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? up(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI)))
            ((t = up(t)), (e = dp(t, e)));
          else
            switch (e) {
              case `svg`:
                e = 1;
                break;
              case `math`:
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      (ke(Ae), O(Ae, e));
    }
    function Fe() {
      (ke(Ae), ke(je), ke(Me));
    }
    function Ie(e) {
      var t = e.memoizedState;
      (t !== null && ((sh._currentValue = t.memoizedState), O(Ne, e)),
        (t = Ae.current));
      var n = dp(t, e.type);
      t !== n && (O(je, e), O(Ae, n));
    }
    function Le(e) {
      (je.current === e && (ke(Ae), ke(je)),
        Ne.current === e && (ke(Ne), (sh._currentValue = Te)));
    }
    var Re, ze;
    function Be(e) {
      if (Re === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ((Re = (t && t[1]) || ``),
            (ze =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``));
        }
      return (
        `
` +
        Re +
        e +
        ze
      );
    }
    var Ve = !1;
    function He(e, t) {
      if (!e || Ve) return ``;
      Ve = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  n = !1;
                  try {
                    var i = Object.getOwnPropertyDescriptor(
                      e.prototype,
                      `props`,
                    );
                    (Object.defineProperty(e.prototype, "props", {
                      configurable: !0,
                      set: function () {
                        throw Error();
                      },
                    }),
                      (n = !0),
                      new e());
                  } finally {
                    n &&
                      (i === void 0
                        ? delete e.prototype.props
                        : Object.defineProperty(e.prototype, "props", i));
                  }
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) &&
                  typeof n.catch == `function` &&
                  n.catch(function () {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`)
                return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          `name`,
        );
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
            value: `DetermineComponentFrameRoot`,
          });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (
            i = r = 0;
            r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);
          )
            r++;
          for (
            ;
            i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);
          )
            i++;
          if (r === c.length || i === l.length)
            for (
              r = c.length - 1, i = l.length - 1;
              1 <= r && 0 <= i && c[r] !== l[i];
            )
              i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        ((Ve = !1), (Error.prepareStackTrace = n));
      }
      return (n = e ? e.displayName || e.name : ``) ? Be(n) : ``;
    }
    function Ue(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return Be(e.type);
        case 16:
          return Be(`Lazy`);
        case 13:
          return e.child !== t && t !== null
            ? Be(`Suspense Fallback`)
            : Be(`Suspense`);
        case 19:
          return Be(`SuspenseList`);
        case 0:
        case 15:
          return He(e.type, !1);
        case 11:
          return He(e.type.render, !1);
        case 1:
          return He(e.type, !0);
        case 31:
          return Be(`Activity`);
        case 30:
          return Be(`ViewTransition`);
        default:
          return ``;
      }
    }
    function We(e) {
      try {
        var t = ``,
          n = null;
        do ((t += Ue(e, n)), (n = e), (e = e.return));
        while (e);
        return t;
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        );
      }
    }
    var Ge = Object.prototype.hasOwnProperty,
      Ke = t.unstable_scheduleCallback,
      qe = t.unstable_cancelCallback,
      Je = t.unstable_shouldYield,
      Ye = t.unstable_requestPaint,
      Xe = t.unstable_now,
      Ze = t.unstable_getCurrentPriorityLevel,
      Qe = t.unstable_ImmediatePriority,
      $e = t.unstable_UserBlockingPriority,
      et = t.unstable_NormalPriority,
      tt = t.unstable_LowPriority,
      nt = t.unstable_IdlePriority,
      rt = t.log,
      it = t.unstable_setDisableYieldValue,
      at = null,
      ot = null;
    function st(e) {
      if (
        (typeof rt == `function` && it(e),
        ot && typeof ot.setStrictMode == `function`)
      )
        try {
          ot.setStrictMode(at, e);
        } catch {}
    }
    var ct = Math.clz32 ? Math.clz32 : dt,
      lt = Math.log,
      ut = Math.LN2;
    function dt(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((lt(e) / ut) | 0)) | 0);
    }
    var ft = 256,
      pt = 262144,
      mt = 4194304;
    function ht(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & -e;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function gt(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = ht(n)))
                : (i = ht(o))
              : (i = ht(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s),
                o === 0
                  ? n || ((n = s & ~e), n !== 0 && (i = ht(n)))
                  : (i = ht(o)))
              : (i = ht(r))),
        i === 0
          ? 0
          : t !== 0 &&
              t !== i &&
              (t & a) === 0 &&
              ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
            ? t
            : i
      );
    }
    function _t(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function vt(e, t) {
      t & 8 && (t |= t & 32);
      var n = e.entangledLanes;
      if (n !== 0)
        for (e = e.entanglements, n &= t; 0 < n; ) {
          var r = 31 - ct(n),
            i = 1 << r;
          ((t |= e[r]), (n &= ~i));
        }
      return t;
    }
    function yt(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function bt() {
      var e = mt;
      return ((mt <<= 1), !(mt & 62914560) && (mt = 4194304), e);
    }
    function xt(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function St(e, t) {
      ((e.pendingLanes |= t),
        t !== 268435456 &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function Ct(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      ((e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0));
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n; ) {
        var u = 31 - ct(n),
          d = 1 << u;
        ((s[u] = 0), (c[u] = -1));
        var f = l[u];
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u];
            p !== null && (p.lane &= -536870913);
          }
        n &= ~d;
      }
      (r !== 0 && wt(e, r, 0),
        a !== 0 &&
          i === 0 &&
          e.tag !== 0 &&
          (e.suspendedLanes |= a & ~(o & ~t)));
    }
    function wt(e, t, n) {
      ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
      var r = 31 - ct(t);
      ((e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)));
    }
    function Tt(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n; ) {
        var r = 31 - ct(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    function Et(e, t) {
      var n = t & -t;
      return (
        (n = n & 42 ? 1 : Dt(n)),
        (n & (e.suspendedLanes | t)) === 0 ? n : 0
      );
    }
    function Dt(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function Ot(e) {
      return (
        (e &= -e),
        2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
      );
    }
    function kt() {
      var e = D.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : Ch(e.type)) : e;
    }
    function At(e, t) {
      var n = D.p;
      try {
        return ((D.p = e), t());
      } finally {
        D.p = n;
      }
    }
    var jt = Math.random().toString(36).slice(2),
      Mt = `__reactFiber$` + jt,
      Nt = `__reactProps$` + jt,
      Pt = `__reactContainer$` + jt,
      Ft = `__reactEvents$` + jt,
      It = `__reactListeners$` + jt,
      Lt = `__reactHandles$` + jt,
      Rt = `__reactResources$` + jt,
      zt = `__reactMarker$` + jt,
      Bt = `__reactLoad$` + jt;
    function Vt(e) {
      (delete e[Mt], delete e[Nt], delete e[It], delete e[Lt]);
    }
    function Ht(e) {
      var t;
      if ((t = e[Mt])) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[Pt] || n[Mt])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = fm(e); e !== null; ) {
              if ((n = e[Mt])) return n;
              e = fm(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function Ut(e) {
      if ((e = e[Mt] || e[Pt])) {
        var t = e.tag;
        if (
          t === 5 ||
          t === 6 ||
          t === 13 ||
          t === 31 ||
          t === 26 ||
          t === 27 ||
          t === 3
        )
          return e;
      }
      return null;
    }
    function Wt(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(i(33));
    }
    function Gt(e) {
      var t = e[Rt];
      return (
        (t ||= e[Rt] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        t
      );
    }
    function Kt(e) {
      e[zt] = !0;
    }
    function qt(e) {
      e[Bt] = void 0;
    }
    var Jt = new Set(),
      Yt = {};
    function Xt(e, t) {
      (Zt(e, t), Zt(e + `Capture`, t));
    }
    function Zt(e, t) {
      for (Yt[e] = t, e = 0; e < t.length; e++) Jt.add(t[e]);
    }
    var Qt = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
      ),
      $t = {},
      en = {};
    function tn(e) {
      return Ge.call(en, e)
        ? !0
        : Ge.call($t, e)
          ? !1
          : Qt.test(e)
            ? (en[e] = !0)
            : (($t[e] = !0), !1);
    }
    var k = !1;
    function nn() {
      var e = k;
      return ((k = !1), e);
    }
    function rn(e, t, n) {
      if (tn(t)) {
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, n);
        }
      }
    }
    function an(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, n);
      }
    }
    function on(e, t, n, r) {
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, r);
      }
    }
    function sn(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function cn(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === `input` &&
        (t === `checkbox` || t === `radio`)
      );
    }
    function ln(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (
        !e.hasOwnProperty(t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
        var i = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              ((n = `` + e), a.call(this, e));
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (e) {
              n = `` + e;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function un(e) {
      if (!e._valueTracker) {
        var t = cn(e) ? `checked` : `value`;
        e._valueTracker = ln(e, t, `` + e[t]);
      }
    }
    function dn(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = cn(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e !== n && (t.setValue(e), !0)
      );
    }
    var fn = /[\n"\\]/g;
    function pn(e) {
      return e.replace(fn, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function mn(e, t, n, r, i, a, o, s) {
      ((e.name = ``),
        o != null &&
        typeof o != `function` &&
        typeof o != `symbol` &&
        typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) &&
              (e.value = `` + sn(t))
            : e.value !== `` + sn(t) && (e.value = `` + sn(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : gn(e, sn(n))
          : o === `number` && e.value == t
            ? gn(e, sn(e.value))
            : gn(e, sn(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null &&
          (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null &&
        typeof s != `function` &&
        typeof s != `symbol` &&
        typeof s != `boolean`
          ? (e.name = `` + sn(s))
          : e.removeAttribute(`name`));
    }
    function hn(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          un(e);
          return;
        }
        ((n = n == null ? `` : `` + sn(n)),
          (t = t == null ? n : `` + sn(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        un(e));
    }
    function gn(e, t) {
      e.defaultValue !== `` + t && (e.defaultValue = `` + t);
    }
    function _n(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + sn(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function vn(e, t, n) {
      t != null && ((t = `` + sn(t)), t !== e.value && (e.value = t), n == null)
        ? e.defaultValue !== t && (e.defaultValue = t)
        : (e.defaultValue = n == null ? `` : `` + sn(n));
    }
    function yn(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(i(92));
          if (we(r)) {
            if (1 < r.length) throw Error(i(93));
            r = r[0];
          }
          n = r;
        }
        ((n ??= ``), (t = n));
      }
      ((n = sn(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        un(e));
    }
    function bn(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var xn = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    );
    function Sn(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || xn.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`);
    }
    function Cn(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(i(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
                ? (e.cssFloat = ``)
                : (e[r] = ``),
            (k = !0));
        for (var a in t)
          ((r = t[a]),
            t.hasOwnProperty(a) && n[a] !== r && (Sn(e, a, r), (k = !0)));
      } else for (var o in t) t.hasOwnProperty(o) && Sn(e, o, t[o]);
    }
    function wn(e) {
      if (e.indexOf(`-`) === -1) return !1;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var Tn = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`maskType`, `mask-type`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      En =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Dn(e) {
      return En.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function On() {}
    var kn = null;
    function An(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var jn = null,
      Mn = null;
    function Nn(e) {
      var t = Ut(e);
      if (t && (e = t.stateNode)) {
        var n = e[Nt] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (mn(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name,
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  `input[name="` + pn(`` + t) + `"][type="radio"]`,
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = r[Nt] || null;
                  if (!a) throw Error(i(90));
                  mn(
                    r,
                    a.value,
                    a.defaultValue,
                    a.defaultValue,
                    a.checked,
                    a.defaultChecked,
                    a.type,
                    a.name,
                  );
                }
              }
              for (t = 0; t < n.length; t++)
                ((r = n[t]), r.form === e.form && dn(r));
            }
            break a;
          case `textarea`:
            vn(e, n.value, n.defaultValue);
            break a;
          case `select`:
            ((t = n.value), t != null && _n(e, !!n.multiple, t, !1));
        }
      }
    }
    var Pn = !1;
    function Fn(e, t, n) {
      if (Pn) return e(t, n);
      Pn = !0;
      try {
        return e(t);
      } finally {
        if (
          ((Pn = !1),
          (jn !== null || Mn !== null) &&
            (zd(), jn && ((t = jn), (e = Mn), (Mn = jn = null), Nn(t), e)))
        )
          for (t = 0; t < e.length; t++) Nn(e[t]);
      }
    }
    function In(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[Nt] || null;
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ((r = !r.disabled) ||
            ((e = e.type),
            (r =
              e !== `button` &&
              e !== `input` &&
              e !== `select` &&
              e !== `textarea`)),
            (e = !r));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n));
      return n;
    }
    var Ln =
        typeof window < `u` &&
        window.document !== void 0 &&
        window.document.createElement !== void 0,
      Rn = !1;
    if (Ln)
      try {
        var zn = {};
        (Object.defineProperty(zn, "passive", {
          get: function () {
            Rn = !0;
          },
        }),
          window.addEventListener(`test`, zn, zn),
          window.removeEventListener(`test`, zn, zn));
      } catch {
        Rn = !1;
      }
    var Bn = null,
      Vn = null,
      Hn = null;
    function Un() {
      if (Hn) return Hn;
      var e,
        t = Vn,
        n = t.length,
        r,
        i = `value` in Bn ? Bn.value : Bn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (Hn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function Wn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Gn() {
      return !0;
    }
    function Kn() {
      return !1;
    }
    function qn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null
              ? !1 === i.returnValue
              : i.defaultPrevented
          )
            ? Gn
            : Kn),
          (this.isPropagationStopped = Kn),
          this
        );
      }
      return (
        w(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = Gn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = Gn));
          },
          persist: function () {},
          isPersistent: Gn,
        }),
        t
      );
    }
    var Jn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      Yn = qn(Jn),
      Xn = w({}, Jn, { view: 0, detail: 0 }),
      Zn = qn(Xn),
      Qn,
      $n,
      er,
      tr = w({}, Xn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: dr,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== er &&
                (er && e.type === `mousemove`
                  ? ((Qn = e.screenX - er.screenX),
                    ($n = e.screenY - er.screenY))
                  : ($n = Qn = 0),
                (er = e)),
              Qn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : $n;
        },
      }),
      nr = qn(tr),
      rr = qn(w({}, tr, { dataTransfer: 0 })),
      ir = qn(w({}, Xn, { relatedTarget: 0 })),
      ar = qn(
        w({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      ),
      or = qn(
        w({}, Jn, {
          clipboardData: function (e) {
            return `clipboardData` in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
      ),
      A = qn(w({}, Jn, { data: 0 })),
      sr = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      cr = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      lr = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`,
      };
    function ur(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = lr[e])
          ? !!t[e]
          : !1;
    }
    function dr() {
      return ur;
    }
    var fr = qn(
        w({}, Xn, {
          key: function (e) {
            if (e.key) {
              var t = sr[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = Wn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? cr[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: dr,
          charCode: function (e) {
            return e.type === `keypress` ? Wn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? Wn(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        }),
      ),
      pr = qn(
        w({}, tr, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      mr = qn(w({}, Jn, { submitter: 0 })),
      hr = qn(
        w({}, Xn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: dr,
        }),
      ),
      gr = qn(w({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      _r = qn(
        w({}, tr, {
          deltaX: function (e) {
            return `deltaX` in e
              ? e.deltaX
              : `wheelDeltaX` in e
                ? -e.wheelDeltaX
                : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      vr = qn(w({}, Jn, { newState: 0, oldState: 0, source: 0 })),
      yr = [9, 13, 27, 32],
      br = Ln && `CompositionEvent` in window,
      xr = null;
    Ln && `documentMode` in document && (xr = document.documentMode);
    var Sr = Ln && `TextEvent` in window && !xr,
      Cr = Ln && (!br || (xr && 8 < xr && 11 >= xr)),
      wr = ` `,
      Tr = !1;
    function Er(e, t) {
      switch (e) {
        case `keyup`:
          return yr.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function Dr(e) {
      return (
        (e = e.detail),
        typeof e == `object` && `data` in e ? e.data : null
      );
    }
    var Or = !1;
    function kr(e, t) {
      switch (e) {
        case `compositionend`:
          return Dr(t);
        case `keypress`:
          return t.which === 32 ? ((Tr = !0), wr) : null;
        case `textInput`:
          return ((e = t.data), e === wr && Tr ? null : e);
        default:
          return null;
      }
    }
    function Ar(e, t) {
      if (Or)
        return e === `compositionend` || (!br && Er(e, t))
          ? ((e = Un()), (Hn = Vn = Bn = null), (Or = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return Cr && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var jr = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function Mr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!jr[e.type] : t === `textarea`;
    }
    function Nr(e, t, n, r) {
      (jn ? (Mn ? Mn.push(r) : (Mn = [r])) : (jn = r),
        (t = Jf(t, `onChange`)),
        0 < t.length &&
          ((n = new Yn(`onChange`, `change`, null, n, r)),
          e.push({ event: n, listeners: t })));
    }
    var Pr = null,
      Fr = null;
    function Ir(e) {
      Vf(e, 0);
    }
    function Lr(e) {
      if (dn(Wt(e))) return e;
    }
    function Rr(e, t) {
      if (e === `change`) return t;
    }
    var zr = !1;
    if (Ln) {
      var Br;
      if (Ln) {
        var Vr = `oninput` in document;
        if (!Vr) {
          var Hr = document.createElement(`div`);
          (Hr.setAttribute(`oninput`, `return;`),
            (Vr = typeof Hr.oninput == `function`));
        }
        Br = Vr;
      } else Br = !1;
      zr = Br && (!document.documentMode || 9 < document.documentMode);
    }
    function Ur() {
      Pr && (Pr.detachEvent(`onpropertychange`, Wr), (Fr = Pr = null));
    }
    function Wr(e) {
      if (e.propertyName === `value` && Lr(Fr)) {
        var t = [];
        (Nr(t, Fr, e, An(e)), Fn(Ir, t));
      }
    }
    function Gr(e, t, n) {
      e === `focusin`
        ? (Ur(), (Pr = t), (Fr = n), Pr.attachEvent(`onpropertychange`, Wr))
        : e === `focusout` && Ur();
    }
    function Kr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`)
        return Lr(Fr);
    }
    function qr(e, t) {
      if (e === `click`) return Lr(t);
    }
    function Jr(e, t) {
      if (e === `input` || e === `change`) return Lr(t);
    }
    function Yr(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var Xr = typeof Object.is == `function` ? Object.is : Yr;
    function Zr(e, t) {
      if (Xr(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ge.call(t, i) || !Xr(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Qr(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function $r(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function ei(e, t) {
      var n = $r(e);
      e = 0;
      for (var r; n; ) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = $r(n);
      }
    }
    function ti(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? ti(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function ni(e) {
      e =
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = Qr(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Qr(e.document);
      }
      return t;
    }
    function ri(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    var ii = Ln && `documentMode` in document && 11 >= document.documentMode,
      ai = null,
      oi = null,
      si = null,
      ci = !1;
    function li(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      ci ||
        ai == null ||
        ai !== Qr(r) ||
        ((r = ai),
        `selectionStart` in r && ri(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (si && Zr(si, r)) ||
          ((si = r),
          (r = Jf(oi, `onSelect`)),
          0 < r.length &&
            ((t = new Yn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = ai))));
    }
    function ui(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var di = {
        animationend: ui(`Animation`, `AnimationEnd`),
        animationiteration: ui(`Animation`, `AnimationIteration`),
        animationstart: ui(`Animation`, `AnimationStart`),
        transitionrun: ui(`Transition`, `TransitionRun`),
        transitionstart: ui(`Transition`, `TransitionStart`),
        transitioncancel: ui(`Transition`, `TransitionCancel`),
        transitionend: ui(`Transition`, `TransitionEnd`),
      },
      fi = {},
      pi = {};
    Ln &&
      ((pi = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete di.animationend.animation,
        delete di.animationiteration.animation,
        delete di.animationstart.animation),
      `TransitionEvent` in window || delete di.transitionend.transition);
    function mi(e) {
      if (fi[e]) return fi[e];
      if (!di[e]) return e;
      var t = di[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in pi) return (fi[e] = t[n]);
      return e;
    }
    var hi = mi(`animationend`),
      gi = mi(`animationiteration`),
      _i = mi(`animationstart`),
      vi = mi(`transitionrun`),
      yi = mi(`transitionstart`),
      bi = mi(`transitioncancel`),
      xi = mi(`transitionend`),
      Si = new Map(),
      Ci =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    Ci.push(`scrollEnd`);
    function wi(e, t) {
      (Si.set(e, t), Xt(t, [e]));
    }
    var Ti = 0;
    function Ei(e, t) {
      if (e.name != null && e.name !== `auto`) return e.name;
      if (t.autoName !== null) return t.autoName;
      e = bd.identifierPrefix;
      var n = Ti++;
      return ((e = `_` + e + `t_` + n.toString(32) + `_`), (t.autoName = e));
    }
    function Di(e) {
      if (e == null || typeof e == `string`) return e;
      var t = null,
        n = Od;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var i = e[n[r]];
          if (i != null) {
            if (i === `none`) return `none`;
            t = t == null ? i : t + (` ` + i);
          }
        }
      return t ?? e.default;
    }
    function Oi(e, t) {
      return (
        (e = Di(e)),
        (t = Di(t)),
        t == null ? (e === `auto` ? null : e) : t === `auto` ? null : t
      );
    }
    var ki =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      Ai = [],
      j = 0,
      ji = 0;
    function Mi() {
      for (var e = j, t = (ji = j = 0); t < e; ) {
        var n = Ai[t];
        Ai[t++] = null;
        var r = Ai[t];
        Ai[t++] = null;
        var i = Ai[t];
        Ai[t++] = null;
        var a = Ai[t];
        if (((Ai[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)),
            (r.pending = i));
        }
        a !== 0 && Ii(n, i, a);
      }
    }
    function Ni(e, t, n, r) {
      ((Ai[j++] = e),
        (Ai[j++] = t),
        (Ai[j++] = n),
        (Ai[j++] = r),
        (ji |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r));
    }
    function Pi(e, t, n, r) {
      return (Ni(e, t, n, r), Li(e));
    }
    function Fi(e, t) {
      return (Ni(e, null, null, t), Li(e));
    }
    function Ii(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = !1, a = e.return; a !== null; )
        ((a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 &&
            ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return));
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - ct(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function Li(e) {
      if (50 < kd) throw ((kd = 0), (Ad = null), Error(i(185)));
      for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
      return e.tag === 3 ? e.stateNode : null;
    }
    var Ri = {};
    function zi(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function Bi(e, t, n, r) {
      return new zi(e, t, n, r);
    }
    function Vi(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function Hi(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = Bi(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 1206910976),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function Ui(e, t) {
      e.flags &= 1206910978;
      var n = e.alternate;
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function Wi(e, t, n, r, a, o) {
      var s = 0;
      if (((r = e), typeof r == `function`)) Vi(r) && (s = 1);
      else if (typeof r == `string`)
        s = qm(e, n, Ae.current)
          ? 26
          : e === `html` || e === `head` || e === `body`
            ? 27
            : 5;
      else
        a: switch (r) {
          case he:
            return (
              (e = Bi(31, n, t, a)),
              (e.elementType = he),
              (e.lanes = o),
              e
            );
          case T:
            return Gi(n.children, a, o, t);
          case oe:
            ((s = 8), (a |= 24));
            break;
          case se:
            return (
              (e = Bi(12, n, t, a | 2)),
              (e.elementType = se),
              (e.lanes = o),
              e
            );
          case de:
            return (
              (e = Bi(13, n, t, a)),
              (e.elementType = de),
              (e.lanes = o),
              e
            );
          case fe:
            return (
              (e = Bi(19, n, t, a)),
              (e.elementType = fe),
              (e.lanes = o),
              e
            );
          case ge:
          case ve:
            return (
              (e = a | 32),
              (e = Bi(30, n, t, e)),
              (e.elementType = ve),
              (e.lanes = o),
              (e.stateNode = {
                autoName: null,
                paired: null,
                clones: null,
                ref: null,
              }),
              e
            );
          default:
            if (typeof r == `object` && r)
              switch (r.$$typeof) {
                case le:
                  s = 10;
                  break a;
                case ce:
                  s = 9;
                  break a;
                case ue:
                  s = 11;
                  break a;
                case pe:
                  s = 14;
                  break a;
                case me:
                  ((s = 16), (r = null));
                  break a;
              }
            ((s = 29),
              (n = Error(i(130, e === null ? `null` : typeof e, ``))),
              (r = null));
        }
      return (
        (t = Bi(s, n, t, a)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
      );
    }
    function Gi(e, t, n, r) {
      return ((e = Bi(7, e, r, t)), (e.lanes = n), e);
    }
    function Ki(e, t, n) {
      return ((e = Bi(6, e, null, t)), (e.lanes = n), e);
    }
    function qi(e) {
      var t = Bi(18, null, null, 0);
      return ((t.stateNode = e), t);
    }
    function Ji(e, t, n) {
      return (
        (t = Bi(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var Yi = new WeakMap();
    function Xi(e, t) {
      if (typeof e == `object` && e) {
        var n = Yi.get(e);
        return n === void 0
          ? ((t = { value: e, source: t, stack: We(t) }), Yi.set(e, t), t)
          : n;
      }
      return { value: e, source: t, stack: We(t) };
    }
    var Zi = [],
      Qi = 0,
      $i = null,
      ea = 0,
      ta = [],
      na = 0,
      ra = null,
      ia = 1,
      aa = ``;
    function oa(e, t) {
      ((Zi[Qi++] = ea), (Zi[Qi++] = $i), ($i = e), (ea = t));
    }
    function sa(e, t, n) {
      ((ta[na++] = ia), (ta[na++] = aa), (ta[na++] = ra), (ra = e));
      var r = ia;
      e = aa;
      var i = 32 - ct(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - ct(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (ia = (1 << (32 - ct(t) + i)) | (n << i) | r),
          (aa = a + e));
      } else ((ia = (1 << a) | (n << i) | r), (aa = e));
    }
    function ca(e) {
      e.return !== null && (oa(e, 1), sa(e, 1, 0));
    }
    function la(e) {
      for (; e === $i; )
        (($i = Zi[--Qi]), (Zi[Qi] = null), (ea = Zi[--Qi]), (Zi[Qi] = null));
      for (; e === ra; )
        ((ra = ta[--na]),
          (ta[na] = null),
          (aa = ta[--na]),
          (ta[na] = null),
          (ia = ta[--na]),
          (ta[na] = null));
    }
    function ua(e, t) {
      ((ta[na++] = ia),
        (ta[na++] = aa),
        (ta[na++] = ra),
        (ia = t.id),
        (aa = t.overflow),
        (ra = e));
    }
    var da = null,
      M = null,
      N = !1,
      fa = null,
      pa = !1,
      ma = Error(i(519));
    function ha(e) {
      throw (
        xa(
          Xi(
            Error(
              i(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1]
                  ? `text`
                  : `HTML`,
                ``,
              ),
            ),
            e,
          ),
        ),
        ma
      );
    }
    function ga(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[Mt] = e), (t[Nt] = r), n)) {
        case `dialog`:
          (Q(`cancel`, t), Q(`close`, t));
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          Q(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < zf.length; n++) Q(zf[n], t);
          break;
        case `source`:
          Q(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          (Q(`error`, t), Q(`load`, t));
          break;
        case `details`:
          Q(`toggle`, t);
          break;
        case `input`:
          (Q(`invalid`, t),
            hn(
              t,
              r.value,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
              !0,
            ));
          break;
        case `select`:
          Q(`invalid`, t);
          break;
        case `textarea`:
          (Q(`invalid`, t), yn(t, r.value, r.defaultValue, r.children));
      }
      ((n = r.children),
        (typeof n != `string` &&
          typeof n != `number` &&
          typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        ep(t.textContent, n)
          ? (r.popover != null && (Q(`beforetoggle`, t), Q(`toggle`, t)),
            r.onScroll != null && Q(`scroll`, t),
            r.onScrollEnd != null && Q(`scrollend`, t),
            r.onClick != null && (t.onclick = On),
            (t = !0))
          : (t = !1),
        t || ha(e, !0));
    }
    function _a(e) {
      for (da = e.return; da; )
        switch (da.tag) {
          case 5:
          case 31:
          case 13:
            pa = !1;
            return;
          case 27:
          case 3:
            pa = !0;
            return;
          default:
            da = da.return;
        }
    }
    function va(e) {
      if (e !== da) return !1;
      if (!N) return (_a(e), (N = !0), !1);
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type),
            (n =
              n === `form` || n === `button` || pp(e.type, e.memoizedProps))),
          (n = !n)),
        n && M && ha(e),
        _a(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        M = dm(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        M = dm(e);
      } else
        t === 27
          ? ((t = M), Sp(e.type) ? ((e = um), (um = null), (M = e)) : (M = t))
          : (M = da ? lm(e.stateNode.nextSibling) : null);
      return !0;
    }
    function ya() {
      ((M = da = null), (N = !1));
    }
    function ba() {
      var e = fa;
      return (
        e !== null &&
          (pd === null ? (pd = e) : pd.push.apply(pd, e), (fa = null)),
        e
      );
    }
    function xa(e) {
      fa === null ? (fa = [e]) : fa.push(e);
    }
    var Sa = Oe(null),
      Ca = null,
      wa = null;
    function Ta(e, t, n) {
      (O(Sa, t._currentValue), (t._currentValue = n));
    }
    function Ea(e) {
      ((e._currentValue = Sa.current), ke(Sa));
    }
    function Da(e, t, n) {
      for (; e !== null; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function Oa(e, t, n, r) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null; ) {
        var o = a.dependencies;
        if (o !== null) {
          var s = a.child;
          o = o.firstContext;
          a: for (; o !== null; ) {
            var c = o;
            o = a;
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                ((o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  Da(o.return, n, e),
                  r || (s = null));
                break a;
              }
            o = c.next;
          }
        } else if (a.tag === 18) {
          if (((s = a.return), s === null)) throw Error(i(341));
          ((s.lanes |= n),
            (o = s.alternate),
            o !== null && (o.lanes |= n),
            Da(s, n, e),
            (s = null));
        } else
          a.tag === 13 &&
          a.memoizedState !== null &&
          a.memoizedState.dehydrated === null
            ? ((a.lanes |= n),
              (s = a.alternate),
              s !== null && (s.lanes |= n),
              Da(a.return, n, e),
              (s = a.child),
              (s = s === null ? null : s.sibling))
            : (s = a.child);
        if (s !== null) s.return = a;
        else
          for (s = a; s !== null; ) {
            if (s === e) {
              s = null;
              break;
            }
            if (((a = s.sibling), a !== null)) {
              ((a.return = s.return), (s = a));
              break;
            }
            s = s.return;
          }
        a = s;
      }
    }
    function ka(e, t, n, r) {
      e = null;
      for (var a = t, o = !1; a !== null; ) {
        if (!o) {
          if (a.flags & 524288) o = !0;
          else if (a.flags & 262144) break;
        }
        if (a.tag === 10) {
          var s = a.alternate;
          if (s === null) throw Error(i(387));
          if (((s = s.memoizedProps), s !== null)) {
            var c = a.type;
            Xr(a.pendingProps.value, s.value) ||
              (e === null ? (e = [c]) : e.push(c));
          }
        } else if (a === Ne.current) {
          if (((s = a.alternate), s === null)) throw Error(i(387));
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
            (e === null ? (e = [sh]) : e.push(sh));
        }
        a = a.return;
      }
      return (e !== null && Oa(t, e, n, r), (t.flags |= 262144), e !== null);
    }
    function Aa(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Xr(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function ja(e) {
      ((Ca = e),
        (wa = null),
        (e = e.dependencies),
        e !== null && (e.firstContext = null));
    }
    function Ma(e) {
      return Pa(Ca, e);
    }
    function Na(e, t) {
      return (Ca === null && ja(e), Pa(e, t));
    }
    function Pa(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), wa === null)) {
        if (e === null) throw Error(i(308));
        ((wa = t),
          (e.dependencies = { lanes: 0, firstContext: t }),
          (e.flags |= 524288));
      } else wa = wa.next = t;
      return n;
    }
    var Fa =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                ((t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  }));
              };
            },
      Ia = t.unstable_scheduleCallback,
      La = t.unstable_NormalPriority,
      P = {
        $$typeof: le,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function Ra() {
      return { controller: new Fa(), data: new Map(), refCount: 0 };
    }
    function za(e) {
      (e.refCount--,
        e.refCount === 0 &&
          Ia(La, function () {
            e.controller.abort();
          }));
    }
    function Ba(e, t) {
      if (e.pendingLanes & 4194048) {
        var n = e.transitionTypes;
        for (
          n === null && (n = e.transitionTypes = []), e = 0;
          e < t.length;
          e++
        ) {
          var r = t[e];
          n.indexOf(r) === -1 && n.push(r);
        }
      }
    }
    var Va = null;
    function Ha(e) {
      var t = e.transitionTypes;
      return ((e.transitionTypes = null), t);
    }
    var Ua = null,
      Wa = 0,
      Ga = 0,
      Ka = null;
    function qa(e, t) {
      if (Ua === null) {
        var n = (Ua = []);
        ((Wa = 0),
          (Ga = Pf()),
          (Ka = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          }));
      }
      return (Wa++, t.then(Ja, Ja), t);
    }
    function Ja() {
      if (--Wa === 0 && ((Va = null), Ua !== null)) {
        Ka !== null && (Ka.status = `fulfilled`);
        var e = Ua;
        ((Ua = null), (Ga = 0), (Ka = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Ya(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e);
          },
        };
      return (
        e.then(
          function () {
            ((r.status = `fulfilled`), (r.value = t));
            for (var e = 0; e < n.length; e++) (0, n[e])(t);
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++)
              (0, n[e])(void 0);
          },
        ),
        r
      );
    }
    var Xa = E.S;
    E.S = function (e, t) {
      if (
        ((gd = Xe()),
        typeof t == `object` && t && typeof t.then == `function` && qa(e, t),
        Va !== null)
      )
        for (var n = bf; n !== null; ) (Ba(n, Va), (n = n.next));
      if (((n = e.types), n !== null)) {
        for (var r = bf; r !== null; ) (Ba(r, n), (r = r.next));
        if (Ga !== 0) {
          ((r = Va), r === null && (r = Va = []));
          for (var i = 0; i < n.length; i++) {
            var a = n[i];
            r.indexOf(a) === -1 && r.push(a);
          }
        }
      }
      Xa !== null && Xa(e, t);
    };
    var Za = Oe(null);
    function Qa() {
      var e = Za.current;
      return e === null ? G.pooledCache : e;
    }
    function $a(e, t) {
      t === null ? O(Za, Za.current) : O(Za, t.pool);
    }
    function eo() {
      var e = Qa();
      return e === null ? null : { parent: P._currentValue, pool: e };
    }
    var to = Error(i(460)),
      no = Error(i(474)),
      ro = Error(i(542)),
      io = { then: function () {} };
    function ao(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`);
    }
    function oo(e, t, n) {
      switch (
        ((n = e[n]),
        n === void 0 ? e.push(t) : n !== t && (t.then(On, On), (t = n)),
        t.status)
      ) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw (
            (e = t.reason),
            uo(e),
            e === void 0 && !(`reason` in t) ? Error(i(600)) : e
          );
        default:
          if (typeof t.status == `string`) t.then(On, On);
          else {
            if (((e = G), e !== null && 100 < e.shellSuspendCounter))
              throw Error(i(482));
            ((e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `fulfilled`), (n.value = e));
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `rejected`), (n.reason = e));
                  }
                },
              ));
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw ((e = t.reason), uo(e), e);
          }
          throw ((co = t), to);
      }
    }
    function so(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function`
          ? ((co = e), to)
          : e;
      }
    }
    var co = null;
    function lo() {
      if (co === null) throw Error(i(459));
      var e = co;
      return ((co = null), e);
    }
    function uo(e) {
      if (e === to || e === ro) throw Error(i(483));
    }
    var fo = null,
      po = 0;
    function mo(e) {
      var t = po;
      return ((po += 1), fo === null && (fo = []), oo(fo, e, t));
    }
    function ho(e, t) {
      ((t = t.props.ref), (e.ref = t === void 0 ? null : t));
    }
    function go(e, t) {
      throw t.$$typeof === re
        ? Error(i(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            i(
              31,
              e === `[object Object]`
                ? `object with keys {` + Object.keys(t).join(`, `) + `}`
                : e,
            ),
          ));
    }
    function _o(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null; ) (t(n, r), (r = r.sibling));
        return null;
      }
      function r(e) {
        for (var t = new Map(); e !== null; )
          (e.key === null ? t.set(e.index, e) : t.set(e.key, e),
            (e = e.sibling));
        return t;
      }
      function a(e, t) {
        return ((e = Hi(e, t)), (e.index = 0), (e.sibling = null), e);
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 134217730), n)
                : ((r = r.index), r < n ? ((t.flags |= 2), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 134217730), t);
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = Ki(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === T
          ? ((e = d(e, t, n.props.children, r, n.key)), ho(e, n), e)
          : t !== null &&
              (t.elementType === i ||
                (typeof i == `object` &&
                  i &&
                  i.$$typeof === me &&
                  so(i) === t.type))
            ? ((t = a(t, n.props)), ho(t, n), (t.return = e), t)
            : ((t = Wi(n.type, n.key, n.props, null, e.mode, r)),
              ho(t, n),
              (t.return = e),
              t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = Ji(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = Gi(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if (
          (typeof t == `string` && t !== ``) ||
          typeof t == `number` ||
          typeof t == `bigint`
        )
          return ((t = Ki(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case ie:
              return (
                (n = Wi(t.type, t.key, t.props, null, e.mode, n)),
                ho(n, t),
                (n.return = e),
                n
              );
            case ae:
              return ((t = Ji(t, e.mode, n)), (t.return = e), t);
            case me:
              return ((t = so(t)), f(e, t, n));
          }
          if (we(t) || xe(t))
            return ((t = Gi(t, e.mode, n, null)), (t.return = e), t);
          if (typeof t.then == `function`) return f(e, mo(t), n);
          if (t.$$typeof === le) return f(e, Na(e, t), n);
          go(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if (
          (typeof n == `string` && n !== ``) ||
          typeof n == `number` ||
          typeof n == `bigint`
        )
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case ie:
              return n.key === i ? l(e, t, n, r) : null;
            case ae:
              return n.key === i ? u(e, t, n, r) : null;
            case me:
              return ((n = so(n)), p(e, t, n, r));
          }
          if (we(n) || xe(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, mo(n), r);
          if (n.$$typeof === le) return p(e, t, Na(e, n), r);
          go(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if (
          (typeof r == `string` && r !== ``) ||
          typeof r == `number` ||
          typeof r == `bigint`
        )
          return ((e = e.get(n) || null), c(t, e, `` + r, i));
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case ie:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                l(t, e, r, i)
              );
            case ae:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                u(t, e, r, i)
              );
            case me:
              return ((r = so(r)), m(e, t, n, r, i));
          }
          if (we(r) || xe(r))
            return ((e = e.get(n) || null), d(t, e, r, i, null));
          if (typeof r.then == `function`) return m(e, t, n, mo(r), i);
          if (r.$$typeof === le) return m(e, t, n, Na(t, r), i);
          go(t, r);
        }
        return null;
      }
      function h(i, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          (e && d && _.alternate === null && t(i, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g));
        }
        if (h === s.length) return (n(i, d), N && oa(i, h), l);
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(i, s[h], c)),
              d !== null &&
                ((a = o(d, a, h)),
                u === null ? (l = d) : (u.sibling = d),
                (u = d)));
          return (N && oa(i, h), l);
        }
        for (d = r(d); h < s.length; h++)
          ((g = m(d, i, h, s[h], c)),
            g !== null &&
              (e &&
                ((_ = g.alternate),
                _ !== null && d.delete(_.key === null ? h : _.key)),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          N && oa(i, h),
          l
        );
      }
      function g(a, s, c, l) {
        if (c == null) throw Error(i(151));
        for (
          var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(a, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          (e && h && y.alternate === null && t(a, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _));
        }
        if (v.done) return (n(a, h), N && oa(a, g), u);
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(a, v.value, l)),
              v !== null &&
                ((s = o(v, s, g)),
                d === null ? (u = v) : (d.sibling = v),
                (d = v)));
          return (N && oa(a, g), u);
        }
        for (h = r(h); !v.done; g++, v = c.next())
          ((v = m(h, a, g, v.value, l)),
            v !== null &&
              (e &&
                ((_ = v.alternate),
                _ !== null && h.delete(_.key === null ? g : _.key)),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)));
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e);
            }),
          N && oa(a, g),
          u
        );
      }
      function _(e, r, o, c) {
        if (
          (typeof o == `object` &&
            o &&
            o.type === T &&
            o.key === null &&
            o.props.ref === void 0 &&
            (o = o.props.children),
          typeof o == `object` && o)
        ) {
          switch (o.$$typeof) {
            case ie:
              a: {
                for (var l = o.key; r !== null; ) {
                  if (r.key === l) {
                    if (((l = o.type), l === T)) {
                      if (r.tag === 7) {
                        (n(e, r.sibling),
                          (c = a(r, o.props.children)),
                          ho(c, o),
                          (c.return = e),
                          (e = c));
                        break a;
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` &&
                        l &&
                        l.$$typeof === me &&
                        so(l) === r.type)
                    ) {
                      (n(e, r.sibling),
                        (c = a(r, o.props)),
                        ho(c, o),
                        (c.return = e),
                        (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  (t(e, r), (r = r.sibling));
                }
                o.type === T
                  ? ((c = Gi(o.props.children, e.mode, c, o.key)),
                    ho(c, o),
                    (c.return = e),
                    (e = c))
                  : ((c = Wi(o.type, o.key, o.props, null, e.mode, c)),
                    ho(c, o),
                    (c.return = e),
                    (e = c));
              }
              return s(e);
            case ae:
              a: {
                for (l = o.key; r !== null; ) {
                  if (r.key === l) {
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      (n(e, r.sibling),
                        (c = a(r, o.children || [])),
                        (c.return = e),
                        (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  (t(e, r), (r = r.sibling));
                }
                ((c = Ji(o, e.mode, c)), (c.return = e), (e = c));
              }
              return s(e);
            case me:
              return ((o = so(o)), _(e, r, o, c));
          }
          if (we(o)) return h(e, r, o, c);
          if (xe(o)) {
            if (((l = xe(o)), typeof l != `function`)) throw Error(i(150));
            return ((o = l.call(o)), g(e, r, o, c));
          }
          if (typeof o.then == `function`) return _(e, r, mo(o), c);
          if (o.$$typeof === le) return _(e, r, Na(e, o), c);
          go(e, o);
        }
        return (typeof o == `string` && o !== ``) ||
          typeof o == `number` ||
          typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = a(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = Ki(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          po = 0;
          var i = _(e, t, n, r);
          return ((fo = null), i);
        } catch (t) {
          if (t === to || t === ro) throw t;
          var a = Bi(29, t, null, e.mode);
          return ((a.lanes = r), (a.return = e), a);
        }
      };
    }
    var vo = _o(!0),
      yo = _o(!1),
      bo = !1;
    function xo(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function So(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          }));
    }
    function Co(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function wo(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), W & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = Li(e)),
          Ii(e, null, n),
          t
        );
      }
      return (Ni(e, r, t, n), Li(e));
    }
    function To(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Tt(e, n));
      }
    }
    function Eo(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null,
            };
            (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n));
      } else
        ((e = n.lastBaseUpdate),
          e === null ? (n.firstBaseUpdate = t) : (e.next = t),
          (n.lastBaseUpdate = t));
    }
    var Do = !1;
    function Oo() {
      if (Do) {
        var e = Ka;
        if (e !== null) throw e;
      }
    }
    function ko(e, t, n, r) {
      Do = !1;
      var i = e.updateQueue;
      bo = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o &&
            (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
            (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        ((o = 0), (u = l = c = null), (s = a));
        do {
          var f = s.lane & -536870913,
            p = f !== s.lane;
          if (p ? (q & f) === f : (r & f) === f) {
            (f !== 0 && f === Ga && (Do = !0),
              u !== null &&
                (u = u.next =
                  {
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: null,
                    next: null,
                  }));
            a: {
              var m = e,
                h = s;
              f = t;
              var g = n;
              switch (h.tag) {
                case 1:
                  if (((m = h.payload), typeof m == `function`)) {
                    d = m.call(g, d, f);
                    break a;
                  }
                  d = m;
                  break a;
                case 3:
                  m.flags = (m.flags & -65537) | 128;
                case 0:
                  if (
                    ((m = h.payload),
                    (f = typeof m == `function` ? m.call(g, d, f) : m),
                    f == null)
                  )
                    break a;
                  d = w({}, d, f);
                  break a;
                case 2:
                  bo = !0;
              }
            }
            ((f = s.callback),
              f !== null &&
                ((e.flags |= 64),
                p && (e.flags |= 8192),
                (p = i.callbacks),
                p === null ? (i.callbacks = [f]) : p.push(f)));
          } else
            ((p = {
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
              (o |= f));
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            ((p = s),
              (s = p.next),
              (p.next = null),
              (i.lastBaseUpdate = p),
              (i.shared.pending = null));
          }
        } while (1);
        (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (sd |= o),
          (e.lanes = o),
          (e.memoizedState = d));
      }
    }
    function Ao(e, t) {
      if (typeof e != `function`) throw Error(i(191, e));
      e.call(t);
    }
    function jo(e, t) {
      var n = e.callbacks;
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++) Ao(n[e], t);
    }
    var Mo = Oe(null),
      No = Oe(0);
    function Po(e, t) {
      ((e = od), O(No, e), O(Mo, t), (od = e | t.baseLanes));
    }
    function Fo() {
      (O(No, od), O(Mo, Mo.current));
    }
    function Io() {
      ((od = No.current), ke(Mo), ke(No));
    }
    var Lo = Oe(null),
      Ro = null;
    function zo(e) {
      var t = e.alternate;
      (O(Uo, Uo.current & 1),
        O(Lo, e),
        Ro === null &&
          (t === null || Mo.current !== null || t.memoizedState !== null) &&
          (Ro = e));
    }
    function Bo(e) {
      (O(Uo, Uo.current), O(Lo, e), Ro === null && (Ro = e));
    }
    function Vo(e) {
      e.tag === 22
        ? (O(Uo, Uo.current), O(Lo, e), Ro === null && (Ro = e))
        : Ho();
    }
    function Ho() {
      (O(Uo, Uo.current), O(Lo, Lo.current));
    }
    function F(e) {
      (ke(Lo), Ro === e && (Ro = null), ke(Uo));
    }
    var Uo = Oe(0);
    function Wo(e, t) {
      (O(Lo, Lo.current), O(Uo, t));
    }
    function Go(e) {
      (ke(Uo), ke(Lo), Ro === e && (Ro = null));
    }
    function Ko(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || om(n) || sm(n)))
            return t;
        } else if (
          t.tag === 19 &&
          t.memoizedProps.revealOrder !== `independent`
        ) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var qo = 0,
      I = null,
      L = null,
      R = null,
      Jo = !1,
      Yo = !1,
      Xo = !1,
      Zo = 0,
      Qo = 0,
      $o = null,
      es = 0;
    function z() {
      throw Error(i(321));
    }
    function ts(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Xr(e[n], t[n])) return !1;
      return !0;
    }
    function ns(e, t, n, r, i, a) {
      return (
        (qo = a),
        (I = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (E.H = e === null || e.memoizedState === null ? vc : yc),
        (Xo = !1),
        (a = n(r, i)),
        (Xo = !1),
        Yo && (a = is(t, n, r, i)),
        rs(e),
        a
      );
    }
    function rs(e) {
      E.H = _c;
      var t = L !== null && L.next !== null;
      if (((qo = 0), (R = L = I = null), (Jo = !1), (Qo = 0), ($o = null), t))
        throw Error(i(300));
      e === null ||
        Ic ||
        ((e = e.dependencies), e !== null && Aa(e) && (Ic = !0));
    }
    function is(e, t, n, r) {
      I = e;
      var a = 0;
      do {
        if ((Yo && ($o = null), (Qo = 0), (Yo = !1), 25 <= a))
          throw Error(i(301));
        if (((a += 1), (R = L = null), e.updateQueue != null)) {
          var o = e.updateQueue;
          ((o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0));
        }
        ((E.H = bc), (o = t(n, r)));
      } while (Yo);
      return o;
    }
    function as() {
      var e = E.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? ds(t) : t),
        (e = e.useState()[0]),
        (L === null ? null : L.memoizedState) !== e && (I.flags |= 1024),
        t
      );
    }
    function os() {
      var e = Zo !== 0;
      return ((Zo = 0), e);
    }
    function ss(e, t, n) {
      ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function cs(e) {
      if (Jo) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          (t !== null && (t.pending = null), (e = e.next));
        }
        Jo = !1;
      }
      ((qo = 0), (R = L = I = null), (Yo = !1), (Qo = Zo = 0), ($o = null));
    }
    function ls() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (R === null ? (I.memoizedState = R = e) : (R = R.next = e), R);
    }
    function B() {
      if (L === null) {
        var e = I.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = L.next;
      var t = R === null ? I.memoizedState : R.next;
      if (t !== null) ((R = t), (L = e));
      else {
        if (e === null)
          throw I.alternate === null ? Error(i(467)) : Error(i(310));
        ((L = e),
          (e = {
            memoizedState: L.memoizedState,
            baseState: L.baseState,
            baseQueue: L.baseQueue,
            queue: L.queue,
            next: null,
          }),
          R === null ? (I.memoizedState = R = e) : (R = R.next = e));
      }
      return R;
    }
    function us() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function ds(e) {
      var t = Qo;
      return (
        (Qo += 1),
        $o === null && ($o = []),
        (e = oo($o, e, t)),
        (t = I),
        (R === null ? t.memoizedState : R.next) === null &&
          ((t = t.alternate),
          (E.H = t === null || t.memoizedState === null ? vc : yc)),
        e
      );
    }
    function fs(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return ds(e);
        if (e.$$typeof === ye) return;
        if (e.$$typeof === le) return Ma(e);
      }
      throw Error(i(438, String(e)));
    }
    function ps(e) {
      var t = null,
        n = I.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = I.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              })));
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = us()), (I.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = _e;
      return (t.index++, n);
    }
    function ms(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function hs(e) {
      return gs(B(), L, e);
    }
    function gs(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(i(311));
      r.lastRenderedReducer = n;
      var a = e.baseQueue,
        o = r.pending;
      if (o !== null) {
        if (a !== null) {
          var s = a.next;
          ((a.next = o.next), (o.next = s));
        }
        ((t.baseQueue = a = o), (r.pending = null));
      }
      if (((o = e.baseState), a === null)) e.memoizedState = o;
      else {
        t = a.next;
        var c = (s = null),
          l = null,
          u = t,
          d = !1;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (qo & f) === f : (q & f) === f) {
            var p = u.revertLane;
            if (p === 0)
              (l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === Ga && (d = !0));
            else if ((qo & p) === p) {
              ((u = u.next), p === Ga && (d = !0));
              continue;
            } else
              ((f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                (I.lanes |= p),
                (sd |= p));
            ((f = u.action),
              Xo && n(o, f),
              (o = u.hasEagerState ? u.eagerState : n(o, f)));
          } else
            ((p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
              (I.lanes |= f),
              (sd |= f));
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (s = o) : (l.next = c),
          !Xr(o, e.memoizedState) && ((Ic = !0), d && ((n = Ka), n !== null)))
        )
          throw n;
        ((e.memoizedState = o),
          (e.baseState = s),
          (e.baseQueue = l),
          (r.lastRenderedState = o));
      }
      return (a === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
    }
    function _s(e) {
      var t = B(),
        n = t.queue;
      if (n === null) throw Error(i(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (a !== null) {
        n.pending = null;
        var s = (a = a.next);
        do ((o = e(o, s.action)), (s = s.next));
        while (s !== a);
        (Xr(o, t.memoizedState) || (Ic = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, r];
    }
    function vs(e, t, n) {
      var r = I,
        a = B(),
        o = N;
      if (o) {
        if (n === void 0) throw Error(i(407));
        n = n();
      } else n = t();
      var s = !Xr((L || a).memoizedState, n);
      if (
        (s && ((a.memoizedState = n), (Ic = !0)),
        (a = a.queue),
        Us(xs.bind(null, r, a, e), [e]),
        (e =
          a.getSnapshot !== t ||
          s ||
          (R !== null && !!(R.memoizedState.tag & 1))),
        Rs(e ? 9 : 8, { destroy: void 0 }, bs.bind(null, r, a, n, t), null),
        e)
      ) {
        if (((r.flags |= 2048), G === null)) throw Error(i(349));
        o || qo & 127 || ys(r, t, n);
      }
      return n;
    }
    function ys(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = I.updateQueue),
        t === null
          ? ((t = us()), (I.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function bs(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), Ss(t) && Cs(e));
    }
    function xs(e, t, n) {
      return n(function () {
        Ss(t) && Cs(e);
      });
    }
    function Ss(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Xr(e, n);
      } catch {
        return !0;
      }
    }
    function Cs(e) {
      var t = Fi(e, 2);
      t !== null && Pd(t, e, 2);
    }
    function ws(e) {
      var t = ls();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), Xo)) {
          st(!0);
          try {
            n();
          } finally {
            st(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ms,
          lastRenderedState: e,
        }),
        t
      );
    }
    function Ts(e, t, n, r) {
      return ((e.baseState = n), gs(e, L, typeof r == `function` ? r : ms));
    }
    function Es(e, t, n, r, a) {
      if (mc(e)) throw Error(i(485));
      if (((e = t.action), e !== null)) {
        var o = {
          payload: a,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            o.listeners.push(e);
          },
        };
        (E.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null
            ? ((o.next = t.pending = o), Ds(t, o))
            : ((o.next = n.next), (t.pending = n.next = o)));
      }
    }
    function Ds(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = E.T,
          o = {};
        ((o.types = a === null ? null : a.types), (E.T = o));
        try {
          var s = n(i, r),
            c = E.S;
          (c !== null && c(o, s), Os(e, t, s));
        } catch (n) {
          As(e, t, n);
        } finally {
          (a !== null && o.types !== null && (a.types = o.types), (E.T = a));
        }
      } else
        try {
          ((a = n(i, r)), Os(e, t, a));
        } catch (n) {
          As(e, t, n);
        }
    }
    function Os(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              ks(e, t, n);
            },
            function (n) {
              return As(e, t, n);
            },
          )
        : ks(e, t, n);
    }
    function ks(e, t, n) {
      ((t.status = `fulfilled`),
        (t.value = n),
        js(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next),
          n === t
            ? (e.pending = null)
            : ((n = n.next), (t.next = n), Ds(e, n))));
    }
    function As(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do ((t.status = `rejected`), (t.reason = n), js(t), (t = t.next));
        while (t !== r);
      }
      e.action = null;
    }
    function js(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Ms(e, t) {
      return t;
    }
    function Ns(e, t) {
      if (N) {
        var n = G.formState;
        if (n !== null) {
          a: {
            var r = I;
            if (N) {
              if (M) {
                b: {
                  for (var i = M, a = pa; i.nodeType !== 8; )
                    if (!a || ((i = lm(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  ((a = i.data), (i = a === `F!` || a === `F` ? i : null));
                }
                if (i) {
                  ((M = lm(i.nextSibling)), (r = i.data === `F!`));
                  break a;
                }
              }
              ha(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = ls()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ms,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = dc.bind(null, I, r)),
        (r.dispatch = n),
        (r = ws(!1)),
        (a = pc.bind(null, I, !1, r.queue)),
        (r = ls()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = Es.bind(null, I, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function Ps(e) {
      return Fs(B(), L, e);
    }
    function Fs(e, t, n) {
      if (
        ((t = gs(e, t, Ms)[0]),
        (e = hs(ms)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = ds(t);
        } catch (e) {
          throw e === to ? ro : e;
        }
      else r = t;
      t = B();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((I.flags |= 2048),
          Rs(9, { destroy: void 0 }, Is.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function Is(e, t) {
      e.action = t;
    }
    function Ls(e) {
      var t = B(),
        n = L;
      if (n !== null) return Fs(t, n, e);
      (B(), (t = t.memoizedState), (n = B()));
      var r = n.queue.dispatch;
      return ((n.memoizedState = e), [t, r, !1]);
    }
    function Rs(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = I.updateQueue),
        t === null && ((t = us()), (I.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function zs() {
      return B().memoizedState;
    }
    function Bs(e, t, n, r) {
      var i = ls();
      ((I.flags |= e),
        (i.memoizedState = Rs(
          1 | t,
          { destroy: void 0 },
          n,
          r === void 0 ? null : r,
        )));
    }
    function Vs(e, t, n, r) {
      var i = B();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      L !== null && r !== null && ts(r, L.memoizedState.deps)
        ? (i.memoizedState = Rs(t, a, n, r))
        : ((I.flags |= e), (i.memoizedState = Rs(1 | t, a, n, r)));
    }
    function Hs(e, t) {
      Bs(8390656, 8, e, t);
    }
    function Us(e, t) {
      Vs(2048, 8, e, t);
    }
    function Ws(e) {
      I.flags |= 4;
      var t = I.updateQueue;
      if (t === null) ((t = us()), (I.updateQueue = t), (t.events = [e]));
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }
    function Gs(e) {
      var t = B().memoizedState;
      return (
        Ws({ ref: t, nextImpl: e }),
        function () {
          if (W & 2) throw Error(i(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function Ks(e, t) {
      return Vs(4, 2, e, t);
    }
    function qs(e, t) {
      return Vs(4, 4, e, t);
    }
    function Js(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () {
          typeof n == `function` ? n() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function Ys(e, t, n) {
      ((n = n == null ? null : n.concat([e])),
        Vs(4, 4, Js.bind(null, t, e), n));
    }
    function Xs() {}
    function Zs(e, t) {
      var n = B();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && ts(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function Qs(e, t) {
      var n = B();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && ts(t, r[1])) return r[0];
      if (((r = e()), Xo)) {
        st(!0);
        try {
          e();
        } finally {
          st(!1);
        }
      }
      return ((n.memoizedState = [r, t]), r);
    }
    function $s(e, t, n) {
      return n === void 0 || (qo & 1073741824 && !(q & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = Md()), (I.lanes |= e), (sd |= e), n);
    }
    function ec(e, t, n, r) {
      return Xr(n, t)
        ? n
        : Mo.current === null
          ? !(qo & 106) || (qo & 1073741824 && !(q & 261930))
            ? ((Ic = !0), (e.memoizedState = n))
            : ((e = Md()), (I.lanes |= e), (sd |= e), t)
          : ((e = $s(e, n, r)), Xr(e, t) || (Ic = !0), e);
    }
    function tc(e, t, n, r, i) {
      var a = D.p;
      D.p = a !== 0 && 8 > a ? a : 8;
      var o = E.T,
        s = {};
      ((s.types = o === null ? null : o.types), (E.T = s), pc(e, !1, t, n));
      try {
        var c = i(),
          l = E.S;
        (l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? fc(e, t, Ya(c, r), jd(e))
            : fc(e, t, r, jd(e)));
      } catch (n) {
        fc(e, t, { then: function () {}, status: `rejected`, reason: n }, jd());
      } finally {
        ((D.p = a),
          o !== null && s.types !== null && (o.types = s.types),
          (E.T = o));
      }
    }
    function nc() {}
    function rc(e, t, n, r) {
      if (e.tag !== 5) throw Error(i(476));
      var a = ic(e).queue;
      tc(
        e,
        a,
        t,
        Te,
        n === null
          ? nc
          : function () {
              return (ac(e), n(r));
            },
      );
    }
    function ic(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: Te,
        baseState: Te,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ms,
          lastRenderedState: Te,
        },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ms,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function ac(e) {
      var t = ic(e);
      (t.next === null && (t = e.alternate.memoizedState),
        fc(e, t.next.queue, {}, jd()));
    }
    function oc() {
      return Ma(sh);
    }
    function sc() {
      return B().memoizedState;
    }
    function cc() {
      return B().memoizedState;
    }
    function lc(e) {
      for (var t = e.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = jd();
            e = Co(n);
            var r = wo(t, e, n);
            (r !== null && (Pd(r, t, n), To(r, t, n)),
              (t = { cache: Ra() }),
              (e.payload = t));
            return;
        }
        t = t.return;
      }
    }
    function uc(e, t, n) {
      var r = jd();
      ((n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        mc(e)
          ? hc(t, n)
          : ((n = Pi(e, t, n, r)), n !== null && (Pd(n, e, r), gc(n, t, r))));
    }
    function dc(e, t, n) {
      fc(e, t, n, jd());
    }
    function fc(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (mc(e)) hc(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), Xr(s, o)))
              return (Ni(e, t, i, 0), G === null && Mi(), !1);
          } catch {}
        if (((n = Pi(e, t, i, r)), n !== null))
          return (Pd(n, e, r), gc(n, t, r), !0);
      }
      return !1;
    }
    function pc(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: Pf(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        mc(e))
      ) {
        if (t) throw Error(i(479));
      } else ((t = Pi(e, n, r, 2)), t !== null && Pd(t, e, 2));
    }
    function mc(e) {
      var t = e.alternate;
      return e === I || (t !== null && t === I);
    }
    function hc(e, t) {
      Yo = Jo = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t));
    }
    function gc(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Tt(e, n));
      }
    }
    var _c = {
        readContext: Ma,
        use: fs,
        useCallback: z,
        useContext: z,
        useEffect: z,
        useImperativeHandle: z,
        useLayoutEffect: z,
        useInsertionEffect: z,
        useMemo: z,
        useReducer: z,
        useRef: z,
        useState: z,
        useDebugValue: z,
        useDeferredValue: z,
        useTransition: z,
        useSyncExternalStore: z,
        useId: z,
        useHostTransitionStatus: z,
        useFormState: z,
        useActionState: z,
        useOptimistic: z,
        useMemoCache: z,
        useCacheRefresh: z,
        useEffectEvent: z,
      },
      vc = {
        readContext: Ma,
        use: fs,
        useCallback: function (e, t) {
          return ((ls().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: Ma,
        useEffect: Hs,
        useImperativeHandle: function (e, t, n) {
          ((n = n == null ? null : n.concat([e])),
            Bs(4194308, 4, Js.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return Bs(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          Bs(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = ls();
          t = t === void 0 ? null : t;
          var r = e();
          if (Xo) {
            st(!0);
            try {
              e();
            } finally {
              st(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        },
        useReducer: function (e, t, n) {
          var r = ls();
          if (n !== void 0) {
            var i = n(t);
            if (Xo) {
              st(!0);
              try {
                n(t);
              } finally {
                st(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = uc.bind(null, I, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = ls();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: function (e) {
          e = ws(e);
          var t = e.queue,
            n = dc.bind(null, I, t);
          return ((t.dispatch = n), [e.memoizedState, n]);
        },
        useDebugValue: Xs,
        useDeferredValue: function (e, t) {
          return $s(ls(), e, t);
        },
        useTransition: function () {
          var e = ws(!1);
          return (
            (e = tc.bind(null, I, e.queue, !0, !1)),
            (ls().memoizedState = e),
            [!1, e]
          );
        },
        useSyncExternalStore: function (e, t, n) {
          var r = I,
            a = ls();
          if (N) {
            if (n === void 0) throw Error(i(407));
            n = n();
          } else {
            if (((n = t()), G === null)) throw Error(i(349));
            q & 127 || ys(r, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            Hs(xs.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            Rs(9, { destroy: void 0 }, bs.bind(null, r, o, n, t), null),
            n
          );
        },
        useId: function () {
          var e = ls(),
            t = G.identifierPrefix;
          if (N) {
            var n = aa,
              r = ia;
            ((n = (r & ~(1 << (32 - ct(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = Zo++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`));
          } else ((n = es++), (t = `_` + t + `r_` + n.toString(32) + `_`));
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: oc,
        useFormState: Ns,
        useActionState: Ns,
        useOptimistic: function (e) {
          var t = ls();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (t.queue = n),
            (t = pc.bind(null, I, !0, n)),
            (n.dispatch = t),
            [e, t]
          );
        },
        useMemoCache: ps,
        useCacheRefresh: function () {
          return (ls().memoizedState = lc.bind(null, I));
        },
        useEffectEvent: function (e) {
          var t = ls(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (W & 2) throw Error(i(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      yc = {
        readContext: Ma,
        use: fs,
        useCallback: Zs,
        useContext: Ma,
        useEffect: Us,
        useImperativeHandle: Ys,
        useInsertionEffect: Ks,
        useLayoutEffect: qs,
        useMemo: Qs,
        useReducer: hs,
        useRef: zs,
        useState: function () {
          return hs(ms);
        },
        useDebugValue: Xs,
        useDeferredValue: function (e, t) {
          return ec(B(), L.memoizedState, e, t);
        },
        useTransition: function () {
          var e = hs(ms)[0],
            t = B().memoizedState;
          return [typeof e == `boolean` ? e : ds(e), t];
        },
        useSyncExternalStore: vs,
        useId: sc,
        useHostTransitionStatus: oc,
        useFormState: Ps,
        useActionState: Ps,
        useOptimistic: function (e, t) {
          return Ts(B(), L, e, t);
        },
        useMemoCache: ps,
        useCacheRefresh: cc,
        useEffectEvent: Gs,
      },
      bc = {
        readContext: Ma,
        use: fs,
        useCallback: Zs,
        useContext: Ma,
        useEffect: Us,
        useImperativeHandle: Ys,
        useInsertionEffect: Ks,
        useLayoutEffect: qs,
        useMemo: Qs,
        useReducer: _s,
        useRef: zs,
        useState: function () {
          return _s(ms);
        },
        useDebugValue: Xs,
        useDeferredValue: function (e, t) {
          var n = B();
          return L === null ? $s(n, e, t) : ec(n, L.memoizedState, e, t);
        },
        useTransition: function () {
          var e = _s(ms)[0],
            t = B().memoizedState;
          return [typeof e == `boolean` ? e : ds(e), t];
        },
        useSyncExternalStore: vs,
        useId: sc,
        useHostTransitionStatus: oc,
        useFormState: Ls,
        useActionState: Ls,
        useOptimistic: function (e, t) {
          var n = B();
          return L === null
            ? ((n.baseState = e), [e, n.queue.dispatch])
            : Ts(n, L, e, t);
        },
        useMemoCache: ps,
        useCacheRefresh: cc,
        useEffectEvent: Gs,
      };
    function xc(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : w({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var Sc = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = jd(),
          i = Co(r);
        ((i.payload = t),
          n != null && (i.callback = n),
          (t = wo(e, i, r)),
          t !== null && (Pd(t, e, r), To(t, e, r)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = jd(),
          i = Co(r);
        ((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = wo(e, i, r)),
          t !== null && (Pd(t, e, r), To(t, e, r)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = jd(),
          r = Co(n);
        ((r.tag = 2),
          t != null && (r.callback = t),
          (t = wo(e, r, n)),
          t !== null && (Pd(t, e, n), To(t, e, n)));
      },
    };
    function Cc(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !Zr(n, r) || !Zr(i, a)
            : !0
      );
    }
    function wc(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Sc.enqueueReplaceState(t, t.state, null));
    }
    function Tc(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = w({}, n)), e))
          n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    function Ec(e) {
      ki(e);
    }
    function Dc(e) {
      console.error(e);
    }
    function Oc(e) {
      ki(e);
    }
    function kc(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Ac(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, {
          componentStack: n.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null,
        });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function jc(e, t, n) {
      return (
        (n = Co(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          kc(e, t);
        }),
        n
      );
    }
    function Mc(e) {
      return ((e = Co(e)), (e.tag = 3), e);
    }
    function Nc(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        ((e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            Ac(t, n, r);
          }));
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          (Ac(t, n, r),
            typeof i != `function` &&
              (yd === null ? (yd = new Set([this])) : yd.add(this)));
          var e = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: e === null ? `` : e,
          });
        });
    }
    function Pc(e, t, n, r, a) {
      if (
        ((n.flags |= 32768),
        typeof r == `object` && r && typeof r.then == `function`)
      ) {
        if (
          ((t = n.alternate),
          t !== null && ka(t, n, a, !0),
          (n = Lo.current),
          n !== null)
        ) {
          switch (n.tag) {
            case 31:
            case 13:
            case 19:
              return (
                Ro === null ? Kd() : n.alternate === null && Y === 0 && (Y = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = a),
                r === io
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    mf(e, r, a)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === io
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue),
                        n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    mf(e, r, a)),
                !1
              );
          }
          throw Error(i(435, n.tag));
        }
        return (mf(e, r, a), Kd(), !1);
      }
      if (N)
        return (
          (t = Lo.current),
          t === null
            ? (r !== ma && ((t = Error(i(423), { cause: r })), xa(Xi(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (r = Xi(r, n)),
              (a = jc(e.stateNode, r, a)),
              Eo(e, a),
              Y !== 4 && (Y = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = a),
              r !== ma && ((e = Error(i(422), { cause: r })), xa(Xi(e, n)))),
          !1
        );
      var o = Error(i(520), { cause: r });
      if (
        ((o = Xi(o, n)),
        fd === null ? (fd = [o]) : fd.push(o),
        Y !== 4 && (Y = 2),
        t === null)
      )
        return !0;
      ((r = Xi(r, n)), (n = t));
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = a & -a),
              (n.lanes |= e),
              (e = jc(n.stateNode, r, e)),
              Eo(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null &&
                    typeof o.componentDidCatch == `function` &&
                    (yd === null || !yd.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (a &= -a),
                (n.lanes |= a),
                (a = Mc(a)),
                Nc(a, e, n, r),
                Eo(n, a),
                !1
              );
            break;
          case 22:
            if (n.memoizedState !== null) return ((n.flags |= 65536), !1);
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var Fc = Error(i(461)),
      Ic = !1;
    function Lc(e, t, n, r) {
      t.child = e === null ? yo(t, null, n, r) : vo(t, e.child, n, r);
    }
    function Rc(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        ja(t),
        (r = ns(e, t, n, o, a, i)),
        (s = os()),
        e !== null && !Ic
          ? (ss(e, t, i), fl(e, t, i))
          : (N && s && ca(t), (t.flags |= 1), Lc(e, t, r, i), t.child)
      );
    }
    function zc(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` &&
          !Vi(a) &&
          a.defaultProps === void 0 &&
          n.compare === null
          ? ((t.tag = 15), (t.type = a), Bc(e, t, a, r, i))
          : ((e = Wi(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !pl(e, i))) {
        var o = a.memoizedProps;
        if (
          ((n = n.compare),
          (n = n === null ? Zr : n),
          n(o, r) && e.ref === t.ref)
        )
          return fl(e, t, i);
      }
      return (
        (t.flags |= 1),
        (e = Hi(a, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function Bc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (Zr(a, r) && e.ref === t.ref) {
          if (((Ic = !1), (t.pendingProps = r = a), pl(e, i)))
            e.flags & 131072 && (Ic = !0);
          else return ((t.lanes = e.lanes), fl(e, t, i));
        }
      }
      return Jc(e, t, n, r, i);
    }
    function Vc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null; )
              ((i = i | r.lanes | r.childLanes), (r = r.sibling));
            r = i & ~a;
          } else ((r = 0), (t.child = null));
          return Uc(e, t, a, n, r);
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && $a(t, a === null ? null : a.cachePool),
            a === null ? Fo() : Po(t, a),
            Vo(t));
        else
          return (
            (r = t.lanes = 536870912),
            Uc(e, t, a === null ? n : a.baseLanes | n, n, r)
          );
      } else
        a === null
          ? (e !== null && $a(t, null), Fo(), Ho())
          : ($a(t, a.cachePool), Po(t, a), Ho(), (t.memoizedState = null));
      return (Lc(e, t, i, n), t.child);
    }
    function Hc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }
    function Uc(e, t, n, r, i) {
      var a = Qa();
      return (
        (a = a === null ? null : { parent: P._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && $a(t, null),
        Fo(),
        Vo(t),
        e !== null && ka(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function Wc(e, t) {
      return (
        (t = rl({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function Gc(e, t, n) {
      return (
        vo(t, e.child, null, n),
        (e = Wc(t, t.pendingProps)),
        (e.flags |= 2),
        F(t),
        (t.memoizedState = null),
        e
      );
    }
    function Kc(e, t, n) {
      var r = t.pendingProps,
        a = !!(t.flags & 128);
      if (((t.flags &= -129), e === null)) {
        if (N) {
          if (r.mode === `hidden`)
            return (
              (e = Wc(t, r)),
              (t.lanes = 536870912),
              (e.memoizedState = { baseLanes: 0, cachePool: null }),
              Hc(null, e)
            );
          if (
            (Bo(t),
            (e = M)
              ? ((e = am(e, pa)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: ra === null ? null : { id: ia, overflow: aa },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = qi(e)),
                  (n.return = t),
                  (t.child = n),
                  (da = t),
                  (M = null)))
              : (e = null),
            e === null)
          )
            throw ha(t);
          return ((t.lanes = 536870912), null);
        }
        return Wc(t, r);
      }
      var o = e.memoizedState;
      if (o !== null) {
        var s = o.dehydrated;
        if ((Bo(t), a)) {
          if (t.flags & 256) ((t.flags &= -257), (t = Gc(e, t, n)));
          else if (t.memoizedState !== null)
            ((t.child = e.child), (t.flags |= 128), (t = null));
          else throw Error(i(558));
        } else if (
          (Ic || ka(e, t, n, !1), (a = (n & e.childLanes) !== 0), Ic || a)
        ) {
          if (Mo.current === null) {
            if (
              ((r = G),
              r !== null && ((s = Et(r, n)), s !== 0 && s !== o.retryLane))
            )
              throw ((o.retryLane = s), Fi(e, s), Pd(r, e, s), Fc);
            Kd();
          }
          t = Gc(e, t, n);
        } else
          ((e = o.treeContext),
            (M = lm(s.nextSibling)),
            (da = t),
            (N = !0),
            (fa = null),
            (pa = !1),
            e !== null && ua(t, e),
            (t = Wc(t, r)),
            (t.flags |= 134221824));
        return t;
      }
      return (
        (e = Hi(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function qc(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(i(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function Jc(e, t, n, r, i) {
      return (
        ja(t),
        (n = ns(e, t, n, r, void 0, i)),
        (r = os()),
        e !== null && !Ic
          ? (ss(e, t, i), fl(e, t, i))
          : (N && r && ca(t), (t.flags |= 1), Lc(e, t, n, i), t.child)
      );
    }
    function Yc(e, t, n, r, i, a) {
      return (
        ja(t),
        (t.updateQueue = null),
        (n = is(t, r, n, i)),
        rs(e),
        (r = os()),
        e !== null && !Ic
          ? (ss(e, t, a), fl(e, t, a))
          : (N && r && ca(t), (t.flags |= 1), Lc(e, t, n, a), t.child)
      );
    }
    function Xc(e, t, n, r, i) {
      if ((ja(t), t.stateNode === null)) {
        var a = Ri,
          o = n.contextType;
        (typeof o == `object` && o && (a = Ma(o)),
          (a = new n(r, a)),
          (t.memoizedState =
            a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Sc),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          xo(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? Ma(o) : Ri),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` &&
            (xc(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` &&
              a.UNSAFE_componentWillMount(),
            o !== a.state && Sc.enqueueReplaceState(a, a.state, null),
            ko(t, r, a, i),
            Oo(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0));
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = Tc(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        ((o = Ri), typeof u == `object` && u && (o = Ma(u)));
        var d = n.getDerivedStateFromProps;
        ((u =
          typeof d == `function` ||
          typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && wc(t, a, r, o)),
          (bo = !1));
        var f = t.memoizedState;
        ((a.state = f),
          ko(t, r, a, i),
          Oo(),
          (l = t.memoizedState),
          s || f !== l || bo
            ? (typeof d == `function` &&
                (xc(t, n, d, r), (l = t.memoizedState)),
              (c = bo || Cc(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` &&
                      a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
              (r = !1)));
      } else {
        ((a = t.stateNode),
          So(e, t),
          (o = t.memoizedProps),
          (u = Tc(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = Ri),
          typeof l == `object` && l && (c = Ma(l)),
          (s = n.getDerivedStateFromProps),
          (l =
            typeof s == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && wc(t, a, r, c)),
          (bo = !1),
          (f = t.memoizedState),
          (a.state = f),
          ko(t, r, a, i),
          Oo());
        var p = t.memoizedState;
        o !== d ||
        f !== p ||
        bo ||
        (e !== null && e.dependencies !== null && Aa(e.dependencies))
          ? (typeof s == `function` && (xc(t, n, s, r), (p = t.memoizedState)),
            (u =
              bo ||
              Cc(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && Aa(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` &&
                    a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` &&
                  (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        qc(e, t),
        (r = !!(t.flags & 128)),
        a || r
          ? ((a = t.stateNode),
            (n =
              r && typeof n.getDerivedStateFromError != `function`
                ? null
                : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = vo(t, e.child, null, i)),
                (t.child = vo(t, null, n, i)))
              : Lc(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = fl(e, t, i)),
        e
      );
    }
    function Zc(e, t, n, r) {
      return (ya(), (t.flags |= 256), Lc(e, t, n, r), t.child);
    }
    var Qc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function $c(e) {
      return { baseLanes: e, cachePool: eo() };
    }
    function el(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= ud), e);
    }
    function tl(e, t, n) {
      var r = t.pendingProps,
        i = !1,
        a = !!(t.flags & 128),
        o;
      if (
        ((o = a) ||
          (o =
            e !== null && e.memoizedState === null ? !1 : !!(Uo.current & 2)),
        o && ((i = !0), (t.flags &= -129)),
        (o = !!(t.flags & 32)),
        (t.flags &= -33),
        e === null)
      ) {
        if (N) {
          if (
            (i ? zo(t) : Ho(),
            (e = M)
              ? ((e = am(e, pa)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: ra === null ? null : { id: ia, overflow: aa },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = qi(e)),
                  (n.return = t),
                  (t.child = n),
                  (da = t),
                  (M = null)))
              : (e = null),
            e === null)
          )
            throw ha(t);
          return ((t.lanes = sm(e) ? 32 : 536870912), null);
        }
        return (
          (a = r.children),
          (r = r.fallback),
          i
            ? (Ho(),
              (i = t.mode),
              (a = rl({ mode: `hidden`, children: a }, i)),
              (r = Gi(r, i, n, null)),
              (a.return = t),
              (r.return = t),
              (a.sibling = r),
              (t.child = a),
              (r = t.child),
              (r.memoizedState = $c(n)),
              (r.childLanes = el(e, o, n)),
              (t.memoizedState = Qc),
              Hc(null, r))
            : (zo(t), nl(t, a))
        );
      }
      var s = e.memoizedState;
      if (s !== null) {
        var c = s.dehydrated;
        if (c !== null) return al(e, t, a, o, r, c, s, n);
      }
      return i
        ? (Ho(),
          (i = r.fallback),
          (a = t.mode),
          (s = e.child),
          (c = s.sibling),
          (r = Hi(s, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = s.subtreeFlags & 1206910976),
          c === null
            ? ((i = Gi(i, a, n, null)), (i.flags |= 2))
            : (i = Hi(c, i)),
          (i.return = t),
          (r.return = t),
          (r.sibling = i),
          (t.child = r),
          Hc(null, r),
          (r = t.child),
          (i = e.child.memoizedState),
          i === null
            ? (i = $c(n))
            : ((a = i.cachePool),
              a === null
                ? (a = eo())
                : ((s = P._currentValue),
                  (a = a.parent === s ? a : { parent: s, pool: s })),
              (i = { baseLanes: i.baseLanes | n, cachePool: a })),
          (r.memoizedState = i),
          (r.childLanes = el(e, o, n)),
          (t.memoizedState = Qc),
          Hc(e.child, r))
        : (zo(t),
          (n = e.child),
          (e = n.sibling),
          (n = Hi(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((o = t.deletions),
            o === null ? ((t.deletions = [e]), (t.flags |= 16)) : o.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function nl(e, t) {
      return (
        (t = rl({ mode: `visible`, children: t }, e.mode)),
        (t.return = e),
        (e.child = t)
      );
    }
    function rl(e, t) {
      return ((e = Bi(22, e, null, t)), (e.lanes = 0), e);
    }
    function il(e, t, n) {
      return (
        vo(t, e.child, null, n),
        (e = nl(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function al(e, t, n, r, a, o, s, c) {
      if (n)
        return t.flags & 256
          ? (zo(t), (t.flags &= -257), il(e, t, c))
          : t.memoizedState === null
            ? (Ho(),
              (o = a.fallback),
              (s = t.mode),
              (a = rl({ mode: `visible`, children: a.children }, s)),
              (o = Gi(o, s, c, null)),
              (o.flags |= 2),
              (a.return = t),
              (o.return = t),
              (a.sibling = o),
              (t.child = a),
              vo(t, e.child, null, c),
              (a = t.child),
              (a.memoizedState = $c(c)),
              (a.childLanes = el(e, r, c)),
              (t.memoizedState = Qc),
              Hc(null, a))
            : (Ho(), (t.child = e.child), (t.flags |= 128), null);
      if ((zo(t), sm(o))) {
        if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
        return (
          (r = l),
          r !== `` &&
            ((a = Error(i(419))),
            (a.stack = ``),
            (a.digest = r),
            xa({ value: a, source: null, stack: null })),
          il(e, t, c)
        );
      }
      if ((Ic || ka(e, t, c, !1), (r = (c & e.childLanes) !== 0), Ic || r)) {
        if (Mo.current !== null) return il(e, t, c);
        if (
          ((r = G),
          r !== null && ((a = Et(r, c)), a !== 0 && a !== s.retryLane))
        )
          throw ((s.retryLane = a), Fi(e, a), Pd(r, e, a), Fc);
        return (om(o) || Kd(), il(e, t, c));
      }
      return om(o)
        ? ((t.flags |= 192), (t.child = e.child), null)
        : ((e = s.treeContext),
          (M = lm(o.nextSibling)),
          (da = t),
          (N = !0),
          (fa = null),
          (pa = !1),
          e !== null && ua(t, e),
          (t = nl(t, a.children)),
          (t.flags |= 134221824),
          t);
    }
    function ol(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), Da(e.return, t, n));
    }
    function sl(e) {
      for (var t = null; e !== null; ) {
        var n = e.alternate;
        (n !== null && Ko(n) === null && (t = e), (e = e.sibling));
      }
      return t;
    }
    function cl(e, t, n, r, i, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a));
    }
    function ll(e) {
      var t = e.child;
      for (e.child = null; t !== null; ) {
        var n = t.sibling;
        ((t.sibling = e.child), (e.child = t), (t = n));
      }
    }
    function ul(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = Uo.current;
      if (t.flags & 128) return (Wo(t, o), null);
      var s = !!(o & 2);
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        Wo(t, o),
        i === `backwards` && e !== null
          ? (ll(e), Lc(e, t, r, n), ll(e))
          : Lc(e, t, r, n),
        (r = N ? ea : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && ol(e, n, t);
          else if (e.tag === 19) ol(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break a;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break a;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      switch (i) {
        case `backwards`:
          ((n = sl(t.child)),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null), ll(t)),
            cl(t, !0, i, null, a, r));
          break;
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && Ko(e) === null)) {
              t.child = i;
              break;
            }
            ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
          }
          cl(t, !0, n, null, a, r);
          break;
        case `together`:
          cl(t, !1, null, null, void 0, r);
          break;
        case `independent`:
          t.memoizedState = null;
          break;
        default:
          ((n = sl(t.child)),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            cl(t, !1, i, n, a, r));
      }
      return t.child;
    }
    function dl(e, t, n) {
      var r = t.pendingProps;
      return (Ta(t, t.type, r.value), Lc(e, t, r.children, n), t.child);
    }
    function fl(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (sd |= t.lanes),
        (n & t.childLanes) === 0)
      ) {
        if (e !== null) {
          if ((ka(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      }
      if (e !== null && t.child !== e.child) throw Error(i(153));
      if (t.child !== null) {
        for (
          e = t.child, n = Hi(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling),
            (n = n.sibling = Hi(e, e.pendingProps)),
            (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function pl(e, t) {
      return (
        (e.lanes & t) !== 0 || ((e = e.dependencies), !!(e !== null && Aa(e)))
      );
    }
    function ml(e, t, n) {
      switch (t.tag) {
        case 3:
          (Pe(t, t.stateNode.containerInfo),
            Ta(t, P, e.memoizedState.cache),
            ya());
          break;
        case 27:
        case 5:
          Ie(t);
          break;
        case 4:
          Pe(t, t.stateNode.containerInfo);
          break;
        case 10:
          Ta(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), Bo(t), null);
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null) {
            if (r.dehydrated !== null) return (zo(t), (t.flags |= 128), null);
            r = ka(e, t, n, !1);
            var i = t.child.childLanes;
            return r || (n & i) !== 0
              ? tl(e, t, n)
              : (zo(t), (e = fl(e, t, n)), e === null ? null : e.sibling);
          }
          zo(t);
          break;
        case 19:
          if (t.flags & 128) return ul(e, t, n);
          if (
            ((i = !!(e.flags & 128)),
            (r = (n & t.childLanes) !== 0),
            (r ||= (ka(e, t, n, !1), (n & t.childLanes) !== 0)),
            i)
          ) {
            if (r) return ul(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            Wo(t, Uo.current),
            r)
          )
            break;
          return null;
        case 22:
          return ((t.lanes = 0), Vc(e, t, n, t.pendingProps));
        case 24:
          Ta(t, P, e.memoizedState.cache);
      }
      return fl(e, t, n);
    }
    function hl(e, t, n) {
      if (e !== null) {
        if (e.memoizedProps !== t.pendingProps) Ic = !0;
        else {
          if (!pl(e, n) && !(t.flags & 128)) return ((Ic = !1), ml(e, t, n));
          Ic = !!(e.flags & 131072);
        }
      } else ((Ic = !1), N && t.flags & 1048576 && sa(t, ea, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = so(t.elementType)), (t.type = e), typeof e == `function`))
              Vi(e)
                ? ((r = Tc(e, r)), (t.tag = 1), (t = Xc(null, t, e, r, n)))
                : ((t.tag = 0), (t = Jc(null, t, e, r, n)));
            else {
              if (e != null) {
                var a = e.$$typeof;
                if (a === ue) {
                  ((t.tag = 11), (t = Rc(null, t, e, r, n)));
                  break a;
                }
                if (a === pe) {
                  ((t.tag = 14), (t = zc(null, t, e, r, n)));
                  break a;
                }
                if (a === le) {
                  ((t.tag = 10), (t.type = e), (t = dl(null, t, n)));
                  break a;
                }
              }
              throw ((t = Ce(e) || e), Error(i(306, t, ``)));
            }
          }
          return t;
        case 0:
          return Jc(e, t, t.type, t.pendingProps, n);
        case 1:
          return ((r = t.type), (a = Tc(r, t.pendingProps)), Xc(e, t, r, a, n));
        case 3:
          a: {
            if ((Pe(t, t.stateNode.containerInfo), e === null))
              throw Error(i(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            ((a = o.element), So(e, t), ko(t, r, null, n));
            var s = t.memoizedState;
            if (
              ((r = s.cache),
              Ta(t, P, r),
              r !== o.cache && Oa(t, [P], n, !0),
              Oo(),
              (r = s.element),
              o.isDehydrated)
            ) {
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = Zc(e, t, r, n);
                break a;
              }
              if (r !== a) {
                ((a = Xi(Error(i(424)), t)), xa(a), (t = Zc(e, t, r, n)));
                break a;
              }
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
              }
              for (
                M = lm(e.firstChild),
                  da = t,
                  N = !0,
                  fa = null,
                  pa = !0,
                  n = yo(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 134221824), (n = n.sibling));
            } else {
              if ((ya(), r === a)) {
                t = fl(e, t, n);
                break a;
              }
              Lc(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            qc(e, t),
            e === null
              ? (n = Nm(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : N || (t.stateNode = fp(t.type, t.pendingProps, Me.current, t))
              : (t.memoizedState = Nm(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState,
                )),
            null
          );
        case 27:
          return (
            Ie(t),
            e === null &&
              N &&
              ((r = t.stateNode = hm(t.type, t.pendingProps, Me.current)),
              (da = t),
              (pa = !0),
              (a = M),
              Sp(t.type) ? ((um = a), (M = lm(r.firstChild))) : (M = a)),
            Lc(e, t, t.pendingProps.children, n),
            qc(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              N &&
              ((a = r = M) &&
                ((r = rm(r, t.type, t.pendingProps, pa)),
                r === null
                  ? (a = !1)
                  : ((t.stateNode = r),
                    (da = t),
                    (M = lm(r.firstChild)),
                    (pa = !1),
                    (a = !0))),
              a || ha(t)),
            Ie(t),
            (a = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            pp(a, o) ? (r = null) : s !== null && pp(a, s) && (t.flags |= 32),
            t.memoizedState !== null &&
              ((a = ns(e, t, as, null, null, n)), (sh._currentValue = a)),
            qc(e, t),
            Lc(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              N &&
              ((e = n = M) &&
                ((n = im(n, t.pendingProps, pa)),
                n === null
                  ? (e = !1)
                  : ((t.stateNode = n), (da = t), (M = null), (e = !0))),
              e || ha(t)),
            null
          );
        case 13:
          return tl(e, t, n);
        case 4:
          return (
            Pe(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = vo(t, null, r, n)) : Lc(e, t, r, n),
            t.child
          );
        case 11:
          return Rc(e, t, t.type, t.pendingProps, n);
        case 7:
          return ((r = t.pendingProps), qc(e, t), Lc(e, t, r, n), t.child);
        case 8:
          return (Lc(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (Lc(e, t, t.pendingProps.children, n), t.child);
        case 10:
          return dl(e, t, n);
        case 9:
          return (
            (a = t.type._context),
            (r = t.pendingProps.children),
            ja(t),
            (a = Ma(a)),
            (r = r(a)),
            (t.flags |= 1),
            Lc(e, t, r, n),
            t.child
          );
        case 14:
          return zc(e, t, t.type, t.pendingProps, n);
        case 15:
          return Bc(e, t, t.type, t.pendingProps, n);
        case 19:
          return ul(e, t, n);
        case 31:
          return Kc(e, t, n);
        case 22:
          return Vc(e, t, n, t.pendingProps);
        case 24:
          return (
            ja(t),
            (r = Ma(P)),
            e === null
              ? ((a = Qa()),
                a === null &&
                  ((a = G),
                  (o = Ra()),
                  (a.pooledCache = o),
                  o.refCount++,
                  o !== null && (a.pooledCacheLanes |= n),
                  (a = o)),
                (t.memoizedState = { parent: r, cache: a }),
                xo(t),
                Ta(t, P, a))
              : ((e.lanes & n) !== 0 && (So(e, t), ko(t, null, null, n), Oo()),
                (a = e.memoizedState),
                (o = t.memoizedState),
                a.parent === r
                  ? ((r = o.cache),
                    Ta(t, P, r),
                    r !== a.cache && Oa(t, [P], n, !0))
                  : ((a = { parent: r, cache: r }),
                    (t.memoizedState = a),
                    t.lanes === 0 &&
                      (t.memoizedState = t.updateQueue.baseState = a),
                    Ta(t, P, r))),
            Lc(e, t, t.pendingProps.children, n),
            t.child
          );
        case 30:
          return (
            t.stateNode === null &&
              (t.stateNode = {
                autoName: null,
                paired: null,
                clones: null,
                ref: null,
              }),
            (r = t.pendingProps),
            r.name != null && r.name !== `auto`
              ? (t.flags |= e === null ? 18882560 : 18874368)
              : N && ca(t),
            e !== null && e.memoizedProps.name !== r.name
              ? (t.flags |= 4194816)
              : qc(e, t),
            Lc(e, t, r.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(i(156, t.tag));
    }
    function gl(e) {
      e.flags |= 4;
    }
    function _l(e, t, n, r, i) {
      var a;
      if (
        ((a = !!(e.mode & 32)) &&
          (a =
            n === null
              ? Jm(t, r)
              : Jm(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)),
        a)
      ) {
        if (((e.flags |= 16777216), (i & 335544128) === i)) {
          if (e.stateNode.complete) e.flags |= 8192;
          else if (Ud()) e.flags |= 8192;
          else throw ((co = io), no);
        }
      } else e.flags &= -16777217;
    }
    function vl(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Ym(t))) {
        if (Ud()) e.flags |= 8192;
        else throw ((co = io), no);
      }
    }
    function yl(e, t) {
      (t !== null && (e.flags |= 4),
        e.flags & 16384 &&
          ((t = e.tag === 22 ? 536870912 : bt()), (e.lanes |= t), (dd |= t)));
    }
    function bl(e, t) {
      if (!N)
        switch (e.tailMode) {
          case `visible`:
            break;
          case `collapsed`:
            for (var n = e.tail, r = null; n !== null; )
              (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
            break;
          default:
            for (t = e.tail, n = null; t !== null; )
              (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
        }
    }
    function V(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null; )
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 1206910976),
            (r |= i.flags & 1206910976),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null; )
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function xl(e, t, n) {
      var r = t.pendingProps;
      switch ((la(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (V(t), null);
        case 1:
          return (V(t), null);
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            Ea(P),
            Fe(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (va(t)
                ? gl(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), ba())),
            V(t),
            null
          );
        case 26:
          var a = t.type,
            o = t.memoizedState;
          return (
            e === null
              ? (gl(t),
                o === null ? (V(t), _l(t, a, null, r, n)) : (V(t), vl(t, o)))
              : o
                ? o === e.memoizedState
                  ? (V(t), (t.flags &= -16777217))
                  : (gl(t), V(t), vl(t, o))
                : ((e = e.memoizedProps),
                  e !== r && gl(t),
                  V(t),
                  _l(t, a, e, r, n)),
            null
          );
        case 27:
          if (
            (Le(t),
            (n = Me.current),
            (a = t.type),
            e !== null && t.stateNode != null)
          )
            e.memoizedProps !== r && gl(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (V(t), (t.subtreeFlags &= -33554433), null);
            }
            ((e = Ae.current),
              va(t) ? ga(t, e) : ((e = hm(a, r, n)), (t.stateNode = e), gl(t)));
          }
          return (V(t), (t.subtreeFlags &= -33554433), null);
        case 5:
          if ((Le(t), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && gl(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (V(t), (t.subtreeFlags &= -33554433), null);
            }
            if (((o = Ae.current), va(t))) ga(t, o);
            else {
              var s = lp(Me.current);
              switch (o) {
                case 1:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                  break;
                case 2:
                  o = s.createElementNS(
                    `http://www.w3.org/1998/Math/MathML`,
                    a,
                  );
                  break;
                default:
                  switch (a) {
                    case `svg`:
                      o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                      break;
                    case `math`:
                      o = s.createElementNS(
                        `http://www.w3.org/1998/Math/MathML`,
                        a,
                      );
                      break;
                    case `script`:
                      ((o = s.createElement(`div`)),
                        (o.innerHTML = `<script><\/script>`),
                        (o = o.removeChild(o.firstChild)));
                      break;
                    case `select`:
                      ((o =
                        typeof r.is == `string`
                          ? s.createElement(`select`, { is: r.is })
                          : s.createElement(`select`)),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size));
                      break;
                    default:
                      o =
                        typeof r.is == `string`
                          ? s.createElement(a, { is: r.is })
                          : s.createElement(a);
                  }
              }
              ((o[Mt] = t), (o[Nt] = r));
              a: for (s = t.child; s !== null; ) {
                if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  ((s.child.return = s), (s = s.child));
                  continue;
                }
                if (s === t) break a;
                for (; s.sibling === null; ) {
                  if (s.return === null || s.return === t) break a;
                  s = s.return;
                }
                ((s.sibling.return = s.return), (s = s.sibling));
              }
              t.stateNode = o;
              a: switch ((np(o, a, r), a)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus;
                  break a;
                case `img`:
                  r = !0;
                  break a;
                default:
                  r = !1;
              }
              r && gl(t);
            }
          }
          return (
            V(t),
            (t.subtreeFlags &= -33554433),
            _l(
              t,
              t.type,
              e === null ? null : e.memoizedProps,
              t.pendingProps,
              n,
            ),
            null
          );
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && gl(t);
          else {
            if (typeof r != `string` && t.stateNode === null)
              throw Error(i(166));
            if (((e = Me.current), va(t))) {
              if (
                ((e = t.stateNode),
                (n = t.memoizedProps),
                (r = null),
                (a = da),
                a !== null)
              )
                switch (a.tag) {
                  case 27:
                  case 5:
                    r = a.memoizedProps;
                }
              ((e[Mt] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  ep(e.nodeValue, n)
                )),
                e || ha(t, !0));
            } else
              ((e = lp(e).createTextNode(r)), (e[Mt] = t), (t.stateNode = e));
          }
          return (V(t), null);
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = va(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(i(318));
                if (
                  ((e = t.memoizedState),
                  (e = e === null ? null : e.dehydrated),
                  !e)
                )
                  throw Error(i(557));
                e[Mt] = t;
              } else
                (ya(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (V(t), (e = !1));
            } else
              ((n = ba()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = n),
                (e = !0));
            if (!e) return t.flags & 256 ? (F(t), t) : (F(t), null);
            if (t.flags & 128) throw Error(i(558));
          }
          return (V(t), null);
        case 13:
          if (
            ((r = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((a = va(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(i(318));
                if (
                  ((a = t.memoizedState),
                  (a = a === null ? null : a.dehydrated),
                  !a)
                )
                  throw Error(i(317));
                a[Mt] = t;
              } else
                (ya(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (V(t), (a = !1));
            } else
              ((a = ba()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = a),
                (a = !0));
            if (!a) return t.flags & 256 ? (F(t), t) : (F(t), null);
          }
          return (
            F(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (a = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (a = r.alternate.memoizedState.cachePool.pool),
                  (o = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (o = r.memoizedState.cachePool.pool),
                  o !== a && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                yl(t, t.updateQueue),
                V(t),
                null)
          );
        case 4:
          return (
            Fe(),
            e === null && Wf(t.stateNode.containerInfo),
            (t.flags |= 67108864),
            V(t),
            null
          );
        case 10:
          return (Ea(t.type), V(t), null);
        case 19:
          if ((Go(t), (r = t.memoizedState), r === null)) return (V(t), null);
          if (((a = !!(t.flags & 128)), (o = r.rendering), o === null)) {
            if (a) bl(r, !1);
            else {
              if (Y !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null; ) {
                  if (((o = Ko(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        bl(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        yl(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      (Ui(n, e), (n = n.sibling));
                    return (
                      Wo(t, (Uo.current & 1) | 2),
                      N && oa(t, r.treeForkCount),
                      t.child
                    );
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                Xe() > _d &&
                ((t.flags |= 128), (a = !0), bl(r, !1), (t.lanes = 4194304));
            }
          } else {
            if (!a) {
              if (((e = Ko(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  yl(t, e),
                  bl(r, !0),
                  r.tail === null &&
                    r.tailMode !== `collapsed` &&
                    r.tailMode !== `visible` &&
                    !o.alternate &&
                    !N)
                )
                  return (V(t), null);
              } else
                2 * Xe() - r.renderingStartTime > _d &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (a = !0), bl(r, !1), (t.lanes = 4194304));
            }
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last),
                e === null ? (t.child = o) : (e.sibling = o),
                (r.last = o));
          }
          if (r.tail !== null) {
            e = r.tail;
            a: {
              for (n = e; n !== null; ) {
                if (n.alternate !== null) {
                  n = !1;
                  break a;
                }
                n = n.sibling;
              }
              n = !0;
            }
            return (
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = Xe()),
              (e.sibling = null),
              (o = Uo.current),
              (o = a ? (o & 1) | 2 : o & 1),
              r.tailMode === `visible` || r.tailMode === `collapsed` || !n || N
                ? Wo(t, o)
                : ((n = o), O(Lo, t), O(Uo, n), Ro === null && (Ro = t)),
              N && oa(t, r.treeForkCount),
              e
            );
          }
          return (V(t), null);
        case 22:
        case 23:
          return (
            F(t),
            Io(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 &&
                !(t.flags & 128) &&
                (V(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : V(t),
            (n = t.updateQueue),
            n !== null && yl(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && ke(Za),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            Ea(P),
            V(t),
            null
          );
        case 25:
          return null;
        case 30:
          return ((t.flags |= 33554432), V(t), null);
      }
      throw Error(i(156, t.tag));
    }
    function Sl(e, t) {
      switch ((la(t), t.tag)) {
        case 1:
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            Ea(P),
            Fe(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return (Le(t), null);
        case 31:
          if (t.memoizedState !== null) {
            if ((F(t), t.alternate === null)) throw Error(i(340));
            ya();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 13:
          if (
            (F(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(i(340));
            ya();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return (
            Go(t),
            (e = t.flags),
            e & 65536
              ? ((t.flags = (e & -65537) | 128),
                (e = t.memoizedState),
                e !== null && ((e.rendering = null), (e.tail = null)),
                (t.flags |= 4),
                t)
              : null
          );
        case 4:
          return (Fe(), null);
        case 10:
          return (Ea(t.type), null);
        case 22:
        case 23:
          return (
            F(t),
            Io(),
            e !== null && ke(Za),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return (Ea(P), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Cl(e, t) {
      switch ((la(t), t.tag)) {
        case 3:
          (Ea(P), Fe());
          break;
        case 26:
        case 27:
        case 5:
          Le(t);
          break;
        case 4:
          Fe();
          break;
        case 31:
          t.memoizedState !== null && F(t);
          break;
        case 13:
          F(t);
          break;
        case 19:
          Go(t);
          break;
        case 10:
          Ea(t.type);
          break;
        case 22:
        case 23:
          (F(t), Io(), e !== null && ke(Za));
          break;
        case 24:
          Ea(P);
      }
    }
    function wl(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create,
                o = n.inst;
              ((r = a()), (o.destroy = r));
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Tl(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== void 0) {
                ((o.destroy = void 0), (i = t));
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  Z(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function El(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          jo(t, n);
        } catch (t) {
          Z(e, e.return, t);
        }
      }
    }
    function Dl(e, t, n) {
      ((n.props = Tc(e.type, e.memoizedProps)), (n.state = e.memoizedState));
      try {
        n.componentWillUnmount();
      } catch (n) {
        Z(e, t, n);
      }
    }
    function Ol(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              var i = e.stateNode,
                a = Ei(e.memoizedProps, i);
              ((i.ref === null || i.ref.name !== a) && (i.ref = Pp(a)),
                (r = i.ref));
              break;
            case 7:
              if (e.stateNode === null) {
                var o = new Fp(e);
                (m(e.child, !1, Qp, o, void 0, void 0), (e.stateNode = o));
              }
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        Z(e, t, n);
      }
    }
    function kl(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null) {
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            Z(e, t, n);
          } finally {
            ((e.refCleanup = null),
              (e = e.alternate),
              e != null && (e.refCleanup = null));
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            Z(e, t, n);
          }
        else n.current = null;
      }
    }
    function Al(e, t) {
      if (
        (e.tag === 5 || e.tag === 27 || e.tag === 6) &&
        e.alternate === null &&
        t !== null
      )
        for (var n = 0; n < t.length; n++) em(e.stateNode, t[n]);
    }
    function jl(e) {
      for (
        var t = e.return;
        t !== null && (Pl(t) && em(e.stateNode, t.stateNode), !Nl(t));
      )
        t = t.return;
    }
    function Ml(e) {
      for (
        var t = e.return;
        t !== null && (Pl(t) && tm(e.stateNode, t.stateNode), !Nl(t));
      )
        t = t.return;
    }
    function Nl(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 27;
    }
    function Pl(e) {
      return e && e.tag === 7 && e.stateNode !== null;
    }
    function Fl(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break a;
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Il(e, t, n) {
      try {
        var r = e.stateNode;
        (ip(r, e.type, n, t), (r[Nt] = t));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Ll(e) {
      return (
        e.tag === 5 ||
        e.tag === 3 ||
        e.tag === 26 ||
        (e.tag === 27 && Sp(e.type)) ||
        e.tag === 4
      );
    }
    function Rl(e) {
      a: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || Ll(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if (
            (e.tag === 27 && Sp(e.type)) ||
            e.flags & 2 ||
            e.child === null ||
            e.tag === 4
          )
            continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function zl(e, t, n, r) {
      var i = e.tag;
      if (i === 5 || i === 6)
        ((i = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(i, t)
            : ((t =
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === `HTML`
                    ? n.ownerDocument.body
                    : n),
              t.appendChild(i),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = On)),
          Al(e, r),
          (k = !0));
      else if (
        i !== 4 &&
        (i === 27 &&
          (Al(e, r), (r = null), Sp(e.type) && ((n = e.stateNode), (t = null))),
        (e = e.child),
        e !== null)
      )
        for (zl(e, t, n, r), e = e.sibling; e !== null; )
          (zl(e, t, n, r), (e = e.sibling));
    }
    function Bl(e, t, n, r) {
      var i = e.tag;
      if (i === 5 || i === 6)
        ((i = e.stateNode),
          t ? n.insertBefore(i, t) : n.appendChild(i),
          Al(e, r),
          (k = !0));
      else if (
        i !== 4 &&
        (i === 27 && (Al(e, r), (r = null), Sp(e.type) && (n = e.stateNode)),
        (e = e.child),
        e !== null)
      )
        for (Bl(e, t, n, r), e = e.sibling; e !== null; )
          (Bl(e, t, n, r), (e = e.sibling));
    }
    function Vl(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length; )
          t.removeAttributeNode(i[0]);
        (np(t, r, n), (t[Mt] = e), (t[Nt] = n));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    var Hl = !1,
      Ul = null;
    function Wl(e) {
      (e.tag === 30 || e.subtreeFlags & 33554432) && (Hl = !0);
    }
    var Gl = null;
    function Kl() {
      var e = Gl;
      return ((Gl = null), e);
    }
    var ql = 0;
    function Jl(e, t, n, r, i) {
      return ((ql = 0), Yl(e.child, t, n, r, i));
    }
    function Yl(e, t, n, r, i) {
      for (var a = !1; e !== null; ) {
        if (e.tag === 5) {
          var o = e.stateNode;
          if (r !== null) {
            var s = Op(o);
            (r.push(s), s.view && (a = !0));
          } else a || (Op(o).view && (a = !0));
          ((Hl = !0), Tp(o, ql === 0 ? t : t + `_` + ql, n), ql++);
        } else
          (e.tag === 22 && e.memoizedState !== null) ||
            (e.tag === 30 && i) ||
            (Yl(e.child, t, n, r, i) && (a = !0));
        e = e.sibling;
      }
      return a;
    }
    function Xl(e, t) {
      for (; e !== null; )
        (e.tag === 5
          ? Ep(e.stateNode, e.memoizedProps)
          : (e.tag === 22 && e.memoizedState !== null) ||
            (e.tag === 30 && t) ||
            Xl(e.child, t),
          (e = e.sibling));
    }
    function Zl(e) {
      if (e.subtreeFlags & 18874368)
        for (e = e.child; e !== null; ) {
          if (
            (e.tag !== 22 || e.memoizedState === null) &&
            (Zl(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)
          ) {
            var t = e.memoizedProps;
            if (t.name == null || t.name === `auto`) throw Error(i(544));
            var n = t.name;
            ((t = Oi(t.default, t.share)),
              t !== `none` && (Jl(e, n, t, null, !1) || Xl(e.child, !1)));
          }
          e = e.sibling;
        }
    }
    function Ql(e, t) {
      if (e.tag === 30) {
        var n = e.stateNode,
          r = e.memoizedProps,
          i = Ei(r, n),
          a = Oi(r.default, n.paired ? r.share : r.enter);
        a === `none`
          ? Zl(e)
          : Jl(e, i, a, null, !1)
            ? (Zl(e), n.paired || t || Nd(e, r.onEnter))
            : Xl(e.child, !1);
      } else if (e.subtreeFlags & 33554432)
        for (e = e.child; e !== null; ) (Ql(e, t), (e = e.sibling));
      else Zl(e);
    }
    function $l(e) {
      if (Ul !== null && Ul.size !== 0) {
        var t = Ul;
        if (e.subtreeFlags & 18874368)
          for (e = e.child; e !== null; ) {
            if (e.tag !== 22 || e.memoizedState === null) {
              if (e.tag === 30 && e.flags & 18874368) {
                var n = e.memoizedProps,
                  r = n.name;
                if (r != null && r !== `auto`) {
                  var i = t.get(r);
                  if (i !== void 0) {
                    var a = Oi(n.default, n.share);
                    if (
                      (a !== `none` &&
                        (Jl(e, r, a, null, !1)
                          ? ((a = e.stateNode),
                            (i.paired = a),
                            (a.paired = i),
                            Nd(e, n.onShare))
                          : Xl(e.child, !1)),
                      t.delete(r),
                      t.size === 0)
                    )
                      break;
                  }
                }
              }
              $l(e);
            }
            e = e.sibling;
          }
      }
    }
    function eu(e) {
      if (e.tag === 30) {
        var t = e.memoizedProps,
          n = Ei(t, e.stateNode),
          r = Ul === null ? void 0 : Ul.get(n),
          i = Oi(t.default, r === void 0 ? t.exit : t.share);
        (i !== `none` &&
          (Jl(e, n, i, null, !1)
            ? r === void 0
              ? Nd(e, t.onExit)
              : ((i = e.stateNode),
                (r.paired = i),
                (i.paired = r),
                Ul.delete(n),
                Nd(e, t.onShare))
            : Xl(e.child, !1)),
          Ul !== null && $l(e));
      } else if (e.subtreeFlags & 33554432)
        for (e = e.child; e !== null; ) (eu(e), (e = e.sibling));
      else Ul !== null && $l(e);
    }
    function tu(e) {
      for (e = e.child; e !== null; ) {
        if (e.tag === 30) {
          var t = e.memoizedProps,
            n = Ei(t, e.stateNode);
          ((t = Oi(t.default, t.update)),
            (e.flags &= -5),
            t !== `none` && Jl(e, n, t, (e.memoizedState = []), !1));
        } else e.subtreeFlags & 33554432 && tu(e);
        e = e.sibling;
      }
    }
    function nu(e) {
      if (e.subtreeFlags & 18874368)
        for (e = e.child; e !== null; ) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && e.flags & 18874368) {
              var t = e.stateNode;
              t.paired !== null && ((t.paired = null), Xl(e.child, !1));
            }
            nu(e);
          }
          e = e.sibling;
        }
    }
    function ru(e) {
      if (e.tag === 30) ((e.stateNode.paired = null), Xl(e.child, !1), nu(e));
      else if (e.subtreeFlags & 33554432)
        for (e = e.child; e !== null; ) (ru(e), (e = e.sibling));
      else nu(e);
    }
    function iu(e) {
      for (e = e.child; e !== null; )
        (e.tag === 30 ? Xl(e.child, !1) : e.subtreeFlags & 33554432 && iu(e),
          (e = e.sibling));
    }
    function au(e, t, n, r, i, a, o) {
      for (var s = !1; t !== null; ) {
        if (t.tag === 5) {
          var c = t.stateNode;
          if (a !== null && ql < a.length) {
            var l = a[ql],
              u = Op(c);
            (l.view || u.view) && (s = !0);
            var d;
            if ((d = !(e.flags & 4))) {
              if (u.clip) d = !0;
              else {
                d = l.rect;
                var f = u.rect;
                d =
                  d.y !== f.y ||
                  d.x !== f.x ||
                  d.height !== f.height ||
                  d.width !== f.width;
              }
            }
            (d && (e.flags |= 4),
              u.abs
                ? (u = !l.abs)
                : ((l = l.rect),
                  (u = u.rect),
                  (u = l.height !== u.height || l.width !== u.width)),
              u && (e.flags |= 32));
          } else e.flags |= 32;
          (e.flags & 4 && Tp(c, ql === 0 ? n : n + `_` + ql, i),
            (s && e.flags & 4) ||
              (Gl === null && (Gl = []),
              Gl.push(c, ql === 0 ? r : r + `_` + ql, t.memoizedProps)),
            ql++);
        } else
          (t.tag !== 22 || t.memoizedState === null) &&
            (t.tag === 30 && o
              ? (e.flags |= t.flags & 32)
              : au(e, t.child, n, r, i, a, o) && (s = !0));
        t = t.sibling;
      }
      return s;
    }
    function ou(e, t) {
      for (e = e.child; e !== null; ) {
        if (e.tag === 30) {
          var n = e.memoizedProps,
            r = e.stateNode,
            i = Ei(n, r),
            a = Oi(n.default, n.update);
          if (t) {
            r = r.clones;
            var o = r === null ? null : r.map(kp);
          } else ((o = e.memoizedState), (e.memoizedState = null));
          r = e;
          var s = e.child;
          ((ql = 0),
            (i = au(r, s, i, i, a, o, !1)),
            e.flags & 4 && i && (t || Nd(e, n.onUpdate)));
        } else e.subtreeFlags & 33554432 && ou(e, t);
        e = e.sibling;
      }
    }
    var su = !1,
      H = !1,
      cu = !1,
      lu = !1,
      uu = typeof WeakSet == `function` ? WeakSet : Set,
      du = null,
      fu = !1,
      pu = !1,
      mu = !1,
      hu = !1;
    function gu(e, t, n) {
      if (((e = e.containerInfo), (sp = gh), (e = ni(e)), ri(e))) {
        if (`selectionStart` in e)
          var r = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            r = ((r = e.ownerDocument) && r.defaultView) || window;
            var i = r.getSelection && r.getSelection();
            if (i && i.rangeCount !== 0) {
              r = i.anchorNode;
              var a = i.anchorOffset,
                o = i.focusNode;
              i = i.focusOffset;
              try {
                (r.nodeType, o.nodeType);
              } catch {
                r = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== r || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === r && ++u === a && (c = s),
                    p === o && ++d === i && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              r = c === -1 || l === -1 ? null : { start: c, end: l };
            } else r = null;
          }
        r ||= { start: 0, end: 0 };
      } else r = null;
      for (
        cp = { focusedElem: e, selectionRange: r },
          gh = !1,
          n = (n & 335544064) === n,
          du = t,
          t = n ? 9270 : 1024;
        du !== null;
      ) {
        if (((e = du), n && ((r = e.deletions), r !== null)))
          for (a = 0; a < r.length; a++) n && eu(r[a]);
        if (e.alternate === null && e.flags & 2) (n && Wl(e), _u(n));
        else {
          if (e.tag === 22) {
            if (((r = e.alternate), e.memoizedState !== null)) {
              (r !== null && r.memoizedState === null && n && eu(r), _u(n));
              continue;
            }
            if (r !== null && r.memoizedState !== null) {
              (n && Wl(e), _u(n));
              continue;
            }
          }
          ((r = e.child),
            (e.subtreeFlags & t) !== 0 && r !== null
              ? ((r.return = e), (du = r))
              : (n && tu(e), _u(n)));
        }
      }
      Ul = null;
    }
    function _u(e) {
      for (; du !== null; ) {
        var t = du,
          n = e,
          r = t.alternate,
          a = t.flags;
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (a & 1024 && r !== null) {
              ((n = void 0), (a = r.memoizedProps), (r = r.memoizedState));
              var o = t.stateNode;
              try {
                var s = Tc(t.type, a);
                ((n = o.getSnapshotBeforeUpdate(s, r)),
                  (o.__reactInternalSnapshotBeforeUpdate = n));
              } catch (e) {
                Z(t, t.return, e);
              }
            }
            break;
          case 3:
            if (a & 1024) {
              if (((r = t.stateNode.containerInfo), (n = r.nodeType), n === 9))
                nm(r);
              else if (n === 1)
                switch (r.nodeName) {
                  case `HEAD`:
                  case `HTML`:
                  case `BODY`:
                    nm(r);
                    break;
                  default:
                    r.textContent = ``;
                }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          case 30:
            n &&
              r !== null &&
              ((n = Ei(r.memoizedProps, r.stateNode)),
              (a = t.memoizedProps),
              (a = Oi(a.default, a.update)),
              a !== `none` && Jl(r, n, a, (r.memoizedState = []), !0));
            break;
          default:
            if (a & 1024) throw Error(i(163));
        }
        if (((r = t.sibling), r !== null)) {
          ((r.return = t.return), (du = r));
          break;
        }
        du = t.return;
      }
    }
    function vu(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (Lu(e, n), r & 4 && wl(5, n));
          break;
        case 1:
          if ((Lu(e, n), r & 4)) {
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                Z(n, n.return, e);
              }
            else {
              var i = Tc(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(
                  i,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate,
                );
              } catch (e) {
                Z(n, n.return, e);
              }
            }
          }
          (r & 64 && El(n), r & 512 && Ol(n, n.return));
          break;
        case 3:
          if ((Lu(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              jo(e, t);
            } catch (e) {
              Z(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && Vl(n);
        case 26:
        case 5:
          (Lu(e, n), t === null && r & 4 && Fl(n), r & 512 && Ol(n, n.return));
          break;
        case 12:
          Lu(e, n);
          break;
        case 31:
          (Lu(e, n), r & 4 && Eu(e, n));
          break;
        case 13:
          (Lu(e, n),
            r & 4 && Du(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null &&
                ((e = e.dehydrated),
                e !== null && ((n = _f.bind(null, n)), cm(e, n)))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || su), !r)) {
            var a = (t !== null && t.memoizedState !== null) || H;
            ((t = su),
              (i = H),
              (su = r),
              (H = a) && !i
                ? ((r = 2), n.subtreeFlags & 8772 && (r |= 1), zu(e, n, r))
                : Lu(e, n),
              (su = t),
              (H = i));
          }
          break;
        case 30:
          (Lu(e, n), r & 512 && Ol(n, n.return));
          break;
        case 7:
          r & 512 && Ol(n, n.return);
        default:
          Lu(e, n);
      }
    }
    function yu(e, t) {
      for (e = e.child; e !== null; ) (bu(e, t), (e = e.sibling));
    }
    function bu(e, t) {
      switch (e.tag) {
        case 5:
        case 26:
          try {
            var n = e.stateNode;
            if (t) {
              var r = n.style;
              typeof r.setProperty == `function`
                ? r.setProperty(`display`, `none`, `important`)
                : (r.display = `none`);
            } else {
              var i = e.stateNode,
                a = e.memoizedProps.style,
                o = a != null && a.hasOwnProperty(`display`) ? a.display : null;
              i.style.display =
                o == null || typeof o == `boolean` ? `` : (`` + o).trim();
            }
          } catch (t) {
            Z(e, e.return, t);
          }
          xu(e, t);
          break;
        case 6:
          try {
            ((e.stateNode.nodeValue = t ? `` : e.memoizedProps), (k = !0));
          } catch (t) {
            Z(e, e.return, t);
          }
          break;
        case 18:
          try {
            var s = e.stateNode;
            t ? wp(s, !0) : wp(e.stateNode, !1);
          } catch (t) {
            Z(e, e.return, t);
          }
          break;
        case 22:
        case 23:
          e.memoizedState === null && yu(e, t);
          break;
        default:
          yu(e, t);
      }
    }
    function xu(e, t) {
      if (e.subtreeFlags & 67108864)
        for (e = e.child; e !== null; ) {
          a: {
            var n = e,
              r = t;
            switch (n.tag) {
              case 4:
                bu(n, r);
                break a;
              case 22:
                n.memoizedState === null && xu(n, r);
                break a;
              default:
                xu(n, r);
            }
          }
          e = e.sibling;
        }
    }
    function Su(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), Su(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && Vt(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    var U = null,
      Cu = !1;
    function wu(e, t, n) {
      for (n = n.child; n !== null; ) (Tu(e, t, n), (n = n.sibling));
    }
    function Tu(e, t, n) {
      if (ot && typeof ot.onCommitFiberUnmount == `function`)
        try {
          ot.onCommitFiberUnmount(at, n);
        } catch {}
      switch (n.tag) {
        case 26:
          (H || kl(n, t),
            wu(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode &&
                !H &&
                ((n = n.stateNode), n.parentNode.removeChild(n)));
          break;
        case 27:
          (H || kl(n, t), Ml(n));
          var r = U,
            i = Cu;
          (Sp(n.type) && ((U = n.stateNode), (Cu = !1)),
            wu(e, t, n),
            gm(n.stateNode, n.type, n.memoizedProps),
            (U = r),
            (Cu = i));
          break;
        case 5:
          (H || kl(n, t), Ml(n));
        case 6:
          if (
            (n.tag === 6 && Ml(n),
            (r = U),
            (i = Cu),
            (U = null),
            wu(e, t, n),
            (U = r),
            (Cu = i),
            U !== null)
          ) {
            if (Cu)
              try {
                ((U.nodeType === 9
                  ? U.body
                  : U.nodeName === `HTML`
                    ? U.ownerDocument.body
                    : U
                ).removeChild(n.stateNode),
                  (k = !0));
              } catch (e) {
                Z(n, t, e);
              }
            else
              try {
                (U.removeChild(n.stateNode), (k = !0));
              } catch (e) {
                Z(n, t, e);
              }
          }
          break;
        case 18:
          U !== null &&
            (Cu
              ? ((e = U),
                Cp(
                  e.nodeType === 9
                    ? e.body
                    : e.nodeName === `HTML`
                      ? e.ownerDocument.body
                      : e,
                  n.stateNode,
                ),
                Hh(e))
              : Cp(U, n.stateNode));
          break;
        case 4:
          ((r = U),
            (i = Cu),
            (U = n.stateNode.containerInfo),
            (Cu = !0),
            wu(e, t, n),
            (U = r),
            (Cu = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (Tl(2, n, t), H || Tl(4, n, t), wu(e, t, n));
          break;
        case 1:
          (H ||
            (kl(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && Dl(n, t, r)),
            wu(e, t, n));
          break;
        case 21:
          wu(e, t, n);
          break;
        case 22:
          ((H = (r = H) || n.memoizedState !== null), wu(e, t, n), (H = r));
          break;
        case 30:
          (kl(n, t), wu(e, t, n));
          break;
        case 7:
          (H || kl(n, t), wu(e, t, n));
          break;
        default:
          wu(e, t, n);
      }
    }
    function Eu(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          Hh(e);
        } catch (e) {
          Z(t, t.return, e);
        }
      }
    }
    function Du(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null &&
          ((e = e.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Hh(e);
        } catch (e) {
          Z(t, t.return, e);
        }
    }
    function Ou(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return (t === null && (t = e.stateNode = new uu()), t);
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new uu()),
            t
          );
        default:
          throw Error(i(435, e.tag));
      }
    }
    function ku(e, t) {
      var n = Ou(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = vf.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function Au(e, t, n) {
      var r = t.deletions;
      if (r !== null)
        for (var a = 0; a < r.length; a++) {
          var o = r[a],
            s = e,
            c = t,
            l = c;
          a: for (; l !== null; ) {
            switch (l.tag) {
              case 27:
                if (Sp(l.type)) {
                  ((U = l.stateNode), (Cu = !1));
                  break a;
                }
                break;
              case 5:
                ((U = l.stateNode), (Cu = !1));
                break a;
              case 3:
              case 4:
                ((U = l.stateNode.containerInfo), (Cu = !0));
                break a;
            }
            l = l.return;
          }
          if (U === null) throw Error(i(160));
          (Tu(s, c, o),
            (U = null),
            (Cu = !1),
            (s = o.alternate),
            s !== null && (s.return = null),
            (o.return = null));
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; ) (Mu(t, e, n), (t = t.sibling));
    }
    var ju = null;
    function Mu(e, t, n) {
      var r = e.alternate,
        a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            a & 4 &&
            ((r = e.updateQueue),
            (r = r === null ? null : r.events),
            r !== null)
          )
            for (var o = 0; o < r.length; o++) {
              var s = r[o];
              s.ref.impl = s.nextImpl;
            }
          (Au(t, e, n),
            Nu(e),
            a & 4 && (Tl(3, e, e.return), wl(3, e), Tl(5, e, e.return)));
          break;
        case 1:
          (Au(t, e, n),
            Nu(e),
            a & 512 && (H || r === null || kl(r, r.return)),
            a & 64 &&
              su &&
              ((e = e.updateQueue),
              e !== null &&
                ((t = e.callbacks),
                t !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? t : n.concat(t))))));
          break;
        case 26:
          if (
            ((o = ju),
            Au(t, e, n),
            Nu(e),
            a & 512 && (H || r === null || kl(r, r.return)),
            a & 4)
          ) {
            if (
              ((a = r === null ? null : r.memoizedState),
              (n = e.memoizedState),
              r === null)
            ) {
              if (n === null) {
                if (e.stateNode === null) {
                  if (su)
                    e.stateNode = fp(
                      e.type,
                      e.memoizedProps,
                      t.containerInfo,
                      e,
                    );
                  else {
                    a: {
                      ((t = e.type),
                        (n = e.memoizedProps),
                        (a = o.ownerDocument || o));
                      b: switch (t) {
                        case `title`:
                          ((r = a.getElementsByTagName(`title`)[0]),
                            (!r ||
                              r[zt] ||
                              r[Mt] ||
                              r.namespaceURI === `http://www.w3.org/2000/svg` ||
                              r.hasAttribute(`itemprop`)) &&
                              ((r = a.createElement(t)),
                              a.head.insertBefore(
                                r,
                                a.querySelector(`head > title`),
                              )),
                            np(r, t, n),
                            (r[Mt] = e),
                            Kt(r),
                            (t = r));
                          break a;
                        case `link`:
                          if (
                            (o = Gm(`link`, `href`, a).get(t + (n.href || ``)))
                          ) {
                            for (s = 0; s < o.length; s++)
                              if (
                                ((r = o[s]),
                                r.getAttribute(`href`) ===
                                  (n.href == null || n.href === ``
                                    ? null
                                    : n.href) &&
                                  r.getAttribute(`rel`) ===
                                    (n.rel == null ? null : n.rel) &&
                                  r.getAttribute(`title`) ===
                                    (n.title == null ? null : n.title) &&
                                  r.getAttribute(`crossorigin`) ===
                                    (n.crossOrigin == null
                                      ? null
                                      : n.crossOrigin))
                              ) {
                                o.splice(s, 1);
                                break b;
                              }
                          }
                          ((r = a.createElement(t)),
                            np(r, t, n),
                            a.head.appendChild(r));
                          break;
                        case `meta`:
                          if (
                            (o = Gm(`meta`, `content`, a).get(
                              t + (n.content || ``),
                            ))
                          ) {
                            for (s = 0; s < o.length; s++)
                              if (
                                ((r = o[s]),
                                r.getAttribute(`content`) ===
                                  (n.content == null ? null : `` + n.content) &&
                                  r.getAttribute(`name`) ===
                                    (n.name == null ? null : n.name) &&
                                  r.getAttribute(`property`) ===
                                    (n.property == null ? null : n.property) &&
                                  r.getAttribute(`http-equiv`) ===
                                    (n.httpEquiv == null
                                      ? null
                                      : n.httpEquiv) &&
                                  r.getAttribute(`charset`) ===
                                    (n.charSet == null ? null : n.charSet))
                              ) {
                                o.splice(s, 1);
                                break b;
                              }
                          }
                          ((r = a.createElement(t)),
                            np(r, t, n),
                            a.head.appendChild(r));
                          break;
                        default:
                          throw Error(i(468, t));
                      }
                      ((r[Mt] = e), Kt(r), (t = r));
                    }
                    e.stateNode = t;
                  }
                } else su || Km(o, e.type, e.stateNode);
              } else e.stateNode = Bm(o, n, e.memoizedProps);
            } else
              a === n
                ? n === null &&
                  e.stateNode !== null &&
                  Il(e, e.memoizedProps, r.memoizedProps)
                : (a === null
                    ? ((t = r.stateNode),
                      t === null || H || t.parentNode.removeChild(t))
                    : a.count--,
                  n === null
                    ? su || Km(o, e.type, e.stateNode)
                    : Bm(o, n, e.memoizedProps));
          }
          break;
        case 27:
          (Au(t, e, n),
            Nu(e),
            a & 512 && (H || r === null || kl(r, r.return)),
            r !== null && a & 4 && Il(e, e.memoizedProps, r.memoizedProps));
          break;
        case 5:
          if (
            ((o = cu),
            (cu = !1),
            Au(t, e, n),
            (cu = o),
            Nu(e),
            a & 512 && (H || r === null || kl(r, r.return)),
            e.flags & 32)
          ) {
            t = e.stateNode;
            try {
              (bn(t, ``), (k = !0));
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          (a & 4 &&
            e.stateNode != null &&
            ((t = e.memoizedProps), Il(e, t, r === null ? t : r.memoizedProps)),
            a & 1024 && (lu = !0));
          break;
        case 6:
          if ((Au(t, e, n), Nu(e), a & 4)) {
            if (e.stateNode === null) throw Error(i(162));
            ((t = e.memoizedProps), (n = e.stateNode));
            try {
              ((n.nodeValue = t), (k = !0));
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((k = !1),
            (Wm = null),
            (o = ju),
            (ju = bm(t.containerInfo)),
            Au(t, e, n),
            (ju = o),
            Nu(e),
            a & 4 && r !== null && r.memoizedState.isDehydrated)
          )
            try {
              Hh(t.containerInfo);
            } catch (t) {
              Z(e, e.return, t);
            }
          (lu && ((lu = !1), Pu(e)), (k = !1));
          break;
        case 4:
          ((a = cu),
            (cu = su),
            (r = nn()),
            (o = ju),
            (ju = bm(e.stateNode.containerInfo)),
            Au(t, e, n),
            Nu(e),
            (ju = o),
            k && pu && (mu = !0),
            (k = r),
            (cu = a));
          break;
        case 12:
          (Au(t, e, n), Nu(e));
          break;
        case 31:
          (Au(t, e, n),
            Nu(e),
            a & 4 &&
              ((t = e.updateQueue),
              t !== null && ((e.updateQueue = null), ku(e, t))));
          break;
        case 13:
          (Au(t, e, n),
            Nu(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) !=
                (r !== null && r.memoizedState !== null) &&
              (hd = Xe()),
            a & 4 &&
              ((t = e.updateQueue),
              t !== null && ((e.updateQueue = null), ku(e, t))));
          break;
        case 22:
          ((o = e.memoizedState !== null),
            (s = r !== null && r.memoizedState !== null));
          var c = su,
            l = H,
            u = cu;
          ((su = c || o),
            (cu = u || o),
            (H = l || s),
            Au(t, e, n),
            (H = l),
            (cu = u),
            (su = c),
            Nu(e),
            a & 8192 &&
              ((t = e.stateNode),
              (t._visibility = o ? t._visibility & -2 : t._visibility | 1),
              !o ||
                r === null ||
                s ||
                su ||
                H ||
                ((t = s || H),
                (n = su),
                (r = H),
                (su = o || su),
                (H = t),
                Ru(e, 2),
                (su = n),
                (H = r)),
              (!o && cu) || yu(e, o)),
            a & 4 &&
              ((t = e.updateQueue),
              t !== null &&
                ((n = t.retryQueue),
                n !== null && ((t.retryQueue = null), ku(e, n)))));
          break;
        case 19:
          (Au(t, e, n),
            Nu(e),
            a & 4 &&
              ((t = e.updateQueue),
              t !== null && ((e.updateQueue = null), ku(e, t))));
          break;
        case 30:
          (a & 512 && (H || r === null || kl(r, r.return)),
            (a = nn()),
            (o = pu),
            (s = (n & 335544064) === n),
            (c = e.memoizedProps),
            (pu = s && Oi(c.default, c.update) !== `none`),
            Au(t, e, n),
            Nu(e),
            s && r !== null && k && (e.flags |= 4),
            (pu = o),
            (k = a));
          break;
        case 21:
          break;
        case 7:
          (a & 512 && (H || r === null || kl(r, r.return)),
            r && r.stateNode !== null && (r.stateNode._fragmentFiber = e));
        default:
          (Au(t, e, n), Nu(e));
      }
    }
    function Nu(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null; ) {
            if (Ll(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          r = null;
          for (var a = e.return; a !== null; ) {
            if (Pl(a)) {
              var o = a.stateNode;
              r === null ? (r = [o]) : r.push(o);
            }
            if (Nl(a)) break;
            a = a.return;
          }
          var s = r;
          if (n == null) throw Error(i(160));
          switch (n.tag) {
            case 27:
              var c = n.stateNode;
              Bl(e, Rl(e), c, s);
              break;
            case 5:
              var l = n.stateNode;
              (n.flags & 32 && (bn(l, ``), (n.flags &= -33)),
                Bl(e, Rl(e), l, s));
              break;
            case 3:
            case 4:
              var u = n.stateNode.containerInfo;
              zl(e, Rl(e), u, s);
              break;
            default:
              throw Error(i(161));
          }
        } catch (t) {
          Z(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Pu(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          (Pu(t),
            t.tag === 5 &&
              t.flags & 1024 &&
              ((t = t.stateNode), (gh = !0), t.reset(), (gh = !1)),
            (e = e.sibling));
        }
    }
    function Fu(e, t) {
      if (t.subtreeFlags & 9270)
        for (t = t.child; t !== null; ) (Iu(t, e), (t = t.sibling));
      else ou(t, !1);
    }
    function Iu(e, t) {
      var n = e.alternate;
      if (n === null) Ql(e, !1);
      else
        switch (e.tag) {
          case 3:
            if (((hu = fu = !1), Kl(), Fu(t, e), !fu && !mu)) {
              if (((e = Gl), e !== null))
                for (var r = 0; r < e.length; r += 3) {
                  n = e[r];
                  var i = e[r + 1];
                  (Ep(n, e[r + 2]),
                    (n = n.ownerDocument.documentElement),
                    n !== null &&
                      n.animate(
                        { opacity: [0, 0], pointerEvents: [`none`, `none`] },
                        {
                          duration: 0,
                          fill: `forwards`,
                          pseudoElement: `::view-transition-group(` + i + `)`,
                        },
                      ));
                }
              ((e = t.containerInfo),
                (e =
                  e.nodeType === 9
                    ? e.documentElement
                    : e.ownerDocument.documentElement),
                e !== null &&
                  e.style.viewTransitionName === `` &&
                  ((e.style.viewTransitionName = `none`),
                  e.animate(
                    { opacity: [0, 0], pointerEvents: [`none`, `none`] },
                    {
                      duration: 0,
                      fill: `forwards`,
                      pseudoElement: `::view-transition-group(root)`,
                    },
                  ),
                  e.animate(
                    { width: [0, 0], height: [0, 0] },
                    {
                      duration: 0,
                      fill: `forwards`,
                      pseudoElement: `::view-transition`,
                    },
                  )),
                (hu = !0));
            }
            Gl = null;
            break;
          case 5:
            Fu(t, e);
            break;
          case 4:
            ((r = fu), (fu = !1), Fu(t, e), fu && (mu = !0), (fu = r));
            break;
          case 22:
            e.memoizedState === null &&
              (n.memoizedState === null ? Fu(t, e) : Ql(e, !1));
            break;
          case 30:
            ((r = fu), (i = Kl()), (fu = !1), Fu(t, e), fu && (e.flags |= 4));
            var a = e.memoizedProps,
              o = e.stateNode;
            ((t = Ei(a, o)), (o = Ei(n.memoizedProps, o)));
            var s = Oi(a.default, a.update);
            (s === `none`
              ? (t = !1)
              : ((a = n.memoizedState),
                (n.memoizedState = null),
                (n = e.child),
                (ql = 0),
                (t = au(e, n, t, o, s, a, !0)),
                ql !== (a === null ? 0 : a.length) && (e.flags |= 32)),
              e.flags & 4 && t
                ? (Nd(e, e.memoizedProps.onUpdate), (Gl = i))
                : i !== null && (i.push.apply(i, Gl), (Gl = i)),
              (fu = e.flags & 32 ? !0 : r));
            break;
          default:
            Fu(t, e);
        }
    }
    function Lu(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          (vu(e, t.alternate, t), (t = t.sibling));
    }
    function Ru(e, t) {
      for (e = e.child; e !== null; ) {
        var n = e,
          r = t;
        switch (n.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Tl(4, n, n.return), Ru(n, r));
            break;
          case 1:
            kl(n, n.return);
            var i = n.stateNode;
            (typeof i.componentWillUnmount == `function` && Dl(n, n.return, i),
              Ru(n, r));
            break;
          case 27:
            r & 2 && gm(n.stateNode, n.type, n.memoizedProps);
          case 5:
            (kl(n, n.return), (n.tag !== 5 && n.tag !== 27) || Ml(n), Ru(n, r));
            break;
          case 6:
            Ml(n);
            break;
          case 26:
            (kl(n, n.return),
              (i = n.stateNode),
              n.memoizedState !== null ||
                i === null ||
                H ||
                i.parentNode.removeChild(i),
              Ru(n, r));
            break;
          case 22:
            n.memoizedState === null && Ru(n, r);
            break;
          case 30:
            (kl(n, n.return), Ru(n, r));
            break;
          case 7:
            kl(n, n.return);
          default:
            Ru(n, r);
        }
        e = e.sibling;
      }
    }
    function zu(e, t, n) {
      for (n = t.subtreeFlags & 8772 ? n : n & -2, t = t.child; t !== null; ) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags,
          s = !!(n & 1);
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            (zu(i, a, n), wl(4, a));
            break;
          case 1:
            if (
              (zu(i, a, n),
              (r = a),
              (i = r.stateNode),
              typeof i.componentDidMount == `function`)
            )
              try {
                i.componentDidMount();
              } catch (e) {
                Z(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var c = r.stateNode;
              try {
                var l = i.shared.hiddenCallbacks;
                if (l !== null)
                  for (
                    i.shared.hiddenCallbacks = null, i = 0;
                    i < l.length;
                    i++
                  )
                    Ao(l[i], c);
              } catch (e) {
                Z(r, r.return, e);
              }
            }
            (s && o & 64 && El(a), Ol(a, a.return));
            break;
          case 27:
            n & 2 && Vl(a);
          case 5:
            ((a.tag !== 5 && a.tag !== 27) || jl(a),
              zu(i, a, n),
              s && r === null && o & 4 && Fl(a),
              Ol(a, a.return));
            break;
          case 6:
            jl(a);
            break;
          case 26:
            ((c = a.stateNode),
              a.memoizedState !== null ||
                c === null ||
                su ||
                Km(bm(c.ownerDocument), a.type, c),
              zu(i, a, n),
              s && r === null && o & 4 && Fl(a),
              Ol(a, a.return));
            break;
          case 12:
            zu(i, a, n);
            break;
          case 31:
            (zu(i, a, n), s && o & 4 && Eu(i, a));
            break;
          case 13:
            (zu(i, a, n), s && o & 4 && Du(i, a));
            break;
          case 22:
            (a.memoizedState === null && zu(i, a, n), Ol(a, a.return));
            break;
          case 30:
            (zu(i, a, n), Ol(a, a.return));
            break;
          case 7:
            Ol(a, a.return);
          default:
            zu(i, a, n);
        }
        t = t.sibling;
      }
    }
    function Bu(e, t) {
      var n = null;
      (e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && za(n)));
    }
    function Vu(e, t) {
      ((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && za(e)));
    }
    function Hu(e, t, n, r) {
      var i = (n & 335544064) === n;
      if (t.subtreeFlags & (i ? 10262 : 10256))
        for (t = t.child; t !== null; ) (Uu(e, t, n, r), (t = t.sibling));
      else i && iu(t);
    }
    function Uu(e, t, n, r) {
      var i = (n & 335544064) === n;
      i &&
        t.alternate === null &&
        t.return !== null &&
        t.return.alternate !== null &&
        ru(t);
      var a = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (Hu(e, t, n, r), a & 2048 && wl(9, t));
          break;
        case 1:
          Hu(e, t, n, r);
          break;
        case 3:
          (Hu(e, t, n, r),
            i &&
              hu &&
              ((e = e.containerInfo),
              (e =
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === `HTML`
                    ? e.ownerDocument.body
                    : e),
              e.style.viewTransitionName === `root` &&
                (e.style.viewTransitionName = ``),
              (e = e.ownerDocument.documentElement),
              e !== null &&
                e.style.viewTransitionName === `none` &&
                (e.style.viewTransitionName = ``)),
            a & 2048 &&
              ((a = null),
              t.alternate !== null && (a = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== a && (t.refCount++, a != null && za(a))));
          break;
        case 12:
          if (a & 2048) {
            (Hu(e, t, n, r), (a = t.stateNode));
            try {
              var o = t.memoizedProps,
                s = o.id,
                c = o.onPostCommit;
              typeof c == `function` &&
                c(
                  s,
                  t.alternate === null ? `mount` : `update`,
                  a.passiveEffectDuration,
                  -0,
                );
            } catch (e) {
              Z(t, t.return, e);
            }
          } else Hu(e, t, n, r);
          break;
        case 31:
          Hu(e, t, n, r);
          break;
        case 13:
          Hu(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          ((o = t.stateNode),
            (s = t.alternate),
            t.memoizedState === null
              ? (i && s !== null && s.memoizedState !== null && ru(t),
                o._visibility & 2
                  ? Hu(e, t, n, r)
                  : ((o._visibility |= 2),
                    Wu(e, t, n, r, !!(t.subtreeFlags & 10256) || !1)))
              : (i && s !== null && s.memoizedState === null && ru(s),
                o._visibility & 2 ? Hu(e, t, n, r) : Gu(e, t)),
            a & 2048 && Bu(s, t));
          break;
        case 24:
          (Hu(e, t, n, r), a & 2048 && Vu(t.alternate, t));
          break;
        case 30:
          (i &&
            ((a = t.alternate),
            a !== null && (Xl(a.child, !0), Xl(t.child, !0))),
            Hu(e, t, n, r));
          break;
        default:
          Hu(e, t, n, r);
      }
    }
    function Wu(e, t, n, r, i) {
      for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null; ) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            (Wu(a, o, s, c, i), wl(8, o));
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            (o.memoizedState === null
              ? ((u._visibility |= 2), Wu(a, o, s, c, i))
              : u._visibility & 2
                ? Wu(a, o, s, c, i)
                : Gu(a, o),
              i && l & 2048 && Bu(o.alternate, o));
            break;
          case 24:
            (Wu(a, o, s, c, i), i && l & 2048 && Vu(o.alternate, o));
            break;
          default:
            Wu(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function Gu(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              (Gu(n, r), i & 2048 && Bu(r.alternate, r));
              break;
            case 24:
              (Gu(n, r), i & 2048 && Vu(r.alternate, r));
              break;
            default:
              Gu(n, r);
          }
          t = t.sibling;
        }
    }
    var Ku = 8192;
    function qu(e, t, n) {
      if (e.subtreeFlags & Ku)
        for (e = e.child; e !== null; ) (Ju(e, t, n), (e = e.sibling));
    }
    function Ju(e, t, n) {
      switch (e.tag) {
        case 26:
          (qu(e, t, n),
            e.flags & Ku &&
              (e.memoizedState === null
                ? ((e = e.stateNode), (t & 335544128) === t && Zm(n, e))
                : Qm(n, ju, e.memoizedState, e.memoizedProps)));
          break;
        case 5:
          (qu(e, t, n),
            e.flags & Ku &&
              ((e = e.stateNode), (t & 335544128) === t && Zm(n, e)));
          break;
        case 3:
        case 4:
          var r = ju;
          ((ju = bm(e.stateNode.containerInfo)), qu(e, t, n), (ju = r));
          break;
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = Ku), (Ku = 16777216), qu(e, t, n), (Ku = r))
              : qu(e, t, n));
          break;
        case 30:
          if (
            (e.flags & Ku) !== 0 &&
            ((r = e.memoizedProps.name), r != null && r !== `auto`)
          ) {
            var i = e.stateNode;
            ((i.paired = null), Ul === null && (Ul = new Map()), Ul.set(r, i));
          }
          qu(e, t, n);
          break;
        default:
          qu(e, t, n);
      }
    }
    function Yu(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do ((t = e.sibling), (e.sibling = null), (e = t));
        while (e !== null);
      }
    }
    function Xu(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((du = r), $u(r, e));
          }
        Yu(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; ) (Zu(e), (e = e.sibling));
    }
    function Zu(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (Xu(e), e.flags & 2048 && Tl(9, e, e.return));
          break;
        case 3:
          Xu(e);
          break;
        case 12:
          Xu(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Qu(e))
            : Xu(e);
          break;
        default:
          Xu(e);
      }
    }
    function Qu(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((du = r), $u(r, e));
          }
        Yu(e);
      }
      for (e = e.child; e !== null; ) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            (Tl(8, t, t.return), Qu(t));
            break;
          case 22:
            ((n = t.stateNode),
              n._visibility & 2 && ((n._visibility &= -3), Qu(t)));
            break;
          default:
            Qu(t);
        }
        e = e.sibling;
      }
    }
    function $u(e, t) {
      for (; du !== null; ) {
        var n = du;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Tl(8, n, t);
            break;
          case 23:
          case 22:
            if (
              n.memoizedState !== null &&
              n.memoizedState.cachePool !== null
            ) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            za(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) ((r.return = n), (du = r));
        else
          a: for (n = e; du !== null; ) {
            r = du;
            var i = r.sibling,
              a = r.return;
            if ((Su(r), r === n)) {
              du = null;
              break a;
            }
            if (i !== null) {
              ((i.return = a), (du = i));
              break a;
            }
            du = a;
          }
      }
    }
    var ed = {
        getCacheForType: function (e) {
          var t = Ma(P),
            n = t.data.get(e);
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
        },
        cacheSignal: function () {
          return Ma(P).controller.signal;
        },
      },
      td = typeof WeakMap == `function` ? WeakMap : Map,
      W = 0,
      G = null,
      K = null,
      q = 0,
      J = 0,
      nd = null,
      rd = !1,
      id = !1,
      ad = !1,
      od = 0,
      Y = 0,
      sd = 0,
      cd = 0,
      ld = 0,
      ud = 0,
      dd = 0,
      fd = null,
      pd = null,
      md = !1,
      hd = 0,
      gd = 0,
      _d = 1 / 0,
      vd = null,
      yd = null,
      X = 0,
      bd = null,
      xd = null,
      Sd = 0,
      Cd = 0,
      wd = null,
      Td = null,
      Ed = null,
      Dd = null,
      Od = null,
      kd = 0,
      Ad = null;
    function jd() {
      return W & 2 && q !== 0 ? q & -q : E.T === null ? kt() : Pf();
    }
    function Md() {
      if (ud === 0) {
        if (!(q & 536870912) || N) {
          var e = pt;
          ((pt <<= 1), !(pt & 3932160) && (pt = 262144), (ud = e));
        } else ud = 536870912;
      }
      return ((e = Lo.current), e !== null && (e.flags |= 32), ud);
    }
    function Nd(e, t) {
      if (t != null) {
        var n = e.stateNode,
          r = n.ref;
        (r === null && (r = n.ref = Pp(Ei(e.memoizedProps, n))),
          Dd === null && (Dd = []),
          Dd.push(t.bind(null, r)));
      }
    }
    function Pd(e, t, n) {
      (((e === G && (J === 2 || J === 9)) || e.cancelPendingCommit !== null) &&
        (Vd(e, 0), Rd(e, q, ud, !1)),
        St(e, n),
        (W & 2 && e === G) ||
          (e === G && (!(W & 2) && (cd |= n), Y === 4 && Rd(e, q, ud, !1)),
          Ef(e)));
    }
    function Fd(e, t, n) {
      if (W & 6) throw Error(i(327));
      var r = (!n && !(t & 127) && (t & e.expiredLanes) === 0) || _t(e, t),
        a = r ? Yd(e, t) : qd(e, t, !0),
        o = r;
      do {
        if (a === 0) {
          id && !r && Rd(e, t, 0, !1);
          break;
        }
        if (((n = e.current.alternate), o && !Ld(n)))
          ((a = qd(e, t, !1)), (o = !1));
        else {
          if (a === 2) {
            if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
            else
              ((s = e.pendingLanes & -536870913),
                (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s));
            if (s !== 0) {
              t = s;
              a: {
                var c = e;
                a = fd;
                var l = c.current.memoizedState.isDehydrated;
                if (
                  (l && (Vd(c, s).flags |= 256),
                  (s = qd(c, s, !1)),
                  s !== 2 && s !== 6)
                ) {
                  if (ad && !l) {
                    ((c.errorRecoveryDisabledLanes |= o), (cd |= o), (a = 4));
                    break a;
                  }
                  ((o = pd),
                    (pd = a),
                    o !== null &&
                      (pd === null ? (pd = o) : pd.push.apply(pd, o)));
                }
                a = s;
              }
              if (((o = !1), a !== 2)) continue;
            }
          }
          if (a === 1) {
            (Vd(e, 0), Rd(e, t, 0, !0));
            break;
          }
          a: {
            switch (((r = e), (o = a), o)) {
              case 0:
              case 1:
                throw Error(i(345));
              case 4:
                if ((t & 4194048) !== t && (t & 62914560) !== t) break;
              case 6:
                Rd(r, t, ud, !rd);
                break a;
              case 2:
                pd = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(i(329));
            }
            if ((t & 62914560) === t && ((a = hd + 300 - Xe()), 10 < a)) {
              if ((Rd(r, t, ud, !rd), gt(r, 0, !0) !== 0)) break a;
              ((Sd = t),
                (r.timeoutHandle = gp(
                  Id.bind(
                    null,
                    r,
                    n,
                    pd,
                    vd,
                    md,
                    t,
                    ud,
                    cd,
                    dd,
                    rd,
                    o,
                    `Throttled`,
                    -0,
                    0,
                  ),
                  a,
                )));
              break a;
            }
            Id(r, n, pd, vd, md, t, ud, cd, dd, rd, o, null, -0, 0);
          }
          break;
        }
      } while (1);
      Ef(e);
    }
    function Id(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      e.timeoutHandle = -1;
      var m = t.subtreeFlags,
        h = (a & 335544064) === a;
      ((d = null),
        (h || m & 8192 || (m & 16785408) == 16785408) &&
        ((d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: On,
        }),
        (Ul = null),
        Ju(t, a, d),
        h &&
          ((m = d),
          (h = e.containerInfo),
          (h = (h.nodeType === 9 ? h : h.ownerDocument).__reactViewTransition),
          h != null &&
            (m.count++,
            (m.waitingForViewTransition = !0),
            (m = nh.bind(m)),
            h.finished.then(m, m))),
        (m =
          (a & 62914560) === a
            ? hd - Xe()
            : (a & 4194048) === a
              ? gd - Xe()
              : 0),
        (m = eh(d, m)),
        m !== null)
          ? ((Sd = a),
            (e.cancelPendingCommit = m(
              nf.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p),
            )),
            Rd(e, a, o, !l))
          : nf(e, t, a, n, r, i, o, s, c, l, u, d));
    }
    function Ld(e) {
      for (var t = e; ; ) {
        var n = t.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot;
            i = i.value;
            try {
              if (!Xr(a(), i)) return !1;
            } catch {
              return !1;
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
          ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function Rd(e, t, n, r) {
      ((t = vt(e, t)),
        (t &= ~ld),
        (t &= ~cd),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes));
      for (var i = t; 0 < i; ) {
        var a = 31 - ct(i),
          o = 1 << a;
        ((r[a] = -1), (i &= ~o));
      }
      n !== 0 && wt(e, n, t);
    }
    function zd() {
      return W & 6 ? !0 : (Df(0, !1), !1);
    }
    function Bd() {
      if (K !== null) {
        if (J === 0) var e = K.return;
        else ((e = K), (wa = Ca = null), cs(e), (fo = null), (po = 0), (e = K));
        for (; e !== null; ) (Cl(e.alternate, e), (e = e.return));
        K = null;
      }
    }
    function Vd(e, t) {
      var n = e.timeoutHandle;
      return (
        n !== -1 && ((e.timeoutHandle = -1), _p(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (Sd = 0),
        Bd(),
        (G = e),
        (K = n = Hi(e.current, null)),
        (q = t),
        (J = 0),
        (nd = null),
        (rd = !1),
        (id = _t(e, t)),
        (ad = !1),
        (dd = ud = ld = cd = sd = Y = 0),
        (pd = fd = null),
        (md = !1),
        (od = vt(e, t)),
        Mi(),
        n
      );
    }
    function Hd(e, t) {
      ((I = null),
        (E.H = _c),
        t === to || t === ro
          ? ((t = lo()), (J = 3))
          : t === no
            ? ((t = lo()), (J = 4))
            : (J =
                t === Fc
                  ? 8
                  : typeof t == `object` && t && typeof t.then == `function`
                    ? 6
                    : 1),
        (nd = t),
        K === null && ((Y = 1), kc(e, Xi(t, e.current))));
    }
    function Ud() {
      var e = Lo.current;
      return e === null
        ? !0
        : (q & 4194048) === q
          ? Ro === null
          : (q & 62914560) === q || q & 536870912
            ? e === Ro
            : !1;
    }
    function Wd() {
      var e = E.H;
      return ((E.H = _c), e === null ? _c : e);
    }
    function Gd() {
      var e = E.A;
      return ((E.A = ed), e);
    }
    function Kd() {
      ((Y = 4),
        rd || ((q & 4194048) !== q && Lo.current !== null) || (id = !0),
        (!(sd & 134217727) && !(cd & 134217727)) ||
          G === null ||
          Rd(G, q, ud, !1));
    }
    function qd(e, t, n) {
      var r = W;
      W |= 2;
      var i = Wd(),
        a = Gd();
      ((G !== e || q !== t) && ((vd = null), Vd(e, t)), (t = !1));
      var o = Y;
      a: do
        try {
          if (J !== 0 && K !== null) {
            var s = K,
              c = nd;
            switch (J) {
              case 8:
                (Bd(), (o = 6));
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                Lo.current === null && (t = !0);
                var l = J;
                if (((J = 0), (nd = null), $d(e, s, c, l), n && id)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                ((l = J), (J = 0), (nd = null), $d(e, s, c, l));
            }
          }
          (Jd(), (o = Y));
          break;
        } catch (t) {
          Hd(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (wa = Ca = null),
        (W = r),
        (E.H = i),
        (E.A = a),
        K === null && ((G = null), (q = 0), Mi()),
        o
      );
    }
    function Jd() {
      for (; K !== null; ) Zd(K);
    }
    function Yd(e, t) {
      var n = W;
      W |= 2;
      var r = Wd(),
        a = Gd();
      G !== e || q !== t
        ? ((vd = null), (_d = Xe() + 500), Vd(e, t))
        : (id = _t(e, t));
      a: do
        try {
          if (J !== 0 && K !== null) {
            t = K;
            var o = nd;
            b: switch (J) {
              case 1:
                ((J = 0), (nd = null), $d(e, t, o, 1));
                break;
              case 2:
              case 9:
                if (ao(o)) {
                  ((J = 0), (nd = null), Qd(t));
                  break;
                }
                ((t = function () {
                  ((J !== 2 && J !== 9) || G !== e || (J = 7), Ef(e));
                }),
                  o.then(t, t));
                break a;
              case 3:
                J = 7;
                break a;
              case 4:
                J = 5;
                break a;
              case 7:
                ao(o)
                  ? ((J = 0), (nd = null), Qd(t))
                  : ((J = 0), (nd = null), $d(e, t, o, 7));
                break;
              case 5:
                var s = null;
                switch (K.tag) {
                  case 26:
                    s = K.memoizedState;
                  case 5:
                  case 27:
                    var c = K;
                    if (s ? Ym(s) : c.stateNode.complete) {
                      ((J = 0), (nd = null));
                      var l = c.sibling;
                      if (l !== null) K = l;
                      else {
                        var u = c.return;
                        u === null ? (K = null) : ((K = u), ef(u));
                      }
                      break b;
                    }
                }
                ((J = 0), (nd = null), $d(e, t, o, 5));
                break;
              case 6:
                ((J = 0), (nd = null), $d(e, t, o, 6));
                break;
              case 8:
                (Bd(), (Y = 6));
                break a;
              default:
                throw Error(i(462));
            }
          }
          Xd();
          break;
        } catch (t) {
          Hd(e, t);
        }
      while (1);
      return (
        (wa = Ca = null),
        (E.H = r),
        (E.A = a),
        (W = n),
        K === null ? ((G = null), (q = 0), Mi(), Y) : 0
      );
    }
    function Xd() {
      for (; K !== null && !Je(); ) Zd(K);
    }
    function Zd(e) {
      var t = hl(e.alternate, e, od);
      ((e.memoizedProps = e.pendingProps), t === null ? ef(e) : (K = t));
    }
    function Qd(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = Yc(n, t, t.pendingProps, t.type, void 0, q);
          break;
        case 11:
          t = Yc(n, t, t.pendingProps, t.type.render, t.ref, q);
          break;
        case 5:
          cs(t);
          var r = t;
          r === da &&
            (N
              ? (_a(r), r.tag === 5 && r.stateNode != null && (M = r.stateNode))
              : (_a(r), (N = !0)));
        default:
          (Cl(n, t), (t = K = Ui(t, od)), (t = hl(n, t, od)));
      }
      ((e.memoizedProps = e.pendingProps), t === null ? ef(e) : (K = t));
    }
    function $d(e, t, n, r) {
      ((wa = Ca = null), cs(t), (fo = null), (po = 0));
      var i = t.return;
      try {
        if (Pc(e, i, t, n, q)) {
          ((Y = 1), kc(e, Xi(n, e.current)), (K = null));
          return;
        }
      } catch (t) {
        if (i !== null) throw ((K = i), t);
        ((Y = 1), kc(e, Xi(n, e.current)), (K = null));
        return;
      }
      t.flags & 32768
        ? (N || r === 1
            ? (e = !0)
            : id || q & 536870912
              ? (e = !1)
              : ((rd = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = Lo.current),
                  r !== null && r.tag === 13 && (r.flags |= 16384))),
          tf(t, e))
        : ef(t);
    }
    function ef(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          tf(t, rd);
          return;
        }
        e = t.return;
        var n = xl(t.alternate, t, od);
        if (n !== null) {
          K = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          K = t;
          return;
        }
        K = t = e;
      } while (t !== null);
      Y === 0 && (Y = 5);
    }
    function tf(e, t) {
      do {
        var n = Sl(e.alternate, e);
        if (n !== null) {
          ((n.flags &= 32767), (K = n));
          return;
        }
        if (
          ((n = e.return),
          n !== null &&
            ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          K = e;
          return;
        }
        K = e = n;
      } while (e !== null);
      ((Y = 6), (K = null));
    }
    function nf(e, t, n, r, a, o, s, c, l, u, d, f) {
      e.cancelPendingCommit = null;
      do df();
      while (X !== 0);
      if (W & 6) throw Error(i(327));
      if (t !== null) {
        if (t === e.current) throw Error(i(177));
        (e === G && ((K = G = null), (q = 0)),
          (xd = t),
          (bd = e),
          (Sd = n),
          (wd = a),
          (Td = r),
          rf(e, t, n, s, c, l, f));
      }
    }
    function rf(e, t, n, r, i, a, o) {
      var s = t.lanes | t.childLanes;
      if (
        ((Cd = s),
        (s |= ji),
        Ct(e, n, s, r, i, a),
        (Dd = null),
        (n & 335544064) === n
          ? ((Od = Ha(e)), (r = 10262))
          : ((Od = null), (r = 10256)),
        (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            yf(et, function () {
              return (ff(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (Hl = !1),
        (r = !!(t.flags & 13878)),
        t.subtreeFlags & 13878 || r)
      ) {
        ((r = E.T), (E.T = null), (i = D.p), (D.p = 2), (a = W), (W |= 4));
        try {
          gu(e, t, n);
        } finally {
          ((W = a), (D.p = i), (E.T = r));
        }
      }
      ((X = 1),
        Hl
          ? (Ed = Mp(
              o,
              e.containerInfo,
              Od,
              sf,
              cf,
              of,
              lf,
              ff,
              af,
              null,
              null,
            ))
          : (sf(), cf(), lf()));
    }
    function af(e) {
      if (X !== 0) {
        var t = bd.onRecoverableError;
        t(e, { componentStack: null });
      }
    }
    function of() {
      X === 3 && ((X = 0), Iu(xd, bd), (X = 4));
    }
    function sf() {
      if (X === 1) {
        X = 0;
        var e = bd,
          t = xd,
          n = Sd,
          r = !!(t.flags & 13878);
        if (t.subtreeFlags & 13878 || r) {
          ((r = E.T), (E.T = null));
          var i = D.p;
          D.p = 2;
          var a = W;
          W |= 4;
          try {
            ((pu = mu = !1), Mu(t, e, n), (n = cp));
            var o = ni(e.containerInfo),
              s = n.focusedElem,
              c = n.selectionRange;
            if (
              o !== s &&
              s &&
              s.ownerDocument &&
              ti(s.ownerDocument.documentElement, s)
            ) {
              if (c !== null && ri(s)) {
                var l = c.start,
                  u = c.end;
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  ((s.selectionStart = l),
                    (s.selectionEnd = Math.min(u, s.value.length)));
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m);
                    !p.extend && h > g && ((o = g), (g = h), (h = o));
                    var _ = ei(s, h),
                      v = ei(s, g);
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      (y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y)));
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode); )
                p.nodeType === 1 &&
                  d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (
                typeof s.focus == `function` && s.focus(), s = 0;
                s < d.length;
                s++
              ) {
                var b = d[s];
                ((b.element.scrollLeft = b.left),
                  (b.element.scrollTop = b.top));
              }
            }
            ((gh = !!sp), (cp = sp = null));
          } finally {
            ((W = a), (D.p = i), (E.T = r));
          }
        }
        ((e.current = t), (X = 2));
      }
    }
    function cf() {
      if (X === 2) {
        X = 0;
        var e = bd,
          t = xd,
          n = !!(t.flags & 8772);
        if (t.subtreeFlags & 8772 || n) {
          ((n = E.T), (E.T = null));
          var r = D.p;
          D.p = 2;
          var i = W;
          W |= 4;
          try {
            vu(e, t.alternate, t);
          } finally {
            ((W = i), (D.p = r), (E.T = n));
          }
        }
        X = 3;
      }
    }
    function lf() {
      if (X === 4 || X === 3) {
        X = 0;
        var e = Ed;
        ((Ed = null), Ye());
        var t = bd,
          n = xd,
          r = Sd,
          i = Td,
          a = (r & 335544064) === r ? 10262 : 10256;
        if (
          ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0
            ? (X = 5)
            : ((X = 0), (xd = bd = null), uf(t, t.pendingLanes)),
          (a = t.pendingLanes),
          a === 0 && (yd = null),
          Ot(r),
          (n = n.stateNode),
          ot && typeof ot.onCommitFiberRoot == `function`)
        )
          try {
            ot.onCommitFiberRoot(at, n, void 0, (n.current.flags & 128) == 128);
          } catch {}
        if (i !== null) {
          ((n = E.T), (a = D.p), (D.p = 2), (E.T = null));
          try {
            for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
              var c = i[s];
              o(c.value, { componentStack: c.stack });
            }
          } finally {
            ((E.T = n), (D.p = a));
          }
        }
        if (
          ((i = Dd),
          (o = Od),
          (Od = null),
          i !== null && ((Dd = null), o === null && (o = []), e !== null))
        )
          for (c = 0; c < i.length; c++)
            ((n = (0, i[c])(o)), n !== void 0 && e.finished.finally(n));
        (Sd & 3 && df(),
          Ef(t),
          (a = t.pendingLanes),
          r & 261930 && a & 42
            ? t === Ad
              ? kd++
              : ((kd = 0), (Ad = t))
            : ((kd = 0), (Ad = null)),
          Df(0, !1));
      }
    }
    function uf(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), za(t)));
    }
    function df() {
      return (
        Ed !== null && (Ed.skipTransition(), (Ed = null)),
        sf(),
        cf(),
        lf(),
        ff()
      );
    }
    function ff() {
      if (X !== 5) return !1;
      var e = bd,
        t = Cd;
      Cd = 0;
      var n = Ot(Sd),
        r = E.T,
        a = D.p;
      try {
        ((D.p = 32 > n ? 32 : n), (E.T = null), (n = wd), (wd = null));
        var o = bd,
          s = Sd;
        if (((X = 0), (xd = bd = null), (Sd = 0), W & 6)) throw Error(i(331));
        var c = W;
        if (
          ((W |= 4),
          Zu(o.current),
          Uu(o, o.current, s, n),
          (W = c),
          Df(0, !1),
          ot && typeof ot.onPostCommitFiberRoot == `function`)
        )
          try {
            ot.onPostCommitFiberRoot(at, o);
          } catch {}
        return !0;
      } finally {
        ((D.p = a), (E.T = r), uf(e, t));
      }
    }
    function pf(e, t, n) {
      ((t = Xi(n, t)),
        (t = jc(e.stateNode, t, 2)),
        (e = wo(e, t, 2)),
        e !== null && (St(e, 2), Ef(e)));
    }
    function Z(e, t, n) {
      if (e.tag === 3) pf(e, e, n);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            pf(t, e, n);
            break;
          }
          if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` &&
                (yd === null || !yd.has(r)))
            ) {
              ((e = Xi(n, e)),
                (n = Mc(2)),
                (r = wo(t, n, 2)),
                r !== null && (Nc(n, r, t, e), St(r, 2), Ef(r)));
              break;
            }
          }
          t = t.return;
        }
    }
    function mf(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new td();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) ||
        ((ad = !0), i.add(n), (e = hf.bind(null, e, t, n)), t.then(e, e));
    }
    function hf(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        G === e &&
          (q & n) === n &&
          (Y === 4 || (Y === 3 && (q & 62914560) === q && 300 > Xe() - hd)
            ? W & 2
              ? (ld |= n)
              : Vd(e, 0)
            : (ld |= n),
          dd === q && (dd = 0)),
        Ef(e));
    }
    function gf(e, t) {
      (t === 0 && (t = bt()), (e = Fi(e, t)), e !== null && (St(e, t), Ef(e)));
    }
    function _f(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), gf(e, n));
    }
    function vf(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            a = e.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(i(314));
      }
      (r !== null && r.delete(t), gf(e, n));
    }
    function yf(e, t) {
      return Ke(e, t);
    }
    var bf = null,
      xf = null,
      Sf = !1,
      Cf = !1,
      wf = !1,
      Tf = 0;
    function Ef(e) {
      (e !== xf &&
        e.next === null &&
        (xf === null ? (bf = xf = e) : (xf = xf.next = e)),
        (Cf = !0),
        Sf || ((Sf = !0), Nf()));
    }
    function Df(e, t) {
      if (!wf && Cf) {
        wf = !0;
        do
          for (var n = !1, r = bf; r !== null; ) {
            if (!t) {
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  ((a = (1 << (31 - ct(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
                }
                a !== 0 && ((n = !0), Mf(r, a));
              } else
                ((a = q),
                  (a = gt(
                    r,
                    r === G ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
                  )),
                  !(a & 3) || _t(r, a) || ((n = !0), Mf(r, a)));
            }
            r = r.next;
          }
        while (n);
        wf = !1;
      }
    }
    function Of() {
      kf();
    }
    function kf() {
      Cf = Sf = !1;
      var e = 0;
      Tf !== 0 && hp() && (e = Tf);
      for (var t = Xe(), n = null, r = bf; r !== null; ) {
        var i = r.next,
          a = Af(r, t);
        (a === 0
          ? ((r.next = null),
            n === null ? (bf = i) : (n.next = i),
            i === null && (xf = n))
          : ((n = r), (e !== 0 || a & 3) && (Cf = !0)),
          (r = i));
      }
      ((X !== 0 && X !== 5) || Df(e, !1), Tf !== 0 && (Tf = 0));
    }
    function Af(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - ct(a),
          s = 1 << o,
          c = i[o];
        (c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = yt(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
      if (
        ((t = G),
        (n = q),
        (n = gt(
          e,
          e === t ? n : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        (r = e.callbackNode),
        n === 0 ||
          (e === t && (J === 2 || J === 9)) ||
          e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && qe(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if (!(n & 3) || _t(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && qe(r), Ot(n))) {
          case 2:
          case 8:
            n = $e;
            break;
          case 32:
            n = et;
            break;
          case 268435456:
            n = nt;
            break;
          default:
            n = et;
        }
        return (
          (r = jf.bind(null, e)),
          (n = Ke(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        );
      }
      return (
        r !== null && r !== null && qe(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function jf(e, t) {
      if (X !== 0 && X !== 5)
        return ((e.callbackNode = null), (e.callbackPriority = 0), null);
      var n = e.callbackNode;
      if (df() && e.callbackNode !== n) return null;
      var r = q;
      return (
        (r = gt(
          e,
          e === G ? r : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        r === 0
          ? null
          : (Fd(e, r, t),
            Af(e, Xe()),
            e.callbackNode != null && e.callbackNode === n
              ? jf.bind(null, e)
              : null)
      );
    }
    function Mf(e, t) {
      if (df()) return null;
      Fd(e, t, !0);
    }
    function Nf() {
      bp(function () {
        W & 6 ? Ke(Qe, Of) : kf();
      });
    }
    function Pf() {
      if (Tf === 0) {
        var e = Ga;
        (e === 0 && ((e = ft), (ft <<= 1), !(ft & 261888) && (ft = 256)),
          (Tf = e));
      }
      return Tf;
    }
    function Ff(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : Dn(e);
    }
    function If(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = Ff((i[Nt] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[Nt] || null)
            ? Ff(t.formAction)
            : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new Yn(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (Tf !== 0) {
                    var e = new FormData(i, o);
                    rc(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      null,
                      e,
                    );
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = new FormData(i, o)),
                    rc(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      a,
                      e,
                    ));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var Lf = 0; Lf < Ci.length; Lf++) {
      var Rf = Ci[Lf];
      wi(Rf.toLowerCase(), `on` + (Rf[0].toUpperCase() + Rf.slice(1)));
    }
    (wi(hi, `onAnimationEnd`),
      wi(gi, `onAnimationIteration`),
      wi(_i, `onAnimationStart`),
      wi(`dblclick`, `onDoubleClick`),
      wi(`focusin`, `onFocus`),
      wi(`focusout`, `onBlur`),
      wi(vi, `onTransitionRun`),
      wi(yi, `onTransitionStart`),
      wi(bi, `onTransitionCancel`),
      wi(xi, `onTransitionEnd`),
      Zt(`onMouseEnter`, [`mouseout`, `mouseover`]),
      Zt(`onMouseLeave`, [`mouseout`, `mouseover`]),
      Zt(`onPointerEnter`, [`pointerout`, `pointerover`]),
      Zt(`onPointerLeave`, [`pointerout`, `pointerover`]),
      Xt(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `,
        ),
      ),
      Xt(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      Xt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      Xt(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `),
      ),
      Xt(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      Xt(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(
          ` `,
        ),
      ));
    var zf =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      Bf = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`
          .split(` `)
          .concat(zf),
      );
    function Vf(e, t) {
      t = !!(t & 4);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped()))
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                ki(e);
              }
              ((i.currentTarget = null), (a = c));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                ki(e);
              }
              ((i.currentTarget = null), (a = c));
            }
        }
      }
    }
    function Q(e, t) {
      var n = t[Ft];
      n === void 0 && (n = t[Ft] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Gf(t, e, 2, !1), n.add(r));
    }
    function Hf(e, t, n) {
      var r = 0;
      (t && (r |= 4), Gf(n, e, r, t));
    }
    var Uf = `_reactListening` + Math.random().toString(36).slice(2);
    function Wf(e) {
      if (!e[Uf]) {
        ((e[Uf] = !0),
          Jt.forEach(function (t) {
            t !== `selectionchange` &&
              (Bf.has(t) || Hf(t, !1, e), Hf(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Uf] || ((t[Uf] = !0), Hf(`selectionchange`, !1, t));
      }
    }
    function Gf(e, t, n, r) {
      switch (Ch(t)) {
        case 2:
          var i = _h;
          break;
        case 8:
          i = vh;
          break;
        default:
          i = yh;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !Rn ||
          (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
          (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function Kf(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var s = r.tag;
          if (s === 3 || s === 4) {
            var c = r.stateNode.containerInfo;
            if (c === i) break;
            if (s === 4)
              for (s = r.return; s !== null; ) {
                var l = s.tag;
                if ((l === 3 || l === 4) && s.stateNode.containerInfo === i)
                  return;
                s = s.return;
              }
            for (; c !== null; ) {
              if (((s = Ht(c)), s === null)) return;
              if (((l = s.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = s;
                continue a;
              }
              c = c.parentNode;
            }
          }
          r = r.return;
        }
      Fn(function () {
        var r = a,
          i = An(n),
          s = [];
        a: {
          var c = Si.get(e);
          if (c !== void 0) {
            var l = Yn,
              u = e;
            switch (e) {
              case `keypress`:
                if (Wn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = fr;
                break;
              case `focusin`:
                ((u = `focus`), (l = ir));
                break;
              case `focusout`:
                ((u = `blur`), (l = ir));
                break;
              case `beforeblur`:
              case `afterblur`:
                l = ir;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = nr;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = rr;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = hr;
                break;
              case hi:
              case gi:
              case _i:
                l = ar;
                break;
              case xi:
                l = gr;
                break;
              case `scroll`:
              case `scrollend`:
                l = Zn;
                break;
              case `wheel`:
                l = _r;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = or;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = pr;
                break;
              case `submit`:
                l = mr;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = vr;
            }
            var d = !!(t & 4),
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (c === null ? null : c + `Capture`) : c;
            d = [];
            for (var m = r, h; m !== null; ) {
              var g = m;
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = In(m, p)), g != null && d.push(qf(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length &&
              ((c = new l(c, u, null, n, i)),
              s.push({ event: c, listeners: d }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((l = e === `mouseover` || e === `pointerover`),
              (c = e === `mouseout` || e === `pointerout`),
              l &&
                n !== kn &&
                (u = n.relatedTarget || n.fromElement) &&
                (Ht(u) || u[Pt]))
            )
              break a;
            (c || l) &&
              ((u =
                i.window === i
                  ? i
                  : (l = i.ownerDocument)
                    ? l.defaultView || l.parentWindow
                    : window),
              c
                ? ((l = n.relatedTarget || n.toElement),
                  (c = r),
                  (l = l ? Ht(l) : null),
                  l !== null &&
                    ((f = o(l)),
                    (d = l.tag),
                    l !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (l = null))
                : ((c = null), (l = r)),
              c !== l &&
                ((d = nr),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = pr),
                  (g = `onPointerLeave`),
                  (p = `onPointerEnter`),
                  (m = `pointer`)),
                (f = c == null ? u : Wt(c)),
                (h = l == null ? u : Wt(l)),
                (u = new d(g, m + `leave`, c, n, i)),
                (u.target = f),
                (u.relatedTarget = h),
                (g = null),
                Ht(i) === r &&
                  ((d = new d(p, m + `enter`, l, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                (d = c && l ? C(c, l, Yf) : null),
                c !== null && Xf(s, u, c, d, !1),
                l !== null && f !== null && Xf(s, f, l, d, !0)));
          }
          a: {
            if (
              ((c = r ? Wt(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var _ = Rr;
            else if (Mr(c)) {
              if (zr) _ = Jr;
              else {
                _ = Kr;
                var v = Gr;
              }
            } else
              ((l = c.nodeName),
                !l ||
                l.toLowerCase() !== `input` ||
                (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && wn(r.elementType) && (_ = Rr)
                  : (_ = qr));
            if ((_ &&= _(e, r))) {
              Nr(s, _, n, i);
              break a;
            }
            v && v(e, c, r);
          }
          switch (((v = r ? Wt(r) : window), e)) {
            case `focusin`:
              (Mr(v) || v.contentEditable === `true`) &&
                ((ai = v), (oi = r), (si = null));
              break;
            case `focusout`:
              si = oi = ai = null;
              break;
            case `mousedown`:
              ci = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((ci = !1), li(s, n, i));
              break;
            case `selectionchange`:
              if (ii) break;
            case `keydown`:
            case `keyup`:
              li(s, n, i);
          }
          var y;
          if (br)
            b: {
              switch (e) {
                case `compositionstart`:
                  var b = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  b = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  b = `onCompositionUpdate`;
                  break b;
              }
              b = void 0;
            }
          else
            Or
              ? Er(e, n) && (b = `onCompositionEnd`)
              : e === `keydown` &&
                n.keyCode === 229 &&
                (b = `onCompositionStart`);
          (b &&
            (Cr &&
              n.locale !== `ko` &&
              (Or || b !== `onCompositionStart`
                ? b === `onCompositionEnd` && Or && (y = Un())
                : ((Bn = i),
                  (Vn = `value` in Bn ? Bn.value : Bn.textContent),
                  (Or = !0))),
            (v = Jf(r, b)),
            0 < v.length &&
              ((b = new A(b, e, null, n, i)),
              s.push({ event: b, listeners: v }),
              y ? (b.data = y) : ((y = Dr(n)), y !== null && (b.data = y)))),
            (y = Sr ? kr(e, n) : Ar(e, n)) &&
              ((b = Jf(r, `onBeforeInput`)),
              0 < b.length &&
                ((v = new A(`onBeforeInput`, `beforeinput`, null, n, i)),
                s.push({ event: v, listeners: b }),
                (v.data = y))),
            If(s, e, r, n, i));
        }
        Vf(s, t);
      });
    }
    function qf(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Jf(e, t) {
      for (var n = t + `Capture`, r = []; e !== null; ) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = In(e, n)),
            i != null && r.unshift(qf(e, i, a)),
            (i = In(e, t)),
            i != null && r.push(qf(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function Yf(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Xf(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r; ) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        ((s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = In(n, a)), l != null && o.unshift(qf(n, l, c)))
            : i || ((l = In(n, a)), l != null && o.push(qf(n, l, c)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var Zf = /\r\n?/g,
      Qf = /\u0000|\uFFFD/g;
    function $f(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          Zf,
          `
`,
        )
        .replace(Qf, ``);
    }
    function ep(e, t) {
      return ((t = $f(t)), $f(e) === t);
    }
    function $(e, t, n, r, a, o) {
      switch (n) {
        case `children`:
          if (typeof r == `string`)
            t === `body` || (t === `textarea` && r === ``) || bn(e, r);
          else if (typeof r == `number` || typeof r == `bigint`)
            t !== `body` && bn(e, `` + r);
          else return;
          break;
        case `className`:
          an(e, `class`, r);
          break;
        case `tabIndex`:
          an(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          an(e, n, r);
          break;
        case `style`:
          Cn(e, r, o);
          return;
        case `data`:
          if (t !== `object`) {
            an(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (
            (r === `` && (t !== `a` || n !== `href`)) ||
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = Dn(r)), e.setAttribute(n, r));
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
            );
            break;
          }
          if (
            (typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && $(e, t, `name`, a.name, a, null),
                  $(e, t, `formEncType`, a.formEncType, a, null),
                  $(e, t, `formMethod`, a.formMethod, a, null),
                  $(e, t, `formTarget`, a.formTarget, a, null))
                : ($(e, t, `encType`, a.encType, a, null),
                  $(e, t, `method`, a.method, a, null),
                  $(e, t, `target`, a.target, a, null))),
            r == null || typeof r == `symbol` || typeof r == `boolean`)
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = Dn(r)), e.setAttribute(n, r));
          break;
        case `onClick`:
          r != null && (e.onclick = On);
          return;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          return;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          return;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              o?.__html !== n && (e.innerHTML = n);
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          ((n = Dn(r)),
            e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n));
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `credentialless`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n);
          break;
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r &&
                r != null &&
                typeof r != `function` &&
                typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null &&
          typeof r != `function` &&
          typeof r != `symbol` &&
          !isNaN(r) &&
          1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `rowSpan`:
        case `start`:
          r == null ||
          typeof r == `function` ||
          typeof r == `symbol` ||
          isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case `popover`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), rn(e, `popover`, r));
          break;
        case `xlinkActuate`:
          on(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          on(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          on(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          on(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          on(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          on(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          on(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          on(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          on(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          rn(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          return;
        default:
          if (
            !(2 < n.length) ||
            (n[0] !== `o` && n[0] !== `O`) ||
            (n[1] !== `n` && n[1] !== `N`)
          )
            ((n = Tn.get(n) || n), rn(e, n, r));
          else return;
      }
      k = !0;
    }
    function tp(e, t, n, r, a, o) {
      switch (n) {
        case `style`:
          Cn(e, r, o);
          return;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              o?.__html !== n && (e.innerHTML = n);
            }
          }
          break;
        case `children`:
          if (typeof r == `string`) bn(e, r);
          else if (typeof r == `number` || typeof r == `bigint`) bn(e, `` + r);
          else return;
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          return;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          return;
        case `onClick`:
          r != null && (e.onclick = On);
          return;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          return;
        case `innerText`:
        case `textContent`:
          return;
        default:
          if (!Yt.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((a = n.endsWith(`Capture`)),
                (o = n.slice(2, a ? n.length - 7 : void 0)),
                (t = e[Nt] || null),
                (t = t == null ? null : t[n]),
                typeof t == `function` && e.removeEventListener(o, t, a),
                typeof r == `function`)
              ) {
                (typeof t != `function` &&
                  t !== null &&
                  (n in e
                    ? (e[n] = null)
                    : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(o, r, a));
                break a;
              }
              ((k = !0),
                n in e
                  ? (e[n] = r)
                  : !0 === r
                    ? e.setAttribute(n, ``)
                    : rn(e, n, r));
            }
          return;
      }
      k = !0;
    }
    function np(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          (Q(`error`, e), Q(`load`, e));
          var r = !1,
            a = !1,
            o;
          for (o in n)
            if (n.hasOwnProperty(o)) {
              var s = n[o];
              if (s != null)
                switch (o) {
                  case `src`:
                    r = !0;
                    break;
                  case `srcSet`:
                    a = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(i(137, t));
                  default:
                    $(e, t, o, s, n, null);
                }
            }
          (a && $(e, t, `srcSet`, n.srcSet, n, null),
            r && $(e, t, `src`, n.src, n, null));
          return;
        case `input`:
          Q(`invalid`, e);
          var c = (o = s = a = null),
            l = null,
            u = null;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r];
              if (d != null)
                switch (r) {
                  case `name`:
                    a = d;
                    break;
                  case `type`:
                    s = d;
                    break;
                  case `checked`:
                    l = d;
                    break;
                  case `defaultChecked`:
                    u = d;
                    break;
                  case `value`:
                    o = d;
                    break;
                  case `defaultValue`:
                    c = d;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(i(137, t));
                    break;
                  default:
                    $(e, t, r, d, n, null);
                }
            }
          hn(e, o, c, l, u, s, a, !1);
          return;
        case `select`:
          for (a in (Q(`invalid`, e), (r = s = o = null), n))
            if (n.hasOwnProperty(a) && ((c = n[a]), c != null))
              switch (a) {
                case `value`:
                  o = c;
                  break;
                case `defaultValue`:
                  s = c;
                  break;
                case `multiple`:
                  r = c;
                default:
                  $(e, t, a, c, n, null);
              }
          ((t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && _n(e, !!r, n, !0) : _n(e, !!r, t, !1));
          return;
        case `textarea`:
          for (s in (Q(`invalid`, e), (o = a = r = null), n))
            if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c;
                  break;
                case `defaultValue`:
                  a = c;
                  break;
                case `children`:
                  o = c;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(i(91));
                  break;
                default:
                  $(e, t, s, c, n, null);
              }
          yn(e, r, a, o);
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected =
                    r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  $(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), Q(`cancel`, e), Q(`close`, e));
          break;
        case `iframe`:
        case `object`:
          Q(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < zf.length; r++) Q(zf[r], e);
          break;
        case `image`:
          (Q(`error`, e), Q(`load`, e));
          break;
        case `details`:
          Q(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          (Q(`error`, e), Q(`load`, e));
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(i(137, t));
                default:
                  $(e, t, u, r, n, null);
              }
          return;
        default:
          if (wn(t)) {
            for (d in n)
              n.hasOwnProperty(d) &&
                ((r = n[d]), r !== void 0 && tp(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n)
        n.hasOwnProperty(c) &&
          ((r = n[c]), r != null && $(e, t, c, r, n, null));
    }
    var rp = {};
    function ip(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var a = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  l = f;
                default:
                  r.hasOwnProperty(m) || $(e, t, m, null, r, f);
              }
          }
          for (var p in r) {
            var m = r[p];
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  (m !== f && (k = !0), (o = m));
                  break;
                case `name`:
                  (m !== f && (k = !0), (a = m));
                  break;
                case `checked`:
                  (m !== f && (k = !0), (u = m));
                  break;
                case `defaultChecked`:
                  (m !== f && (k = !0), (d = m));
                  break;
                case `value`:
                  (m !== f && (k = !0), (s = m));
                  break;
                case `defaultValue`:
                  (m !== f && (k = !0), (c = m));
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(i(137, t));
                  break;
                default:
                  m !== f && $(e, t, p, m, r, f);
              }
          }
          mn(e, s, c, l, u, d, o, a);
          return;
        case `select`:
          for (o in ((m = s = c = p = null), n))
            if (((l = n[o]), n.hasOwnProperty(o) && l != null))
              switch (o) {
                case `value`:
                  break;
                case `multiple`:
                  m = l;
                default:
                  r.hasOwnProperty(o) || $(e, t, o, null, r, l);
              }
          for (a in r)
            if (
              ((o = r[a]),
              (l = n[a]),
              r.hasOwnProperty(a) && (o != null || l != null))
            )
              switch (a) {
                case `value`:
                  (o !== l && (k = !0), (p = o));
                  break;
                case `defaultValue`:
                  (o !== l && (k = !0), (c = o));
                  break;
                case `multiple`:
                  (o !== l && (k = !0), (s = o));
                default:
                  o !== l && $(e, t, a, o, r, l);
              }
          ((t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n &&
                (t == null ? _n(e, !!n, n ? [] : ``, !1) : _n(e, !!n, t, !0))
              : _n(e, !!n, p, !1));
          return;
        case `textarea`:
          for (c in ((m = p = null), n))
            if (
              ((a = n[c]),
              n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c))
            )
              switch (c) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  $(e, t, c, null, r, a);
              }
          for (s in r)
            if (
              ((a = r[s]),
              (o = n[s]),
              r.hasOwnProperty(s) && (a != null || o != null))
            )
              switch (s) {
                case `value`:
                  (a !== o && (k = !0), (p = a));
                  break;
                case `defaultValue`:
                  (a !== o && (k = !0), (m = a));
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (a != null) throw Error(i(91));
                  break;
                default:
                  a !== o && $(e, t, s, a, r, o);
              }
          vn(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (
              ((p = n[h]),
              n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
            )
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  $(e, t, h, null, r, p);
              }
          for (l in r)
            if (
              ((p = r[l]),
              (m = n[l]),
              r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  (p !== m && (k = !0),
                    (e.selected =
                      p && typeof p != `function` && typeof p != `symbol`));
                  break;
                default:
                  $(e, t, l, p, r, m);
              }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            ((p = n[g]),
              n.hasOwnProperty(g) &&
                p != null &&
                !r.hasOwnProperty(g) &&
                $(e, t, g, null, r, p));
          for (u in r)
            if (
              ((p = r[u]),
              (m = n[u]),
              r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(i(137, t));
                  break;
                default:
                  $(e, t, u, p, r, m);
              }
          return;
        default:
          if (wn(t)) {
            for (var _ in n)
              ((p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  tp(e, t, _, void 0, r, p));
            for (d in r)
              ((p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  tp(e, t, d, p, r, m));
            return;
          }
      }
      for (var v in n)
        ((p = n[v]),
          n.hasOwnProperty(v) &&
            p != null &&
            !r.hasOwnProperty(v) &&
            $(e, t, v, null, r, p));
      for (f in r)
        ((p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) ||
            p === m ||
            (p == null && m == null) ||
            $(e, t, f, p, r, m));
    }
    function ap(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0;
        default:
          return !1;
      }
    }
    function op() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && ap(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u &&
                ap(d) &&
                ((c = c.responseEnd),
                (o += u * (c < s ? 1 : (s - l) / (c - l))));
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e))
              break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection &&
        ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5;
    }
    var sp = null,
      cp = null;
    function lp(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function up(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function dp(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }
    function fp(e, t, n, r) {
      return (
        (n = lp(n).createElement(e)),
        (n[Mt] = r),
        (n[Nt] = t),
        np(n, e, t),
        Kt(n),
        n
      );
    }
    function pp(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var mp = null;
    function hp() {
      var e = window.event;
      return e && e.type === `popstate`
        ? e !== mp && ((mp = e), !0)
        : ((mp = null), !1);
    }
    var gp = typeof setTimeout == `function` ? setTimeout : void 0,
      _p = typeof clearTimeout == `function` ? clearTimeout : void 0,
      vp = typeof Promise == `function` ? Promise : void 0,
      yp =
        typeof requestAnimationFrame == `function` ? requestAnimationFrame : gp,
      bp =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : vp === void 0
            ? gp
            : function (e) {
                return vp.resolve(null).then(e).catch(xp);
              };
    function xp(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Sp(e) {
      return e === `head`;
    }
    function Cp(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8)) {
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              (e.removeChild(i), Hh(t));
              return;
            }
            r--;
          } else if (
            n === `$` ||
            n === `$?` ||
            n === `$~` ||
            n === `$!` ||
            n === `&`
          )
            r++;
          else if (n === `html`) _m(e.ownerDocument.documentElement);
          else if (n === `head`) {
            ((n = e.ownerDocument.head), _m(n));
            for (var a = n.firstChild; a; ) {
              var o = a.nextSibling,
                s = a.nodeName;
              (a[zt] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o));
            }
          } else n === `body` && _m(e.ownerDocument.body);
        }
        n = i;
      } while (n);
      Hh(t);
    }
    function wp(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display),
                (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        ) {
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break;
            e--;
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
        }
        n = r;
      } while (n);
    }
    function Tp(e, t, n) {
      if (
        ((t = CSS.escape(t) === t ? t : `r-` + btoa(t).replace(/=/g, ``)),
        (e.style.viewTransitionName = t),
        n != null && (e.style.viewTransitionClass = n),
        (n = getComputedStyle(e)),
        n.display === `inline`)
      ) {
        if (((t = e.getClientRects()), t.length === 1)) var r = 1;
        else
          for (var i = (r = 0); i < t.length; i++) {
            var a = t[i];
            0 < a.width && 0 < a.height && r++;
          }
        r === 1 &&
          ((e = e.style),
          (e.display = t.length === 1 ? `inline-block` : `block`),
          (e.marginTop = `-` + n.paddingTop),
          (e.marginBottom = `-` + n.paddingBottom));
      }
    }
    function Ep(e, t) {
      ((e = e.style), (t = t.style));
      var n =
        t == null
          ? null
          : t.hasOwnProperty(`viewTransitionName`)
            ? t.viewTransitionName
            : t.hasOwnProperty(`view-transition-name`)
              ? t[`view-transition-name`]
              : null;
      ((e.viewTransitionName =
        n == null || typeof n == `boolean` ? `` : (`` + n).trim()),
        (n =
          t == null
            ? null
            : t.hasOwnProperty(`viewTransitionClass`)
              ? t.viewTransitionClass
              : t.hasOwnProperty(`view-transition-class`)
                ? t[`view-transition-class`]
                : null),
        (e.viewTransitionClass =
          n == null || typeof n == `boolean` ? `` : (`` + n).trim()),
        e.display === `inline-block` &&
          (t == null
            ? (e.display = e.margin = ``)
            : ((n = t.display),
              (e.display = n == null || typeof n == `boolean` ? `` : n),
              (n = t.margin),
              n == null
                ? ((n = t.hasOwnProperty(`marginTop`)
                    ? t.marginTop
                    : t[`margin-top`]),
                  (e.marginTop = n == null || typeof n == `boolean` ? `` : n),
                  (t = t.hasOwnProperty(`marginBottom`)
                    ? t.marginBottom
                    : t[`margin-bottom`]),
                  (e.marginBottom =
                    t == null || typeof t == `boolean` ? `` : t))
                : (e.margin = n))));
    }
    function Dp(e, t, n) {
      return (
        (n = n.ownerDocument.defaultView),
        {
          rect: e,
          abs: t.position === `absolute` || t.position === `fixed`,
          clip:
            t.clipPath !== `none` ||
            t.overflow !== `visible` ||
            t.filter !== `none` ||
            t.mask !== `none` ||
            t.mask !== `none` ||
            t.borderRadius !== `0px`,
          view:
            0 <= e.bottom &&
            0 <= e.right &&
            e.top <= n.innerHeight &&
            e.left <= n.innerWidth,
        }
      );
    }
    function Op(e) {
      return Dp(e.getBoundingClientRect(), getComputedStyle(e), e);
    }
    function kp(e) {
      var t = e.getBoundingClientRect();
      t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
      var n = getComputedStyle(e);
      return Dp(t, n, e);
    }
    function Ap(e) {
      return e.documentElement.clientHeight;
    }
    function jp(e) {
      (this.addEventListener(`load`, e), this.addEventListener(`error`, e));
    }
    function Mp(e, t, n, r, i, a, o, s, c) {
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      try {
        var u = l.startViewTransition({
          update: function () {
            var t = l.defaultView,
              n = t.navigation && t.navigation.transition,
              o = l.fonts.status;
            r();
            var s = [];
            if (
              (o === `loaded` &&
                (Ap(l), l.fonts.status === `loading` && s.push(l.fonts.ready)),
              (o = s.length),
              e !== null)
            )
              for (var c = e.suspenseyImages, u = 0, d = 0; d < c.length; d++) {
                var f = c[d];
                if (!f.complete) {
                  var p = f.getBoundingClientRect();
                  if (
                    0 < p.bottom &&
                    0 < p.right &&
                    p.top < t.innerHeight &&
                    p.left < t.innerWidth
                  ) {
                    if (((u += Xm(f)), u > $m)) {
                      s.length = o;
                      break;
                    }
                    ((f = new Promise(jp.bind(f))), s.push(f));
                  }
                }
              }
            if (0 < s.length)
              return (
                (t = Promise.race([
                  Promise.all(s),
                  new Promise(function (e) {
                    return setTimeout(e, 500);
                  }),
                ]).then(i, i)),
                (n ? Promise.allSettled([n.finished, t]) : t).then(a, a)
              );
            if ((i(), n)) return n.finished.then(a, a);
            a();
          },
          types: n,
        });
        l.__reactViewTransition = u;
        var d = [];
        return (
          u.ready.then(
            function () {
              for (
                var e = l.documentElement.getAnimations({ subtree: !0 }), t = 0;
                t < e.length;
                t++
              ) {
                var n = e[t],
                  r = n.effect,
                  i = r.pseudoElement;
                if (i != null && i.startsWith(`::view-transition`)) {
                  (d.push(n), (n = r.getKeyframes()));
                  for (var a = (i = void 0), s = !0, c = 0; c < n.length; c++) {
                    var u = n[c],
                      f = u.width;
                    if (i === void 0) i = f;
                    else if (i !== f) {
                      s = !1;
                      break;
                    }
                    if (((f = u.height), a === void 0)) a = f;
                    else if (a !== f) {
                      s = !1;
                      break;
                    }
                    (delete u.width,
                      delete u.height,
                      u.transform === `none` && delete u.transform);
                  }
                  s &&
                    i !== void 0 &&
                    a !== void 0 &&
                    (r.setKeyframes(n),
                    (s = getComputedStyle(r.target, r.pseudoElement)),
                    s.width !== i || s.height !== a) &&
                    ((s = n[0]),
                    (s.width = i),
                    (s.height = a),
                    (s = n[n.length - 1]),
                    (s.width = i),
                    (s.height = a),
                    r.setKeyframes(n));
                }
              }
              o();
            },
            function (e) {
              l.__reactViewTransition === u && (l.__reactViewTransition = null);
              try {
                if (typeof e == `object` && e)
                  switch (e.name) {
                    case `InvalidStateError`:
                      (e.message ===
                        `View transition was skipped because document visibility state is hidden.` ||
                        e.message ===
                          `Skipping view transition because document visibility state has become hidden.` ||
                        e.message ===
                          `Skipping view transition because viewport size changed.` ||
                        e.message ===
                          `Transition was aborted because of invalid state`) &&
                        (e = null);
                  }
                e !== null && c(e);
              } finally {
                (r(), i(), o());
              }
            },
          ),
          u.finished.finally(function () {
            for (var e = 0; e < d.length; e++) d[e].cancel();
            (l.__reactViewTransition === u && (l.__reactViewTransition = null),
              s());
          }),
          u
        );
      } catch {
        return (r(), i(), o(), null);
      }
    }
    function Np(e, t) {
      ((this._scope = document.documentElement),
        (this._selector = `::view-transition-` + e + `(` + t + `)`));
    }
    ((Np.prototype.animate = function (e, t) {
      return (
        (t = typeof t == `number` ? { duration: t } : w({}, t)),
        (t.pseudoElement = this._selector),
        this._scope.animate(e, t)
      );
    }),
      (Np.prototype.getAnimations = function () {
        for (
          var e = this._scope,
            t = this._selector,
            n = e.getAnimations({ subtree: !0 }),
            r = [],
            i = 0;
          i < n.length;
          i++
        ) {
          var a = n[i].effect;
          a !== null && a.target === e && a.pseudoElement === t && r.push(n[i]);
        }
        return r;
      }),
      (Np.prototype.getComputedStyle = function () {
        return getComputedStyle(this._scope, this._selector);
      }));
    function Pp(e) {
      return {
        name: e,
        group: new Np(`group`, e),
        imagePair: new Np(`image-pair`, e),
        old: new Np(`old`, e),
        new: new Np(`new`, e),
      };
    }
    function Fp(e) {
      ((this._fragmentFiber = e),
        (this._observers = this._eventListeners = null));
    }
    Fp.prototype.addEventListener = function (e, t, n) {
      var r = null,
        i = null;
      if (
        !(
          n != null &&
          typeof n != `boolean` &&
          ((r = n.signal || null), r !== null && r.aborted)
        )
      ) {
        this._eventListeners === null && (this._eventListeners = []);
        var a = this._eventListeners;
        if (Bp(a, e, t, n) === -1) {
          var o = this,
            s = t;
          (n != null &&
            typeof n != `boolean` &&
            !0 === n.once &&
            (s = function (r) {
              (o.removeEventListener(e, t, n),
                typeof t == `function` ? t.call(this, r) : t.handleEvent(r));
            }),
            r !== null &&
              ((i = o.removeEventListener.bind(o, e, t, n)),
              r.addEventListener(`abort`, i, { once: !0 }),
              (i = r.removeEventListener.bind(r, `abort`, i))),
            (r = Rp(n)),
            a.push({
              type: e,
              listener: t,
              optionsOrUseCapture: n,
              attachedListener: s,
              cleanup: i,
            }),
            m(this._fragmentFiber.child, !1, Ip, e, s, r));
        }
        this._eventListeners = a;
      }
    };
    function Ip(e, t, n, r) {
      return (b(e).addEventListener(t, n, r), !1);
    }
    Fp.prototype.removeEventListener = function (e, t, n) {
      var r = this._eventListeners;
      if (r !== null && ((t = Bp(r, e, t, n)), t !== -1)) {
        var i = r[t];
        n = i.attachedListener;
        var a = i.cleanup;
        ((i = Rp(i.optionsOrUseCapture)),
          m(this._fragmentFiber.child, !1, Lp, e, n, i),
          r.splice(t, 1),
          a !== null && a());
      }
    };
    function Lp(e, t, n, r) {
      return (b(e).removeEventListener(t, n, r), !1);
    }
    function Rp(e) {
      return e != null &&
        typeof e != `boolean` &&
        (!0 === e.once || e.signal instanceof AbortSignal)
        ? { capture: e.capture, passive: e.passive }
        : e;
    }
    function zp(e) {
      return e == null
        ? `c=0`
        : typeof e == `boolean`
          ? `c=` + (e ? `1` : `0`)
          : `c=` + (e.capture ? `1` : `0`);
    }
    function Bp(e, t, n, r) {
      if (e.length === 0) return -1;
      r = zp(r);
      for (var i = 0; i < e.length; i++) {
        var a = e[i];
        if (a.type === t && a.listener === n && zp(a.optionsOrUseCapture) === r)
          return i;
      }
      return -1;
    }
    ((Fp.prototype.dispatchEvent = function (e) {
      var t = g(this._fragmentFiber);
      if (t === null) return !0;
      t = b(t);
      var n = this._eventListeners;
      if ((n !== null && 0 < n.length) || !e.bubbles) {
        var r =
          t.nodeType === 9 ? t.createComment(``) : document.createTextNode(``);
        if (n)
          for (var i = 0; i < n.length; i++) {
            var a = n[i];
            r.addEventListener(
              a.type,
              a.attachedListener,
              Rp(a.optionsOrUseCapture),
            );
          }
        if ((t.appendChild(r), (e = r.dispatchEvent(e)), n))
          for (i = 0; i < n.length; i++)
            ((a = n[i]),
              r.removeEventListener(
                a.type,
                a.attachedListener,
                Rp(a.optionsOrUseCapture),
              ));
        return (t.removeChild(r), e);
      }
      return t.dispatchEvent(e);
    }),
      (Fp.prototype.focus = function (e) {
        m(this._fragmentFiber.child, !0, Vp, e, void 0, void 0);
      }));
    function Vp(e, t) {
      return e.tag !== 6 && ((e = b(e)), pm(e, t));
    }
    Fp.prototype.focusLast = function (e) {
      var t = [];
      m(this._fragmentFiber.child, !0, Hp, t, void 0, void 0);
      for (var n = t.length - 1; 0 <= n && !Vp(t[n], e); n--);
    };
    function Hp(e, t) {
      return (t.push(e), !1);
    }
    Fp.prototype.blur = function () {
      var e = g(this._fragmentFiber);
      e !== null &&
        ((e = b(e)),
        (e = lp(e).activeElement),
        e !== null && m(this._fragmentFiber.child, !1, Up, e, void 0, void 0));
    };
    function Up(e, t) {
      return (
        e.tag !== 6 &&
        ((e = b(e)), e === t || e.contains(t) ? (t.blur(), !0) : !1)
      );
    }
    Fp.prototype.observeUsing = function (e) {
      (this._observers === null && (this._observers = new Set()),
        this._observers.add(e),
        m(this._fragmentFiber.child, !1, Wp, e, void 0, void 0));
    };
    function Wp(e, t) {
      return (e.tag === 6 || ((e = b(e)), t.observe(e)), !1);
    }
    Fp.prototype.unobserveUsing = function (e) {
      var t = this._observers;
      if (t !== null && t.has(e)) {
        (t.delete(e), m(this._fragmentFiber.child, !1, Gp, e, void 0, void 0));
        for (var n = (t = 0); n < Kp.length; n++) {
          var r = Kp[n];
          r.fragmentInstance === this && r.observer === e
            ? e.unobserve(r.instance)
            : (Kp[t++] = r);
        }
        Kp.length = t;
      }
    };
    function Gp(e, t) {
      return (e.tag === 6 || ((e = b(e)), t.unobserve(e)), !1);
    }
    var Kp = [],
      qp = !1;
    function Jp(e, t, n) {
      (Kp.push({ fragmentInstance: e, observer: t, instance: n }),
        qp ||
          ((qp = !0),
          mm(function () {
            qp = !1;
            var e = Kp;
            Kp = [];
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              n.observer.unobserve(n.instance);
            }
          })));
    }
    Fp.prototype.getClientRects = function () {
      var e = [];
      return (m(this._fragmentFiber.child, !1, Yp, e, void 0, void 0), e);
    };
    function Yp(e, t) {
      if (e.tag === 6) {
        e = e.stateNode;
        var n = e.ownerDocument.createRange();
        (n.selectNodeContents(e), t.push.apply(t, n.getClientRects()));
      } else ((e = b(e)), t.push.apply(t, e.getClientRects()));
      return !1;
    }
    ((Fp.prototype.getRootNode = function (e) {
      var t = g(this._fragmentFiber);
      return t === null ? this : b(t).getRootNode(e);
    }),
      (Fp.prototype.compareDocumentPosition = function (e) {
        var t = g(this._fragmentFiber);
        if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
        var n = [];
        m(this._fragmentFiber.child, !1, Hp, n, void 0, void 0);
        var r = b(t);
        if (n.length === 0) {
          if (((n = r), _(this._fragmentFiber))) {
            a: {
              for (t = this._fragmentFiber.return; t !== null; ) {
                if (t.tag === 4) {
                  t = t.stateNode.containerInfo;
                  break a;
                }
                if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
                t = t.return;
              }
              t = null;
            }
            t != null && (n = t);
          }
          t = this._fragmentFiber;
          var i = (r = n.compareDocumentPosition(e));
          return (
            n === e
              ? (i = Node.DOCUMENT_POSITION_CONTAINS)
              : r & Node.DOCUMENT_POSITION_CONTAINED_BY &&
                ((n = v(t)[1]),
                n === null
                  ? (i = Node.DOCUMENT_POSITION_PRECEDING)
                  : ((e = b(n).compareDocumentPosition(e)),
                    (i =
                      e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING
                        ? Node.DOCUMENT_POSITION_FOLLOWING
                        : Node.DOCUMENT_POSITION_PRECEDING))),
            (i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
          );
        }
        ((t = b(n[0])), (i = b(n[n.length - 1])));
        var a = _(this._fragmentFiber) ? t.parentElement : r;
        if (a == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
        ((r =
          a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY),
          (a =
            a.compareDocumentPosition(i) &
            Node.DOCUMENT_POSITION_CONTAINED_BY));
        var o = t.compareDocumentPosition(e),
          s = i.compareDocumentPosition(e),
          c =
            o & Node.DOCUMENT_POSITION_CONTAINED_BY ||
            s & Node.DOCUMENT_POSITION_CONTAINED_BY;
        return (
          (s =
            r &&
            a &&
            o & Node.DOCUMENT_POSITION_FOLLOWING &&
            s & Node.DOCUMENT_POSITION_PRECEDING),
          (t =
            (r && t === e) || (a && i === e) || c || s
              ? Node.DOCUMENT_POSITION_CONTAINED_BY
              : (!r && t === e) || (!a && i === e)
                ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
                : o),
          t & Node.DOCUMENT_POSITION_DISCONNECTED ||
          t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC ||
          Xp(t, this._fragmentFiber, n[0], n[n.length - 1], e)
            ? t
            : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
        );
      }));
    function Xp(e, t, n, r, i) {
      var a = Ht(i);
      if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
        if ((n = !!a))
          a: {
            for (; a !== null; ) {
              if (a.tag === 7 && (a === t || a.alternate === t)) {
                n = !0;
                break a;
              }
              a = a.return;
            }
            n = !1;
          }
        return n;
      }
      if (e & Node.DOCUMENT_POSITION_CONTAINS) {
        if (a === null)
          return (
            (a = i.ownerDocument),
            i === a || i === a.documentElement || i === a.body
          );
        a: {
          for (a = t, t = g(t); a !== null; ) {
            if (
              !(
                (a.tag !== 5 && a.tag !== 3 && a.tag !== 27) ||
                (a !== t && a.alternate !== t)
              )
            ) {
              a = !0;
              break a;
            }
            a = a.return;
          }
          a = !1;
        }
        return a;
      }
      return e & Node.DOCUMENT_POSITION_PRECEDING
        ? ((t = !!a) &&
            !(t = a === n) &&
            ((t = C(n, a, S)),
            t === null
              ? (t = !1)
              : (m(t, !0, te, a, n), (a = x), (x = null), (t = a !== null))),
          t)
        : e & Node.DOCUMENT_POSITION_FOLLOWING
          ? ((t = !!a) &&
              !(t = a === r) &&
              ((t = C(r, a, S)),
              t === null
                ? (t = !1)
                : (m(t, !0, ne, a, r),
                  (a = x),
                  (ee = x = null),
                  (t = a !== null))),
            t)
          : !1;
    }
    function Zp(e, t) {
      var n = e.ownerDocument.createRange();
      (n.selectNodeContents(e),
        (e = n.getBoundingClientRect()),
        window.scrollTo(
          window.scrollX + e.left,
          t
            ? window.scrollY + e.top
            : window.scrollY + e.bottom - window.innerHeight,
        ));
    }
    Fp.prototype.scrollIntoView = function (e) {
      if (typeof e == `object`) throw Error(i(566));
      var t = [];
      m(this._fragmentFiber.child, !1, Hp, t, void 0, void 0);
      var n = !1 !== e;
      if (t.length === 0) {
        var r = v(this._fragmentFiber);
        if (
          ((r = n ? r[1] || r[0] || g(this._fragmentFiber) : r[0] || r[1]),
          r === null)
        )
          return;
        if (r.tag === 6) {
          ((e = b(r)), Zp(e, n));
          return;
        }
        if (((r = b(r)), r.nodeType !== 9)) {
          if (r.nodeType === 11) {
            ((n = `host` in r ? r.host : null),
              n !== null && n.scrollIntoView(e));
            return;
          }
          r.scrollIntoView(e);
        }
      }
      for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length); ) {
        var a = t[r];
        (a.tag === 6 ? ((a = b(a)), Zp(a, n)) : b(a).scrollIntoView(e),
          (r += n ? -1 : 1));
      }
    };
    function Qp(e, t) {
      return ((e = b(e)), $p(e, t), !1);
    }
    function $p(e, t) {
      ((e.reactFragments ??= new Set()), e.reactFragments.add(t));
    }
    function em(e, t) {
      var n = t._eventListeners;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          e.addEventListener(
            i.type,
            i.attachedListener,
            Rp(i.optionsOrUseCapture),
          );
        }
      e.nodeType !== 3 &&
        ((n = t._observers),
        n !== null &&
          n.forEach(function (n) {
            for (var r = 0, i = 0; i < Kp.length; i++) {
              var a = Kp[i];
              (a.fragmentInstance !== t ||
                a.observer !== n ||
                a.instance !== e) &&
                (Kp[r++] = a);
            }
            ((Kp.length = r), n.observe(e));
          }),
        $p(e, t));
    }
    function tm(e, t) {
      var n = t._eventListeners;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          e.removeEventListener(
            i.type,
            i.attachedListener,
            Rp(i.optionsOrUseCapture),
          );
        }
      e.nodeType !== 3 &&
        ((n = t._observers),
        n !== null &&
          n.forEach(function (n) {
            typeof n.rootMargin == `string` ? Jp(t, n, e) : n.unobserve(e);
          }),
        e.reactFragments != null && e.reactFragments.delete(t));
    }
    function nm(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            (nm(n), Vt(n));
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }
    function rm(e, t, n, r) {
      for (; e.nodeType === 1; ) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r) {
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        } else if (!e[zt])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break;
              return e;
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !==
                    (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !==
                    (i.title == null ? null : i.title))
              )
                break;
              return e;
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break;
              return e;
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = lm(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function im(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3; )
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !n) ||
          ((e = lm(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function am(e, t) {
      for (; e.nodeType !== 8; )
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !t) ||
          ((e = lm(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function om(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function sm(e) {
      return (
        e.data === `$!` ||
        (e.data === `$?` && e.ownerDocument.readyState !== `loading`)
      );
    }
    function cm(e, t) {
      var n = e.ownerDocument;
      if (e.data === `$~`) e._reactRetry = t;
      else if (e.data !== `$?` || n.readyState !== `loading`) t();
      else {
        var r = function () {
          (t(), n.removeEventListener(`DOMContentLoaded`, r));
        };
        (n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r));
      }
    }
    function lm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var um = null;
    function dm(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return lm(e.nextSibling);
            t--;
          } else
            (n !== `$` &&
              n !== `$!` &&
              n !== `$?` &&
              n !== `$~` &&
              n !== `&`) ||
              t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function fm(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (
            n === `$` ||
            n === `$!` ||
            n === `$?` ||
            n === `$~` ||
            n === `&`
          ) {
            if (t === 0) return e;
            t--;
          } else (n !== `/$` && n !== `/&`) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function pm(e, t) {
      function n() {
        r = !0;
      }
      if (e.ownerDocument.activeElement === e) return !0;
      var r = !1;
      try {
        (e.ownerDocument.addEventListener(`focus`, n, !0),
          (e.focus || HTMLElement.prototype.focus).call(e, t));
      } finally {
        e.ownerDocument.removeEventListener(`focus`, n, !0);
      }
      return r;
    }
    function mm(e) {
      yp(function () {
        yp(function (t) {
          return e(t);
        });
      });
    }
    function hm(e, t, n) {
      switch (((t = lp(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(i(452));
          return e;
        case `head`:
          if (((e = t.head), !e)) throw Error(i(453));
          return e;
        case `body`:
          if (((e = t.body), !e)) throw Error(i(454));
          return e;
        default:
          throw Error(i(451));
      }
    }
    function gm(e, t, n) {
      for (var r in n) {
        var i = n[r];
        n.hasOwnProperty(r) && i != null && $(e, t, r, null, rp, i);
      }
      (n.dangerouslySetInnerHTML != null && (e.textContent = ``),
        e.onclick === On && (e.onclick = null),
        Vt(e));
    }
    function _m(e) {
      for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
      Vt(e);
    }
    var vm = new Map(),
      ym = new Set();
    function bm(e) {
      if (typeof e.getRootNode == `function`) {
        var t = e.getRootNode();
        if (t.nodeType === 9 || t.nodeType === 11) return t;
      }
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    var xm = D.d;
    D.d = { f: Sm, r: Cm, D: Em, C: Dm, L: Om, m: km, X: jm, S: Am, M: Mm };
    function Sm() {
      var e = xm.f(),
        t = zd();
      return e || t;
    }
    function Cm(e) {
      var t = Ut(e);
      t !== null && t.tag === 5 && t.type === `form` ? ac(t) : xm.r(e);
    }
    var wm = typeof document > `u` ? null : document;
    function Tm(e, t, n) {
      var r = wm;
      if (r && typeof t == `string` && t) {
        var i = pn(t);
        ((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          ym.has(i) ||
            (ym.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)),
              np(t, `link`, e),
              Kt(t),
              r.head.appendChild(t))));
      }
    }
    function Em(e) {
      (xm.D(e), Tm(`dns-prefetch`, e, null));
    }
    function Dm(e, t) {
      (xm.C(e, t), Tm(`preconnect`, e, t));
    }
    function Om(e, t, n) {
      xm.L(e, t, n);
      var r = wm;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + pn(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + pn(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` &&
              (i += `[imagesizes="` + pn(n.imageSizes) + `"]`))
          : (i += `[href="` + pn(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = Pm(e);
            break;
          case `script`:
            a = Rm(e);
        }
        if (
          !(
            vm.has(a) ||
            ((e = w(
              {
                rel: `preload`,
                href: t === `image` && n && n.imageSrcSet ? void 0 : e,
                as: t,
              },
              n,
            )),
            vm.set(a, e),
            r.querySelector(i) !== null ||
              (t === `style` && r.querySelector(Fm(a))) ||
              (t === `script` && r.querySelector(zm(a))))
          )
        ) {
          var o = r.createElement(`link`);
          (np(o, `link`, e),
            t === `style` &&
              ((o[Bt] = !0),
              (o.onload = o.onerror =
                function () {
                  qt(o);
                })),
            Kt(o),
            r.head.appendChild(o));
        }
      }
    }
    function km(e, t) {
      xm.m(e, t);
      var n = wm;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i =
            `link[rel="modulepreload"][as="` +
            pn(r) +
            `"][href="` +
            pn(e) +
            `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Rm(e);
        }
        if (
          !vm.has(a) &&
          ((e = w({ rel: `modulepreload`, href: e }, t)),
          vm.set(a, e),
          n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(zm(a))) return;
          }
          ((r = n.createElement(`link`)),
            np(r, `link`, e),
            Kt(r),
            n.head.appendChild(r));
        }
      }
    }
    function Am(e, t, n) {
      xm.S(e, t, n);
      var r = wm;
      if (r && e) {
        var i = Gt(r).hoistableStyles,
          a = Pm(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(Fm(a)))) s.loading = 5;
          else {
            ((e = w({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
              (n = vm.get(a)) && Hm(e, n));
            var c = (o = r.createElement(`link`));
            (Kt(c),
              np(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                ((c.onload = e), (c.onerror = t));
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1;
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2;
              }),
              (s.loading |= 4),
              Vm(o, t, r));
          }
          ((o = { type: `stylesheet`, instance: o, count: 1, state: s }),
            i.set(a, o));
        }
      }
    }
    function jm(e, t) {
      xm.X(e, t);
      var n = wm;
      if (n && e) {
        var r = Gt(n).hoistableScripts,
          i = Rm(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(zm(i))),
          a ||
            ((e = w({ src: e, async: !0 }, t)),
            (t = vm.get(i)) && Um(e, t),
            (a = n.createElement(`script`)),
            Kt(a),
            np(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Mm(e, t) {
      xm.M(e, t);
      var n = wm;
      if (n && e) {
        var r = Gt(n).hoistableScripts,
          i = Rm(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(zm(i))),
          a ||
            ((e = w({ src: e, async: !0, type: `module` }, t)),
            (t = vm.get(i)) && Um(e, t),
            (a = n.createElement(`script`)),
            Kt(a),
            np(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Nm(e, t, n, r) {
      var a = (a = Me.current) ? bm(a) : null;
      if (!a) throw Error(i(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((n = Pm(n.href)),
              (t = Gt(a).hoistableStyles),
              (r = t.get(n)),
              r ||
                ((r = { type: `style`, instance: null, count: 0, state: null }),
                t.set(n, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = Pm(n.href);
            var o = Gt(a).hoistableStyles,
              s = o.get(e);
            if (
              (s ||
                ((a = a.ownerDocument || a),
                (s = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                o.set(e, s),
                (o = a.querySelector(Fm(e)))
                  ? o._p || ((s.instance = o), (s.state.loading = 5))
                  : ((o = vm.get(e)),
                    o ||
                      ((o = {
                        rel: `preload`,
                        as: `style`,
                        href: n.href,
                        crossOrigin: n.crossOrigin,
                        integrity: n.integrity,
                        media: n.media,
                        hrefLang: n.hrefLang,
                        referrerPolicy: n.referrerPolicy,
                      }),
                      vm.set(e, o)),
                    Lm(a, e, o, s.state))),
              t && r === null)
            )
              throw Error(i(528, ``));
            return s;
          }
          if (t && r !== null) throw Error(i(529, ``));
          return null;
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` &&
            t &&
            typeof t != `function` &&
            typeof t != `symbol`
              ? ((n = Rm(n)),
                (t = Gt(a).hoistableScripts),
                (r = t.get(n)),
                r ||
                  ((r = {
                    type: `script`,
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  t.set(n, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(i(444, e));
      }
    }
    function Pm(e) {
      return `href="` + pn(e) + `"`;
    }
    function Fm(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function Im(e) {
      return w({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function Lm(e, t, n, r) {
      if ((t = e.querySelector(`link[rel="preload"][as="style"][` + t + `]`))) {
        if (!0 !== t[Bt]) {
          r.loading = 1;
          return;
        }
      } else
        ((t = e.createElement(`link`)),
          (t[Bt] = !0),
          (t.onload = t.onerror = qt.bind(null, t)),
          np(t, `link`, n),
          Kt(t),
          e.head.appendChild(t));
      ((r.preload = t),
        t.addEventListener(`load`, function () {
          return (r.loading |= 1);
        }),
        t.addEventListener(`error`, function () {
          return (r.loading |= 2);
        }));
    }
    function Rm(e) {
      return `[src="` + pn(e) + `"]`;
    }
    function zm(e) {
      return `script[async]` + e;
    }
    function Bm(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + pn(n.href) + `"]`);
            if (r) return ((t.instance = r), Kt(r), r);
            var a = w({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              Kt(r),
              np(r, `style`, a),
              Vm(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            a = Pm(n.href);
            var o = e.querySelector(Fm(a));
            if (o) return ((t.state.loading |= 4), (t.instance = o), Kt(o), o);
            ((r = Im(n)),
              (a = vm.get(a)) && Hm(r, a),
              (o = (e.ownerDocument || e).createElement(`link`)),
              Kt(o));
            var s = o;
            return (
              (s._p = new Promise(function (e, t) {
                ((s.onload = e), (s.onerror = t));
              })),
              np(o, `link`, r),
              (t.state.loading |= 4),
              Vm(o, n.precedence, e),
              (t.instance = o)
            );
          case `script`:
            return (
              (o = Rm(n.src)),
              (a = e.querySelector(zm(o)))
                ? ((t.instance = a), Kt(a), a)
                : ((r = n),
                  (a = vm.get(o)) && ((r = w({}, n)), Um(r, a)),
                  (e = e.ownerDocument || e),
                  (a = e.createElement(`script`)),
                  Kt(a),
                  np(a, `link`, r),
                  e.head.appendChild(a),
                  (t.instance = a))
            );
          case `void`:
            return null;
          default:
            throw Error(i(443, t.type));
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Vm(r, n.precedence, e));
      return t.instance;
    }
    function Vm(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`,
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n),
          t.insertBefore(e, t.firstChild));
    }
    function Hm(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title));
    }
    function Um(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity));
    }
    var Wm = null;
    function Gm(e, t, n) {
      if (Wm === null) {
        var r = new Map(),
          i = (Wm = new Map());
        i.set(n, r);
      } else ((i = Wm), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)));
      if (r.has(e)) return r;
      for (
        r.set(e, null), n = n.getElementsByTagName(e), i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i];
        if (
          !(
            a[zt] ||
            a[Mt] ||
            (e === `link` && a.getAttribute(`rel`) === `stylesheet`)
          ) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          s ? s.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }
    function Km(e, t, n) {
      ((e = e.ownerDocument || e),
        e.head.insertBefore(
          n,
          t === `title` ? e.querySelector(`head > title`) : null,
        ));
    }
    function qm(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (
            typeof t.precedence != `string` ||
            typeof t.href != `string` ||
            t.href === ``
          )
            break;
          return !0;
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case `stylesheet`:
              return (
                (e = t.disabled),
                typeof t.precedence == `string` && e == null
              );
            default:
              return !0;
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0;
      }
      return !1;
    }
    function Jm(e, t) {
      return (
        e === `img` &&
        t.src != null &&
        t.src !== `` &&
        t.onLoad == null &&
        t.loading !== `lazy`
      );
    }
    function Ym(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function Xm(e) {
      return (
        (e.width || 100) *
        (e.height || 100) *
        (typeof devicePixelRatio == `number` ? devicePixelRatio : 1) *
        0.25
      );
    }
    function Zm(e, t) {
      typeof t.decode == `function` &&
        (e.imgCount++,
        t.complete || ((e.imgBytes += Xm(t)), e.suspenseyImages.push(t)),
        (e = rh.bind(e)),
        t.decode().then(e, e));
    }
    function Qm(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Pm(r.href),
            a = t.querySelector(Fm(i));
          if (a) {
            ((t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = nh.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              Kt(a));
            return;
          }
          ((a = t.ownerDocument || t),
            (r = Im(r)),
            (i = vm.get(i)) && Hm(r, i),
            (a = a.createElement(`link`)),
            Kt(a));
          var o = a;
          ((o._p = new Promise(function (e, t) {
            ((o.onload = e), (o.onerror = t));
          })),
            np(a, `link`, r),
            (n.instance = a));
        }
        (e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = nh.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n)));
      }
    }
    var $m = 0;
    function eh(e, t) {
      return (
        e.stylesheets && e.count === 0 && ah(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && ah(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  ((e.unsuspend = null), t());
                }
              }, 6e4 + t);
              0 < e.imgBytes && $m === 0 && ($m = 62500 * op());
              var i = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 &&
                      (e.stylesheets && ah(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend;
                    ((e.unsuspend = null), t());
                  }
                },
                (e.imgBytes > $m ? 50 : 800) + t,
              );
              return (
                (e.unsuspend = n),
                function () {
                  ((e.unsuspend = null), clearTimeout(r), clearTimeout(i));
                }
              );
            }
          : null
      );
    }
    function th(e) {
      if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
        if (e.stylesheets) ah(e, e.stylesheets);
        else if (e.unsuspend) {
          var t = e.unsuspend;
          ((e.unsuspend = null), t());
        }
      }
    }
    function nh() {
      (this.count--, th(this));
    }
    function rh() {
      (this.imgCount--, th(this));
    }
    var ih = null;
    function ah(e, t) {
      ((e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++,
          (ih = new Map()),
          t.forEach(oh, e),
          (ih = null),
          nh.call(e)));
    }
    function oh(e, t) {
      if (!(t.state.loading & 4)) {
        var n = ih.get(e);
        if (n) var r = n.get(null);
        else {
          ((n = new Map()), ih.set(e, n));
          for (
            var i = e.querySelectorAll(
                `link[data-precedence],style[data-precedence]`,
              ),
              a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        ((i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = nh.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e),
              e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4));
      }
    }
    var sh = {
      $$typeof: le,
      Provider: null,
      Consumer: null,
      _currentValue: Te,
      _currentValue2: Te,
      _threadCount: 0,
    };
    function ch(e, t, n, r, i, a, o, s, c) {
      ((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = xt(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = xt(0)),
        (this.hiddenUpdates = xt(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.transitionTypes = null),
        (this.incompleteTransitions = new Map()));
    }
    function lh(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new ch(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = Bi(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = Ra()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        xo(a),
        e
      );
    }
    function uh(e) {
      return e ? ((e = Ri), e) : Ri;
    }
    function dh(e, t, n, r, i, a) {
      ((i = uh(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = Co(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = wo(e, r, t)),
        n !== null && (Pd(n, e, t), To(n, e, t)));
    }
    function fh(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function ph(e, t) {
      (fh(e, t), (e = e.alternate) && fh(e, t));
    }
    function mh(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Fi(e, 67108864);
        (t !== null && Pd(t, e, 67108864), ph(e, 67108864));
      }
    }
    function hh(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = jd();
        t = Dt(t);
        var n = Fi(e, t);
        (n !== null && Pd(n, e, t), ph(e, t));
      }
    }
    var gh = !0;
    function _h(e, t, n, r) {
      var i = E.T;
      E.T = null;
      var a = D.p;
      try {
        ((D.p = 2), yh(e, t, n, r));
      } finally {
        ((D.p = a), (E.T = i));
      }
    }
    function vh(e, t, n, r) {
      var i = E.T;
      E.T = null;
      var a = D.p;
      try {
        ((D.p = 8), yh(e, t, n, r));
      } finally {
        ((D.p = a), (E.T = i));
      }
    }
    function yh(e, t, n, r) {
      if (gh) {
        var i = bh(r);
        if (i === null) (Kf(e, t, r, xh, n), Mh(e, r));
        else if (Ph(i, e, t, n, r)) r.stopPropagation();
        else if ((Mh(e, r), t & 4 && -1 < jh.indexOf(e))) {
          for (; i !== null; ) {
            var a = Ut(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (
                    ((a = a.stateNode), a.current.memoizedState.isDehydrated)
                  ) {
                    var o = ht(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o; ) {
                        var c = 1 << (31 - ct(o));
                        ((s.entanglements[1] |= c), (o &= ~c));
                      }
                      (Ef(a), !(W & 6) && ((_d = Xe() + 500), Df(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((s = Fi(a, 2)), s !== null && Pd(s, a, 2), zd(), ph(a, 2));
              }
            if (((a = bh(r)), a === null && Kf(e, t, r, xh, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else Kf(e, t, r, null, n);
      }
    }
    function bh(e) {
      return ((e = An(e)), Sh(e));
    }
    var xh = null;
    function Sh(e) {
      if (((xh = null), (e = Ht(e)), e !== null)) {
        var t = o(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (((e = s(t)), e !== null)) return e;
            e = null;
          } else if (n === 31) {
            if (((e = c(t)), e !== null)) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ((xh = e), null);
    }
    function Ch(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `fullscreenerror`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `resize`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (Ze()) {
            case Qe:
              return 2;
            case $e:
              return 8;
            case et:
            case tt:
              return 32;
            case nt:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var wh = !1,
      Th = null,
      Eh = null,
      Dh = null,
      Oh = new Map(),
      kh = new Map(),
      Ah = [],
      jh =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `,
        );
    function Mh(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          Th = null;
          break;
        case `dragenter`:
        case `dragleave`:
          Eh = null;
          break;
        case `mouseover`:
        case `mouseout`:
          Dh = null;
          break;
        case `pointerover`:
        case `pointerout`:
          Oh.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          kh.delete(t.pointerId);
      }
    }
    function Nh(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = Ut(t)), t !== null && mh(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function Ph(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((Th = Nh(Th, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((Eh = Nh(Eh, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((Dh = Nh(Dh, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (Oh.set(a, Nh(Oh.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return (
            (a = i.pointerId),
            kh.set(a, Nh(kh.get(a) || null, e, t, n, r, i)),
            !0
          );
      }
      return !1;
    }
    function Fh(e) {
      var t = Ht(e.target);
      if (t !== null) {
        var n = o(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = s(n)), t !== null)) {
              ((e.blockedOn = t),
                At(e.priority, function () {
                  hh(n);
                }));
              return;
            }
          } else if (t === 31) {
            if (((t = c(n)), t !== null)) {
              ((e.blockedOn = t),
                At(e.priority, function () {
                  hh(n);
                }));
              return;
            }
          } else if (
            t === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Ih(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = bh(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((kn = r), n.target.dispatchEvent(r), (kn = null));
        } else return ((t = Ut(n)), t !== null && mh(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function Lh(e, t, n) {
      Ih(e) && n.delete(t);
    }
    function Rh() {
      ((wh = !1),
        Th !== null && Ih(Th) && (Th = null),
        Eh !== null && Ih(Eh) && (Eh = null),
        Dh !== null && Ih(Dh) && (Dh = null),
        Oh.forEach(Lh),
        kh.forEach(Lh));
    }
    function zh(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        wh ||
          ((wh = !0),
          t.unstable_scheduleCallback(t.unstable_NormalPriority, Rh)));
    }
    var Bh = null;
    function Vh(e) {
      Bh !== e &&
        ((Bh = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          Bh === e && (Bh = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (Sh(r || n) === null) continue;
              break;
            }
            var a = Ut(n);
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              rc(
                a,
                { pending: !0, data: i, method: n.method, action: r },
                r,
                i,
              ));
          }
        }));
    }
    function Hh(e) {
      function t(t) {
        return zh(t, e);
      }
      (Th !== null && zh(Th, e),
        Eh !== null && zh(Eh, e),
        Dh !== null && zh(Dh, e),
        Oh.forEach(t),
        kh.forEach(t));
      for (var n = 0; n < Ah.length; n++) {
        var r = Ah[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < Ah.length && ((n = Ah[0]), n.blockedOn === null); )
        (Fh(n), n.blockedOn === null && Ah.shift());
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[Nt] || null;
          if (typeof a == `function`) o || Vh(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[Nt] || null))) s = o.formAction;
              else if (Sh(i) !== null) continue;
            } else s = o.action;
            (typeof s == `function`
              ? (n[r + 1] = s)
              : (n.splice(r, 3), (r -= 3)),
              Vh(n));
          }
        }
    }
    function Uh() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e);
              });
            },
            focusReset: `manual`,
            scroll: `manual`,
          });
      }
      function t() {
        (i !== null && (i(), (i = null)), r || setTimeout(n, 20));
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            e.url != null &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            });
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null;
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            ((r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null)));
          }
        );
      }
    }
    function Wh(e) {
      this._internalRoot = e;
    }
    ((Gh.prototype.render = Wh.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(i(409));
        var n = t.current;
        dh(n, jd(), e, t, null, null);
      }),
      (Gh.prototype.unmount = Wh.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (dh(e.current, 2, null, e, null, null), zd(), (t[Pt] = null));
          }
        }));
    function Gh(e) {
      this._internalRoot = e;
    }
    Gh.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = kt();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Ah.length && t !== 0 && t < Ah[n].priority; n++);
        (Ah.splice(n, 0, e), n === 0 && Fh(e));
      }
    };
    var Kh = n.version;
    if (Kh !== `19.3.1`) throw Error(i(527, Kh, `19.3.1`));
    D.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(i(188))
          : ((e = Object.keys(e).join(`,`)), Error(i(268, e)));
      return (
        (e = u(t)),
        (e = e === null ? null : f(e)),
        (e = e === null ? null : e.stateNode),
        e
      );
    };
    var qh = {
      bundleType: 0,
      version: `19.3.1`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: E,
      reconcilerVersion: `19.3.1`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Jh.isDisabled && Jh.supportsFiber)
        try {
          ((at = Jh.inject(qh)), (ot = Jh));
        } catch {}
    }
    e.createRoot = function (e, t) {
      if (!a(e)) throw Error(i(299));
      var n = !1,
        r = ``,
        o = Ec,
        s = Dc,
        c = Oc;
      return (
        t != null &&
          (!0 === t.unstable_strictMode && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
          t.onCaughtError !== void 0 && (s = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = lh(e, 1, !1, null, null, n, r, null, o, s, c, Uh)),
        (e[Pt] = t.current),
        Wf(e),
        new Wh(t)
      );
    };
  }),
  _ = o((e, t) => {
    function n() {
      if (
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = g()));
  }),
  v = l(d(), 1),
  y = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,
  b = /^[\\/]{2}/;
function x(e, t) {
  return t + e.replace(/\\/g, `/`);
}
var ee = `popstate`;
function te(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `pathname` in e &&
    `search` in e &&
    `hash` in e &&
    `state` in e &&
    `key` in e
  );
}
function ne(e = {}) {
  function t(e, t) {
    let n = t.state?.masked,
      { pathname: r, search: i, hash: a } = n || e.location;
    return ie(
      ``,
      { pathname: r, search: i, hash: a },
      (t.state && t.state.usr) || null,
      (t.state && t.state.key) || `default`,
      n
        ? {
            pathname: e.location.pathname,
            search: e.location.search,
            hash: e.location.hash,
          }
        : void 0,
    );
  }
  function n(e, t) {
    return typeof t == `string` ? t : ae(t);
  }
  return oe(t, n, null, e);
}
function S(e, t) {
  if (e === !1 || e == null) throw Error(t);
}
function C(e, t) {
  if (!e) {
    typeof console < `u` && console.warn(t);
    try {
      throw Error(t);
    } catch {}
  }
}
function w() {
  return Math.random().toString(36).substring(2, 10);
}
function re(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t,
    masked: e.mask
      ? { pathname: e.pathname, search: e.search, hash: e.hash }
      : void 0,
  };
}
function ie(e, t, n = null, r, i) {
  return {
    pathname: typeof e == `string` ? e : e.pathname,
    search: ``,
    hash: ``,
    ...(typeof t == `string` ? T(t) : t),
    state: n,
    key: (t && t.key) || r || w(),
    mask: i,
  };
}
function ae({ pathname: e = `/`, search: t = ``, hash: n = `` }) {
  return (
    t && t !== `?` && (e += t.charAt(0) === `?` ? t : `?` + t),
    n && n !== `#` && (e += n.charAt(0) === `#` ? n : `#` + n),
    e
  );
}
function T(e) {
  let t = {};
  if (e) {
    let n = e.indexOf(`#`);
    n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
    let r = e.indexOf(`?`);
    (r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function oe(e, t, n, r = {}) {
  let { window: i = document.defaultView, v5Compat: a = !1 } = r,
    o = i.history,
    s = `POP`,
    c = null,
    l = u();
  l ?? ((l = 0), o.replaceState({ ...o.state, idx: l }, ``));
  function u() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    s = `POP`;
    let e = u(),
      t = e == null ? null : e - l;
    ((l = e), c && c({ action: s, location: h.location, delta: t }));
  }
  function f(e, t) {
    s = `PUSH`;
    let r = te(e) ? e : ie(h.location, e, t);
    (n && n(r, e), (l = u() + 1));
    let d = re(r, l),
      f = h.createHref(r.mask || r);
    try {
      o.pushState(d, ``, f);
    } catch (e) {
      if (e instanceof DOMException && e.name === `DataCloneError`) throw e;
      i.location.assign(f);
    }
    a && c && c({ action: s, location: h.location, delta: 1 });
  }
  function p(e, t) {
    s = `REPLACE`;
    let r = te(e) ? e : ie(h.location, e, t);
    (n && n(r, e), (l = u()));
    let i = re(r, l),
      d = h.createHref(r.mask || r);
    (o.replaceState(i, ``, d),
      a && c && c({ action: s, location: h.location, delta: 0 }));
  }
  function m(e) {
    return se(i, e);
  }
  let h = {
    get action() {
      return s;
    },
    get location() {
      return e(i, o);
    },
    listen(e) {
      if (c) throw Error(`A history only accepts one active listener`);
      return (
        i.addEventListener(ee, d),
        (c = e),
        () => {
          (i.removeEventListener(ee, d), (c = null));
        }
      );
    },
    createHref(e) {
      return t(i, e);
    },
    createURL: m,
    encodeLocation(e) {
      let t = m(e);
      return { pathname: t.pathname, search: t.search, hash: t.hash };
    },
    push: f,
    replace: p,
    go(e) {
      return o.go(e);
    },
  };
  return h;
}
function se(e, t, n = !1) {
  let r = `http://localhost`;
  (e &&
    (r = e.location.origin === `null` ? e.location.href : e.location.origin),
    S(r, `No window.location.(origin|href) available to create URL`));
  let i = typeof t == `string` ? t : ae(t);
  return (
    (i = i.replace(/ $/, `%20`)),
    !n && b.test(i) && (i = r + i),
    new URL(i, r)
  );
}
function ce(e, t, n = `/`) {
  return le(e, t, n, !1);
}
function le(e, t, n, r, i) {
  let a = Ee((typeof t == `string` ? T(t) : t).pathname || `/`, n);
  if (a == null) return null;
  let o = i ?? ue(e),
    s = null,
    c = Te(a);
  for (let e = 0; s == null && e < o.length; ++e) s = Ce(o[e], c, r);
  return s;
}
function ue(e) {
  let t = de(e);
  return (pe(t), t);
}
function de(e, t = [], n = [], r = ``, i = !1) {
  let a = (e, a, o = i, s) => {
    let c = {
      relativePath: s === void 0 ? e.path || `` : s,
      caseSensitive: e.caseSensitive === !0,
      childrenIndex: a,
      route: e,
    };
    if (c.relativePath.startsWith(`/`)) {
      if (!c.relativePath.startsWith(r) && o) return;
      (S(
        c.relativePath.startsWith(r),
        `Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (c.relativePath = c.relativePath.slice(r.length)));
    }
    let l = Ne([r, c.relativePath]),
      u = n.concat(c);
    (e.children &&
      e.children.length > 0 &&
      (S(
        e.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${l}".`,
      ),
      de(e.children, t, u, l, o)),
      (e.path != null || e.index) &&
        t.push({
          path: l,
          score: xe(l, e.index),
          routesMeta: u.map((e, t) => {
            let [n, r] = D(e.relativePath, e.caseSensitive, t === u.length - 1);
            return { ...e, matcher: n, compiledParams: r };
          }),
        }));
  };
  return (
    e.forEach((e, t) => {
      if (e.path === `` || !e.path?.includes(`?`)) a(e, t);
      else for (let n of fe(e.path)) a(e, t, !0, n);
    }),
    t
  );
}
function fe(e) {
  let t = e.split(`/`);
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith(`?`),
    a = n.replace(/\?$/, ``);
  if (r.length === 0) return i ? [a, ``] : [a];
  let o = fe(r.join(`/`)),
    s = [];
  return (
    s.push(...o.map((e) => (e === `` ? a : [a, e].join(`/`)))),
    i && s.push(...o),
    s.map((t) => (e.startsWith(`/`) && t === `` ? `/` : t))
  );
}
function pe(e) {
  e.sort((e, t) =>
    e.score === t.score
      ? Se(
          e.routesMeta.map((e) => e.childrenIndex),
          t.routesMeta.map((e) => e.childrenIndex),
        )
      : t.score - e.score,
  );
}
var me = /^:[\w-]+$/,
  he = 3,
  ge = 2,
  _e = 1,
  ve = 10,
  ye = -2,
  be = (e) => e === `*`;
function xe(e, t) {
  let n = e.split(`/`),
    r = n.length;
  return (
    n.some(be) && (r += ye),
    t && (r += ge),
    n
      .filter((e) => !be(e))
      .reduce((e, t) => e + (me.test(t) ? he : t === `` ? _e : ve), r)
  );
}
function Se(e, t) {
  return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ce(e, t, n = !1) {
  let { routesMeta: r } = e,
    i = {},
    a = `/`,
    o = [];
  for (let e = 0; e < r.length; ++e) {
    let s = r[e],
      c = e === r.length - 1,
      l = a === `/` ? t : t.slice(a.length) || `/`,
      u = { path: s.relativePath, caseSensitive: s.caseSensitive, end: c },
      d =
        s.matcher && s.compiledParams
          ? E(u, l, s.matcher, s.compiledParams)
          : we(u, l),
      f = s.route;
    if (
      (!d &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (d = we(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          l,
        )),
      !d)
    )
      return null;
    (Object.assign(i, d.params),
      o.push({
        params: i,
        pathname: Ne([a, d.pathname]),
        pathnameBase: Fe(Ne([a, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== `/` && (a = Ne([a, d.pathnameBase])));
  }
  return o;
}
function we(e, t) {
  typeof e == `string` && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = D(e.path, e.caseSensitive, e.end);
  return E(e, t, n, r);
}
function E(e, t, n, r) {
  let i = t.match(n);
  if (!i) return null;
  let a = i[0],
    o = Pe(a, 1),
    s = i.slice(1);
  return {
    params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
      if (t === `*`) {
        let e = s[r] || ``;
        o = Pe(a.slice(0, a.length - e.length), 1);
      }
      let i = s[r];
      return ((e[t] = n && !i ? void 0 : (i || ``).replace(/%2F/g, `/`)), e);
    }, {}),
    pathname: a,
    pathnameBase: o,
    pattern: e,
  };
}
function D(e, t = !1, n = !0) {
  C(
    e === `*` || !e.endsWith(`*`) || e.endsWith(`/*`),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, `/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, `/*`)}".`,
  );
  let r = [],
    i =
      `^` +
      e
        .replace(/\/*\*?$/, ``)
        .replace(/^\/*/, `/`)
        .replace(/[\\.*+^${}|()[\]]/g, `\\$&`)
        .replace(/\/:([\w-]+)(\?)?/g, (e, t, n, i, a) => {
          if ((r.push({ paramName: t, isOptional: n != null }), n)) {
            let t = a.charAt(i + e.length);
            return t && t !== `/` ? `/([^\\/]*)` : `(?:/([^\\/]*))?`;
          }
          return `/([^\\/]+)`;
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, `(/$1)?$2`);
  return (
    e.endsWith(`*`)
      ? (r.push({ paramName: `*` }),
        (i += e === `*` || e === `/*` ? `(.*)$` : `(?:\\/(.+)|\\/*)$`))
      : n
        ? (i += `\\/*$`)
        : e !== `` && e !== `/` && (i += `(?:(?=\\/|$))`),
    [new RegExp(i, t ? void 0 : `i`), r]
  );
}
function Te(e) {
  try {
    return e
      .split(`/`)
      .map((e) => decodeURIComponent(e).replace(/\//g, `%2F`))
      .join(`/`);
  } catch (t) {
    return (
      C(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
      ),
      e
    );
  }
}
function Ee(e, t) {
  if (t === `/`) return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith(`/`) ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== `/` ? null : e.slice(n) || `/`;
}
function De(e, t = `/`) {
  let {
      pathname: n,
      search: r = ``,
      hash: i = ``,
    } = typeof e == `string` ? T(e) : e,
    a;
  return (
    n
      ? ((n = Me(n)),
        (a =
          n.startsWith(`/`) || n.startsWith(`\\`)
            ? Oe(n.substring(1), `/`)
            : Oe(n, t)))
      : (a = t),
    { pathname: a, search: Ie(r), hash: Le(i) }
  );
}
function Oe(e, t) {
  let n = Pe(t).split(`/`);
  return (
    e.split(`/`).forEach((e) => {
      e === `..` ? n.length > 1 && n.pop() : e !== `.` && n.push(e);
    }),
    n.length > 1 ? n.join(`/`) : `/`
  );
}
function ke(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function O(e) {
  return e.filter(
    (e, t) => t === 0 || (e.route.path && e.route.path.length > 0),
  );
}
function Ae(e) {
  let t = O(e);
  return t.map((e, n) => (n === t.length - 1 ? e.pathname : e.pathnameBase));
}
function je(e, t, n, r = !1) {
  let i;
  typeof e == `string`
    ? (i = T(e))
    : ((i = { ...e }),
      S(
        !i.pathname || !i.pathname.includes(`?`),
        ke(`?`, `pathname`, `search`, i),
      ),
      S(
        !i.pathname || !i.pathname.includes(`#`),
        ke(`#`, `pathname`, `hash`, i),
      ),
      S(!i.search || !i.search.includes(`#`), ke(`#`, `search`, `hash`, i)));
  let a = e === `` || i.pathname === ``,
    o = a ? `/` : i.pathname,
    s;
  if (o == null) s = n;
  else {
    let e = t.length - 1;
    if (!r && o.startsWith(`..`)) {
      let t = o.split(`/`);
      for (; t[0] === `..`; ) (t.shift(), --e);
      i.pathname = t.join(`/`);
    }
    s = e >= 0 ? t[e] : `/`;
  }
  let c = De(i, s),
    l = o && o !== `/` && o.endsWith(`/`),
    u = (a || o === `.`) && n.endsWith(`/`);
  return (!c.pathname.endsWith(`/`) && (l || u) && (c.pathname += `/`), c);
}
var Me = (e) => e.replace(/[\\/]{2,}/g, `/`),
  Ne = (e) => Me(e.join(`/`));
function Pe(e, t = 0) {
  let n = e.length;
  for (; n > t && e.charCodeAt(n - 1) === 47; ) n--;
  return n === e.length ? e : e.slice(0, n);
}
var Fe = (e) => Pe(e).replace(/^\/*/, `/`),
  Ie = (e) => (!e || e === `?` ? `` : e.startsWith(`?`) ? e : `?` + e),
  Le = (e) => (!e || e === `#` ? `` : e.startsWith(`#`) ? e : `#` + e),
  Re = class {
    constructor(e, t, n, r = !1) {
      ((this.status = e),
        (this.statusText = t || ``),
        (this.internal = r),
        n instanceof Error
          ? ((this.data = n.toString()), (this.error = n))
          : (this.data = n));
    }
  };
function ze(e) {
  return (
    e != null &&
    typeof e.status == `number` &&
    typeof e.statusText == `string` &&
    typeof e.internal == `boolean` &&
    `data` in e
  );
}
function Be(e) {
  return Ne(e.map((e) => e.route.path).filter(Boolean)) || `/`;
}
var Ve =
  typeof window < `u` &&
  window.document !== void 0 &&
  window.document.createElement !== void 0;
function He(e, t) {
  let n = e;
  if (typeof n != `string` || !y.test(n))
    return { absoluteURL: void 0, isExternal: !1, to: n };
  let r = n,
    i = !1;
  if (Ve)
    try {
      let e = new URL(window.location.href),
        r = b.test(n) ? new URL(x(n, e.protocol)) : new URL(n),
        a = Ee(r.pathname, t);
      r.origin === e.origin && a != null
        ? (n = a + r.search + r.hash)
        : (i = !0);
    } catch {
      C(
        !1,
        `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: r, isExternal: i, to: n };
}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
var Ue = new URL(`http://localhost`);
function We(e) {
  if (e.createURL) return e.createURL(`/`);
  try {
    return new URL(e.createHref(`/`), Ue);
  } catch {
    return Ue;
  }
}
function Ge(e, t) {
  return (
    e.origin === t.origin &&
    (e.origin !== `null` || (e.protocol === t.protocol && e.host === t.host))
  );
}
function Ke(e, t) {
  if (e.startsWith(`//`)) return !0;
  let n = t.protocol.toLowerCase();
  return e.toLowerCase().startsWith(n)
    ? t.host === `` || e.slice(n.length).startsWith(`//`)
    : !1;
}
function qe(e, t, n, r) {
  let i = null;
  try {
    i = e == null ? null : new URL(e, n);
  } catch {}
  let a = new URL(t, n),
    o = i != null && !Ge(i, n),
    s = !Ge(a, n);
  if (r === `reject`) {
    if (o || s) throw Error(`External navigation is not allowed`);
  } else if (s && (i == null || !Ke(e, i) || !Ge(i, a)))
    throw Error(`External navigation is not allowed`);
}
var Je = [`POST`, `PUT`, `PATCH`, `DELETE`];
new Set(Je);
var Ye = [`GET`, ...Je];
new Set(Ye);
var Xe = [
  `about:`,
  `blob:`,
  `chrome:`,
  `chrome-untrusted:`,
  `content:`,
  `data:`,
  `devtools:`,
  `file:`,
  `filesystem:`,
  `javascript:`,
];
function Ze(e) {
  try {
    return Xe.includes(new URL(e).protocol);
  } catch {
    return !1;
  }
}
var Qe = v.createContext(null);
Qe.displayName = `DataRouter`;
var $e = v.createContext(null);
$e.displayName = `DataRouterState`;
var et = v.createContext(!1);
function tt() {
  return v.useContext(et);
}
var nt = v.createContext({ isTransitioning: !1 });
nt.displayName = `ViewTransition`;
var rt = v.createContext(new Map());
rt.displayName = `Fetchers`;
var it = v.createContext(null);
it.displayName = `Await`;
var at = v.createContext(null);
at.displayName = `Navigation`;
var ot = v.createContext(null);
ot.displayName = `Location`;
var st = v.createContext({ outlet: null, matches: [], isDataRoute: !1 });
st.displayName = `Route`;
var ct = v.createContext(null);
ct.displayName = `RouteError`;
var lt = `REACT_ROUTER_ERROR`,
  ut = `REDIRECT`,
  dt = `ROUTE_ERROR_RESPONSE`;
function ft(e) {
  if (e.startsWith(`${lt}:${ut}:{`))
    try {
      let t = JSON.parse(e.slice(28));
      if (
        typeof t == `object` &&
        t &&
        typeof t.status == `number` &&
        typeof t.statusText == `string` &&
        typeof t.location == `string` &&
        typeof t.reloadDocument == `boolean` &&
        typeof t.replace == `boolean`
      )
        return t;
    } catch {}
}
function pt(e) {
  if (e.startsWith(`${lt}:${dt}:{`))
    try {
      let t = JSON.parse(e.slice(40));
      if (
        typeof t == `object` &&
        t &&
        typeof t.status == `number` &&
        typeof t.statusText == `string`
      )
        return new Re(t.status, t.statusText, t.data);
    } catch {}
}
function mt(e, { relative: t } = {}) {
  S(ht(), `useHref() may be used only in the context of a <Router> component.`);
  let { basename: n, navigator: r } = v.useContext(at),
    { hash: i, pathname: a, search: o } = wt(e, { relative: t }),
    s = a;
  return (
    n !== `/` && (s = a === `/` ? n : Ne([n, a])),
    r.createHref({ pathname: s, search: o, hash: i })
  );
}
function ht() {
  return v.useContext(ot) != null;
}
function gt() {
  return (
    S(
      ht(),
      `useLocation() may be used only in the context of a <Router> component.`,
    ),
    v.useContext(ot).location
  );
}
var _t = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
function vt(e) {
  v.useContext(at).static || v.useLayoutEffect(e);
}
function yt() {
  let { isDataRoute: e } = v.useContext(st);
  return e ? Vt() : bt();
}
function bt() {
  S(
    ht(),
    `useNavigate() may be used only in the context of a <Router> component.`,
  );
  let e = v.useContext(Qe),
    { basename: t, navigator: n } = v.useContext(at),
    { matches: r } = v.useContext(st),
    { pathname: i } = gt(),
    a = JSON.stringify(Ae(r)),
    o = v.useRef(!1);
  return (
    vt(() => {
      o.current = !0;
    }),
    v.useCallback(
      (r, s = {}) => {
        if ((C(o.current, _t), !o.current)) return;
        if (typeof r == `number`) {
          n.go(r);
          return;
        }
        let c = je(r, JSON.parse(a), i, s.relative === `path`);
        (e == null &&
          t !== `/` &&
          (c.pathname = c.pathname === `/` ? t : Ne([t, c.pathname])),
          qe(
            typeof r == `string` ? r : ae(r),
            n.createHref(c),
            We(n),
            `reject`,
          ),
          (s.replace ? n.replace : n.push)(c, s.state, s));
      },
      [t, n, a, i, e],
    )
  );
}
var xt = v.createContext(null);
function St(e) {
  let t = v.useContext(st).outlet;
  return v.useMemo(
    () => t && v.createElement(xt.Provider, { value: e }, t),
    [t, e],
  );
}
function Ct() {
  let { matches: e } = v.useContext(st);
  return e[e.length - 1]?.params ?? {};
}
function wt(e, { relative: t } = {}) {
  let { matches: n } = v.useContext(st),
    { pathname: r } = gt(),
    i = JSON.stringify(Ae(n));
  return v.useMemo(() => je(e, JSON.parse(i), r, t === `path`), [e, i, r, t]);
}
function Tt(e, t) {
  return Et(e, t);
}
function Et(e, t, n) {
  S(
    ht(),
    `useRoutes() may be used only in the context of a <Router> component.`,
  );
  let { navigator: r } = v.useContext(at),
    { matches: i } = v.useContext(st),
    a = i[i.length - 1],
    o = a ? a.params : {},
    s = a ? a.pathname : `/`,
    c = a ? a.pathnameBase : `/`,
    l = a && a.route;
  {
    let e = (l && l.path) || ``;
    Ut(
      s,
      !l || e.endsWith(`*`) || e.endsWith(`*?`),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e === `/` ? `*` : `${e}/*`}">.`,
    );
  }
  let u = gt(),
    d;
  if (t) {
    let e = typeof t == `string` ? T(t) : t;
    (S(
      c === `/` || e.pathname?.startsWith(c),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`,
    ),
      (d = e));
  } else d = u;
  let f = d.pathname || `/`,
    p = f;
  if (c !== `/`) {
    let e = c.replace(/^\//, ``).split(`/`);
    p = `/` + f.replace(/^\//, ``).split(`/`).slice(e.length).join(`/`);
  }
  let m =
    n && n.state.matches.length
      ? n.state.matches.map((e) =>
          Object.assign(e, { route: n.manifest[e.route.id] || e.route }),
        )
      : ce(e, { pathname: p });
  (C(
    l || m != null,
    `No routes matched location "${d.pathname}${d.search}${d.hash}" `,
  ),
    C(
      m == null ||
        m[m.length - 1].route.element !== void 0 ||
        m[m.length - 1].route.Component !== void 0 ||
        m[m.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let h = Nt(
    m &&
      m.map((e) =>
        Object.assign({}, e, {
          params: Object.assign({}, o, e.params),
          pathname: Ne([
            c,
            r.encodeLocation
              ? r.encodeLocation(
                  e.pathname
                    .replace(/%/g, `%25`)
                    .replace(/\?/g, `%3F`)
                    .replace(/#/g, `%23`),
                ).pathname
              : e.pathname,
          ]),
          pathnameBase:
            e.pathnameBase === `/`
              ? c
              : Ne([
                  c,
                  r.encodeLocation
                    ? r.encodeLocation(
                        e.pathnameBase
                          .replace(/%/g, `%25`)
                          .replace(/\?/g, `%3F`)
                          .replace(/#/g, `%23`),
                      ).pathname
                    : e.pathnameBase,
                ]),
        }),
      ),
    i,
    n,
  );
  return t && h
    ? v.createElement(
        ot.Provider,
        {
          value: {
            location: {
              pathname: `/`,
              search: ``,
              hash: ``,
              state: null,
              key: `default`,
              mask: void 0,
              ...d,
            },
            navigationType: `POP`,
          },
        },
        h,
      )
    : h;
}
function Dt() {
  let e = Bt(),
    t = ze(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = `rgba(200,200,200, 0.5)`,
    i = { padding: `0.5rem`, backgroundColor: r },
    a = { padding: `2px 4px`, backgroundColor: r },
    o = null;
  return (
    console.error(`Error handled by React Router default ErrorBoundary:`, e),
    (o = v.createElement(
      v.Fragment,
      null,
      v.createElement(`p`, null, `💿 Hey developer 👋`),
      v.createElement(
        `p`,
        null,
        `You can provide a way better UX than this when your app throws errors by providing your own `,
        v.createElement(`code`, { style: a }, `ErrorBoundary`),
        ` or`,
        ` `,
        v.createElement(`code`, { style: a }, `errorElement`),
        ` prop on your route.`,
      ),
    )),
    v.createElement(
      v.Fragment,
      null,
      v.createElement(`h2`, null, `Unexpected Application Error!`),
      v.createElement(`h3`, { style: { fontStyle: `italic` } }, t),
      n ? v.createElement(`pre`, { style: i }, n) : null,
      o,
    )
  );
}
var Ot = v.createElement(Dt, null),
  kt = class extends v.Component {
    constructor(e) {
      (super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        }));
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== `idle` && e.revalidation === `idle`)
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error === void 0 ? t.error : e.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      this.props.onError
        ? this.props.onError(e, t)
        : console.error(
            `React Router caught the following error during render`,
            e,
          );
    }
    render() {
      let e = this.state.error;
      if (
        this.context &&
        typeof e == `object` &&
        e &&
        `digest` in e &&
        typeof e.digest == `string`
      ) {
        let t = pt(e.digest);
        t && (e = t);
      }
      let t =
        e === void 0
          ? this.props.children
          : v.createElement(
              st.Provider,
              { value: this.props.routeContext },
              v.createElement(ct.Provider, {
                value: e,
                children: this.props.component,
              }),
            );
      return this.context ? v.createElement(jt, { error: e }, t) : t;
    }
  };
kt.contextType = et;
var At = new WeakMap();
function jt({ children: e, error: t }) {
  let { basename: n, navigator: r } = v.useContext(at);
  if (
    typeof t == `object` &&
    t &&
    `digest` in t &&
    typeof t.digest == `string`
  ) {
    let e = ft(t.digest);
    if (e) {
      let i = At.get(t);
      if (i) throw i;
      let a = He(e.location, n),
        o = a.absoluteURL || a.to;
      if ((qe(e.location, o, We(r), `allow-explicit`), Ze(o)))
        throw Error(`Invalid redirect location`);
      if (Ve && !At.get(t)) {
        if (a.isExternal || e.reloadDocument) window.location.href = o;
        else {
          let n = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(a.to, {
              replace: e.replace,
            }),
          );
          throw (At.set(t, n), n);
        }
      }
      return v.createElement(`meta`, {
        httpEquiv: `refresh`,
        content: `0;url=${o}`,
      });
    }
  }
  return e;
}
function Mt({ routeContext: e, match: t, children: n }) {
  let r = v.useContext(Qe);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    v.createElement(st.Provider, { value: e }, n)
  );
}
function Nt(e, t = [], n) {
  let r = n?.state;
  if (e == null) {
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else return null;
  }
  let i = e,
    a = r?.errors;
  if (a != null) {
    let e = i.findIndex((e) => e.route.id && a?.[e.route.id] !== void 0);
    (S(
      e >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`,
    ),
      (i = i.slice(0, Math.min(i.length, e + 1))));
  }
  let o = !1,
    s = -1;
  if (n && r) {
    o = r.renderFallback;
    for (let e = 0; e < i.length; e++) {
      let t = i[e];
      if (
        ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (s = e),
        t.route.id)
      ) {
        let { loaderData: e, errors: a } = r,
          c =
            t.route.loader &&
            !e.hasOwnProperty(t.route.id) &&
            (!a || a[t.route.id] === void 0);
        if (t.route.lazy || c) {
          (n.isStatic && (o = !0), (i = s >= 0 ? i.slice(0, s + 1) : [i[0]]));
          break;
        }
      }
    }
  }
  let c = n?.onError,
    l =
      r && c
        ? (e, t) => {
            c(e, {
              location: r.location,
              params: r.matches?.[0]?.params ?? {},
              pattern: Be(r.matches),
              errorInfo: t,
            });
          }
        : void 0;
  return i.reduceRight((e, n, c) => {
    let u,
      d = !1,
      f = null,
      p = null;
    r &&
      ((u = a && n.route.id ? a[n.route.id] : void 0),
      (f = n.route.errorElement || Ot),
      o &&
        (s < 0 && c === 0
          ? (Ut(
              `route-fallback`,
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (d = !0),
            (p = null))
          : s === c &&
            ((d = !0), (p = n.route.hydrateFallbackElement || null))));
    let m = t.concat(i.slice(0, c + 1)),
      h = () => {
        let t;
        return (
          (t = u
            ? f
            : d
              ? p
              : n.route.Component
                ? v.createElement(n.route.Component, null)
                : n.route.element
                  ? n.route.element
                  : e),
          v.createElement(Mt, {
            match: n,
            routeContext: { outlet: e, matches: m, isDataRoute: r != null },
            children: t,
          })
        );
      };
    return r && (n.route.ErrorBoundary || n.route.errorElement || c === 0)
      ? v.createElement(kt, {
          location: r.location,
          revalidation: r.revalidation,
          component: f,
          error: u,
          children: h(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
          onError: l,
        })
      : h();
  }, null);
}
function Pt(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ft(e) {
  let t = v.useContext(Qe);
  return (S(t, Pt(e)), t);
}
function It(e) {
  let t = v.useContext($e);
  return (S(t, Pt(e)), t);
}
function Lt(e) {
  let t = v.useContext(st);
  return (S(t, Pt(e)), t);
}
function Rt(e) {
  let t = Lt(e),
    n = t.matches[t.matches.length - 1];
  return (
    S(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
  );
}
function zt() {
  return Rt(`useRouteId`);
}
function Bt() {
  let e = v.useContext(ct),
    t = It(`useRouteError`),
    n = Rt(`useRouteError`);
  return e === void 0 ? t.errors?.[n] : e;
}
function Vt() {
  let { router: e } = Ft(`useNavigate`),
    t = Rt(`useNavigate`),
    n = v.useRef(!1);
  return (
    vt(() => {
      n.current = !0;
    }),
    v.useCallback(
      async (r, i = {}) => {
        (C(n.current, _t),
          n.current &&
            (typeof r == `number`
              ? await e.navigate(r)
              : await e.navigate(r, { fromRouteId: t, ...i })));
      },
      [e, t],
    )
  );
}
var Ht = {};
function Ut(e, t, n) {
  !t && !Ht[e] && ((Ht[e] = !0), C(!1, n));
}
v.memo(Wt);
function Wt({
  routes: e,
  manifest: t,
  future: n,
  state: r,
  isStatic: i,
  onError: a,
}) {
  return Et(e, void 0, {
    manifest: t,
    state: r,
    isStatic: i,
    onError: a,
    future: n,
  });
}
function Gt({ to: e, replace: t, state: n, relative: r }) {
  S(
    ht(),
    `<Navigate> may be used only in the context of a <Router> component.`,
  );
  let { static: i, navigator: a } = v.useContext(at);
  C(
    !i,
    `<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`,
  );
  let { matches: o } = v.useContext(st),
    { pathname: s } = gt(),
    c = yt(),
    l = je(e, Ae(o), s, r === `path`);
  qe(typeof e == `string` ? e : ae(e), a.createHref(l), We(a), `reject`);
  let u = JSON.stringify(l);
  return (
    v.useEffect(() => {
      c(JSON.parse(u), { replace: t, state: n, relative: r });
    }, [c, u, r, t, n]),
    null
  );
}
function Kt(e) {
  return St(e.context);
}
function qt(e) {
  S(
    !1,
    `A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`,
  );
}
function Jt({
  basename: e = `/`,
  children: t = null,
  location: n,
  navigationType: r = `POP`,
  navigator: i,
  static: a = !1,
  useTransitions: o,
}) {
  S(
    !ht(),
    `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`,
  );
  let s = e.replace(/^\/*/, `/`),
    c = v.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: a,
        useTransitions: o,
        future: {},
      }),
      [s, i, a, o],
    );
  typeof n == `string` && (n = T(n));
  let {
      pathname: l = `/`,
      search: u = ``,
      hash: d = ``,
      state: f = null,
      key: p = `default`,
      mask: m,
    } = n,
    h = v.useMemo(() => {
      let e = Ee(l, s);
      return e == null
        ? null
        : {
            location: {
              pathname: e,
              search: u,
              hash: d,
              state: f,
              key: p,
              mask: m,
            },
            navigationType: r,
          };
    }, [s, l, u, d, f, p, r, m]);
  return (
    C(
      h != null,
      `<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    h == null
      ? null
      : v.createElement(
          at.Provider,
          { value: c },
          v.createElement(ot.Provider, { children: t, value: h }),
        )
  );
}
function Yt({ children: e, location: t }) {
  return Tt(Xt(e), t);
}
v.Component;
function Xt(e, t = []) {
  let n = [];
  return (
    v.Children.forEach(e, (e, r) => {
      if (!v.isValidElement(e)) return;
      let i = [...t, r];
      if (e.type === v.Fragment) {
        n.push.apply(n, Xt(e.props.children, i));
        return;
      }
      (S(
        e.type === qt,
        `[${typeof e.type == `string` ? e.type : e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        S(
          !e.props.index || !e.props.children,
          `An index route cannot have child routes.`,
        ));
      let a = {
        id: e.props.id || i.join(`-`),
        caseSensitive: e.props.caseSensitive,
        element: e.props.element,
        Component: e.props.Component,
        index: e.props.index,
        path: e.props.path,
        middleware: e.props.middleware,
        loader: e.props.loader,
        action: e.props.action,
        hydrateFallbackElement: e.props.hydrateFallbackElement,
        HydrateFallback: e.props.HydrateFallback,
        errorElement: e.props.errorElement,
        ErrorBoundary: e.props.ErrorBoundary,
        hasErrorBoundary:
          e.props.hasErrorBoundary === !0 ||
          e.props.ErrorBoundary != null ||
          e.props.errorElement != null,
        shouldRevalidate: e.props.shouldRevalidate,
        handle: e.props.handle,
        lazy: e.props.lazy,
      };
      (e.props.children && (a.children = Xt(e.props.children, i)), n.push(a));
    }),
    n
  );
}
var Zt = `get`,
  Qt = `application/x-www-form-urlencoded`;
function $t(e) {
  return typeof HTMLElement < `u` && e instanceof HTMLElement;
}
function en(e) {
  return $t(e) && e.tagName.toLowerCase() === `button`;
}
function tn(e) {
  return $t(e) && e.tagName.toLowerCase() === `form`;
}
function k(e) {
  return $t(e) && e.tagName.toLowerCase() === `input`;
}
function nn(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function rn(e, t) {
  return e.button === 0 && (!t || t === `_self`) && !nn(e);
}
function an(e = ``) {
  return new URLSearchParams(
    typeof e == `string` || Array.isArray(e) || e instanceof URLSearchParams
      ? e
      : Object.keys(e).reduce((t, n) => {
          let r = e[n];
          return t.concat(Array.isArray(r) ? r.map((e) => [n, e]) : [[n, r]]);
        }, []),
  );
}
function on(e, t) {
  let n = an(e);
  return (
    t &&
      t.forEach((e, r) => {
        n.has(r) ||
          t.getAll(r).forEach((e) => {
            n.append(r, e);
          });
      }),
    n
  );
}
var sn = null;
function cn() {
  if (sn === null)
    try {
      (new FormData(document.createElement(`form`), 0), (sn = !1));
    } catch {
      sn = !0;
    }
  return sn;
}
var ln = new Set([
  `application/x-www-form-urlencoded`,
  `multipart/form-data`,
  `text/plain`,
]);
function un(e) {
  return e != null && !ln.has(e)
    ? (C(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Qt}"`,
      ),
      null)
    : e;
}
function dn(e, t) {
  let n, r, i, a, o;
  if (tn(e)) {
    let o = e.getAttribute(`action`);
    ((r = o ? Ee(o, t) : null),
      (n = e.getAttribute(`method`) || Zt),
      (i = un(e.getAttribute(`enctype`)) || Qt),
      (a = new FormData(e)));
  } else if (en(e) || (k(e) && (e.type === `submit` || e.type === `image`))) {
    let o = e.form;
    if (o == null)
      throw Error(
        `Cannot submit a <button> or <input type="submit"> without a <form>`,
      );
    let s = e.getAttribute(`formaction`) || o.getAttribute(`action`);
    if (
      ((r = s ? Ee(s, t) : null),
      (n = e.getAttribute(`formmethod`) || o.getAttribute(`method`) || Zt),
      (i =
        un(e.getAttribute(`formenctype`)) ||
        un(o.getAttribute(`enctype`)) ||
        Qt),
      (a = new FormData(o, e)),
      !cn())
    ) {
      let { name: t, type: n, value: r } = e;
      if (n === `image`) {
        let e = t ? `${t}.` : ``;
        (a.append(`${e}x`, `0`), a.append(`${e}y`, `0`));
      } else t && a.append(t, r);
    }
  } else if ($t(e))
    throw Error(
      `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`,
    );
  else ((n = Zt), (r = null), (i = Qt), (o = e));
  return (
    a && i === `text/plain` && ((o = a), (a = void 0)),
    { action: r, method: n.toLowerCase(), encType: i, formData: a, body: o }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
function fn(e, t) {
  if (e === !1 || e == null) throw Error(t);
}
function pn(e, t, n, r) {
  let i =
    typeof e == `string`
      ? new URL(
          e,
          typeof window > `u`
            ? `server://singlefetch/`
            : window.location.origin,
        )
      : e;
  return (
    (i.pathname = n
      ? i.pathname.endsWith(`/`)
        ? `${i.pathname}_.${r}`
        : `${i.pathname}.${r}`
      : i.pathname === `/`
        ? `_root.${r}`
        : t && Ee(i.pathname, t) === `/`
          ? `${Pe(t)}/_root.${r}`
          : `${Pe(i.pathname)}.${r}`),
    i
  );
}
async function mn(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await import(e.module);
    return ((t[e.id] = n), n);
  } catch (t) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`,
      ),
      console.error(t),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function hn(e) {
  return e != null && typeof e.page == `string`;
}
function gn(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === `preload` &&
        typeof e.imageSrcSet == `string` &&
        typeof e.imageSizes == `string`
      : typeof e.rel == `string` && typeof e.href == `string`;
}
async function _n(e, t, n) {
  return Sn(
    (
      await Promise.all(
        e.map(async (e) => {
          let r = t.routes[e.route.id];
          if (r) {
            let e = await mn(r, n);
            return e.links ? e.links() : [];
          }
          return [];
        }),
      )
    )
      .flat(1)
      .filter(gn)
      .filter((e) => e.rel === `stylesheet` || e.rel === `preload`)
      .map((e) =>
        e.rel === `stylesheet`
          ? { ...e, rel: `prefetch`, as: `style` }
          : { ...e, rel: `prefetch` },
      ),
  );
}
function vn(e, t, n, r, i, a) {
  let o = (e, t) => !n[t] || e.route.id !== n[t].route.id,
    s = (e, t) =>
      n[t].pathname !== e.pathname ||
      (n[t].route.path?.endsWith(`*`) && n[t].params[`*`] !== e.params[`*`]);
  return a === `assets`
    ? t.filter((e, t) => o(e, t) || s(e, t))
    : a === `data`
      ? t.filter((t, a) => {
          let c = r.routes[t.route.id];
          if (!c || !c.hasLoader) return !1;
          if (o(t, a) || s(t, a)) return !0;
          if (t.route.shouldRevalidate) {
            let r = t.route.shouldRevalidate({
              currentUrl: new URL(
                i.pathname + i.search + i.hash,
                window.origin,
              ),
              currentParams: n[0]?.params || {},
              nextUrl: new URL(e, window.origin),
              nextParams: t.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof r == `boolean`) return r;
          }
          return !0;
        })
      : [];
}
function yn(e, t, { includeHydrateFallback: n } = {}) {
  return bn(
    e
      .map((e) => {
        let r = t.routes[e.route.id];
        if (!r) return [];
        let i = [r.module];
        return (
          r.clientActionModule && (i = i.concat(r.clientActionModule)),
          r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)),
          n &&
            r.hydrateFallbackModule &&
            (i = i.concat(r.hydrateFallbackModule)),
          r.imports && (i = i.concat(r.imports)),
          i
        );
      })
      .flat(1),
  );
}
function bn(e) {
  return [...new Set(e)];
}
function xn(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function Sn(e, t) {
  let n = new Set(),
    r = new Set(t);
  return e.reduce((e, i) => {
    if (t && !hn(i) && i.as === `script` && i.href && r.has(i.href)) return e;
    let a = JSON.stringify(xn(i));
    return (n.has(a) || (n.add(a), e.push({ key: a, link: i })), e);
  }, []);
}
function Cn() {
  let e = v.useContext(Qe);
  return (
    fn(
      e,
      `You must render this element inside a <DataRouterContext.Provider> element`,
    ),
    e
  );
}
function wn() {
  let e = v.useContext($e);
  return (
    fn(
      e,
      `You must render this element inside a <DataRouterStateContext.Provider> element`,
    ),
    e
  );
}
var Tn = v.createContext(void 0);
Tn.displayName = `FrameworkContext`;
function En() {
  let e = v.useContext(Tn);
  return (
    fn(e, `You must render this element inside a <HydratedRouter> element`),
    e
  );
}
function Dn(e, t) {
  let n = v.useContext(Tn),
    [r, i] = v.useState(!1),
    [a, o] = v.useState(!1),
    {
      onFocus: s,
      onBlur: c,
      onMouseEnter: l,
      onMouseLeave: u,
      onTouchStart: d,
    } = t,
    f = v.useRef(null);
  (v.useEffect(() => {
    if ((e === `render` && o(!0), e === `viewport`)) {
      let e = new IntersectionObserver(
        (e) => {
          e.forEach((e) => {
            o(e.isIntersecting);
          });
        },
        { threshold: 0.5 },
      );
      return (
        f.current && e.observe(f.current),
        () => {
          e.disconnect();
        }
      );
    }
  }, [e]),
    v.useEffect(() => {
      if (r) {
        let e = setTimeout(() => {
          o(!0);
        }, 100);
        return () => {
          clearTimeout(e);
        };
      }
    }, [r]));
  let p = () => {
      i(!0);
    },
    m = () => {
      (i(!1), o(!1));
    };
  return n
    ? e === `intent`
      ? [
          a,
          f,
          {
            onFocus: On(s, p),
            onBlur: On(c, m),
            onMouseEnter: On(l, p),
            onMouseLeave: On(u, m),
            onTouchStart: On(d, p),
          },
        ]
      : [a, f, {}]
    : [!1, f, {}];
}
function On(e, t) {
  return (n) => {
    (e && e(n), n.defaultPrevented || t(n));
  };
}
function kn({ page: e, ...t }) {
  let n = tt(),
    { nonce: r } = En(),
    { router: i } = Cn(),
    a = v.useMemo(() => ce(i.routes, e, i.basename), [i.routes, e, i.basename]);
  return a
    ? (t.nonce == null && r && (t = { ...t, nonce: r }),
      n
        ? v.createElement(jn, { page: e, matches: a, ...t })
        : v.createElement(Mn, { page: e, matches: a, ...t }))
    : null;
}
function An(e) {
  let { manifest: t, routeModules: n } = En(),
    [r, i] = v.useState([]);
  return (
    v.useEffect(() => {
      let r = !1;
      return (
        _n(e, t, n).then((e) => {
          r || i(e);
        }),
        () => {
          r = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function jn({ page: e, matches: t, ...n }) {
  let r = gt(),
    { future: i } = En(),
    { basename: a } = Cn(),
    o = v.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let n = pn(e, a, i.v8_trailingSlashAwareDataRequests, `rsc`),
        o = !1,
        s = [];
      for (let e of t)
        typeof e.route.shouldRevalidate == `function`
          ? (o = !0)
          : s.push(e.route.id);
      return (
        o && s.length > 0 && n.searchParams.set(`_routes`, s.join(`,`)),
        [n.pathname + n.search]
      );
    }, [a, i.v8_trailingSlashAwareDataRequests, e, r, t]);
  return v.createElement(
    v.Fragment,
    null,
    o.map((e) =>
      v.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n,
      }),
    ),
  );
}
function Mn({ page: e, matches: t, ...n }) {
  let r = gt(),
    { future: i, manifest: a, routeModules: o } = En(),
    { basename: s } = Cn(),
    { loaderData: c, matches: l } = wn(),
    u = v.useMemo(() => vn(e, t, l, a, r, `data`), [e, t, l, a, r]),
    d = v.useMemo(() => vn(e, t, l, a, r, `assets`), [e, t, l, a, r]),
    f = v.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let n = new Set(),
        l = !1;
      if (
        (t.forEach((e) => {
          let t = a.routes[e.route.id];
          t &&
            t.hasLoader &&
            ((!u.some((t) => t.route.id === e.route.id) &&
              e.route.id in c &&
              o[e.route.id]?.shouldRevalidate) ||
            t.hasClientLoader
              ? (l = !0)
              : n.add(e.route.id));
        }),
        n.size === 0)
      )
        return [];
      let d = pn(e, s, i.v8_trailingSlashAwareDataRequests, `data`);
      return (
        l &&
          n.size > 0 &&
          d.searchParams.set(
            `_routes`,
            t
              .filter((e) => n.has(e.route.id))
              .map((e) => e.route.id)
              .join(`,`),
          ),
        [d.pathname + d.search]
      );
    }, [s, i.v8_trailingSlashAwareDataRequests, c, r, a, u, t, e, o]),
    p = v.useMemo(() => yn(d, a), [d, a]),
    m = An(d);
  return v.createElement(
    v.Fragment,
    null,
    f.map((e) =>
      v.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n,
      }),
    ),
    p.map((e) =>
      v.createElement(`link`, { key: e, rel: `modulepreload`, href: e, ...n }),
    ),
    m.map(({ key: e, link: t }) =>
      v.createElement(`link`, {
        key: e,
        nonce: n.nonce,
        ...t,
        crossOrigin: t.crossOrigin ?? n.crossOrigin,
      }),
    ),
  );
}
function Nn(...e) {
  return (t) => {
    e.forEach((e) => {
      typeof e == `function` ? e(t) : e != null && (e.current = t);
    });
  };
}
v.Component;
var Pn =
  typeof window < `u` &&
  window.document !== void 0 &&
  window.document.createElement !== void 0;
try {
  Pn && (window.__reactRouterVersion = `7.18.5`);
} catch {}
function Fn({ basename: e, children: t, useTransitions: n, window: r }) {
  let i = v.useRef();
  i.current ??= ne({ window: r, v5Compat: !0 });
  let a = i.current,
    [o, s] = v.useState({ action: a.action, location: a.location }),
    c = v.useCallback(
      (e) => {
        n === !1 ? s(e) : v.startTransition(() => s(e));
      },
      [n],
    );
  return (
    v.useLayoutEffect(() => a.listen(c), [a, c]),
    v.createElement(Jt, {
      basename: e,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: a,
      useTransitions: n,
    })
  );
}
var In = v.forwardRef(function (
  {
    onClick: e,
    discover: t = `render`,
    prefetch: n = `none`,
    relative: r,
    reloadDocument: i,
    replace: a,
    mask: o,
    state: s,
    target: c,
    to: l,
    preventScrollReset: u,
    viewTransition: d,
    defaultShouldRevalidate: f,
    ...p
  },
  m,
) {
  let { basename: h, navigator: g, useTransitions: _ } = v.useContext(at),
    b = typeof l == `string` && y.test(l),
    x = He(l, h);
  l = x.to;
  let ee = mt(l, { relative: r }),
    te = gt(),
    ne = null;
  if (o) {
    let e = je(o, [], te.mask ? te.mask.pathname : `/`, !0);
    (h !== `/` && (e.pathname = e.pathname === `/` ? h : Ne([h, e.pathname])),
      (ne = g.createHref(e)));
  }
  let [S, C, w] = Dn(n, p),
    re = Vn(l, {
      replace: a,
      mask: o,
      state: s,
      target: c,
      preventScrollReset: u,
      relative: r,
      viewTransition: d,
      defaultShouldRevalidate: f,
      useTransitions: _,
    });
  function ie(t) {
    (e && e(t), t.defaultPrevented || re(t));
  }
  let ae = !(x.isExternal || i),
    T = v.createElement(`a`, {
      ...p,
      ...w,
      href: (ae ? ne : void 0) || x.absoluteURL || ee,
      onClick: ae ? ie : e,
      ref: Nn(m, C),
      target: c,
      "data-discover": !b && t === `render` ? `true` : void 0,
    });
  return S && !b
    ? v.createElement(v.Fragment, null, T, v.createElement(kn, { page: ee }))
    : T;
});
In.displayName = `Link`;
var Ln = v.forwardRef(function (
  {
    "aria-current": e = `page`,
    caseSensitive: t = !1,
    className: n = ``,
    end: r = !1,
    style: i,
    to: a,
    viewTransition: o,
    children: s,
    ...c
  },
  l,
) {
  let u = wt(a, { relative: c.relative }),
    d = gt(),
    f = v.useContext($e),
    { navigator: p, basename: m } = v.useContext(at),
    h = f != null && qn(u) && o === !0,
    g = p.encodeLocation ? p.encodeLocation(u).pathname : u.pathname,
    _ = d.pathname,
    y =
      f && f.navigation && f.navigation.location
        ? f.navigation.location.pathname
        : null;
  (t ||
    ((_ = _.toLowerCase()),
    (y = y ? y.toLowerCase() : null),
    (g = g.toLowerCase())),
    y && m && (y = Ee(y, m) || y));
  let b = g !== `/` && g.endsWith(`/`) ? g.length - 1 : g.length,
    x = _ === g || (!r && _.startsWith(g) && _.charAt(b) === `/`),
    ee =
      y != null &&
      (y === g || (!r && y.startsWith(g) && y.charAt(g.length) === `/`)),
    te = { isActive: x, isPending: ee, isTransitioning: h },
    ne = x ? e : void 0,
    S;
  S =
    typeof n == `function`
      ? n(te)
      : [
          n,
          x ? `active` : null,
          ee ? `pending` : null,
          h ? `transitioning` : null,
        ]
          .filter(Boolean)
          .join(` `);
  let C = typeof i == `function` ? i(te) : i;
  return v.createElement(
    In,
    {
      ...c,
      "aria-current": ne,
      className: S,
      ref: l,
      style: C,
      to: a,
      viewTransition: o,
    },
    typeof s == `function` ? s(te) : s,
  );
});
Ln.displayName = `NavLink`;
var Rn = v.forwardRef(
  (
    {
      discover: e = `render`,
      fetcherKey: t,
      navigate: n,
      reloadDocument: r,
      replace: i,
      state: a,
      method: o = Zt,
      action: s,
      onSubmit: c,
      relative: l,
      preventScrollReset: u,
      viewTransition: d,
      defaultShouldRevalidate: f,
      ...p
    },
    m,
  ) => {
    let { useTransitions: h } = v.useContext(at),
      g = Gn(),
      _ = Kn(s, { relative: l }),
      b = o.toLowerCase() === `get` ? `get` : `post`,
      x = typeof s == `string` && y.test(s);
    return v.createElement(`form`, {
      ref: m,
      method: b,
      action: _,
      onSubmit: r
        ? c
        : (e) => {
            if ((c && c(e), e.defaultPrevented)) return;
            e.preventDefault();
            let r = e.nativeEvent.submitter,
              s = r?.getAttribute(`formmethod`) || o,
              p = () =>
                g(r || e.currentTarget, {
                  fetcherKey: t,
                  method: s,
                  navigate: n,
                  replace: i,
                  state: a,
                  relative: l,
                  preventScrollReset: u,
                  viewTransition: d,
                  defaultShouldRevalidate: f,
                });
            h && n !== !1 ? v.startTransition(() => p()) : p();
          },
      ...p,
      "data-discover": !x && e === `render` ? `true` : void 0,
    });
  },
);
Rn.displayName = `Form`;
function zn(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Bn(e) {
  let t = v.useContext(Qe);
  return (S(t, zn(e)), t);
}
function Vn(
  e,
  {
    target: t,
    replace: n,
    mask: r,
    state: i,
    preventScrollReset: a,
    relative: o,
    viewTransition: s,
    defaultShouldRevalidate: c,
    useTransitions: l,
  } = {},
) {
  let u = yt(),
    d = gt(),
    f = wt(e, { relative: o });
  return v.useCallback(
    (p) => {
      if (rn(p, t)) {
        p.preventDefault();
        let t = n === void 0 ? ae(d) === ae(f) : n,
          m = () =>
            u(e, {
              replace: t,
              mask: r,
              state: i,
              preventScrollReset: a,
              relative: o,
              viewTransition: s,
              defaultShouldRevalidate: c,
            });
        l ? v.startTransition(() => m()) : m();
      }
    },
    [d, u, f, n, r, i, t, e, a, o, s, c, l],
  );
}
function Hn(e) {
  C(
    typeof URLSearchParams < `u`,
    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.",
  );
  let t = v.useRef(an(e)),
    n = v.useRef(!1),
    r = gt(),
    i = v.useMemo(() => on(r.search, n.current ? null : t.current), [r.search]),
    a = yt();
  return [
    i,
    v.useCallback(
      (e, t) => {
        let r = an(typeof e == `function` ? e(new URLSearchParams(i)) : e);
        ((n.current = !0), a(`?` + r, t));
      },
      [a, i],
    ),
  ];
}
var Un = 0,
  Wn = () => `__${String(++Un)}__`;
function Gn() {
  let { router: e } = Bn(`useSubmit`),
    { basename: t } = v.useContext(at),
    n = zt(),
    r = e.fetch,
    i = e.navigate;
  return v.useCallback(
    async (e, a = {}) => {
      let { action: o, method: s, encType: c, formData: l, body: u } = dn(e, t);
      if (a.navigate === !1) {
        let e = a.fetcherKey || Wn();
        await r(e, n, a.action || o, {
          defaultShouldRevalidate: a.defaultShouldRevalidate,
          preventScrollReset: a.preventScrollReset,
          formData: l,
          body: u,
          formMethod: a.method || s,
          formEncType: a.encType || c,
          flushSync: a.flushSync,
        });
      } else
        await i(a.action || o, {
          defaultShouldRevalidate: a.defaultShouldRevalidate,
          preventScrollReset: a.preventScrollReset,
          formData: l,
          body: u,
          formMethod: a.method || s,
          formEncType: a.encType || c,
          replace: a.replace,
          state: a.state,
          fromRouteId: n,
          flushSync: a.flushSync,
          viewTransition: a.viewTransition,
        });
    },
    [r, i, t, n],
  );
}
function Kn(e, { relative: t } = {}) {
  let { basename: n } = v.useContext(at),
    r = v.useContext(st);
  S(r, `useFormAction must be used inside a RouteContext`);
  let [i] = r.matches.slice(-1),
    a = { ...wt(e || `.`, { relative: t }) },
    o = gt();
  if (e == null) {
    a.search = o.search;
    let e = new URLSearchParams(a.search),
      t = e.getAll(`index`);
    if (t.some((e) => e === ``)) {
      (e.delete(`index`),
        t.filter((e) => e).forEach((t) => e.append(`index`, t)));
      let n = e.toString();
      a.search = n ? `?${n}` : ``;
    }
  }
  return (
    (!e || e === `.`) &&
      i.route.index &&
      (a.search = a.search ? a.search.replace(/^\?/, `?index&`) : `?index`),
    n !== `/` && (a.pathname = a.pathname === `/` ? n : Ne([n, a.pathname])),
    ae(a)
  );
}
function qn(e, { relative: t } = {}) {
  let n = v.useContext(nt);
  S(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: r } = Bn(`useViewTransitionState`),
    i = wt(e, { relative: t });
  if (!n.isTransitioning) return !1;
  let a = Ee(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = Ee(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return we(i.pathname, o) != null || we(i.pathname, a) != null;
}
var Jn = (e) => e?.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase();
function Yn(e, t, n = []) {
  if (t == null)
    throw Error(`[lucide]: iconNode is required when icon name is used`);
  return {
    name: Jn(e),
    size: 24,
    node: t,
    ...(n.length > 0 ? { aliases: n } : {}),
  };
}
var Xn = (e) => {
    let t = ``,
      n = !1;
    for (let r of e)
      r === `-` || r === `_` || r <= ` `
        ? (n = t.length > 0)
        : (t.length === 0
            ? (t += r.toLowerCase())
            : (t += n ? r.toUpperCase() : r),
          (n = !1));
    return t;
  },
  Zn = (e) => {
    let t = Xn(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  Qn = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  $n = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    "stroke-width": 2,
    "stroke-linecap": `round`,
    "stroke-linejoin": `round`,
  };
function er(e) {
  return e != null;
}
function tr(e, t = {}) {
  let n = t.attributeNames ?? {},
    r = (e) => n[e] ?? e,
    i = e.size ?? e.width ?? $n.width,
    a = e.size ?? e.height ?? $n.height,
    o =
      e.aliases
        ?.filter((e) => typeof e == `string` && e.trim() !== ``)
        .map((e) => `lucide-${e}`) ?? [],
    s = [...(e.name ? [`lucide-${e.name}`] : []), ...o],
    c = t.className?.split(` `).filter(Boolean) ?? [],
    l = t.includeDefaultClasses === !1 ? Qn(...c) : Qn(`lucide`, ...s, ...c),
    u = t.absoluteStrokeWidth
      ? (Number(t.strokeWidth ?? $n[`stroke-width`]) *
          Number(e.size ?? e.width ?? $n.width)) /
        Number(t.size ?? t.width ?? $n.width)
      : (t.strokeWidth ?? $n[`stroke-width`]);
  return [
    `svg`,
    {
      ...Object.entries($n).reduce((e, [t, n]) => ((e[r(t)] = n), e), {}),
      ...(`color` in t && t.color && { [r(`stroke`)]: t.color }),
      ...(`size` in t &&
        er(t.size) && { [r(`width`)]: t.size, [r(`height`)]: t.size }),
      ...(`width` in t && er(t.width) && { [r(`width`)]: t.width }),
      ...(`height` in t && er(t.height) && { [r(`height`)]: t.height }),
      [r(`stroke-width`)]: u,
      ...(l && { [r(`class`)]: l }),
      [r(`viewBox`)]: `0 0 ${i} ${a}`,
      ...(t.hasA11yProp === !1 ? { [r(`aria-hidden`)]: `true` } : {}),
      ...(`attributes` in t && t.attributes),
    },
    e.node.map((e) => {
      let [n, i, a] = e,
        o = t.nonScalingStroke
          ? { [r(`vector-effect`)]: `non-scaling-stroke`, ...i }
          : i;
      return a ? [n, o, a] : [n, o];
    }),
  ];
}
function nr(e, t = {}) {
  return tr(e, {
    ...t,
    attributeNames: {
      ...t.attributeNames,
      class: `className`,
      "stroke-width": `strokeWidth`,
      "stroke-linecap": `strokeLinecap`,
      "stroke-linejoin": `strokeLinejoin`,
      "vector-effect": `vectorEffect`,
    },
  });
}
var rr = (e) => {
    for (let t in e)
      if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  ir = (0, v.createContext)({}),
  ar = () => (0, v.useContext)(ir),
  or = (0, v.forwardRef)(
    (
      {
        color: e,
        size: t,
        width: n,
        height: r,
        strokeWidth: i,
        absoluteStrokeWidth: a,
        nonScalingStroke: o,
        className: s = ``,
        children: c,
        iconNode: l = [],
        icon: u = { node: l, aliases: [], size: 24 },
        ...d
      },
      f,
    ) => {
      let {
          size: p = 24,
          strokeWidth: m = 2,
          absoluteStrokeWidth: h = !1,
          nonScalingStroke: g = !1,
          color: _ = `currentColor`,
          className: y = ``,
        } = ar() ?? {},
        b = !!c || rr(d),
        [x, ee, te = []] = nr(u, {
          color: e ?? _,
          width: n ?? t ?? p,
          height: r ?? t ?? p,
          strokeWidth: i ?? m,
          absoluteStrokeWidth: a ?? h,
          nonScalingStroke: o ?? g,
          className: Qn(y, s),
          hasA11yProp: b,
          attributes: d,
        });
      return (0, v.createElement)(x, { ref: f, ...ee }, [
        ...te.map(([e, t]) => (0, v.createElement)(e, t)),
        ...(Array.isArray(c) ? c : [c]),
      ]);
    },
  );
function A(e, t = [], n = []) {
  let r = typeof e == `string` ? Yn(e, t, n) : e,
    i = (0, v.forwardRef)(({ className: e, ...t }, n) =>
      (0, v.createElement)(or, { ref: n, icon: r, className: e, ...t }),
    );
  return (r.name && (i.displayName = Zn(r.name)), i);
}
var sr = {
  name: `arrow-left`,
  size: 24,
  node: [
    [`path`, { d: `m12 19-7-7 7-7`, key: `1l729n` }],
    [`path`, { d: `M19 12H5`, key: `x3x0zl` }],
  ],
};
sr.node;
var cr = A(sr),
  lr = {
    name: `bell-off`,
    size: 24,
    node: [
      [`path`, { d: `M10.268 21a2 2 0 0 0 3.464 0`, key: `vwvbt9` }],
      [
        `path`,
        {
          d: `M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742`,
          key: `178tsu`,
        },
      ],
      [`path`, { d: `m2 2 20 20`, key: `1ooewy` }],
      [
        `path`,
        {
          d: `M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05`,
          key: `1hqiys`,
        },
      ],
    ],
  };
lr.node;
var ur = A(lr),
  dr = {
    name: `bell-ring`,
    size: 24,
    node: [
      [`path`, { d: `M10.268 21a2 2 0 0 0 3.464 0`, key: `vwvbt9` }],
      [`path`, { d: `M22 8c0-2.3-.8-4.3-2-6`, key: `5bb3ad` }],
      [
        `path`,
        {
          d: `M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`,
          key: `11g9vi`,
        },
      ],
      [`path`, { d: `M4 2C2.8 3.7 2 5.7 2 8`, key: `tap9e0` }],
    ],
  };
dr.node;
var fr = A(dr),
  pr = {
    name: `bell`,
    size: 24,
    node: [
      [`path`, { d: `M10.268 21a2 2 0 0 0 3.464 0`, key: `vwvbt9` }],
      [
        `path`,
        {
          d: `M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`,
          key: `11g9vi`,
        },
      ],
    ],
  };
pr.node;
var mr = A(pr),
  hr = {
    name: `check`,
    size: 24,
    node: [[`path`, { d: `M20 6 9 17l-5-5`, key: `1gmf2c` }]],
  };
hr.node;
var gr = A(hr),
  _r = {
    name: `chevron-down`,
    size: 24,
    node: [[`path`, { d: `m6 9 6 6 6-6`, key: `qrunsl` }]],
  };
_r.node;
var vr = A(_r),
  yr = {
    name: `circle-check`,
    size: 24,
    node: [
      [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
      [`path`, { d: `m16 9-5.5 5.5L8 12`, key: `xofnsj` }],
    ],
    aliases: [`check-circle-2`],
  };
yr.node;
var br = A(yr),
  xr = {
    name: `circle-exclamation-point`,
    size: 24,
    node: [
      [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
      [`line`, { x1: `12`, x2: `12`, y1: `8`, y2: `12`, key: `1pkeuh` }],
      [`line`, { x1: `12`, x2: `12.01`, y1: `16`, y2: `16`, key: `4dfq90` }],
    ],
    aliases: [`alert-circle`, `circle-alert`],
  };
xr.node;
var Sr = A(xr),
  Cr = {
    name: `circle-question-mark`,
    size: 24,
    node: [
      [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
      [`path`, { d: `M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`, key: `1u773s` }],
      [`path`, { d: `M12 17h.01`, key: `p32p05` }],
    ],
    aliases: [`help-circle`, `circle-help`],
  };
Cr.node;
var wr = A(Cr),
  Tr = {
    name: `circle-x`,
    size: 24,
    node: [
      [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
      [`path`, { d: `m15 9-6 6`, key: `1uzhvr` }],
      [`path`, { d: `m9 9 6 6`, key: `z0biqf` }],
    ],
    aliases: [`x-circle`],
  };
Tr.node;
var Er = A(Tr),
  Dr = {
    name: `cloud-upload`,
    size: 24,
    node: [
      [`path`, { d: `M12 13v8`, key: `1l5pq0` }],
      [
        `path`,
        {
          d: `M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242`,
          key: `1pljnt`,
        },
      ],
      [`path`, { d: `m8 17 4-4 4 4`, key: `1quai1` }],
    ],
    aliases: [`upload-cloud`],
  };
Dr.node;
var Or = A(Dr),
  kr = {
    name: `download`,
    size: 24,
    node: [
      [`path`, { d: `M12 15V3`, key: `m9g1x1` }],
      [
        `path`,
        { d: `M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`, key: `ih7n3h` },
      ],
      [`path`, { d: `m7 10 5 5 5-5`, key: `brsn70` }],
    ],
  };
kr.node;
var Ar = A(kr),
  jr = {
    name: `external-link`,
    size: 24,
    node: [
      [`path`, { d: `M15 3h6v6`, key: `1q9fwt` }],
      [`path`, { d: `M10 14 21 3`, key: `gplh6r` }],
      [
        `path`,
        {
          d: `M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,
          key: `a6xqqp`,
        },
      ],
    ],
  };
jr.node;
var Mr = A(jr),
  Nr = {
    name: `eye-off`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49`,
          key: `ct8e1f`,
        },
      ],
      [`path`, { d: `M14.084 14.158a3 3 0 0 1-4.242-4.242`, key: `151rxh` }],
      [
        `path`,
        {
          d: `M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143`,
          key: `13bj9a`,
        },
      ],
      [`path`, { d: `m2 2 20 20`, key: `1ooewy` }],
    ],
  };
Nr.node;
var Pr = A(Nr),
  Fr = {
    name: `eye`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,
          key: `1nclc0`,
        },
      ],
      [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }],
    ],
  };
Fr.node;
var Ir = A(Fr),
  Lr = {
    name: `file-plus-corner`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35`,
          key: `17jvcc`,
        },
      ],
      [`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5`, key: `wfsgrz` }],
      [`path`, { d: `M14 19h6`, key: `bvotb8` }],
      [`path`, { d: `M17 16v6`, key: `18yu1i` }],
    ],
    aliases: [`file-plus-2`],
  };
Lr.node;
var Rr = A(Lr),
  zr = {
    name: `file-text`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,
          key: `1oefj6`,
        },
      ],
      [`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5`, key: `wfsgrz` }],
      [`path`, { d: `M10 9H8`, key: `b1mrlr` }],
      [`path`, { d: `M16 13H8`, key: `t4e002` }],
      [`path`, { d: `M16 17H8`, key: `z1uh3a` }],
    ],
  };
zr.node;
var Br = A(zr),
  Vr = {
    name: `flask-conical`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2`,
          key: `18mbvz`,
        },
      ],
      [`path`, { d: `M6.453 15h11.094`, key: `3shlmq` }],
      [`path`, { d: `M8.5 2h7`, key: `csnxdl` }],
    ],
  };
Vr.node;
var Hr = A(Vr),
  Ur = {
    name: `folder-open`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2`,
          key: `usdka0`,
        },
      ],
    ],
  };
Ur.node;
var Wr = A(Ur),
  Gr = {
    name: `inbox`,
    size: 24,
    node: [
      [
        `polyline`,
        { points: `22 12 16 12 14 15 10 15 8 12 2 12`, key: `o97t9d` },
      ],
      [
        `path`,
        {
          d: `M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,
          key: `oot6mr`,
        },
      ],
    ],
  };
Gr.node;
var Kr = A(Gr),
  qr = {
    name: `info`,
    size: 24,
    node: [
      [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
      [`path`, { d: `M12 16v-4`, key: `1dtifu` }],
      [`path`, { d: `M12 8h.01`, key: `e9boi3` }],
    ],
  };
qr.node;
var Jr = A(qr),
  Yr = {
    name: `layout-dashboard`,
    size: 24,
    node: [
      [
        `rect`,
        { width: `7`, height: `9`, x: `3`, y: `3`, rx: `1`, key: `10lvy0` },
      ],
      [
        `rect`,
        { width: `7`, height: `5`, x: `14`, y: `3`, rx: `1`, key: `16une8` },
      ],
      [
        `rect`,
        { width: `7`, height: `9`, x: `14`, y: `12`, rx: `1`, key: `1hutg5` },
      ],
      [
        `rect`,
        { width: `7`, height: `5`, x: `3`, y: `16`, rx: `1`, key: `ldoo1y` },
      ],
    ],
  };
Yr.node;
var Xr = A(Yr),
  Zr = {
    name: `loader-circle`,
    size: 24,
    node: [[`path`, { d: `M21 12a9 9 0 1 1-6.219-8.56`, key: `13zald` }]],
    aliases: [`loader-2`],
  };
Zr.node;
var Qr = A(Zr),
  $r = {
    name: `log-out`,
    size: 24,
    node: [
      [`path`, { d: `m16 17 5-5-5-5`, key: `1bji2h` }],
      [`path`, { d: `M21 12H9`, key: `dn1m92` }],
      [`path`, { d: `M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`, key: `1uf3rs` }],
    ],
  };
$r.node;
var ei = A($r),
  ti = {
    name: `monitor`,
    size: 24,
    node: [
      [
        `rect`,
        { width: `20`, height: `14`, x: `2`, y: `3`, rx: `2`, key: `48i651` },
      ],
      [`line`, { x1: `8`, x2: `16`, y1: `21`, y2: `21`, key: `1svkeh` }],
      [`line`, { x1: `12`, x2: `12`, y1: `17`, y2: `21`, key: `vw1qmm` }],
    ],
  };
ti.node;
var ni = A(ti),
  ri = {
    name: `moon`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,
          key: `kfwtm`,
        },
      ],
    ],
  };
ri.node;
var ii = A(ri),
  ai = {
    name: `octagon-exclamation-point`,
    size: 24,
    node: [
      [`path`, { d: `M12 16h.01`, key: `1drbdi` }],
      [`path`, { d: `M12 8v4`, key: `1got3b` }],
      [
        `path`,
        {
          d: `M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z`,
          key: `1fd625`,
        },
      ],
    ],
    aliases: [`alert-octagon`, `octagon-alert`],
  };
ai.node;
var oi = A(ai),
  si = {
    name: `plus`,
    size: 24,
    node: [
      [`path`, { d: `M5 12h14`, key: `1ays0h` }],
      [`path`, { d: `M12 5v14`, key: `s699le` }],
    ],
  };
si.node;
var ci = A(si),
  li = {
    name: `refresh-cw`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,
          key: `v9h5vc`,
        },
      ],
      [`path`, { d: `M21 3v5h-5`, key: `1q7to0` }],
      [
        `path`,
        {
          d: `M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,
          key: `3uifl3`,
        },
      ],
      [`path`, { d: `M8 16H3v5`, key: `1cv678` }],
    ],
  };
li.node;
var ui = A(li),
  di = {
    name: `search`,
    size: 24,
    node: [
      [`path`, { d: `m21 21-4.34-4.34`, key: `14j7rj` }],
      [`circle`, { cx: `11`, cy: `11`, r: `8`, key: `4ej97u` }],
    ],
  };
di.node;
var fi = A(di),
  pi = {
    name: `settings`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,
          key: `1i5ecw`,
        },
      ],
      [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }],
    ],
  };
pi.node;
var mi = A(pi),
  hi = {
    name: `shield-exclamation-point`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
          key: `oel41y`,
        },
      ],
      [`path`, { d: `M12 8v4`, key: `1got3b` }],
      [`path`, { d: `M12 16h.01`, key: `1drbdi` }],
    ],
    aliases: [`shield-alert`],
  };
hi.node;
var gi = A(hi),
  _i = {
    name: `sun`,
    size: 24,
    node: [
      [`circle`, { cx: `12`, cy: `12`, r: `4`, key: `4exip2` }],
      [`path`, { d: `M12 2v2`, key: `tus03m` }],
      [`path`, { d: `M12 20v2`, key: `1lh1kg` }],
      [`path`, { d: `m4.93 4.93 1.41 1.41`, key: `149t6j` }],
      [`path`, { d: `m17.66 17.66 1.41 1.41`, key: `ptbguv` }],
      [`path`, { d: `M2 12h2`, key: `1t8f8n` }],
      [`path`, { d: `M20 12h2`, key: `1q8mjw` }],
      [`path`, { d: `m6.34 17.66-1.41 1.41`, key: `1m8zz5` }],
      [`path`, { d: `m19.07 4.93-1.41 1.41`, key: `1shlcs` }],
    ],
  };
_i.node;
var vi = A(_i),
  yi = {
    name: `triangle-exclamation-point`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,
          key: `wmoenq`,
        },
      ],
      [`path`, { d: `M12 9v4`, key: `juzpu7` }],
      [`path`, { d: `M12 17h.01`, key: `p32p05` }],
    ],
    aliases: [`alert-triangle`, `triangle-alert`],
  };
yi.node;
var bi = A(yi),
  xi = {
    name: `undo-2`,
    size: 24,
    node: [
      [`path`, { d: `M9 14 4 9l5-5`, key: `102s5s` }],
      [
        `path`,
        {
          d: `M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11`,
          key: `f3b9sd`,
        },
      ],
    ],
  };
xi.node;
var Si = A(xi),
  Ci = {
    name: `user-check`,
    size: 24,
    node: [
      [`path`, { d: `m16 11 2 2 4-4`, key: `9rsbq5` }],
      [
        `path`,
        { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` },
      ],
      [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
    ],
  };
Ci.node;
var wi = A(Ci),
  Ti = {
    name: `x`,
    size: 24,
    node: [
      [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
      [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
    ],
  };
Ti.node;
var Ei = A(Ti),
  Di = l(_(), 1),
  Oi = {
    BASE_URL: `/`,
    DEV: !1,
    MODE: `production`,
    PROD: !0,
    SSR: !1,
    VITE_API_URL: `/api/v1`,
    VITE_AUTH_ENABLED: `false`,
    VITE_MAX_UPLOAD_MB: `10`,
    VITE_POLL_INTERVAL_MS: `1200`,
    VITE_PROXY_TARGET: `http://localhost:8000`,
    VITE_REFRESH_INTERVAL_MS: `30000`,
    VITE_USE_MOCK: `false`,
  };
function ki(e, t) {
  return t === void 0 || t === ``
    ? !1
    : t === `true` ||
        (t === `false` ||
          console.warn(
            `[config] ${e}="${t}" inválido; use "true" ou "false". Assumindo "false" (API real).`,
          ),
        !1);
}
function Ai(e, t, n) {
  if (t === void 0 || t === ``) return n;
  let r = Number(t);
  return Number.isFinite(r) && r > 0
    ? r
    : (console.warn(`[config] ${e}="${t}" inválido; usando ${n}.`), n);
}
var j = {
    dataSource: ki(`VITE_USE_MOCK`, Oi.VITE_USE_MOCK) ? `mock` : `api`,
    apiUrl: (Oi.VITE_API_URL || `/api/v1`).replace(/\/+$/, ``),
    maxUploadMb: Ai(`VITE_MAX_UPLOAD_MB`, Oi.VITE_MAX_UPLOAD_MB, 10),
    pollIntervalMs: Ai(`VITE_POLL_INTERVAL_MS`, Oi.VITE_POLL_INTERVAL_MS, 1200),
    refreshIntervalMs: Ai(
      `VITE_REFRESH_INTERVAL_MS`,
      Oi.VITE_REFRESH_INTERVAL_MS,
      3e4,
    ),
    authEnabled: ki(`VITE_AUTH_ENABLED`, Oi.VITE_AUTH_ENABLED),
  },
  ji = j.dataSource === `mock`,
  Mi = {
    recebido: `Recebido`,
    processando: `Processando`,
    processado: `Processado`,
    em_auditoria: `Em auditoria`,
    aprovado_auditoria: `Aprovado na auditoria`,
    rejeitado: `Rejeitado`,
    erro: `Erro`,
  },
  Ni = {
    recebido: `neutro`,
    processando: `info`,
    processado: `info`,
    em_auditoria: `alerta`,
    aprovado_auditoria: `sucesso`,
    rejeitado: `erro`,
    erro: `erro`,
  },
  Pi = { rotina: `Rotina`, urgente: `Urgente` },
  Fi = {
    receita_medica: `Receita médica`,
    laudo_exame: `Laudo de exame`,
    guia_solicitacao_procedimento: `Guia de solicitação de procedimento`,
    relatorio_alta_internacao: `Relatório de alta ou internação`,
    atestado_medico: `Atestado médico`,
    outro: `Outro`,
    indeterminado: `Indeterminado`,
  },
  Ii = {
    PRONTO_SOCORRO: `Pronto-Socorro`,
    AMBULATORIO: `Ambulatório`,
    INTERNACAO: `Internação`,
    LABORATORIO: `Laboratório`,
    OPERADORA: `Operadora`,
    OUTRO: `Outro`,
  },
  Li = {
    FILA_REVISAO_HUMANA_PRIORITARIA: `Fila de revisão humana prioritária`,
    FILA_REVISAO_HUMANA: `Fila de revisão humana`,
    FILA_EMERGENCIA_MEDICA: `Fila de emergência médica`,
    AUDITORIA_AUTORIZACOES: `Auditoria de autorizações`,
    FARMACIA_HOSPITALAR: `Farmácia hospitalar`,
    PRONTUARIO_ELETRONICO: `Prontuário eletrônico`,
  },
  Ri = {
    nao_necessaria: `Revisão não necessária`,
    pendente: `Revisão humana pendente`,
    aprovada: `Aprovada por revisor`,
    rejeitada: `Rejeitada por revisor`,
  },
  zi = {
    urgencia_confiavel: `Urgência com dados confiáveis`,
    urgencia_dado_critico_insuficiente: `Urgência com dado crítico insuficiente`,
    conteudo_ilegivel: `Conteúdo ilegível`,
    conteudo_ilegivel_pronto_socorro: `Conteúdo ilegível (Pronto-Socorro)`,
    medicamento_alto_risco: `Medicamento de alto risco`,
    baixa_confianca_campo_obrigatorio: `Baixa confiança em campo obrigatório`,
    campo_obrigatorio_ausente: `Campo obrigatório ausente`,
    categoria_sem_roteamento_automatico: `Categoria sem roteamento automático`,
    criterios_atendidos: `Critérios de roteamento atendidos`,
    aprovacao_humana: `Aprovação humana`,
    rejeicao_humana: `Rejeição humana`,
  },
  Bi = { llm: `Identificado pela IA`, regra: `Regra determinística` },
  Vi = {
    presente: `Presente`,
    ausente: `Não encontrado`,
    ilegivel: `Ilegível`,
  },
  Hi = {
    campo_ausente: `Campo ausente`,
    campo_ilegivel: `Campo ilegível`,
    conteudo_ilegivel: `Conteúdo ilegível`,
    formato_invalido: `Formato inválido`,
    contradicao: `Contradição`,
    baixa_confianca: `Baixa confiança`,
    classificacao_incerta: `Classificação incerta`,
    possivel_inconsistencia_clinica: `Possível inconsistência clínica`,
    medicamento_alto_risco: `Medicamento de alto risco`,
  },
  Ui = {
    baixa: `Gravidade baixa`,
    media: `Gravidade média`,
    alta: `Gravidade alta`,
  },
  Wi = {
    arquivo_invalido: `Arquivo inválido`,
    formato_nao_suportado: `Formato não suportado`,
    arquivo_corrompido: `Arquivo corrompido`,
    arquivo_muito_grande: `Arquivo muito grande`,
    limite_paginas_excedido: `Limite de páginas excedido`,
    provedor_indisponivel: `Provedor de IA indisponível`,
    provedor_timeout: `Tempo esgotado no provedor de IA`,
    resposta_invalida_provedor: `Resposta inválida do provedor de IA`,
    falha_armazenamento: `Falha no armazenamento`,
    erro_interno: `Erro interno`,
  },
  Gi = [
    `PRONTO_SOCORRO`,
    `AMBULATORIO`,
    `INTERNACAO`,
    `LABORATORIO`,
    `OPERADORA`,
    `OUTRO`,
  ],
  Ki = {
    FILA_EMERGENCIA_MEDICA: `Emergência`,
    FILA_REVISAO_HUMANA_PRIORITARIA: `Rev. prioritária`,
    FILA_REVISAO_HUMANA: `Rev. humana`,
    AUDITORIA_AUTORIZACOES: `Auditoria`,
    FARMACIA_HOSPITALAR: `Farmácia`,
    PRONTUARIO_ELETRONICO: `Prontuário`,
  },
  qi = {
    alta: `Alta confiança`,
    media: `Média confiança`,
    baixa: `Baixa confiança`,
  },
  Ji = {
    "paciente.nome": `Nome do paciente`,
    "paciente.idade": `Idade do paciente`,
    "medico_solicitante.nome": `Nome do profissional`,
    "medico_solicitante.crm": `CRM do profissional`,
    "medico_solicitante.uf_crm": `UF do CRM`,
    diagnostico_principal: `Diagnóstico principal`,
    cid10_documentado: `CID-10 (escrito no documento)`,
    cid10_sugerido: `CID-10 (sugerido pela IA)`,
    conclusao: `Conclusão`,
    procedimento_solicitado: `Procedimento solicitado`,
    "datas.emissao": `Data de emissão`,
    "datas.realizacao_exame": `Data de realização do exame`,
    "datas.admissao": `Data de admissão`,
    "datas.alta": `Data de alta`,
  },
  Yi = { nome: `Nome`, dosagem: `Dosagem`, posologia: `Posologia` },
  Xi = /^(medicamentos|exames)\[(\d+|\*)\]\.([a-z0-9_]+)$/;
function Zi(e) {
  let t = Ji[e];
  if (t) return t;
  let n = Xi.exec(e);
  if (n) {
    let [, e, t, r] = n;
    return `${e === `medicamentos` ? `Medicamento` : `Exame`}${t === `*` ? `` : ` ${Number(t) + 1}`} · ${Yi[r ?? ``] ?? r}`;
  }
  return e;
}
function Qi(e) {
  return e === `paciente.idade`
    ? `inteiro`
    : e.startsWith(`datas.`)
      ? `data`
      : `texto`;
}
function $i(e) {
  return e === `cid10_sugerido`
    ? `Hipótese da IA — não é diagnóstico confirmado.`
    : null;
}
function ea(e) {
  let t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
  return t ? `${t[3]}/${t[2]}/${t[1]}` : e;
}
var ta = [`recebido`, `processando`],
  na = { limiar: 0.8, limiarAlto: 0.9 };
function ra(e, t) {
  return e >= t.limiarAlto ? `alta` : e >= t.limiar ? `media` : `baixa`;
}
function ia(e, t) {
  return e == null ? null : { pct: Math.round(e * 100), nivel: ra(e, t) };
}
var aa = new Set([
    `campo_ilegivel`,
    `conteudo_ilegivel`,
    `contradicao`,
    `formato_invalido`,
  ]),
  oa = {
    paciente: `Paciente`,
    profissional: `Profissional solicitante`,
    clinico: `Dados clínicos`,
    medicamento: `Medicamentos`,
    exame: `Exames`,
    datas: `Datas`,
  },
  sa = (e) => e.replace(/\[\d+\]/g, `[*]`);
function ca(e, t) {
  return t.filter((t) => t.camposAfetados.some((t) => t === e || t === sa(e)));
}
function la(e, t, n) {
  return e.situacao === `ilegivel` || t.some((e) => aa.has(e.codigo))
    ? `erro`
    : t.length
      ? `atencao`
      : e.revisadoPorHumano
        ? `ok`
        : e.situacao === `presente` &&
            e.confianca !== null &&
            e.confianca < n.limiar
          ? `atencao`
          : `ok`;
}
function ua(e, t, n) {
  let r = ca(e.chave, t),
    i = e.valor === null ? `` : String(e.valor),
    a = Qi(e.chave),
    o = r.map((e) => e.descricao);
  return (
    !o.length &&
      e.situacao === `ilegivel` &&
      o.push(`Campo ilegível no documento.`),
    !o.length &&
      e.situacao === `presente` &&
      e.confianca !== null &&
      e.confianca < n.limiar &&
      !e.revisadoPorHumano &&
      o.push(`Confiança abaixo do limiar de ${Math.round(n.limiar * 100)}%.`),
    {
      chave: e.chave,
      rotulo: Zi(e.chave),
      grupo: oa[e.grupo],
      valorTexto: i,
      valorExibicao: i === `` ? `—` : a === `data` ? ea(i) : i,
      valor: e.valor,
      situacao: e.situacao,
      situacaoRotulo: Vi[e.situacao],
      confianca: e.revisadoPorHumano ? null : ia(e.confianca, n),
      evidencia: e.evidencia,
      revisadoPorHumano: e.revisadoPorHumano,
      estado: la(e, r, n),
      motivo: o.length ? o.join(` `) : null,
      aviso: $i(e.chave),
      tipoEntrada: a,
      editavel: !0,
    }
  );
}
function da(e, t) {
  return {
    chave: `${e.codigo}-${t}`,
    titulo: Hi[e.codigo],
    descricao: e.descricao,
    gravidade: e.gravidade,
    gravidadeRotulo: Ui[e.gravidade],
    campos: e.camposAfetados.map((e) => ({ chave: e, rotulo: Zi(e) })),
    evidencia: e.evidencia,
    acaoSugerida: e.acaoSugerida,
  };
}
var M = (e) => (e == null || e === `` ? `(vazio)` : String(e));
function N(e, t) {
  let n = e.decisao === `aprovar`;
  return {
    id: `revisao-${t}`,
    quando: e.dataHora,
    tipo: n ? `aprovado` : `rejeitado`,
    titulo: n ? `Aprovado por revisor` : `Rejeitado por revisor`,
    descricao: e.justificativa,
    autor: `${e.revisor ?? `Revisor não informado`}${e.identidadeVerificada ? `` : ` (identidade não verificada)`}`,
    detalhes: [
      `Resultado v${e.versaoAnterior} → v${e.versaoRevisada}`,
      ...e.correcoes.map(
        (e) => `${Zi(e.campo)}: ${M(e.valorAnterior)} → ${M(e.valorPosterior)}`,
      ),
    ],
  };
}
function fa(e) {
  let t = [];
  (e.meta.recebidoEm &&
    t.push({
      id: `recebido`,
      quando: e.meta.recebidoEm,
      tipo: `recebido`,
      titulo: `Documento enviado`,
      descricao: e.meta.nomeArquivo ? `Arquivo ${e.meta.nomeArquivo}` : null,
      autor: `Este navegador`,
      detalhes: [],
    }),
    e.classificacao &&
      e.roteamento &&
      t.push({
        id: `processado`,
        quando: null,
        tipo: `processado`,
        titulo: `Analisado pela IA`,
        descricao: `${Fi[e.classificacao.tipoDocumento]} · ${e.classificacao.urgente ? `possível urgência` : `rotina`}${e.historico.length === 0 ? ` · ${Li[e.roteamento.destino]}` : ``}`,
        autor: e.origemAnalise
          ? `IA (${e.origemAnalise.provedor}${e.origemAnalise.modelo ? ` · ${e.origemAnalise.modelo}` : ``})`
          : `IA`,
        detalhes: e.origemAnalise?.dadosDeTeste
          ? [`Dados de teste — não é avaliação clínica`]
          : [],
      }));
  let n = e.roteamento?.notificacao;
  return (
    n &&
      t.push({
        id: `alerta`,
        quando: n.geradaEm,
        tipo: `alerta`,
        titulo: `Alerta de urgência registrado`,
        descricao: n.mensagem,
        autor: `Sistema`,
        detalhes: [
          `Evento criado e persistido; não comprova entrega a ninguém.`,
        ],
      }),
    e.erro &&
      t.push({
        id: `erro`,
        quando: e.erro.ocorridoEm,
        tipo: `erro`,
        titulo: `Falha no processamento`,
        descricao: e.erro.descricao,
        autor: `Sistema`,
        detalhes: e.erro.etapa ? [`Etapa: ${e.erro.etapa}`] : [],
      }),
    e.historico.forEach((e, n) => t.push(N(e, n))),
    t
  );
}
function pa(e) {
  let t = e.roteamento;
  return t
    ? {
        destino: t.destino,
        destinoRotulo: Li[t.destino],
        codigoMotivoRotulo: zi[t.codigoMotivo],
        motivo: t.motivo,
        justificativa: t.justificativa,
        statusRevisao: t.statusRevisao,
        statusRevisaoRotulo: Ri[t.statusRevisao],
        requerAuditoriaHumana: t.requerAuditoriaHumana,
        alerta: t.notificacao
          ? {
              mensagem: t.notificacao.mensagem,
              geradaEm: t.notificacao.geradaEm,
              evidencias: t.notificacao.evidencias,
            }
          : null,
        prioritarioSemUrgencia:
          t.destino === `FILA_REVISAO_HUMANA_PRIORITARIA` && !t.urgente,
      }
    : null;
}
var ma = (e) => {
  let t = e.filter((e) => !!e && !Number.isNaN(new Date(e).getTime()));
  return t.length
    ? t.reduce((e, t) =>
        new Date(e).getTime() >= new Date(t).getTime() ? e : t,
      )
    : null;
};
function ha(e, t = na) {
  let n = e.campos.map((n) => ua(n, e.achados, t)),
    r = n.filter((e) => e.estado !== `ok`),
    i = n.filter((e) => e.estado === `ok` && e.situacao === `presente`),
    a = n.filter((e) => e.estado === `ok` && e.situacao !== `presente`),
    o = e.classificacao?.urgente ?? e.roteamento?.urgente ?? !1,
    s = e.classificacao?.prioridade ?? e.roteamento?.prioridade ?? null,
    c = e.classificacao?.tipoDocumento ?? null,
    l = pa(e),
    u = n.find((e) => e.chave === `paciente.nome`),
    d =
      e.meta.arquivoUrl && e.meta.mimeType
        ? {
            url: e.meta.arquivoUrl,
            mimeType: e.meta.mimeType,
            nome: e.meta.nomeArquivo ?? e.id,
          }
        : null;
  return {
    id: e.id,
    status: e.status,
    statusRotulo: Mi[e.status],
    statusTom: Ni[e.status],
    versao: e.versao,
    emAndamento: ta.includes(e.status),
    tipo: c,
    tipoRotulo: c
      ? Fi[c]
      : e.status === `erro`
        ? `Não classificado`
        : `Aguardando classificação`,
    especialidade: e.classificacao?.especialidade ?? null,
    canalRotulo: e.canalOrigem ? Ii[e.canalOrigem] : null,
    pacienteNome: u && u.situacao === `presente` ? u.valorTexto : null,
    prioridade: s,
    prioridadeRotulo: s ? Pi[s] : null,
    urgente: o,
    confiancaClassificacao: ia(e.classificacao?.confianca, t),
    confiancaExtracao: ia(e.confiancaExtracao, t),
    campos: n,
    camposEmAtencao: r,
    camposOk: i,
    camposNaoEncontrados: a,
    resumo: {
      ok: i.length,
      atencao: n.filter((e) => e.estado === `atencao`).length,
      erro: n.filter((e) => e.estado === `erro`).length,
    },
    achados: e.achados.map(da),
    sinaisUrgencia: (e.classificacao?.sinaisUrgencia ?? []).map((e) => ({
      origemRotulo: Bi[e.origem],
      descricao: e.descricao,
      evidencia: e.evidencia,
    })),
    roteamento: l,
    armazenamento: e.armazenamento
      ? {
          modoRotulo:
            e.armazenamento.modo === `mock`
              ? `Armazenamento simulado`
              : `OCI Object Storage`,
          persistido: e.armazenamento.persistido,
          statusBackupRotulo: {
            sucesso: `Gravado com sucesso`,
            falha: `Falha na gravação`,
            nao_realizado: `Gravação não realizada`,
          }[e.armazenamento.statusBackup],
          caminho: e.armazenamento.caminhoObjeto,
          bucket: e.armazenamento.bucket,
        }
      : null,
    historico: fa(e),
    erro: e.erro
      ? {
          codigo: e.erro.codigo,
          titulo: Wi[e.erro.codigo],
          descricao: e.erro.descricao,
          etapa: e.erro.etapa,
        }
      : null,
    origem: e.origemAnalise
      ? {
          rotulo: e.origemAnalise.dadosDeTeste
            ? `Dados de teste (provedor simulado)`
            : `${e.origemAnalise.provedor}${e.origemAnalise.modelo ? ` · ${e.origemAnalise.modelo}` : ``}`,
          dadosDeTeste: e.origemAnalise.dadosDeTeste,
        }
      : null,
    revisaoDisponivel: e.status === `em_auditoria`,
    nomeArquivo: e.meta.nomeArquivo ?? null,
    recebidoEm: e.meta.recebidoEm ?? null,
    atividadeEm: ma([
      e.meta.recebidoEm,
      e.erro?.ocorridoEm,
      e.roteamento?.notificacao?.geradaEm,
      ...e.historico.map((e) => e.dataHora),
    ]),
    arquivo: d,
    ordemFila: o ? 0 : l?.prioritarioSemUrgencia ? 1 : 2,
  };
}
var ga = [
    `PRONTO_SOCORRO`,
    `AMBULATORIO`,
    `INTERNACAO`,
    `LABORATORIO`,
    `OPERADORA`,
    `OUTRO`,
  ],
  _a = [
    `receita_medica`,
    `laudo_exame`,
    `guia_solicitacao_procedimento`,
    `relatorio_alta_internacao`,
    `atestado_medico`,
    `outro`,
    `indeterminado`,
  ],
  va = [`rotina`, `urgente`],
  ya = [
    `recebido`,
    `processando`,
    `processado`,
    `em_auditoria`,
    `aprovado_auditoria`,
    `rejeitado`,
    `erro`,
  ],
  ba = [
    `FILA_REVISAO_HUMANA_PRIORITARIA`,
    `FILA_REVISAO_HUMANA`,
    `FILA_EMERGENCIA_MEDICA`,
    `AUDITORIA_AUTORIZACOES`,
    `FARMACIA_HOSPITALAR`,
    `PRONTUARIO_ELETRONICO`,
  ],
  xa = [`nao_necessaria`, `pendente`, `aprovada`, `rejeitada`],
  Sa = [
    `urgencia_confiavel`,
    `urgencia_dado_critico_insuficiente`,
    `conteudo_ilegivel`,
    `conteudo_ilegivel_pronto_socorro`,
    `medicamento_alto_risco`,
    `baixa_confianca_campo_obrigatorio`,
    `campo_obrigatorio_ausente`,
    `categoria_sem_roteamento_automatico`,
    `criterios_atendidos`,
    `aprovacao_humana`,
    `rejeicao_humana`,
  ],
  Ca = [`Alerta_Plantao_Medico`],
  wa = [`presente`, `ausente`, `ilegivel`],
  Ta = [`solicitado`, `realizado`],
  Ea = [`llm`, `regra`],
  Da = [
    `campo_ausente`,
    `campo_ilegivel`,
    `conteudo_ilegivel`,
    `formato_invalido`,
    `contradicao`,
    `baixa_confianca`,
    `classificacao_incerta`,
    `possivel_inconsistencia_clinica`,
    `medicamento_alto_risco`,
  ],
  Oa = [`baixa`, `media`, `alta`],
  ka = [`aprovar`, `rejeitar`],
  Aa = [`mock`, `oci_real`],
  ja = [`sucesso`, `falha`, `nao_realizado`],
  Ma = [
    `arquivo_invalido`,
    `formato_nao_suportado`,
    `arquivo_corrompido`,
    `arquivo_muito_grande`,
    `limite_paginas_excedido`,
    `provedor_indisponivel`,
    `provedor_timeout`,
    `resposta_invalida_provedor`,
    `falha_armazenamento`,
    `erro_interno`,
  ],
  Na = class extends Error {
    constructor(e) {
      (super(`Resposta fora do contrato do backend: ${e}`),
        (this.name = `ContractError`));
    }
  };
function Pa(e, t, n) {
  if (typeof n == `string` && t.includes(n)) return n;
  throw new Na(`${e} = ${JSON.stringify(n)} não é um valor conhecido`);
}
function Fa(e, t) {
  if (typeof t == `string` && t.length > 0) return t;
  throw new Na(`${e} ausente ou inválido`);
}
function Ia(e, t) {
  if (typeof t == `number` && Number.isFinite(t)) return t;
  throw new Na(`${e} ausente ou inválido`);
}
function La(e, t) {
  if (t == null) return null;
  if (typeof t == `string` || typeof t == `number`) return t;
  throw new Na(`valor do campo ${e} deve ser texto, número ou nulo`);
}
function P(e, t, n, r = {}) {
  let i = n ? Pa(`${e}.situacao`, wa, n.situacao ?? `presente`) : `ausente`;
  return {
    chave: e,
    grupo: t,
    valor: La(e, n?.valor),
    confianca: n?.confianca ?? null,
    evidencia: n?.evidencia ?? null,
    situacao: i,
    revisadoPorHumano: n?.revisado_por_humano ?? !1,
    ...r,
  };
}
function Ra(e) {
  let t = [
    P(`paciente.nome`, `paciente`, e.paciente?.nome),
    P(`paciente.idade`, `paciente`, e.paciente?.idade),
    P(`medico_solicitante.nome`, `profissional`, e.medico_solicitante?.nome),
    P(`medico_solicitante.crm`, `profissional`, e.medico_solicitante?.crm),
    P(
      `medico_solicitante.uf_crm`,
      `profissional`,
      e.medico_solicitante?.uf_crm,
    ),
    P(`diagnostico_principal`, `clinico`, e.diagnostico_principal),
    P(`cid10_documentado`, `clinico`, e.cid10_documentado),
    P(`cid10_sugerido`, `clinico`, e.cid10_sugerido),
    P(`conclusao`, `clinico`, e.conclusao),
    P(`procedimento_solicitado`, `clinico`, e.procedimento_solicitado),
  ];
  return (
    (e.medicamentos ?? []).forEach((e, n) => {
      t.push(
        P(`medicamentos[${n}].nome`, `medicamento`, e.nome),
        P(`medicamentos[${n}].dosagem`, `medicamento`, e.dosagem),
        P(`medicamentos[${n}].posologia`, `medicamento`, e.posologia),
      );
    }),
    (e.exames ?? []).forEach((e, n) => {
      let r = e.tipo == null ? null : Pa(`exames[${n}].tipo`, Ta, e.tipo);
      t.push(P(`exames[${n}].nome`, `exame`, e.nome, { tipoExame: r }));
    }),
    t.push(
      P(`datas.emissao`, `datas`, e.datas?.emissao),
      P(`datas.realizacao_exame`, `datas`, e.datas?.realizacao_exame),
      P(`datas.admissao`, `datas`, e.datas?.admissao),
      P(`datas.alta`, `datas`, e.datas?.alta),
    ),
    t
  );
}
function za(e) {
  return {
    tipoDocumento: Pa(`classificacao.tipo_documento`, _a, e.tipo_documento),
    especialidade: e.especialidade ?? null,
    prioridade: Pa(`classificacao.prioridade`, va, e.prioridade),
    urgente: e.urgente,
    confianca: Ia(
      `classificacao.score_confianca_classificacao`,
      e.score_confianca_classificacao,
    ),
    sinaisUrgencia: (e.sinais_urgencia ?? []).map((e, t) => ({
      origem: Pa(`classificacao.sinais_urgencia[${t}].origem`, Ea, e.origem),
      descricao: e.descricao,
      evidencia: e.evidencia ?? null,
    })),
  };
}
function Ba(e, t) {
  return {
    codigo: Pa(`validacoes[${t}].codigo`, Da, e.codigo),
    descricao: e.descricao,
    gravidade: Pa(`validacoes[${t}].gravidade`, Oa, e.gravidade),
    camposAfetados: e.campos_afetados ?? [],
    evidencia: e.evidencia ?? null,
    acaoSugerida: e.acao_sugerida ?? null,
  };
}
function Va(e) {
  let t = e.notificacao_gerada;
  return {
    destino: Pa(`decisao_roteamento.destino`, ba, e.destino),
    prioridade: Pa(`decisao_roteamento.prioridade`, va, e.prioridade),
    urgente: e.urgente,
    requerAuditoriaHumana: e.requer_auditoria_humana,
    motivo: e.motivo,
    codigoMotivo: Pa(`decisao_roteamento.codigo_motivo`, Sa, e.codigo_motivo),
    justificativa: e.justificativa_roteamento,
    statusRevisao: Pa(
      `decisao_roteamento.status_revisao`,
      xa,
      e.status_revisao,
    ),
    notificacao: t
      ? {
          canal: Pa(`notificacao_gerada.canal`, Ca, t.canal),
          mensagem: t.mensagem,
          geradaEm: t.gerada_em,
          documentoId: t.documento_id,
          evidencias: t.evidencias ?? [],
        }
      : null,
  };
}
function Ha(e) {
  return {
    bucket: e.bucket ?? null,
    caminhoObjeto: e.caminho_objeto ?? null,
    referenciaDocumento: e.referencia_documento ?? null,
    referenciaResultado: e.referencia_resultado ?? null,
    persistido: e.persistido,
    statusBackup: Pa(`armazenamento_oci.status_backup`, ja, e.status_backup),
    modo: Pa(`armazenamento_oci.modo_armazenamento`, Aa, e.modo_armazenamento),
  };
}
var Ua = (e) => e;
function Wa(e, t) {
  return {
    documentoId: e.documento_id,
    revisor: e.revisor ?? null,
    identidadeVerificada: e.identidade_verificada ?? !1,
    dataHora: Fa(`historico_revisao[${t}].data_hora`, e.data_hora),
    decisao: Pa(`historico_revisao[${t}].decisao`, ka, e.decisao),
    justificativa: e.justificativa ?? null,
    correcoes: (e.correcoes ?? []).map((e) => ({
      campo: e.campo,
      valorAnterior: Ua(e.valor_anterior),
      valorPosterior: Ua(e.valor_posterior),
    })),
    versaoAnterior: Ia(
      `historico_revisao[${t}].versao_resultado_anterior`,
      e.versao_resultado_anterior,
    ),
    versaoRevisada: Ia(
      `historico_revisao[${t}].versao_resultado_revisado`,
      e.versao_resultado_revisado,
    ),
  };
}
function Ga(e) {
  return {
    codigo: Pa(`erro.codigo`, Ma, e.codigo),
    descricao: e.descricao,
    etapa: e.etapa ?? null,
    ocorridoEm: e.ocorrido_em,
  };
}
function Ka(e) {
  return {
    provedor: e.provedor,
    modelo: e.modelo ?? null,
    dadosDeTeste: e.dados_de_teste,
  };
}
function qa(e, t = {}) {
  if (typeof e != `object` || !e) throw new Na(`corpo da resposta vazio`);
  return {
    id: Fa(`documento_id`, e.documento_id),
    status: Pa(`status`, ya, e.status),
    versao: e.versao_resultado ?? 1,
    canalOrigem:
      e.canal_origem == null ? null : Pa(`canal_origem`, ga, e.canal_origem),
    classificacao: e.classificacao ? za(e.classificacao) : null,
    campos: e.dados_extraidos ? Ra(e.dados_extraidos) : [],
    temDadosExtraidos: !!e.dados_extraidos,
    confiancaExtracao: e.dados_extraidos?.score_confianca_extracao ?? null,
    achados: (e.validacoes ?? []).map(Ba),
    roteamento: e.decisao_roteamento ? Va(e.decisao_roteamento) : null,
    armazenamento: e.armazenamento_oci ? Ha(e.armazenamento_oci) : null,
    historico: (e.historico_revisao ?? []).map(Wa),
    erro: e.erro ? Ga(e.erro) : null,
    origemAnalise: e.origem_analise ? Ka(e.origem_analise) : null,
    meta: t,
  };
}
var Ja = 2e3,
  Ya = 2e3,
  Xa = 120;
function Za(e) {
  let t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
  if (!t) return !1;
  let [n, r, i] = [Number(t[1]), Number(t[2]), Number(t[3])],
    a = new Date(Date.UTC(n, r - 1, i));
  return (
    a.getUTCFullYear() === n &&
    a.getUTCMonth() === r - 1 &&
    a.getUTCDate() === i
  );
}
function Qa(e, t) {
  let n = [],
    r = {};
  for (let i of e) {
    let e = t[i.chave];
    if (e === void 0 || !i.editavel) continue;
    let a = e.trim();
    a !== i.valorTexto &&
      ((i.tipoEntrada === `inteiro` &&
        /^\d+$/.test(a) &&
        i.valorTexto !== `` &&
        Number(a) === Number(i.valorTexto)) ||
        (a === ``
          ? n.push({ campo: i.chave, valor_posterior: null })
          : i.tipoEntrada === `inteiro`
            ? /^\d+$/.test(a)
              ? n.push({ campo: i.chave, valor_posterior: Number(a) })
              : (r[i.chave] = `Informe um número inteiro.`)
            : i.tipoEntrada === `data`
              ? Za(a)
                ? n.push({ campo: i.chave, valor_posterior: a })
                : (r[i.chave] = `Informe uma data válida (aaaa-mm-dd).`)
              : a.length > Ja
                ? (r[i.chave] = `Máximo de ${Ja} caracteres.`)
                : n.push({ campo: i.chave, valor_posterior: a })));
  }
  return Object.keys(r).length
    ? { ok: !1, erros: r }
    : { ok: !0, correcoes: n };
}
function $a(e) {
  let t = e.justificativa.trim(),
    n = e.revisor.trim();
  if (e.decisao === `rejeitar`) {
    if (!t) return { ok: !1, erro: `A rejeição exige justificativa.` };
    if (e.correcoes.length)
      return {
        ok: !1,
        erro: `A rejeição não aceita correções de campos. Restaure os valores editados ou aprove com correções.`,
      };
  }
  return e.decisao === `aprovar` && e.correcoes.length && !t
    ? { ok: !1, erro: `Aprovar com correções exige justificativa.` }
    : t.length > Ya
      ? { ok: !1, erro: `A justificativa aceita até ${Ya} caracteres.` }
      : n.length > Xa
        ? {
            ok: !1,
            erro: `O identificador do revisor aceita até ${Xa} caracteres.`,
          }
        : !Number.isInteger(e.versaoBase) || e.versaoBase < 1
          ? { ok: !1, erro: `Versão do resultado inválida.` }
          : {
              ok: !0,
              requisicao: {
                decisao: e.decisao,
                justificativa: t || null,
                correcoes: e.correcoes,
                revisor: n || null,
                versao_resultado_base: e.versaoBase,
              },
            };
}
function eo(e, t) {
  let n = e.toLowerCase().split(`.`).pop();
  return n === `pdf` || t === `application/pdf`
    ? `PDF`
    : n === `png` || t === `image/png`
      ? `PNG`
      : n === `jpg` || n === `jpeg` || t === `image/jpeg`
        ? `JPEG`
        : n === `txt` || t === `text/plain`
          ? `TXT`
          : null;
}
var to = `.pdf,.png,.jpg,.jpeg,.txt`;
function no(e, t) {
  return { tipo_arquivo: `TXT`, documento_texto: e, canal_origem: t };
}
var ro = class extends Error {
    status;
    detail;
    constructor(e, t) {
      (super(`API ${e}: ${t}`),
        (this.status = e),
        (this.detail = t),
        (this.name = `ApiError`));
    }
  },
  io = class extends Error {
    url;
    constructor(e) {
      (super(`Sem resposta da API em ${e}`),
        (this.url = e),
        (this.name = `ApiUnavailableError`));
    }
  };
function ao(e, t) {
  if (e && typeof e == `object` && `detail` in e) {
    let t = e.detail;
    if (typeof t == `string`) return t;
    if (Array.isArray(t))
      return t
        .map((e) => {
          let t = e,
            n = Array.isArray(t.loc)
              ? t.loc.filter((e) => e !== `body`).join(`.`)
              : ``;
          return n
            ? `${n}: ${t.msg ?? `valor inválido`}`
            : (t.msg ?? `valor inválido`);
        })
        .join(`; `);
  }
  return t;
}
function oo(e) {
  return (
    e instanceof ro &&
    (e.status === 409 || /versao_resultado_base/i.test(e.detail))
  );
}
function so(e) {
  return e instanceof io || (e instanceof ro && [502, 504].includes(e.status))
    ? `Não foi possível conectar à API (${j.apiUrl}). Verifique se o backend está em execução. Para demonstrar sem backend, defina VITE_USE_MOCK=true.`
    : e instanceof Na
      ? e.message
      : e instanceof ro
        ? e.status === 404 && /^not found$/i.test(e.detail)
          ? `A API não reconheceu esta rota (HTTP 404). Confira VITE_API_URL (${j.apiUrl}) e a versão do backend.`
          : e.status === 413
            ? `${e.detail} (limite: ${j.maxUploadMb} MB).`
            : e.detail || `A API respondeu com erro ${e.status}.`
        : e instanceof Error
          ? e.message
          : ji
            ? `Erro inesperado na simulação.`
            : `Erro inesperado.`;
}
var co = `mediflow:token`,
  lo = `mediflow:nao-autorizado`;
function uo() {
  try {
    return sessionStorage.getItem(co) ?? localStorage.getItem(co);
  } catch {
    return null;
  }
}
function fo(e, t) {
  po();
  try {
    (t ? localStorage : sessionStorage).setItem(co, e);
  } catch {}
}
function po() {
  try {
    (sessionStorage.removeItem(co), localStorage.removeItem(co));
  } catch {}
}
function mo() {
  window.dispatchEvent(new Event(lo));
}
function ho(e) {
  return (
    window.addEventListener(lo, e),
    () => window.removeEventListener(lo, e)
  );
}
var go = {
  documentos: `/documents`,
  documento: (e) => `/documents/${encodeURIComponent(e)}`,
  triagemTexto: `/documents/triage`,
  triagemUpload: `/documents/triage/upload`,
  revisao: (e) => `/documents/${encodeURIComponent(e)}/review`,
  original: (e) => `/documents/${encodeURIComponent(e)}/original`,
};
async function _o(e, t = {}) {
  let n = `${j.apiUrl}${e}`,
    r;
  try {
    r = await fetch(n, {
      ...t,
      headers: {
        Accept: `application/json`,
        ...(t.body && !(t.body instanceof FormData)
          ? { "Content-Type": `application/json` }
          : {}),
        ...(uo() ? { Authorization: `Bearer ${uo()}` } : {}),
        ...t.headers,
      },
    });
  } catch {
    throw new io(j.apiUrl);
  }
  let i = await r.text(),
    a;
  try {
    a = i ? JSON.parse(i) : void 0;
  } catch {
    a = void 0;
  }
  if (!r.ok)
    throw (
      r.status === 401 && e !== `/auth/login` && mo(),
      r.status >= 500 && a === void 0
        ? new io(j.apiUrl)
        : new ro(r.status, ao(a, i.slice(0, 200) || r.statusText))
    );
  if (a === void 0)
    throw new ro(r.status, `A API respondeu sem um corpo JSON válido.`);
  return a;
}
var vo = {
    listarDocumentos: () => _o(go.documentos),
    obterDocumento: (e) => _o(go.documento(e)),
    enviarArquivo: ({ arquivo: e, tipoArquivo: t, canalOrigem: n }) => {
      let r = new FormData();
      return (
        r.append(`arquivo`, e, e.name),
        r.append(`tipo_arquivo`, t),
        r.append(`canal_origem`, n),
        _o(go.triagemUpload, { method: `POST`, body: r })
      );
    },
    enviarTexto: (e) =>
      _o(go.triagemTexto, { method: `POST`, body: JSON.stringify(e) }),
    registrarRevisao: (e, t) =>
      _o(go.revisao(e), { method: `POST`, body: JSON.stringify(t) }),
  },
  yo = `mediflow:meta`,
  bo = new Map(),
  xo = !1;
function So() {
  if (!xo) {
    xo = !0;
    try {
      let e = sessionStorage.getItem(yo);
      if (e) for (let [t, n] of Object.entries(JSON.parse(e))) bo.set(t, n);
    } catch {}
  }
}
function Co() {
  try {
    let e = {};
    (bo.forEach(
      ({ nomeArquivo: t, recebidoEm: n, mimeType: r }, i) =>
        (e[i] = { nomeArquivo: t, recebidoEm: n, mimeType: r }),
    ),
      sessionStorage.setItem(yo, JSON.stringify(e)));
  } catch {}
}
function wo(e) {
  return (So(), bo.get(e) ?? {});
}
function To(e, t) {
  (So(), bo.set(e, { ...bo.get(e), ...t }), Co());
}
var Eo = `modulepreload`,
  Do = function (e) {
    return `/` + e;
  },
  Oo = {},
  ko = function (e) {
    return e.pathname.endsWith(`.css`);
  },
  Ao = function (e, t, n) {
    if (t in e) return e[t];
    let r = n();
    if (!r) {
      e[t] = void 0;
      return;
    }
    let i = r.then(
      () => {
        e[t] = void 0;
      },
      (n) => {
        throw ((e[t] = void 0), n);
      },
    );
    return ((e[t] = i), i);
  },
  jo = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e,
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e }),
            ),
          ),
        );
      }
      function s(e) {
        return import.meta.resolve
          ? new URL(import.meta.resolve(e))
          : new URL(e, import.meta.url);
      }
      r = o(
        t
          .map((t) => {
            t = Do(t, n);
            let r = s(t),
              i = ko(r);
            return Ao(Oo, r.href, () => {
              if (e === void 0) {
                e = { all: new Set(), styles: new Set() };
                let t = document.getElementsByTagName(`link`);
                for (let n = t.length - 1; n >= 0; n--) {
                  let r = t[n];
                  (e.all.add(r.href),
                    r.rel === `stylesheet` && e.styles.add(r.href));
                }
              }
              if ((i ? e.styles : e.all).has(r.href)) return;
              let t = document.createElement(`link`);
              if (
                ((t.rel = i ? `stylesheet` : Eo),
                i || (t.as = `script`),
                (t.crossOrigin = ``),
                (t.href = r.href),
                a && t.setAttribute(`nonce`, a),
                document.head.appendChild(t),
                i)
              )
                return new Promise((e, n) => {
                  let i = (a) => {
                    (t.removeEventListener(`load`, i),
                      t.removeEventListener(`error`, i),
                      a.type === `error`
                        ? n(Error(`Unable to preload CSS for ${r}`))
                        : e(a));
                  };
                  (t.addEventListener(`load`, i),
                    t.addEventListener(`error`, i));
                });
            });
          })
          .filter((e) => e !== void 0),
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  Mo = null;
function No() {
  return (
    (Mo ??=
      j.dataSource === `mock`
        ? jo(
            () =>
              import(`./mockApi-DkIOwand.js`).then(
                (e) => (
                  Object.entries(e.metaDeDemonstracao()).forEach(([e, t]) =>
                    To(e, t),
                  ),
                  e.mockApi
                ),
              ),
            [],
          )
        : Promise.resolve(vo)),
    Mo
  );
}
var Po = (e) => qa(e, wo(e.documento_id)),
  Fo = class extends Error {},
  Io = {
    async listar() {
      return (await (await No()).listarDocumentos()).map(Po);
    },
    async obter(e) {
      return Po(await (await No()).obterDocumento(e));
    },
    async enviar(e, t) {
      let n = eo(e.name, e.type);
      if (!n) throw new Fo(`${e.name}: formato não suportado`);
      let r = await No(),
        i =
          n === `TXT`
            ? await r.enviarTexto(no(await e.text(), t))
            : await r.enviarArquivo({
                arquivo: e,
                tipoArquivo: n,
                canalOrigem: t,
              }),
        a = {
          nomeArquivo: e.name,
          recebidoEm: new Date().toISOString(),
          mimeType: e.type || void 0,
          arquivoUrl: URL.createObjectURL(e),
        };
      return (To(i.documento_id, a), qa(i, wo(i.documento_id)));
    },
    async revisar(e, t) {
      return Po(await (await No()).registrarRevisao(e, t));
    },
  },
  Lo = `mediflow:preferencias`,
  Ro = { limiarPct: 80, limiarAltoPct: 90, revisor: ji ? `revisor.demo` : `` };
function zo() {
  try {
    let e = localStorage.getItem(Lo);
    if (e) {
      let t = JSON.parse(e),
        n = Number(t.limiarPct),
        r = Number(t.limiarAltoPct);
      return {
        limiarPct: Number.isFinite(n)
          ? Math.min(100, Math.max(0, n))
          : Ro.limiarPct,
        limiarAltoPct: Number.isFinite(r)
          ? Math.min(100, Math.max(0, r))
          : Ro.limiarAltoPct,
        revisor: typeof t.revisor == `string` ? t.revisor : Ro.revisor,
      };
    }
  } catch {}
  return Ro;
}
function Bo(e) {
  try {
    localStorage.setItem(Lo, JSON.stringify(e));
  } catch {}
}
var Vo = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
      var i = null;
      if (
        (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key` in n)
      )
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return (
        (n = r.ref),
        { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r }
      );
    }
    ((e.Fragment = n), (e.jsx = r), (e.jsxs = r));
  }),
  Ho = o((e, t) => {
    t.exports = Vo();
  }),
  F = Ho(),
  Uo = (0, v.createContext)(null);
function Wo({ children: e }) {
  let [t, n] = (0, v.useState)(zo),
    r = (0, v.useCallback)((e) => {
      (Bo(e), n(e));
    }, []),
    i = (0, v.useMemo)(
      () => ({
        preferencias: t,
        regras: {
          limiar: t.limiarPct / 100,
          limiarAlto: t.limiarAltoPct / 100,
        },
        salvar: r,
      }),
      [t, r],
    );
  return (0, F.jsx)(Uo.Provider, { value: i, children: e });
}
function Go() {
  let e = (0, v.useContext)(Uo);
  if (!e) throw Error(`useSettings deve ser usado dentro de SettingsProvider`);
  return e;
}
var Ko = (0, v.createContext)(null);
function qo(e, t) {
  return e.some((e) => e.id === t.id)
    ? e.map((e) => (e.id === t.id ? t : e))
    : [t, ...e];
}
function I({ children: e }) {
  let { regras: t } = Go(),
    [n, r] = (0, v.useState)([]),
    [i, a] = (0, v.useState)(`carregando`),
    [o, s] = (0, v.useState)(``),
    [c, l] = (0, v.useState)(``),
    u = (0, v.useRef)(n);
  u.current = n;
  let d = (0, v.useCallback)((e) => r((t) => qo(t, e)), []),
    f = (0, v.useCallback)(async () => {
      s(``);
      try {
        (r(await Io.listar()), a(`pronto`));
      } catch (e) {
        (s(so(e)), a(`erro`));
      }
    }, []);
  (0, v.useEffect)(() => void f(), [f]);
  let p = n.some((e) => ta.includes(e.status));
  ((0, v.useEffect)(() => {
    if (!p) return;
    let e = !1,
      t = setInterval(async () => {
        if (!e) {
          e = !0;
          try {
            let e = u.current
                .filter((e) => ta.includes(e.status))
                .map((e) => e.id),
              t = await Promise.all(e.map((e) => Io.obter(e)));
            (r((e) => t.reduce(qo, e)), l(``));
          } catch (e) {
            l(so(e));
          } finally {
            e = !1;
          }
        }
      }, j.pollIntervalMs);
    return () => clearInterval(t);
  }, [p]),
    (0, v.useEffect)(() => {
      if (i !== `pronto`) return;
      let e = !1,
        t = async () => {
          if (!(e || document.visibilityState !== `visible`)) {
            e = !0;
            try {
              let e = await Io.listar();
              (r((t) => {
                let n = new Map(t.map((e) => [e.id, e]));
                return [
                  ...e.map((e) => {
                    let t = n.get(e.id);
                    return t && t.versao > e.versao ? t : e;
                  }),
                  ...t.filter((t) => !e.some((e) => e.id === t.id)),
                ];
              }),
                l(``));
            } catch (e) {
              l(so(e));
            } finally {
              e = !1;
            }
          }
        },
        n = setInterval(t, j.refreshIntervalMs);
      return (
        document.addEventListener(`visibilitychange`, t),
        () => {
          (clearInterval(n),
            document.removeEventListener(`visibilitychange`, t));
        }
      );
    }, [i]));
  let m = (0, v.useCallback)(
      async (e) => {
        let t = await Io.obter(e);
        return (d(t), t);
      },
      [d],
    ),
    h = (0, v.useCallback)(
      async (e, t) => {
        let n = await Promise.allSettled(e.map((e) => Io.enviar(e, t))),
          r = { criados: [], falhas: [] };
        return (
          n.forEach((t, n) => {
            t.status === `fulfilled`
              ? (r.criados.push(t.value), d(t.value))
              : r.falhas.push({ nome: e[n].name, mensagem: so(t.reason) });
          }),
          r
        );
      },
      [d],
    ),
    g = (0, v.useCallback)(
      async (e, t) => {
        let n = await Io.revisar(e, t);
        return (d(n), n);
      },
      [d],
    ),
    _ = (0, v.useMemo)(() => n.map((e) => ha(e, t)), [n, t]),
    y = (0, v.useMemo)(
      () => ({
        views: _,
        carga: i,
        erro: o,
        erroSincronizacao: c,
        recarregar: f,
        carregarUm: m,
        enviar: h,
        revisar: g,
      }),
      [_, i, o, c, f, m, h, g],
    );
  return (0, F.jsx)(Ko.Provider, { value: y, children: e });
}
function L() {
  let e = (0, v.useContext)(Ko);
  if (!e)
    throw Error(`useDocuments deve ser usado dentro de DocumentsProvider`);
  return e;
}
var R = { login: `/auth/login`, me: `/auth/me` },
  Jo = { email: `revisor@mediflow.demo`, senha: `mediflow123` },
  Yo = {
    id: `demo-1`,
    nome: `Revisor Demo`,
    email: Jo.email,
    perfil: `revisor`,
  };
async function Xo(e, t) {
  if (ji) {
    if (
      (await new Promise((e) => setTimeout(e, 300)),
      e.trim().toLowerCase() !== Jo.email || t !== Jo.senha)
    )
      throw new ro(401, `E-mail ou senha incorretos.`);
    return { access_token: `demo-token`, token_type: `bearer`, usuario: Yo };
  }
  return _o(R.login, {
    method: `POST`,
    body: JSON.stringify({ email: e.trim(), senha: t }),
  });
}
async function Zo() {
  return ji ? Yo : _o(R.me);
}
function Qo(e) {
  if (e instanceof ro) {
    if (e.status === 401 || e.status === 400)
      return `E-mail ou senha incorretos.`;
    if (e.status === 403) return `Este usuário não tem permissão de acesso.`;
    if (e.status === 404 || e.status === 405)
      return `O backend está com o login desligado (AUTH_ENABLED=false). Ligue-o no backend ou defina VITE_AUTH_ENABLED=false.`;
    if (e.status === 422) return `Informe um e-mail válido e a senha.`;
    if (e.status === 429)
      return `Muitas tentativas. Aguarde um pouco e tente de novo.`;
  }
  return e instanceof Error ? e.message : `Não foi possível entrar.`;
}
var $o = new Map();
async function es(e) {
  let t = uo(),
    n;
  try {
    n = await fetch(`${j.apiUrl}${go.original(e)}`, {
      headers: t ? { Authorization: `Bearer ${t}` } : {},
    });
  } catch {
    throw new io(j.apiUrl);
  }
  if (n.status === 404) return null;
  if (!n.ok) {
    n.status === 401 && mo();
    let e = await n.text(),
      t;
    try {
      t = e ? JSON.parse(e) : void 0;
    } catch {
      t = void 0;
    }
    throw new ro(n.status, ao(t, n.statusText));
  }
  let r = (n.headers.get(`Content-Type`) ?? `application/octet-stream`)
    .split(`;`)[0]
    .trim();
  return { url: URL.createObjectURL(await n.blob()), mimeType: r, nome: e };
}
function z(e) {
  if (ji) return Promise.resolve(null);
  let t = $o.get(e);
  return (t || ((t = es(e)), $o.set(e, t), t.catch(() => $o.delete(e))), t);
}
function ts() {
  ($o.forEach(
    (e) =>
      void e.then((e) => e && URL.revokeObjectURL(e.url)).catch(() => void 0),
  ),
    $o.clear());
}
var ns = (0, v.createContext)(null);
function rs({ children: e }) {
  let t = j.authEnabled,
    [n, r] = (0, v.useState)(
      t ? (uo() ? `carregando` : `anonimo`) : `autenticado`,
    ),
    [i, a] = (0, v.useState)(null),
    [o, s] = (0, v.useState)(null),
    c = (0, v.useCallback)((e) => {
      (po(), ts(), a(null), s(e), r(`anonimo`));
    }, []);
  ((0, v.useEffect)(() => {
    if (!t || n !== `carregando`) return;
    let e = !0;
    return (
      Zo()
        .then((t) => {
          e && (a(t), r(`autenticado`));
        })
        .catch(() => e && c(null)),
      () => {
        e = !1;
      }
    );
  }, [t, n, c]),
    (0, v.useEffect)(() => {
      if (t) return ho(() => c(`Sua sessão expirou. Entre novamente.`));
    }, [t, c]));
  let l = (0, v.useCallback)(async (e, t, n) => {
      let i = await Xo(e, t);
      (fo(i.access_token, n), a(i.usuario), s(null), r(`autenticado`));
    }, []),
    u = (0, v.useCallback)(() => c(null), [c]),
    d = (0, v.useMemo)(
      () => ({
        habilitado: t,
        status: n,
        usuario: i,
        aviso: o,
        login: l,
        logout: u,
      }),
      [t, n, i, o, l, u],
    );
  return (0, F.jsx)(ns.Provider, { value: d, children: e });
}
function is() {
  let e = (0, v.useContext)(ns);
  if (!e) throw Error(`useAuth fora do AuthProvider`);
  return e;
}
var as = `mediflow-theme`,
  os = (0, v.createContext)(null);
function ss() {
  try {
    let e = localStorage.getItem(as);
    if (e === `light` || e === `dark` || e === `system`) return e;
  } catch {}
  return `system`;
}
var cs = () =>
  window.matchMedia(`(prefers-color-scheme: dark)`).matches ? `dark` : `light`;
function ls({ children: e }) {
  let [t, n] = (0, v.useState)(ss),
    [r, i] = (0, v.useState)(cs);
  (0, v.useEffect)(() => {
    let e = window.matchMedia(`(prefers-color-scheme: dark)`),
      t = () => i(e.matches ? `dark` : `light`);
    return (
      e.addEventListener(`change`, t),
      () => e.removeEventListener(`change`, t)
    );
  }, []);
  let a = t === `system` ? r : t;
  (0, v.useEffect)(() => {
    document.documentElement.dataset.theme = a;
  }, [a]);
  let o = (0, v.useMemo)(() => {
    let e = (e) => {
      n(e);
      try {
        localStorage.setItem(as, e);
      } catch {}
    };
    return {
      preference: t,
      resolved: a,
      setPreference: e,
      toggle: () => e(a === `dark` ? `light` : `dark`),
    };
  }, [t, a]);
  return (0, F.jsx)(os.Provider, { value: o, children: e });
}
function B() {
  let e = (0, v.useContext)(os);
  if (!e) throw Error(`useTheme deve ser usado dentro de ThemeProvider`);
  return e;
}
function us() {
  let { resolved: e, toggle: t } = B(),
    n = e === `dark` ? `claro` : `escuro`;
  return (0, F.jsx)(`button`, {
    className: `icon-button`,
    onClick: t,
    "aria-label": `Mudar para modo ${n}`,
    title: `Modo ${n}`,
    children:
      e === `dark`
        ? (0, F.jsx)(vi, { size: 18 })
        : (0, F.jsx)(ii, { size: 18 }),
  });
}
function ds() {
  return ji
    ? (0, F.jsxs)(`div`, {
        className: `demo-banner`,
        role: `status`,
        children: [
          (0, F.jsx)(Hr, { size: 16, "aria-hidden": !0 }),
          (0, F.jsxs)(`span`, {
            children: [
              (0, F.jsx)(`b`, { children: `Modo de demonstração.` }),
              ` Os documentos e resultados abaixo são `,
              (0, F.jsx)(`b`, { children: `dados sintéticos simulados` }),
              ` no navegador — nenhuma informação vem do backend real.`,
            ],
          }),
        ],
      })
    : null;
}
var fs = {
  recebido: `O arquivo chegou e aguarda a análise da IA.`,
  processando: `A IA está lendo e analisando o documento.`,
  processado: `Análise concluída e documento encaminhado automaticamente, sem revisão humana.`,
  em_auditoria: `Precisa de decisão humana. Aparece em “Pendentes de revisão”.`,
  aprovado_auditoria: `Um revisor aprovou o resultado, com ou sem correções.`,
  rejeitado: `Um revisor rejeitou o resultado.`,
  erro: `Falha técnica no processamento: não há resultado clínico.`,
};
function ps() {
  let [e, t] = (0, v.useState)(!1),
    n = (0, v.useRef)(null);
  return (
    (0, v.useEffect)(() => {
      if (!e) return;
      let r = (e) => e.key === `Escape` && t(!1);
      return (
        document.addEventListener(`keydown`, r),
        document.body.classList.add(`no-scroll`),
        n.current?.focus(),
        () => {
          (document.removeEventListener(`keydown`, r),
            document.body.classList.remove(`no-scroll`));
        }
      );
    }, [e]),
    (0, F.jsxs)(F.Fragment, {
      children: [
        (0, F.jsx)(`button`, {
          type: `button`,
          className: `icon-button help-btn`,
          "aria-label": `Abrir guia de uso`,
          title: `Guia de uso`,
          onClick: () => t(!0),
          children: (0, F.jsx)(wr, { size: 18 }),
        }),
        e &&
          (0, F.jsx)(`div`, {
            className: `modal-backdrop`,
            onMouseDown: (e) => e.target === e.currentTarget && t(!1),
            children: (0, F.jsxs)(`div`, {
              className: `modal guide`,
              role: `dialog`,
              "aria-modal": `true`,
              "aria-labelledby": `guide-title`,
              children: [
                (0, F.jsxs)(`div`, {
                  className: `modal-head`,
                  children: [
                    (0, F.jsx)(`h2`, {
                      id: `guide-title`,
                      children: `Guia de uso do MediFlow`,
                    }),
                    (0, F.jsx)(`button`, {
                      ref: n,
                      type: `button`,
                      className: `icon-button`,
                      "aria-label": `Fechar guia`,
                      onClick: () => t(!1),
                      children: (0, F.jsx)(Ei, { size: 18 }),
                    }),
                  ],
                }),
                (0, F.jsxs)(`div`, {
                  className: `modal-body`,
                  children: [
                    (0, F.jsxs)(`p`, {
                      className: `guide-lead`,
                      children: [
                        `O MediFlow lê documentos clínicos (receitas, laudos, guias…), extrai os dados com IA e encaminha cada um para a fila certa.`,
                        (0, F.jsx)(`b`, {
                          children: ` É apoio à triagem — não é diagnóstico.`,
                        }),
                        ` Quando há dúvida, uma pessoa decide.`,
                      ],
                    }),
                    ji &&
                      (0, F.jsx)(`div`, {
                        className: `banner`,
                        children: (0, F.jsxs)(`span`, {
                          children: [
                            `Você está no `,
                            (0, F.jsx)(`b`, {
                              children: `modo de demonstração`,
                            }),
                            `: os documentos são fictícios e nada é enviado ao backend.`,
                          ],
                        }),
                      }),
                    (0, F.jsx)(`h3`, { children: `Passo a passo` }),
                    (0, F.jsxs)(`ol`, {
                      className: `guide-steps`,
                      children: [
                        (0, F.jsxs)(`li`, {
                          children: [
                            (0, F.jsx)(`b`, { children: `Processar` }),
                            ` — escolha o arquivo (PDF, PNG, JPEG ou TXT, até `,
                            j.maxUploadMb,
                            ` MB), informe o `,
                            (0, F.jsx)(`em`, { children: `canal de origem` }),
                            ` (de onde o documento veio) e clique em `,
                            (0, F.jsx)(`em`, {
                              children: `Iniciar processamento`,
                            }),
                            `. A urgência é definida pelo sistema, não por você.`,
                          ],
                        }),
                        (0, F.jsxs)(`li`, {
                          children: [
                            (0, F.jsx)(`b`, { children: `Resultado da IA` }),
                            ` — veja o tipo do documento, a prioridade clínica, os campos que merecem atenção e o destino escolhido.`,
                          ],
                        }),
                        (0, F.jsxs)(`li`, {
                          children: [
                            (0, F.jsx)(`b`, {
                              children: `Pendentes de revisão`,
                            }),
                            ` — documentos `,
                            (0, F.jsx)(`em`, { children: `em auditoria` }),
                            ` esperam uma pessoa. Os urgentes vêm primeiro.`,
                          ],
                        }),
                        (0, F.jsxs)(`li`, {
                          children: [
                            (0, F.jsx)(`b`, { children: `Revisar` }),
                            ` — confira cada campo, corrija o que estiver errado, escreva a justificativa e escolha `,
                            (0, F.jsx)(`em`, { children: `Aprovar` }),
                            ` ou `,
                            (0, F.jsx)(`em`, { children: `Rejeitar` }),
                            `. Rejeitar e aprovar com correções exigem justificativa. Nada muda na tela até o backend confirmar.`,
                          ],
                        }),
                        (0, F.jsxs)(`li`, {
                          children: [
                            (0, F.jsx)(`b`, { children: `Documentos` }),
                            ` — histórico completo com busca e filtros. Clique em um documento para ver dados extraídos, validações, destino e histórico de revisão.`,
                          ],
                        }),
                        (0, F.jsxs)(`li`, {
                          children: [
                            (0, F.jsx)(`b`, { children: `Dashboard` }),
                            ` — visão geral: quantos documentos, pendências e aprovações.`,
                          ],
                        }),
                      ],
                    }),
                    (0, F.jsx)(`h3`, {
                      children: `Prioridade × confiança (são coisas diferentes)`,
                    }),
                    (0, F.jsxs)(`ul`, {
                      className: `guide-list`,
                      children: [
                        (0, F.jsxs)(`li`, {
                          children: [
                            (0, F.jsx)(`b`, { children: `Prioridade clínica` }),
                            `: `,
                            (0, F.jsx)(`em`, { children: `rotina` }),
                            ` ou `,
                            (0, F.jsx)(`em`, { children: `urgente` }),
                            `. Indica se o conteúdo sugere urgência. Uma urgência nunca é rebaixada.`,
                          ],
                        }),
                        (0, F.jsxs)(`li`, {
                          children: [
                            (0, F.jsx)(`b`, { children: `Confiança` }),
                            `: o quanto a IA tem certeza do que leu (tipo do documento e cada campo). Confiança baixa pede revisão, mas não torna o documento urgente.`,
                          ],
                        }),
                      ],
                    }),
                    (0, F.jsx)(`h3`, { children: `Status dos documentos` }),
                    (0, F.jsx)(`dl`, {
                      className: `guide-status`,
                      children: Object.keys(Mi).map((e) =>
                        (0, F.jsxs)(
                          `div`,
                          {
                            children: [
                              (0, F.jsx)(`dt`, {
                                children: (0, F.jsx)(`span`, {
                                  className: `badge ${e}`,
                                  children: Mi[e],
                                }),
                              }),
                              (0, F.jsx)(`dd`, { children: fs[e] }),
                            ],
                          },
                          e,
                        ),
                      ),
                    }),
                    (0, F.jsx)(`h3`, { children: `Sininho de notificações` }),
                    (0, F.jsxs)(`p`, {
                      children: [
                        `Mostra alertas de urgência registrados, urgentes e prioritários aguardando revisão e falhas de processamento. Clique em um item para abrir o documento; ele fica marcado como lido neste navegador. A lista se atualiza sozinha a cada `,
                        Math.round(j.refreshIntervalMs / 1e3),
                        ` `,
                        `segundos. O alerta de urgência é só um registro: `,
                        (0, F.jsx)(`b`, {
                          children: `não comprova que alguém foi avisado`,
                        }),
                        `.`,
                      ],
                    }),
                    (0, F.jsx)(`h3`, { children: `Bom saber` }),
                    (0, F.jsxs)(`ul`, {
                      className: `guide-list`,
                      children: [
                        (0, F.jsxs)(`li`, {
                          children: [
                            `O identificador do revisor é informado por você (em `,
                            (0, F.jsx)(In, {
                              to: `/configuracoes`,
                              onClick: () => t(!1),
                              children: `Configurações`,
                            }),
                            `) e não é verificado.`,
                          ],
                        }),
                        (0, F.jsx)(`li`, {
                          children: `O arquivo original só pode ser visualizado em documentos enviados por este navegador; nos demais aparecem os trechos citados pela IA.`,
                        }),
                        (0, F.jsx)(`li`, {
                          children: `No celular, o menu fica na barra inferior e as tabelas rolam para o lado.`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, F.jsx)(`div`, {
                  className: `modal-foot`,
                  children: (0, F.jsx)(`button`, {
                    type: `button`,
                    className: `primary`,
                    onClick: () => t(!1),
                    children: `Entendi`,
                  }),
                }),
              ],
            }),
          }),
      ],
    })
  );
}
var ms = { critica: 0, atencao: 1, info: 2 },
  hs = (e) => (e.instante ? new Date(e.instante).getTime() : 0);
function gs(e) {
  let t = [];
  for (let n of e) {
    let e = `${n.id}:v${n.versao}`,
      r = `${n.id} · ${n.tipoRotulo}`;
    (n.roteamento?.alerta &&
      t.push({
        chave: `${e}:alerta`,
        tipo: `alerta_urgencia`,
        severidade: `critica`,
        titulo: `Alerta de urgência registrado`,
        detalhe: `${r} — ${n.roteamento.alerta.mensagem}`,
        instante: n.roteamento.alerta.geradaEm,
        docId: n.id,
        to: `/documentos/${encodeURIComponent(n.id)}`,
      }),
      n.revisaoDisponivel && n.urgente
        ? t.push({
            chave: `${e}:revisao_urgente`,
            tipo: `revisao_urgente`,
            severidade: `critica`,
            titulo: `Urgente aguardando revisão`,
            detalhe: `${r} — ${n.roteamento?.motivo ?? `decisão humana necessária`}`,
            instante: n.atividadeEm,
            docId: n.id,
            to: `/revisao/${encodeURIComponent(n.id)}`,
          })
        : n.revisaoDisponivel &&
          n.roteamento?.prioritarioSemUrgencia &&
          t.push({
            chave: `${e}:fila_prioritaria`,
            tipo: `fila_prioritaria`,
            severidade: `atencao`,
            titulo: `Fila prioritária aguardando revisão`,
            detalhe: `${r} — ${n.roteamento.motivo}`,
            instante: n.atividadeEm,
            docId: n.id,
            to: `/revisao/${encodeURIComponent(n.id)}`,
          }),
      n.status === `erro` &&
        n.erro &&
        t.push({
          chave: `${e}:erro`,
          tipo: `erro`,
          severidade: `atencao`,
          titulo: `Falha no processamento`,
          detalhe: `${n.id} — ${n.erro.titulo}`,
          instante: n.atividadeEm,
          docId: n.id,
          to: `/documentos/${encodeURIComponent(n.id)}`,
        }));
  }
  return t.sort((e, t) => ms[e.severidade] - ms[t.severidade] || hs(t) - hs(e));
}
var _s = `mediflow:notif-lidas`;
function vs() {
  try {
    let e = localStorage.getItem(_s),
      t = e ? JSON.parse(e) : [];
    return new Set(
      Array.isArray(t) ? t.filter((e) => typeof e == `string`) : [],
    );
  } catch {
    return new Set();
  }
}
function ys(e) {
  try {
    localStorage.setItem(_s, JSON.stringify([...e].slice(-300)));
  } catch {}
}
function bs() {
  let { views: e } = L(),
    t = (0, v.useMemo)(() => gs(e), [e]),
    [n, r] = (0, v.useState)(vs),
    i = (0, v.useCallback)((e) => {
      r((t) => {
        let n = e(new Set(t));
        return (ys(n), n);
      });
    }, []),
    a = (0, v.useCallback)((e) => i((t) => t.add(e)), [i]),
    o = (0, v.useCallback)(
      () => i((e) => (t.forEach((t) => e.add(t.chave)), e)),
      [i, t],
    );
  return {
    itens: t,
    lidas: n,
    naoLidas: t.filter((e) => !n.has(e.chave)).length,
    pendentesRevisao: e.filter((e) => e.revisaoDisponivel).length,
    marcarLida: a,
    marcarTodas: o,
  };
}
var xs = (e) => !!e && !Number.isNaN(new Date(e).getTime());
function Ss(e) {
  if (!xs(e)) return `—`;
  let t = Math.round((Date.now() - new Date(e).getTime()) / 6e4);
  if (t < 1) return `agora`;
  if (t < 60) return `há ${t} min`;
  let n = Math.floor(t / 60);
  if (n < 24) return `há ${n} h`;
  let r = Math.floor(n / 24);
  return r === 1 ? `ontem` : `há ${r} dias`;
}
function Cs(e) {
  return Ss(e).replace(/^há /, ``);
}
function ws(e) {
  return xs(e)
    ? new Date(e).toLocaleString(`pt-BR`, {
        day: `2-digit`,
        month: `short`,
        hour: `2-digit`,
        minute: `2-digit`,
      })
    : `—`;
}
function Ts(e) {
  return e < 1048576
    ? `${Math.max(1, Math.round(e / 1024))} KB`
    : `${(e / 1024 / 1024).toFixed(1)} MB`;
}
var Es = { critica: gi, atencao: bi, info: Sr };
function Ds() {
  let [e, t] = (0, v.useState)(!1),
    n = (0, v.useRef)(null),
    r = yt(),
    {
      itens: i,
      lidas: a,
      naoLidas: o,
      pendentesRevisao: s,
      marcarLida: c,
      marcarTodas: l,
    } = bs();
  (0, v.useEffect)(() => {
    if (!e) return;
    let r = (e) => !n.current?.contains(e.target) && t(!1),
      i = (e) => e.key === `Escape` && t(!1);
    return (
      document.addEventListener(`mousedown`, r),
      document.addEventListener(`touchstart`, r),
      document.addEventListener(`keydown`, i),
      () => {
        (document.removeEventListener(`mousedown`, r),
          document.removeEventListener(`touchstart`, r),
          document.removeEventListener(`keydown`, i));
      }
    );
  }, [e]);
  let u = o ? `Notificações: ${o} não lida(s)` : `Notificações: nenhuma nova`;
  return (0, F.jsxs)(`div`, {
    className: `bell-wrap`,
    ref: n,
    children: [
      (0, F.jsxs)(`button`, {
        type: `button`,
        className: `icon-button bell`,
        "aria-label": u,
        "aria-haspopup": `dialog`,
        "aria-expanded": e,
        title: `Notificações`,
        onClick: () => t((e) => !e),
        children: [
          (0, F.jsx)(mr, { size: 18 }),
          o > 0 && (0, F.jsx)(`em`, { children: o > 9 ? `9+` : o }),
        ],
      }),
      e &&
        (0, F.jsxs)(`div`, {
          className: `popover notif-panel`,
          role: `dialog`,
          "aria-label": `Notificações`,
          children: [
            (0, F.jsxs)(`div`, {
              className: `popover-head`,
              children: [
                (0, F.jsx)(`b`, { children: `Notificações` }),
                (0, F.jsx)(`button`, {
                  type: `button`,
                  className: `link-button`,
                  disabled: o === 0,
                  onClick: l,
                  children: `Marcar todas como lidas`,
                }),
              ],
            }),
            i.length === 0
              ? (0, F.jsxs)(`div`, {
                  className: `popover-empty`,
                  children: [
                    (0, F.jsx)(ur, { size: 22 }),
                    (0, F.jsx)(`b`, { children: `Nenhuma notificação` }),
                    (0, F.jsx)(`span`, {
                      children: `Alertas de urgência, pendências prioritárias e falhas de processamento aparecem aqui.`,
                    }),
                  ],
                })
              : (0, F.jsx)(`ul`, {
                  className: `notif-list`,
                  children: i.map((e) => {
                    let n = Es[e.severidade],
                      i = a.has(e.chave);
                    return (0, F.jsx)(
                      `li`,
                      {
                        children: (0, F.jsxs)(`button`, {
                          type: `button`,
                          className: `notif-item ${e.severidade} ${i ? `lida` : ``}`,
                          onClick: () => {
                            (c(e.chave), t(!1), r(e.to));
                          },
                          children: [
                            (0, F.jsx)(n, { size: 18, "aria-hidden": !0 }),
                            (0, F.jsxs)(`span`, {
                              children: [
                                (0, F.jsx)(`b`, { children: e.titulo }),
                                (0, F.jsx)(`span`, {
                                  className: `notif-detail`,
                                  children: e.detalhe,
                                }),
                                e.instante &&
                                  (0, F.jsx)(`small`, {
                                    children: Ss(e.instante),
                                  }),
                              ],
                            }),
                            !i &&
                              (0, F.jsx)(`i`, {
                                className: `dot`,
                                "aria-label": `não lida`,
                              }),
                          ],
                        }),
                      },
                      e.chave,
                    );
                  }),
                }),
            (0, F.jsxs)(`div`, {
              className: `popover-foot`,
              children: [
                (0, F.jsx)(In, {
                  to: `/processar?tab=pendentes`,
                  onClick: () => t(!1),
                  className: `link-button`,
                  children:
                    s > 0
                      ? `Ver ${s} pendente(s) de revisão`
                      : `Ver pendências de revisão`,
                }),
                (0, F.jsxs)(`small`, {
                  children: [
                    `Geradas a partir dos documentos; o backend não envia push. A lista atualiza a cada `,
                    Math.round(j.refreshIntervalMs / 1e3),
                    ` s.`,
                  ],
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
var Os = [
    { to: `/processar`, label: `Processar`, Icon: Rr },
    { to: `/documentos`, label: `Documentos`, Icon: Wr },
    { to: `/configuracoes`, label: `Configurações`, Icon: mi },
    { to: `/dashboard`, label: `Dashboard`, Icon: Xr },
  ],
  ks = {
    processar: `Processar`,
    documentos: `Documentos`,
    revisao: `Revisão`,
    configuracoes: `Configurações`,
    dashboard: `Dashboard`,
  };
function As() {
  let { pathname: e, state: t } = gt(),
    n = e.split(`/`)[1] ?? ``;
  return n === `revisao`
    ? (t?.from ?? ``).startsWith(`/documentos`)
      ? `/documentos`
      : `/processar`
    : `/${n}`;
}
function js() {
  let { pathname: e } = gt(),
    [t, n] = e.split(`/`).filter(Boolean),
    r = [ks[t] ?? `Processar`];
  return (n && r.push(n), r);
}
function Ms() {
  let e = As(),
    t = js(),
    { views: n } = L(),
    { preferencias: r } = Go(),
    i = { pending: n.filter((e) => e.revisaoDisponivel).length },
    { habilitado: a, usuario: o, logout: s } = is(),
    c = (o?.nome || o?.email || r.revisor).trim(),
    l = c ? c.slice(0, 2).toUpperCase() : `?`,
    u = new Date().toLocaleDateString(`pt-BR`, {
      day: `numeric`,
      month: `short`,
      year: `numeric`,
    });
  return (0, F.jsxs)(`div`, {
    className: `app`,
    children: [
      (0, F.jsxs)(`aside`, {
        children: [
          (0, F.jsxs)(`div`, {
            className: `brand`,
            children: [
              (0, F.jsx)(`span`, { className: `brand-mark`, children: `✚` }),
              `mediflow`,
            ],
          }),
          (0, F.jsxs)(`div`, {
            className: `org`,
            children: [
              (0, F.jsx)(`b`, { children: `Triagem clínica` }),
              (0, F.jsx)(`span`, {
                children: ji ? `Dados de demonstração` : `API: ${j.apiUrl}`,
              }),
            ],
          }),
          (0, F.jsx)(`nav`, {
            "aria-label": `Navegação principal`,
            children: Os.map(({ to: t, label: n, Icon: r }) =>
              (0, F.jsxs)(
                In,
                {
                  to: t,
                  className: e === t ? `active` : ``,
                  "aria-current": e === t ? `page` : void 0,
                  children: [
                    (0, F.jsx)(r, { size: 18 }),
                    (0, F.jsx)(`span`, { children: n }),
                    t === `/processar` &&
                      !!i?.pending &&
                      (0, F.jsx)(`em`, {
                        className: `nav-count`,
                        children: i.pending,
                      }),
                  ],
                },
                t,
              ),
            ),
          }),
          (0, F.jsxs)(`div`, {
            className: `user`,
            children: [
              (0, F.jsx)(`div`, { className: `avatar`, children: l }),
              (0, F.jsxs)(`div`, {
                children: [
                  (0, F.jsx)(`b`, { children: c || `Revisor não informado` }),
                  (0, F.jsx)(`span`, {
                    children: o
                      ? o.perfil
                      : `Identificador informado, não autenticado`,
                  }),
                ],
              }),
              a &&
                (0, F.jsxs)(`button`, {
                  className: `logout-btn`,
                  onClick: s,
                  "aria-label": `Sair`,
                  title: `Sair`,
                  children: [(0, F.jsx)(ei, { size: 15 }), `Sair`],
                }),
            ],
          }),
        ],
      }),
      (0, F.jsxs)(`main`, {
        children: [
          (0, F.jsxs)(`header`, {
            children: [
              (0, F.jsxs)(`span`, {
                className: `mobile-brand`,
                children: [
                  (0, F.jsx)(`span`, {
                    className: `brand-mark`,
                    children: `✚`,
                  }),
                  `mediflow`,
                ],
              }),
              (0, F.jsxs)(`div`, {
                className: `crumb`,
                children: [
                  `Área de trabalho`,
                  t.map((e) =>
                    (0, F.jsxs)(
                      `span`,
                      { children: [(0, F.jsx)(`i`, { children: `›` }), e] },
                      e,
                    ),
                  ),
                ],
              }),
              (0, F.jsxs)(`div`, {
                className: `header-actions`,
                children: [
                  (0, F.jsx)(`span`, { className: `today`, children: u }),
                  (0, F.jsx)(us, {}),
                  (0, F.jsx)(ps, {}),
                  (0, F.jsx)(Ds, {}),
                  a &&
                    (0, F.jsx)(`button`, {
                      className: `logout-btn logout-mobile`,
                      onClick: s,
                      "aria-label": `Sair`,
                      title: `Sair`,
                      children: (0, F.jsx)(ei, { size: 18 }),
                    }),
                ],
              }),
            ],
          }),
          (0, F.jsx)(ds, {}),
          (0, F.jsx)(`section`, {
            className: `content`,
            children: (0, F.jsx)(Kt, {}),
          }),
        ],
      }),
    ],
  });
}
function Ns({ label: e = `Carregando...` }) {
  return (0, F.jsxs)(`div`, {
    className: `state`,
    role: `status`,
    children: [
      (0, F.jsx)(Qr, { className: `spin`, size: 22 }),
      (0, F.jsx)(`span`, { children: e }),
    ],
  });
}
function Ps({ message: e, onRetry: t }) {
  return (0, F.jsxs)(`div`, {
    className: `state error-state`,
    role: `alert`,
    children: [
      (0, F.jsx)(Sr, { size: 24 }),
      (0, F.jsx)(`strong`, {
        children: e || `Não foi possível carregar os dados.`,
      }),
      t &&
        (0, F.jsx)(`button`, {
          className: `secondary`,
          onClick: t,
          children: `Tentar novamente`,
        }),
    ],
  });
}
function Fs({ title: e, children: t }) {
  return (0, F.jsxs)(`div`, {
    className: `state`,
    children: [
      (0, F.jsx)(Kr, { size: 26 }),
      (0, F.jsx)(`strong`, { children: e }),
      t,
    ],
  });
}
function Is() {
  let { status: e } = is(),
    t = gt();
  return e === `carregando`
    ? (0, F.jsx)(Ns, {})
    : e === `anonimo`
      ? (0, F.jsx)(Gt, {
          to: `/login`,
          replace: !0,
          state: { from: t.pathname + t.search },
        })
      : (0, F.jsx)(I, { children: (0, F.jsx)(Kt, {}) });
}
function Ls() {
  let { habilitado: e, status: t, login: n, aviso: r } = is(),
    i = yt(),
    a = gt().state?.from || `/processar`,
    [o, s] = (0, v.useState)(``),
    [c, l] = (0, v.useState)(``),
    [u, d] = (0, v.useState)(!1),
    [f, p] = (0, v.useState)(!1),
    [m, h] = (0, v.useState)(null),
    [g, _] = (0, v.useState)(!1);
  return !e || t === `autenticado`
    ? (0, F.jsx)(Gt, { to: a, replace: !0 })
    : (0, F.jsx)(`main`, {
        className: `login-page`,
        children: (0, F.jsxs)(`form`, {
          className: `login-card`,
          onSubmit: async (e) => {
            if ((e.preventDefault(), !o.trim() || !c))
              return h(`Informe e-mail e senha.`);
            (h(null), _(!0));
            try {
              (await n(o, c, f), i(a, { replace: !0 }));
            } catch (e) {
              (h(Qo(e)), _(!1));
            }
          },
          noValidate: !0,
          children: [
            (0, F.jsxs)(`div`, {
              className: `brand login-brand`,
              children: [
                (0, F.jsx)(`span`, { className: `brand-mark`, children: `✚` }),
                `mediflow`,
              ],
            }),
            (0, F.jsx)(`h1`, { children: `Entrar` }),
            (0, F.jsx)(`p`, {
              className: `muted-text`,
              children: `Acesse a triagem clínica com a sua conta.`,
            }),
            (m || r) &&
              (0, F.jsx)(`div`, {
                className: `login-msg ${m ? `erro` : ``}`,
                role: `alert`,
                children: m ?? r,
              }),
            (0, F.jsx)(`label`, { htmlFor: `login-email`, children: `E-mail` }),
            (0, F.jsx)(`input`, {
              id: `login-email`,
              type: `email`,
              autoComplete: `username`,
              autoFocus: !0,
              value: o,
              onChange: (e) => s(e.target.value),
              disabled: g,
            }),
            (0, F.jsx)(`label`, { htmlFor: `login-senha`, children: `Senha` }),
            (0, F.jsxs)(`div`, {
              className: `senha-row`,
              children: [
                (0, F.jsx)(`input`, {
                  id: `login-senha`,
                  type: u ? `text` : `password`,
                  autoComplete: `current-password`,
                  value: c,
                  onChange: (e) => l(e.target.value),
                  disabled: g,
                }),
                (0, F.jsx)(`button`, {
                  type: `button`,
                  className: `icon-btn`,
                  "aria-label": u ? `Ocultar senha` : `Mostrar senha`,
                  onClick: () => d((e) => !e),
                  children: u
                    ? (0, F.jsx)(Pr, { size: 17 })
                    : (0, F.jsx)(Ir, { size: 17 }),
                }),
              ],
            }),
            (0, F.jsxs)(`label`, {
              className: `check-row`,
              children: [
                (0, F.jsx)(`input`, {
                  type: `checkbox`,
                  checked: f,
                  onChange: (e) => p(e.target.checked),
                  disabled: g,
                }),
                `Manter conectado neste dispositivo`,
              ],
            }),
            (0, F.jsxs)(`button`, {
              className: `primary login-submit`,
              type: `submit`,
              disabled: g,
              children: [
                g ? (0, F.jsx)(Qr, { size: 16, className: `spin` }) : null,
                g ? `Entrando…` : `Entrar`,
              ],
            }),
            (0, F.jsx)(`p`, {
              className: `muted-text login-foot`,
              children: `Esqueceu a senha? Fale com o administrador do sistema.`,
            }),
            ji &&
              (0, F.jsxs)(`p`, {
                className: `muted-text login-foot`,
                children: [
                  `Demonstração: `,
                  (0, F.jsx)(`code`, { children: Jo.email }),
                  ` / `,
                  (0, F.jsx)(`code`, { children: Jo.senha }),
                ],
              }),
          ],
        }),
      });
}
var Rs = (0, v.createContext)(null);
function zs({ children: e }) {
  let [t, n] = (0, v.useState)([]),
    r = (0, v.useRef)(0),
    i = (0, v.useCallback)((e, t = `success`) => {
      let i = ++r.current;
      (n((n) => [...n, { id: i, message: e, tone: t }]),
        setTimeout(() => n((e) => e.filter((e) => e.id !== i)), 4200));
    }, []),
    a = (0, v.useMemo)(() => i, [i]);
  return (0, F.jsxs)(Rs.Provider, {
    value: a,
    children: [
      e,
      (0, F.jsx)(`div`, {
        className: `toasts`,
        role: `status`,
        "aria-live": `polite`,
        children: t.map((e) =>
          (0, F.jsxs)(
            `div`,
            {
              className: `toast ${e.tone}`,
              children: [
                e.tone === `success`
                  ? (0, F.jsx)(br, { size: 18 })
                  : (0, F.jsx)(Sr, { size: 18 }),
                e.message,
              ],
            },
            e.id,
          ),
        ),
      }),
    ],
  });
}
function Bs() {
  let e = (0, v.useContext)(Rs);
  if (!e) throw Error(`useToast deve ser usado dentro de ToastProvider`);
  return e;
}
var Vs = j.maxUploadMb * 1024 * 1024;
function Hs({
  files: e,
  canal: t,
  busy: n,
  error: r,
  onFiles: i,
  onCanal: a,
  onStart: o,
}) {
  let [s, c] = (0, v.useState)(!1),
    [l, u] = (0, v.useState)([]),
    d = (0, v.useRef)(null),
    f = (t) => {
      let n = [],
        r = t.filter((e) =>
          eo(e.name, e.type)
            ? e.size > Vs
              ? (n.push(`${e.name}: acima de ${j.maxUploadMb} MB`), !1)
              : !0
            : (n.push(
                `${e.name}: formato não suportado (PDF, PNG, JPEG ou TXT)`,
              ),
              !1),
        );
      u(n);
      let a = new Set(e.map((e) => `${e.name}:${e.size}`));
      i([...e, ...r.filter((e) => !a.has(`${e.name}:${e.size}`))]);
    };
  return (0, F.jsxs)(`div`, {
    className: `upload-area`,
    children: [
      (0, F.jsxs)(`label`, {
        className: `card dropzone ${s ? `dragging` : ``} ${e.length ? `compact` : ``}`,
        onDragOver: (e) => {
          (e.preventDefault(), c(!0));
        },
        onDragLeave: () => c(!1),
        onDrop: (e) => {
          (e.preventDefault(), c(!1), f(Array.from(e.dataTransfer.files)));
        },
        children: [
          (0, F.jsx)(`input`, {
            ref: d,
            type: `file`,
            multiple: !0,
            className: `sr-only`,
            accept: to,
            disabled: n,
            onChange: (e) => {
              (f(Array.from(e.target.files ?? [])), (e.target.value = ``));
            },
          }),
          (0, F.jsx)(Or, { size: e.length ? 28 : 40 }),
          (0, F.jsx)(`h2`, {
            children: e.length
              ? `Adicionar mais arquivos`
              : `Adicione um documento`,
          }),
          !e.length &&
            (0, F.jsxs)(`p`, {
              children: [
                `Arraste e solte aqui · PDF, PNG, JPEG ou TXT até `,
                j.maxUploadMb,
                ` MB`,
              ],
            }),
          (0, F.jsx)(`span`, {
            className: `secondary fake-button`,
            children: `Selecionar arquivo`,
          }),
        ],
      }),
      l.length > 0 &&
        (0, F.jsx)(`div`, {
          className: `error`,
          role: `alert`,
          children: l.map((e) => (0, F.jsx)(`div`, { children: e }, e)),
        }),
      e.length > 0 &&
        (0, F.jsxs)(`div`, {
          className: `card file-list`,
          children: [
            e.map((t) =>
              (0, F.jsxs)(
                `div`,
                {
                  className: `file-row`,
                  children: [
                    (0, F.jsx)(Br, { size: 18 }),
                    (0, F.jsx)(`span`, { children: t.name }),
                    (0, F.jsx)(`small`, { children: Ts(t.size) }),
                    (0, F.jsx)(`button`, {
                      type: `button`,
                      className: `icon-button`,
                      "aria-label": `Remover ${t.name}`,
                      disabled: n,
                      onClick: () => i(e.filter((e) => e !== t)),
                      children: (0, F.jsx)(Ei, { size: 16 }),
                    }),
                  ],
                },
                `${t.name}:${t.size}`,
              ),
            ),
            (0, F.jsxs)(`div`, {
              className: `upload-footer`,
              children: [
                (0, F.jsxs)(`label`, {
                  className: `canal-select`,
                  children: [
                    (0, F.jsx)(`span`, { children: `Canal de origem` }),
                    (0, F.jsx)(`select`, {
                      value: t,
                      disabled: n,
                      onChange: (e) => a(e.target.value),
                      children: Gi.map((e) =>
                        (0, F.jsx)(`option`, { value: e, children: Ii[e] }, e),
                      ),
                    }),
                  ],
                }),
                (0, F.jsxs)(`button`, {
                  className: `primary`,
                  disabled: n,
                  onClick: o,
                  children: [
                    n && (0, F.jsx)(Qr, { className: `spin`, size: 16 }),
                    n ? `Enviando...` : `Iniciar processamento`,
                  ],
                }),
              ],
            }),
            (0, F.jsx)(`p`, {
              className: `muted-text`,
              children: `A prioridade e a urgência são definidas pelo sistema a partir do conteúdo; não podem ser escolhidas no envio.`,
            }),
            r &&
              (0, F.jsx)(`div`, {
                className: `error`,
                role: `alert`,
                children: r,
              }),
          ],
        }),
    ],
  });
}
function Us() {
  let e = yt(),
    { pathname: t, search: n } = gt();
  return (r) =>
    e(`/revisao/${encodeURIComponent(r)}`, { state: { from: t + n } });
}
function Ws({ confianca: e, variant: t = `bar`, titulo: n = `Confiança` }) {
  if (!e) return (0, F.jsx)(`span`, { className: `muted-text`, children: `—` });
  let { pct: r, nivel: i } = e,
    a = qi[i];
  if (t === `bar`)
    return (0, F.jsxs)(`span`, {
      className: `meter-bar ${i}`,
      title: `${n}: ${a}`,
      children: [
        (0, F.jsx)(`span`, {
          className: `track`,
          children: (0, F.jsx)(`span`, { style: { width: `${r}%` } }),
        }),
        (0, F.jsxs)(`b`, { children: [r, `%`] }),
      ],
    });
  let o = 2 * Math.PI * 34;
  return (0, F.jsxs)(`div`, {
    className: `meter-ring ${i}`,
    children: [
      (0, F.jsxs)(`svg`, {
        width: `84`,
        height: `84`,
        viewBox: `0 0 84 84`,
        role: `img`,
        "aria-label": `${n}: ${a}, ${r}%`,
        children: [
          (0, F.jsx)(`circle`, { className: `bg`, cx: `42`, cy: `42`, r: 34 }),
          (0, F.jsx)(`circle`, {
            className: `fg`,
            cx: `42`,
            cy: `42`,
            r: 34,
            strokeDasharray: o,
            strokeDashoffset: o * (1 - r / 100),
            transform: `rotate(-90 42 42)`,
          }),
          (0, F.jsxs)(`text`, {
            x: `42`,
            y: `47`,
            textAnchor: `middle`,
            children: [r, `%`],
          }),
        ],
      }),
      (0, F.jsxs)(`div`, {
        children: [
          (0, F.jsx)(`strong`, { children: a }),
          (0, F.jsx)(`span`, { children: n }),
        ],
      }),
    ],
  });
}
function Gs({ doc: e, showRotina: t = !1 }) {
  return e.urgente
    ? (0, F.jsxs)(`span`, {
        className: `priority urgente`,
        children: [(0, F.jsx)(`i`, { "aria-hidden": !0 }), `Urgente`],
      })
    : e.roteamento?.prioritarioSemUrgencia
      ? (0, F.jsxs)(`span`, {
          className: `priority prioritaria`,
          title: `Conteúdo ilegível recebido no Pronto-Socorro`,
          children: [
            (0, F.jsx)(`i`, { "aria-hidden": !0 }),
            `Fila prioritária`,
          ],
        })
      : !t || !e.prioridadeRotulo
        ? null
        : (0, F.jsxs)(`span`, {
            className: `priority rotina`,
            children: [
              (0, F.jsx)(`i`, { "aria-hidden": !0 }),
              e.prioridadeRotulo,
            ],
          });
}
function Ks({ doc: e }) {
  return (0, F.jsx)(`span`, {
    className: `badge ${e.status}`,
    children: e.statusRotulo,
  });
}
function qs({ erro: e }) {
  return (0, F.jsxs)(`div`, {
    className: `card error-card`,
    role: `alert`,
    children: [
      (0, F.jsxs)(`div`, {
        className: `error-card-head`,
        children: [
          (0, F.jsx)(oi, { size: 18, "aria-hidden": !0 }),
          (0, F.jsxs)(`h2`, {
            children: [`Falha no processamento · `, e.titulo],
          }),
        ],
      }),
      (0, F.jsx)(`p`, { children: e.descricao }),
      e.etapa && (0, F.jsxs)(`small`, { children: [`Etapa: `, e.etapa] }),
      (0, F.jsx)(`small`, {
        children: `Nenhuma classificação, dado extraído ou destino foi produzido para este documento.`,
      }),
    ],
  });
}
function Js({ doc: e }) {
  return e.origem?.dadosDeTeste
    ? (0, F.jsxs)(`div`, {
        className: `banner info`,
        role: `note`,
        children: [
          (0, F.jsx)(Hr, { size: 16, "aria-hidden": !0 }),
          (0, F.jsxs)(`span`, {
            children: [
              (0, F.jsxs)(`b`, { children: [e.origem.rotulo, `.`] }),
              ` Este resultado é um dado de teste, não uma avaliação clínica.`,
            ],
          }),
        ],
      })
    : null;
}
function Ys({ id: e }) {
  let { views: t, erroSincronizacao: n } = L(),
    r = Us(),
    i = t.find((t) => t.id === e);
  if (!i) return null;
  let a = i.nomeArquivo ?? i.id;
  return i.emAndamento
    ? (0, F.jsxs)(`div`, {
        className: `card analysis`,
        children: [
          (0, F.jsxs)(`div`, {
            className: `analysis-head`,
            children: [
              (0, F.jsx)(Br, { size: 18 }),
              (0, F.jsx)(`b`, { children: a }),
              (0, F.jsx)(Ks, { doc: i }),
            ],
          }),
          (0, F.jsxs)(`ol`, {
            className: `steps`,
            children: [
              (0, F.jsxs)(`li`, {
                className: `done`,
                children: [(0, F.jsx)(gr, { size: 14 }), ` Enviado`],
              }),
              (0, F.jsxs)(`li`, {
                className: `current`,
                children: [
                  (0, F.jsx)(Qr, { className: `spin`, size: 14 }),
                  ` `,
                  i.status === `recebido`
                    ? `Na fila de análise`
                    : `IA analisando`,
                ],
              }),
              (0, F.jsx)(`li`, { children: `Resultado` }),
            ],
          }),
          n &&
            (0, F.jsx)(`div`, {
              className: `error`,
              role: `alert`,
              children: n,
            }),
        ],
      })
    : i.erro
      ? (0, F.jsxs)(`div`, {
          className: `card analysis`,
          children: [
            (0, F.jsxs)(`div`, {
              className: `analysis-head`,
              children: [
                (0, F.jsx)(Br, { size: 18 }),
                (0, F.jsxs)(`div`, {
                  children: [
                    (0, F.jsx)(`b`, { children: a }),
                    (0, F.jsx)(`span`, { children: i.id }),
                  ],
                }),
                (0, F.jsx)(Ks, { doc: i }),
              ],
            }),
            (0, F.jsx)(qs, { erro: i.erro }),
          ],
        })
      : (0, F.jsxs)(`div`, {
          className: `card analysis ${i.urgente ? `urgente` : ``}`,
          children: [
            (0, F.jsxs)(`div`, {
              className: `analysis-head`,
              children: [
                (0, F.jsx)(Br, { size: 18 }),
                (0, F.jsxs)(`div`, {
                  children: [
                    (0, F.jsx)(`b`, { children: a }),
                    (0, F.jsxs)(`span`, {
                      children: [i.id, ` · `, i.tipoRotulo],
                    }),
                  ],
                }),
                (0, F.jsx)(Gs, { doc: i }),
                (0, F.jsx)(Ks, { doc: i }),
              ],
            }),
            (0, F.jsx)(Js, { doc: i }),
            (0, F.jsxs)(`div`, {
              className: `analysis-body`,
              children: [
                (0, F.jsx)(Ws, {
                  confianca: i.confiancaClassificacao,
                  variant: `ring`,
                  titulo: `Confiança da classificação`,
                }),
                (0, F.jsxs)(`div`, {
                  className: `summary-chips`,
                  children: [
                    (0, F.jsxs)(`span`, {
                      className: `ok`,
                      children: [
                        (0, F.jsx)(br, { size: 16 }),
                        ` `,
                        i.resumo.ok,
                        ` campos confiáveis`,
                      ],
                    }),
                    i.resumo.atencao > 0 &&
                      (0, F.jsxs)(`span`, {
                        className: `atencao`,
                        children: [
                          (0, F.jsx)(Sr, { size: 16 }),
                          ` `,
                          i.resumo.atencao,
                          ` em atenção`,
                        ],
                      }),
                    i.resumo.erro > 0 &&
                      (0, F.jsxs)(`span`, {
                        className: `erro`,
                        children: [
                          (0, F.jsx)(Er, { size: 16 }),
                          ` `,
                          i.resumo.erro,
                          ` com problema`,
                        ],
                      }),
                  ],
                }),
              ],
            }),
            i.roteamento &&
              (0, F.jsxs)(`p`, {
                className: `route-line`,
                children: [
                  (0, F.jsx)(`b`, {
                    children: `Destino definido pelo sistema:`,
                  }),
                  ` `,
                  i.roteamento.destinoRotulo,
                  ` · `,
                  i.roteamento.motivo,
                ],
              }),
            i.camposEmAtencao.length > 0 &&
              (0, F.jsx)(`ul`, {
                className: `issue-list`,
                children: i.camposEmAtencao.map((e) =>
                  (0, F.jsxs)(
                    `li`,
                    {
                      className: e.estado,
                      children: [
                        e.estado === `erro`
                          ? (0, F.jsx)(Er, { size: 16 })
                          : (0, F.jsx)(Sr, { size: 16 }),
                        (0, F.jsxs)(`span`, {
                          children: [
                            (0, F.jsx)(`b`, { children: e.rotulo }),
                            e.motivo && ` · ${e.motivo}`,
                          ],
                        }),
                      ],
                    },
                    e.chave,
                  ),
                ),
              }),
            i.camposOk.length > 0 &&
              (0, F.jsxs)(`details`, {
                className: `correct-list`,
                children: [
                  (0, F.jsxs)(`summary`, {
                    children: [
                      `Ver os `,
                      i.camposOk.length,
                      ` campos confiáveis`,
                    ],
                  }),
                  (0, F.jsx)(`dl`, {
                    children: i.camposOk.map((e) =>
                      (0, F.jsxs)(
                        `div`,
                        {
                          children: [
                            (0, F.jsx)(`dt`, { children: e.rotulo }),
                            (0, F.jsx)(`dd`, { children: e.valorExibicao }),
                          ],
                        },
                        e.chave,
                      ),
                    ),
                  }),
                ],
              }),
            (0, F.jsxs)(`div`, {
              className: `analysis-actions`,
              children: [
                i.revisaoDisponivel
                  ? (0, F.jsxs)(F.Fragment, {
                      children: [
                        (0, F.jsx)(`span`, {
                          className: `note`,
                          children: `Revisão humana pendente.`,
                        }),
                        (0, F.jsx)(`button`, {
                          className: `primary`,
                          onClick: () => r(i.id),
                          children: `Revisar documento`,
                        }),
                      ],
                    })
                  : (0, F.jsxs)(`span`, {
                      className: `note success-text`,
                      children: [
                        i.roteamento?.statusRevisaoRotulo ?? i.statusRotulo,
                        `.`,
                      ],
                    }),
                (0, F.jsx)(In, {
                  className: `secondary link-as-button`,
                  to: `/documentos/${encodeURIComponent(i.id)}`,
                  children: `Ver detalhes`,
                }),
              ],
            }),
          ],
        });
}
var Xs = [
    { id: `todos`, label: `Todos` },
    { id: `processados`, label: `Processados` },
    { id: `auditoria`, label: `Em auditoria` },
    { id: `aprovados`, label: `Aprovados` },
    { id: `rejeitados`, label: `Rejeitados` },
    { id: `urgentes`, label: `Urgentes` },
    { id: `erros`, label: `Com erro` },
  ],
  Zs = { revisao: `auditoria`, prioridade: `urgentes`, recentes: `todos` };
function Qs(e) {
  return e ? (Xs.some((t) => t.id === e) ? e : (Zs[e] ?? `todos`)) : `todos`;
}
function $s(e, t) {
  switch (t) {
    case `processados`:
      return e.status === `processado`;
    case `auditoria`:
      return e.status === `em_auditoria`;
    case `aprovados`:
      return e.status === `aprovado_auditoria`;
    case `rejeitados`:
      return e.status === `rejeitado`;
    case `urgentes`:
      return e.urgente;
    case `erros`:
      return e.status === `erro`;
    default:
      return !0;
  }
}
function ec(e, t, n) {
  let r = n.trim().toLowerCase();
  return e.filter(
    (e) =>
      $s(e, t) &&
      (!r ||
        [
          e.id,
          e.pacienteNome,
          e.tipoRotulo,
          e.nomeArquivo,
          e.roteamento?.destinoRotulo,
        ]
          .filter(Boolean)
          .join(` `)
          .toLowerCase()
          .includes(r)),
  );
}
var tc = (e) => e.revisaoDisponivel,
  nc = (e) => (e.atividadeEm ? new Date(e.atividadeEm).getTime() : 0);
function rc(e) {
  return [...e].sort((e, t) => e.ordemFila - t.ordemFila || nc(e) - nc(t));
}
function ic(e, t) {
  return t === `urgente`
    ? e.urgente
    : t === `prioritaria`
      ? !!e.roteamento?.prioritarioSemUrgencia
      : t !== `rotina` || (!e.urgente && !e.roteamento?.prioritarioSemUrgencia);
}
var ac = [
    { id: `todos`, label: `Todos` },
    { id: `urgente`, label: `Urgente` },
    { id: `prioritaria`, label: `Fila prioritária` },
    { id: `rotina`, label: `Rotina` },
  ],
  oc = (e) =>
    e === `emergencia` ? `urgente` : ac.some((t) => t.id === e) ? e : `todos`;
function sc() {
  let [e, t] = Hn(),
    n = Us(),
    { views: r, carga: i, erro: a, recarregar: o } = L(),
    s = oc(e.get(`prioridade`)),
    c = (0, v.useMemo)(() => rc(r.filter(tc)), [r]),
    l = c.filter((e) => ic(e, s)),
    u = (n) => {
      let r = new URLSearchParams(e);
      (n === `todos` ? r.delete(`prioridade`) : r.set(`prioridade`, n),
        t(r, { replace: !0 }));
    };
  return i === `carregando`
    ? (0, F.jsx)(Ns, { label: `Carregando pendências...` })
    : i === `erro`
      ? (0, F.jsx)(Ps, { message: a, onRetry: o })
      : (0, F.jsxs)(F.Fragment, {
          children: [
            (0, F.jsx)(`div`, {
              className: `chips`,
              role: `group`,
              "aria-label": `Filtrar por prioridade clínica`,
              children: ac.map((e) =>
                (0, F.jsxs)(
                  `button`,
                  {
                    className: `chip-btn ${s === e.id ? `on` : ``}`,
                    "aria-pressed": s === e.id,
                    onClick: () => u(e.id),
                    children: [
                      e.label,
                      (0, F.jsx)(`b`, {
                        children: c.filter((t) => ic(t, e.id)).length,
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
            l.length === 0
              ? (0, F.jsx)(`div`, {
                  className: `card`,
                  children: (0, F.jsx)(Fs, {
                    title: c.length
                      ? `Nenhum documento neste filtro`
                      : `Nenhum documento aguardando revisão`,
                  }),
                })
              : (0, F.jsx)(`div`, {
                  className: `pending-list`,
                  children: l.map((e) =>
                    (0, F.jsxs)(
                      `div`,
                      {
                        className: `card pending-row ${e.urgente ? `urgente` : ``}`,
                        children: [
                          (0, F.jsxs)(`div`, {
                            className: `pending-main`,
                            children: [
                              (0, F.jsx)(`b`, { children: e.id }),
                              (0, F.jsxs)(`span`, {
                                children: [
                                  e.tipoRotulo,
                                  e.pacienteNome ? ` · ${e.pacienteNome}` : ``,
                                ],
                              }),
                            ],
                          }),
                          (0, F.jsxs)(`div`, {
                            className: `pending-reason`,
                            children: [
                              (0, F.jsx)(Gs, { doc: e, showRotina: !0 }),
                              (0, F.jsx)(`span`, {
                                children:
                                  e.roteamento?.motivo ?? `Aguardando decisão`,
                              }),
                            ],
                          }),
                          (0, F.jsx)(Ks, { doc: e }),
                          (0, F.jsx)(Ws, {
                            confianca: e.confiancaClassificacao,
                            titulo: `Confiança da classificação`,
                          }),
                          (0, F.jsx)(`span`, {
                            className: `pending-time`,
                            children: e.atividadeEm ? Cs(e.atividadeEm) : `—`,
                          }),
                          (0, F.jsx)(`button`, {
                            className: `primary`,
                            onClick: () => n(e.id),
                            children: `Revisar`,
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                }),
          ],
        });
}
function cc() {
  let [e, t] = Hn(),
    n = e.get(`tab`) === `pendentes` ? `pendentes` : `novo`,
    { views: r, enviar: i } = L(),
    a = Bs(),
    o = r.filter((e) => e.revisaoDisponivel).length,
    [s, c] = (0, v.useState)([]),
    [l, u] = (0, v.useState)(`AMBULATORIO`),
    [d, f] = (0, v.useState)(!1),
    [p, m] = (0, v.useState)(``),
    [h, g] = (0, v.useState)(null),
    _ = async () => {
      if (s.length) {
        (f(!0), m(``));
        try {
          let { criados: e, falhas: t } = await i(s, l);
          (t.length && m(t.map((e) => `${e.nome}: ${e.mensagem}`).join(` · `)),
            e.length &&
              (g(e.map((e) => e.id)),
              t.length &&
                a(`${t.length} arquivo(s) não foram enviados.`, `error`)));
        } catch (e) {
          m(so(e));
        } finally {
          f(!1);
        }
      }
    },
    y = () => {
      (c([]), g(null), m(``));
    },
    b = (e) => t(e === `novo` ? {} : { tab: e }, { replace: !0 });
  return (0, F.jsxs)(F.Fragment, {
    children: [
      (0, F.jsxs)(`div`, {
        className: `page-head`,
        children: [
          (0, F.jsx)(`h1`, { children: `Processar` }),
          h &&
            n === `novo` &&
            (0, F.jsxs)(`button`, {
              className: `secondary`,
              onClick: y,
              children: [(0, F.jsx)(ci, { size: 16 }), ` Novo documento`],
            }),
        ],
      }),
      (0, F.jsxs)(`div`, {
        className: `tabs`,
        role: `tablist`,
        children: [
          (0, F.jsx)(`button`, {
            role: `tab`,
            "aria-selected": n === `novo`,
            className: n === `novo` ? `on` : ``,
            onClick: () => b(`novo`),
            children: `Novo processamento`,
          }),
          (0, F.jsxs)(`button`, {
            role: `tab`,
            "aria-selected": n === `pendentes`,
            className: n === `pendentes` ? `on` : ``,
            onClick: () => b(`pendentes`),
            children: [
              `Pendentes de revisão`,
              o > 0 && (0, F.jsx)(`b`, { className: `tab-count`, children: o }),
            ],
          }),
        ],
      }),
      n === `novo` &&
        (h
          ? (0, F.jsxs)(`div`, {
              className: `analysis-list`,
              children: [
                h.map((e) => (0, F.jsx)(Ys, { id: e }, e)),
                p &&
                  (0, F.jsx)(`div`, {
                    className: `error`,
                    role: `alert`,
                    children: p,
                  }),
              ],
            })
          : (0, F.jsx)(Hs, {
              files: s,
              canal: l,
              busy: d,
              error: p,
              onFiles: c,
              onCanal: u,
              onStart: _,
            })),
      n === `pendentes` && (0, F.jsx)(sc, {}),
    ],
  });
}
function lc(e) {
  let t = (e) => `"${String(e).replace(/"/g, `""`)}"`,
    n = [
      `DOCUMENTO_ID;STATUS;TIPO_DOCUMENTO;PRIORIDADE;DESTINO;STATUS_REVISAO;CONFIANCA_CLASSIFICACAO_PCT;VERSAO_RESULTADO`,
      ...e.map((e) =>
        [
          e.id,
          e.status,
          e.tipo ?? ``,
          e.prioridade ?? ``,
          e.roteamento?.destino ?? ``,
          e.roteamento?.statusRevisao ?? ``,
          e.confiancaClassificacao?.pct ?? ``,
          e.versao,
        ]
          .map(t)
          .join(`;`),
      ),
    ],
    r = URL.createObjectURL(
      new Blob(
        [
          `﻿` +
            n.join(`
`),
        ],
        { type: `text/csv;charset=utf-8` },
      ),
    ),
    i = document.createElement(`a`);
  ((i.href = r),
    (i.download = `documentos-mediflow.csv`),
    i.click(),
    URL.revokeObjectURL(r));
}
function uc() {
  let e = yt(),
    [t, n] = Hn(),
    [r, i] = (0, v.useState)(``),
    { views: a, carga: o, erro: s, recarregar: c } = L(),
    l = Qs(t.get(`filtro`)),
    u = (0, v.useMemo)(() => ec(a, l, r), [a, l, r]),
    d = (e) => n(e === `todos` ? {} : { filtro: e }, { replace: !0 });
  return (0, F.jsxs)(F.Fragment, {
    children: [
      (0, F.jsxs)(`div`, {
        className: `page-head`,
        children: [
          (0, F.jsx)(`h1`, { children: `Documentos` }),
          (0, F.jsxs)(`button`, {
            className: `secondary`,
            disabled: !u.length,
            onClick: () => lc(u),
            children: [(0, F.jsx)(Ar, { size: 16 }), ` Exportar`],
          }),
        ],
      }),
      (0, F.jsxs)(`div`, {
        className: `search`,
        children: [
          (0, F.jsx)(fi, { size: 16 }),
          (0, F.jsx)(`input`, {
            value: r,
            onChange: (e) => i(e.target.value),
            placeholder: `Buscar por ID, paciente, tipo, arquivo ou destino`,
            "aria-label": `Buscar documentos`,
          }),
        ],
      }),
      (0, F.jsx)(`div`, {
        className: `chips`,
        role: `group`,
        "aria-label": `Filtrar documentos`,
        children: Xs.map((e) =>
          (0, F.jsxs)(
            `button`,
            {
              className: `chip-btn ${l === e.id ? `on` : ``}`,
              "aria-pressed": l === e.id,
              onClick: () => d(e.id),
              children: [
                e.label,
                o === `pronto` &&
                  (0, F.jsx)(`b`, {
                    children: a.filter((t) => $s(t, e.id)).length,
                  }),
              ],
            },
            e.id,
          ),
        ),
      }),
      o === `carregando` &&
        (0, F.jsx)(Ns, { label: `Carregando documentos...` }),
      o === `erro` && (0, F.jsx)(Ps, { message: s, onRetry: c }),
      o === `pronto` &&
        (0, F.jsx)(`div`, {
          className: `card table-card`,
          children:
            u.length === 0
              ? (0, F.jsx)(Fs, {
                  title: a.length
                    ? `Nenhum documento encontrado`
                    : `Nenhum documento ainda`,
                  children: a.length
                    ? (0, F.jsx)(`button`, {
                        className: `secondary`,
                        onClick: () => {
                          (i(``), d(`todos`));
                        },
                        children: `Limpar filtros`,
                      })
                    : (0, F.jsx)(In, {
                        className: `primary link-as-button`,
                        to: `/processar`,
                        children: `Processar um documento`,
                      }),
                })
              : (0, F.jsxs)(`table`, {
                  children: [
                    (0, F.jsx)(`thead`, {
                      children: (0, F.jsxs)(`tr`, {
                        children: [
                          (0, F.jsx)(`th`, { children: `Documento` }),
                          (0, F.jsx)(`th`, { children: `Status` }),
                          (0, F.jsx)(`th`, { children: `Prioridade clínica` }),
                          (0, F.jsx)(`th`, { children: `Destino` }),
                          (0, F.jsx)(`th`, { children: `Confiança` }),
                          (0, F.jsx)(`th`, { children: `Atividade` }),
                        ],
                      }),
                    }),
                    (0, F.jsx)(`tbody`, {
                      children: u.map((t) =>
                        (0, F.jsxs)(
                          `tr`,
                          {
                            className: `clickable-row`,
                            onClick: () =>
                              e(`/documentos/${encodeURIComponent(t.id)}`),
                            children: [
                              (0, F.jsxs)(`td`, {
                                children: [
                                  (0, F.jsx)(In, {
                                    to: `/documentos/${encodeURIComponent(t.id)}`,
                                    onClick: (e) => e.stopPropagation(),
                                    children: (0, F.jsx)(`b`, {
                                      children: t.id,
                                    }),
                                  }),
                                  (0, F.jsxs)(`span`, {
                                    children: [
                                      t.tipoRotulo,
                                      t.pacienteNome
                                        ? ` · ${t.pacienteNome}`
                                        : ``,
                                    ],
                                  }),
                                ],
                              }),
                              (0, F.jsx)(`td`, {
                                children: (0, F.jsx)(Ks, { doc: t }),
                              }),
                              (0, F.jsx)(`td`, {
                                children: t.prioridadeRotulo
                                  ? (0, F.jsx)(Gs, { doc: t, showRotina: !0 })
                                  : `—`,
                              }),
                              (0, F.jsx)(`td`, {
                                children: t.roteamento?.destinoRotulo ?? `—`,
                              }),
                              (0, F.jsx)(`td`, {
                                children: (0, F.jsx)(Ws, {
                                  confianca: t.confiancaClassificacao,
                                  titulo: `Confiança da classificação`,
                                }),
                              }),
                              (0, F.jsx)(`td`, {
                                children: t.atividadeEm
                                  ? Ss(t.atividadeEm)
                                  : `—`,
                              }),
                            ],
                          },
                          t.id,
                        ),
                      ),
                    }),
                  ],
                }),
        }),
    ],
  });
}
function dc(e) {
  let t = e?.id,
    n = e?.arquivo ?? null,
    [r, i] = (0, v.useState)(null),
    [a, o] = (0, v.useState)(!1);
  return (
    (0, v.useEffect)(() => {
      if ((i(null), !t || n)) return;
      let e = !0;
      return (
        o(!0),
        z(t)
          .then((t) => e && i(t))
          .catch(() => e && i(null))
          .finally(() => e && o(!1)),
        () => {
          e = !1;
        }
      );
    }, [t, n]),
    { arquivo: n ?? r, carregando: a && !n }
  );
}
function fc(e) {
  let { views: t, carregarUm: n } = L(),
    [r, i] = (0, v.useState)(``),
    [a, o] = (0, v.useState)(!0),
    s = (0, v.useCallback)(async () => {
      (i(``), o(!0));
      try {
        await n(e);
      } catch (e) {
        i(so(e));
      } finally {
        o(!1);
      }
    }, [e, n]);
  (0, v.useEffect)(() => void s(), [s]);
  let c = t.find((t) => t.id === e);
  return { view: c, erro: r, carregando: a && !c, recarregar: s };
}
var pc = {
  alta: (0, F.jsx)(Er, { size: 16 }),
  media: (0, F.jsx)(Sr, { size: 16 }),
  baixa: (0, F.jsx)(Jr, { size: 16 }),
};
function mc({ achados: e }) {
  return e.length === 0
    ? (0, F.jsx)(`p`, {
        className: `all-good`,
        children: `Nenhum achado de validação.`,
      })
    : (0, F.jsx)(`ul`, {
        className: `findings`,
        children: e.map((e) =>
          (0, F.jsxs)(
            `li`,
            {
              className: e.gravidade,
              children: [
                (0, F.jsx)(`span`, {
                  className: `finding-icon`,
                  children: pc[e.gravidade],
                }),
                (0, F.jsxs)(`div`, {
                  children: [
                    (0, F.jsx)(`b`, { children: e.titulo }),
                    (0, F.jsx)(`span`, {
                      className: `tag`,
                      children: e.gravidadeRotulo,
                    }),
                    (0, F.jsx)(`p`, { children: e.descricao }),
                    e.campos.length > 0 &&
                      (0, F.jsxs)(`p`, {
                        className: `finding-fields`,
                        children: [
                          `Campos: `,
                          e.campos.map((e) => e.rotulo).join(`, `),
                        ],
                      }),
                    e.evidencia &&
                      (0, F.jsxs)(`p`, {
                        className: `evidence`,
                        children: [
                          `Evidência: `,
                          (0, F.jsx)(`q`, { children: e.evidencia }),
                        ],
                      }),
                    e.acaoSugerida &&
                      (0, F.jsxs)(`p`, {
                        className: `finding-action`,
                        children: [`Ação sugerida: `, e.acaoSugerida],
                      }),
                  ],
                }),
              ],
            },
            e.chave,
          ),
        ),
      });
}
function hc({ doc: e }) {
  let t = e.armazenamento;
  return (0, F.jsxs)(`div`, {
    className: `card`,
    children: [
      (0, F.jsx)(`h2`, { children: `Armazenamento` }),
      t
        ? (0, F.jsxs)(`dl`, {
            className: `kv`,
            children: [
              (0, F.jsxs)(`div`, {
                children: [
                  (0, F.jsx)(`dt`, { children: `Modo` }),
                  (0, F.jsx)(`dd`, { children: t.modoRotulo }),
                ],
              }),
              (0, F.jsxs)(`div`, {
                children: [
                  (0, F.jsx)(`dt`, { children: `Situação` }),
                  (0, F.jsx)(`dd`, { children: t.statusBackupRotulo }),
                ],
              }),
              t.bucket &&
                (0, F.jsxs)(`div`, {
                  children: [
                    (0, F.jsx)(`dt`, { children: `Bucket` }),
                    (0, F.jsx)(`dd`, { className: `mono`, children: t.bucket }),
                  ],
                }),
              t.caminho &&
                (0, F.jsxs)(`div`, {
                  children: [
                    (0, F.jsx)(`dt`, { children: `Objeto` }),
                    (0, F.jsx)(`dd`, {
                      className: `mono`,
                      children: t.caminho,
                    }),
                  ],
                }),
            ],
          })
        : (0, F.jsx)(`p`, {
            className: `muted-text`,
            children: `O backend ainda não informou a persistência deste resultado.`,
          }),
    ],
  });
}
var gc = {
  ok: (0, F.jsx)(br, { size: 16 }),
  atencao: (0, F.jsx)(Sr, { size: 16 }),
  erro: (0, F.jsx)(Er, { size: 16 }),
};
function _c(e) {
  let t = new Map();
  return (
    e.forEach((e) => t.set(e.grupo, [...(t.get(e.grupo) ?? []), e])),
    [...t.entries()]
  );
}
function vc({ campo: e }) {
  let t = e.situacao !== `presente`;
  return (0, F.jsxs)(`div`, {
    className: `data-field ${e.estado}`,
    children: [
      (0, F.jsxs)(`div`, {
        className: `data-field-head`,
        children: [
          (0, F.jsx)(`span`, {
            className: `field-icon ${e.estado}`,
            children: gc[e.estado],
          }),
          (0, F.jsx)(`span`, {
            className: `data-field-label`,
            children: e.rotulo,
          }),
          e.revisadoPorHumano
            ? (0, F.jsxs)(`span`, {
                className: `tag human`,
                children: [
                  (0, F.jsx)(wi, { size: 12 }),
                  ` Revisado por humano`,
                ],
              })
            : e.confianca &&
              (0, F.jsx)(Ws, {
                confianca: e.confianca,
                titulo: `Confiança em ${e.rotulo}`,
              }),
        ],
      }),
      (0, F.jsx)(`div`, {
        className: `data-field-value ${t ? `empty` : ``}`,
        children: t ? e.situacaoRotulo : e.valorExibicao,
      }),
      e.evidencia &&
        (0, F.jsxs)(`p`, {
          className: `evidence`,
          children: [`Evidência: `, (0, F.jsx)(`q`, { children: e.evidencia })],
        }),
      e.motivo &&
        (0, F.jsx)(`p`, {
          className: `field-issue ${e.estado}`,
          children: e.motivo,
        }),
      e.aviso &&
        (0, F.jsx)(`p`, { className: `field-meta`, children: e.aviso }),
    ],
  });
}
function yc({ campos: e }) {
  if (e.length === 0)
    return (0, F.jsx)(`p`, {
      className: `muted-text`,
      children: `Nenhum dado foi extraído deste documento.`,
    });
  let t = e.filter((e) => e.situacao === `ausente` && e.estado === `ok`),
    n = e.filter((e) => !t.includes(e));
  return (0, F.jsxs)(`div`, {
    className: `data-groups`,
    children: [
      _c(n).map(([e, t]) =>
        (0, F.jsxs)(
          `section`,
          {
            children: [
              (0, F.jsx)(`h3`, { children: e }),
              t.map((e) => (0, F.jsx)(vc, { campo: e }, e.chave)),
            ],
          },
          e,
        ),
      ),
      t.length > 0 &&
        (0, F.jsxs)(`details`, {
          className: `correct-list`,
          children: [
            (0, F.jsxs)(`summary`, {
              children: [
                t.length,
                ` `,
                t.length === 1
                  ? `campo não encontrado`
                  : `campos não encontrados`,
                ` no documento`,
              ],
            }),
            (0, F.jsx)(`ul`, {
              className: `missing-list`,
              children: t.map((e) =>
                (0, F.jsx)(`li`, { children: e.rotulo }, e.chave),
              ),
            }),
          ],
        }),
    ],
  });
}
function bc({ doc: e }) {
  let t = e.tipo !== null;
  return (0, F.jsxs)(`div`, {
    className: `card`,
    children: [
      (0, F.jsx)(`h2`, { children: `Classificação` }),
      t
        ? (0, F.jsxs)(F.Fragment, {
            children: [
              (0, F.jsxs)(`dl`, {
                className: `kv`,
                children: [
                  (0, F.jsxs)(`div`, {
                    children: [
                      (0, F.jsx)(`dt`, { children: `Tipo de documento` }),
                      (0, F.jsx)(`dd`, { children: e.tipoRotulo }),
                    ],
                  }),
                  e.especialidade &&
                    (0, F.jsxs)(`div`, {
                      children: [
                        (0, F.jsx)(`dt`, { children: `Especialidade` }),
                        (0, F.jsx)(`dd`, { children: e.especialidade }),
                      ],
                    }),
                  e.canalRotulo &&
                    (0, F.jsxs)(`div`, {
                      children: [
                        (0, F.jsx)(`dt`, { children: `Canal de origem` }),
                        (0, F.jsx)(`dd`, { children: e.canalRotulo }),
                      ],
                    }),
                  (0, F.jsxs)(`div`, {
                    children: [
                      (0, F.jsx)(`dt`, { children: `Prioridade clínica` }),
                      (0, F.jsxs)(`dd`, {
                        children: [
                          e.urgente || e.roteamento?.prioritarioSemUrgencia
                            ? (0, F.jsx)(Gs, { doc: e })
                            : e.prioridadeRotulo,
                          (0, F.jsx)(`small`, {
                            children: `Sinalização de possível urgência — não é diagnóstico.`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, F.jsxs)(`div`, {
                className: `meters`,
                children: [
                  (0, F.jsx)(Ws, {
                    confianca: e.confiancaClassificacao,
                    variant: `ring`,
                    titulo: `Confiança da classificação`,
                  }),
                  e.confiancaExtracao &&
                    (0, F.jsxs)(`div`, {
                      className: `meter-inline`,
                      children: [
                        (0, F.jsx)(`span`, {
                          children: `Confiança geral da extração (informativa)`,
                        }),
                        (0, F.jsx)(Ws, {
                          confianca: e.confiancaExtracao,
                          titulo: `Confiança geral da extração`,
                        }),
                      ],
                    }),
                ],
              }),
              e.sinaisUrgencia.length > 0 &&
                (0, F.jsxs)(`div`, {
                  className: `signals`,
                  children: [
                    (0, F.jsx)(`h3`, { children: `Sinais de urgência` }),
                    (0, F.jsx)(`ul`, {
                      children: e.sinaisUrgencia.map((e, t) =>
                        (0, F.jsxs)(
                          `li`,
                          {
                            children: [
                              (0, F.jsx)(`span`, {
                                className: `tag`,
                                children: e.origemRotulo,
                              }),
                              (0, F.jsx)(`b`, { children: e.descricao }),
                              e.evidencia &&
                                (0, F.jsx)(`q`, { children: e.evidencia }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
            ],
          })
        : (0, F.jsx)(`p`, {
            className: `muted-text`,
            children: e.erro
              ? `O documento não chegou a ser classificado (falha técnica).`
              : `Aguardando a classificação da IA.`,
          }),
    ],
  });
}
function xc({ eventos: e }) {
  return e.length === 0
    ? (0, F.jsx)(`p`, {
        className: `muted-text`,
        children: `Sem eventos registrados.`,
      })
    : (0, F.jsx)(`ol`, {
        className: `timeline`,
        children: e.map((e) =>
          (0, F.jsxs)(
            `li`,
            {
              className: e.tipo,
              children: [
                (0, F.jsx)(`b`, { children: e.titulo }),
                e.descricao && (0, F.jsx)(`p`, { children: e.descricao }),
                e.detalhes.map((e) =>
                  (0, F.jsx)(
                    `p`,
                    { className: `timeline-detail`, children: e },
                    e,
                  ),
                ),
                (0, F.jsxs)(`span`, {
                  children: [e.autor, e.quando ? ` · ${ws(e.quando)}` : ``],
                }),
              ],
            },
            e.id,
          ),
        ),
      });
}
function Sc({ doc: e }) {
  let t = e.roteamento;
  return (0, F.jsxs)(`div`, {
    className: `card`,
    children: [
      (0, F.jsx)(`h2`, { children: `Roteamento` }),
      t
        ? (0, F.jsxs)(F.Fragment, {
            children: [
              (0, F.jsxs)(`dl`, {
                className: `kv`,
                children: [
                  (0, F.jsxs)(`div`, {
                    children: [
                      (0, F.jsx)(`dt`, {
                        children: `Destino definido pelo sistema`,
                      }),
                      (0, F.jsx)(`dd`, { children: t.destinoRotulo }),
                    ],
                  }),
                  (0, F.jsxs)(`div`, {
                    children: [
                      (0, F.jsx)(`dt`, { children: `Motivo` }),
                      (0, F.jsxs)(`dd`, {
                        children: [
                          (0, F.jsx)(`span`, {
                            className: `tag`,
                            children: t.codigoMotivoRotulo,
                          }),
                          ` `,
                          t.motivo,
                        ],
                      }),
                    ],
                  }),
                  t.justificativa !== t.motivo &&
                    (0, F.jsxs)(`div`, {
                      children: [
                        (0, F.jsx)(`dt`, { children: `Justificativa` }),
                        (0, F.jsx)(`dd`, { children: t.justificativa }),
                      ],
                    }),
                  (0, F.jsxs)(`div`, {
                    children: [
                      (0, F.jsx)(`dt`, { children: `Revisão humana` }),
                      (0, F.jsxs)(`dd`, {
                        children: [
                          t.statusRevisaoRotulo,
                          t.requerAuditoriaHumana &&
                            (0, F.jsx)(`small`, {
                              children: `Um revisor precisa confirmar antes de seguir.`,
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              t.prioritarioSemUrgencia &&
                (0, F.jsx)(`p`, {
                  className: `field-meta`,
                  children: `Fila prioritária sem urgência: conteúdo obrigatório ilegível recebido no Pronto-Socorro.`,
                }),
              t.alerta &&
                (0, F.jsxs)(`div`, {
                  className: `alert-event`,
                  children: [
                    (0, F.jsx)(fr, { size: 16, "aria-hidden": !0 }),
                    (0, F.jsxs)(`div`, {
                      children: [
                        (0, F.jsx)(`b`, {
                          children: `Alerta de urgência registrado`,
                        }),
                        (0, F.jsx)(`p`, { children: t.alerta.mensagem }),
                        t.alerta.evidencias.map((e) =>
                          (0, F.jsxs)(
                            `p`,
                            {
                              className: `evidence`,
                              children: [
                                `Evidência: `,
                                (0, F.jsx)(`q`, { children: e }),
                              ],
                            },
                            e,
                          ),
                        ),
                        (0, F.jsxs)(`small`, {
                          children: [
                            ws(t.alerta.geradaEm),
                            ` · evento criado e persistido; não comprova entrega a ninguém.`,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          })
        : (0, F.jsx)(`p`, {
            className: `muted-text`,
            children: e.erro
              ? `Falha técnica: nenhum destino foi definido.`
              : `O destino será definido ao fim do processamento.`,
          }),
      e.urgente &&
        !t?.alerta &&
        t?.requerAuditoriaHumana &&
        (0, F.jsxs)(`div`, {
          className: `alert-event warn`,
          children: [
            (0, F.jsx)(gi, { size: 16, "aria-hidden": !0 }),
            (0, F.jsxs)(`div`, {
              children: [
                (0, F.jsx)(`b`, {
                  children: `Possível urgência aguardando confirmação humana`,
                }),
                (0, F.jsx)(`p`, {
                  children: `O alerta à emergência só é gerado depois da aprovação do revisor.`,
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function Cc() {
  let { id: e = `` } = Ct(),
    t = Us(),
    { view: n, erro: r, carregando: i, recarregar: a } = fc(e),
    { arquivo: o } = dc(n);
  return i
    ? (0, F.jsx)(Ns, { label: `Carregando documento...` })
    : n
      ? (0, F.jsxs)(F.Fragment, {
          children: [
            (0, F.jsxs)(In, {
              to: `/documentos`,
              className: `back-link`,
              children: [(0, F.jsx)(cr, { size: 16 }), ` Documentos`],
            }),
            (0, F.jsxs)(`div`, {
              className: `page-head`,
              children: [
                (0, F.jsxs)(`div`, {
                  children: [
                    (0, F.jsx)(`h1`, { children: n.id }),
                    (0, F.jsxs)(`p`, {
                      children: [
                        n.tipoRotulo,
                        n.canalRotulo ? ` · ${n.canalRotulo}` : ``,
                        ` · resultado v`,
                        n.versao,
                        n.recebidoEm ? ` · enviado em ${ws(n.recebidoEm)}` : ``,
                      ],
                    }),
                  ],
                }),
                (0, F.jsxs)(`div`, {
                  className: `head-buttons`,
                  children: [
                    o &&
                      (0, F.jsxs)(`a`, {
                        className: `secondary link-as-button`,
                        href: o.url,
                        target: `_blank`,
                        rel: `noreferrer`,
                        children: [
                          (0, F.jsx)(Mr, { size: 15 }),
                          ` Ver original`,
                        ],
                      }),
                    n.revisaoDisponivel &&
                      (0, F.jsx)(`button`, {
                        className: `primary`,
                        onClick: () => t(n.id),
                        children: `Revisar documento`,
                      }),
                  ],
                }),
              ],
            }),
            (0, F.jsxs)(`div`, {
              className: `detail-tags`,
              children: [
                (0, F.jsx)(Ks, { doc: n }),
                (0, F.jsx)(Gs, { doc: n, showRotina: !0 }),
              ],
            }),
            r &&
              (0, F.jsx)(`div`, {
                className: `error`,
                role: `alert`,
                children: r,
              }),
            (0, F.jsx)(Js, { doc: n }),
            n.erro && (0, F.jsx)(qs, { erro: n.erro }),
            (0, F.jsxs)(`div`, {
              className: `detail-grid`,
              children: [
                (0, F.jsxs)(`div`, {
                  className: `stack`,
                  children: [
                    !n.erro && (0, F.jsx)(bc, { doc: n }),
                    !n.erro &&
                      (0, F.jsxs)(`div`, {
                        className: `card`,
                        children: [
                          (0, F.jsx)(`h2`, { children: `Dados extraídos` }),
                          (0, F.jsx)(yc, { campos: n.campos }),
                        ],
                      }),
                    !n.erro &&
                      (0, F.jsxs)(`div`, {
                        className: `card`,
                        children: [
                          (0, F.jsx)(`h2`, { children: `Validações` }),
                          (0, F.jsx)(mc, { achados: n.achados }),
                        ],
                      }),
                  ],
                }),
                (0, F.jsxs)(`div`, {
                  className: `stack`,
                  children: [
                    (0, F.jsx)(Sc, { doc: n }),
                    (0, F.jsx)(hc, { doc: n }),
                    (0, F.jsxs)(`div`, {
                      className: `card`,
                      children: [
                        (0, F.jsx)(`h2`, { children: `Histórico` }),
                        (0, F.jsx)(xc, { eventos: [...n.historico].reverse() }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      : (0, F.jsx)(Ps, {
          message: r || `Documento não encontrado.`,
          onRetry: a,
        });
}
var wc = {
  ok: (0, F.jsx)(br, { size: 17 }),
  atencao: (0, F.jsx)(Sr, { size: 17 }),
  erro: (0, F.jsx)(Er, { size: 17 }),
};
function Tc({
  campo: e,
  valor: t,
  erro: n,
  active: r,
  disabled: i,
  onSelect: a,
  onValue: o,
}) {
  let s = t.trim() !== e.valorTexto,
    c = `campo-${e.chave}`;
  return (0, F.jsxs)(`div`, {
    className: `field-row ${e.estado} ${r ? `active` : ``}`,
    onClick: a,
    children: [
      (0, F.jsxs)(`div`, {
        className: `field-head`,
        children: [
          (0, F.jsx)(`span`, {
            className: `field-icon ${e.estado}`,
            children: wc[e.estado],
          }),
          (0, F.jsx)(`label`, { htmlFor: c, children: e.rotulo }),
          e.revisadoPorHumano
            ? (0, F.jsxs)(`small`, {
                className: `tag human`,
                children: [
                  (0, F.jsx)(wi, { size: 12 }),
                  ` Revisado por humano`,
                ],
              })
            : (0, F.jsx)(`small`, {
                children: e.confianca
                  ? `${e.confianca.pct}%`
                  : e.situacaoRotulo,
              }),
        ],
      }),
      (0, F.jsxs)(`div`, {
        className: `field-input`,
        children: [
          (0, F.jsx)(`input`, {
            id: c,
            type: e.tipoEntrada === `data` ? `date` : `text`,
            inputMode: e.tipoEntrada === `inteiro` ? `numeric` : void 0,
            value: t,
            disabled: i,
            placeholder: e.situacao === `presente` ? `` : e.situacaoRotulo,
            "aria-invalid": !!n,
            onFocus: a,
            onChange: (e) => o(e.target.value),
          }),
          s &&
            (0, F.jsxs)(`button`, {
              type: `button`,
              className: `link-button`,
              disabled: i,
              onClick: (t) => {
                (t.stopPropagation(), o(e.valorTexto));
              },
              children: [(0, F.jsx)(Si, { size: 13 }), ` Restaurar`],
            }),
        ],
      }),
      n && (0, F.jsx)(`p`, { className: `field-issue erro`, children: n }),
      e.evidencia &&
        (0, F.jsxs)(`p`, {
          className: `evidence`,
          children: [`Evidência: `, (0, F.jsx)(`q`, { children: e.evidencia })],
        }),
      e.motivo &&
        (0, F.jsx)(`p`, {
          className: `field-issue ${e.estado}`,
          children: e.motivo,
        }),
      e.aviso &&
        (0, F.jsx)(`p`, { className: `field-meta`, children: e.aviso }),
      s &&
        !n &&
        (0, F.jsxs)(`p`, {
          className: `field-meta`,
          children: [
            `Será enviado como correção · valor lido pela IA: `,
            e.valorTexto === `` ? `(vazio)` : `“${e.valorTexto}”`,
          ],
        }),
    ],
  });
}
function Ec({ doc: e, arquivo: t, activeChave: n, onSelectField: r }) {
  let i = (0, v.useRef)(null);
  (0, v.useEffect)(() => {
    i.current?.scrollIntoView({ block: `nearest`, behavior: `smooth` });
  }, [n]);
  let a = t ?? e.arquivo,
    o = a?.mimeType.startsWith(`image/`),
    s = a?.mimeType === `application/pdf`,
    c = e.campos.filter((e) => e.situacao !== `ausente`);
  return (0, F.jsxs)(`div`, {
    className: `card document-preview`,
    children: [
      (0, F.jsxs)(`div`, {
        className: `preview-toolbar`,
        children: [
          (0, F.jsx)(Br, { size: 18 }),
          (0, F.jsx)(`b`, { children: e.nomeArquivo ?? e.id }),
          (0, F.jsx)(`span`, {
            children:
              o || s ? `Documento original` : `Evidências citadas pela IA`,
          }),
        ],
      }),
      a &&
        o &&
        (0, F.jsx)(`img`, {
          className: `original-file`,
          src: a.url,
          alt: `Documento ${e.id}`,
        }),
      a &&
        s &&
        (0, F.jsx)(`iframe`, {
          className: `original-file`,
          src: a.url,
          title: `Documento ${e.id}`,
        }),
      !o &&
        !s &&
        (0, F.jsxs)(`div`, {
          className: `paper`,
          children: [
            (0, F.jsx)(`h2`, { children: e.tipoRotulo.toUpperCase() }),
            (0, F.jsx)(`hr`, {}),
            c.map((e) =>
              (0, F.jsxs)(
                `div`,
                {
                  className: `paper-line`,
                  children: [
                    (0, F.jsx)(`span`, { className: `k`, children: e.rotulo }),
                    (0, F.jsx)(`button`, {
                      type: `button`,
                      ref: n === e.chave ? i : void 0,
                      className: `v ${e.estado} ${n === e.chave ? `active` : ``}`,
                      onClick: () => r?.(e.chave),
                      children:
                        e.situacao === `ilegivel`
                          ? (e.evidencia ?? `Ilegível`)
                          : (e.evidencia ?? e.valorExibicao),
                    }),
                  ],
                },
                e.chave,
              ),
            ),
            c.length === 0 &&
              (0, F.jsx)(`p`, {
                children: `Nenhum conteúdo foi extraído deste documento.`,
              }),
            (0, F.jsx)(`p`, {
              className: `paper-note`,
              children: `Não há arquivo original guardado para este documento (ex.: enviado como texto); estes são os trechos citados como evidência.`,
            }),
          ],
        }),
    ],
  });
}
function Dc() {
  let [e] = Hn(),
    t = e.get(`id`);
  return (0, F.jsx)(Gt, {
    to: t ? `/revisao/${encodeURIComponent(t)}` : `/processar?tab=pendentes`,
    replace: !0,
  });
}
function Oc() {
  let { id: e = `` } = Ct(),
    t = yt(),
    n = gt(),
    r = Bs(),
    { revisar: i } = L(),
    { preferencias: a, salvar: o } = Go(),
    s = n.state?.from ?? `/processar?tab=pendentes`,
    { view: c, erro: l, carregando: u, recarregar: d } = fc(e),
    { arquivo: f } = dc(c),
    [p, m] = (0, v.useState)({}),
    [h, g] = (0, v.useState)(``),
    { usuario: _ } = is(),
    y = _ ? _.nome || _.email : null,
    [b, x] = (0, v.useState)(y ?? a.revisor),
    [ee, te] = (0, v.useState)(null),
    [ne, S] = (0, v.useState)(!1),
    [C, w] = (0, v.useState)(!1),
    [re, ie] = (0, v.useState)(null),
    [ae, T] = (0, v.useState)(``),
    [oe, se] = (0, v.useState)(!1),
    ce = c?.campos ?? [],
    le = (0, v.useMemo)(() => Qa(ce, p), [ce, p]),
    ue = le.ok ? {} : le.erros,
    de = le.ok ? le.correcoes.length : 0,
    fe = Object.keys(p).length > 0 || h.trim() !== ``;
  if (u) return (0, F.jsx)(Ns, { label: `Carregando documento...` });
  if (!c)
    return (0, F.jsx)(Ps, {
      message: l || `Documento não encontrado.`,
      onRetry: d,
    });
  let pe = !c.revisaoDisponivel,
    me = c.camposEmAtencao,
    he = c.camposNaoEncontrados,
    ge = (e, t) =>
      m((n) => {
        let r = { ...n };
        return (t === e.valorTexto ? delete r[e.chave] : (r[e.chave] = t), r);
      }),
    _e = () => {
      (!fe ||
        window.confirm(
          `Há alterações não enviadas. Deseja sair mesmo assim?`,
        )) &&
        t(s);
    },
    ve = async () => {
      (m({}), g(``), se(!1), T(``), await d());
    },
    ye = async (e) => {
      if ((T(``), !le.ok))
        return T(`Corrija os campos destacados antes de enviar.`);
      let n = $a({
        decisao: e,
        justificativa: h,
        revisor: b,
        versaoBase: c.versao,
        correcoes: le.correcoes,
      });
      if (!n.ok) return T(n.erro);
      ie(e);
      try {
        (await i(c.id, n.requisicao),
          !y && b.trim() !== a.revisor && o({ ...a, revisor: b.trim() }),
          r(e === `aprovar` ? `${c.id} aprovado.` : `${c.id} rejeitado.`),
          t(s));
      } catch (e) {
        (se(oo(e)), T(`${so(e)} Suas alterações continuam na tela.`));
      } finally {
        ie(null);
      }
    },
    be = (e) =>
      (0, F.jsx)(
        Tc,
        {
          campo: e,
          valor: p[e.chave] ?? e.valorTexto,
          erro: ue[e.chave],
          active: ee === e.chave,
          disabled: pe || re !== null,
          onSelect: () => te(e.chave),
          onValue: (t) => ge(e, t),
        },
        e.chave,
      ),
    xe =
      ae ||
      (de > 0 && !h.trim()
        ? `${de} correção(ões): aprovar com correções exige justificativa.`
        : fe
          ? `Alterações ainda não enviadas ao backend.`
          : ``);
  return (0, F.jsxs)(F.Fragment, {
    children: [
      (0, F.jsxs)(`button`, {
        className: `back-link`,
        onClick: _e,
        children: [(0, F.jsx)(cr, { size: 16 }), ` Voltar`],
      }),
      (0, F.jsxs)(`div`, {
        className: `page-head`,
        children: [
          (0, F.jsxs)(`div`, {
            children: [
              (0, F.jsxs)(`h1`, { children: [`Revisão · `, c.id] }),
              (0, F.jsxs)(`p`, {
                children: [
                  c.tipoRotulo,
                  c.canalRotulo ? ` · ${c.canalRotulo}` : ``,
                  ` · resultado v`,
                  c.versao,
                ],
              }),
            ],
          }),
          (0, F.jsxs)(`div`, {
            className: `detail-tags`,
            children: [
              (0, F.jsx)(Gs, { doc: c, showRotina: !0 }),
              (0, F.jsx)(Ks, { doc: c }),
              (0, F.jsx)(Ws, {
                confianca: c.confiancaClassificacao,
                titulo: `Confiança da classificação`,
              }),
            ],
          }),
        ],
      }),
      (0, F.jsx)(Js, { doc: c }),
      pe &&
        (0, F.jsxs)(`div`, {
          className: `banner`,
          children: [
            `Este resultado está “`,
            c.statusRotulo,
            `”. O backend só aceita revisão de resultados em auditoria.`,
            (0, F.jsx)(In, {
              to: `/documentos/${encodeURIComponent(c.id)}`,
              className: `link-button`,
              children: `Ver detalhes`,
            }),
          ],
        }),
      oe &&
        (0, F.jsxs)(`div`, {
          className: `banner info`,
          role: `alert`,
          children: [
            `O resultado mudou desde que você o abriu.`,
            (0, F.jsxs)(`button`, {
              className: `secondary`,
              onClick: ve,
              children: [(0, F.jsx)(ui, { size: 14 }), ` Recarregar resultado`],
            }),
          ],
        }),
      (0, F.jsxs)(`div`, {
        className: `review-grid`,
        children: [
          (0, F.jsx)(Ec, {
            doc: c,
            arquivo: f,
            activeChave: ee,
            onSelectField: te,
          }),
          (0, F.jsxs)(`div`, {
            className: `review-side`,
            children: [
              (0, F.jsxs)(`div`, {
                className: `card`,
                children: [
                  (0, F.jsxs)(`div`, {
                    className: `card-title`,
                    children: [
                      (0, F.jsx)(`h2`, { children: `Análise da IA` }),
                      me.length > 0 &&
                        (0, F.jsxs)(`span`, {
                          className: `progress-text`,
                          children: [
                            me.length,
                            ` `,
                            me.length === 1 ? `ponto` : `pontos`,
                            ` de atenção`,
                          ],
                        }),
                    ],
                  }),
                  ce.length === 0 &&
                    (0, F.jsx)(`p`, {
                      className: `muted-text`,
                      children: `Nenhum campo foi extraído deste documento.`,
                    }),
                  me.length > 0 &&
                    (0, F.jsx)(`div`, {
                      className: `field-group`,
                      children: me.map(be),
                    }),
                  me.length === 0 &&
                    ce.length > 0 &&
                    (0, F.jsx)(`p`, {
                      className: `all-good`,
                      children: `Nenhum ponto de atenção nos campos extraídos.`,
                    }),
                  c.camposOk.length > 0 &&
                    (0, F.jsxs)(`div`, {
                      className: `correct-group`,
                      children: [
                        (0, F.jsxs)(`button`, {
                          className: `toggle-group`,
                          onClick: () => S((e) => !e),
                          "aria-expanded": ne,
                          children: [
                            (0, F.jsx)(vr, {
                              size: 16,
                              className: ne ? `open` : ``,
                            }),
                            c.camposOk.length,
                            ` campos confiáveis`,
                          ],
                        }),
                        ne &&
                          (0, F.jsx)(`div`, {
                            className: `field-group`,
                            children: c.camposOk.map(be),
                          }),
                      ],
                    }),
                  he.length > 0 &&
                    (0, F.jsxs)(`div`, {
                      className: `correct-group`,
                      children: [
                        (0, F.jsxs)(`button`, {
                          className: `toggle-group`,
                          onClick: () => w((e) => !e),
                          "aria-expanded": C,
                          children: [
                            (0, F.jsx)(vr, {
                              size: 16,
                              className: C ? `open` : ``,
                            }),
                            he.length,
                            ` campos não encontrados`,
                          ],
                        }),
                        C &&
                          (0, F.jsx)(`div`, {
                            className: `field-group`,
                            children: he.map(be),
                          }),
                      ],
                    }),
                ],
              }),
              c.achados.length > 0 &&
                (0, F.jsxs)(`div`, {
                  className: `card`,
                  children: [
                    (0, F.jsx)(`h2`, { children: `Validações` }),
                    (0, F.jsx)(mc, { achados: c.achados }),
                  ],
                }),
              (0, F.jsxs)(`div`, {
                className: `card`,
                children: [
                  (0, F.jsx)(`h2`, { children: `Decisão do revisor` }),
                  (0, F.jsx)(`label`, {
                    className: `range-label`,
                    htmlFor: `justificativa`,
                    children: `Justificativa`,
                  }),
                  (0, F.jsx)(`textarea`, {
                    id: `justificativa`,
                    value: h,
                    disabled: pe || re !== null,
                    maxLength: 2e3,
                    onChange: (e) => g(e.target.value),
                    placeholder: `Obrigatória para rejeitar e para aprovar com correções`,
                  }),
                  (0, F.jsx)(`label`, {
                    className: `range-label`,
                    htmlFor: `revisor`,
                    children: `Identificador do revisor`,
                  }),
                  (0, F.jsx)(`input`, {
                    id: `revisor`,
                    value: b,
                    disabled: pe || re !== null || !!y,
                    maxLength: 120,
                    onChange: (e) => x(e.target.value),
                    placeholder: `Ex.: nome ou matrícula`,
                  }),
                  (0, F.jsx)(`p`, {
                    className: `muted-text`,
                    children: y
                      ? `Usuário da sessão atual.`
                      : `Informado por você e registrado sem verificação de identidade (o backend não autentica).`,
                  }),
                  c.urgente &&
                    (0, F.jsx)(`p`, {
                      className: `muted-text`,
                      children: `Documento sinalizado como urgente: a urgência não é rebaixada. Aprovar encaminha à fila de emergência e registra o alerta; rejeitar mantém o documento na fila de revisão.`,
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, F.jsxs)(`div`, {
        className: `action-bar`,
        children: [
          (0, F.jsx)(`span`, {
            className: `hint ${ae ? `error-text` : ``}`,
            role: ae ? `alert` : void 0,
            children: xe,
          }),
          (0, F.jsxs)(`button`, {
            className: `danger`,
            disabled: pe || re !== null,
            onClick: () => ye(`rejeitar`),
            children: [
              re === `rejeitar`
                ? (0, F.jsx)(Qr, { className: `spin`, size: 16 })
                : (0, F.jsx)(Ei, { size: 16 }),
              `Rejeitar`,
            ],
          }),
          (0, F.jsxs)(`button`, {
            className: `primary`,
            disabled: pe || re !== null,
            onClick: () => ye(`aprovar`),
            children: [
              re === `aprovar`
                ? (0, F.jsx)(Qr, { className: `spin`, size: 16 })
                : (0, F.jsx)(gr, { size: 16 }),
              de > 0 ? `Aprovar com ${de} correção(ões)` : `Aprovar`,
            ],
          }),
        ],
      }),
    ],
  });
}
var kc = [
  { id: `light`, label: `Claro`, Icon: vi },
  { id: `dark`, label: `Escuro`, Icon: ii },
  { id: `system`, label: `Automático`, Icon: ni },
];
function Ac() {
  let { preferencias: e, salvar: t } = Go(),
    { preference: n, setPreference: r } = B(),
    i = Bs(),
    { usuario: a, habilitado: o, logout: s } = is(),
    [c, l] = (0, v.useState)(e);
  (0, v.useEffect)(() => l(e), [e]);
  let u = JSON.stringify(c) !== JSON.stringify(e);
  return (0, F.jsxs)(F.Fragment, {
    children: [
      (0, F.jsxs)(`div`, {
        className: `page-head`,
        children: [
          (0, F.jsx)(`h1`, { children: `Configurações` }),
          (0, F.jsx)(`button`, {
            className: `primary`,
            disabled: !u,
            onClick: () => {
              (t({ ...c, revisor: c.revisor.trim() }),
                i(`Preferências salvas neste navegador.`));
            },
            children: `Salvar alterações`,
          }),
        ],
      }),
      (0, F.jsxs)(`div`, {
        className: `settings-grid`,
        children: [
          (0, F.jsxs)(`div`, {
            className: `card`,
            children: [
              (0, F.jsx)(`h2`, { children: `Aparência` }),
              (0, F.jsx)(`div`, {
                className: `theme-options`,
                role: `radiogroup`,
                "aria-label": `Tema`,
                children: kc.map(({ id: e, label: t, Icon: i }) =>
                  (0, F.jsxs)(
                    `button`,
                    {
                      role: `radio`,
                      "aria-checked": n === e,
                      className: `theme-option ${n === e ? `on` : ``}`,
                      onClick: () => r(e),
                      children: [(0, F.jsx)(i, { size: 18 }), t],
                    },
                    e,
                  ),
                ),
              }),
            ],
          }),
          (0, F.jsxs)(`div`, {
            className: `card`,
            children: [
              (0, F.jsx)(`h2`, { children: `Exibição da confiança` }),
              (0, F.jsx)(`p`, {
                className: `muted-text`,
                children: `Só afeta as cores e os níveis mostrados aqui. O encaminhamento dos documentos usa o limiar configurado no backend (padrão 80%).`,
              }),
              (0, F.jsx)(`label`, {
                className: `range-label`,
                htmlFor: `high`,
                children: `Confiança alta a partir de`,
              }),
              (0, F.jsxs)(`div`, {
                className: `range-row`,
                children: [
                  (0, F.jsx)(`input`, {
                    id: `high`,
                    type: `range`,
                    min: `60`,
                    max: `100`,
                    value: c.limiarAltoPct,
                    onChange: (e) => {
                      let t = Number(e.target.value);
                      l((e) => ({
                        ...e,
                        limiarAltoPct: t,
                        limiarPct: Math.min(e.limiarPct, t),
                      }));
                    },
                  }),
                  (0, F.jsxs)(`b`, { children: [c.limiarAltoPct, `%`] }),
                ],
              }),
              (0, F.jsx)(`label`, {
                className: `range-label`,
                htmlFor: `low`,
                children: `Confiança baixa abaixo de`,
              }),
              (0, F.jsxs)(`div`, {
                className: `range-row`,
                children: [
                  (0, F.jsx)(`input`, {
                    id: `low`,
                    type: `range`,
                    min: `50`,
                    max: c.limiarAltoPct,
                    value: c.limiarPct,
                    onChange: (e) =>
                      l((t) => ({ ...t, limiarPct: Number(e.target.value) })),
                  }),
                  (0, F.jsxs)(`b`, { children: [c.limiarPct, `%`] }),
                ],
              }),
            ],
          }),
          a
            ? (0, F.jsxs)(`div`, {
                className: `card`,
                children: [
                  (0, F.jsx)(`h2`, { children: `Conta` }),
                  (0, F.jsxs)(`p`, {
                    children: [
                      (0, F.jsx)(`b`, { children: a.nome }),
                      (0, F.jsx)(`br`, {}),
                      (0, F.jsxs)(`span`, {
                        className: `muted-text`,
                        children: [a.email, ` · `, a.perfil],
                      }),
                    ],
                  }),
                  (0, F.jsx)(`p`, {
                    className: `muted-text`,
                    children: `As revisões são registradas com a identidade desta conta.`,
                  }),
                  o &&
                    (0, F.jsx)(`button`, {
                      onClick: s,
                      children: `Sair da conta`,
                    }),
                ],
              })
            : (0, F.jsxs)(`div`, {
                className: `card`,
                children: [
                  (0, F.jsx)(`h2`, { children: `Revisor` }),
                  (0, F.jsx)(`label`, {
                    className: `range-label`,
                    htmlFor: `revisor-pref`,
                    children: `Identificador usado nas revisões`,
                  }),
                  (0, F.jsx)(`input`, {
                    id: `revisor-pref`,
                    value: c.revisor,
                    maxLength: 120,
                    onChange: (e) =>
                      l((t) => ({ ...t, revisor: e.target.value })),
                    placeholder: `Ex.: nome ou matrícula`,
                  }),
                  (0, F.jsxs)(`p`, {
                    className: `muted-text`,
                    children: [
                      `É apenas informado e registrado como `,
                      (0, F.jsx)(`code`, {
                        children: `identidade_verificada = false`,
                      }),
                      `: o backend não autentica revisores. A rejeição sempre exige justificativa (regra do backend).`,
                    ],
                  }),
                ],
              }),
        ],
      }),
    ],
  });
}
var jc = (0, v.lazy)(() => jo(() => import(`./Dashboard-fUWrr6V5.js`), []));
function Mc() {
  return (0, F.jsx)(ls, {
    children: (0, F.jsx)(zs, {
      children: (0, F.jsx)(Wo, {
        children: (0, F.jsx)(rs, {
          children: (0, F.jsx)(Fn, {
            children: (0, F.jsxs)(Yt, {
              children: [
                (0, F.jsx)(qt, { path: `/login`, element: (0, F.jsx)(Ls, {}) }),
                (0, F.jsx)(qt, {
                  element: (0, F.jsx)(Is, {}),
                  children: (0, F.jsxs)(qt, {
                    element: (0, F.jsx)(Ms, {}),
                    children: [
                      (0, F.jsx)(qt, {
                        index: !0,
                        element: (0, F.jsx)(Gt, {
                          to: `/processar`,
                          replace: !0,
                        }),
                      }),
                      (0, F.jsx)(qt, {
                        path: `/processar`,
                        element: (0, F.jsx)(cc, {}),
                      }),
                      (0, F.jsx)(qt, {
                        path: `/documentos`,
                        element: (0, F.jsx)(uc, {}),
                      }),
                      (0, F.jsx)(qt, {
                        path: `/documentos/:id`,
                        element: (0, F.jsx)(Cc, {}),
                      }),
                      (0, F.jsx)(qt, {
                        path: `/revisao/:id`,
                        element: (0, F.jsx)(Oc, {}),
                      }),
                      (0, F.jsx)(qt, {
                        path: `/configuracoes`,
                        element: (0, F.jsx)(Ac, {}),
                      }),
                      (0, F.jsx)(qt, {
                        path: `/dashboard`,
                        element: (0, F.jsx)(v.Suspense, {
                          fallback: (0, F.jsx)(Ns, {}),
                          children: (0, F.jsx)(jc, {}),
                        }),
                      }),
                      (0, F.jsx)(qt, {
                        path: `/upload`,
                        element: (0, F.jsx)(Gt, {
                          to: `/processar`,
                          replace: !0,
                        }),
                      }),
                      (0, F.jsx)(qt, {
                        path: `/fila`,
                        element: (0, F.jsx)(Gt, {
                          to: `/processar?tab=pendentes`,
                          replace: !0,
                        }),
                      }),
                      (0, F.jsx)(qt, {
                        path: `/historico`,
                        element: (0, F.jsx)(Gt, {
                          to: `/documentos`,
                          replace: !0,
                        }),
                      }),
                      (0, F.jsx)(qt, {
                        path: `/revisao`,
                        element: (0, F.jsx)(Dc, {}),
                      }),
                      (0, F.jsx)(qt, {
                        path: `*`,
                        element: (0, F.jsx)(Gt, {
                          to: `/processar`,
                          replace: !0,
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
Di.createRoot(document.getElementById(`root`)).render(
  (0, F.jsx)(v.StrictMode, { children: (0, F.jsx)(Mc, {}) }),
);
export {
  l as _,
  L as a,
  Ki as c,
  A as d,
  In as f,
  s as g,
  o as h,
  B as i,
  gi as l,
  d as m,
  Ps as n,
  Ho as o,
  h as p,
  Ns as r,
  ro as s,
  Fs as t,
  br as u,
};
