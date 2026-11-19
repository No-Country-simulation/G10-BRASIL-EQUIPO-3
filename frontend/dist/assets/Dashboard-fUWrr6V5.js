import {
  _ as e,
  a as t,
  c as n,
  d as r,
  f as i,
  g as a,
  h as o,
  i as s,
  l as c,
  m as l,
  n as u,
  o as d,
  p as f,
  r as p,
  t as m,
  u as h,
} from "./index-DcNd8WVi.js";
var g = {
  name: `clock-3`,
  size: 24,
  node: [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `M12 6v6h4`, key: `135r8i` }],
  ],
};
g.node;
var _ = r(g),
  v = {
    name: `files`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8`,
          key: `14sh0y`,
        },
      ],
      [
        `path`,
        {
          d: `M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z`,
          key: `1970lx`,
        },
      ],
      [
        `path`,
        {
          d: `M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1`,
          key: `l4dndm`,
        },
      ],
    ],
  };
v.node;
var y = r(v);
function b(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`) {
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = b(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  }
  return r;
}
function x() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = b(e)) && (r && (r += ` `), (r += t));
  return r;
}
var S =
  `dangerouslySetInnerHTML.onCopy.onCopyCapture.onCut.onCutCapture.onPaste.onPasteCapture.onCompositionEnd.onCompositionEndCapture.onCompositionStart.onCompositionStartCapture.onCompositionUpdate.onCompositionUpdateCapture.onFocus.onFocusCapture.onBlur.onBlurCapture.onChange.onChangeCapture.onBeforeInput.onBeforeInputCapture.onInput.onInputCapture.onReset.onResetCapture.onSubmit.onSubmitCapture.onInvalid.onInvalidCapture.onLoad.onLoadCapture.onError.onErrorCapture.onKeyDown.onKeyDownCapture.onKeyPress.onKeyPressCapture.onKeyUp.onKeyUpCapture.onAbort.onAbortCapture.onCanPlay.onCanPlayCapture.onCanPlayThrough.onCanPlayThroughCapture.onDurationChange.onDurationChangeCapture.onEmptied.onEmptiedCapture.onEncrypted.onEncryptedCapture.onEnded.onEndedCapture.onLoadedData.onLoadedDataCapture.onLoadedMetadata.onLoadedMetadataCapture.onLoadStart.onLoadStartCapture.onPause.onPauseCapture.onPlay.onPlayCapture.onPlaying.onPlayingCapture.onProgress.onProgressCapture.onRateChange.onRateChangeCapture.onSeeked.onSeekedCapture.onSeeking.onSeekingCapture.onStalled.onStalledCapture.onSuspend.onSuspendCapture.onTimeUpdate.onTimeUpdateCapture.onVolumeChange.onVolumeChangeCapture.onWaiting.onWaitingCapture.onAuxClick.onAuxClickCapture.onClick.onClickCapture.onContextMenu.onContextMenuCapture.onDoubleClick.onDoubleClickCapture.onDrag.onDragCapture.onDragEnd.onDragEndCapture.onDragEnter.onDragEnterCapture.onDragExit.onDragExitCapture.onDragLeave.onDragLeaveCapture.onDragOver.onDragOverCapture.onDragStart.onDragStartCapture.onDrop.onDropCapture.onMouseDown.onMouseDownCapture.onMouseEnter.onMouseLeave.onMouseMove.onMouseMoveCapture.onMouseOut.onMouseOutCapture.onMouseOver.onMouseOverCapture.onMouseUp.onMouseUpCapture.onSelect.onSelectCapture.onTouchCancel.onTouchCancelCapture.onTouchEnd.onTouchEndCapture.onTouchMove.onTouchMoveCapture.onTouchStart.onTouchStartCapture.onPointerDown.onPointerDownCapture.onPointerMove.onPointerMoveCapture.onPointerUp.onPointerUpCapture.onPointerCancel.onPointerCancelCapture.onPointerEnter.onPointerEnterCapture.onPointerLeave.onPointerLeaveCapture.onPointerOver.onPointerOverCapture.onPointerOut.onPointerOutCapture.onGotPointerCapture.onGotPointerCaptureCapture.onLostPointerCapture.onLostPointerCaptureCapture.onScroll.onScrollCapture.onWheel.onWheelCapture.onAnimationStart.onAnimationStartCapture.onAnimationEnd.onAnimationEndCapture.onAnimationIteration.onAnimationIterationCapture.onTransitionEnd.onTransitionEndCapture`.split(
    `.`,
  );
function C(e) {
  return typeof e == `string` && S.includes(e);
}
var w = e(l()),
  T = new Set(
    `aria-activedescendant.aria-atomic.aria-autocomplete.aria-busy.aria-checked.aria-colcount.aria-colindex.aria-colspan.aria-controls.aria-current.aria-describedby.aria-details.aria-disabled.aria-errormessage.aria-expanded.aria-flowto.aria-haspopup.aria-hidden.aria-invalid.aria-keyshortcuts.aria-label.aria-labelledby.aria-level.aria-live.aria-modal.aria-multiline.aria-multiselectable.aria-orientation.aria-owns.aria-placeholder.aria-posinset.aria-pressed.aria-readonly.aria-relevant.aria-required.aria-roledescription.aria-rowcount.aria-rowindex.aria-rowspan.aria-selected.aria-setsize.aria-sort.aria-valuemax.aria-valuemin.aria-valuenow.aria-valuetext.className.color.height.id.lang.max.media.method.min.name.style.target.width.role.tabIndex.accentHeight.accumulate.additive.alignmentBaseline.allowReorder.alphabetic.amplitude.arabicForm.ascent.attributeName.attributeType.autoReverse.azimuth.baseFrequency.baselineShift.baseProfile.bbox.begin.bias.by.calcMode.capHeight.clip.clipPath.clipPathUnits.clipRule.colorInterpolation.colorInterpolationFilters.colorProfile.colorRendering.contentScriptType.contentStyleType.cursor.cx.cy.d.decelerate.descent.diffuseConstant.direction.display.divisor.dominantBaseline.dur.dx.dy.edgeMode.elevation.enableBackground.end.exponent.externalResourcesRequired.fill.fillOpacity.fillRule.filter.filterRes.filterUnits.floodColor.floodOpacity.focusable.fontFamily.fontSize.fontSizeAdjust.fontStretch.fontStyle.fontVariant.fontWeight.format.from.fx.fy.g1.g2.glyphName.glyphOrientationHorizontal.glyphOrientationVertical.glyphRef.gradientTransform.gradientUnits.hanging.horizAdvX.horizOriginX.href.ideographic.imageRendering.in2.in.intercept.k1.k2.k3.k4.k.kernelMatrix.kernelUnitLength.kerning.keyPoints.keySplines.keyTimes.lengthAdjust.letterSpacing.lightingColor.limitingConeAngle.local.markerEnd.markerHeight.markerMid.markerStart.markerUnits.markerWidth.mask.maskContentUnits.maskUnits.mathematical.mode.numOctaves.offset.opacity.operator.order.orient.orientation.origin.overflow.overlinePosition.overlineThickness.paintOrder.panose1.pathLength.patternContentUnits.patternTransform.patternUnits.pointerEvents.pointsAtX.pointsAtY.pointsAtZ.preserveAlpha.preserveAspectRatio.primitiveUnits.r.radius.refX.refY.renderingIntent.repeatCount.repeatDur.requiredExtensions.requiredFeatures.restart.result.rotate.rx.ry.seed.shapeRendering.slope.spacing.specularConstant.specularExponent.speed.spreadMethod.startOffset.stdDeviation.stemh.stemv.stitchTiles.stopColor.stopOpacity.strikethroughPosition.strikethroughThickness.string.stroke.strokeDasharray.strokeDashoffset.strokeLinecap.strokeLinejoin.strokeMiterlimit.strokeOpacity.strokeWidth.surfaceScale.systemLanguage.tableValues.targetX.targetY.textAnchor.textDecoration.textLength.textRendering.to.transform.u1.u2.underlinePosition.underlineThickness.unicode.unicodeBidi.unicodeRange.unitsPerEm.vAlphabetic.values.vectorEffect.version.vertAdvY.vertOriginX.vertOriginY.vHanging.vIdeographic.viewTarget.visibility.vMathematical.widths.wordSpacing.writingMode.x1.x2.x.xChannelSelector.xHeight.xlinkActuate.xlinkArcrole.xlinkHref.xlinkRole.xlinkShow.xlinkTitle.xlinkType.xmlBase.xmlLang.xmlns.xmlnsXlink.xmlSpace.y1.y2.y.yChannelSelector.z.zoomAndPan.ref.key.angle`.split(
      `.`,
    ),
  );
function E(e) {
  return typeof e == `string` && T.has(e);
}
function D(e) {
  return typeof e == `string` && e.startsWith(`data-`);
}
function O(e) {
  if (typeof e != `object` || !e) return {};
  var t = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      (E(n) || D(n)) &&
      (t[n] = e[n]);
  return t;
}
function k(e) {
  if (e == null) return null;
  if (
    (0, w.isValidElement)(e) &&
    typeof e.props == `object` &&
    e.props !== null
  ) {
    var t = e.props;
    return O(t);
  }
  return typeof e == `object` && !Array.isArray(e) ? O(e) : null;
}
function A(e) {
  var t = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      (E(n) || D(n) || C(n)) &&
      (t[n] = e[n]);
  return t;
}
var j = [
  `children`,
  `width`,
  `height`,
  `viewBox`,
  `className`,
  `style`,
  `title`,
  `desc`,
];
function M() {
  return (
    (M = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    M.apply(null, arguments)
  );
}
function N(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = ee(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function ee(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var te = (0, w.forwardRef)((e, t) => {
    var n = e.children,
      r = e.width,
      i = e.height,
      a = e.viewBox,
      o = e.className,
      s = e.style,
      c = e.title,
      l = e.desc,
      u = N(e, j),
      d = a || { width: r, height: i, x: 0, y: 0 },
      f = x(`recharts-surface`, o);
    return w.createElement(
      `svg`,
      M({}, A(u), {
        className: f,
        width: r,
        height: i,
        style: s,
        viewBox: `${d.x} ${d.y} ${d.width} ${d.height}`,
        ref: t,
      }),
      w.createElement(`title`, null, c),
      w.createElement(`desc`, null, l),
      n,
    );
  }),
  ne = [`children`, `className`];
function re() {
  return (
    (re = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    re.apply(null, arguments)
  );
}
function ie(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = ae(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function ae(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var oe = w.forwardRef((e, t) => {
  var n = e.children,
    r = e.className,
    i = ie(e, ne),
    a = x(`recharts-layer`, r);
  return w.createElement(`g`, re({ className: a }, A(i), { ref: t }), n);
});
function se(e) {
  return e === `__proto__`;
}
var ce = Object.prototype.hasOwnProperty;
function le(e, t) {
  return ce.call(e, t);
}
var ue = /\.|(\[(?:[^[\]]*|(["'])(?:(?!\2)[^\\]|\\.)*?\2)\])/;
function de(e) {
  switch (typeof e) {
    case `number`:
    case `symbol`:
      return !1;
    case `string`:
      return e === `` || e.startsWith(`.`) || e.endsWith(`.`) ? !1 : ue.test(e);
    default:
      return !1;
  }
}
function fe(e) {
  var t;
  return typeof e == `string` || typeof e == `symbol`
    ? e
    : Object.is(e == null || (t = e.valueOf) == null ? void 0 : t.call(e), -0)
      ? `-0`
      : String(e);
}
function pe(e) {
  return typeof e == `symbol` || e instanceof Symbol;
}
function me(e) {
  if (typeof e == `string`) return e;
  if (Array.isArray(e)) {
    let t = ``;
    for (let n = 0; n < e.length; n++) (n > 0 && (t += `,`), (t += me(e[n])));
    return t;
  }
  if (pe(e)) return e.toString();
  let t = e + ``;
  return t === `0` && Object.is(Number(e), -0) ? `-0` : t;
}
function he(e) {
  return e == null ? `` : me(e);
}
function ge(e) {
  if (Array.isArray(e)) return e.map(fe);
  if (typeof e == `symbol`) return [e];
  e = he(e);
  let t = [],
    n = e.length;
  if (n === 0) return t;
  let r = 0,
    i = ``,
    a = ``,
    o = !1,
    s = !1,
    c = /^-?\d+(?:\.\d+)?$/;
  for (e.charCodeAt(0) === 46 && t.push(``); r < n; ) {
    let l = e[r];
    if (a)
      l === `\\` && r + 1 < n
        ? (r++, (i += e[r]))
        : l === a
          ? (a = ``)
          : (i += l);
    else if (o) {
      if (l === `"` || l === `'`) ((a = l), (s = !0));
      else if (l === `]`) {
        if (((o = !1), !s && i.includes(`.`) && !c.test(i))) {
          let e = i.split(`.`);
          for (let n = 0; n < e.length; n++) e[n] !== `` && t.push(e[n]);
        } else t.push(i);
        i = ``;
      } else i += l;
    } else if (l === `[`) ((o = !0), (s = !1), (i &&= (t.push(i), ``)));
    else if (l === `.`) {
      i &&= (t.push(i), ``);
      let n = e[r + 1];
      (n === void 0 || n === `.`) && t.push(``);
    } else i += l;
    r++;
  }
  return (i && t.push(i), t);
}
function _e(e, t, n) {
  if (e == null) return n;
  switch (typeof t) {
    case `string`: {
      if (se(t)) return n;
      let r = e[t];
      return r === void 0 ? (de(t) && !le(e, t) ? _e(e, ge(t), n) : n) : r;
    }
    case `number`:
    case `symbol`: {
      typeof t == `number` && (t = fe(t));
      let r = e[t];
      return r === void 0 ? n : r;
    }
    default: {
      if (Array.isArray(t)) return ve(e, t, n);
      if (((t = Object.is(t?.valueOf(), -0) ? `-0` : String(t)), se(t)))
        return n;
      let r = e[t];
      return r === void 0 ? n : r;
    }
  }
}
function ve(e, t, n) {
  if (t.length === 0) return n;
  let r = e;
  for (let e = 0; e < t.length; e++) {
    if (r == null || se(t[e])) return n;
    r = r[t[e]];
  }
  return r === void 0 ? n : r;
}
var ye = 4;
function be(e) {
  var t =
      10 **
      (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ye),
    n = Math.round(e * t) / t;
  return Object.is(n, -0) ? 0 : n;
}
function xe(e) {
  var t = [...arguments].slice(1);
  return e.reduce((e, n, r) => {
    var i = t[r - 1];
    return typeof i == `string`
      ? e + i + n
      : i === void 0
        ? e + n
        : e + be(i) + n;
  }, ``);
}
var Se = (e) => (e === 0 ? 0 : e > 0 ? 1 : -1),
  Ce = (e) => typeof e == `number` && e != +e,
  we = (e) =>
    typeof e == `string` && e.length > 1 && e.indexOf(`%`) === e.length - 1,
  P = (e) => (typeof e == `number` || e instanceof Number) && !Ce(e),
  Te = (e) => P(e) || typeof e == `string`,
  Ee = 0,
  De = (e) => {
    var t = ++Ee;
    return `${e || ``}${t}`;
  },
  Oe = function (e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      r = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    if (!P(e) && typeof e != `string`) return n;
    var i;
    if (we(e)) {
      if (t == null) return n;
      var a = e.indexOf(`%`);
      i = (t * parseFloat(e.slice(0, a))) / 100;
    } else i = +e;
    return (Ce(i) && (i = n), r && t != null && i > t && (i = t), i);
  },
  ke = (e) => {
    if (!Array.isArray(e)) return !1;
    for (var t = e.length, n = {}, r = 0; r < t; r++)
      if (!n[String(e[r])]) n[String(e[r])] = !0;
      else return !0;
    return !1;
  };
function Ae(e, t, n) {
  return P(e) && P(t) ? be(e + n * (t - e)) : t;
}
function je(e, t, n) {
  if (e && e.length)
    return e.find((e) => e && (typeof t == `function` ? t(e) : _e(e, t)) === n);
}
var F = (e) => e == null,
  Me = (e) => (F(e) ? e : `${e.charAt(0).toUpperCase()}${e.slice(1)}`);
function Ne(e) {
  return e != null;
}
function Pe() {}
function Fe(e) {
  if (e)
    return {
      x: e.x,
      y: e.y,
      upperWidth: `upperWidth` in e ? e.upperWidth : e.width,
      lowerWidth: `lowerWidth` in e ? e.lowerWidth : e.width,
      width: e.width,
      height: e.height,
    };
}
function Ie(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Le(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ie(Object(n), !0).forEach(function (t) {
          Re(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ie(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Re(e, t, n) {
  return (
    (t = ze(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ze(e) {
  var t = Be(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Be(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Ve = (e) => {
    var t = e.viewBox,
      n = e.position,
      r = e.offset,
      i = r === void 0 ? 0 : r,
      a = e.parentViewBox,
      o = e.clamp,
      s = Fe(t),
      c = s.x,
      l = s.y,
      u = s.height,
      d = s.upperWidth,
      f = s.lowerWidth,
      p = c,
      m = c + (d - f) / 2,
      h = (p + m) / 2,
      g = (d + f) / 2,
      _ = p + d / 2,
      v = u >= 0 ? 1 : -1,
      y = v * i,
      b = v > 0 ? `end` : `start`,
      x = v > 0 ? `start` : `end`,
      S = d >= 0 ? 1 : -1,
      C = S * i,
      w = S > 0 ? `end` : `start`,
      T = S > 0 ? `start` : `end`,
      E = a;
    if (n === `top`) {
      var D = {
        x: p + d / 2,
        y: l - y,
        horizontalAnchor: `middle`,
        verticalAnchor: b,
      };
      return (o && E && ((D.height = Math.max(l - E.y, 0)), (D.width = d)), D);
    }
    if (n === `bottom`) {
      var O = {
        x: m + f / 2,
        y: l + u + y,
        horizontalAnchor: `middle`,
        verticalAnchor: x,
      };
      return (
        o &&
          E &&
          ((O.height = Math.max(E.y + E.height - (l + u), 0)), (O.width = f)),
        O
      );
    }
    if (n === `left`) {
      var k = {
        x: h - C,
        y: l + u / 2,
        horizontalAnchor: w,
        verticalAnchor: `middle`,
      };
      return (
        o && E && ((k.width = Math.max(k.x - E.x, 0)), (k.height = u)),
        k
      );
    }
    if (n === `right`) {
      var A = {
        x: h + g + C,
        y: l + u / 2,
        horizontalAnchor: T,
        verticalAnchor: `middle`,
      };
      return (
        o &&
          E &&
          ((A.width = Math.max(E.x + E.width - A.x, 0)), (A.height = u)),
        A
      );
    }
    var j = o && E ? { width: g, height: u } : {};
    return n === `insideLeft`
      ? Le(
          {
            x: h + C,
            y: l + u / 2,
            horizontalAnchor: T,
            verticalAnchor: `middle`,
          },
          j,
        )
      : n === `insideRight`
        ? Le(
            {
              x: h + g - C,
              y: l + u / 2,
              horizontalAnchor: w,
              verticalAnchor: `middle`,
            },
            j,
          )
        : n === `insideTop`
          ? Le(
              {
                x: p + d / 2,
                y: l + y,
                horizontalAnchor: `middle`,
                verticalAnchor: x,
              },
              j,
            )
          : n === `insideBottom`
            ? Le(
                {
                  x: m + f / 2,
                  y: l + u - y,
                  horizontalAnchor: `middle`,
                  verticalAnchor: b,
                },
                j,
              )
            : n === `insideTopLeft`
              ? Le(
                  {
                    x: p + C,
                    y: l + y,
                    horizontalAnchor: T,
                    verticalAnchor: x,
                  },
                  j,
                )
              : n === `insideTopRight`
                ? Le(
                    {
                      x: p + d - C,
                      y: l + y,
                      horizontalAnchor: w,
                      verticalAnchor: x,
                    },
                    j,
                  )
                : n === `insideBottomLeft`
                  ? Le(
                      {
                        x: m + C,
                        y: l + u - y,
                        horizontalAnchor: T,
                        verticalAnchor: b,
                      },
                      j,
                    )
                  : n === `insideBottomRight`
                    ? Le(
                        {
                          x: m + f - C,
                          y: l + u - y,
                          horizontalAnchor: w,
                          verticalAnchor: b,
                        },
                        j,
                      )
                    : n &&
                        typeof n == `object` &&
                        (P(n.x) || we(n.x)) &&
                        (P(n.y) || we(n.y))
                      ? Le(
                          {
                            x: c + Oe(n.x, g),
                            y: l + Oe(n.y, u),
                            horizontalAnchor: `end`,
                            verticalAnchor: `end`,
                          },
                          j,
                        )
                      : Le(
                          {
                            x: _,
                            y: l + u / 2,
                            horizontalAnchor: `middle`,
                            verticalAnchor: `middle`,
                          },
                          j,
                        );
  },
  He = [`top`, `left`, `right`, `bottom`];
function Ue(e) {
  return e == null ? !1 : typeof e == `object` || He.includes(e);
}
var We = (0, w.createContext)(null),
  Ge = Math.PI,
  Ke = 2 * Ge,
  qe = 1e-6,
  Je = Ke - qe;
function Ye(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function Xe(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
  if (t > 15) return Ye;
  let n = 10 ** t;
  return function (e) {
    this._ += e[0];
    for (let t = 1, r = e.length; t < r; ++t)
      this._ += Math.round(arguments[t] * n) / n + e[t];
  };
}
function Ze(e, t, n, r) {
  return e === n && t === r;
}
function Qe(e) {
  let t = Math.floor(e);
  if (!(t <= 15)) return Ze;
  let n = 10 ** t,
    r = function (e) {
      return Math.round(e * n);
    };
  return function (e, t, n, i) {
    return r(e) === r(n) && r(t) === r(i);
  };
}
var $e = class {
  constructor(e) {
    ((this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ``),
      (this._append = e == null ? Ye : Xe(e)),
      (this._equal = e == null ? Ze : Qe(e)));
  }
  moveTo(e, t) {
    this._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 = +t)}`;
  }
  closePath() {
    this._x1 !== null &&
      ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(e, t) {
    this._append`L${(this._x1 = +e)},${(this._y1 = +t)}`;
  }
  quadraticCurveTo(e, t, n, r) {
    this._append`Q${+e},${+t},${(this._x1 = +n)},${(this._y1 = +r)}`;
  }
  bezierCurveTo(e, t, n, r, i, a) {
    this
      ._append`C${+e},${+t},${+n},${+r},${(this._x1 = +i)},${(this._y1 = +a)}`;
  }
  arcTo(e, t, n, r, i) {
    if (((e = +e), (t = +t), (n = +n), (r = +r), (i = +i), i < 0))
      throw Error(`negative radius: ${i}`);
    let a = this._x1,
      o = this._y1,
      s = n - e,
      c = r - t,
      l = a - e,
      u = o - t,
      d = l * l + u * u;
    if (this._x1 === null) this._append`M${(this._x1 = e)},${(this._y1 = t)}`;
    else if (d > qe) {
      if (!(Math.abs(u * s - c * l) > qe) || !i)
        this._append`L${(this._x1 = e)},${(this._y1 = t)}`;
      else {
        let f = n - a,
          p = r - o,
          m = s * s + c * c,
          h = f * f + p * p,
          g = Math.sqrt(m),
          _ = Math.sqrt(d),
          v = i * Math.tan((Ge - Math.acos((m + d - h) / (2 * g * _))) / 2),
          y = v / _,
          b = v / g;
        (Math.abs(y - 1) > qe && this._append`L${e + y * l},${t + y * u}`,
          this
            ._append`A${i},${i},0,0,${+(u * f > l * p)},${(this._x1 = e + b * s)},${(this._y1 = t + b * c)}`);
      }
    }
  }
  arc(e, t, n, r, i, a) {
    if (((e = +e), (t = +t), (n = +n), (a = !!a), n < 0))
      throw Error(`negative radius: ${n}`);
    let o = n * Math.cos(r),
      s = n * Math.sin(r),
      c = e + o,
      l = t + s,
      u = 1 ^ a,
      d = a ? r - i : i - r;
    if (
      (this._x1 === null
        ? this._append`M${c},${l}`
        : (Math.abs(this._x1 - c) > qe || Math.abs(this._y1 - l) > qe) &&
          this._append`L${c},${l}`,
      n)
    ) {
      if ((d < 0 && (d = (d % Ke) + Ke), d > Je))
        this
          ._append`A${n},${n},0,1,${u},${e - o},${t - s}A${n},${n},0,1,${u},${(this._x1 = c)},${(this._y1 = l)}`;
      else if (d > qe) {
        let a = e + n * Math.cos(i),
          o = t + n * Math.sin(i);
        if (d >= Ge && this._equal(c, l, a, o)) {
          d /= 2;
          let i = r + d;
          this
            ._append`A${n},${n},0,${+(d >= Ge)},${u},${e + n * Math.cos(i)},${t + n * Math.sin(i)}`;
        }
        this
          ._append`A${n},${n},0,${+(d >= Ge)},${u},${(this._x1 = a)},${(this._y1 = o)}`;
      }
    }
  }
  rect(e, t, n, r) {
    this
      ._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 = +t)}h${(n = +n)}v${+r}h${-n}Z`;
  }
  toString() {
    return this._;
  }
};
$e.prototype;
function I(e) {
  return function () {
    return e;
  };
}
var et = Math.cos,
  tt = Math.sin,
  nt = Math.sqrt,
  rt = 1e-12,
  it = Math.PI;
it / 2;
var at = 2 * it;
function ot(e) {
  let t = 3;
  return (
    (e.digits = function (n) {
      if (!arguments.length) return t;
      if (n == null) t = null;
      else {
        let e = Math.floor(n);
        if (!(e >= 0)) throw RangeError(`invalid digits: ${n}`);
        t = e;
      }
      return e;
    }),
    () => new $e(t)
  );
}
Array.prototype.slice;
function st(e) {
  return typeof e == `object` && `length` in e ? e : Array.from(e);
}
function ct(e) {
  this._context = e;
}
ct.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
    }
  },
};
function lt(e) {
  return new ct(e);
}
function ut(e) {
  return e[0];
}
function dt(e) {
  return e[1];
}
function ft(e, t) {
  var n = I(!0),
    r = null,
    i = lt,
    a = null,
    o = ot(s);
  ((e = typeof e == `function` ? e : e === void 0 ? ut : I(e)),
    (t = typeof t == `function` ? t : t === void 0 ? dt : I(t)));
  function s(s) {
    var c,
      l = (s = st(s)).length,
      u,
      d = !1,
      f;
    for (r ?? (a = i((f = o()))), c = 0; c <= l; ++c)
      (!(c < l && n((u = s[c]), c, s)) === d &&
        ((d = !d) ? a.lineStart() : a.lineEnd()),
        d && a.point(+e(u, c, s), +t(u, c, s)));
    if (f) return ((a = null), f + `` || null);
  }
  return (
    (s.x = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : I(+t)), s)
        : e;
    }),
    (s.y = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : I(+e)), s)
        : t;
    }),
    (s.defined = function (e) {
      return arguments.length
        ? ((n = typeof e == `function` ? e : I(!!e)), s)
        : n;
    }),
    (s.curve = function (e) {
      return arguments.length ? ((i = e), r != null && (a = i(r)), s) : i;
    }),
    (s.context = function (e) {
      return arguments.length
        ? (e == null ? (r = a = null) : (a = i((r = e))), s)
        : r;
    }),
    s
  );
}
function pt(e, t, n) {
  var r = null,
    i = I(!0),
    a = null,
    o = lt,
    s = null,
    c = ot(l);
  ((e = typeof e == `function` ? e : e === void 0 ? ut : I(+e)),
    (t = typeof t == `function` ? t : I(t === void 0 ? 0 : +t)),
    (n = typeof n == `function` ? n : n === void 0 ? dt : I(+n)));
  function l(l) {
    var u,
      d,
      f,
      p = (l = st(l)).length,
      m,
      h = !1,
      g,
      _ = Array(p),
      v = Array(p);
    for (a ?? (s = o((g = c()))), u = 0; u <= p; ++u) {
      if (!(u < p && i((m = l[u]), u, l)) === h) {
        if ((h = !h)) ((d = u), s.areaStart(), s.lineStart());
        else {
          for (s.lineEnd(), s.lineStart(), f = u - 1; f >= d; --f)
            s.point(_[f], v[f]);
          (s.lineEnd(), s.areaEnd());
        }
      }
      h &&
        ((_[u] = +e(m, u, l)),
        (v[u] = +t(m, u, l)),
        s.point(r ? +r(m, u, l) : _[u], n ? +n(m, u, l) : v[u]));
    }
    if (g) return ((s = null), g + `` || null);
  }
  function u() {
    return ft().defined(i).curve(o).context(a);
  }
  return (
    (l.x = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : I(+t)), (r = null), l)
        : e;
    }),
    (l.x0 = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : I(+t)), l)
        : e;
    }),
    (l.x1 = function (e) {
      return arguments.length
        ? ((r = e == null ? null : typeof e == `function` ? e : I(+e)), l)
        : r;
    }),
    (l.y = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : I(+e)), (n = null), l)
        : t;
    }),
    (l.y0 = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : I(+e)), l)
        : t;
    }),
    (l.y1 = function (e) {
      return arguments.length
        ? ((n = e == null ? null : typeof e == `function` ? e : I(+e)), l)
        : n;
    }),
    (l.lineX0 = l.lineY0 =
      function () {
        return u().x(e).y(t);
      }),
    (l.lineY1 = function () {
      return u().x(e).y(n);
    }),
    (l.lineX1 = function () {
      return u().x(r).y(t);
    }),
    (l.defined = function (e) {
      return arguments.length
        ? ((i = typeof e == `function` ? e : I(!!e)), l)
        : i;
    }),
    (l.curve = function (e) {
      return arguments.length ? ((o = e), a != null && (s = o(a)), l) : o;
    }),
    (l.context = function (e) {
      return arguments.length
        ? (e == null ? (a = s = null) : (s = o((a = e))), l)
        : a;
    }),
    l
  );
}
ht(lt);
function mt(e) {
  this._curve = e;
}
mt.prototype = {
  areaStart: function () {
    this._curve.areaStart();
  },
  areaEnd: function () {
    this._curve.areaEnd();
  },
  lineStart: function () {
    this._curve.lineStart();
  },
  lineEnd: function () {
    this._curve.lineEnd();
  },
  point: function (e, t) {
    this._curve.point(t * Math.sin(e), t * -Math.cos(e));
  },
};
function ht(e) {
  function t(t) {
    return new mt(e(t));
  }
  return ((t._curve = e), t);
}
var gt = class {
  constructor(e, t) {
    ((this._context = e), (this._x = t));
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  }
  point(e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default:
        this._x
          ? this._context.bezierCurveTo(
              (this._x0 = (this._x0 + e) / 2),
              this._y0,
              this._x0,
              t,
              e,
              t,
            )
          : this._context.bezierCurveTo(
              this._x0,
              (this._y0 = (this._y0 + t) / 2),
              e,
              this._y0,
              e,
              t,
            );
    }
    ((this._x0 = e), (this._y0 = t));
  }
};
function _t(e) {
  return new gt(e, !0);
}
function vt(e) {
  return new gt(e, !1);
}
(nt(3), nt(1 / 3) * 2);
var yt = tt(it / 10) / tt((7 * it) / 10);
(tt(at / 10) * yt,
  -et(at / 10) * yt,
  nt(3),
  nt(3),
  nt(3) / 2,
  (1 / nt(12) / 2 + 1) * 3);
function bt() {}
function xt(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6,
  );
}
function St(e) {
  this._context = e;
}
St.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        xt(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
    }
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        ((this._point = 3),
          this._context.lineTo(
            (5 * this._x0 + this._x1) / 6,
            (5 * this._y0 + this._y1) / 6,
          ));
      default:
        xt(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function Ct(e) {
  return new St(e);
}
function wt(e) {
  this._context = e;
}
wt.prototype = {
  areaStart: bt,
  areaEnd: bt,
  lineStart: function () {
    ((this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
        NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 1:
        (this._context.moveTo(this._x2, this._y2), this._context.closePath());
        break;
      case 2:
        (this._context.moveTo(
          (this._x2 + 2 * this._x3) / 3,
          (this._y2 + 2 * this._y3) / 3,
        ),
          this._context.lineTo(
            (this._x3 + 2 * this._x2) / 3,
            (this._y3 + 2 * this._y2) / 3,
          ),
          this._context.closePath());
        break;
      case 3:
        (this.point(this._x2, this._y2),
          this.point(this._x3, this._y3),
          this.point(this._x4, this._y4));
    }
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1), (this._x2 = e), (this._y2 = t));
        break;
      case 1:
        ((this._point = 2), (this._x3 = e), (this._y3 = t));
        break;
      case 2:
        ((this._point = 3),
          (this._x4 = e),
          (this._y4 = t),
          this._context.moveTo(
            (this._x0 + 4 * this._x1 + e) / 6,
            (this._y0 + 4 * this._y1 + t) / 6,
          ));
        break;
      default:
        xt(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function Tt(e) {
  return new wt(e);
}
function Et(e) {
  this._context = e;
}
Et.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 3)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var n = (this._x0 + 4 * this._x1 + e) / 6,
          r = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(n, r) : this._context.moveTo(n, r);
        break;
      case 3:
        this._point = 4;
      default:
        xt(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function Dt(e) {
  return new Et(e);
}
function Ot(e, t) {
  ((this._basis = new St(e)), (this._beta = t));
}
((Ot.prototype = {
  lineStart: function () {
    ((this._x = []), (this._y = []), this._basis.lineStart());
  },
  lineEnd: function () {
    var e = this._x,
      t = this._y,
      n = e.length - 1;
    if (n > 0)
      for (
        var r = e[0], i = t[0], a = e[n] - r, o = t[n] - i, s = -1, c;
        ++s <= n;
      )
        ((c = s / n),
          this._basis.point(
            this._beta * e[s] + (1 - this._beta) * (r + c * a),
            this._beta * t[s] + (1 - this._beta) * (i + c * o),
          ));
    ((this._x = this._y = null), this._basis.lineEnd());
  },
  point: function (e, t) {
    (this._x.push(+e), this._y.push(+t));
  },
}),
  (function e(t) {
    function n(e) {
      return t === 1 ? new St(e) : new Ot(e, t);
    }
    return (
      (n.beta = function (t) {
        return e(+t);
      }),
      n
    );
  })(0.85));
function kt(e, t, n) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - n),
    e._x2,
    e._y2,
  );
}
function At(e, t) {
  ((this._context = e), (this._k = (1 - t) / 6));
}
((At.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        kt(this, this._x1, this._y1);
    }
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        ((this._point = 2), (this._x1 = e), (this._y1 = t));
        break;
      case 2:
        this._point = 3;
      default:
        kt(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = this._x2),
      (this._x2 = e),
      (this._y0 = this._y1),
      (this._y1 = this._y2),
      (this._y2 = t));
  },
}),
  (function e(t) {
    function n(e) {
      return new At(e, t);
    }
    return (
      (n.tension = function (t) {
        return e(+t);
      }),
      n
    );
  })(0));
function jt(e, t) {
  ((this._context = e), (this._k = (1 - t) / 6));
}
((jt.prototype = {
  areaStart: bt,
  areaEnd: bt,
  lineStart: function () {
    ((this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._x5 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
      this._y5 =
        NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 1:
        (this._context.moveTo(this._x3, this._y3), this._context.closePath());
        break;
      case 2:
        (this._context.lineTo(this._x3, this._y3), this._context.closePath());
        break;
      case 3:
        (this.point(this._x3, this._y3),
          this.point(this._x4, this._y4),
          this.point(this._x5, this._y5));
    }
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1), (this._x3 = e), (this._y3 = t));
        break;
      case 1:
        ((this._point = 2),
          this._context.moveTo((this._x4 = e), (this._y4 = t)));
        break;
      case 2:
        ((this._point = 3), (this._x5 = e), (this._y5 = t));
        break;
      default:
        kt(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = this._x2),
      (this._x2 = e),
      (this._y0 = this._y1),
      (this._y1 = this._y2),
      (this._y2 = t));
  },
}),
  (function e(t) {
    function n(e) {
      return new jt(e, t);
    }
    return (
      (n.tension = function (t) {
        return e(+t);
      }),
      n
    );
  })(0));
function Mt(e, t) {
  ((this._context = e), (this._k = (1 - t) / 6));
}
((Mt.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 3)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        ((this._point = 3),
          this._line
            ? this._context.lineTo(this._x2, this._y2)
            : this._context.moveTo(this._x2, this._y2));
        break;
      case 3:
        this._point = 4;
      default:
        kt(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = this._x2),
      (this._x2 = e),
      (this._y0 = this._y1),
      (this._y1 = this._y2),
      (this._y2 = t));
  },
}),
  (function e(t) {
    function n(e) {
      return new Mt(e, t);
    }
    return (
      (n.tension = function (t) {
        return e(+t);
      }),
      n
    );
  })(0));
function Nt(e, t, n) {
  var r = e._x1,
    i = e._y1,
    a = e._x2,
    o = e._y2;
  if (e._l01_a > rt) {
    var s = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a,
      c = 3 * e._l01_a * (e._l01_a + e._l12_a);
    ((r = (r * s - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / c),
      (i = (i * s - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / c));
  }
  if (e._l23_a > rt) {
    var l = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a,
      u = 3 * e._l23_a * (e._l23_a + e._l12_a);
    ((a = (a * l + e._x1 * e._l23_2a - t * e._l12_2a) / u),
      (o = (o * l + e._y1 * e._l23_2a - n * e._l12_2a) / u));
  }
  e._context.bezierCurveTo(r, i, a, o, e._x2, e._y2);
}
function Pt(e, t) {
  ((this._context = e), (this._alpha = t));
}
((Pt.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
      (this._l01_a =
        this._l12_a =
        this._l23_a =
        this._l01_2a =
        this._l12_2a =
        this._l23_2a =
        this._point =
          0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
    }
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    if (((e = +e), (t = +t), this._point)) {
      var n = this._x2 - e,
        r = this._y2 - t;
      this._l23_a = Math.sqrt((this._l23_2a = (n * n + r * r) ** +this._alpha));
    }
    switch (this._point) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        Nt(this, e, t);
    }
    ((this._l01_a = this._l12_a),
      (this._l12_a = this._l23_a),
      (this._l01_2a = this._l12_2a),
      (this._l12_2a = this._l23_2a),
      (this._x0 = this._x1),
      (this._x1 = this._x2),
      (this._x2 = e),
      (this._y0 = this._y1),
      (this._y1 = this._y2),
      (this._y2 = t));
  },
}),
  (function e(t) {
    function n(e) {
      return t ? new Pt(e, t) : new At(e, 0);
    }
    return (
      (n.alpha = function (t) {
        return e(+t);
      }),
      n
    );
  })(0.5));
function Ft(e, t) {
  ((this._context = e), (this._alpha = t));
}
((Ft.prototype = {
  areaStart: bt,
  areaEnd: bt,
  lineStart: function () {
    ((this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._x5 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
      this._y5 =
        NaN),
      (this._l01_a =
        this._l12_a =
        this._l23_a =
        this._l01_2a =
        this._l12_2a =
        this._l23_2a =
        this._point =
          0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 1:
        (this._context.moveTo(this._x3, this._y3), this._context.closePath());
        break;
      case 2:
        (this._context.lineTo(this._x3, this._y3), this._context.closePath());
        break;
      case 3:
        (this.point(this._x3, this._y3),
          this.point(this._x4, this._y4),
          this.point(this._x5, this._y5));
    }
  },
  point: function (e, t) {
    if (((e = +e), (t = +t), this._point)) {
      var n = this._x2 - e,
        r = this._y2 - t;
      this._l23_a = Math.sqrt((this._l23_2a = (n * n + r * r) ** +this._alpha));
    }
    switch (this._point) {
      case 0:
        ((this._point = 1), (this._x3 = e), (this._y3 = t));
        break;
      case 1:
        ((this._point = 2),
          this._context.moveTo((this._x4 = e), (this._y4 = t)));
        break;
      case 2:
        ((this._point = 3), (this._x5 = e), (this._y5 = t));
        break;
      default:
        Nt(this, e, t);
    }
    ((this._l01_a = this._l12_a),
      (this._l12_a = this._l23_a),
      (this._l01_2a = this._l12_2a),
      (this._l12_2a = this._l23_2a),
      (this._x0 = this._x1),
      (this._x1 = this._x2),
      (this._x2 = e),
      (this._y0 = this._y1),
      (this._y1 = this._y2),
      (this._y2 = t));
  },
}),
  (function e(t) {
    function n(e) {
      return t ? new Ft(e, t) : new jt(e, 0);
    }
    return (
      (n.alpha = function (t) {
        return e(+t);
      }),
      n
    );
  })(0.5));
function It(e, t) {
  ((this._context = e), (this._alpha = t));
}
((It.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
      (this._l01_a =
        this._l12_a =
        this._l23_a =
        this._l01_2a =
        this._l12_2a =
        this._l23_2a =
        this._point =
          0));
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 3)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    if (((e = +e), (t = +t), this._point)) {
      var n = this._x2 - e,
        r = this._y2 - t;
      this._l23_a = Math.sqrt((this._l23_2a = (n * n + r * r) ** +this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        ((this._point = 3),
          this._line
            ? this._context.lineTo(this._x2, this._y2)
            : this._context.moveTo(this._x2, this._y2));
        break;
      case 3:
        this._point = 4;
      default:
        Nt(this, e, t);
    }
    ((this._l01_a = this._l12_a),
      (this._l12_a = this._l23_a),
      (this._l01_2a = this._l12_2a),
      (this._l12_2a = this._l23_2a),
      (this._x0 = this._x1),
      (this._x1 = this._x2),
      (this._x2 = e),
      (this._y0 = this._y1),
      (this._y1 = this._y2),
      (this._y2 = t));
  },
}),
  (function e(t) {
    function n(e) {
      return t ? new It(e, t) : new Mt(e, 0);
    }
    return (
      (n.alpha = function (t) {
        return e(+t);
      }),
      n
    );
  })(0.5));
function Lt(e) {
  this._context = e;
}
Lt.prototype = {
  areaStart: bt,
  areaEnd: bt,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    this._point && this._context.closePath();
  },
  point: function (e, t) {
    ((e = +e),
      (t = +t),
      this._point
        ? this._context.lineTo(e, t)
        : ((this._point = 1), this._context.moveTo(e, t)));
  },
};
function Rt(e) {
  return new Lt(e);
}
function zt(e) {
  return e < 0 ? -1 : 1;
}
function Bt(e, t, n) {
  var r = e._x1 - e._x0,
    i = t - e._x1,
    a = (e._y1 - e._y0) / (r || (i < 0 && -0)),
    o = (n - e._y1) / (i || (r < 0 && -0)),
    s = (a * i + o * r) / (r + i);
  return (
    (zt(a) + zt(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0
  );
}
function Vt(e, t) {
  var n = e._x1 - e._x0;
  return n ? ((3 * (e._y1 - e._y0)) / n - t) / 2 : t;
}
function Ht(e, t, n) {
  var r = e._x0,
    i = e._y0,
    a = e._x1,
    o = e._y1,
    s = (a - r) / 3;
  e._context.bezierCurveTo(r + s, i + s * t, a - s, o - s * n, a, o);
}
function Ut(e) {
  this._context = e;
}
Ut.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Ht(this, this._t0, Vt(this, this._t0));
    }
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    var n = NaN;
    if (((e = +e), (t = +t), e !== this._x1 || t !== this._y1)) {
      switch (this._point) {
        case 0:
          ((this._point = 1),
            this._line
              ? this._context.lineTo(e, t)
              : this._context.moveTo(e, t));
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          ((this._point = 3), Ht(this, Vt(this, (n = Bt(this, e, t))), n));
          break;
        default:
          Ht(this, this._t0, (n = Bt(this, e, t)));
      }
      ((this._x0 = this._x1),
        (this._x1 = e),
        (this._y0 = this._y1),
        (this._y1 = t),
        (this._t0 = n));
    }
  },
};
function Wt(e) {
  this._context = new Gt(e);
}
(Wt.prototype = Object.create(Ut.prototype)).point = function (e, t) {
  Ut.prototype.point.call(this, t, e);
};
function Gt(e) {
  this._context = e;
}
Gt.prototype = {
  moveTo: function (e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function () {
    this._context.closePath();
  },
  lineTo: function (e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function (e, t, n, r, i, a) {
    this._context.bezierCurveTo(t, e, r, n, a, i);
  },
};
function Kt(e) {
  return new Ut(e);
}
function qt(e) {
  return new Wt(e);
}
function Jt(e) {
  this._context = e;
}
Jt.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x = []), (this._y = []));
  },
  lineEnd: function () {
    var e = this._x,
      t = this._y,
      n = e.length;
    if (n) {
      if (
        (this._line
          ? this._context.lineTo(e[0], t[0])
          : this._context.moveTo(e[0], t[0]),
        n === 2)
      )
        this._context.lineTo(e[1], t[1]);
      else
        for (var r = Yt(e), i = Yt(t), a = 0, o = 1; o < n; ++a, ++o)
          this._context.bezierCurveTo(
            r[0][a],
            i[0][a],
            r[1][a],
            i[1][a],
            e[o],
            t[o],
          );
    }
    ((this._line || (this._line !== 0 && n === 1)) && this._context.closePath(),
      (this._line = 1 - this._line),
      (this._x = this._y = null));
  },
  point: function (e, t) {
    (this._x.push(+e), this._y.push(+t));
  },
};
function Yt(e) {
  var t,
    n = e.length - 1,
    r,
    i = Array(n),
    a = Array(n),
    o = Array(n);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t)
    ((i[t] = 1), (a[t] = 4), (o[t] = 4 * e[t] + 2 * e[t + 1]));
  for (
    i[n - 1] = 2, a[n - 1] = 7, o[n - 1] = 8 * e[n - 1] + e[n], t = 1;
    t < n;
    ++t
  )
    ((r = i[t] / a[t - 1]), (a[t] -= r), (o[t] -= r * o[t - 1]));
  for (i[n - 1] = o[n - 1] / a[n - 1], t = n - 2; t >= 0; --t)
    i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[n - 1] = (e[n] + i[n - 1]) / 2, t = 0; t < n - 1; ++t)
    a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function Xt(e) {
  return new Jt(e);
}
function Zt(e, t) {
  ((this._context = e), (this._t = t));
}
Zt.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x = this._y = NaN), (this._point = 0));
  },
  lineEnd: function () {
    (0 < this._t &&
      this._t < 1 &&
      this._point === 2 &&
      this._context.lineTo(this._x, this._y),
      (this._line || (this._line !== 0 && this._point === 1)) &&
        this._context.closePath(),
      this._line >= 0 &&
        ((this._t = 1 - this._t), (this._line = 1 - this._line)));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default:
        if (this._t <= 0)
          (this._context.lineTo(this._x, t), this._context.lineTo(e, t));
        else {
          var n = this._x * (1 - this._t) + e * this._t;
          (this._context.lineTo(n, this._y), this._context.lineTo(n, t));
        }
    }
    ((this._x = e), (this._y = t));
  },
};
function Qt(e) {
  return new Zt(e, 0.5);
}
function $t(e) {
  return new Zt(e, 0);
}
function en(e) {
  return new Zt(e, 1);
}
function tn(e, t) {
  if ((o = e.length) > 1)
    for (var n = 1, r, i, a = e[t[0]], o, s = a.length; n < o; ++n)
      for (i = a, a = e[t[n]], r = 0; r < s; ++r)
        a[r][1] += a[r][0] = isNaN(i[r][1]) ? i[r][0] : i[r][1];
}
function nn(e) {
  for (var t = e.length, n = Array(t); --t >= 0; ) n[t] = t;
  return n;
}
function rn(e, t) {
  return e[t];
}
function an(e) {
  let t = [];
  return ((t.key = e), t);
}
function on() {
  var e = I([]),
    t = nn,
    n = tn,
    r = rn;
  function i(i) {
    var a = Array.from(e.apply(this, arguments), an),
      o,
      s = a.length,
      c = -1,
      l;
    for (let e of i)
      for (o = 0, ++c; o < s; ++o)
        (a[o][c] = [0, +r(e, a[o].key, c, i)]).data = e;
    for (o = 0, l = st(t(a)); o < s; ++o) a[l[o]].index = o;
    return (n(a, l), a);
  }
  return (
    (i.keys = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : I(Array.from(t))), i)
        : e;
    }),
    (i.value = function (e) {
      return arguments.length
        ? ((r = typeof e == `function` ? e : I(+e)), i)
        : r;
    }),
    (i.order = function (e) {
      return arguments.length
        ? ((t = e == null ? nn : typeof e == `function` ? e : I(Array.from(e))),
          i)
        : t;
    }),
    (i.offset = function (e) {
      return arguments.length ? ((n = e ?? tn), i) : n;
    }),
    i
  );
}
function sn(e, t) {
  if ((r = e.length) > 0) {
    for (var n, r, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = n = 0; n < r; ++n) o += e[n][i][1] || 0;
      if (o) for (n = 0; n < r; ++n) e[n][i][1] /= o;
    }
    tn(e, t);
  }
}
function cn(e, t) {
  if ((i = e.length) > 0) {
    for (var n = 0, r = e[t[0]], i, a = r.length; n < a; ++n) {
      for (var o = 0, s = 0; o < i; ++o) s += e[o][n][1] || 0;
      r[n][1] += r[n][0] = -s / 2;
    }
    tn(e, t);
  }
}
function ln(e, t) {
  if ((o = e.length) > 0 && (a = (i = e[t[0]]).length) > 0) {
    for (var n = 0, r = 1, i, a, o; r < a; ++r) {
      for (var s = 0, c = 0, l = 0; s < o; ++s) {
        for (
          var u = e[t[s]],
            d = u[r][1] || 0,
            f = (d - (u[r - 1][1] || 0)) / 2,
            p = 0;
          p < s;
          ++p
        ) {
          var m = e[t[p]],
            h = m[r][1] || 0,
            g = m[r - 1][1] || 0;
          f += h - g;
        }
        ((c += d), (l += f * d));
      }
      ((i[r - 1][1] += i[r - 1][0] = n), c && (n -= l / c));
    }
    ((i[r - 1][1] += i[r - 1][0] = n), tn(e, t));
  }
}
var un = (e) => `radius` in e && `startAngle` in e && `endAngle` in e,
  dn = (e, t) => {
    if (!e || typeof e == `function` || typeof e == `boolean`) return null;
    var n = e;
    if (
      ((0, w.isValidElement)(e) && (n = e.props),
      typeof n != `object` && typeof n != `function`)
    )
      return null;
    var r = {};
    return (
      Object.keys(n).forEach((e) => {
        C(e) && typeof n[e] == `function` && (r[e] = t || ((t) => n[e](n, t)));
      }),
      r
    );
  },
  fn = (e, t, n) => (r) => (e(t, n, r), null),
  pn = (e, t, n) => {
    if (e === null || (typeof e != `object` && typeof e != `function`))
      return null;
    var r = null;
    return (
      Object.keys(e).forEach((i) => {
        var a = e[i];
        C(i) && typeof a == `function` && ((r ||= {}), (r[i] = fn(a, t, n)));
      }),
      r
    );
  };
function mn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function hn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? mn(Object(n), !0).forEach(function (t) {
          gn(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : mn(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function gn(e, t, n) {
  return (
    (t = _n(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function _n(e) {
  var t = vn(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function vn(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function yn(e, t) {
  var n = hn({}, e),
    r = t;
  return Object.keys(t).reduce(
    (e, t) => (e[t] === void 0 && r[t] !== void 0 && (e[t] = r[t]), e),
    n,
  );
}
function bn(e, t) {
  let n = new Map();
  for (let r = 0; r < e.length; r++) {
    let i = e[r],
      a = t(i, r, e);
    n.has(a) || n.set(a, i);
  }
  return Array.from(n.values());
}
function xn(e, t) {
  return function (...n) {
    return e.apply(this, n.slice(0, t));
  };
}
function Sn(e) {
  return e;
}
function Cn(e) {
  return Number.isSafeInteger(e) && e >= 0;
}
function wn(e) {
  return e != null && typeof e != `function` && Cn(e.length);
}
function Tn(e) {
  return function (t) {
    return _e(t, e);
  };
}
function En(e) {
  return e == null || (typeof e != `object` && typeof e != `function`);
}
function Dn(e) {
  return e == null
    ? e === void 0
      ? `[object Undefined]`
      : `[object Null]`
    : Object.prototype.toString.call(e);
}
var On = `[object RegExp]`,
  kn = `[object String]`,
  An = `[object Number]`,
  jn = `[object Boolean]`,
  Mn = `[object Arguments]`,
  Nn = `[object Symbol]`,
  Pn = `[object Date]`,
  Fn = `[object Map]`,
  In = `[object Set]`,
  Ln = `[object Array]`,
  Rn = `[object Function]`,
  zn = `[object ArrayBuffer]`,
  Bn = `[object Object]`,
  Vn = `[object Error]`,
  Hn = `[object DataView]`,
  Un = `[object Uint8Array]`,
  Wn = `[object Uint8ClampedArray]`,
  Gn = `[object Uint16Array]`,
  Kn = `[object Uint32Array]`,
  qn = `[object BigUint64Array]`,
  Jn = `[object Int8Array]`,
  Yn = `[object Int16Array]`,
  Xn = `[object Int32Array]`,
  Zn = `[object BigInt64Array]`,
  Qn = `[object Float32Array]`,
  $n = `[object Float64Array]`;
function er(e, t) {
  return e === t || (Number.isNaN(e) && Number.isNaN(t));
}
function tr(e) {
  return e !== null && (typeof e == `object` || typeof e == `function`);
}
function nr(e, t, n) {
  return typeof n == `function`
    ? rr(
        e,
        t,
        function e(t, r, i, a, o, s) {
          let c = n(t, r, i, a, o, s);
          return c === void 0 ? rr(t, r, e, s, !1) : !!c;
        },
        new Map(),
        !0,
      )
    : nr(e, t, () => void 0);
}
function rr(e, t, n, r, i = !1) {
  if (t === e) return !0;
  switch (typeof t) {
    case `object`:
      return ir(e, t, n, r, i);
    case `function`:
      return Object.keys(t).length > 0
        ? rr(e, Object.assign({}, t), n, r, i)
        : er(e, t);
    default:
      return tr(e) && i ? typeof t != `string` || t === `` : er(e, t);
  }
}
function ir(e, t, n, r, i = !1) {
  if (t == null) return !0;
  if (Array.isArray(t)) return or(e, t, n, r);
  if (t instanceof Map) return ar(e, t, n, r);
  if (t instanceof Set) return sr(e, t, n, r);
  let a = Object.keys(t);
  if (e == null) return i && a.length === 0;
  if (i) En(e) && (e = Object(e));
  else {
    if (Dn(t) === `[object Error]`)
      return (
        Dn(e) === `[object Error]` &&
        e.name === t.name &&
        e.message === t.message
      );
    let n = Dn(e);
    if (n !== `[object Object]` && n !== `[object Arguments]`) return !1;
  }
  if (a.length === 0) return !0;
  if (r?.has(t)) return r.get(t) === e;
  r?.set(t, e);
  try {
    for (let i = 0; i < a.length; i++) {
      let o = a[i];
      if (
        !(o in e) ||
        (t[o] === void 0 && e[o] !== void 0) ||
        (t[o] === null && e[o] !== null) ||
        !n(e[o], t[o], o, e, t, r)
      )
        return !1;
    }
    return !0;
  } finally {
    r?.delete(t);
  }
}
function ar(e, t, n, r) {
  if (t.size === 0) return !0;
  if (!(e instanceof Map)) return !1;
  for (let [i, a] of t.entries())
    if (n(e.get(i), a, i, e, t, r) === !1) return !1;
  return !0;
}
function or(e, t, n, r) {
  if (t.length === 0) return !0;
  if (!Array.isArray(e)) return !1;
  let i = new Set();
  for (let a = 0; a < t.length; a++) {
    let o = t[a],
      s = !1;
    for (let c = 0; c < e.length; c++) {
      if (i.has(c)) continue;
      let l = e[c],
        u = !1;
      if ((n(l, o, a, e, t, r) && (u = !0), u)) {
        (i.add(c), (s = !0));
        break;
      }
    }
    if (!s) return !1;
  }
  return !0;
}
function sr(e, t, n, r) {
  return t.size === 0 || (e instanceof Set && or([...e], [...t], n, r));
}
function cr(e, t) {
  return nr(e, t, () => void 0);
}
function lr(e) {
  return Object.getOwnPropertySymbols(e).filter((t) =>
    Object.prototype.propertyIsEnumerable.call(e, t),
  );
}
var ur =
  (typeof globalThis == `object` && globalThis) ||
  (typeof window == `object` && window) ||
  (typeof self == `object` && self) ||
  (typeof global == `object` && global) ||
  (function () {
    return this;
  })();
function dr(e) {
  return ur.Buffer !== void 0 && ur.Buffer.isBuffer(e);
}
function fr(e) {
  return dr(e);
}
function pr(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function mr(e) {
  return pr(e);
}
function hr(e, t) {
  return gr(e, void 0, e, new Map(), t);
}
function gr(e, t, n, r, i) {
  if (i != null) {
    let a = i(e, t, n, r);
    if (a !== void 0) return a;
  }
  if (En(e)) return e;
  if (r.has(e)) return r.get(e);
  if (Array.isArray(e)) {
    let t = Array(e.length);
    r.set(e, t);
    for (let a = 0; a < e.length; a++) t[a] = gr(e[a], a, n, r, i);
    return (
      le(e, `index`) && (t.index = e.index),
      le(e, `input`) && (t.input = e.input),
      t
    );
  }
  if (e instanceof Date) return new Date(e.getTime());
  if (e instanceof RegExp) {
    let t = new RegExp(e.source, e.flags);
    return ((t.lastIndex = e.lastIndex), t);
  }
  if (e instanceof Map) {
    let t = new Map();
    return (
      r.set(e, t),
      e.forEach((e, a) => {
        t.set(a, gr(e, a, n, r, i));
      }),
      t
    );
  }
  if (e instanceof Set) {
    let t = new Set();
    return (
      r.set(e, t),
      e.forEach((e) => {
        t.add(gr(e, void 0, n, r, i));
      }),
      t
    );
  }
  if (fr(e)) return e.subarray();
  if (mr(e)) {
    let t = new (Object.getPrototypeOf(e).constructor)(e.length);
    r.set(e, t);
    for (let a = 0; a < e.length; a++) t[a] = gr(e[a], a, n, r, i);
    return t;
  }
  if (
    e instanceof ArrayBuffer ||
    (typeof SharedArrayBuffer < `u` && e instanceof SharedArrayBuffer)
  )
    return e.slice(0);
  if (e instanceof DataView) {
    let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
    return (r.set(e, t), _r(t, e, n, r, i), t);
  }
  if (typeof File < `u` && e instanceof File) {
    let t = new File([e], e.name, { type: e.type });
    return (r.set(e, t), _r(t, e, n, r, i), t);
  }
  if (typeof Blob < `u` && e instanceof Blob) {
    let t = new Blob([e], { type: e.type });
    return (r.set(e, t), _r(t, e, n, r, i), t);
  }
  let a = Dn(e);
  if (a === `[object Error]`) return e === n ? {} : e;
  switch (a) {
    case An:
    case kn:
    case jn: {
      let t = new e.constructor(e.valueOf());
      return (r.set(e, t), _r(t, e, n, r, i), t);
    }
    case Mn: {
      let t = {};
      return (
        r.set(e, t),
        _r(t, e, n, r, i),
        (t.length = e.length),
        (t[Symbol.iterator] = e[Symbol.iterator]),
        t
      );
    }
  }
  if (typeof e == `object` && vr(a)) {
    let t =
      a === `[object Object]` && typeof e.constructor != `function`
        ? {}
        : Object.create(Object.getPrototypeOf(e));
    return (r.set(e, t), _r(t, e, n, r, i), t);
  }
  return e;
}
function _r(e, t, n, r, i) {
  let a = [...Object.keys(t), ...lr(t)];
  for (let o = 0; o < a.length; o++) {
    let s = a[o],
      c = Object.getOwnPropertyDescriptor(e, s);
    (c == null || c.writable) && (e[s] = gr(t[s], s, n, r, i));
  }
}
function vr(e) {
  switch (e) {
    case Mn:
    case Ln:
    case zn:
    case Hn:
    case jn:
    case Pn:
    case Qn:
    case $n:
    case Jn:
    case Yn:
    case Xn:
    case Fn:
    case An:
    case Bn:
    case On:
    case In:
    case kn:
    case Nn:
    case Un:
    case Wn:
    case Gn:
    case Kn:
      return !0;
    default:
      return !1;
  }
}
function yr(e) {
  return hr(e);
}
function br(e) {
  return ((e = yr(e)), (t) => cr(t, e));
}
var xr = /^(?:0|[1-9]\d*)$/;
function Sr(e, t = 2 ** 53 - 1) {
  switch (typeof e) {
    case `number`:
      return Number.isInteger(e) && e >= 0 && e < t;
    case `symbol`:
      return !1;
    case `string`:
      return xr.test(e);
  }
}
function Cr(e) {
  return typeof e == `object` && !!e && Dn(e) === `[object Arguments]`;
}
function wr(e, t) {
  let n;
  if (
    ((n = Array.isArray(t)
      ? t
      : typeof t == `string` && de(t) && !(t in Object(e))
        ? ge(t)
        : [t]),
    n.length === 0)
  )
    return !1;
  let r = e;
  for (let e = 0; e < n.length; e++) {
    let t = fe(n[e]);
    if (
      (r == null || !le(r, t)) &&
      !((Array.isArray(r) || Cr(r)) && Sr(t) && Number(t) < r.length)
    )
      return !1;
    r = r[t];
  }
  return !0;
}
function Tr(e, t) {
  switch (typeof e) {
    case `object`:
      Object.is(e?.valueOf(), -0) && (e = `-0`);
      break;
    case `number`:
      e = fe(e);
  }
  return (
    (t = yr(t)),
    function (n) {
      let r = _e(n, e);
      return r === void 0 ? wr(n, e) : t === void 0 ? r === void 0 : cr(r, t);
    }
  );
}
function Er(e) {
  if (e == null) return Sn;
  switch (typeof e) {
    case `function`:
      return e;
    case `object`:
      return Array.isArray(e) && e.length === 2 ? Tr(e[0], e[1]) : br(e);
    default:
      return Tn(e);
  }
}
function Dr(e) {
  return e === 0 ? 0 : e;
}
function Or(e, t = Sn) {
  return wn(e) ? bn(Array.from(e), xn(Er(t), 1)).map(Dr) : [];
}
function kr(e, t, n) {
  return t === !0 ? Or(e, n) : typeof t == `function` ? Or(e, t) : e;
}
var Ar = o((e) => {
    var t = l();
    function n(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var r = typeof Object.is == `function` ? Object.is : n,
      i = t.useState,
      a = t.useEffect,
      o = t.useLayoutEffect,
      s = t.useDebugValue;
    function c(e, t) {
      var n = t(),
        r = i({ inst: { value: n, getSnapshot: t } }),
        c = r[0].inst,
        l = r[1];
      return (
        o(
          function () {
            ((c.value = n), (c.getSnapshot = t), u(c) && l({ inst: c }));
          },
          [e, n, t],
        ),
        a(
          function () {
            return (
              u(c) && l({ inst: c }),
              e(function () {
                u(c) && l({ inst: c });
              })
            );
          },
          [e],
        ),
        s(n),
        n
      );
    }
    function u(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !r(e, n);
      } catch {
        return !0;
      }
    }
    function d(e, t) {
      return t();
    }
    var f =
      typeof window > `u` ||
      window.document === void 0 ||
      window.document.createElement === void 0
        ? d
        : c;
    e.useSyncExternalStore =
      t.useSyncExternalStore === void 0 ? f : t.useSyncExternalStore;
  }),
  jr = o((e, t) => {
    t.exports = Ar();
  }),
  Mr = o((e) => {
    var t = l(),
      n = jr();
    function r(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var i = typeof Object.is == `function` ? Object.is : r,
      a = n.useSyncExternalStore,
      o = t.useRef,
      s = t.useEffect,
      c = t.useMemo,
      u = t.useDebugValue;
    e.useSyncExternalStoreWithSelector = function (e, t, n, r, l) {
      var d = o(null);
      if (d.current === null) {
        var f = { hasValue: !1, value: null };
        d.current = f;
      } else f = d.current;
      d = c(
        function () {
          function e(e) {
            if (!a) {
              if (((a = !0), (o = e), (e = r(e)), l !== void 0 && f.hasValue)) {
                var t = f.value;
                if (l(t, e)) return (s = t);
              }
              return (s = e);
            }
            if (((t = s), i(o, e))) return t;
            var n = r(e);
            return l !== void 0 && l(t, n) ? ((o = e), t) : ((o = e), (s = n));
          }
          var a = !1,
            o,
            s,
            c = n === void 0 ? null : n;
          return [
            function () {
              return e(t());
            },
            c === null
              ? void 0
              : function () {
                  return e(c());
                },
          ];
        },
        [t, n, r, l],
      );
      var p = a(e, d[0], d[1]);
      return (
        s(
          function () {
            ((f.hasValue = !0), (f.value = p));
          },
          [p],
        ),
        u(p),
        p
      );
    };
  }),
  Nr = o((e, t) => {
    t.exports = Mr();
  }),
  Pr = (0, w.createContext)(null),
  Fr = Nr(),
  Ir = (e) => e,
  L = () => {
    var e = (0, w.useContext)(Pr);
    return e ? e.store.dispatch : Ir;
  },
  Lr = () => {},
  Rr = () => Lr,
  zr = (e, t) => e === t;
function R(e) {
  var t = (0, w.useContext)(Pr),
    n = (0, w.useMemo)(
      () =>
        t
          ? (t) => {
              if (t != null) return e(t);
            }
          : Lr,
      [t, e],
    );
  return (0, Fr.useSyncExternalStoreWithSelector)(
    t ? t.subscription.addNestedSub : Rr,
    t ? t.store.getState : Lr,
    t ? t.store.getState : Lr,
    n,
    zr,
  );
}
function Br(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != `function`) throw TypeError(t);
}
function Vr(
  e,
  t = `expected all items to be functions, instead received the following types: `,
) {
  if (!e.every((e) => typeof e == `function`)) {
    let n = e
      .map((e) =>
        typeof e == `function` ? `function ${e.name || `unnamed`}()` : typeof e,
      )
      .join(`, `);
    throw TypeError(`${t}[${n}]`);
  }
}
var Hr = (e) => (Array.isArray(e) ? e : [e]);
function Ur(e) {
  let t = Array.isArray(e[0]) ? e[0] : e;
  return (
    Vr(
      t,
      `createSelector expects all input-selectors to be functions, but received the following types: `,
    ),
    t
  );
}
function Wr(e, t) {
  let n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var Gr = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  Kr = typeof WeakRef > `u` ? Gr : WeakRef,
  qr = 0,
  Jr = 1;
function Yr() {
  return { s: qr, v: void 0, o: null, p: null };
}
function Xr(e) {
  return e instanceof Kr ? e.deref() : e;
}
function Zr(e, t = {}) {
  let n = Yr(),
    { resultEqualityCheck: r } = t,
    i,
    a = 0;
  function o() {
    let t = n,
      { length: o } = arguments;
    for (let e = 0, n = o; e < n; e++) {
      let n = arguments[e];
      if (typeof n == `function` || (typeof n == `object` && n)) {
        let e = t.o;
        e === null && (t.o = e = new WeakMap());
        let r = e.get(n);
        r === void 0 ? ((t = Yr()), e.set(n, t)) : (t = r);
      } else {
        let e = t.p;
        e === null && (t.p = e = new Map());
        let r = e.get(n);
        r === void 0 ? ((t = Yr()), e.set(n, t)) : (t = r);
      }
    }
    let s = t,
      c;
    if (t.s === Jr) c = t.v;
    else if (((c = e.apply(null, arguments)), a++, r)) {
      let e = Xr(i);
      (e != null && r(e, c) && ((c = e), a !== 0 && a--),
        (i =
          (typeof c == `object` && c) || typeof c == `function`
            ? new Kr(c)
            : c));
    }
    return ((s.s = Jr), (s.v = c), c);
  }
  return (
    (o.clearCache = () => {
      ((n = Yr()), o.resetResultsCount());
    }),
    (o.resultsCount = () => a),
    (o.resetResultsCount = () => {
      a = 0;
    }),
    o
  );
}
function Qr(e, ...t) {
  let n = typeof e == `function` ? { memoize: e, memoizeOptions: t } : e,
    r = (...e) => {
      let t = 0,
        r = 0,
        i,
        a = {},
        o = e.pop();
      (typeof o == `object` && ((a = o), (o = e.pop())),
        Br(
          o,
          `createSelector expects an output function after the inputs, but received: [${typeof o}]`,
        ));
      let {
          memoize: s,
          memoizeOptions: c = [],
          argsMemoize: l = Zr,
          argsMemoizeOptions: u = [],
        } = { ...n, ...a },
        d = Hr(c),
        f = Hr(u),
        p = Ur(e),
        m = s(
          function () {
            return (t++, o.apply(null, arguments));
          },
          ...d,
        ),
        h = l(
          function () {
            r++;
            let e = Wr(p, arguments);
            return ((i = m.apply(null, e)), i);
          },
          ...f,
        );
      return Object.assign(h, {
        resultFunc: o,
        memoizedResultFunc: m,
        dependencies: p,
        dependencyRecomputations: () => r,
        resetDependencyRecomputations: () => {
          r = 0;
        },
        lastResult: () => i,
        recomputations: () => t,
        resetRecomputations: () => {
          t = 0;
        },
        memoize: s,
        argsMemoize: l,
      });
    };
  return (Object.assign(r, { withTypes: () => r }), r);
}
var z = Qr(Zr);
function $r(e, t = 1) {
  let n = [],
    r = Math.floor(t),
    i = (e, t) => {
      for (let a = 0; a < e.length; a++) {
        let o = e[a];
        Array.isArray(o) && t < r ? i(o, t + 1) : n.push(o);
      }
    };
  return (i(e, 0), n);
}
function ei(e, t, n) {
  return tr(n) &&
    ((typeof t == `number` && wn(n) && Sr(t) && t < n.length) ||
      (typeof t == `string` && t in n))
    ? er(n[t], e)
    : !1;
}
function ti(e) {
  let t = Object.keys(e),
    n = Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = e[t[r]];
  return n;
}
function ni(e) {
  return typeof e == `symbol`
    ? 1
    : e === null
      ? 2
      : e === void 0
        ? 3
        : e === e
          ? 0
          : 4;
}
var ri = (e, t, n) => {
    if (e !== t) {
      let r = ni(e),
        i = ni(t);
      if (r === i && r === 0) {
        if (e < t) return n === `desc` ? 1 : -1;
        if (e > t) return n === `desc` ? -1 : 1;
      }
      return n === `desc` ? i - r : r - i;
    }
    return 0;
  },
  ii = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  ai = /^\w*$/;
function oi(e, t) {
  return Array.isArray(e)
    ? !1
    : typeof e == `number` || typeof e == `boolean` || e == null || pe(e)
      ? !0
      : (typeof e == `string` && (ai.test(e) || !ii.test(e))) ||
        (t != null && le(t, e));
}
function si(e, t, n, r) {
  if (e == null) return [];
  ((n = r ? void 0 : n),
    Array.isArray(e) || (e = wn(e) ? Array.from(e) : ti(e)),
    Array.isArray(t) || (t = t == null ? [null] : [t]),
    t.length === 0 && (t = [null]),
    Array.isArray(n) || (n = n == null ? [] : [n]),
    (n = n.map((e) => String(e))));
  let i = (e, t) => {
      let n = e,
        r = 0;
      for (; r < t.length && n != null; ++r) n = n[t[r]];
      return r > 0 && r === t.length ? n : void 0;
    },
    a = (e, t) => {
      if (e == null) return t;
      if (t != null)
        return typeof e == `object` && `key` in e
          ? le(t, e.key)
            ? t[e.key]
            : i(t, e.path)
          : typeof e == `function`
            ? e(t)
            : Array.isArray(e)
              ? i(t, e)
              : t[e];
    },
    o = t.map(
      (e) => (
        Array.isArray(e) && e.length === 1 && (e = e[0]),
        e == null || typeof e == `function` || Array.isArray(e) || oi(e)
          ? e
          : { key: e, path: ge(e) }
      ),
    );
  return e
    .map((e) => ({ original: e, criteria: o.map((t) => a(t, e)) }))
    .slice()
    .sort((e, t) => {
      for (let r = 0; r < o.length; r++) {
        let i = ri(e.criteria[r], t.criteria[r], n[r]);
        if (i !== 0) return i;
      }
      return 0;
    })
    .map((e) => e.original);
}
function ci(e, ...t) {
  let n = t.length;
  return (
    n > 1 && ei(e, t[0], t[1])
      ? (t = [])
      : n > 2 && ei(t[0], t[1], t[2]) && (t = [t[0]]),
    si(e, $r(t), [`asc`])
  );
}
var li = (e) => e.legend.settings,
  ui = (e) => e.legend.size;
z([(e) => e.legend.payload, li], (e, t) => {
  var n = t.itemSorter,
    r = e.flat(1);
  return n ? ci(r, n) : r;
});
function di(e, t) {
  return gi(e) || hi(e, t) || pi(e, t) || fi();
}
function fi() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pi(e, t) {
  if (e) {
    if (typeof e == `string`) return mi(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? mi(e, t)
          : void 0
    );
  }
}
function mi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function hi(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function gi(e) {
  if (Array.isArray(e)) return e;
}
var _i = 1;
function vi(e, t) {
  return (
    Math.abs(e.height - t.height) > _i ||
    Math.abs(e.left - t.left) > _i ||
    Math.abs(e.top - t.top) > _i ||
    Math.abs(e.width - t.width) > _i
  );
}
function yi(e) {
  var t = e.getBoundingClientRect();
  return { height: t.height, left: t.left, top: t.top, width: t.width };
}
function bi() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = di((0, w.useState)({ height: 0, left: 0, top: 0, width: 0 }), 2),
    n = t[0],
    r = t[1],
    i = (0, w.useRef)(null),
    a = (0, w.useRef)(n);
  a.current = n;
  var o = (0, w.useCallback)(
    (e) => {
      if (
        (i.current != null && (i.current.disconnect(), (i.current = null)),
        e != null)
      ) {
        var t = yi(e);
        if ((vi(t, a.current) && r(t), typeof ResizeObserver < `u`)) {
          var n = new ResizeObserver(() => {
            var t = yi(e);
            vi(t, a.current) && r(t);
          });
          (n.observe(e), (i.current = n));
        }
      }
    },
    [...e],
  );
  return (
    (0, w.useEffect)(
      () => () => {
        var e;
        (e = i.current) == null || e.disconnect();
      },
      [],
    ),
    [n, o]
  );
}
function xi(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Si = (typeof Symbol == `function` && Symbol.observable) || `@@observable`,
  Ci = () => Math.random().toString(36).substring(7).split(``).join(`.`),
  wi = {
    INIT: `@@redux/INIT${Ci()}`,
    REPLACE: `@@redux/REPLACE${Ci()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ci()}`,
  };
function Ti(e) {
  if (typeof e != `object` || !e) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Ei(e, t, n) {
  if (typeof e != `function`) throw Error(xi(2));
  if (
    (typeof t == `function` && typeof n == `function`) ||
    (typeof n == `function` && typeof arguments[3] == `function`)
  )
    throw Error(xi(0));
  if (
    (typeof t == `function` && n === void 0 && ((n = t), (t = void 0)),
    n !== void 0)
  ) {
    if (typeof n != `function`) throw Error(xi(1));
    return n(Ei)(e, t);
  }
  let r = e,
    i = t,
    a = new Map(),
    o = a,
    s = 0,
    c = !1;
  function l() {
    o === a &&
      ((o = new Map()),
      a.forEach((e, t) => {
        o.set(t, e);
      }));
  }
  function u() {
    if (c) throw Error(xi(3));
    return i;
  }
  function d(e) {
    if (typeof e != `function`) throw Error(xi(4));
    if (c) throw Error(xi(5));
    let t = !0;
    l();
    let n = s++;
    return (
      o.set(n, e),
      function () {
        if (t) {
          if (c) throw Error(xi(6));
          ((t = !1), l(), o.delete(n), (a = null));
        }
      }
    );
  }
  function f(e) {
    if (!Ti(e)) throw Error(xi(7));
    if (e.type === void 0) throw Error(xi(8));
    if (typeof e.type != `string`) throw Error(xi(17));
    if (c) throw Error(xi(9));
    try {
      ((c = !0), (i = r(i, e)));
    } finally {
      c = !1;
    }
    return (
      (a = o).forEach((e) => {
        e();
      }),
      e
    );
  }
  function p(e) {
    if (typeof e != `function`) throw Error(xi(10));
    ((r = e), f({ type: wi.REPLACE }));
  }
  function m() {
    let e = d;
    return {
      subscribe(t) {
        if (typeof t != `object` || !t) throw Error(xi(11));
        function n() {
          let e = t;
          e.next && e.next(u());
        }
        return (n(), { unsubscribe: e(n) });
      },
      [Si]() {
        return this;
      },
    };
  }
  return (
    f({ type: wi.INIT }),
    { dispatch: f, subscribe: d, getState: u, replaceReducer: p, [Si]: m }
  );
}
function Di(e) {
  Object.keys(e).forEach((t) => {
    let n = e[t];
    if (n(void 0, { type: wi.INIT }) === void 0) throw Error(xi(12));
    if (n(void 0, { type: wi.PROBE_UNKNOWN_ACTION() }) === void 0)
      throw Error(xi(13));
  });
}
function Oi(e) {
  let t = Object.keys(e),
    n = {};
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    typeof e[i] == `function` && (n[i] = e[i]);
  }
  let r = Object.keys(n),
    i;
  try {
    Di(n);
  } catch (e) {
    i = e;
  }
  return function (e = {}, t) {
    if (i) throw i;
    let a = !1,
      o = {};
    for (let i = 0; i < r.length; i++) {
      let s = r[i],
        c = n[s],
        l = e[s],
        u = c(l, t);
      if (u === void 0) throw (t && t.type, Error(xi(14)));
      ((o[s] = u), (a ||= u !== l));
    }
    return ((a ||= r.length !== Object.keys(e).length), a ? o : e);
  };
}
function ki(...e) {
  return e.length === 0
    ? (e) => e
    : e.length === 1
      ? e[0]
      : e.reduce(
          (e, t) =>
            (...n) =>
              e(t(...n)),
        );
}
function Ai(...e) {
  return (t) => (n, r) => {
    let i = t(n, r),
      a = () => {
        throw Error(xi(15));
      },
      o = { getState: i.getState, dispatch: (e, ...t) => a(e, ...t) };
    return ((a = ki(...e.map((e) => e(o)))(i.dispatch)), { ...i, dispatch: a });
  };
}
function ji(e) {
  return Ti(e) && `type` in e && typeof e.type == `string`;
}
var Mi = Symbol.for(`immer-nothing`),
  Ni = Symbol.for(`immer-draftable`),
  Pi = Symbol.for(`immer-state`);
function Fi(e, ...t) {
  throw Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var Ii = Object,
  Li = Ii.getPrototypeOf,
  Ri = `constructor`,
  zi = `prototype`,
  Bi = `configurable`,
  Vi = `enumerable`,
  Hi = `writable`,
  Ui = `value`,
  Wi = (e) => !!e && !!e[Pi];
function Gi(e) {
  return e ? Ji(e) || ta(e) || !!e[Ni] || !!e[Ri]?.[Ni] || na(e) || ra(e) : !1;
}
var Ki = Ii[zi][Ri].toString(),
  qi = new WeakMap();
function Ji(e) {
  if (!e || !ia(e)) return !1;
  let t = Li(e);
  if (t === null || t === Ii[zi]) return !0;
  let n = Ii.hasOwnProperty.call(t, Ri) && t[Ri];
  if (n === Object) return !0;
  if (!aa(n)) return !1;
  let r = qi.get(n);
  return (
    r === void 0 && ((r = Function.toString.call(n)), qi.set(n, r)),
    r === Ki
  );
}
function Yi(e, t, n = !0) {
  Xi(e) === 0
    ? (n ? Reflect.ownKeys(e) : Ii.keys(e)).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function Xi(e) {
  let t = e[Pi];
  return t ? t.type_ : ta(e) ? 1 : na(e) ? 2 : ra(e) ? 3 : 0;
}
var Zi = (e, t, n = Xi(e)) =>
    n === 2 ? e.has(t) : Ii[zi].hasOwnProperty.call(e, t),
  Qi = (e, t, n = Xi(e)) => (n === 2 ? e.get(t) : e[t]),
  $i = (e, t, n, r = Xi(e)) => {
    r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
  };
function ea(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
var ta = Array.isArray,
  na = (e) => e instanceof Map,
  ra = (e) => e instanceof Set,
  ia = (e) => typeof e == `object`,
  aa = (e) => typeof e == `function`,
  oa = (e) => typeof e == `boolean`;
function sa(e) {
  let t = +e;
  return Number.isInteger(t) && String(t) === e;
}
var ca = (e) => e.copy_ || e.base_,
  la = (e) => (e.modified_ ? e.copy_ : e.base_);
function ua(e, t) {
  if (na(e)) return new Map(e);
  if (ra(e)) return new Set(e);
  if (ta(e)) return Array[zi].slice.call(e);
  let n = Ji(e);
  if (t === !0 || (t === `class_only` && !n)) {
    let t = Ii.getOwnPropertyDescriptors(e);
    delete t[Pi];
    let n = Reflect.ownKeys(t);
    for (let r = 0; r < n.length; r++) {
      let i = n[r],
        a = t[i];
      (a[Hi] === !1 && ((a[Hi] = !0), (a[Bi] = !0)),
        (a.get || a.set) &&
          (t[i] = { [Bi]: !0, [Hi]: !0, [Vi]: a[Vi], [Ui]: e[i] }));
    }
    return Ii.create(Li(e), t);
  }
  {
    let t = Li(e);
    if (t !== null && n) return { ...e };
    let r = Ii.create(t);
    return Ii.assign(r, e);
  }
}
function da(e, t = !1) {
  return (
    ma(e) ||
      Wi(e) ||
      !Gi(e) ||
      (Xi(e) > 1 &&
        Ii.defineProperties(e, { set: pa, add: pa, clear: pa, delete: pa }),
      Ii.freeze(e),
      t &&
        Yi(
          e,
          (e, t) => {
            da(t, !0);
          },
          !1,
        )),
    e
  );
}
function fa() {
  Fi(2);
}
var pa = { [Ui]: fa };
function ma(e) {
  return e === null || !ia(e) || Ii.isFrozen(e);
}
var ha = `MapSet`,
  ga = `Patches`,
  _a = `ArrayMethods`,
  va = {};
function ya(e) {
  let t = va[e];
  return (t || Fi(0, e), t);
}
var ba = (e) => !!va[e],
  xa,
  Sa = () => xa,
  Ca = (e, t) => ({
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
    handledSet_: new Set(),
    processedForPatches_: new Set(),
    mapSetPlugin_: ba(ha) ? ya(ha) : void 0,
    arrayMethodsPlugin_: ba(_a) ? ya(_a) : void 0,
  });
function wa(e, t) {
  t &&
    ((e.patchPlugin_ = ya(ga)),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function Ta(e) {
  (Ea(e), e.drafts_.forEach(Oa), (e.drafts_ = null));
}
function Ea(e) {
  e === xa && (xa = e.parent_);
}
var Da = (e) => (xa = Ca(xa, e));
function Oa(e) {
  let t = e[Pi];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function ka(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  let n = t.drafts_[0];
  if (e !== void 0 && e !== n) {
    (n[Pi].modified_ && (Ta(t), Fi(4)), Gi(e) && (e = Aa(t, e)));
    let { patchPlugin_: r } = t;
    r && r.generateReplacementPatches_(n[Pi].base_, e, t);
  } else e = Aa(t, n);
  return (
    ja(t, e, !0),
    Ta(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e === Mi ? void 0 : e
  );
}
function Aa(e, t) {
  if (ma(t)) return t;
  let n = t[Pi];
  if (!n) return za(t, e.handledSet_, e);
  if (!Na(n, e)) return t;
  if (!n.modified_) return n.base_;
  if (!n.finalized_) {
    let { callbacks_: t } = n;
    if (t) for (; t.length > 0; ) t.pop()(e);
    La(n, e);
  }
  return n.copy_;
}
function ja(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && da(t, n);
}
function Ma(e) {
  ((e.finalized_ = !0), e.scope_.unfinalizedDrafts_--);
}
var Na = (e, t) => e.scope_ === t,
  Pa = [];
function Fa(e, t, n, r) {
  let i = ca(e),
    a = e.type_;
  if (r !== void 0 && Qi(i, r, a) === t) {
    $i(i, r, n, a);
    return;
  }
  if (!e.draftLocations_) {
    let t = (e.draftLocations_ = new Map());
    Yi(i, (e, n) => {
      if (Wi(n)) {
        let r = t.get(n) || [];
        (r.push(e), t.set(n, r));
      }
    });
  }
  let o = e.draftLocations_.get(t) ?? Pa;
  for (let e of o) $i(i, e, n, a);
}
function Ia(e, t, n) {
  e.callbacks_.push(function (r) {
    let i = t;
    if (!i || !Na(i, r)) return;
    r.mapSetPlugin_?.fixSetContents(i);
    let a = la(i);
    (Fa(e, i.draft_ ?? i, a, n), La(i, r));
  });
}
function La(e, t) {
  if (
    e.modified_ &&
    !e.finalized_ &&
    (e.type_ === 3 ||
      (e.type_ === 1 && e.allIndicesReassigned_) ||
      (e.assigned_?.size ?? 0) > 0)
  ) {
    let { patchPlugin_: n } = t;
    if (n) {
      let r = n.getPath(e);
      r && n.generatePatches_(e, r, t);
    }
    Ma(e);
  }
}
function Ra(e, t, n) {
  let { scope_: r } = e;
  if (Wi(n)) {
    let i = n[Pi];
    Na(i, r) &&
      i.callbacks_.push(function () {
        (Ja(e), Fa(e, n, la(i), t));
      });
  } else
    Gi(n) &&
      e.callbacks_.push(function () {
        let i = ca(e);
        e.type_ === 3
          ? i.has(n) && za(n, r.handledSet_, r)
          : Qi(i, t, e.type_) === n &&
            r.drafts_.length > 1 &&
            (e.assigned_.get(t) ?? !1) === !0 &&
            e.copy_ &&
            za(Qi(e.copy_, t, e.type_), r.handledSet_, r);
      });
}
function za(e, t, n) {
  return (
    (!n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1) ||
      Wi(e) ||
      t.has(e) ||
      !Gi(e) ||
      ma(e) ||
      (t.add(e),
      Yi(e, (r, i) => {
        if (Wi(i)) {
          let t = i[Pi];
          Na(t, n) && ($i(e, r, la(t), e.type_), Ma(t));
        } else Gi(i) && za(i, t, n);
      })),
    e
  );
}
function Ba(e, t) {
  let n = ta(e),
    r = {
      type_: +!!n,
      scope_: t ? t.scope_ : Sa(),
      modified_: !1,
      finalized_: !1,
      assigned_: void 0,
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
      callbacks_: void 0,
    },
    i = r,
    a = Va;
  n && ((i = [r]), (a = Ha));
  let { revoke: o, proxy: s } = Proxy.revocable(i, a);
  return ((r.draft_ = s), (r.revoke_ = o), [s, r]);
}
var Va = {
    get(e, t) {
      if (t === Pi) return e;
      let n = e.scope_.arrayMethodsPlugin_,
        r = e.type_ === 1 && typeof t == `string`;
      if (r && n?.isArrayOperationMethod(t))
        return n.createMethodInterceptor(e, t);
      let i = ca(e);
      if (!Zi(i, t, e.type_)) return Ga(e, i, t);
      let a = i[t];
      if (
        e.finalized_ ||
        !Gi(a) ||
        (r &&
          e.operationMethod &&
          n?.isMutatingArrayMethod(e.operationMethod) &&
          sa(t))
      )
        return a;
      if (a === Ua(e.base_, t) || Wa(e, t, a)) {
        Ja(e);
        let n = e.type_ === 1 ? +t : t,
          r = Xa(e.scope_, a, e, n);
        return (e.copy_[n] = r);
      }
      return a;
    },
    has(e, t) {
      return t in ca(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(ca(e));
    },
    set(e, t, n) {
      let r = Ka(ca(e), t);
      if (r?.set) return (r.set.call(e.draft_, n), !0);
      if (!e.modified_) {
        let r = Ua(ca(e), t),
          i = r?.[Pi];
        if (i && i.base_ === n)
          return ((e.copy_[t] = n), e.assigned_.delete(t), !0);
        if (ea(n, r) && (n !== void 0 || Zi(e.base_, t, e.type_))) return !0;
        (Ja(e), qa(e));
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || Zi(e.copy_, t, e.type_))) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), e.assigned_.set(t, !0), Ra(e, t, n)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        Ja(e),
        Ua(e.base_, t) !== void 0 || t in e.base_
          ? (e.assigned_.set(t, !1), qa(e))
          : e.assigned_.delete(t),
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      let n = ca(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          [Hi]: !0,
          [Bi]: e.type_ !== 1 || t !== `length`,
          [Vi]: r[Vi],
          [Ui]: n[t],
        }
      );
    },
    defineProperty() {
      Fi(11);
    },
    getPrototypeOf(e) {
      return Li(e.base_);
    },
    setPrototypeOf() {
      Fi(12);
    },
  },
  Ha = {};
for (let e in Va) {
  let t = Va[e];
  Ha[e] = function () {
    let e = arguments;
    return ((e[0] = e[0][0]), t.apply(this, e));
  };
}
((Ha.deleteProperty = function (e, t) {
  return Ha.set.call(this, e, t, void 0);
}),
  (Ha.set = function (e, t, n) {
    return Va.set.call(this, e[0], t, n, e[0]);
  }));
function Ua(e, t) {
  let n = e[Pi];
  return (n ? ca(n) : e)[t];
}
function Wa(e, t, n) {
  return e.type_ !== 1 || !e.allIndicesReassigned_ || !Gi(n) || n[Pi]
    ? !1
    : e.baseRefs_.has(n);
}
function Ga(e, t, n) {
  let r = Ka(t, n);
  return r ? (Ui in r ? r[Ui] : r.get?.call(e.draft_)) : void 0;
}
function Ka(e, t) {
  if (!(t in e)) return;
  let n = Li(e);
  for (; n; ) {
    let e = Object.getOwnPropertyDescriptor(n, t);
    if (e) return e;
    n = Li(n);
  }
}
function qa(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && qa(e.parent_));
}
function Ja(e) {
  e.copy_ ||=
    ((e.assigned_ = new Map()),
    ua(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var Ya = class {
  constructor(e) {
    ((this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.useStrictIteration_ = !1),
      (this.produce = (e, t, n) => {
        if (aa(e) && !aa(t)) {
          let n = t;
          t = e;
          let r = this;
          return function (e = n, ...i) {
            return r.produce(e, (e) => t.call(this, e, ...i));
          };
        }
        (aa(t) || Fi(6), n !== void 0 && !aa(n) && Fi(7));
        let r;
        if (Gi(e)) {
          let i = Da(this),
            a = Xa(i, e, void 0),
            o = !0;
          try {
            ((r = t(a)), (o = !1));
          } finally {
            o ? Ta(i) : Ea(i);
          }
          return (wa(i, n), ka(r, i));
        }
        if (!e || !ia(e)) {
          if (
            ((r = t(e)),
            r === void 0 && (r = e),
            r === Mi && (r = void 0),
            this.autoFreeze_ && da(r, !0),
            n)
          ) {
            let t = [],
              i = [];
            (ya(ga).generateReplacementPatches_(e, r, {
              patches_: t,
              inversePatches_: i,
            }),
              n(t, i));
          }
          return r;
        }
        Fi(1, e);
      }),
      (this.produceWithPatches = (e, t) => {
        if (aa(e))
          return (t, ...n) => this.produceWithPatches(t, (t) => e(t, ...n));
        let n, r;
        return [
          this.produce(e, t, (e, t) => {
            ((n = e), (r = t));
          }),
          n,
          r,
        ];
      }),
      oa(e?.autoFreeze) && this.setAutoFreeze(e.autoFreeze),
      oa(e?.useStrictShallowCopy) &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy),
      oa(e?.useStrictIteration) &&
        this.setUseStrictIteration(e.useStrictIteration));
  }
  createDraft(e) {
    (Gi(e) || Fi(8), Wi(e) && (e = Za(e)));
    let t = Da(this),
      n = Xa(t, e, void 0);
    return ((n[Pi].isManual_ = !0), Ea(t), n);
  }
  finishDraft(e, t) {
    let n = e && e[Pi];
    (n && n.isManual_) || Fi(9);
    let { scope_: r } = n;
    return (wa(r, t), ka(void 0, r));
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  setUseStrictIteration(e) {
    this.useStrictIteration_ = e;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      let r = t[n];
      if (r.path.length === 0 && r.op === `replace`) {
        e = r.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    let r = ya(ga).applyPatches_;
    return Wi(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
  }
};
function Xa(e, t, n, r) {
  let [i, a] = na(t)
    ? ya(ha).proxyMap_(t, n)
    : ra(t)
      ? ya(ha).proxySet_(t, n)
      : Ba(t, n);
  return (
    (n?.scope_ ?? Sa()).drafts_.push(i),
    (a.callbacks_ = n?.callbacks_ ?? []),
    (a.key_ = r),
    n && r !== void 0
      ? Ia(n, a, r)
      : a.callbacks_.push(function (e) {
          e.mapSetPlugin_?.fixSetContents(a);
          let { patchPlugin_: t } = e;
          a.modified_ && t && t.generatePatches_(a, [], e);
        }),
    i
  );
}
function Za(e) {
  return (Wi(e) || Fi(10, e), Qa(e));
}
function Qa(e) {
  if (!Gi(e) || ma(e)) return e;
  let t = e[Pi],
    n,
    r = !0;
  if (t) {
    if (!t.modified_) return t.base_;
    ((t.finalized_ = !0),
      (n = ua(e, t.scope_.immer_.useStrictShallowCopy_)),
      (r = t.scope_.immer_.shouldUseStrictIteration()));
  } else n = ua(e, !0);
  let i = n;
  return (
    ra(n) && (n = new Set()),
    Yi(
      i,
      (e, t) => {
        $i(n, e, Qa(t));
      },
      r,
    ),
    t && (t.finalized_ = !1),
    n
  );
}
globalThis.Iterator?.from;
var $a = new Ya().produce,
  B = (e) => e;
function eo(e) {
  return ({ dispatch: t, getState: n }) =>
    (r) =>
    (i) =>
      typeof i == `function` ? i(t, n, e) : r(i);
}
var to = eo(),
  no = eo,
  ro =
    typeof window < `u` && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == `object`
              ? ki
              : ki.apply(null, arguments);
        };
typeof window < `u` &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__;
function io(e, t) {
  function n(...n) {
    if (t) {
      let r = t(...n);
      if (!r) throw Error(ps(0));
      return {
        type: e,
        payload: r.payload,
        ...(`meta` in r && { meta: r.meta }),
        ...(`error` in r && { error: r.error }),
      };
    }
    return { type: e, payload: n[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (t) => t != null && t.type === e && ji(t)),
    n
  );
}
var ao = class e extends Array {
  constructor(...t) {
    (super(...t), Object.setPrototypeOf(this, e.prototype));
  }
  static get [Symbol.species]() {
    return e;
  }
  concat(...e) {
    return super.concat.apply(this, e);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new e(...t[0].concat(this))
      : new e(...t.concat(this));
  }
};
function oo(e) {
  return Gi(e) ? $a(e, () => {}) : e;
}
function so(e, t, n) {
  return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function co(e) {
  return typeof e == `boolean`;
}
var lo = () =>
    function (e) {
      let {
          thunk: t = !0,
          immutableCheck: n = !0,
          serializableCheck: r = !0,
          actionCreatorCheck: i = !0,
        } = e ?? {},
        a = new ao();
      return (t && (co(t) ? a.push(to) : a.push(no(t.extraArgument))), a);
    },
  uo = `RTK_autoBatch`,
  V = () => (e) => ({ payload: e, meta: { [uo]: !0 } }),
  fo = (e) => (t) => {
    setTimeout(t, e);
  },
  po = (e, t, n) => (r) => {
    let i = !1,
      a,
      o,
      s = () => {
        i || ((i = !0), t?.(a), clearTimeout(o), r());
      };
    ((a = e(s)), (o = setTimeout(s, n)));
  },
  mo =
    (e = { type: `raf` }) =>
    (t) =>
    (...n) => {
      let r = t(...n),
        i = !0,
        a = !1,
        o = !1,
        s = new Set(),
        c =
          e.type === `tick`
            ? queueMicrotask
            : e.type === `raf`
              ? typeof window < `u` && window.requestAnimationFrame
                ? po(
                    window.requestAnimationFrame,
                    window.cancelAnimationFrame,
                    100,
                  )
                : fo(10)
              : e.type === `callback`
                ? e.queueNotification
                : fo(e.timeout),
        l = () => {
          ((o = !1), a && ((a = !1), s.forEach((e) => e())));
        };
      return Object.assign({}, r, {
        subscribe(e) {
          let t = r.subscribe(() => i && e());
          return (
            s.add(e),
            () => {
              (t(), s.delete(e));
            }
          );
        },
        dispatch(e) {
          try {
            return (
              (i = !e?.meta?.[uo]),
              (a = !i),
              a && (o || ((o = !0), c(l))),
              r.dispatch(e)
            );
          } finally {
            i = !0;
          }
        },
      });
    },
  ho = (e) =>
    function (t) {
      let { autoBatch: n = !0 } = t ?? {},
        r = new ao(e);
      return (n && r.push(mo(typeof n == `object` ? n : void 0)), r);
    };
function go(e) {
  let t = lo(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: i = !0,
      duplicateMiddlewareCheck: a = !0,
      preloadedState: o = void 0,
      enhancers: s = void 0,
    } = e || {},
    c;
  if (typeof n == `function`) c = n;
  else if (Ti(n)) c = Oi(n);
  else throw Error(ps(1));
  let l;
  l = typeof r == `function` ? r(t) : t();
  let u = ki;
  i && (u = ro({ trace: !1, ...(typeof i == `object` && i) }));
  let d = ho(Ai(...l)),
    f = typeof s == `function` ? s(d) : d(),
    p = u(...f);
  return Ei(c, o, p);
}
function _o(e) {
  let t = {},
    n = [],
    r,
    i = {
      addCase(e, n) {
        let r = typeof e == `string` ? e : e.type;
        if (!r) throw Error(ps(28));
        if (r in t) throw Error(ps(29));
        return ((t[r] = n), i);
      },
      addAsyncThunk(e, r) {
        return (
          r.pending && (t[e.pending.type] = r.pending),
          r.rejected && (t[e.rejected.type] = r.rejected),
          r.fulfilled && (t[e.fulfilled.type] = r.fulfilled),
          r.settled && n.push({ matcher: e.settled, reducer: r.settled }),
          i
        );
      },
      addMatcher(e, t) {
        return (n.push({ matcher: e, reducer: t }), i);
      },
      addDefaultCase(e) {
        return ((r = e), i);
      },
    };
  return (e(i), [t, n, r]);
}
function vo(e) {
  return typeof e == `function`;
}
function yo(e, t) {
  let [n, r, i] = _o(t),
    a;
  if (vo(e)) a = () => oo(e());
  else {
    let t = oo(e);
    a = () => t;
  }
  function o(e, t, n) {
    if (Wi(e)) {
      let r = t(e, n);
      return r === void 0 ? e : r;
    }
    if (Gi(e)) return $a(e, (e) => t(e, n));
    {
      let r = t(e, n);
      if (r === void 0) {
        if (e === null) return e;
        throw Error(ps(9));
      }
      return r;
    }
  }
  function s(e = a(), t) {
    let s = n[t.type],
      c;
    for (let { matcher: e, reducer: n } of r) e(t) && n && (c ??= []).push(n);
    if (!s && !c) return i ? o(e, i, t) : e;
    if ((s && (e = o(e, s, t)), c)) for (let n of c) e = o(e, n, t);
    return e;
  }
  return ((s.getInitialState = a), s);
}
var bo = `ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW`,
  xo = (e = 21) => {
    let t = ``,
      n = e;
    for (; n--; ) t += bo[(Math.random() * 64) | 0];
    return t;
  },
  So = Symbol.for(`rtk-slice-createasyncthunk`);
function Co(e, t) {
  return `${e}/${t}`;
}
function wo({ creators: e } = {}) {
  let t = e?.asyncThunk?.[So];
  return function (e) {
    let { name: n, reducerPath: r = n } = e;
    if (!n) throw Error(ps(11));
    let i =
        (typeof e.reducers == `function` ? e.reducers(Do()) : e.reducers) || {},
      a = Object.keys(i),
      o = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      s = {
        addCase(e, t) {
          let n = typeof e == `string` ? e : e.type;
          if (!n) throw Error(ps(12));
          if (n in o.sliceCaseReducersByType) throw Error(ps(13));
          return ((o.sliceCaseReducersByType[n] = t), s);
        },
        addMatcher(e, t) {
          return (o.sliceMatchers.push({ matcher: e, reducer: t }), s);
        },
        exposeAction(e, t) {
          return ((o.actionCreators[e] = t), s);
        },
        exposeCaseReducer(e, t) {
          return ((o.sliceCaseReducersByName[e] = t), s);
        },
      };
    a.forEach((r) => {
      let a = i[r],
        o = {
          reducerName: r,
          type: Co(n, r),
          createNotation: typeof e.reducers == `function`,
        };
      ko(a) ? jo(o, a, s, t) : Oo(o, a, s);
    });
    function c() {
      let [t = {}, n = [], r = void 0] =
          typeof e.extraReducers == `function`
            ? _o(e.extraReducers)
            : [e.extraReducers],
        i = { ...t, ...o.sliceCaseReducersByType };
      return yo(e.initialState, (e) => {
        for (let t in i) e.addCase(t, i[t]);
        for (let t of o.sliceMatchers) e.addMatcher(t.matcher, t.reducer);
        for (let t of n) e.addMatcher(t.matcher, t.reducer);
        r && e.addDefaultCase(r);
      });
    }
    let l = (e) => e,
      u = new Map(),
      d = new WeakMap(),
      f;
    function p(e, t) {
      return ((f ||= c()), f(e, t));
    }
    function m() {
      return ((f ||= c()), f.getInitialState());
    }
    function h(t, n = !1) {
      function r(e) {
        let i = e[t];
        return (i === void 0 && n && (i = so(d, r, m)), i);
      }
      function i(t = l) {
        return so(
          so(u, n, () => new WeakMap()),
          t,
          () => {
            let r = {};
            for (let [i, a] of Object.entries(e.selectors ?? {}))
              r[i] = To(a, t, () => so(d, t, m), n);
            return r;
          },
        );
      }
      return {
        reducerPath: t,
        getSelectors: i,
        get selectors() {
          return i(r);
        },
        selectSlice: r,
      };
    }
    let g = {
      name: n,
      reducer: p,
      actions: o.actionCreators,
      caseReducers: o.sliceCaseReducersByName,
      getInitialState: m,
      ...h(r),
      injectInto(e, { reducerPath: t, ...n } = {}) {
        let i = t ?? r;
        return (
          e.inject({ reducerPath: i, reducer: p }, n),
          { ...g, ...h(i, !0) }
        );
      },
    };
    return g;
  };
}
function To(e, t, n, r) {
  function i(i, ...a) {
    let o = t(i);
    return (o === void 0 && r && (o = n()), e(o, ...a));
  }
  return ((i.unwrapped = e), i);
}
var Eo = wo();
function Do() {
  function e(e, t) {
    return { _reducerDefinitionType: `asyncThunk`, payloadCreator: e, ...t };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(e) {
        return Object.assign(
          {
            [e.name](...t) {
              return e(...t);
            },
          }[e.name],
          { _reducerDefinitionType: `reducer` },
        );
      },
      preparedReducer(e, t) {
        return {
          _reducerDefinitionType: `reducerWithPrepare`,
          prepare: e,
          reducer: t,
        };
      },
      asyncThunk: e,
    }
  );
}
function Oo({ type: e, reducerName: t, createNotation: n }, r, i) {
  let a, o;
  if (`reducer` in r) {
    if (n && !Ao(r)) throw Error(ps(17));
    ((a = r.reducer), (o = r.prepare));
  } else a = r;
  i.addCase(e, a)
    .exposeCaseReducer(t, a)
    .exposeAction(t, o ? io(e, o) : io(e));
}
function ko(e) {
  return e._reducerDefinitionType === `asyncThunk`;
}
function Ao(e) {
  return e._reducerDefinitionType === `reducerWithPrepare`;
}
function jo({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw Error(ps(18));
  let {
      payloadCreator: a,
      fulfilled: o,
      pending: s,
      rejected: c,
      settled: l,
      options: u,
    } = n,
    d = i(e, a, u);
  (r.exposeAction(t, d),
    o && r.addCase(d.fulfilled, o),
    s && r.addCase(d.pending, s),
    c && r.addCase(d.rejected, c),
    l && r.addMatcher(d.settled, l),
    r.exposeCaseReducer(t, {
      fulfilled: o || Mo,
      pending: s || Mo,
      rejected: c || Mo,
      settled: l || Mo,
    }));
}
function Mo() {}
var No = `task`,
  Po = `listener`,
  Fo = `completed`,
  Io = `cancelled`,
  Lo = `task-${Io}`,
  Ro = `task-${Fo}`,
  zo = `${Po}-${Io}`,
  Bo = `${Po}-${Fo}`,
  Vo = class {
    code;
    name = `TaskAbortError`;
    message;
    constructor(e) {
      ((this.code = e), (this.message = `${No} ${Io} (reason: ${e})`));
    }
  },
  Ho = (e, t) => {
    if (typeof e != `function`) throw TypeError(ps(32));
  },
  Uo = () => {},
  Wo = (e, t = Uo) => (e.catch(t), e),
  Go = (e, t) => (
    e.addEventListener(`abort`, t, { once: !0 }),
    () => e.removeEventListener(`abort`, t)
  ),
  Ko = (e) => {
    if (e.aborted) throw new Vo(e.reason);
  };
function qo(e, t) {
  let n = Uo;
  return new Promise((r, i) => {
    let a = () => i(new Vo(e.reason));
    e.aborted ? a() : ((n = Go(e, a)), t.finally(() => n()).then(r, i));
  }).finally(() => {
    n = Uo;
  });
}
var Jo = async (e, t) => {
    try {
      return (await Promise.resolve(), { status: `ok`, value: await e() });
    } catch (e) {
      return { status: e instanceof Vo ? `cancelled` : `rejected`, error: e };
    } finally {
      t?.();
    }
  },
  Yo = (e) => (t) => Wo(qo(e, t).then((t) => (Ko(e), t))),
  Xo = (e) => {
    let t = Yo(e);
    return (e) => {
      let n;
      return Wo(
        t(
          new Promise((t) => {
            n = setTimeout(t, e);
          }),
        ).finally(() => clearTimeout(n)),
      );
    };
  },
  { assign: Zo } = Object,
  Qo = {},
  $o = `listenerMiddleware`,
  es = (e, t) => {
    let n = (t) => Go(e, () => t.abort(e.reason));
    return (r, i) => {
      Ho(r, `taskExecutor`);
      let a = new AbortController();
      n(a);
      let o = Jo(
        async () => {
          (Ko(e), Ko(a.signal));
          let t = await r({
            pause: Yo(a.signal),
            delay: Xo(a.signal),
            signal: a.signal,
          });
          return (Ko(a.signal), t);
        },
        () => a.abort(Ro),
      );
      return (
        i?.autoJoin && t.push(o.catch(Uo)),
        {
          result: Yo(e)(o),
          cancel() {
            a.abort(Lo);
          },
        }
      );
    };
  },
  ts = (e, t) => {
    let n = async (n, r) => {
      Ko(t);
      let i = () => {},
        a = [
          new Promise((t, r) => {
            let a = e({
              predicate: n,
              effect: (e, n) => {
                (n.unsubscribe(), t([e, n.getState(), n.getOriginalState()]));
              },
            });
            i = () => {
              (a(), r());
            };
          }),
        ],
        o;
      r != null &&
        a.push(
          new Promise((e) => {
            o = setTimeout(e, r, null);
          }),
        );
      try {
        let e = await qo(t, Promise.race(a));
        return (Ko(t), e);
      } finally {
        (clearTimeout(o), i());
      }
    };
    return (e, t) => Wo(n(e, t));
  },
  ns = (e) => {
    let { type: t, actionCreator: n, matcher: r, predicate: i, effect: a } = e;
    if (t) i = io(t).match;
    else if (n) ((t = n.type), (i = n.match));
    else if (r) i = r;
    else if (!i) throw Error(ps(21));
    return (Ho(a, `options.listener`), { predicate: i, type: t, effect: a });
  },
  rs = Zo(
    (e) => {
      let { type: t, predicate: n, effect: r } = ns(e);
      return {
        id: xo(),
        effect: r,
        type: t,
        predicate: n,
        pending: new Set(),
        unsubscribe: () => {
          throw Error(ps(22));
        },
      };
    },
    { withTypes: () => rs },
  ),
  is = (e, t) => {
    let { type: n, effect: r, predicate: i } = ns(t);
    return Array.from(e.values()).find(
      (e) =>
        (typeof n == `string` ? e.type === n : e.predicate === i) &&
        e.effect === r,
    );
  },
  as = (e) => {
    e.pending.forEach((e) => {
      e.abort(zo);
    });
  },
  os = (e, t) => () => {
    for (let e of t.keys()) as(e);
    e.clear();
  },
  ss = (e, t, n) => {
    try {
      e(t, n);
    } catch (e) {
      setTimeout(() => {
        throw e;
      }, 0);
    }
  },
  cs = Zo(io(`${$o}/add`), { withTypes: () => cs }),
  ls = io(`${$o}/removeAll`),
  us = Zo(io(`${$o}/remove`), { withTypes: () => us }),
  ds = (...e) => {
    console.error(`${$o}/error`, ...e);
  },
  fs = (e = {}) => {
    let t = new Map(),
      n = new Map(),
      r = (e) => {
        let t = n.get(e) ?? 0;
        n.set(e, t + 1);
      },
      i = (e) => {
        let t = n.get(e) ?? 1;
        t === 1 ? n.delete(e) : n.set(e, t - 1);
      },
      { extra: a, onError: o = ds } = e;
    Ho(o, `onError`);
    let s,
      c = () => {
        if (!s) {
          let e = Array.from(t.values()),
            n = new Set(),
            r = !1;
          for (let t of e) typeof t.type == `string` ? n.add(t.type) : (r = !0);
          s = { entries: e, types: n, anyType: r };
        }
        return s;
      },
      l = (e) => {
        t.has(e.id) || (t.set(e.id, e), (s = void 0));
      },
      u = (e) => (
        (e.unsubscribe = () => {
          t.delete(e.id) && (s = void 0);
        }),
        l(e),
        (t) => {
          (e.unsubscribe(), t?.cancelActive && as(e));
        }
      ),
      d = (e) => {
        let n = is(t, e) ?? rs(e);
        return u(n);
      };
    Zo(d, { withTypes: () => d });
    let f = (e) => {
      let n = is(t, e);
      return (n && (n.unsubscribe(), e.cancelActive && as(n)), !!n);
    };
    Zo(f, { withTypes: () => f });
    let p = async (e, t, n, s) => {
        let c = new AbortController(),
          u = ts(d, c.signal),
          f = [];
        try {
          (e.pending.add(c),
            r(e),
            await Promise.resolve(
              e.effect(
                t,
                Zo({}, n, {
                  getOriginalState: s,
                  condition: (e, t) => u(e, t).then(Boolean),
                  take: u,
                  delay: Xo(c.signal),
                  pause: Yo(c.signal),
                  extra: a,
                  signal: c.signal,
                  fork: es(c.signal, f),
                  unsubscribe: e.unsubscribe,
                  subscribe: () => {
                    l(e);
                  },
                  cancelActiveListeners: () => {
                    e.pending.forEach((e, t, n) => {
                      e !== c && (e.abort(zo), n.delete(e));
                    });
                  },
                  cancel: () => {
                    (c.abort(zo), e.pending.delete(c));
                  },
                  throwIfCancelled: () => {
                    Ko(c.signal);
                  },
                }),
              ),
            ));
        } catch (e) {
          e instanceof Vo || ss(o, e, { raisedBy: `effect` });
        } finally {
          (await Promise.all(f), c.abort(Bo), i(e), e.pending.delete(c));
        }
      },
      m = os(t, n),
      h = () => {
        (m(), (s = void 0));
      };
    return {
      middleware: (e) => (t) => (n) => {
        if (!ji(n)) return t(n);
        if (cs.match(n)) return d(n.payload);
        if (ls.match(n)) {
          h();
          return;
        }
        if (us.match(n)) return f(n.payload);
        let r = e.getState(),
          i = () => {
            if (r === Qo) throw Error(ps(23));
            return r;
          },
          a;
        try {
          a = t(n);
          let { entries: s, types: l, anyType: u } = c();
          if (u || l.has(n.type)) {
            let t = e.getState();
            for (let a of s) {
              if (typeof a.type == `string` && a.type !== n.type) continue;
              let s = !1;
              try {
                s = a.predicate(n, t, r);
              } catch (e) {
                ((s = !1), ss(o, e, { raisedBy: `predicate` }));
              }
              s && p(a, n, e, i);
            }
          }
        } finally {
          r = Qo;
        }
        return a;
      },
      startListening: d,
      stopListening: f,
      clearListeners: h,
    };
  };
function ps(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var ms = Eo({
    name: `chartLayout`,
    initialState: {
      layoutType: `horizontal`,
      width: 0,
      height: 0,
      margin: { top: 5, right: 5, bottom: 5, left: 5 },
      scale: 1,
    },
    reducers: {
      setLayout(e, t) {
        e.layoutType = t.payload;
      },
      setChartSize(e, t) {
        ((e.width = t.payload.width), (e.height = t.payload.height));
      },
      setMargin(e, t) {
        ((e.margin.top = t.payload.top ?? 0),
          (e.margin.right = t.payload.right ?? 0),
          (e.margin.bottom = t.payload.bottom ?? 0),
          (e.margin.left = t.payload.left ?? 0));
      },
      setScale(e, t) {
        e.scale = t.payload;
      },
    },
  }),
  hs = ms.actions,
  gs = hs.setMargin,
  _s = hs.setLayout,
  vs = hs.setChartSize,
  ys = hs.setScale,
  bs = ms.reducer;
function xs(e, t, n) {
  return Array.isArray(e) && e && t + n !== 0 ? e.slice(t, n + 1) : e;
}
function H(e) {
  return Number.isFinite(e);
}
function Ss(e) {
  return typeof e == `number` && e > 0 && Number.isFinite(e);
}
function Cs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function ws(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Cs(Object(n), !0).forEach(function (t) {
          Ts(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Cs(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Ts(e, t, n) {
  return (
    (t = Es(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Es(e) {
  var t = Ds(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Ds(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function U(e, t, n) {
  return F(e) || F(t)
    ? n
    : Te(t)
      ? _e(e, t, n)
      : typeof t == `function`
        ? t(e)
        : n;
}
var Os = (e, t, n) => {
    if (t && n) {
      var r = n.width,
        i = n.height,
        a = t.align,
        o = t.verticalAlign,
        s = t.layout,
        c = t.position,
        l = t.offset,
        u = l === void 0 ? 0 : l;
      if (c != null) {
        if (Ue(c)) {
          if (c === `top` && P(e.top))
            return ws(ws({}, e), {}, { top: e.top + (i || 0) + u });
          if (c === `bottom` && P(e.bottom))
            return ws(ws({}, e), {}, { bottom: e.bottom + (i || 0) + u });
          if (c === `left` && P(e.left))
            return ws(ws({}, e), {}, { left: e.left + (r || 0) + u });
          if (c === `right` && P(e.right))
            return ws(ws({}, e), {}, { right: e.right + (r || 0) + u });
        }
        return e;
      }
      if (
        (s === `vertical` || (s === `horizontal` && o === `middle`)) &&
        a !== `center` &&
        P(e[a])
      )
        return ws(ws({}, e), {}, { [a]: e[a] + (r || 0) });
      if (
        (s === `horizontal` || (s === `vertical` && a === `center`)) &&
        o !== `middle` &&
        P(e[o])
      )
        return ws(ws({}, e), {}, { [o]: e[o] + (i || 0) });
    }
    return e;
  },
  ks = (e, t) =>
    (e === `horizontal` && t === `xAxis`) ||
    (e === `vertical` && t === `yAxis`) ||
    (e === `centric` && t === `angleAxis`) ||
    (e === `radial` && t === `radiusAxis`),
  As = (e, t) => {
    if (!t || t.length !== 2 || !P(t[0]) || !P(t[1])) return e;
    var n = Math.min(t[0], t[1]),
      r = Math.max(t[0], t[1]),
      i = [e[0], e[1]];
    return (
      (!P(e[0]) || e[0] < n) && (i[0] = n),
      (!P(e[1]) || e[1] > r) && (i[1] = r),
      i[0] > r && (i[0] = r),
      i[1] < n && (i[1] = n),
      i
    );
  },
  js = {
    sign: (e) => {
      var t = e.length;
      if (!(t <= 0)) {
        var n = e[0]?.length;
        if (!(n == null || n <= 0))
          for (var r = 0; r < n; ++r)
            for (var i = 0, a = 0, o = 0; o < t; ++o) {
              var s = e[o]?.[r];
              if (s != null) {
                var c = s[1],
                  l = s[0],
                  u = Ce(c) ? l : c;
                u >= 0
                  ? ((s[0] = i), (i += u), (s[1] = i))
                  : ((s[0] = a), (a += u), (s[1] = a));
              }
            }
      }
    },
    expand: sn,
    none: tn,
    silhouette: cn,
    wiggle: ln,
    positive: (e) => {
      var t = e.length;
      if (!(t <= 0)) {
        var n = e[0]?.length;
        if (!(n == null || n <= 0))
          for (var r = 0; r < n; ++r)
            for (var i = 0, a = 0; a < t; ++a) {
              var o = e[a]?.[r];
              if (o != null) {
                var s = Ce(o[1]) ? o[0] : o[1];
                s >= 0
                  ? ((o[0] = i), (i += s), (o[1] = i))
                  : ((o[0] = 0), (o[1] = 0));
              }
            }
      }
    },
  },
  Ms = (e, t, n) => {
    var r = js[n] ?? tn,
      i = on()
        .keys(t)
        .value((e, t) => Number(U(e, t, 0)))
        .order(nn)
        .offset(r)(e);
    return (
      i.forEach((n, r) => {
        n.forEach((n, i) => {
          var a = U(e[i], t[r], 0);
          Array.isArray(a) &&
            a.length === 2 &&
            P(a[0]) &&
            P(a[1]) &&
            ((n[0] = a[0]), (n[1] = a[1]));
        });
      }),
      i
    );
  };
function Ns(e) {
  return e == null ? void 0 : String(e);
}
var Ps = (e) => {
    var t = e.axis,
      n = e.ticks,
      r = e.offset,
      i = e.bandSize,
      a = e.entry,
      o = e.index;
    if (t.type === `category`) return n[o] ? n[o].coordinate + r : null;
    var s = U(a, t.dataKey, t.scale.domain()[o]);
    if (F(s)) return null;
    var c = t.scale.map(s);
    return P(c) ? c - i / 2 + r : null;
  },
  Fs = (e) => {
    var t = e.numericAxis,
      n = t.scale.domain();
    if (t.type === `number`) {
      var r = Math.min(n[0], n[1]),
        i = Math.max(n[0], n[1]);
      return r <= 0 && i >= 0 ? 0 : i < 0 ? i : r;
    }
    return n[0];
  },
  Is = (e) => {
    var t = e.flat(2).filter(P);
    return [Math.min(...t), Math.max(...t)];
  },
  Ls = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]],
  Rs = (e, t, n) => {
    if (e != null && Object.keys(e).length !== 0)
      return Ls(
        Object.keys(e).reduce(
          (r, i) => {
            var a = e[i];
            if (!a) return r;
            var o = a.stackedData.reduce(
              (e, r) => {
                var i = Is(xs(r, t, n));
                return !H(i[0]) || !H(i[1])
                  ? e
                  : [Math.min(e[0], i[0]), Math.max(e[1], i[1])];
              },
              [1 / 0, -1 / 0],
            );
            return [Math.min(o[0], r[0]), Math.max(o[1], r[1])];
          },
          [1 / 0, -1 / 0],
        ),
      );
  },
  zs = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Bs = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Vs = (e, t, n) => {
    if (e && e.scale && e.scale.bandwidth) {
      var r = e.scale.bandwidth();
      if (!n || r > 0) return r;
    }
    if (e && t && t.length >= 2) {
      for (
        var i = ci(t, (e) => e.coordinate), a = [], o = 0, s = 1, c = i.length;
        s < c;
        s++
      ) {
        var l = (i[s]?.coordinate || 0) - (i[s - 1]?.coordinate || 0);
        (a.push(l), (o = Math.max(l, o)));
      }
      var u = o * 1e-4,
        d = 1 / 0;
      for (var f of a) f > u && (d = Math.min(f, d));
      return d === 1 / 0 ? 0 : d;
    }
    return n ? void 0 : 0;
  };
function Hs(e) {
  var t = e.tooltipEntrySettings,
    n = e.dataKey,
    r = e.payload,
    i = e.value,
    a = e.name;
  return ws(ws({}, t), {}, { dataKey: n, payload: r, value: i, name: a });
}
function Us(e, t) {
  if (e != null) return String(e);
  if (typeof t == `string`) return t;
}
var Ws = (e, t) => {
    if (t === `horizontal`) return e.relativeX;
    if (t === `vertical`) return e.relativeY;
  },
  Gs = (e, t) => (t === `centric` ? e.angle : e.radius),
  Ks = (e) => e.layout.width,
  qs = (e) => e.layout.height,
  Js = (e) => e.layout.scale,
  Ys = (e) => e.layout.margin,
  Xs = z(
    (e) => e.cartesianAxis.xAxis,
    (e) => Object.values(e),
  ),
  Zs = z(
    (e) => e.cartesianAxis.yAxis,
    (e) => Object.values(e),
  ),
  Qs = `data-recharts-item-index`;
function $s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function ec(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? $s(Object(n), !0).forEach(function (t) {
          tc(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : $s(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function tc(e, t, n) {
  return (
    (t = nc(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function nc(e) {
  var t = rc(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function rc(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var ic = (e) => e.brush.height;
function ac(e) {
  return Zs(e).reduce(
    (e, t) =>
      t.orientation === `left` && !t.mirror && !t.hide
        ? e + (typeof t.width == `number` ? t.width : 60)
        : e,
    0,
  );
}
function oc(e) {
  return Zs(e).reduce(
    (e, t) =>
      t.orientation === `right` && !t.mirror && !t.hide
        ? e + (typeof t.width == `number` ? t.width : 60)
        : e,
    0,
  );
}
function sc(e) {
  return Xs(e).reduce(
    (e, t) =>
      t.orientation === `top` && !t.mirror && !t.hide
        ? e + (typeof t.height == `number` ? t.height : 30)
        : e,
    0,
  );
}
function cc(e) {
  return Xs(e).reduce(
    (e, t) =>
      t.orientation === `bottom` && !t.mirror && !t.hide
        ? e + (typeof t.height == `number` ? t.height : 30)
        : e,
    0,
  );
}
var W = z(
    [Ks, qs, Ys, ic, ac, oc, sc, cc, li, ui],
    (e, t, n, r, i, a, o, s, c, l) => {
      var u = { left: (n.left || 0) + i, right: (n.right || 0) + a },
        d = ec(
          ec({}, { top: (n.top || 0) + o, bottom: (n.bottom || 0) + s }),
          u,
        ),
        f = d.bottom;
      ((d.bottom += r), (d = Os(d, c, l)));
      var p = e - d.left - d.right,
        m = t - d.top - d.bottom;
      return ec(
        ec({ brushBottom: f }, d),
        {},
        { width: Math.max(p, 0), height: Math.max(m, 0) },
      );
    },
  ),
  lc = z(W, (e) => ({ x: e.left, y: e.top, width: e.width, height: e.height })),
  uc = z(Ks, qs, (e, t) => ({ x: 0, y: 0, width: e, height: t })),
  dc = (0, w.createContext)(null),
  fc = () => (0, w.useContext)(dc) != null,
  pc = (e) => e.brush,
  mc = z([pc, W, Ys], (e, t, n) => ({
    height: e.height,
    x: P(e.x) ? e.x : t.left,
    y: P(e.y) ? e.y : t.top + t.height + t.brushBottom - (n?.bottom || 0),
    width: P(e.width) ? e.width : t.width,
  }));
function hc(e, t, { signal: n, edges: r } = {}) {
  let i,
    a = null,
    o = r != null && r.includes(`leading`),
    s = r == null || r.includes(`trailing`),
    c = () => {
      a !== null && (e.apply(i, a), (i = void 0), (a = null));
    },
    l = () => {
      (s && c(), p());
    },
    u = null,
    d = () => {
      (u != null && clearTimeout(u),
        (u = setTimeout(() => {
          ((u = null), l());
        }, t)));
    },
    f = () => {
      u !== null && (clearTimeout(u), (u = null));
    },
    p = () => {
      (f(), (i = void 0), (a = null));
    },
    m = () => {
      c();
    },
    h = function (...e) {
      if (n?.aborted) return;
      ((i = this), (a = e));
      let t = u == null;
      (d(), o && t && c());
    };
  return (
    (h.schedule = d),
    (h.cancel = p),
    (h.flush = m),
    n?.addEventListener(`abort`, p, { once: !0 }),
    h
  );
}
function gc(e, t = 0, n = {}) {
  typeof n != `object` && (n = {});
  let { leading: r = !1, trailing: i = !0, maxWait: a } = n,
    o = [, ,];
  (r && (o[0] = `leading`), i && (o[1] = `trailing`));
  let s,
    c = null,
    l = hc(
      function (...t) {
        ((s = e.apply(this, t)), (c = null));
      },
      t,
      { edges: o },
    ),
    u = function (...t) {
      return a != null && (c === null && (c = Date.now()), Date.now() - c >= a)
        ? ((r || i) && (s = e.apply(this, t)),
          (c = Date.now()),
          l.cancel(),
          l.schedule(),
          s)
        : (l.apply(this, t), s);
    };
  return ((u.cancel = l.cancel), (u.flush = () => (l.flush(), s)), u);
}
function _c(e, t = 0, n = {}) {
  let { leading: r = !0, trailing: i = !0 } = n;
  return gc(e, t, { leading: r, maxWait: t, trailing: i });
}
var vc = function (e, t) {
    var n = [...arguments].slice(2);
    if (
      typeof console < `u` &&
      console.warn &&
      (t === void 0 &&
        console.warn(`LogUtils requires an error message argument`),
      !e)
    ) {
      if (t === void 0)
        console.warn(
          `Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.`,
        );
      else {
        var r = 0;
        console.warn(t.replace(/%s/g, () => n[r++]));
      }
    }
  },
  yc = {
    width: `100%`,
    height: `100%`,
    debounce: 0,
    minWidth: 0,
    initialDimension: { width: -1, height: -1 },
  },
  bc = (e, t, n) => {
    var r = n.width,
      i = r === void 0 ? yc.width : r,
      a = n.height,
      o = a === void 0 ? yc.height : a,
      s = n.aspect,
      c = n.maxHeight,
      l = we(i) ? e : Number(i),
      u = we(o) ? t : Number(o);
    return (
      s &&
        s > 0 &&
        (l ? (u = l / s) : u && (l = u * s),
        c && u != null && u > c && (u = c)),
      { calculatedWidth: l, calculatedHeight: u }
    );
  },
  xc = { width: 0, height: 0, overflow: `visible` },
  Sc = { width: 0, overflowX: `visible` },
  Cc = { height: 0, overflowY: `visible` },
  wc = {},
  Tc = (e) => {
    var t = e.width,
      n = e.height,
      r = we(t),
      i = we(n);
    return r && i ? xc : r ? Sc : i ? Cc : wc;
  };
function Ec(e) {
  var t = e.width,
    n = e.height,
    r = e.aspect,
    i = t,
    a = n;
  return (
    i === void 0 && a === void 0
      ? ((i = yc.width), (a = yc.height))
      : i === void 0
        ? (i = r && r > 0 ? void 0 : yc.width)
        : a === void 0 && (a = r && r > 0 ? void 0 : yc.height),
    { width: i, height: a }
  );
}
var Dc = [
  `aspect`,
  `initialDimension`,
  `width`,
  `height`,
  `minWidth`,
  `minHeight`,
  `maxHeight`,
  `children`,
  `debounce`,
  `id`,
  `className`,
  `onResize`,
  `style`,
];
function Oc() {
  return (
    (Oc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Oc.apply(null, arguments)
  );
}
function kc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Ac(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? kc(Object(n), !0).forEach(function (t) {
          jc(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : kc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function jc(e, t, n) {
  return (
    (t = Mc(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Mc(e) {
  var t = Nc(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Nc(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Pc(e, t) {
  return zc(e) || Rc(e, t) || Ic(e, t) || Fc();
}
function Fc() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ic(e, t) {
  if (e) {
    if (typeof e == `string`) return Lc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Lc(e, t)
          : void 0
    );
  }
}
function Lc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Rc(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function zc(e) {
  if (Array.isArray(e)) return e;
}
function Bc(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Vc(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function Vc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Hc = (0, w.createContext)(yc.initialDimension);
function Uc(e) {
  return Ss(e.width) && Ss(e.height);
}
function Wc(e) {
  var t = e.children,
    n = e.width,
    r = e.height,
    i = (0, w.useMemo)(() => ({ width: n, height: r }), [n, r]);
  return Uc(i) ? w.createElement(Hc.Provider, { value: i }, t) : null;
}
var Gc = () => (0, w.useContext)(Hc),
  Kc = (0, w.forwardRef)((e, t) => {
    var n = e.aspect,
      r = e.initialDimension,
      i = r === void 0 ? yc.initialDimension : r,
      a = e.width,
      o = e.height,
      s = e.minWidth,
      c = s === void 0 ? yc.minWidth : s,
      l = e.minHeight,
      u = e.maxHeight,
      d = e.children,
      f = e.debounce,
      p = f === void 0 ? yc.debounce : f,
      m = e.id,
      h = e.className,
      g = e.onResize,
      _ = e.style,
      v = _ === void 0 ? {} : _,
      y = Bc(e, Dc),
      b = (0, w.useRef)(null),
      S = (0, w.useRef)();
    ((S.current = g), (0, w.useImperativeHandle)(t, () => b.current));
    var C = Pc(
        (0, w.useState)({ containerWidth: i.width, containerHeight: i.height }),
        2,
      ),
      T = C[0],
      E = C[1],
      D = (0, w.useCallback)((e, t) => {
        E((n) => {
          var r = Math.round(e),
            i = Math.round(t);
          return n.containerWidth === r && n.containerHeight === i
            ? n
            : { containerWidth: r, containerHeight: i };
        });
      }, []);
    (0, w.useEffect)(() => {
      if (b.current == null || typeof ResizeObserver > `u`) return Pe;
      var e = (e) => {
        var t,
          n = e[0];
        if (n != null) {
          var r = n.contentRect,
            i = r.width,
            a = r.height;
          (D(i, a), (t = S.current) == null || t.call(S, i, a));
        }
      };
      p > 0 && (e = _c(e, p, { trailing: !0, leading: !1 }));
      var t = new ResizeObserver(e),
        n = b.current.getBoundingClientRect(),
        r = n.width,
        i = n.height;
      return (
        D(r, i),
        t.observe(b.current),
        () => {
          t.disconnect();
        }
      );
    }, [D, p]);
    var O = T.containerWidth,
      k = T.containerHeight;
    vc(!n || n > 0, `The aspect(%s) must be greater than zero.`, n);
    var A = bc(O, k, { width: a, height: o, aspect: n, maxHeight: u }),
      j = A.calculatedWidth,
      M = A.calculatedHeight;
    return (
      vc(
        O < 0 || k < 0 || (j != null && j > 0) || (M != null && M > 0),
        `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
        j,
        M,
        a,
        o,
        c,
        l,
        n,
      ),
      w.createElement(
        `div`,
        Oc(
          {
            id: m ? `${m}` : void 0,
            className: x(`recharts-responsive-container`, h),
            style: Ac(
              Ac({}, v),
              {},
              { width: a, height: o, minWidth: c, minHeight: l, maxHeight: u },
            ),
            ref: b,
          },
          y,
        ),
        w.createElement(
          `div`,
          { style: Tc({ width: a, height: o }) },
          w.createElement(Wc, { width: j, height: M }, d),
        ),
      )
    );
  }),
  qc = (0, w.forwardRef)((e, t) => {
    var n = Gc();
    if (Ss(n.width) && Ss(n.height)) return e.children;
    var r = Ec({ width: e.width, height: e.height, aspect: e.aspect }),
      i = r.width,
      a = r.height,
      o = bc(void 0, void 0, {
        width: i,
        height: a,
        aspect: e.aspect,
        maxHeight: e.maxHeight,
      }),
      s = o.calculatedWidth,
      c = o.calculatedHeight;
    return P(s) && P(c)
      ? w.createElement(Wc, { width: s, height: c }, e.children)
      : w.createElement(Kc, Oc({}, e, { width: i, height: a, ref: t }));
  }),
  Jc = () => {
    var e = fc(),
      t = R(lc),
      n = R(mc),
      r = R(pc)?.padding;
    return !e || !n || !r
      ? t
      : {
          width: n.width - r.left - r.right,
          height: n.height - r.top - r.bottom,
          x: r.left,
          y: r.top,
        };
  },
  Yc = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    brushBottom: 0,
  },
  Xc = () => R(W) ?? Yc,
  Zc = () => R(Ks),
  Qc = () => R(qs),
  G = (e) => e.layout.layoutType,
  $c = () => R(G),
  el = () => {
    var e = $c();
    if (e === `horizontal` || e === `vertical`) return e;
  },
  tl = (e) => {
    var t = e.layout.layoutType;
    if (t === `centric` || t === `radial`) return t;
  },
  nl = () => $c() !== void 0,
  rl = (e) => {
    var t = L(),
      n = fc(),
      r = e.width,
      i = e.height,
      a = Gc(),
      o = r,
      s = i;
    return (
      a && ((o = a.width > 0 ? a.width : r), (s = a.height > 0 ? a.height : i)),
      (0, w.useEffect)(() => {
        !n && Ss(o) && Ss(s) && t(vs({ width: o, height: s }));
      }, [t, n, o, s]),
      null
    );
  },
  il = Eo({
    name: `legend`,
    initialState: {
      settings: {
        layout: `horizontal`,
        align: `center`,
        verticalAlign: `bottom`,
        itemSorter: `value`,
        position: void 0,
        offset: 0,
      },
      size: { width: 0, height: 0 },
      payload: [],
    },
    reducers: {
      setLegendSize(e, t) {
        ((e.size.width = t.payload.width), (e.size.height = t.payload.height));
      },
      setLegendSettings(e, t) {
        ((e.settings.align = t.payload.align),
          (e.settings.layout = t.payload.layout),
          (e.settings.verticalAlign = t.payload.verticalAlign),
          (e.settings.itemSorter = t.payload.itemSorter),
          (e.settings.position = t.payload.position),
          (e.settings.offset = t.payload.offset));
      },
      addLegendPayload: {
        reducer(e, t) {
          e.payload.push(B(t.payload));
        },
        prepare: V(),
      },
      replaceLegendPayload: {
        reducer(e, t) {
          var n = t.payload,
            r = n.prev,
            i = n.next,
            a = Za(e).payload.indexOf(B(r));
          a > -1 && (e.payload[a] = B(i));
        },
        prepare: V(),
      },
      removeLegendPayload: {
        reducer(e, t) {
          var n = Za(e).payload.indexOf(B(t.payload));
          n > -1 && e.payload.splice(n, 1);
        },
        prepare: V(),
      },
    },
  }),
  al = il.actions;
(al.setLegendSize, al.setLegendSettings);
var ol = al.addLegendPayload,
  sl = al.replaceLegendPayload,
  cl = al.removeLegendPayload,
  ll = il.reducer,
  ul = o((e) => {
    var t = l();
    (t.useSyncExternalStore, t.useRef, t.useEffect, t.useMemo, t.useDebugValue);
  });
o((e, t) => {
  t.exports = ul();
})();
function dl(e) {
  e();
}
function fl() {
  let e = null,
    t = null;
  return {
    clear() {
      ((e = null), (t = null));
    },
    notify() {
      dl(() => {
        let t = e;
        for (; t; ) (t.callback(), (t = t.next));
      });
    },
    get() {
      let t = [],
        n = e;
      for (; n; ) (t.push(n), (n = n.next));
      return t;
    },
    subscribe(n) {
      let r = !0,
        i = (t = { callback: n, next: null, prev: t });
      return (
        i.prev ? (i.prev.next = i) : (e = i),
        function () {
          r &&
            e !== null &&
            ((r = !1),
            i.next ? (i.next.prev = i.prev) : (t = i.prev),
            i.prev ? (i.prev.next = i.next) : (e = i.next));
        }
      );
    },
  };
}
var pl = { notify() {}, get: () => [] };
function ml(e, t) {
  let n,
    r = pl,
    i = 0,
    a = !1;
  function o(e) {
    u();
    let t = r.subscribe(e),
      n = !1;
    return () => {
      n || ((n = !0), t(), d());
    };
  }
  function s() {
    r.notify();
  }
  function c() {
    m.onStateChange && m.onStateChange();
  }
  function l() {
    return a;
  }
  function u() {
    (i++, n || ((n = t ? t.addNestedSub(c) : e.subscribe(c)), (r = fl())));
  }
  function d() {
    (i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = pl)));
  }
  function f() {
    a || ((a = !0), u());
  }
  function p() {
    a && ((a = !1), d());
  }
  let m = {
    addNestedSub: o,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: f,
    tryUnsubscribe: p,
    getListeners: () => r,
  };
  return m;
}
var hl =
    typeof window < `u` &&
    window.document !== void 0 &&
    window.document.createElement !== void 0,
  gl = typeof navigator < `u` && navigator.product === `ReactNative`,
  _l = hl || gl ? w.useLayoutEffect : w.useEffect;
function vl(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
function yl(e, t) {
  if (vl(e, t)) return !0;
  if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
  let n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let r = 0; r < n.length; r++)
    if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !vl(e[n[r]], t[n[r]]))
      return !1;
  return !0;
}
var bl = Symbol.for(`react-redux-context`),
  xl = typeof globalThis < `u` ? globalThis : {};
function Sl() {
  if (!w.createContext) return {};
  let e = (xl[bl] ??= new Map()),
    t = e.get(w.createContext);
  return (t || ((t = w.createContext(null)), e.set(w.createContext, t)), t);
}
var Cl = Sl();
function wl(e) {
  let { children: t, context: n, serverState: r, store: i } = e,
    a = w.useMemo(() => {
      let e = ml(i);
      return {
        store: i,
        subscription: e,
        getServerState: r == null ? void 0 : () => r,
      };
    }, [i, r]),
    o = w.useMemo(() => i.getState(), [i]);
  _l(() => {
    let { subscription: e } = a;
    return (
      (e.onStateChange = e.notifyNestedSubs),
      e.trySubscribe(),
      o !== i.getState() && e.notifyNestedSubs(),
      () => {
        (e.tryUnsubscribe(), (e.onStateChange = void 0));
      }
    );
  }, [a, o]);
  let s = n || Cl;
  return w.createElement(s.Provider, { value: a }, t);
}
var Tl = new Set([
  `axisLine`,
  `tickLine`,
  `activeBar`,
  `activeDot`,
  `activeLabel`,
  `activeShape`,
  `allowEscapeViewBox`,
  `background`,
  `cursor`,
  `dot`,
  `label`,
  `line`,
  `margin`,
  `padding`,
  `position`,
  `shape`,
  `style`,
  `tick`,
  `wrapperStyle`,
  `radius`,
  `throttledEvents`,
]);
function El(e, t) {
  return e == null && t == null
    ? !0
    : typeof e == `number` && typeof t == `number`
      ? e === t || (e !== e && t !== t)
      : e === t;
}
function Dl(e, t) {
  for (var n of new Set([...Object.keys(e), ...Object.keys(t)]))
    if (Tl.has(n)) {
      if (e[n] == null && t[n] == null) continue;
      if (!yl(e[n], t[n])) return !1;
    } else if (!El(e[n], t[n])) return !1;
  return !0;
}
function Ol() {
  return (
    (Ol = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ol.apply(null, arguments)
  );
}
function kl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Al(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? kl(Object(n), !0).forEach(function (t) {
          jl(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : kl(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function jl(e, t, n) {
  return (
    (t = Ml(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Ml(e) {
  var t = Nl(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Nl(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Pl(e, t) {
  return zl(e) || Rl(e, t) || Il(e, t) || Fl();
}
function Fl() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Il(e, t) {
  if (e) {
    if (typeof e == `string`) return Ll(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Ll(e, t)
          : void 0
    );
  }
}
function Ll(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Rl(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function zl(e) {
  if (Array.isArray(e)) return e;
}
function Bl(e) {
  return Array.isArray(e) && Te(e[0]) && Te(e[1]) ? e.join(` ~ `) : e;
}
var Vl = {
  separator: ` : `,
  contentStyle: {
    margin: 0,
    padding: 10,
    backgroundColor: `#fff`,
    border: `1px solid #ccc`,
    whiteSpace: `nowrap`,
  },
  itemStyle: {
    display: `block`,
    paddingTop: 4,
    paddingBottom: 4,
    color: `#000`,
  },
  labelStyle: {},
  accessibilityLayer: !1,
};
function Hl(e, t) {
  return t == null ? e : ci(e, t);
}
var Ul = (e) => {
    var t = e.separator,
      n = t === void 0 ? Vl.separator : t,
      r = e.contentStyle,
      i = e.itemStyle,
      a = e.labelStyle,
      o = a === void 0 ? Vl.labelStyle : a,
      s = e.payload,
      c = e.formatter,
      l = e.itemSorter,
      u = e.wrapperClassName,
      d = e.labelClassName,
      f = e.label,
      p = e.labelFormatter,
      m = e.accessibilityLayer,
      h = m === void 0 ? Vl.accessibilityLayer : m,
      g = () => {
        if (s && s.length) {
          var e = { padding: 0, margin: 0 },
            t = Hl(s, l).map((e, t) => {
              if (!e || e.type === `none`) return null;
              var r = e.formatter || c || Bl,
                a = e.value,
                o = e.name,
                l = a,
                u = o;
              if (r) {
                var d = r(a, o, e, t, s);
                if (Array.isArray(d)) {
                  var f = Pl(d, 2);
                  ((l = f[0]), (u = f[1]));
                } else if (d != null) l = d;
                else return null;
              }
              var p = Al(
                Al({}, Vl.itemStyle),
                {},
                { color: e.color || Vl.itemStyle.color },
                i,
              );
              return w.createElement(
                `li`,
                {
                  className: `recharts-tooltip-item`,
                  key: `tooltip-item-${t}`,
                  style: p,
                },
                Te(u)
                  ? w.createElement(
                      `span`,
                      { className: `recharts-tooltip-item-name` },
                      u,
                    )
                  : null,
                Te(u)
                  ? w.createElement(
                      `span`,
                      { className: `recharts-tooltip-item-separator` },
                      n,
                    )
                  : null,
                w.createElement(
                  `span`,
                  { className: `recharts-tooltip-item-value` },
                  l,
                ),
                w.createElement(
                  `span`,
                  { className: `recharts-tooltip-item-unit` },
                  e.unit || ``,
                ),
              );
            });
          return w.createElement(
            `ul`,
            { className: `recharts-tooltip-item-list`, style: e },
            t,
          );
        }
        return null;
      },
      _ = Al(Al({}, Vl.contentStyle), r),
      v = Al({ margin: 0 }, o),
      y = !F(f),
      b = y ? f : ``,
      S = x(`recharts-default-tooltip`, u),
      C = x(`recharts-tooltip-label`, d);
    y && p && s != null && (b = p(f, s));
    var T = h ? { role: `status`, "aria-live": `assertive` } : {};
    return w.createElement(
      `div`,
      Ol({ className: S, style: _ }, T),
      w.createElement(
        `p`,
        { className: C, style: v },
        w.isValidElement(b) ? b : `${b}`,
      ),
      g(),
    );
  },
  Wl = `recharts-tooltip-wrapper`,
  Gl = { visibility: `hidden` };
function Kl(e) {
  var t = e.coordinate,
    n = e.translateX,
    r = e.translateY;
  return x(Wl, {
    [`${Wl}-right`]: P(n) && t && P(t.x) && n >= t.x,
    [`${Wl}-left`]: P(n) && t && P(t.x) && n < t.x,
    [`${Wl}-bottom`]: P(r) && t && P(t.y) && r >= t.y,
    [`${Wl}-top`]: P(r) && t && P(t.y) && r < t.y,
  });
}
function ql(e) {
  var t = e.allowEscapeViewBox,
    n = e.coordinate,
    r = e.key,
    i = e.offset,
    a = e.position,
    o = e.reverseDirection,
    s = e.tooltipDimension,
    c = e.viewBox,
    l = e.viewBoxDimension;
  if (a && P(a[r])) return a[r];
  var u = n[r] - s - (i > 0 ? i : 0),
    d = n[r] + i;
  if (t[r]) return o[r] ? u : d;
  var f = c[r];
  return f == null
    ? 0
    : o[r]
      ? Math.max(u < f ? d : u, f)
      : l == null
        ? 0
        : d + s > f + l
          ? Math.max(u, f)
          : Math.max(d, f);
}
function Jl(e) {
  var t = e.translateX,
    n = e.translateY;
  return {
    transform: e.useTranslate3d
      ? `translate3d(${t}px, ${n}px, 0)`
      : `translate(${t}px, ${n}px)`,
  };
}
function Yl(e) {
  var t = e.allowEscapeViewBox,
    n = e.coordinate,
    r = e.offsetTop,
    i = e.offsetLeft,
    a = e.position,
    o = e.reverseDirection,
    s = e.tooltipBox,
    c = e.useTranslate3d,
    l = e.viewBox,
    u,
    d,
    f;
  return (
    s && s.height > 0 && s.width > 0 && n
      ? ((d = ql({
          allowEscapeViewBox: t,
          coordinate: n,
          key: `x`,
          offset: i,
          position: a,
          reverseDirection: o,
          tooltipDimension: s.width,
          viewBox: l,
          viewBoxDimension: l.width,
        })),
        (f = ql({
          allowEscapeViewBox: t,
          coordinate: n,
          key: `y`,
          offset: r,
          position: a,
          reverseDirection: o,
          tooltipDimension: s.height,
          viewBox: l,
          viewBoxDimension: l.height,
        })),
        (u = Jl({ translateX: d, translateY: f, useTranslate3d: c })))
      : (u = Gl),
    {
      cssProperties: u,
      cssClasses: Kl({ translateX: d, translateY: f, coordinate: n }),
    }
  );
}
var Xl = {
  devToolsEnabled: !0,
  isSsr: !(
    typeof window < `u` &&
    window.document &&
    window.document.createElement &&
    window.setTimeout
  ),
};
function Zl(e, t) {
  return nu(e) || tu(e, t) || $l(e, t) || Ql();
}
function Ql() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $l(e, t) {
  if (e) {
    if (typeof e == `string`) return eu(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? eu(e, t)
          : void 0
    );
  }
}
function eu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function tu(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function nu(e) {
  if (Array.isArray(e)) return e;
}
function ru() {
  var e = Zl(
      (0, w.useState)(() =>
        Xl.isSsr || !window.matchMedia
          ? !1
          : window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
      ),
      2,
    ),
    t = e[0],
    n = e[1];
  return (
    (0, w.useEffect)(() => {
      if (window.matchMedia) {
        var e = window.matchMedia(`(prefers-reduced-motion: reduce)`),
          t = () => {
            n(e.matches);
          };
        return (
          e.addEventListener(`change`, t),
          () => {
            e.removeEventListener(`change`, t);
          }
        );
      }
    }, []),
    t
  );
}
function iu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function au(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? iu(Object(n), !0).forEach(function (t) {
          ou(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : iu(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function ou(e, t, n) {
  return (
    (t = su(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function su(e) {
  var t = cu(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function cu(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function lu(e, t) {
  return mu(e) || pu(e, t) || du(e, t) || uu();
}
function uu() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function du(e, t) {
  if (e) {
    if (typeof e == `string`) return fu(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? fu(e, t)
          : void 0
    );
  }
}
function fu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function pu(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function mu(e) {
  if (Array.isArray(e)) return e;
}
function hu(e) {
  if (
    !(e.prefersReducedMotion && e.isAnimationActive === `auto`) &&
    e.isAnimationActive &&
    e.active
  ) {
    var t = typeof e.animationEasing == `string` ? e.animationEasing : `ease`;
    return `transform ${e.animationDuration}ms ${t}`;
  }
}
function gu(e) {
  var t = ru(),
    n = lu(
      w.useState(() => ({
        dismissed: !1,
        dismissedAtCoordinate: { x: 0, y: 0 },
      })),
      2,
    ),
    r = n[0],
    i = n[1];
  (w.useEffect(() => {
    var t = (t) => {
      t.key === `Escape` &&
        i({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: e.coordinate?.x ?? 0,
            y: e.coordinate?.y ?? 0,
          },
        });
    };
    return (
      document.addEventListener(`keydown`, t),
      () => {
        document.removeEventListener(`keydown`, t);
      }
    );
  }, [e.coordinate?.x, e.coordinate?.y]),
    r.dismissed &&
      ((e.coordinate?.x ?? 0) !== r.dismissedAtCoordinate.x ||
        (e.coordinate?.y ?? 0) !== r.dismissedAtCoordinate.y) &&
      i(au(au({}, r), {}, { dismissed: !1 })));
  var a = Yl({
      allowEscapeViewBox: e.allowEscapeViewBox,
      coordinate: e.coordinate,
      offsetLeft: typeof e.offset == `number` ? e.offset : e.offset.x,
      offsetTop: typeof e.offset == `number` ? e.offset : e.offset.y,
      position: e.position,
      reverseDirection: e.reverseDirection,
      tooltipBox: e.lastBoundingBox,
      useTranslate3d: e.useTranslate3d,
      viewBox: e.viewBox,
    }),
    o = a.cssClasses,
    s = a.cssProperties,
    c = au(
      au(
        {},
        e.hasPortalFromProps
          ? {}
          : au(
              au(
                {
                  transition: hu({
                    prefersReducedMotion: t,
                    isAnimationActive: e.isAnimationActive,
                    active: e.active,
                    animationDuration: e.animationDuration,
                    animationEasing: e.animationEasing,
                  }),
                },
                s,
              ),
              {},
              { pointerEvents: `none`, position: `absolute`, top: 0, left: 0 },
            ),
      ),
      {},
      {
        visibility:
          !r.dismissed && e.active && e.hasPayload ? `visible` : `hidden`,
      },
      e.wrapperStyle,
    );
  return w.createElement(
    `div`,
    {
      xmlns: `http://www.w3.org/1999/xhtml`,
      tabIndex: -1,
      className: o,
      style: c,
      ref: e.innerRef,
    },
    e.children,
  );
}
var _u = w.memo(gu),
  vu = () => R((e) => e.rootProps.accessibilityLayer) ?? !0;
function yu() {
  return (
    (yu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    yu.apply(null, arguments)
  );
}
function bu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function xu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? bu(Object(n), !0).forEach(function (t) {
          Su(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : bu(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Su(e, t, n) {
  return (
    (t = Cu(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Cu(e) {
  var t = wu(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function wu(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Tu = {
    curveBasisClosed: Tt,
    curveBasisOpen: Dt,
    curveBasis: Ct,
    curveBumpX: _t,
    curveBumpY: vt,
    curveLinearClosed: Rt,
    curveLinear: lt,
    curveMonotoneX: Kt,
    curveMonotoneY: qt,
    curveNatural: Xt,
    curveStep: Qt,
    curveStepAfter: en,
    curveStepBefore: $t,
  },
  Eu = (e) => H(e.x) && H(e.y),
  Du = (e) => e.base != null && Eu(e.base) && Eu(e),
  Ou = (e) => e.x,
  ku = (e) => e.y,
  Au = (e, t) => {
    if (typeof e == `function`) return e;
    var n = `curve${Me(e)}`;
    if ((n === `curveMonotone` || n === `curveBump`) && t) {
      var r = Tu[`${n}${t === `vertical` ? `Y` : `X`}`];
      if (r) return r;
    }
    return Tu[n] || lt;
  },
  ju = { connectNulls: !1, type: `linear` },
  Mu = (e) => {
    var t = e.type,
      n = t === void 0 ? ju.type : t,
      r = e.points,
      i = r === void 0 ? [] : r,
      a = e.baseLine,
      o = e.layout,
      s = e.connectNulls,
      c = s === void 0 ? ju.connectNulls : s,
      l = Au(n, o),
      u = c ? i.filter(Eu) : i;
    if (Array.isArray(a)) {
      var d,
        f = i.map((e, t) => xu(xu({}, e), {}, { base: a[t] }));
      return (
        (d =
          o === `vertical`
            ? pt()
                .y(ku)
                .x1(Ou)
                .x0((e) => e.base.x)
            : pt()
                .x(Ou)
                .y1(ku)
                .y0((e) => e.base.y)),
        d.defined(Du).curve(l)(c ? f.filter(Du) : f)
      );
    }
    return (
      o === `vertical` && P(a)
        ? pt().y(ku).x1(Ou).x0(a)
        : P(a)
          ? pt().x(Ou).y1(ku).y0(a)
          : ft().x(Ou).y(ku)
    )
      .defined(Eu)
      .curve(l)(u);
  },
  Nu = (e) => {
    var t = e.className,
      n = e.points,
      r = e.path,
      i = e.pathRef,
      a = $c();
    if ((!n || !n.length) && !r) return null;
    var o = {
        type: e.type,
        points: e.points,
        baseLine: e.baseLine,
        layout: e.layout || a,
        connectNulls: e.connectNulls,
      },
      s = n && n.length ? Mu(o) : r;
    return w.createElement(
      `path`,
      yu({}, O(e), dn(e), {
        className: x(`recharts-curve`, t),
        d: s === null ? void 0 : s,
        ref: i,
      }),
    );
  },
  Pu = [`x`, `y`, `top`, `left`, `width`, `height`, `className`];
function Fu() {
  return (
    (Fu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Fu.apply(null, arguments)
  );
}
function Iu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Lu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Iu(Object(n), !0).forEach(function (t) {
          Ru(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Iu(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Ru(e, t, n) {
  return (
    (t = zu(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function zu(e) {
  var t = Bu(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Bu(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Vu(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Hu(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function Hu(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Uu = (e, t, n, r, i, a) => `M${e},${i}v${r}M${a},${t}h${n}`,
  Wu = (e) => {
    var t = e.x,
      n = t === void 0 ? 0 : t,
      r = e.y,
      i = r === void 0 ? 0 : r,
      a = e.top,
      o = a === void 0 ? 0 : a,
      s = e.left,
      c = s === void 0 ? 0 : s,
      l = e.width,
      u = l === void 0 ? 0 : l,
      d = e.height,
      f = d === void 0 ? 0 : d,
      p = e.className,
      m = Vu(e, Pu),
      h = Lu({ x: n, y: i, top: o, left: c, width: u, height: f }, m);
    return !P(n) || !P(i) || !P(u) || !P(f) || !P(o) || !P(c)
      ? null
      : w.createElement(
          `path`,
          Fu({}, A(h), {
            className: x(`recharts-cross`, p),
            d: Uu(n, i, u, f, o, c),
          }),
        );
  };
function Gu(e, t, n, r) {
  var i = r / 2;
  return {
    stroke: `none`,
    fill: `#ccc`,
    x: e === `horizontal` ? t.x - i : n.left + 0.5,
    y: e === `horizontal` ? n.top + 0.5 : t.y - i,
    width: e === `horizontal` ? r : n.width - 1,
    height: e === `horizontal` ? n.height - 1 : r,
  };
}
var Ku = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1],
  qu = (e, t) => e.map((e, n) => e * t ** n).reduce((e, t) => e + t),
  Ju = (e, t) => (n) => qu(Ku(e, t), n),
  Yu = (e, t) => (n) =>
    qu(
      [
        ...Ku(e, t)
          .map((e, t) => e * t)
          .slice(1),
        0,
      ],
      n,
    ),
  Xu = (e) => {
    var t,
      n = e.split(`(`);
    if (n.length !== 2 || n[0] !== `cubic-bezier`) return null;
    var r =
      (t = n[1]) == null || (t = t.split(`)`)[0]) == null
        ? void 0
        : t.split(`,`);
    if (r == null || r.length !== 4) return null;
    var i = r.map((e) => parseFloat(e));
    return [i[0], i[1], i[2], i[3]];
  },
  Zu = function () {
    var e = [...arguments];
    if (e.length === 1)
      switch (e[0]) {
        case `linear`:
          return [0, 0, 1, 1];
        case `ease`:
          return [0.25, 0.1, 0.25, 1];
        case `ease-in`:
          return [0.42, 0, 1, 1];
        case `ease-out`:
          return [0.42, 0, 0.58, 1];
        case `ease-in-out`:
          return [0, 0, 0.58, 1];
        default:
          var t = Xu(e[0]);
          if (t) return t;
      }
    return e.length === 4 ? e : [0, 0, 1, 1];
  },
  Qu = (e, t, n, r) => {
    var i = Ju(e, n),
      a = Ju(t, r),
      o = Yu(e, n),
      s = (e) => (e > 1 ? 1 : e < 0 ? 0 : e),
      c = (e) => {
        for (var t = e > 1 ? 1 : e, n = t, r = 0; r < 8; ++r) {
          var c = i(n) - t,
            l = o(n);
          if (Math.abs(c - t) < 1e-4 || l < 1e-4) return a(n);
          n = s(n - c / l);
        }
        return a(n);
      };
    return ((c.isStepper = !1), c);
  },
  $u = function () {
    return Qu(...Zu(...arguments));
  },
  ed = function () {
    for (
      var e =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        t = e.stiff,
        n = t === void 0 ? 100 : t,
        r = e.damping,
        i = r === void 0 ? 8 : r,
        a = e.dt,
        o = a === void 0 ? 16.67 : a,
        s = 1,
        c = [0],
        l = 0,
        u = 0,
        d = 1e4,
        f = 0;
      f < d;
    ) {
      var p = -(l - s) * n,
        m = u * i;
      if (
        ((u += ((p - m) * o) / 1e3),
        (l += (u * o) / 1e3),
        c.push(l),
        Math.abs(l - s) < 1e-4 && Math.abs(u) < 1e-4)
      )
        break;
      f++;
    }
    c[c.length - 1] = s;
    var h = c.length - 1;
    return (e) => {
      if (e <= 0) return 0;
      if (e >= 1) return s;
      var t = e * h,
        n = Math.floor(t),
        r = t - n;
      return (c[n] ?? 0) + ((c[n + 1] ?? 0) - (c[n] ?? 0)) * r;
    };
  },
  td = (e) => {
    if (typeof e == `string`)
      switch (e) {
        case `ease`:
        case `ease-in-out`:
        case `ease-out`:
        case `ease-in`:
        case `linear`:
          return $u(e);
        case `spring`:
          return ed();
        default:
          if (e.split(`(`)[0] === `cubic-bezier`) return $u(e);
      }
    return typeof e == `function` ? e : null;
  },
  nd = (0, w.createContext)((e, t, n) => {
    var r,
      i = (a) => {
        var o = t.tick(a);
        if (t.getState() === `active`) {
          if ((n(t.getInterpolated()), t.getProgress() === 1)) {
            (t.complete(), (r = void 0));
            return;
          }
          r = e.setTimeout(i, o);
        } else r = e.setTimeout(i, o);
      };
    return ((r = e.setTimeout(i, 0)), () => r?.());
  });
nd.Provider;
function rd(e) {
  var t = (0, w.useContext)(nd);
  return (0, w.useMemo)(() => e ?? t, [e, t]);
}
function id(e, t, n) {
  return (
    (t = ad(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ad(e) {
  var t = od(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function od(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var sd = `init`,
  cd = `pending`,
  ld = `active`,
  ud = `completed`;
function dd(e) {
  return Math.max(0, e);
}
var fd = class {
    getAnimationStartedTime() {
      return this.animationStartedTime;
    }
    getBeginStartedTime() {
      return this.beginStartedTime;
    }
    constructor(e) {
      var t;
      (id(this, `state`, sd),
        (this.animationId = e.animationId),
        (this.onAnimationEnd = e.onAnimationEnd),
        (this.animationDuration = dd(e.animationDuration)),
        (this.animationBegin = dd(e.animationBegin)),
        (this.progress = 0),
        (this.from = e.from),
        (this.to = e.to),
        (this.easing = e.easing),
        (t = e.onAnimationStart) == null || t.call(e));
    }
    getState() {
      return this.state;
    }
    getEasing() {
      return this.easing;
    }
    getAnimationDuration() {
      return this.animationDuration;
    }
    tick(e) {
      if (this.getState() === sd)
        return (
          (this.state = cd),
          (this.beginStartedTime = e),
          this.animationBegin
        );
      if (this.getState() === cd) {
        if (this.beginStartedTime == null) throw Error();
        var t = e - this.beginStartedTime;
        return t >= this.animationBegin
          ? ((this.state = ld),
            (this.animationStartedTime = e),
            this.nextAnimationUpdate(0))
          : dd(this.animationBegin - t);
      }
      if (this.getState() === ld) {
        if (this.animationStartedTime == null) throw Error();
        var n = e - this.animationStartedTime;
        return (
          this.setProgress(n / this.animationDuration),
          this.nextAnimationUpdate(n)
        );
      }
      return 0;
    }
    setProgress(e) {
      this.progress = Math.min(1, Math.max(0, e));
    }
    getProgress() {
      return this.progress;
    }
    complete() {
      if (((this.progress = 1), this.state === `active`)) {
        var e;
        (e = this.onAnimationEnd) == null || e.call(this);
      }
      this.state = ud;
    }
    getFrom() {
      return this.from;
    }
    getTo() {
      return this.to;
    }
    getAnimationId() {
      return this.animationId;
    }
    getAnimationBegin() {
      return this.animationBegin;
    }
  },
  pd = class extends fd {
    nextAnimationUpdate() {
      return 0;
    }
    getInterpolated() {
      return this.easing(Ae(this.getFrom(), this.getTo(), this.getProgress()));
    }
  },
  md = class {
    setTimeout(e) {
      var t =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        n = performance.now(),
        r = null,
        i = (a) => {
          a - n >= t ? e(a) : (r = requestAnimationFrame(i));
        };
      return (
        (r = requestAnimationFrame(i)),
        () => {
          r != null && cancelAnimationFrame(r);
        }
      );
    }
  };
function hd(e, t) {
  return bd(e) || yd(e, t) || _d(e, t) || gd();
}
function gd() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _d(e, t) {
  if (e) {
    if (typeof e == `string`) return vd(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? vd(e, t)
          : void 0
    );
  }
}
function vd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function yd(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function bd(e) {
  if (Array.isArray(e)) return e;
}
var xd = {
    begin: 0,
    duration: 1e3,
    easing: `ease`,
    isActive: !0,
    canBegin: !0,
    onAnimationEnd: () => {},
    onAnimationStart: () => {},
  },
  Sd = 0,
  Cd = 1;
function wd(e) {
  var t = yn(e, xd),
    n = t.animationId,
    r = t.isActive,
    i = t.canBegin,
    a = t.duration,
    o = t.easing,
    s = t.begin,
    c = t.onAnimationEnd,
    l = t.onAnimationStart,
    u = t.children,
    d = ru(),
    f = r === `auto` ? !Xl.isSsr && !d : r,
    p = rd(t.animationController),
    m = hd((0, w.useState)(f ? Sd : Cd), 2),
    h = m[0],
    g = m[1];
  return (
    (0, w.useEffect)(() => {
      f || g(Cd);
    }, [f]),
    (0, w.useEffect)(() => {
      var e = td(o);
      return !f || !i || e == null
        ? Pe
        : p(
            new md(),
            new pd({
              animationId: n,
              easing: e,
              animationDuration: a,
              animationBegin: s,
              onAnimationStart: l,
              onAnimationEnd: c,
              from: Sd,
              to: Cd,
            }),
            g,
          );
    }, [p, n, f, i, a, o, s, l, c]),
    u(Number(h))
  );
}
function Td(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : `animation-`,
    n = (0, w.useRef)(De(t)),
    r = (0, w.useRef)(e);
  return (r.current !== e && ((n.current = De(t)), (r.current = e)), n.current);
}
var Ed = (e) => e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`),
  Dd = (e, t, n) => e.map((e) => `${Ed(e)} ${t}ms ${n}`).join(`,`),
  Od = [`radius`],
  kd = [`radius`],
  Ad,
  jd,
  Md,
  Nd,
  Pd,
  Fd,
  Id,
  Ld,
  Rd,
  zd;
function Bd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Vd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Bd(Object(n), !0).forEach(function (t) {
          Hd(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Bd(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Hd(e, t, n) {
  return (
    (t = Ud(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Ud(e) {
  var t = Wd(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Wd(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Gd() {
  return (
    (Gd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Gd.apply(null, arguments)
  );
}
function Kd(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = qd(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function qd(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function Jd(e, t) {
  return $d(e) || Qd(e, t) || Xd(e, t) || Yd();
}
function Yd() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xd(e, t) {
  if (e) {
    if (typeof e == `string`) return Zd(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Zd(e, t)
          : void 0
    );
  }
}
function Zd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Qd(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function $d(e) {
  if (Array.isArray(e)) return e;
}
function ef(e, t) {
  return (
    (t ||= e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
    )
  );
}
var tf = (e, t, n, r, i) => {
    var a = be(n),
      o = be(r),
      s = Math.min(Math.abs(a) / 2, Math.abs(o) / 2),
      c = o >= 0 ? 1 : -1,
      l = a >= 0 ? 1 : -1,
      u = +((o >= 0 && a >= 0) || (o < 0 && a < 0)),
      d;
    if (s > 0 && Array.isArray(i)) {
      for (var f = [0, 0, 0, 0], p = 0, m = 4; p < m; p++) {
        var h = i[p] ?? 0;
        f[p] = h > s ? s : h;
      }
      ((d = xe((Ad ||= ef([`M`, `,`, ``])), e, t + c * f[0])),
        f[0] > 0 &&
          (d += xe(
            (jd ||= ef([`A `, `,`, `,0,0,`, `,`, `,`, ``])),
            f[0],
            f[0],
            u,
            e + l * f[0],
            t,
          )),
        (d += xe((Md ||= ef([`L `, `,`, ``])), e + n - l * f[1], t)),
        f[1] > 0 &&
          (d += xe(
            (Nd ||= ef([
              `A `,
              `,`,
              `,0,0,`,
              `,
        `,
              `,`,
              ``,
            ])),
            f[1],
            f[1],
            u,
            e + n,
            t + c * f[1],
          )),
        (d += xe((Pd ||= ef([`L `, `,`, ``])), e + n, t + r - c * f[2])),
        f[2] > 0 &&
          (d += xe(
            (Fd ||= ef([
              `A `,
              `,`,
              `,0,0,`,
              `,
        `,
              `,`,
              ``,
            ])),
            f[2],
            f[2],
            u,
            e + n - l * f[2],
            t + r,
          )),
        (d += xe((Id ||= ef([`L `, `,`, ``])), e + l * f[3], t + r)),
        f[3] > 0 &&
          (d += xe(
            (Ld ||= ef([
              `A `,
              `,`,
              `,0,0,`,
              `,
        `,
              `,`,
              ``,
            ])),
            f[3],
            f[3],
            u,
            e,
            t + r - c * f[3],
          )),
        (d += `Z`));
    } else if (s > 0 && i === +i && i > 0) {
      var g = Math.min(s, i);
      d = xe(
        (Rd ||= ef(
          `M .,.
            A .,.,0,0,.,.,.
            L .,.
            A .,.,0,0,.,.,.
            L .,.
            A .,.,0,0,.,.,.
            L .,.
            A .,.,0,0,.,.,. Z`.split(`.`),
        )),
        e,
        t + c * g,
        g,
        g,
        u,
        e + l * g,
        t,
        e + n - l * g,
        t,
        g,
        g,
        u,
        e + n,
        t + c * g,
        e + n,
        t + r - c * g,
        g,
        g,
        u,
        e + n - l * g,
        t + r,
        e + l * g,
        t + r,
        g,
        g,
        u,
        e,
        t + r - c * g,
      );
    } else
      d = xe(
        (zd ||= ef([`M `, `,`, ` h `, ` v `, ` h `, ` Z`])),
        e,
        t,
        n,
        r,
        -n,
      );
    return d;
  },
  nf = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
  },
  rf = (e) => {
    var t = yn(e, nf),
      n = (0, w.useRef)(null),
      r = Jd((0, w.useState)(-1), 2),
      i = r[0],
      a = r[1];
    (0, w.useEffect)(() => {
      if (n.current && n.current.getTotalLength)
        try {
          var e = n.current.getTotalLength();
          e && a(e);
        } catch {}
    }, []);
    var o = t.x,
      s = t.y,
      c = t.width,
      l = t.height,
      u = t.radius,
      d = t.className,
      f = t.animationEasing,
      p = t.animationDuration,
      m = t.animationBegin,
      h = t.isAnimationActive,
      g = t.isUpdateAnimationActive,
      _ = (0, w.useRef)(c),
      v = (0, w.useRef)(l),
      y = (0, w.useRef)(o),
      b = (0, w.useRef)(s),
      S = Td(
        (0, w.useMemo)(
          () => ({ x: o, y: s, width: c, height: l, radius: u }),
          [o, s, c, l, u],
        ),
        `rectangle-`,
      );
    if (o !== +o || s !== +s || c !== +c || l !== +l || c === 0 || l === 0)
      return null;
    var C = x(`recharts-rectangle`, d);
    if (!g) {
      var T = A(t);
      T.radius;
      var E = Kd(T, Od);
      return w.createElement(
        `path`,
        Gd({}, E, {
          x: be(o),
          y: be(s),
          width: be(c),
          height: be(l),
          radius: typeof u == `number` ? u : void 0,
          className: C,
          d: tf(o, s, c, l, u),
        }),
      );
    }
    var D = _.current,
      O = v.current,
      k = y.current,
      j = b.current,
      M = `0px ${i === -1 ? 1 : i}px`,
      N = `${i}px ${i}px`,
      ee = Dd(
        [`strokeDasharray`],
        p,
        typeof f == `string` ? f : nf.animationEasing,
      );
    return w.createElement(
      wd,
      {
        animationId: S,
        key: S,
        canBegin: i > 0,
        duration: p,
        easing: f,
        isActive: g,
        begin: m,
      },
      (e) => {
        var r = Ae(D, c, e),
          i = Ae(O, l, e),
          a = Ae(k, o, e),
          d = Ae(j, s, e);
        n.current &&
          ((_.current = r), (v.current = i), (y.current = a), (b.current = d));
        var f = h
            ? e > 0
              ? { transition: ee, strokeDasharray: N }
              : { strokeDasharray: M }
            : { strokeDasharray: N },
          p = A(t);
        p.radius;
        var m = Kd(p, kd);
        return w.createElement(
          `path`,
          Gd({}, m, {
            radius: typeof u == `number` ? u : void 0,
            className: C,
            d: tf(a, d, r, i, u),
            ref: n,
            style: Vd(Vd({}, f), t.style),
          }),
        );
      },
    );
  };
function af(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function of(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? af(Object(n), !0).forEach(function (t) {
          sf(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : af(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function sf(e, t, n) {
  return (
    (t = cf(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function cf(e) {
  var t = lf(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function lf(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var uf = Math.PI / 180,
  df = (e) => (e * 180) / Math.PI,
  ff = (e, t, n, r) => ({
    x: e + Math.cos(-uf * r) * n,
    y: t + Math.sin(-uf * r) * n,
  }),
  pf = function (e, t) {
    var n =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0,
            brushBottom: 0,
          };
    return (
      Math.min(
        Math.abs(e - (n.left || 0) - (n.right || 0)),
        Math.abs(t - (n.top || 0) - (n.bottom || 0)),
      ) / 2
    );
  },
  mf = (e, t) => {
    var n = e.x,
      r = e.y,
      i = t.x,
      a = t.y;
    return Math.sqrt((n - i) ** 2 + (r - a) ** 2);
  },
  hf = (e, t) => {
    var n = e.x,
      r = e.y,
      i = t.cx,
      a = t.cy,
      o = mf({ x: n, y: r }, { x: i, y: a });
    if (o <= 0) return { radius: o, angle: 0 };
    var s = (n - i) / o,
      c = Math.acos(s);
    return (
      r > a && (c = 2 * Math.PI - c),
      { radius: o, angle: df(c), angleInRadian: c }
    );
  },
  gf = (e) => {
    var t = e.startAngle,
      n = e.endAngle,
      r = Math.floor(t / 360),
      i = Math.floor(n / 360),
      a = Math.min(r, i);
    return { startAngle: t - a * 360, endAngle: n - a * 360 };
  },
  _f = (e, t) => {
    var n = t.startAngle,
      r = t.endAngle,
      i = Math.floor(n / 360),
      a = Math.floor(r / 360);
    return e + Math.min(i, a) * 360;
  },
  vf = (e, t) => {
    var n = e.relativeX,
      r = e.relativeY,
      i = hf({ x: n, y: r }, t),
      a = i.radius,
      o = i.angle,
      s = t.innerRadius,
      c = t.outerRadius;
    if (a < s || a > c || a === 0) return null;
    var l = gf(t),
      u = l.startAngle,
      d = l.endAngle,
      f = o,
      p;
    if (u <= d) {
      for (; f > d; ) f -= 360;
      for (; f < u; ) f += 360;
      p = f >= u && f <= d;
    } else {
      for (; f > u; ) f -= 360;
      for (; f < d; ) f += 360;
      p = f >= d && f <= u;
    }
    return p ? of(of({}, t), {}, { radius: a, angle: _f(f, t) }) : null;
  };
function yf(e) {
  var t = e.cx,
    n = e.cy,
    r = e.radius,
    i = e.startAngle,
    a = e.endAngle;
  return {
    points: [ff(t, n, r, i), ff(t, n, r, a)],
    cx: t,
    cy: n,
    radius: r,
    startAngle: i,
    endAngle: a,
  };
}
var bf, xf, Sf, Cf, wf, Tf, Ef;
function Df() {
  return (
    (Df = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Df.apply(null, arguments)
  );
}
function Of(e, t) {
  return (
    (t ||= e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
    )
  );
}
var kf = (e, t) => Se(t - e) * Math.min(Math.abs(t - e), 359.999),
  Af = (e) => {
    var t = e.cx,
      n = e.cy,
      r = e.radius,
      i = e.angle,
      a = e.sign,
      o = e.isExternal,
      s = e.cornerRadius,
      c = e.cornerIsExternal,
      l = s * (o ? 1 : -1) + r,
      u = Math.asin(s / l) / uf,
      d = c ? i : i + a * u,
      f = ff(t, n, l, d),
      p = ff(t, n, r, d),
      m = c ? i - a * u : i;
    return {
      center: f,
      circleTangency: p,
      lineTangency: ff(t, n, l * Math.cos(u * uf), m),
      theta: u,
    };
  },
  jf = (e) => {
    var t = e.cx,
      n = e.cy,
      r = e.innerRadius,
      i = e.outerRadius,
      a = e.startAngle,
      o = e.endAngle,
      s = kf(a, o),
      c = a + s,
      l = ff(t, n, i, a),
      u = ff(t, n, i, c),
      d = xe(
        (bf ||= Of([
          `M `,
          `,`,
          `
    A `,
          `,`,
          `,0,
    `,
          `,`,
          `,
    `,
          `,`,
          `
  `,
        ])),
        l.x,
        l.y,
        i,
        i,
        +(Math.abs(s) > 180),
        +(a > c),
        u.x,
        u.y,
      );
    if (r > 0) {
      var f = ff(t, n, r, a),
        p = ff(t, n, r, c);
      d += xe(
        (xf ||= Of([
          `L `,
          `,`,
          `
            A `,
          `,`,
          `,0,
            `,
          `,`,
          `,
            `,
          `,`,
          ` Z`,
        ])),
        p.x,
        p.y,
        r,
        r,
        +(Math.abs(s) > 180),
        +(a <= c),
        f.x,
        f.y,
      );
    } else d += xe((Sf ||= Of([`L `, `,`, ` Z`])), t, n);
    return d;
  },
  Mf = (e) => {
    var t = e.cx,
      n = e.cy,
      r = e.innerRadius,
      i = e.outerRadius,
      a = e.cornerRadius,
      o = e.forceCornerRadius,
      s = e.cornerIsExternal,
      c = e.startAngle,
      l = e.endAngle,
      u = Se(l - c),
      d = Af({
        cx: t,
        cy: n,
        radius: i,
        angle: c,
        sign: u,
        cornerRadius: a,
        cornerIsExternal: s,
      }),
      f = d.circleTangency,
      p = d.lineTangency,
      m = d.theta,
      h = Af({
        cx: t,
        cy: n,
        radius: i,
        angle: l,
        sign: -u,
        cornerRadius: a,
        cornerIsExternal: s,
      }),
      g = h.circleTangency,
      _ = h.lineTangency,
      v = h.theta,
      y = s ? Math.abs(c - l) : Math.abs(c - l) - m - v;
    if (y < 0)
      return o
        ? xe(
            (Cf ||= Of([
              `M `,
              `,`,
              `
        a`,
              `,`,
              `,0,0,1,`,
              `,0
        a`,
              `,`,
              `,0,0,1,`,
              `,0
      `,
            ])),
            p.x,
            p.y,
            a,
            a,
            a * 2,
            a,
            a,
            -a * 2,
          )
        : jf({
            cx: t,
            cy: n,
            innerRadius: r,
            outerRadius: i,
            startAngle: c,
            endAngle: l,
          });
    var b = xe(
      (wf ||= Of([
        `M `,
        `,`,
        `
    A`,
        `,`,
        `,0,0,`,
        `,`,
        `,`,
        `
    A`,
        `,`,
        `,0,`,
        `,`,
        `,`,
        `,`,
        `
    A`,
        `,`,
        `,0,0,`,
        `,`,
        `,`,
        `
  `,
      ])),
      p.x,
      p.y,
      a,
      a,
      +(u < 0),
      f.x,
      f.y,
      i,
      i,
      +(y > 180),
      +(u < 0),
      g.x,
      g.y,
      a,
      a,
      +(u < 0),
      _.x,
      _.y,
    );
    if (r > 0) {
      var x = Af({
          cx: t,
          cy: n,
          radius: r,
          angle: c,
          sign: u,
          isExternal: !0,
          cornerRadius: a,
          cornerIsExternal: s,
        }),
        S = x.circleTangency,
        C = x.lineTangency,
        w = x.theta,
        T = Af({
          cx: t,
          cy: n,
          radius: r,
          angle: l,
          sign: -u,
          isExternal: !0,
          cornerRadius: a,
          cornerIsExternal: s,
        }),
        E = T.circleTangency,
        D = T.lineTangency,
        O = T.theta,
        k = s ? Math.abs(c - l) : Math.abs(c - l) - w - O;
      if (k < 0 && a === 0) return `${b}L${t},${n}Z`;
      b += xe(
        (Tf ||= Of([
          `L`,
          `,`,
          `
      A`,
          `,`,
          `,0,0,`,
          `,`,
          `,`,
          `
      A`,
          `,`,
          `,0,`,
          `,`,
          `,`,
          `,`,
          `
      A`,
          `,`,
          `,0,0,`,
          `,`,
          `,`,
          `Z`,
        ])),
        D.x,
        D.y,
        a,
        a,
        +(u < 0),
        E.x,
        E.y,
        r,
        r,
        +(k > 180),
        +(u > 0),
        S.x,
        S.y,
        a,
        a,
        +(u < 0),
        C.x,
        C.y,
      );
    } else b += xe((Ef ||= Of([`L`, `,`, `Z`])), t, n);
    return b;
  },
  Nf = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1,
  },
  Pf = (e) => {
    var t = yn(e, Nf),
      n = t.cx,
      r = t.cy,
      i = t.innerRadius,
      a = t.outerRadius,
      o = t.cornerRadius,
      s = t.forceCornerRadius,
      c = t.cornerIsExternal,
      l = t.startAngle,
      u = t.endAngle,
      d = t.className;
    if (a < i || l === u) return null;
    var f = x(`recharts-sector`, d),
      p = a - i,
      m = Oe(o, p, 0, !0),
      h =
        m > 0 && Math.abs(l - u) < 360
          ? Mf({
              cx: n,
              cy: r,
              innerRadius: i,
              outerRadius: a,
              cornerRadius: Math.min(m, p / 2),
              forceCornerRadius: s,
              cornerIsExternal: c,
              startAngle: l,
              endAngle: u,
            })
          : jf({
              cx: n,
              cy: r,
              innerRadius: i,
              outerRadius: a,
              startAngle: l,
              endAngle: u,
            });
    return w.createElement(`path`, Df({}, A(t), { className: f, d: h }));
  };
function Ff(e, t, n) {
  if (e === `horizontal`)
    return [
      { x: t.x, y: n.top },
      { x: t.x, y: n.top + n.height },
    ];
  if (e === `vertical`)
    return [
      { x: n.left, y: t.y },
      { x: n.left + n.width, y: t.y },
    ];
  if (un(t)) {
    if (e === `centric`) {
      var r = t.cx,
        i = t.cy,
        a = t.innerRadius,
        o = t.outerRadius,
        s = t.angle,
        c = ff(r, i, a, s),
        l = ff(r, i, o, s);
      return [
        { x: c.x, y: c.y },
        { x: l.x, y: l.y },
      ];
    }
    return yf(t);
  }
}
function If(e) {
  return pe(e) ? NaN : Number(e);
}
function Lf(e) {
  return e
    ? ((e = If(e)),
      e === 1 / 0 || e === -1 / 0
        ? (e < 0 ? -1 : 1) * Number.MAX_VALUE
        : e === e
          ? e
          : 0)
    : e === 0
      ? e
      : 0;
}
function Rf(e, t, n) {
  (n && typeof n != `number` && ei(e, t, n) && (t = n = void 0),
    (e = Lf(e)),
    t === void 0 ? ((t = e), (e = 0)) : (t = Lf(t)),
    (n = n === void 0 ? (e < t ? 1 : -1) : Lf(n)));
  let r = Math.max(Math.ceil((t - e) / (n || 1)), 0),
    i = Array(r);
  for (let t = 0; t < r; t++) ((i[t] = e), (e += n));
  return i;
}
var zf = (e) => e.chartData,
  Bf = z([zf], (e) => {
    var t = e.chartData == null ? 0 : e.chartData.length - 1;
    return {
      chartData: e.chartData,
      computedData: e.computedData,
      dataEndIndex: t,
      dataStartIndex: 0,
    };
  }),
  Vf = (e, t, n, r) => (r ? Bf(e) : zf(e)),
  Hf = (e, t, n) => (n ? Bf(e) : zf(e)),
  Uf = z([Vf], (e) => {
    var t = e.chartData,
      n = e.dataStartIndex,
      r = e.dataEndIndex;
    return t == null ? [] : t.slice(n, r + 1);
  });
z([Bf], (e) => {
  var t = e.chartData,
    n = e.dataStartIndex,
    r = e.dataEndIndex;
  return t == null ? [] : t.slice(n, r + 1);
});
var Wf = z([zf], (e) => {
  var t = e.chartData,
    n = e.dataStartIndex,
    r = e.dataEndIndex;
  return t == null ? [] : t.slice(n, r + 1);
});
function Gf(e, t) {
  return Xf(e) || Yf(e, t) || qf(e, t) || Kf();
}
function Kf() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qf(e, t) {
  if (e) {
    if (typeof e == `string`) return Jf(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Jf(e, t)
          : void 0
    );
  }
}
function Jf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Yf(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function Xf(e) {
  if (Array.isArray(e)) return e;
}
function Zf(e) {
  if (Array.isArray(e) && e.length === 2) {
    var t = Gf(e, 2),
      n = t[0],
      r = t[1];
    if (H(n) && H(r)) return !0;
  }
  return !1;
}
function Qf(e, t, n) {
  return n ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function $f(e, t) {
  if (t && typeof e != `function` && Array.isArray(e) && e.length === 2) {
    var n = Gf(e, 2),
      r = n[0],
      i = n[1],
      a,
      o;
    if (H(r)) a = r;
    else if (typeof r == `function`) return;
    if (H(i)) o = i;
    else if (typeof i == `function`) return;
    var s = [a, o];
    if (Zf(s)) return s;
  }
}
function ep(e, t, n) {
  if (n || t != null) {
    if (typeof e == `function` && t != null)
      try {
        var r = e(t, n);
        if (Zf(r)) return Qf(r, t, n);
      } catch {}
    if (Array.isArray(e) && e.length === 2) {
      var i = Gf(e, 2),
        a = i[0],
        o = i[1],
        s,
        c;
      if (a === `auto`) t != null && (s = Math.min(...t));
      else if (P(a)) s = a;
      else if (typeof a == `function`)
        try {
          t != null && (s = a(t?.[0]));
        } catch {}
      else if (typeof a == `string` && zs.test(a)) {
        var l = zs.exec(a);
        if (l == null || l[1] == null || t == null) s = void 0;
        else {
          var u = +l[1];
          s = t[0] - u;
        }
      } else s = t?.[0];
      if (o === `auto`) t != null && (c = Math.max(...t));
      else if (P(o)) c = o;
      else if (typeof o == `function`)
        try {
          t != null && (c = o(t?.[1]));
        } catch {}
      else if (typeof o == `string` && Bs.test(o)) {
        var d = Bs.exec(o);
        if (d == null || d[1] == null || t == null) c = void 0;
        else {
          var f = +d[1];
          c = t[1] + f;
        }
      } else c = t?.[1];
      var p = [s, c];
      if (Zf(p)) return t == null ? p : Qf(p, t, n);
    }
  }
}
var K = e(
  o((e, t, n) => {
    (function (e) {
      var n = 1e9,
        r = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: `2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286`,
        },
        i = !0,
        a = `[DecimalError] `,
        o = a + `Invalid argument: `,
        s = a + `Exponent out of range: `,
        c = Math.floor,
        l = Math.pow,
        u = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        d,
        f = 1e7,
        p = 7,
        m = 9007199254740991,
        h = c(m / p),
        g = {};
      ((g.absoluteValue = g.abs =
        function () {
          var e = new this.constructor(this);
          return ((e.s &&= 1), e);
        }),
        (g.comparedTo = g.cmp =
          function (e) {
            var t,
              n,
              r,
              i,
              a = this;
            if (((e = new a.constructor(e)), a.s !== e.s)) return a.s || -e.s;
            if (a.e !== e.e) return (a.e > e.e) ^ (a.s < 0) ? 1 : -1;
            for (
              r = a.d.length, i = e.d.length, t = 0, n = r < i ? r : i;
              t < n;
              ++t
            )
              if (a.d[t] !== e.d[t])
                return (a.d[t] > e.d[t]) ^ (a.s < 0) ? 1 : -1;
            return r === i ? 0 : (r > i) ^ (a.s < 0) ? 1 : -1;
          }),
        (g.decimalPlaces = g.dp =
          function () {
            var e = this,
              t = e.d.length - 1,
              n = (t - e.e) * p;
            if (((t = e.d[t]), t)) for (; t % 10 == 0; t /= 10) n--;
            return n < 0 ? 0 : n;
          }),
        (g.dividedBy = g.div =
          function (e) {
            return b(this, new this.constructor(e));
          }),
        (g.dividedToIntegerBy = g.idiv =
          function (e) {
            var t = this,
              n = t.constructor;
            return D(b(t, new n(e), 0, 1), n.precision);
          }),
        (g.equals = g.eq =
          function (e) {
            return !this.cmp(e);
          }),
        (g.exponent = function () {
          return S(this);
        }),
        (g.greaterThan = g.gt =
          function (e) {
            return this.cmp(e) > 0;
          }),
        (g.greaterThanOrEqualTo = g.gte =
          function (e) {
            return this.cmp(e) >= 0;
          }),
        (g.isInteger = g.isint =
          function () {
            return this.e > this.d.length - 2;
          }),
        (g.isNegative = g.isneg =
          function () {
            return this.s < 0;
          }),
        (g.isPositive = g.ispos =
          function () {
            return this.s > 0;
          }),
        (g.isZero = function () {
          return this.s === 0;
        }),
        (g.lessThan = g.lt =
          function (e) {
            return this.cmp(e) < 0;
          }),
        (g.lessThanOrEqualTo = g.lte =
          function (e) {
            return this.cmp(e) < 1;
          }),
        (g.logarithm = g.log =
          function (e) {
            var t,
              n = this,
              r = n.constructor,
              o = r.precision,
              s = o + 5;
            if (e === void 0) e = new r(10);
            else if (((e = new r(e)), e.s < 1 || e.eq(d)))
              throw Error(a + `NaN`);
            if (n.s < 1) throw Error(a + (n.s ? `NaN` : `-Infinity`));
            return n.eq(d)
              ? new r(0)
              : ((i = !1), (t = b(T(n, s), T(e, s), s)), (i = !0), D(t, o));
          }),
        (g.minus = g.sub =
          function (e) {
            var t = this;
            return (
              (e = new t.constructor(e)),
              t.s == e.s ? O(t, e) : _(t, ((e.s = -e.s), e))
            );
          }),
        (g.modulo = g.mod =
          function (e) {
            var t,
              n = this,
              r = n.constructor,
              o = r.precision;
            if (((e = new r(e)), !e.s)) throw Error(a + `NaN`);
            return n.s
              ? ((i = !1), (t = b(n, e, 0, 1).times(e)), (i = !0), n.minus(t))
              : D(new r(n), o);
          }),
        (g.naturalExponential = g.exp =
          function () {
            return x(this);
          }),
        (g.naturalLogarithm = g.ln =
          function () {
            return T(this);
          }),
        (g.negated = g.neg =
          function () {
            var e = new this.constructor(this);
            return ((e.s = -e.s || 0), e);
          }),
        (g.plus = g.add =
          function (e) {
            var t = this;
            return (
              (e = new t.constructor(e)),
              t.s == e.s ? _(t, e) : O(t, ((e.s = -e.s), e))
            );
          }),
        (g.precision = g.sd =
          function (e) {
            var t,
              n,
              r,
              i = this;
            if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
              throw Error(o + e);
            if (
              ((t = S(i) + 1),
              (r = i.d.length - 1),
              (n = r * p + 1),
              (r = i.d[r]),
              r)
            ) {
              for (; r % 10 == 0; r /= 10) n--;
              for (r = i.d[0]; r >= 10; r /= 10) n++;
            }
            return e && t > n ? t : n;
          }),
        (g.squareRoot = g.sqrt =
          function () {
            var e,
              t,
              n,
              r,
              o,
              s,
              l,
              u = this,
              d = u.constructor;
            if (u.s < 1) {
              if (!u.s) return new d(0);
              throw Error(a + `NaN`);
            }
            for (
              e = S(u),
                i = !1,
                o = Math.sqrt(+u),
                o == 0 || o == 1 / 0
                  ? ((t = y(u.d)),
                    (t.length + e) % 2 == 0 && (t += `0`),
                    (o = Math.sqrt(t)),
                    (e = c((e + 1) / 2) - (e < 0 || e % 2)),
                    o == 1 / 0
                      ? (t = `5e` + e)
                      : ((t = o.toExponential()),
                        (t = t.slice(0, t.indexOf(`e`) + 1) + e)),
                    (r = new d(t)))
                  : (r = new d(o.toString())),
                n = d.precision,
                o = l = n + 3;
              ;
            )
              if (
                ((s = r),
                (r = s.plus(b(u, s, l + 2)).times(0.5)),
                y(s.d).slice(0, l) === (t = y(r.d)).slice(0, l))
              ) {
                if (((t = t.slice(l - 3, l + 1)), o == l && t == `4999`)) {
                  if ((D(s, n + 1, 0), s.times(s).eq(u))) {
                    r = s;
                    break;
                  }
                } else if (t != `9999`) break;
                l += 4;
              }
            return ((i = !0), D(r, n));
          }),
        (g.times = g.mul =
          function (e) {
            var t,
              n,
              r,
              a,
              o,
              s,
              c,
              l,
              u,
              d = this,
              p = d.constructor,
              m = d.d,
              h = (e = new p(e)).d;
            if (!d.s || !e.s) return new p(0);
            for (
              e.s *= d.s,
                n = d.e + e.e,
                l = m.length,
                u = h.length,
                l < u && ((o = m), (m = h), (h = o), (s = l), (l = u), (u = s)),
                o = [],
                s = l + u,
                r = s;
              r--;
            )
              o.push(0);
            for (r = u; --r >= 0; ) {
              for (t = 0, a = l + r; a > r; )
                ((c = o[a] + h[r] * m[a - r - 1] + t),
                  (o[a--] = (c % f) | 0),
                  (t = (c / f) | 0));
              o[a] = ((o[a] + t) % f) | 0;
            }
            for (; !o[--s]; ) o.pop();
            return (
              t ? ++n : o.shift(),
              (e.d = o),
              (e.e = n),
              i ? D(e, p.precision) : e
            );
          }),
        (g.toDecimalPlaces = g.todp =
          function (e, t) {
            var r = this,
              i = r.constructor;
            return (
              (r = new i(r)),
              e === void 0
                ? r
                : (v(e, 0, n),
                  t === void 0 ? (t = i.rounding) : v(t, 0, 8),
                  D(r, e + S(r) + 1, t))
            );
          }),
        (g.toExponential = function (e, t) {
          var r,
            i = this,
            a = i.constructor;
          return (
            e === void 0
              ? (r = k(i, !0))
              : (v(e, 0, n),
                t === void 0 ? (t = a.rounding) : v(t, 0, 8),
                (i = D(new a(i), e + 1, t)),
                (r = k(i, !0, e + 1))),
            r
          );
        }),
        (g.toFixed = function (e, t) {
          var r,
            i,
            a = this,
            o = a.constructor;
          return e === void 0
            ? k(a)
            : (v(e, 0, n),
              t === void 0 ? (t = o.rounding) : v(t, 0, 8),
              (i = D(new o(a), e + S(a) + 1, t)),
              (r = k(i.abs(), !1, e + S(i) + 1)),
              a.isneg() && !a.isZero() ? `-` + r : r);
        }),
        (g.toInteger = g.toint =
          function () {
            var e = this,
              t = e.constructor;
            return D(new t(e), S(e) + 1, t.rounding);
          }),
        (g.toNumber = function () {
          return +this;
        }),
        (g.toPower = g.pow =
          function (e) {
            var t,
              n,
              r,
              o,
              s,
              l,
              u = this,
              f = u.constructor,
              h = 12,
              g = +(e = new f(e));
            if (!e.s) return new f(d);
            if (((u = new f(u)), !u.s)) {
              if (e.s < 1) throw Error(a + `Infinity`);
              return u;
            }
            if (u.eq(d)) return u;
            if (((r = f.precision), e.eq(d))) return D(u, r);
            if (
              ((t = e.e), (n = e.d.length - 1), (l = t >= n), (s = u.s), !l)
            ) {
              if (s < 0) throw Error(a + `NaN`);
            } else if ((n = g < 0 ? -g : g) <= m) {
              for (
                o = new f(d), t = Math.ceil(r / p + 4), i = !1;
                n % 2 && ((o = o.times(u)), A(o.d, t)), (n = c(n / 2)), n !== 0;
              )
                ((u = u.times(u)), A(u.d, t));
              return ((i = !0), e.s < 0 ? new f(d).div(o) : D(o, r));
            }
            return (
              (s = s < 0 && e.d[Math.max(t, n)] & 1 ? -1 : 1),
              (u.s = 1),
              (i = !1),
              (o = e.times(T(u, r + h))),
              (i = !0),
              (o = x(o)),
              (o.s = s),
              o
            );
          }),
        (g.toPrecision = function (e, t) {
          var r,
            i,
            a = this,
            o = a.constructor;
          return (
            e === void 0
              ? ((r = S(a)), (i = k(a, r <= o.toExpNeg || r >= o.toExpPos)))
              : (v(e, 1, n),
                t === void 0 ? (t = o.rounding) : v(t, 0, 8),
                (a = D(new o(a), e, t)),
                (r = S(a)),
                (i = k(a, e <= r || r <= o.toExpNeg, e))),
            i
          );
        }),
        (g.toSignificantDigits = g.tosd =
          function (e, t) {
            var r = this,
              i = r.constructor;
            return (
              e === void 0
                ? ((e = i.precision), (t = i.rounding))
                : (v(e, 1, n), t === void 0 ? (t = i.rounding) : v(t, 0, 8)),
              D(new i(r), e, t)
            );
          }),
        (g.toString =
          g.valueOf =
          g.val =
          g.toJSON =
            function () {
              var e = this,
                t = S(e),
                n = e.constructor;
              return k(e, t <= n.toExpNeg || t >= n.toExpPos);
            }));
      function _(e, t) {
        var n,
          r,
          a,
          o,
          s,
          c,
          l,
          u,
          d = e.constructor,
          m = d.precision;
        if (!e.s || !t.s) return (t.s || (t = new d(e)), i ? D(t, m) : t);
        if (
          ((l = e.d),
          (u = t.d),
          (s = e.e),
          (a = t.e),
          (l = l.slice()),
          (o = s - a),
          o)
        ) {
          for (
            o < 0
              ? ((r = l), (o = -o), (c = u.length))
              : ((r = u), (a = s), (c = l.length)),
              s = Math.ceil(m / p),
              c = s > c ? s + 1 : c + 1,
              o > c && ((o = c), (r.length = 1)),
              r.reverse();
            o--;
          )
            r.push(0);
          r.reverse();
        }
        for (
          c = l.length,
            o = u.length,
            c - o < 0 && ((o = c), (r = u), (u = l), (l = r)),
            n = 0;
          o;
        )
          ((n = ((l[--o] = l[o] + u[o] + n) / f) | 0), (l[o] %= f));
        for (n && (l.unshift(n), ++a), c = l.length; l[--c] == 0; ) l.pop();
        return ((t.d = l), (t.e = a), i ? D(t, m) : t);
      }
      function v(e, t, n) {
        if (e !== ~~e || e < t || e > n) throw Error(o + e);
      }
      function y(e) {
        var t,
          n,
          r,
          i = e.length - 1,
          a = ``,
          o = e[0];
        if (i > 0) {
          for (a += o, t = 1; t < i; t++)
            ((r = e[t] + ``), (n = p - r.length), n && (a += w(n)), (a += r));
          ((o = e[t]), (r = o + ``), (n = p - r.length), n && (a += w(n)));
        } else if (o === 0) return `0`;
        for (; o % 10 == 0; ) o /= 10;
        return a + o;
      }
      var b = (function () {
        function e(e, t) {
          var n,
            r = 0,
            i = e.length;
          for (e = e.slice(); i--; )
            ((n = e[i] * t + r), (e[i] = (n % f) | 0), (r = (n / f) | 0));
          return (r && e.unshift(r), e);
        }
        function t(e, t, n, r) {
          var i, a;
          if (n != r) a = n > r ? 1 : -1;
          else
            for (i = a = 0; i < n; i++)
              if (e[i] != t[i]) {
                a = e[i] > t[i] ? 1 : -1;
                break;
              }
          return a;
        }
        function n(e, t, n) {
          for (var r = 0; n--; )
            ((e[n] -= r), (r = +(e[n] < t[n])), (e[n] = r * f + e[n] - t[n]));
          for (; !e[0] && e.length > 1; ) e.shift();
        }
        return function (r, i, o, s) {
          var c,
            l,
            u,
            d,
            m,
            h,
            g,
            _,
            v,
            y,
            b,
            x,
            C,
            w,
            T,
            E,
            O,
            k,
            A = r.constructor,
            j = r.s == i.s ? 1 : -1,
            M = r.d,
            N = i.d;
          if (!r.s) return new A(r);
          if (!i.s) throw Error(a + `Division by zero`);
          for (
            l = r.e - i.e,
              O = N.length,
              T = M.length,
              g = new A(j),
              _ = g.d = [],
              u = 0;
            N[u] == (M[u] || 0);
          )
            ++u;
          if (
            (N[u] > (M[u] || 0) && --l,
            (x = o == null ? (o = A.precision) : s ? o + (S(r) - S(i)) + 1 : o),
            x < 0)
          )
            return new A(0);
          if (((x = (x / p + 2) | 0), (u = 0), O == 1))
            for (d = 0, N = N[0], x++; (u < T || d) && x--; u++)
              ((C = d * f + (M[u] || 0)),
                (_[u] = (C / N) | 0),
                (d = (C % N) | 0));
          else {
            for (
              d = (f / (N[0] + 1)) | 0,
                d > 1 &&
                  ((N = e(N, d)),
                  (M = e(M, d)),
                  (O = N.length),
                  (T = M.length)),
                w = O,
                v = M.slice(0, O),
                y = v.length;
              y < O;
            )
              v[y++] = 0;
            ((k = N.slice()), k.unshift(0), (E = N[0]), N[1] >= f / 2 && ++E);
            do
              ((d = 0),
                (c = t(N, v, O, y)),
                c < 0
                  ? ((b = v[0]),
                    O != y && (b = b * f + (v[1] || 0)),
                    (d = (b / E) | 0),
                    d > 1
                      ? (d >= f && (d = f - 1),
                        (m = e(N, d)),
                        (h = m.length),
                        (y = v.length),
                        (c = t(m, v, h, y)),
                        c == 1 && (d--, n(m, O < h ? k : N, h)))
                      : (d == 0 && (c = d = 1), (m = N.slice())),
                    (h = m.length),
                    h < y && m.unshift(0),
                    n(v, m, y),
                    c == -1 &&
                      ((y = v.length),
                      (c = t(N, v, O, y)),
                      c < 1 && (d++, n(v, O < y ? k : N, y))),
                    (y = v.length))
                  : c === 0 && (d++, (v = [0])),
                (_[u++] = d),
                c && v[0] ? (v[y++] = M[w] || 0) : ((v = [M[w]]), (y = 1)));
            while ((w++ < T || v[0] !== void 0) && x--);
          }
          return (_[0] || _.shift(), (g.e = l), D(g, s ? o + S(g) + 1 : o));
        };
      })();
      function x(e, t) {
        var n,
          r,
          a,
          o,
          c,
          u,
          f = 0,
          p = 0,
          m = e.constructor,
          h = m.precision;
        if (S(e) > 16) throw Error(s + S(e));
        if (!e.s) return new m(d);
        for (
          t == null ? ((i = !1), (u = h)) : (u = t), c = new m(0.03125);
          e.abs().gte(0.1);
        )
          ((e = e.times(c)), (p += 5));
        for (
          r = ((Math.log(l(2, p)) / Math.LN10) * 2 + 5) | 0,
            u += r,
            n = a = o = new m(d),
            m.precision = u;
          ;
        ) {
          if (
            ((a = D(a.times(e), u)),
            (n = n.times(++f)),
            (c = o.plus(b(a, n, u))),
            y(c.d).slice(0, u) === y(o.d).slice(0, u))
          ) {
            for (; p--; ) o = D(o.times(o), u);
            return ((m.precision = h), t == null ? ((i = !0), D(o, h)) : o);
          }
          o = c;
        }
      }
      function S(e) {
        for (var t = e.e * p, n = e.d[0]; n >= 10; n /= 10) t++;
        return t;
      }
      function C(e, t, n) {
        if (t > e.LN10.sd())
          throw (
            (i = !0),
            n && (e.precision = n),
            Error(a + `LN10 precision limit exceeded`)
          );
        return D(new e(e.LN10), t);
      }
      function w(e) {
        for (var t = ``; e--; ) t += `0`;
        return t;
      }
      function T(e, t) {
        var n,
          r,
          o,
          s,
          c,
          l,
          u,
          f,
          p,
          m = 1,
          h = 10,
          g = e,
          _ = g.d,
          v = g.constructor,
          x = v.precision;
        if (g.s < 1) throw Error(a + (g.s ? `NaN` : `-Infinity`));
        if (g.eq(d)) return new v(0);
        if ((t == null ? ((i = !1), (f = x)) : (f = t), g.eq(10)))
          return (t ?? (i = !0), C(v, f));
        if (
          ((f += h),
          (v.precision = f),
          (n = y(_)),
          (r = n.charAt(0)),
          (s = S(g)),
          Math.abs(s) < 0x5543df729c000)
        ) {
          for (; (r < 7 && r != 1) || (r == 1 && n.charAt(1) > 3); )
            ((g = g.times(e)), (n = y(g.d)), (r = n.charAt(0)), m++);
          ((s = S(g)),
            r > 1
              ? ((g = new v(`0.` + n)), s++)
              : (g = new v(r + `.` + n.slice(1))));
        } else
          return (
            (u = C(v, f + 2, x).times(s + ``)),
            (g = T(new v(r + `.` + n.slice(1)), f - h).plus(u)),
            (v.precision = x),
            t == null ? ((i = !0), D(g, x)) : g
          );
        for (
          l = c = g = b(g.minus(d), g.plus(d), f), p = D(g.times(g), f), o = 3;
          ;
        ) {
          if (
            ((c = D(c.times(p), f)),
            (u = l.plus(b(c, new v(o), f))),
            y(u.d).slice(0, f) === y(l.d).slice(0, f))
          )
            return (
              (l = l.times(2)),
              s !== 0 && (l = l.plus(C(v, f + 2, x).times(s + ``))),
              (l = b(l, new v(m), f)),
              (v.precision = x),
              t == null ? ((i = !0), D(l, x)) : l
            );
          ((l = u), (o += 2));
        }
      }
      function E(e, t) {
        var n, r, a;
        for (
          (n = t.indexOf(`.`)) > -1 && (t = t.replace(`.`, ``)),
            (r = t.search(/e/i)) > 0
              ? (n < 0 && (n = r),
                (n += +t.slice(r + 1)),
                (t = t.substring(0, r)))
              : n < 0 && (n = t.length),
            r = 0;
          t.charCodeAt(r) === 48;
        )
          ++r;
        for (a = t.length; t.charCodeAt(a - 1) === 48; ) --a;
        if (((t = t.slice(r, a)), t)) {
          if (
            ((a -= r),
            (n = n - r - 1),
            (e.e = c(n / p)),
            (e.d = []),
            (r = (n + 1) % p),
            n < 0 && (r += p),
            r < a)
          ) {
            for (r && e.d.push(+t.slice(0, r)), a -= p; r < a; )
              e.d.push(+t.slice(r, (r += p)));
            ((t = t.slice(r)), (r = p - t.length));
          } else r -= a;
          for (; r--; ) t += `0`;
          if ((e.d.push(+t), i && (e.e > h || e.e < -h))) throw Error(s + n);
        } else ((e.s = 0), (e.e = 0), (e.d = [0]));
        return e;
      }
      function D(e, t, n) {
        var r,
          a,
          o,
          u,
          d,
          m,
          g,
          _,
          v = e.d;
        for (u = 1, o = v[0]; o >= 10; o /= 10) u++;
        if (((r = t - u), r < 0)) ((r += p), (a = t), (g = v[(_ = 0)]));
        else {
          if (((_ = Math.ceil((r + 1) / p)), (o = v.length), _ >= o)) return e;
          for (g = o = v[_], u = 1; o >= 10; o /= 10) u++;
          ((r %= p), (a = r - p + u));
        }
        if (
          (n !== void 0 &&
            ((o = l(10, u - a - 1)),
            (d = ((g / o) % 10) | 0),
            (m = t < 0 || v[_ + 1] !== void 0 || g % o),
            (m =
              n < 4
                ? (d || m) && (n == 0 || n == (e.s < 0 ? 3 : 2))
                : d > 5 ||
                  (d == 5 &&
                    (n == 4 ||
                      m ||
                      (n == 6 &&
                        ((r > 0 ? (a > 0 ? g / l(10, u - a) : 0) : v[_ - 1]) %
                          10) &
                          1) ||
                      n == (e.s < 0 ? 8 : 7))))),
          t < 1 || !v[0])
        )
          return (
            m
              ? ((o = S(e)),
                (v.length = 1),
                (t = t - o - 1),
                (v[0] = l(10, (p - (t % p)) % p)),
                (e.e = c(-t / p) || 0))
              : ((v.length = 1), (v[0] = e.e = e.s = 0)),
            e
          );
        if (
          (r == 0
            ? ((v.length = _), (o = 1), _--)
            : ((v.length = _ + 1),
              (o = l(10, p - r)),
              (v[_] = a > 0 ? (((g / l(10, u - a)) % l(10, a)) | 0) * o : 0)),
          m)
        )
          for (;;)
            if (_ == 0) {
              (v[0] += o) == f && ((v[0] = 1), ++e.e);
              break;
            } else {
              if (((v[_] += o), v[_] != f)) break;
              ((v[_--] = 0), (o = 1));
            }
        for (r = v.length; v[--r] === 0; ) v.pop();
        if (i && (e.e > h || e.e < -h)) throw Error(s + S(e));
        return e;
      }
      function O(e, t) {
        var n,
          r,
          a,
          o,
          s,
          c,
          l,
          u,
          d,
          m,
          h = e.constructor,
          g = h.precision;
        if (!e.s || !t.s)
          return (t.s ? (t.s = -t.s) : (t = new h(e)), i ? D(t, g) : t);
        if (
          ((l = e.d),
          (m = t.d),
          (r = t.e),
          (u = e.e),
          (l = l.slice()),
          (s = u - r),
          s)
        ) {
          for (
            d = s < 0,
              d
                ? ((n = l), (s = -s), (c = m.length))
                : ((n = m), (r = u), (c = l.length)),
              a = Math.max(Math.ceil(g / p), c) + 2,
              s > a && ((s = a), (n.length = 1)),
              n.reverse(),
              a = s;
            a--;
          )
            n.push(0);
          n.reverse();
        } else {
          for (
            a = l.length, c = m.length, d = a < c, d && (c = a), a = 0;
            a < c;
            a++
          )
            if (l[a] != m[a]) {
              d = l[a] < m[a];
              break;
            }
          s = 0;
        }
        for (
          d && ((n = l), (l = m), (m = n), (t.s = -t.s)),
            c = l.length,
            a = m.length - c;
          a > 0;
          --a
        )
          l[c++] = 0;
        for (a = m.length; a > s; ) {
          if (l[--a] < m[a]) {
            for (o = a; o && l[--o] === 0; ) l[o] = f - 1;
            (--l[o], (l[a] += f));
          }
          l[a] -= m[a];
        }
        for (; l[--c] === 0; ) l.pop();
        for (; l[0] === 0; l.shift()) --r;
        return l[0] ? ((t.d = l), (t.e = r), i ? D(t, g) : t) : new h(0);
      }
      function k(e, t, n) {
        var r,
          i = S(e),
          a = y(e.d),
          o = a.length;
        return (
          t
            ? (n && (r = n - o) > 0
                ? (a = a.charAt(0) + `.` + a.slice(1) + w(r))
                : o > 1 && (a = a.charAt(0) + `.` + a.slice(1)),
              (a = a + (i < 0 ? `e` : `e+`) + i))
            : i < 0
              ? ((a = `0.` + w(-i - 1) + a),
                n && (r = n - o) > 0 && (a += w(r)))
              : i >= o
                ? ((a += w(i + 1 - o)),
                  n && (r = n - i - 1) > 0 && (a = a + `.` + w(r)))
                : ((r = i + 1) < o && (a = a.slice(0, r) + `.` + a.slice(r)),
                  n &&
                    (r = n - o) > 0 &&
                    (i + 1 === o && (a += `.`), (a += w(r)))),
          e.s < 0 ? `-` + a : a
        );
      }
      function A(e, t) {
        if (e.length > t) return ((e.length = t), !0);
      }
      function j(e) {
        var t, n, r;
        function i(e) {
          var t = this;
          if (!(t instanceof i)) return new i(e);
          if (((t.constructor = i), e instanceof i))
            ((t.s = e.s), (t.e = e.e), (t.d = (e = e.d) ? e.slice() : e));
          else {
            if (typeof e == `number`) {
              if (e * 0 != 0) throw Error(o + e);
              if (e > 0) t.s = 1;
              else if (e < 0) ((e = -e), (t.s = -1));
              else {
                ((t.s = 0), (t.e = 0), (t.d = [0]));
                return;
              }
              if (e === ~~e && e < 1e7) {
                ((t.e = 0), (t.d = [e]));
                return;
              }
              return E(t, e.toString());
            }
            if (typeof e != `string`) throw Error(o + e);
            if (
              (e.charCodeAt(0) === 45
                ? ((e = e.slice(1)), (t.s = -1))
                : (t.s = 1),
              u.test(e))
            )
              E(t, e);
            else throw Error(o + e);
          }
        }
        if (
          ((i.prototype = g),
          (i.ROUND_UP = 0),
          (i.ROUND_DOWN = 1),
          (i.ROUND_CEIL = 2),
          (i.ROUND_FLOOR = 3),
          (i.ROUND_HALF_UP = 4),
          (i.ROUND_HALF_DOWN = 5),
          (i.ROUND_HALF_EVEN = 6),
          (i.ROUND_HALF_CEIL = 7),
          (i.ROUND_HALF_FLOOR = 8),
          (i.clone = j),
          (i.config = i.set = M),
          e === void 0 && (e = {}),
          e)
        )
          for (
            r = [`precision`, `rounding`, `toExpNeg`, `toExpPos`, `LN10`],
              t = 0;
            t < r.length;
          )
            e.hasOwnProperty((n = r[t++])) || (e[n] = this[n]);
        return (i.config(e), i);
      }
      function M(e) {
        if (!e || typeof e != `object`) throw Error(a + `Object expected`);
        var t,
          r,
          i,
          s = [
            `precision`,
            1,
            n,
            `rounding`,
            0,
            8,
            `toExpNeg`,
            -1 / 0,
            0,
            `toExpPos`,
            0,
            1 / 0,
          ];
        for (t = 0; t < s.length; t += 3)
          if ((i = e[(r = s[t])]) !== void 0) {
            if (c(i) === i && i >= s[t + 1] && i <= s[t + 2]) this[r] = i;
            else throw Error(o + r + `: ` + i);
          }
        if ((i = e[(r = `LN10`)]) !== void 0) {
          if (i == Math.LN10) this[r] = new this(i);
          else throw Error(o + r + `: ` + i);
        }
        return this;
      }
      ((r = j(r)),
        (r.default = r.Decimal = r),
        (d = new r(1)),
        typeof define == `function` && define.amd
          ? define(function () {
              return r;
            })
          : t !== void 0 && t.exports
            ? (t.exports = r)
            : ((e ||=
                typeof self < `u` && self && self.self == self
                  ? self
                  : Function(`return this`)()),
              (e.Decimal = r)));
    })(n);
  })(),
);
function tp(e) {
  return e === 0
    ? 1
    : Math.floor(new K.default(e).abs().log(10).toNumber()) + 1;
}
function np(e, t, n) {
  for (var r = new K.default(e), i = 0, a = []; r.lt(t) && i < 1e5; )
    (a.push(r.toNumber()), (r = r.add(n)), i++);
  return a;
}
function rp(e, t) {
  return cp(e) || sp(e, t) || ap(e, t) || ip();
}
function ip() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ap(e, t) {
  if (e) {
    if (typeof e == `string`) return op(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? op(e, t)
          : void 0
    );
  }
}
function op(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function sp(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function cp(e) {
  if (Array.isArray(e)) return e;
}
var lp = (e) => {
    var t = rp(e, 2),
      n = t[0],
      r = t[1],
      i = n,
      a = r;
    return (n > r && ((i = r), (a = n)), [i, a]);
  },
  up = (e, t, n) => {
    if (e.lte(0)) return new K.default(0);
    var r = tp(e.toNumber()),
      i = new K.default(10).pow(r),
      a = e.div(i),
      o = r === 1 ? 0.1 : 0.05,
      s = new K.default(Math.ceil(a.div(o).toNumber())).add(n).mul(o).mul(i);
    return t
      ? new K.default(s.toNumber())
      : new K.default(Math.ceil(s.toNumber()));
  },
  dp = (e, t, n) => {
    if (e.lte(0)) return new K.default(0);
    var r = [1, 2, 2.5, 5],
      i = e.toNumber(),
      a = Math.floor(new K.default(i).abs().log(10).toNumber()),
      o = new K.default(10).pow(a),
      s = e.div(o).toNumber(),
      c = r.findIndex((e) => e >= s - 1e-10);
    if ((c === -1 && ((o = o.mul(10)), (c = 0)), (c += n), c >= r.length)) {
      var l = Math.floor(c / r.length);
      ((c %= r.length), (o = o.mul(new K.default(10).pow(l))));
    }
    var u = r[c] ?? 1,
      d = new K.default(u).mul(o);
    return t ? d : new K.default(Math.ceil(d.toNumber()));
  },
  fp = (e, t, n) => {
    var r = new K.default(1),
      i = new K.default(e);
    if (!i.isint() && n) {
      var a = Math.abs(e);
      a < 1
        ? ((r = new K.default(10).pow(tp(e) - 1)),
          (i = new K.default(Math.floor(i.div(r).toNumber())).mul(r)))
        : a > 1 && (i = new K.default(Math.floor(e)));
    } else
      e === 0
        ? (i = new K.default(Math.floor((t - 1) / 2)))
        : n || (i = new K.default(Math.floor(e)));
    for (var o = Math.floor((t - 1) / 2), s = [], c = 0; c < t; c++)
      s.push(i.add(new K.default(c - o).mul(r)).toNumber());
    return s;
  },
  pp = function (e, t, n, r) {
    var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0,
      a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : up;
    if (!Number.isFinite((t - e) / (n - 1)))
      return {
        step: new K.default(0),
        tickMin: new K.default(0),
        tickMax: new K.default(0),
      };
    var o = a(new K.default(t).sub(e).div(n - 1), r, i),
      s;
    e <= 0 && t >= 0
      ? (s = new K.default(0))
      : ((s = new K.default(e).add(t).div(2)),
        (s = s.sub(new K.default(s).mod(o))));
    var c = Math.ceil(s.sub(e).div(o).toNumber()),
      l = Math.ceil(new K.default(t).sub(s).div(o).toNumber()),
      u = c + l + 1;
    return u > n
      ? pp(e, t, n, r, i + 1, a)
      : (u < n &&
          ((l = t > 0 ? l + (n - u) : l), (c = t > 0 ? c : c + (n - u))),
        {
          step: o,
          tickMin: s.sub(new K.default(c).mul(o)),
          tickMax: s.add(new K.default(l).mul(o)),
        });
  },
  mp = function (e) {
    var t = rp(e, 2),
      n = t[0],
      r = t[1],
      i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
      a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
      o =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : `auto`,
      s = Math.max(i, 2),
      c = rp(lp([n, r]), 2),
      l = c[0],
      u = c[1];
    if (l === -1 / 0 || u === 1 / 0) {
      var d =
        u === 1 / 0
          ? [l, ...Array(i - 1).fill(1 / 0)]
          : [...Array(i - 1).fill(-1 / 0), u];
      return n > r ? d.reverse() : d;
    }
    if (l === u) return fp(l, i, a);
    var f = pp(l, u, s, a, 0, o === `snap125` ? dp : up),
      p = f.step,
      m = f.tickMin,
      h = f.tickMax,
      g = np(m, h.add(new K.default(0.1).mul(p)), p);
    return n > r ? g.reverse() : g;
  },
  hp = function (e, t) {
    var n = rp(e, 2),
      r = n[0],
      i = n[1],
      a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
      o =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : `auto`,
      s = rp(lp([r, i]), 2),
      c = s[0],
      l = s[1];
    if (c === -1 / 0 || l === 1 / 0) return [r, i];
    if (c === l) return [c];
    var u = o === `snap125` ? dp : up,
      d = Math.max(t, 2),
      f = u(new K.default(l).sub(c).div(d - 1), a, 0),
      p = [...np(new K.default(c), new K.default(l), f), l];
    if (a === !1) {
      p = p.map((e) => Math.round(e));
      var m = p.length - 1;
      m > 0 && p[m] === p[m - 1] && (p = p.slice(0, m));
    }
    return r > i ? p.reverse() : p;
  },
  gp = (e) => e.rootProps.maxBarSize,
  _p = (e) => e.rootProps.barGap,
  vp = (e) => e.rootProps.barCategoryGap,
  yp = (e) => e.rootProps.barSize,
  bp = (e) => e.rootProps.stackOffset,
  xp = (e) => e.rootProps.reverseStackOrder,
  Sp = (e) => e.options.chartName,
  Cp = (e) => e.rootProps.syncId,
  wp = (e) => e.rootProps.syncMethod,
  Tp = (e) => e.options.eventEmitter,
  Ep = {
    grid: -100,
    barBackground: -50,
    area: 100,
    cursorRectangle: 200,
    bar: 300,
    line: 400,
    axis: 500,
    scatter: 600,
    activeBar: 1e3,
    cursorLine: 1100,
    activeDot: 1200,
    label: 2e3,
  },
  Dp = {
    allowDecimals: !1,
    allowDuplicatedCategory: !0,
    allowDataOverflow: !1,
    angle: 0,
    angleAxisId: 0,
    axisLine: !0,
    axisLineType: `polygon`,
    cx: 0,
    cy: 0,
    hide: !1,
    includeHidden: !1,
    label: !1,
    niceTicks: `auto`,
    orientation: `outer`,
    reversed: !1,
    scale: `auto`,
    tick: !0,
    tickLine: !0,
    tickSize: 8,
    type: `auto`,
    zIndex: Ep.axis,
  },
  Op = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: !0,
    angle: 0,
    axisLine: !0,
    includeHidden: !1,
    hide: !1,
    niceTicks: `auto`,
    label: !1,
    orientation: `right`,
    radiusAxisId: 0,
    reversed: !1,
    scale: `auto`,
    stroke: `#ccc`,
    tick: !0,
    tickCount: 5,
    tickLine: !0,
    type: `auto`,
    zIndex: Ep.axis,
  },
  kp = (e, t) => {
    if (e && t) return e != null && e.reversed ? [t[1], t[0]] : t;
  };
function Ap(e, t, n) {
  if (n !== `auto`) return n;
  if (e != null) return ks(e, t) ? `category` : `number`;
}
function jp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Mp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? jp(Object(n), !0).forEach(function (t) {
          Np(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : jp(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Np(e, t, n) {
  return (
    (t = Pp(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Pp(e) {
  var t = Fp(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Fp(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Ip = {
    allowDataOverflow: Dp.allowDataOverflow,
    allowDecimals: Dp.allowDecimals,
    allowDuplicatedCategory: !1,
    dataKey: void 0,
    domain: void 0,
    id: Dp.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: Dp.reversed,
    scale: Dp.scale,
    tick: Dp.tick,
    tickCount: void 0,
    ticks: void 0,
    type: Dp.type,
    unit: void 0,
    niceTicks: `auto`,
  },
  Lp = {
    allowDataOverflow: Op.allowDataOverflow,
    allowDecimals: Op.allowDecimals,
    allowDuplicatedCategory: Op.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: Op.radiusAxisId,
    includeHidden: Op.includeHidden,
    name: void 0,
    reversed: Op.reversed,
    scale: Op.scale,
    tick: Op.tick,
    tickCount: Op.tickCount,
    ticks: void 0,
    type: Op.type,
    unit: void 0,
    niceTicks: `auto`,
  },
  Rp = z(
    [
      (e, t) => {
        if (t != null) return e.polarAxis.angleAxis[t];
      },
      tl,
    ],
    (e, t) => {
      if (e != null) return e;
      var n = Ap(t, `angleAxis`, Ip.type) ?? `category`;
      return Mp(Mp({}, Ip), {}, { type: n });
    },
  ),
  zp = z([(e, t) => e.polarAxis.radiusAxis[t], tl], (e, t) => {
    if (e != null) return e;
    var n = Ap(t, `radiusAxis`, Lp.type) ?? `category`;
    return Mp(Mp({}, Lp), {}, { type: n });
  }),
  Bp = (e) => e.polarOptions,
  Vp = z([Ks, qs, W], pf),
  Hp = z([Bp, Vp], (e, t) => {
    if (e != null) return Oe(e.innerRadius, t, 0);
  }),
  Up = z([Bp, Vp], (e, t) => {
    if (e != null) return Oe(e.outerRadius, t, t * 0.8);
  }),
  Wp = z([Bp], (e) => (e == null ? [0, 0] : [e.startAngle, e.endAngle]));
z([Rp, Wp], kp);
var Gp = z([Vp, Hp, Up], (e, t, n) => {
  if (e != null && t != null && n != null) return [t, n];
});
z([zp, Gp], kp);
var Kp = z([G, Bp, Hp, Up, Ks, qs], (e, t, n, r, i, a) => {
    if (
      !(
        (e !== `centric` && e !== `radial`) ||
        t == null ||
        n == null ||
        r == null
      )
    ) {
      var o = t.cx,
        s = t.cy,
        c = t.startAngle,
        l = t.endAngle;
      return {
        cx: Oe(o, i, i / 2),
        cy: Oe(s, a, a / 2),
        innerRadius: n,
        outerRadius: r,
        startAngle: c,
        endAngle: l,
        clockWise: !1,
      };
    }
  }),
  qp = (e, t) => t,
  Jp = (e, t, n) => n;
function Yp(e) {
  return e?.id;
}
function Xp(e, t, n) {
  var r = t.chartData,
    i = r === void 0 ? [] : r,
    a = n.allowDuplicatedCategory,
    o = n.dataKey,
    s = new Map();
  return (
    e.forEach((e) => {
      var t = e.data ?? i;
      if (t != null && t.length !== 0) {
        var n = Yp(e);
        t.forEach((t, r) => {
          var i = o == null || a ? r : String(U(t, o, null)),
            c = U(t, e.dataKey, 0),
            l = s.has(i) ? s.get(i) : {};
          (Object.assign(l, { [n]: c }), s.set(i, l));
        });
      }
    }),
    Array.from(s.values())
  );
}
function Zp(e) {
  return `stackId` in e && e.stackId != null && e.dataKey != null;
}
var Qp = (e, t) =>
  e === t ? !0 : e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1];
function $p(e, t) {
  return Array.isArray(e) &&
    Array.isArray(t) &&
    e.length === 0 &&
    t.length === 0
    ? !0
    : e === t;
}
function em(e, t) {
  if (e.length === t.length) {
    for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }
  return !1;
}
var tm = (e) => {
    var t = G(e);
    return t === `horizontal`
      ? `xAxis`
      : t === `vertical`
        ? `yAxis`
        : t === `centric`
          ? `angleAxis`
          : `radiusAxis`;
  },
  nm = (e) => e.tooltip.settings.axisId;
function rm(e) {
  if (e != null) {
    var t = e.ticks,
      n = e.bandwidth,
      r = e.range(),
      i = [Math.min(...r), Math.max(...r)];
    return {
      domain: () => e.domain(),
      range: (function (e) {
        function t() {
          return e.apply(this, arguments);
        }
        return (
          (t.toString = function () {
            return e.toString();
          }),
          t
        );
      })(() => i),
      rangeMin: () => i[0],
      rangeMax: () => i[1],
      isInRange(e) {
        var t = i[0],
          n = i[1];
        return t <= n ? e >= t && e <= n : e >= n && e <= t;
      },
      bandwidth: n ? () => n.call(e) : void 0,
      ticks: t ? (n) => t.call(e, n) : void 0,
      map: (t, n) => {
        var r = e(t);
        if (r != null) {
          if (e.bandwidth && n != null && n.position) {
            var i = e.bandwidth();
            switch (n.position) {
              case `middle`:
                r += i / 2;
                break;
              case `end`:
                r += i;
            }
          }
          return r;
        }
      },
    };
  }
}
var im = (e, t) => {
  if (t != null)
    switch (e) {
      case `linear`:
        if (!Zf(t)) {
          for (var n, r, i = 0; i < t.length; i++) {
            var a = t[i];
            H(a) &&
              ((n === void 0 || a < n) && (n = a),
              (r === void 0 || a > r) && (r = a));
          }
          return n !== void 0 && r !== void 0 ? [n, r] : void 0;
        }
        return t;
      default:
        return t;
    }
};
function am(e, t) {
  return e == null || t == null
    ? NaN
    : e < t
      ? -1
      : e > t
        ? 1
        : e >= t
          ? 0
          : NaN;
}
function om(e, t) {
  return e == null || t == null
    ? NaN
    : t < e
      ? -1
      : t > e
        ? 1
        : t >= e
          ? 0
          : NaN;
}
function sm(e) {
  let t, n, r;
  e.length === 2
    ? ((t = e === am || e === om ? e : cm), (n = e), (r = e))
    : ((t = am), (n = (t, n) => am(e(t), n)), (r = (t, n) => e(t) - n));
  function i(e, r, i = 0, a = e.length) {
    if (i < a) {
      if (t(r, r) !== 0) return a;
      do {
        let t = (i + a) >>> 1;
        n(e[t], r) < 0 ? (i = t + 1) : (a = t);
      } while (i < a);
    }
    return i;
  }
  function a(e, r, i = 0, a = e.length) {
    if (i < a) {
      if (t(r, r) !== 0) return a;
      do {
        let t = (i + a) >>> 1;
        n(e[t], r) <= 0 ? (i = t + 1) : (a = t);
      } while (i < a);
    }
    return i;
  }
  function o(e, t, n = 0, a = e.length) {
    let o = i(e, t, n, a - 1);
    return o > n && r(e[o - 1], t) > -r(e[o], t) ? o - 1 : o;
  }
  return { left: i, center: o, right: a };
}
function cm() {
  return 0;
}
function lm(e) {
  return e === null ? NaN : +e;
}
function* um(e, t) {
  if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
  else {
    let n = -1;
    for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
  }
}
var dm = sm(am),
  fm = dm.right;
(dm.left, sm(lm).center);
var pm = class extends Map {
  constructor(e, t = _m) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: { value: new Map() },
        _key: { value: t },
      }),
      e != null)
    )
      for (let [t, n] of e) this.set(t, n);
  }
  get(e) {
    return super.get(mm(this, e));
  }
  has(e) {
    return super.has(mm(this, e));
  }
  set(e, t) {
    return super.set(hm(this, e), t);
  }
  delete(e) {
    return super.delete(gm(this, e));
  }
};
function mm({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function hm({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function gm({ _intern: e, _key: t }, n) {
  let r = t(n);
  return (e.has(r) && ((n = e.get(r)), e.delete(r)), n);
}
function _m(e) {
  return typeof e == `object` && e ? e.valueOf() : e;
}
function vm(e = am) {
  if (e === am) return ym;
  if (typeof e != `function`) throw TypeError(`compare is not a function`);
  return (t, n) => {
    let r = e(t, n);
    return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
  };
}
function ym(e, t) {
  return (
    (e == null || !(e >= e)) - (t == null || !(t >= t)) ||
    (e < t ? -1 : +(e > t))
  );
}
Array.prototype.slice;
var bm = Math.sqrt(50),
  xm = Math.sqrt(10),
  Sm = Math.sqrt(2);
function Cm(e, t, n) {
  let r = (t - e) / Math.max(0, n),
    i = Math.floor(Math.log10(r)),
    a = r / 10 ** i,
    o = a >= bm ? 10 : a >= xm ? 5 : a >= Sm ? 2 : 1,
    s,
    c,
    l;
  return (
    i < 0
      ? ((l = 10 ** -i / o),
        (s = Math.round(e * l)),
        (c = Math.round(t * l)),
        s / l < e && ++s,
        c / l > t && --c,
        (l = -l))
      : ((l = 10 ** i * o),
        (s = Math.round(e / l)),
        (c = Math.round(t / l)),
        s * l < e && ++s,
        c * l > t && --c),
    c < s && 0.5 <= n && n < 2 ? Cm(e, t, n * 2) : [s, c, l]
  );
}
function wm(e, t, n) {
  if (((t = +t), (e = +e), (n = +n), !(n > 0))) return [];
  if (e === t) return [e];
  let r = t < e,
    [i, a, o] = r ? Cm(t, e, n) : Cm(e, t, n);
  if (!(a >= i)) return [];
  let s = a - i + 1,
    c = Array(s);
  if (r) {
    if (o < 0) for (let e = 0; e < s; ++e) c[e] = (a - e) / -o;
    else for (let e = 0; e < s; ++e) c[e] = (a - e) * o;
  } else if (o < 0) for (let e = 0; e < s; ++e) c[e] = (i + e) / -o;
  else for (let e = 0; e < s; ++e) c[e] = (i + e) * o;
  return c;
}
function Tm(e, t, n) {
  return ((t = +t), (e = +e), (n = +n), Cm(e, t, n)[2]);
}
function Em(e, t, n) {
  ((t = +t), (e = +e), (n = +n));
  let r = t < e,
    i = r ? Tm(t, e, n) : Tm(e, t, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Dm(e, t) {
  let n;
  if (t === void 0)
    for (let t of e)
      t != null && (n < t || (n === void 0 && t >= t)) && (n = t);
  else {
    let r = -1;
    for (let i of e)
      (i = t(i, ++r, e)) != null &&
        (n < i || (n === void 0 && i >= i)) &&
        (n = i);
  }
  return n;
}
function Om(e, t) {
  let n;
  if (t === void 0)
    for (let t of e)
      t != null && (n > t || (n === void 0 && t >= t)) && (n = t);
  else {
    let r = -1;
    for (let i of e)
      (i = t(i, ++r, e)) != null &&
        (n > i || (n === void 0 && i >= i)) &&
        (n = i);
  }
  return n;
}
function km(e, t, n = 0, r = 1 / 0, i) {
  if (
    ((t = Math.floor(t)),
    (n = Math.floor(Math.max(0, n))),
    (r = Math.floor(Math.min(e.length - 1, r))),
    !(n <= t && t <= r))
  )
    return e;
  for (i = i === void 0 ? ym : vm(i); r > n; ) {
    if (r - n > 600) {
      let a = r - n + 1,
        o = t - n + 1,
        s = Math.log(a),
        c = 0.5 * Math.exp((2 * s) / 3),
        l = 0.5 * Math.sqrt((s * c * (a - c)) / a) * (o - a / 2 < 0 ? -1 : 1),
        u = Math.max(n, Math.floor(t - (o * c) / a + l)),
        d = Math.min(r, Math.floor(t + ((a - o) * c) / a + l));
      km(e, t, u, d, i);
    }
    let a = e[t],
      o = n,
      s = r;
    for (Am(e, n, t), i(e[r], a) > 0 && Am(e, n, r); o < s; ) {
      for (Am(e, o, s), ++o, --s; i(e[o], a) < 0; ) ++o;
      for (; i(e[s], a) > 0; ) --s;
    }
    (i(e[n], a) === 0 ? Am(e, n, s) : (++s, Am(e, s, r)),
      s <= t && (n = s + 1),
      t <= s && (r = s - 1));
  }
  return e;
}
function Am(e, t, n) {
  let r = e[t];
  ((e[t] = e[n]), (e[n] = r));
}
function jm(e, t, n) {
  if (((e = Float64Array.from(um(e, n))), (r = e.length) && !isNaN((t = +t)))) {
    if (t <= 0 || r < 2) return Om(e);
    if (t >= 1) return Dm(e);
    var r,
      i = (r - 1) * t,
      a = Math.floor(i),
      o = Dm(km(e, a).subarray(0, a + 1));
    return o + (Om(e.subarray(a + 1)) - o) * (i - a);
  }
}
function Mm(e, t, n = lm) {
  if ((r = e.length) && !isNaN((t = +t))) {
    if (t <= 0 || r < 2) return +n(e[0], 0, e);
    if (t >= 1) return +n(e[r - 1], r - 1, e);
    var r,
      i = (r - 1) * t,
      a = Math.floor(i),
      o = +n(e[a], a, e);
    return o + (+n(e[a + 1], a + 1, e) - o) * (i - a);
  }
}
function Nm(e, t, n) {
  ((e = +e),
    (t = +t),
    (n = (i = arguments.length) < 2 ? ((t = e), (e = 0), 1) : i < 3 ? 1 : +n));
  for (
    var r = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, a = Array(i);
    ++r < i;
  )
    a[r] = e + r * n;
  return a;
}
function Pm(e, t, n) {
  ((e.prototype = t.prototype = n), (n.constructor = e));
}
function Fm(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Im() {}
var Lm = 0.7,
  Rm = 1 / Lm,
  zm = `\\s*([+-]?\\d+)\\s*`,
  Bm = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`,
  Vm = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`,
  Hm = /^#([0-9a-f]{3,8})$/,
  Um = RegExp(`^rgb\\(${zm},${zm},${zm}\\)$`),
  Wm = RegExp(`^rgb\\(${Vm},${Vm},${Vm}\\)$`),
  Gm = RegExp(`^rgba\\(${zm},${zm},${zm},${Bm}\\)$`),
  Km = RegExp(`^rgba\\(${Vm},${Vm},${Vm},${Bm}\\)$`),
  qm = RegExp(`^hsl\\(${Bm},${Vm},${Vm}\\)$`),
  Jm = RegExp(`^hsla\\(${Bm},${Vm},${Vm},${Bm}\\)$`),
  Ym = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
Pm(Im, eh, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Xm,
  formatHex: Xm,
  formatHex8: Zm,
  formatHsl: Qm,
  formatRgb: $m,
  toString: $m,
});
function Xm() {
  return this.rgb().formatHex();
}
function Zm() {
  return this.rgb().formatHex8();
}
function Qm() {
  return ph(this).formatHsl();
}
function $m() {
  return this.rgb().formatRgb();
}
function eh(e) {
  var t, n;
  return (
    (e = (e + ``).trim().toLowerCase()),
    (t = Hm.exec(e))
      ? ((n = t[1].length),
        (t = parseInt(t[1], 16)),
        n === 6
          ? th(t)
          : n === 3
            ? new ah(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : n === 8
              ? nh(
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  (t & 255) / 255,
                )
              : n === 4
                ? nh(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = Um.exec(e))
        ? new ah(t[1], t[2], t[3], 1)
        : (t = Wm.exec(e))
          ? new ah(
              (t[1] * 255) / 100,
              (t[2] * 255) / 100,
              (t[3] * 255) / 100,
              1,
            )
          : (t = Gm.exec(e))
            ? nh(t[1], t[2], t[3], t[4])
            : (t = Km.exec(e))
              ? nh(
                  (t[1] * 255) / 100,
                  (t[2] * 255) / 100,
                  (t[3] * 255) / 100,
                  t[4],
                )
              : (t = qm.exec(e))
                ? fh(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = Jm.exec(e))
                  ? fh(t[1], t[2] / 100, t[3] / 100, t[4])
                  : Ym.hasOwnProperty(e)
                    ? th(Ym[e])
                    : e === `transparent`
                      ? new ah(NaN, NaN, NaN, 0)
                      : null
  );
}
function th(e) {
  return new ah((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function nh(e, t, n, r) {
  return (r <= 0 && (e = t = n = NaN), new ah(e, t, n, r));
}
function rh(e) {
  return (
    e instanceof Im || (e = eh(e)),
    e ? ((e = e.rgb()), new ah(e.r, e.g, e.b, e.opacity)) : new ah()
  );
}
function ih(e, t, n, r) {
  return arguments.length === 1 ? rh(e) : new ah(e, t, n, r ?? 1);
}
function ah(e, t, n, r) {
  ((this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r));
}
Pm(
  ah,
  ih,
  Fm(Im, {
    brighter(e) {
      return (
        (e = e == null ? Rm : Rm ** +e),
        new ah(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Lm : Lm ** +e),
        new ah(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new ah(uh(this.r), uh(this.g), uh(this.b), lh(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: oh,
    formatHex: oh,
    formatHex8: sh,
    formatRgb: ch,
    toString: ch,
  }),
);
function oh() {
  return `#${dh(this.r)}${dh(this.g)}${dh(this.b)}`;
}
function sh() {
  return `#${dh(this.r)}${dh(this.g)}${dh(this.b)}${dh((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ch() {
  let e = lh(this.opacity);
  return `${e === 1 ? `rgb(` : `rgba(`}${uh(this.r)}, ${uh(this.g)}, ${uh(this.b)}${e === 1 ? `)` : `, ${e})`}`;
}
function lh(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function uh(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function dh(e) {
  return ((e = uh(e)), (e < 16 ? `0` : ``) + e.toString(16));
}
function fh(e, t, n, r) {
  return (
    r <= 0
      ? (e = t = n = NaN)
      : n <= 0 || n >= 1
        ? (e = t = NaN)
        : t <= 0 && (e = NaN),
    new hh(e, t, n, r)
  );
}
function ph(e) {
  if (e instanceof hh) return new hh(e.h, e.s, e.l, e.opacity);
  if ((e instanceof Im || (e = eh(e)), !e)) return new hh();
  if (e instanceof hh) return e;
  e = e.rgb();
  var t = e.r / 255,
    n = e.g / 255,
    r = e.b / 255,
    i = Math.min(t, n, r),
    a = Math.max(t, n, r),
    o = NaN,
    s = a - i,
    c = (a + i) / 2;
  return (
    s
      ? ((o =
          t === a
            ? (n - r) / s + (n < r) * 6
            : n === a
              ? (r - t) / s + 2
              : (t - n) / s + 4),
        (s /= c < 0.5 ? a + i : 2 - a - i),
        (o *= 60))
      : (s = c > 0 && c < 1 ? 0 : o),
    new hh(o, s, c, e.opacity)
  );
}
function mh(e, t, n, r) {
  return arguments.length === 1 ? ph(e) : new hh(e, t, n, r ?? 1);
}
function hh(e, t, n, r) {
  ((this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r));
}
Pm(
  hh,
  mh,
  Fm(Im, {
    brighter(e) {
      return (
        (e = e == null ? Rm : Rm ** +e),
        new hh(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Lm : Lm ** +e),
        new hh(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * t,
        i = 2 * n - r;
      return new ah(
        vh(e >= 240 ? e - 240 : e + 120, i, r),
        vh(e, i, r),
        vh(e < 120 ? e + 240 : e - 120, i, r),
        this.opacity,
      );
    },
    clamp() {
      return new hh(gh(this.h), _h(this.s), _h(this.l), lh(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      let e = lh(this.opacity);
      return `${e === 1 ? `hsl(` : `hsla(`}${gh(this.h)}, ${_h(this.s) * 100}%, ${_h(this.l) * 100}%${e === 1 ? `)` : `, ${e})`}`;
    },
  }),
);
function gh(e) {
  return ((e = (e || 0) % 360), e < 0 ? e + 360 : e);
}
function _h(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function vh(e, t, n) {
  return (
    (e < 60
      ? t + ((n - t) * e) / 60
      : e < 180
        ? n
        : e < 240
          ? t + ((n - t) * (240 - e)) / 60
          : t) * 255
  );
}
var yh = Math.PI / 180,
  bh = 180 / Math.PI,
  xh = 18,
  Sh = 0.96422,
  Ch = 1,
  wh = 0.82521,
  Th = 4 / 29,
  Eh = 6 / 29,
  Dh = 3 * Eh * Eh,
  Oh = Eh * Eh * Eh;
function kh(e) {
  if (e instanceof jh) return new jh(e.l, e.a, e.b, e.opacity);
  if (e instanceof Rh) return zh(e);
  e instanceof ah || (e = rh(e));
  var t = Fh(e.r),
    n = Fh(e.g),
    r = Fh(e.b),
    i = Mh((0.2225045 * t + 0.7168786 * n + 0.0606169 * r) / Ch),
    a,
    o;
  return (
    t === n && n === r
      ? (a = o = i)
      : ((a = Mh((0.4360747 * t + 0.3850649 * n + 0.1430804 * r) / Sh)),
        (o = Mh((0.0139322 * t + 0.0971045 * n + 0.7141733 * r) / wh))),
    new jh(116 * i - 16, 500 * (a - i), 200 * (i - o), e.opacity)
  );
}
function Ah(e, t, n, r) {
  return arguments.length === 1 ? kh(e) : new jh(e, t, n, r ?? 1);
}
function jh(e, t, n, r) {
  ((this.l = +e), (this.a = +t), (this.b = +n), (this.opacity = +r));
}
Pm(
  jh,
  Ah,
  Fm(Im, {
    brighter(e) {
      return new jh(this.l + xh * (e ?? 1), this.a, this.b, this.opacity);
    },
    darker(e) {
      return new jh(this.l - xh * (e ?? 1), this.a, this.b, this.opacity);
    },
    rgb() {
      var e = (this.l + 16) / 116,
        t = isNaN(this.a) ? e : e + this.a / 500,
        n = isNaN(this.b) ? e : e - this.b / 200;
      return (
        (t = Sh * Nh(t)),
        (e = Ch * Nh(e)),
        (n = wh * Nh(n)),
        new ah(
          Ph(3.1338561 * t - 1.6168667 * e - 0.4906146 * n),
          Ph(-0.9787684 * t + 1.9161415 * e + 0.033454 * n),
          Ph(0.0719453 * t - 0.2289914 * e + 1.4052427 * n),
          this.opacity,
        )
      );
    },
  }),
);
function Mh(e) {
  return e > Oh ? e ** (1 / 3) : e / Dh + Th;
}
function Nh(e) {
  return e > Eh ? e * e * e : Dh * (e - Th);
}
function Ph(e) {
  return 255 * (e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055);
}
function Fh(e) {
  return (e /= 255) <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
}
function Ih(e) {
  if (e instanceof Rh) return new Rh(e.h, e.c, e.l, e.opacity);
  if ((e instanceof jh || (e = kh(e)), e.a === 0 && e.b === 0))
    return new Rh(NaN, 0 < e.l && e.l < 100 ? 0 : NaN, e.l, e.opacity);
  var t = Math.atan2(e.b, e.a) * bh;
  return new Rh(
    t < 0 ? t + 360 : t,
    Math.sqrt(e.a * e.a + e.b * e.b),
    e.l,
    e.opacity,
  );
}
function Lh(e, t, n, r) {
  return arguments.length === 1 ? Ih(e) : new Rh(e, t, n, r ?? 1);
}
function Rh(e, t, n, r) {
  ((this.h = +e), (this.c = +t), (this.l = +n), (this.opacity = +r));
}
function zh(e) {
  if (isNaN(e.h)) return new jh(e.l, 0, 0, e.opacity);
  var t = e.h * yh;
  return new jh(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity);
}
Pm(
  Rh,
  Lh,
  Fm(Im, {
    brighter(e) {
      return new Rh(this.h, this.c, this.l + xh * (e ?? 1), this.opacity);
    },
    darker(e) {
      return new Rh(this.h, this.c, this.l - xh * (e ?? 1), this.opacity);
    },
    rgb() {
      return zh(this).rgb();
    },
  }),
);
var Bh = -0.14861,
  Vh = 1.78277,
  Hh = -0.29227,
  Uh = -0.90649,
  Wh = 1.97294,
  Gh = Wh * Uh,
  Kh = Wh * Vh,
  qh = Vh * Hh - Uh * Bh;
function Jh(e) {
  if (e instanceof Xh) return new Xh(e.h, e.s, e.l, e.opacity);
  e instanceof ah || (e = rh(e));
  var t = e.r / 255,
    n = e.g / 255,
    r = e.b / 255,
    i = (qh * r + Gh * t - Kh * n) / (qh + Gh - Kh),
    a = r - i,
    o = (Wh * (n - i) - Hh * a) / Uh,
    s = Math.sqrt(o * o + a * a) / (Wh * i * (1 - i)),
    c = s ? Math.atan2(o, a) * bh - 120 : NaN;
  return new Xh(c < 0 ? c + 360 : c, s, i, e.opacity);
}
function Yh(e, t, n, r) {
  return arguments.length === 1 ? Jh(e) : new Xh(e, t, n, r ?? 1);
}
function Xh(e, t, n, r) {
  ((this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r));
}
Pm(
  Xh,
  Yh,
  Fm(Im, {
    brighter(e) {
      return (
        (e = e == null ? Rm : Rm ** +e),
        new Xh(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Lm : Lm ** +e),
        new Xh(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = isNaN(this.h) ? 0 : (this.h + 120) * yh,
        t = +this.l,
        n = isNaN(this.s) ? 0 : this.s * t * (1 - t),
        r = Math.cos(e),
        i = Math.sin(e);
      return new ah(
        255 * (t + n * (Bh * r + Vh * i)),
        255 * (t + n * (Hh * r + Uh * i)),
        255 * (t + Wh * r * n),
        this.opacity,
      );
    },
  }),
);
var Zh = (e) => () => e;
function Qh(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function $h(e, t, n) {
  return (
    (e **= +n),
    (t = t ** +n - e),
    (n = 1 / n),
    function (r) {
      return (e + r * t) ** +n;
    }
  );
}
function eg(e, t) {
  var n = t - e;
  return n
    ? Qh(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n)
    : Zh(isNaN(e) ? t : e);
}
function tg(e) {
  return (e = +e) == 1
    ? ng
    : function (t, n) {
        return n - t ? $h(t, n, e) : Zh(isNaN(t) ? n : t);
      };
}
function ng(e, t) {
  var n = t - e;
  return n ? Qh(e, n) : Zh(isNaN(e) ? t : e);
}
var rg = (function e(t) {
  var n = tg(t);
  function r(e, t) {
    var r = n((e = ih(e)).r, (t = ih(t)).r),
      i = n(e.g, t.g),
      a = n(e.b, t.b),
      o = ng(e.opacity, t.opacity);
    return function (t) {
      return (
        (e.r = r(t)),
        (e.g = i(t)),
        (e.b = a(t)),
        (e.opacity = o(t)),
        e + ``
      );
    };
  }
  return ((r.gamma = e), r);
})(1);
function ig(e, t) {
  t ||= [];
  var n = e ? Math.min(t.length, e.length) : 0,
    r = t.slice(),
    i;
  return function (a) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
    return r;
  };
}
function ag(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function og(e, t) {
  for (
    var n = t ? t.length : 0,
      r = e ? Math.min(n, e.length) : 0,
      i = Array(r),
      a = Array(n),
      o = 0;
    o < r;
    ++o
  )
    i[o] = hg(e[o], t[o]);
  for (; o < n; ++o) a[o] = t[o];
  return function (e) {
    for (o = 0; o < r; ++o) a[o] = i[o](e);
    return a;
  };
}
function sg(e, t) {
  var n = new Date();
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return (n.setTime(e * (1 - r) + t * r), n);
    }
  );
}
function cg(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
function lg(e, t) {
  var n = {},
    r = {},
    i;
  for (i in ((typeof e == `object` && e) || (e = {}),
  (typeof t == `object` && t) || (t = {}),
  t))
    i in e ? (n[i] = hg(e[i], t[i])) : (r[i] = t[i]);
  return function (e) {
    for (i in n) r[i] = n[i](e);
    return r;
  };
}
var ug = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  dg = new RegExp(ug.source, `g`);
function fg(e) {
  return function () {
    return e;
  };
}
function pg(e) {
  return function (t) {
    return e(t) + ``;
  };
}
function mg(e, t) {
  var n = (ug.lastIndex = dg.lastIndex = 0),
    r,
    i,
    a,
    o = -1,
    s = [],
    c = [];
  for (e += ``, t += ``; (r = ug.exec(e)) && (i = dg.exec(t)); )
    ((a = i.index) > n &&
      ((a = t.slice(n, a)), s[o] ? (s[o] += a) : (s[++o] = a)),
      (r = r[0]) === (i = i[0])
        ? s[o]
          ? (s[o] += i)
          : (s[++o] = i)
        : ((s[++o] = null), c.push({ i: o, x: cg(r, i) })),
      (n = dg.lastIndex));
  return (
    n < t.length && ((a = t.slice(n)), s[o] ? (s[o] += a) : (s[++o] = a)),
    s.length < 2
      ? c[0]
        ? pg(c[0].x)
        : fg(t)
      : ((t = c.length),
        function (e) {
          for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
          return s.join(``);
        })
  );
}
function hg(e, t) {
  var n = typeof t,
    r;
  return t == null || n === `boolean`
    ? Zh(t)
    : (n === `number`
        ? cg
        : n === `string`
          ? (r = eh(t))
            ? ((t = r), rg)
            : mg
          : t instanceof eh
            ? rg
            : t instanceof Date
              ? sg
              : ag(t)
                ? ig
                : Array.isArray(t)
                  ? og
                  : (typeof t.valueOf != `function` &&
                        typeof t.toString != `function`) ||
                      isNaN(t)
                    ? lg
                    : cg)(e, t);
}
function gg(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return Math.round(e * (1 - n) + t * n);
    }
  );
}
var _g = 1e-12;
function vg(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function yg(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function bg(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
(function e(t, n, r) {
  function i(e, i) {
    var a = e[0],
      o = e[1],
      s = e[2],
      c = i[0],
      l = i[1],
      u = i[2],
      d = c - a,
      f = l - o,
      p = d * d + f * f,
      m,
      h;
    if (p < _g)
      ((h = Math.log(u / s) / t),
        (m = function (e) {
          return [a + e * d, o + e * f, s * Math.exp(t * e * h)];
        }));
    else {
      var g = Math.sqrt(p),
        _ = (u * u - s * s + r * p) / (2 * s * n * g),
        v = (u * u - s * s - r * p) / (2 * u * n * g),
        y = Math.log(Math.sqrt(_ * _ + 1) - _);
      ((h = (Math.log(Math.sqrt(v * v + 1) - v) - y) / t),
        (m = function (e) {
          var r = e * h,
            i = vg(y),
            c = (s / (n * g)) * (i * bg(t * r + y) - yg(y));
          return [a + c * d, o + c * f, (s * i) / vg(t * r + y)];
        }));
    }
    return ((m.duration = (Math.abs(h) * 1e3 * t) / Math.SQRT2), m);
  }
  return (
    (i.rho = function (t) {
      var n = Math.max(0.001, +t),
        r = n * n;
      return e(n, r, r * r);
    }),
    i
  );
})(Math.SQRT2, 2, 4);
function xg(e) {
  return (function t(n) {
    n = +n;
    function r(t, r) {
      var i = e((t = Yh(t)).h, (r = Yh(r)).h),
        a = ng(t.s, r.s),
        o = ng(t.l, r.l),
        s = ng(t.opacity, r.opacity);
      return function (e) {
        return (
          (t.h = i(e)),
          (t.s = a(e)),
          (t.l = o(e ** +n)),
          (t.opacity = s(e)),
          t + ``
        );
      };
    }
    return ((r.gamma = t), r);
  })(1);
}
(xg(eg), xg(ng));
function Sg(e, t) {
  t === void 0 && ((t = e), (e = hg));
  for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r; )
    a[n] = e(i, (i = t[++n]));
  return function (e) {
    var t = Math.max(0, Math.min(r - 1, Math.floor((e *= r))));
    return a[t](e - t);
  };
}
function Cg(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString(`en`).replace(/,/g, ``)
    : e.toString(10);
}
function wg(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf(`e`),
    r = e.slice(0, n);
  return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
function Tg(e) {
  return ((e = wg(Math.abs(e))), e ? e[1] : NaN);
}
function Eg(e, t) {
  return function (n, r) {
    for (
      var i = n.length, a = [], o = 0, s = e[0], c = 0;
      i > 0 &&
      s > 0 &&
      (c + s + 1 > r && (s = Math.max(1, r - c)),
      a.push(n.substring((i -= s), i + s)),
      !((c += s + 1) > r));
    )
      s = e[(o = (o + 1) % e.length)];
    return a.reverse().join(t);
  };
}
function Dg(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (t) {
      return e[+t];
    });
  };
}
var Og =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function kg(e) {
  if (!(t = Og.exec(e))) throw Error(`invalid format: ` + e);
  var t;
  return new Ag({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
kg.prototype = Ag.prototype;
function Ag(e) {
  ((this.fill = e.fill === void 0 ? ` ` : e.fill + ``),
    (this.align = e.align === void 0 ? `>` : e.align + ``),
    (this.sign = e.sign === void 0 ? `-` : e.sign + ``),
    (this.symbol = e.symbol === void 0 ? `` : e.symbol + ``),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? `` : e.type + ``));
}
Ag.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? `0` : ``) +
    (this.width === void 0 ? `` : Math.max(1, this.width | 0)) +
    (this.comma ? `,` : ``) +
    (this.precision === void 0 ? `` : `.` + Math.max(0, this.precision | 0)) +
    (this.trim ? `~` : ``) +
    this.type
  );
};
function jg(e) {
  out: for (var t = e.length, n = 1, r = -1, i; n < t; ++n)
    switch (e[n]) {
      case `.`:
        r = i = n;
        break;
      case `0`:
        (r === 0 && (r = n), (i = n));
        break;
      default:
        if (!+e[n]) break out;
        r > 0 && (r = 0);
    }
  return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e;
}
var Mg;
function Ng(e, t) {
  var n = wg(e, t);
  if (!n) return ((Mg = void 0), e.toPrecision(t));
  var r = n[0],
    i = n[1],
    a = i - (Mg = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = r.length;
  return a === o
    ? r
    : a > o
      ? r + Array(a - o + 1).join(`0`)
      : a > 0
        ? r.slice(0, a) + `.` + r.slice(a)
        : `0.` + Array(1 - a).join(`0`) + wg(e, Math.max(0, t + a - 1))[0];
}
function Pg(e, t) {
  var n = wg(e, t);
  if (!n) return e + ``;
  var r = n[0],
    i = n[1];
  return i < 0
    ? `0.` + Array(-i).join(`0`) + r
    : r.length > i + 1
      ? r.slice(0, i + 1) + `.` + r.slice(i + 1)
      : r + Array(i - r.length + 2).join(`0`);
}
var Fg = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + ``,
  d: Cg,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Pg(e * 100, t),
  r: Pg,
  s: Ng,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function Ig(e) {
  return e;
}
var Lg = Array.prototype.map,
  Rg = [
    `y`,
    `z`,
    `a`,
    `f`,
    `p`,
    `n`,
    `µ`,
    `m`,
    ``,
    `k`,
    `M`,
    `G`,
    `T`,
    `P`,
    `E`,
    `Z`,
    `Y`,
  ];
function zg(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? Ig
        : Eg(Lg.call(e.grouping, Number), e.thousands + ``),
    n = e.currency === void 0 ? `` : e.currency[0] + ``,
    r = e.currency === void 0 ? `` : e.currency[1] + ``,
    i = e.decimal === void 0 ? `.` : e.decimal + ``,
    a = e.numerals === void 0 ? Ig : Dg(Lg.call(e.numerals, String)),
    o = e.percent === void 0 ? `%` : e.percent + ``,
    s = e.minus === void 0 ? `−` : e.minus + ``,
    c = e.nan === void 0 ? `NaN` : e.nan + ``;
  function l(e, l) {
    e = kg(e);
    var u = e.fill,
      d = e.align,
      f = e.sign,
      p = e.symbol,
      m = e.zero,
      h = e.width,
      g = e.comma,
      _ = e.precision,
      v = e.trim,
      y = e.type;
    (y === `n`
      ? ((g = !0), (y = `g`))
      : Fg[y] || (_ === void 0 && (_ = 12), (v = !0), (y = `g`)),
      (m || (u === `0` && d === `=`)) && ((m = !0), (u = `0`), (d = `=`)));
    var b =
        (l && l.prefix !== void 0 ? l.prefix : ``) +
        (p === `$`
          ? n
          : p === `#` && /[boxX]/.test(y)
            ? `0` + y.toLowerCase()
            : ``),
      x =
        (p === `$` ? r : /[%p]/.test(y) ? o : ``) +
        (l && l.suffix !== void 0 ? l.suffix : ``),
      S = Fg[y],
      C = /[defgprs%]/.test(y);
    _ =
      _ === void 0
        ? 6
        : /[gprs]/.test(y)
          ? Math.max(1, Math.min(21, _))
          : Math.max(0, Math.min(20, _));
    function w(e) {
      var n = b,
        r = x,
        o,
        l,
        p;
      if (y === `c`) ((r = S(e) + r), (e = ``));
      else {
        e = +e;
        var w = e < 0 || 1 / e < 0;
        if (
          ((e = isNaN(e) ? c : S(Math.abs(e), _)),
          v && (e = jg(e)),
          w && +e == 0 && f !== `+` && (w = !1),
          (n = (w ? (f === `(` ? f : s) : f === `-` || f === `(` ? `` : f) + n),
          (r =
            (y === `s` && !isNaN(e) && Mg !== void 0 ? Rg[8 + Mg / 3] : ``) +
            r +
            (w && f === `(` ? `)` : ``)),
          C)
        ) {
          for (o = -1, l = e.length; ++o < l; )
            if (((p = e.charCodeAt(o)), 48 > p || p > 57)) {
              ((r = (p === 46 ? i + e.slice(o + 1) : e.slice(o)) + r),
                (e = e.slice(0, o)));
              break;
            }
        }
      }
      g && !m && (e = t(e, 1 / 0));
      var T = n.length + e.length + r.length,
        E = T < h ? Array(h - T + 1).join(u) : ``;
      switch (
        (g && m && ((e = t(E + e, E.length ? h - r.length : 1 / 0)), (E = ``)),
        d)
      ) {
        case `<`:
          e = n + e + r + E;
          break;
        case `=`:
          e = n + E + e + r;
          break;
        case `^`:
          e = E.slice(0, (T = E.length >> 1)) + n + e + r + E.slice(T);
          break;
        default:
          e = E + n + e + r;
      }
      return a(e);
    }
    return (
      (w.toString = function () {
        return e + ``;
      }),
      w
    );
  }
  function u(e, t) {
    var n = Math.max(-8, Math.min(8, Math.floor(Tg(t) / 3))) * 3,
      r = 10 ** -n,
      i = l(((e = kg(e)), (e.type = `f`), e), { suffix: Rg[8 + n / 3] });
    return function (e) {
      return i(r * e);
    };
  }
  return { format: l, formatPrefix: u };
}
var Bg, Vg, Hg;
Ug({ thousands: `,`, grouping: [3], currency: [`$`, ``] });
function Ug(e) {
  return ((Bg = zg(e)), (Vg = Bg.format), (Hg = Bg.formatPrefix), Bg);
}
function Wg(e) {
  return Math.max(0, -Tg(Math.abs(e)));
}
function Gg(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(Tg(t) / 3))) * 3 - Tg(Math.abs(e)),
  );
}
function Kg(e, t) {
  return (
    (e = Math.abs(e)),
    (t = Math.abs(t) - e),
    Math.max(0, Tg(t) - Tg(e)) + 1
  );
}
var qg = new Date(),
  Jg = new Date();
function q(e, t, n, r) {
  function i(t) {
    return (e((t = arguments.length === 0 ? new Date() : new Date(+t))), t);
  }
  return (
    (i.floor = (t) => (e((t = new Date(+t))), t)),
    (i.ceil = (n) => (e((n = new Date(n - 1))), t(n, 1), e(n), n)),
    (i.round = (e) => {
      let t = i(e),
        n = i.ceil(e);
      return e - t < n - e ? t : n;
    }),
    (i.offset = (e, n) => (
      t((e = new Date(+e)), n == null ? 1 : Math.floor(n)),
      e
    )),
    (i.range = (n, r, a) => {
      let o = [];
      if (
        ((n = i.ceil(n)),
        (a = a == null ? 1 : Math.floor(a)),
        !(n < r) || !(a > 0))
      )
        return o;
      let s;
      do (o.push((s = new Date(+n))), t(n, a), e(n));
      while (s < n && n < r);
      return o;
    }),
    (i.filter = (n) =>
      q(
        (t) => {
          if (t >= t) for (; e(t), !n(t); ) t.setTime(t - 1);
        },
        (e, r) => {
          if (e >= e) {
            if (r < 0) for (; ++r <= 0; ) for (; t(e, -1), !n(e); );
            else for (; --r >= 0; ) for (; t(e, 1), !n(e); );
          }
        },
      )),
    n &&
      ((i.count = (t, r) => (
        qg.setTime(+t),
        Jg.setTime(+r),
        e(qg),
        e(Jg),
        Math.floor(n(qg, Jg))
      )),
      (i.every = (e) => (
        (e = Math.floor(e)),
        !isFinite(e) || !(e > 0)
          ? null
          : e > 1
            ? i.filter(
                r ? (t) => r(t) % e === 0 : (t) => i.count(0, t) % e === 0,
              )
            : i
      ))),
    i
  );
}
var Yg = q(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e,
);
((Yg.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
      ? q(
          (t) => {
            t.setTime(Math.floor(t / e) * e);
          },
          (t, n) => {
            t.setTime(+t + n * e);
          },
          (t, n) => (n - t) / e,
        )
      : Yg
)),
  Yg.range);
var Xg = 1e3,
  Zg = Xg * 60,
  Qg = Zg * 60,
  $g = Qg * 24,
  e_ = $g * 7,
  t_ = $g * 30,
  n_ = $g * 365,
  r_ = q(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * Xg);
    },
    (e, t) => (t - e) / Xg,
    (e) => e.getUTCSeconds(),
  );
r_.range;
var i_ = q(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * Xg);
  },
  (e, t) => {
    e.setTime(+e + t * Zg);
  },
  (e, t) => (t - e) / Zg,
  (e) => e.getMinutes(),
);
i_.range;
var a_ = q(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * Zg);
  },
  (e, t) => (t - e) / Zg,
  (e) => e.getUTCMinutes(),
);
a_.range;
var o_ = q(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * Xg - e.getMinutes() * Zg,
    );
  },
  (e, t) => {
    e.setTime(+e + t * Qg);
  },
  (e, t) => (t - e) / Qg,
  (e) => e.getHours(),
);
o_.range;
var s_ = q(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * Qg);
  },
  (e, t) => (t - e) / Qg,
  (e) => e.getUTCHours(),
);
s_.range;
var c_ = q(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Zg) / $g,
  (e) => e.getDate() - 1,
);
c_.range;
var l_ = q(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / $g,
  (e) => e.getUTCDate() - 1,
);
l_.range;
var u_ = q(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / $g,
  (e) => Math.floor(e / $g),
);
u_.range;
function d_(e) {
  return q(
    (t) => {
      (t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0));
    },
    (e, t) => {
      e.setDate(e.getDate() + t * 7);
    },
    (e, t) =>
      (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Zg) / e_,
  );
}
var f_ = d_(0),
  p_ = d_(1),
  m_ = d_(2),
  h_ = d_(3),
  g_ = d_(4),
  __ = d_(5),
  v_ = d_(6);
(f_.range, p_.range, m_.range, h_.range, g_.range, __.range, v_.range);
function y_(e) {
  return q(
    (t) => {
      (t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0));
    },
    (e, t) => {
      e.setUTCDate(e.getUTCDate() + t * 7);
    },
    (e, t) => (t - e) / e_,
  );
}
var b_ = y_(0),
  x_ = y_(1),
  S_ = y_(2),
  C_ = y_(3),
  w_ = y_(4),
  T_ = y_(5),
  E_ = y_(6);
(b_.range, x_.range, S_.range, C_.range, w_.range, T_.range, E_.range);
var D_ = q(
  (e) => {
    (e.setDate(1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setMonth(e.getMonth() + t);
  },
  (e, t) =>
    t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
  (e) => e.getMonth(),
);
D_.range;
var O_ = q(
  (e) => {
    (e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t);
  },
  (e, t) =>
    t.getUTCMonth() -
    e.getUTCMonth() +
    (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
  (e) => e.getUTCMonth(),
);
O_.range;
var k_ = q(
  (e) => {
    (e.setMonth(0, 1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear(),
);
((k_.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : q(
        (t) => {
          (t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0));
        },
        (t, n) => {
          t.setFullYear(t.getFullYear() + n * e);
        },
      )),
  k_.range);
var A_ = q(
  (e) => {
    (e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear(),
);
((A_.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : q(
        (t) => {
          (t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0));
        },
        (t, n) => {
          t.setUTCFullYear(t.getUTCFullYear() + n * e);
        },
      )),
  A_.range);
function j_(e, t, n, r, i, a) {
  let o = [
    [r_, 1, Xg],
    [r_, 5, 5 * Xg],
    [r_, 15, 15 * Xg],
    [r_, 30, 30 * Xg],
    [a, 1, Zg],
    [a, 5, 5 * Zg],
    [a, 15, 15 * Zg],
    [a, 30, 30 * Zg],
    [i, 1, Qg],
    [i, 3, 3 * Qg],
    [i, 6, 6 * Qg],
    [i, 12, 12 * Qg],
    [r, 1, $g],
    [r, 2, 2 * $g],
    [n, 1, e_],
    [t, 1, t_],
    [t, 3, 3 * t_],
    [e, 1, n_],
  ];
  function s(e, t, n) {
    let r = t < e;
    r && ([e, t] = [t, e]);
    let i = n && typeof n.range == `function` ? n : c(e, t, n),
      a = i ? i.range(e, +t + 1) : [];
    return r ? a.reverse() : a;
  }
  function c(t, n, r) {
    let i = Math.abs(n - t) / r,
      a = sm(([, , e]) => e).right(o, i);
    if (a === o.length) return e.every(Em(t / n_, n / n_, r));
    if (a === 0) return Yg.every(Math.max(Em(t, n, r), 1));
    let [s, c] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
    return s.every(c);
  }
  return [s, c];
}
var [M_, N_] = j_(A_, O_, b_, u_, s_, a_),
  [P_, F_] = j_(k_, D_, f_, c_, o_, i_);
function I_(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return (t.setFullYear(e.y), t);
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function L_(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return (t.setUTCFullYear(e.y), t);
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function R_(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function z_(e) {
  var t = e.dateTime,
    n = e.date,
    r = e.time,
    i = e.periods,
    a = e.days,
    o = e.shortDays,
    s = e.months,
    c = e.shortMonths,
    l = G_(i),
    u = K_(i),
    d = G_(a),
    f = K_(a),
    p = G_(o),
    m = K_(o),
    h = G_(s),
    g = K_(s),
    _ = G_(c),
    v = K_(c),
    y = {
      a: N,
      A: ee,
      b: te,
      B: ne,
      c: null,
      d: pv,
      e: pv,
      f: vv,
      g: kv,
      G: jv,
      H: mv,
      I: hv,
      j: gv,
      L: _v,
      m: yv,
      M: bv,
      p: re,
      q: ie,
      Q: ey,
      s: ty,
      S: xv,
      u: Sv,
      U: Cv,
      V: Tv,
      w: Ev,
      W: Dv,
      x: null,
      X: null,
      y: Ov,
      Y: Av,
      Z: Mv,
      "%": $v,
    },
    b = {
      a: ae,
      A: oe,
      b: se,
      B: ce,
      c: null,
      d: Nv,
      e: Nv,
      f: Rv,
      g: Yv,
      G: Zv,
      H: Pv,
      I: Fv,
      j: Iv,
      L: Lv,
      m: zv,
      M: Bv,
      p: le,
      q: ue,
      Q: ey,
      s: ty,
      S: Vv,
      u: Hv,
      U: Uv,
      V: Gv,
      w: Kv,
      W: qv,
      x: null,
      X: null,
      y: Jv,
      Y: Xv,
      Z: Qv,
      "%": $v,
    },
    x = {
      a: E,
      A: D,
      b: O,
      B: k,
      c: A,
      d: rv,
      e: rv,
      f: lv,
      g: $_,
      G: Q_,
      H: av,
      I: av,
      j: iv,
      L: cv,
      m: nv,
      M: ov,
      p: T,
      q: tv,
      Q: dv,
      s: fv,
      S: sv,
      u: J_,
      U: Y_,
      V: X_,
      w: q_,
      W: Z_,
      x: j,
      X: M,
      y: $_,
      Y: Q_,
      Z: ev,
      "%": uv,
    };
  ((y.x = S(n, y)),
    (y.X = S(r, y)),
    (y.c = S(t, y)),
    (b.x = S(n, b)),
    (b.X = S(r, b)),
    (b.c = S(t, b)));
  function S(e, t) {
    return function (n) {
      var r = [],
        i = -1,
        a = 0,
        o = e.length,
        s,
        c,
        l;
      for (n instanceof Date || (n = new Date(+n)); ++i < o; )
        e.charCodeAt(i) === 37 &&
          (r.push(e.slice(a, i)),
          (c = B_[(s = e.charAt(++i))]) == null
            ? (c = s === `e` ? ` ` : `0`)
            : (s = e.charAt(++i)),
          (l = t[s]) && (s = l(n, c)),
          r.push(s),
          (a = i + 1));
      return (r.push(e.slice(a, i)), r.join(``));
    };
  }
  function C(e, t) {
    return function (n) {
      var r = R_(1900, void 0, 1),
        i = w(r, e, (n += ``), 0),
        a,
        o;
      if (i != n.length) return null;
      if (`Q` in r) return new Date(r.Q);
      if (`s` in r) return new Date(r.s * 1e3 + (`L` in r ? r.L : 0));
      if (
        (t && !(`Z` in r) && (r.Z = 0),
        `p` in r && (r.H = (r.H % 12) + r.p * 12),
        r.m === void 0 && (r.m = `q` in r ? r.q : 0),
        `V` in r)
      ) {
        if (r.V < 1 || r.V > 53) return null;
        (`w` in r || (r.w = 1),
          `Z` in r
            ? ((a = L_(R_(r.y, 0, 1))),
              (o = a.getUTCDay()),
              (a = o > 4 || o === 0 ? x_.ceil(a) : x_(a)),
              (a = l_.offset(a, (r.V - 1) * 7)),
              (r.y = a.getUTCFullYear()),
              (r.m = a.getUTCMonth()),
              (r.d = a.getUTCDate() + ((r.w + 6) % 7)))
            : ((a = I_(R_(r.y, 0, 1))),
              (o = a.getDay()),
              (a = o > 4 || o === 0 ? p_.ceil(a) : p_(a)),
              (a = c_.offset(a, (r.V - 1) * 7)),
              (r.y = a.getFullYear()),
              (r.m = a.getMonth()),
              (r.d = a.getDate() + ((r.w + 6) % 7))));
      } else
        (`W` in r || `U` in r) &&
          (`w` in r || (r.w = `u` in r ? r.u % 7 : +(`W` in r)),
          (o =
            `Z` in r
              ? L_(R_(r.y, 0, 1)).getUTCDay()
              : I_(R_(r.y, 0, 1)).getDay()),
          (r.m = 0),
          (r.d =
            `W` in r
              ? ((r.w + 6) % 7) + r.W * 7 - ((o + 5) % 7)
              : r.w + r.U * 7 - ((o + 6) % 7)));
      return `Z` in r
        ? ((r.H += (r.Z / 100) | 0), (r.M += r.Z % 100), L_(r))
        : I_(r);
    };
  }
  function w(e, t, n, r) {
    for (var i = 0, a = t.length, o = n.length, s, c; i < a; ) {
      if (r >= o) return -1;
      if (((s = t.charCodeAt(i++)), s === 37)) {
        if (
          ((s = t.charAt(i++)),
          (c = x[s in B_ ? t.charAt(i++) : s]),
          !c || (r = c(e, n, r)) < 0)
        )
          return -1;
      } else if (s != n.charCodeAt(r++)) return -1;
    }
    return r;
  }
  function T(e, t, n) {
    var r = l.exec(t.slice(n));
    return r ? ((e.p = u.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function E(e, t, n) {
    var r = p.exec(t.slice(n));
    return r ? ((e.w = m.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function D(e, t, n) {
    var r = d.exec(t.slice(n));
    return r ? ((e.w = f.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function O(e, t, n) {
    var r = _.exec(t.slice(n));
    return r ? ((e.m = v.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function k(e, t, n) {
    var r = h.exec(t.slice(n));
    return r ? ((e.m = g.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function A(e, n, r) {
    return w(e, t, n, r);
  }
  function j(e, t, r) {
    return w(e, n, t, r);
  }
  function M(e, t, n) {
    return w(e, r, t, n);
  }
  function N(e) {
    return o[e.getDay()];
  }
  function ee(e) {
    return a[e.getDay()];
  }
  function te(e) {
    return c[e.getMonth()];
  }
  function ne(e) {
    return s[e.getMonth()];
  }
  function re(e) {
    return i[+(e.getHours() >= 12)];
  }
  function ie(e) {
    return 1 + ~~(e.getMonth() / 3);
  }
  function ae(e) {
    return o[e.getUTCDay()];
  }
  function oe(e) {
    return a[e.getUTCDay()];
  }
  function se(e) {
    return c[e.getUTCMonth()];
  }
  function ce(e) {
    return s[e.getUTCMonth()];
  }
  function le(e) {
    return i[+(e.getUTCHours() >= 12)];
  }
  function ue(e) {
    return 1 + ~~(e.getUTCMonth() / 3);
  }
  return {
    format: function (e) {
      var t = S((e += ``), y);
      return (
        (t.toString = function () {
          return e;
        }),
        t
      );
    },
    parse: function (e) {
      var t = C((e += ``), !1);
      return (
        (t.toString = function () {
          return e;
        }),
        t
      );
    },
    utcFormat: function (e) {
      var t = S((e += ``), b);
      return (
        (t.toString = function () {
          return e;
        }),
        t
      );
    },
    utcParse: function (e) {
      var t = C((e += ``), !0);
      return (
        (t.toString = function () {
          return e;
        }),
        t
      );
    },
  };
}
var B_ = { "-": ``, _: ` `, 0: `0` },
  V_ = /^\s*\d+/,
  H_ = /^%/,
  U_ = /[\\^$*+?|[\]().{}]/g;
function J(e, t, n) {
  var r = e < 0 ? `-` : ``,
    i = (r ? -e : e) + ``,
    a = i.length;
  return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function W_(e) {
  return e.replace(U_, `\\$&`);
}
function G_(e) {
  return RegExp(`^(?:` + e.map(W_).join(`|`) + `)`, `i`);
}
function K_(e) {
  return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function q_(e, t, n) {
  var r = V_.exec(t.slice(n, n + 1));
  return r ? ((e.w = +r[0]), n + r[0].length) : -1;
}
function J_(e, t, n) {
  var r = V_.exec(t.slice(n, n + 1));
  return r ? ((e.u = +r[0]), n + r[0].length) : -1;
}
function Y_(e, t, n) {
  var r = V_.exec(t.slice(n, n + 2));
  return r ? ((e.U = +r[0]), n + r[0].length) : -1;
}
function X_(e, t, n) {
  var r = V_.exec(t.slice(n, n + 2));
  return r ? ((e.V = +r[0]), n + r[0].length) : -1;
}
function Z_(e, t, n) {
  var r = V_.exec(t.slice(n, n + 2));
  return r ? ((e.W = +r[0]), n + r[0].length) : -1;
}
function Q_(e, t, n) {
  var r = V_.exec(t.slice(n, n + 4));
  return r ? ((e.y = +r[0]), n + r[0].length) : -1;
}
function $_(e, t, n) {
  var r = V_.exec(t.slice(n, n + 2));
  return r ? ((e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length) : -1;
}
function ev(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r
    ? ((e.Z = r[1] ? 0 : -(r[2] + (r[3] || `00`))), n + r[0].length)
    : -1;
}
function tv(e, t, n) {
  var r = V_.exec(t.slice(n, n + 1));
  return r ? ((e.q = r[0] * 3 - 3), n + r[0].length) : -1;
}
function nv(e, t, n) {
  var r = V_.exec(t.slice(n, n + 2));
  return r ? ((e.m = r[0] - 1), n + r[0].length) : -1;
}
function rv(e, t, n) {
  var r = V_.exec(t.slice(n, n + 2));
  return r ? ((e.d = +r[0]), n + r[0].length) : -1;
}
function iv(e, t, n) {
  var r = V_.exec(t.slice(n, n + 3));
  return r ? ((e.m = 0), (e.d = +r[0]), n + r[0].length) : -1;
}
function av(e, t, n) {
  var r = V_.exec(t.slice(n, n + 2));
  return r ? ((e.H = +r[0]), n + r[0].length) : -1;
}
function ov(e, t, n) {
  var r = V_.exec(t.slice(n, n + 2));
  return r ? ((e.M = +r[0]), n + r[0].length) : -1;
}
function sv(e, t, n) {
  var r = V_.exec(t.slice(n, n + 2));
  return r ? ((e.S = +r[0]), n + r[0].length) : -1;
}
function cv(e, t, n) {
  var r = V_.exec(t.slice(n, n + 3));
  return r ? ((e.L = +r[0]), n + r[0].length) : -1;
}
function lv(e, t, n) {
  var r = V_.exec(t.slice(n, n + 6));
  return r ? ((e.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
}
function uv(e, t, n) {
  var r = H_.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function dv(e, t, n) {
  var r = V_.exec(t.slice(n));
  return r ? ((e.Q = +r[0]), n + r[0].length) : -1;
}
function fv(e, t, n) {
  var r = V_.exec(t.slice(n));
  return r ? ((e.s = +r[0]), n + r[0].length) : -1;
}
function pv(e, t) {
  return J(e.getDate(), t, 2);
}
function mv(e, t) {
  return J(e.getHours(), t, 2);
}
function hv(e, t) {
  return J(e.getHours() % 12 || 12, t, 2);
}
function gv(e, t) {
  return J(1 + c_.count(k_(e), e), t, 3);
}
function _v(e, t) {
  return J(e.getMilliseconds(), t, 3);
}
function vv(e, t) {
  return _v(e, t) + `000`;
}
function yv(e, t) {
  return J(e.getMonth() + 1, t, 2);
}
function bv(e, t) {
  return J(e.getMinutes(), t, 2);
}
function xv(e, t) {
  return J(e.getSeconds(), t, 2);
}
function Sv(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Cv(e, t) {
  return J(f_.count(k_(e) - 1, e), t, 2);
}
function wv(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? g_(e) : g_.ceil(e);
}
function Tv(e, t) {
  return ((e = wv(e)), J(g_.count(k_(e), e) + (k_(e).getDay() === 4), t, 2));
}
function Ev(e) {
  return e.getDay();
}
function Dv(e, t) {
  return J(p_.count(k_(e) - 1, e), t, 2);
}
function Ov(e, t) {
  return J(e.getFullYear() % 100, t, 2);
}
function kv(e, t) {
  return ((e = wv(e)), J(e.getFullYear() % 100, t, 2));
}
function Av(e, t) {
  return J(e.getFullYear() % 1e4, t, 4);
}
function jv(e, t) {
  var n = e.getDay();
  return (
    (e = n >= 4 || n === 0 ? g_(e) : g_.ceil(e)),
    J(e.getFullYear() % 1e4, t, 4)
  );
}
function Mv(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? `-` : ((t *= -1), `+`)) +
    J((t / 60) | 0, `0`, 2) +
    J(t % 60, `0`, 2)
  );
}
function Nv(e, t) {
  return J(e.getUTCDate(), t, 2);
}
function Pv(e, t) {
  return J(e.getUTCHours(), t, 2);
}
function Fv(e, t) {
  return J(e.getUTCHours() % 12 || 12, t, 2);
}
function Iv(e, t) {
  return J(1 + l_.count(A_(e), e), t, 3);
}
function Lv(e, t) {
  return J(e.getUTCMilliseconds(), t, 3);
}
function Rv(e, t) {
  return Lv(e, t) + `000`;
}
function zv(e, t) {
  return J(e.getUTCMonth() + 1, t, 2);
}
function Bv(e, t) {
  return J(e.getUTCMinutes(), t, 2);
}
function Vv(e, t) {
  return J(e.getUTCSeconds(), t, 2);
}
function Hv(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Uv(e, t) {
  return J(b_.count(A_(e) - 1, e), t, 2);
}
function Wv(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? w_(e) : w_.ceil(e);
}
function Gv(e, t) {
  return ((e = Wv(e)), J(w_.count(A_(e), e) + (A_(e).getUTCDay() === 4), t, 2));
}
function Kv(e) {
  return e.getUTCDay();
}
function qv(e, t) {
  return J(x_.count(A_(e) - 1, e), t, 2);
}
function Jv(e, t) {
  return J(e.getUTCFullYear() % 100, t, 2);
}
function Yv(e, t) {
  return ((e = Wv(e)), J(e.getUTCFullYear() % 100, t, 2));
}
function Xv(e, t) {
  return J(e.getUTCFullYear() % 1e4, t, 4);
}
function Zv(e, t) {
  var n = e.getUTCDay();
  return (
    (e = n >= 4 || n === 0 ? w_(e) : w_.ceil(e)),
    J(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function Qv() {
  return `+0000`;
}
function $v() {
  return `%`;
}
function ey(e) {
  return +e;
}
function ty(e) {
  return Math.floor(e / 1e3);
}
var ny, ry, iy, ay;
oy({
  dateTime: `%x, %X`,
  date: `%-m/%-d/%Y`,
  time: `%-I:%M:%S %p`,
  periods: [`AM`, `PM`],
  days: [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ],
  shortDays: [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`],
  months: [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`,
  ],
  shortMonths: [
    `Jan`,
    `Feb`,
    `Mar`,
    `Apr`,
    `May`,
    `Jun`,
    `Jul`,
    `Aug`,
    `Sep`,
    `Oct`,
    `Nov`,
    `Dec`,
  ],
});
function oy(e) {
  return (
    (ny = z_(e)),
    (ry = ny.format),
    ny.parse,
    (iy = ny.utcFormat),
    (ay = ny.utcParse),
    ny
  );
}
var sy = `%Y-%m-%dT%H:%M:%S.%LZ`;
(Date.prototype.toISOString || iy(sy),
  +new Date(`2000-01-01T00:00:00.000Z`) || ay(sy));
function cy(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
  }
  return this;
}
function ly(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      typeof e == `function` ? this.interpolator(e) : this.range(e);
      break;
    default:
      (this.domain(e),
        typeof t == `function` ? this.interpolator(t) : this.range(t));
  }
  return this;
}
var uy = Symbol(`implicit`);
function dy() {
  var e = new pm(),
    t = [],
    n = [],
    r = uy;
  function i(i) {
    let a = e.get(i);
    if (a === void 0) {
      if (r !== uy) return r;
      e.set(i, (a = t.push(i) - 1));
    }
    return n[a % n.length];
  }
  return (
    (i.domain = function (n) {
      if (!arguments.length) return t.slice();
      ((t = []), (e = new pm()));
      for (let r of n) e.has(r) || e.set(r, t.push(r) - 1);
      return i;
    }),
    (i.range = function (e) {
      return arguments.length ? ((n = Array.from(e)), i) : n.slice();
    }),
    (i.unknown = function (e) {
      return arguments.length ? ((r = e), i) : r;
    }),
    (i.copy = function () {
      return dy(t, n).unknown(r);
    }),
    cy.apply(i, arguments),
    i
  );
}
function fy() {
  var e = dy().unknown(void 0),
    t = e.domain,
    n = e.range,
    r = 0,
    i = 1,
    a,
    o,
    s = !1,
    c = 0,
    l = 0,
    u = 0.5;
  delete e.unknown;
  function d() {
    var e = t().length,
      d = i < r,
      f = d ? i : r,
      p = d ? r : i;
    ((a = (p - f) / Math.max(1, e - c + l * 2)),
      s && (a = Math.floor(a)),
      (f += (p - f - a * (e - c)) * u),
      (o = a * (1 - c)),
      s && ((f = Math.round(f)), (o = Math.round(o))));
    var m = Nm(e).map(function (e) {
      return f + a * e;
    });
    return n(d ? m.reverse() : m);
  }
  return (
    (e.domain = function (e) {
      return arguments.length ? (t(e), d()) : t();
    }),
    (e.range = function (e) {
      return arguments.length
        ? (([r, i] = e), (r = +r), (i = +i), d())
        : [r, i];
    }),
    (e.rangeRound = function (e) {
      return (([r, i] = e), (r = +r), (i = +i), (s = !0), d());
    }),
    (e.bandwidth = function () {
      return o;
    }),
    (e.step = function () {
      return a;
    }),
    (e.round = function (e) {
      return arguments.length ? ((s = !!e), d()) : s;
    }),
    (e.padding = function (e) {
      return arguments.length ? ((c = Math.min(1, (l = +e))), d()) : c;
    }),
    (e.paddingInner = function (e) {
      return arguments.length ? ((c = Math.min(1, e)), d()) : c;
    }),
    (e.paddingOuter = function (e) {
      return arguments.length ? ((l = +e), d()) : l;
    }),
    (e.align = function (e) {
      return arguments.length ? ((u = Math.max(0, Math.min(1, e))), d()) : u;
    }),
    (e.copy = function () {
      return fy(t(), [r, i]).round(s).paddingInner(c).paddingOuter(l).align(u);
    }),
    cy.apply(d(), arguments)
  );
}
function py(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return py(t());
    }),
    e
  );
}
function my() {
  return py(fy.apply(null, arguments).paddingInner(1));
}
function hy(e) {
  return function () {
    return e;
  };
}
function gy(e) {
  return +e;
}
var _y = [0, 1];
function vy(e) {
  return e;
}
function yy(e, t) {
  return (t -= e = +e)
    ? function (n) {
        return (n - e) / t;
      }
    : hy(isNaN(t) ? NaN : 0.5);
}
function by(e, t) {
  var n;
  return (
    e > t && ((n = e), (e = t), (t = n)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}
function xy(e, t, n) {
  var r = e[0],
    i = e[1],
    a = t[0],
    o = t[1];
  return (
    i < r ? ((r = yy(i, r)), (a = n(o, a))) : ((r = yy(r, i)), (a = n(a, o))),
    function (e) {
      return a(r(e));
    }
  );
}
function Sy(e, t, n) {
  var r = Math.min(e.length, t.length) - 1,
    i = Array(r),
    a = Array(r),
    o = -1;
  for (
    e[r] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++o < r;
  )
    ((i[o] = yy(e[o], e[o + 1])), (a[o] = n(t[o], t[o + 1])));
  return function (t) {
    var n = fm(e, t, 1, r) - 1;
    return a[n](i[n](t));
  };
}
function Cy(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function wy() {
  var e = _y,
    t = _y,
    n = hg,
    r,
    i,
    a,
    o = vy,
    s,
    c,
    l;
  function u() {
    var n = Math.min(e.length, t.length);
    return (
      o !== vy && (o = by(e[0], e[n - 1])),
      (s = n > 2 ? Sy : xy),
      (c = l = null),
      d
    );
  }
  function d(i) {
    return i == null || isNaN((i = +i))
      ? a
      : (c ||= s(e.map(r), t, n))(r(o(i)));
  }
  return (
    (d.invert = function (n) {
      return o(i((l ||= s(t, e.map(r), cg))(n)));
    }),
    (d.domain = function (t) {
      return arguments.length ? ((e = Array.from(t, gy)), u()) : e.slice();
    }),
    (d.range = function (e) {
      return arguments.length ? ((t = Array.from(e)), u()) : t.slice();
    }),
    (d.rangeRound = function (e) {
      return ((t = Array.from(e)), (n = gg), u());
    }),
    (d.clamp = function (e) {
      return arguments.length ? ((o = e ? !0 : vy), u()) : o !== vy;
    }),
    (d.interpolate = function (e) {
      return arguments.length ? ((n = e), u()) : n;
    }),
    (d.unknown = function (e) {
      return arguments.length ? ((a = e), d) : a;
    }),
    function (e, t) {
      return ((r = e), (i = t), u());
    }
  );
}
function Ty() {
  return wy()(vy, vy);
}
function Ey(e, t, n, r) {
  var i = Em(e, t, n),
    a;
  switch (((r = kg(r ?? `,f`)), r.type)) {
    case `s`:
      var o = Math.max(Math.abs(e), Math.abs(t));
      return (
        r.precision == null && !isNaN((a = Gg(i, o))) && (r.precision = a),
        Hg(r, o)
      );
    case ``:
    case `e`:
    case `g`:
    case `p`:
    case `r`:
      r.precision == null &&
        !isNaN((a = Kg(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (r.precision = a - (r.type === `e`));
      break;
    case `f`:
    case `%`:
      r.precision == null &&
        !isNaN((a = Wg(i))) &&
        (r.precision = a - (r.type === `%`) * 2);
  }
  return Vg(r);
}
function Dy(e) {
  var t = e.domain;
  return (
    (e.ticks = function (e) {
      var n = t();
      return wm(n[0], n[n.length - 1], e ?? 10);
    }),
    (e.tickFormat = function (e, n) {
      var r = t();
      return Ey(r[0], r[r.length - 1], e ?? 10, n);
    }),
    (e.nice = function (n) {
      n ??= 10;
      var r = t(),
        i = 0,
        a = r.length - 1,
        o = r[i],
        s = r[a],
        c,
        l,
        u = 10;
      for (
        s < o && ((l = o), (o = s), (s = l), (l = i), (i = a), (a = l));
        u-- > 0;
      ) {
        if (((l = Tm(o, s, n)), l === c)) return ((r[i] = o), (r[a] = s), t(r));
        if (l > 0) ((o = Math.floor(o / l) * l), (s = Math.ceil(s / l) * l));
        else if (l < 0)
          ((o = Math.ceil(o * l) / l), (s = Math.floor(s * l) / l));
        else break;
        c = l;
      }
      return e;
    }),
    e
  );
}
function Oy() {
  var e = Ty();
  return (
    (e.copy = function () {
      return Cy(e, Oy());
    }),
    cy.apply(e, arguments),
    Dy(e)
  );
}
function ky(e) {
  var t;
  function n(e) {
    return e == null || isNaN((e = +e)) ? t : e;
  }
  return (
    (n.invert = n),
    (n.domain = n.range =
      function (t) {
        return arguments.length ? ((e = Array.from(t, gy)), n) : e.slice();
      }),
    (n.unknown = function (e) {
      return arguments.length ? ((t = e), n) : t;
    }),
    (n.copy = function () {
      return ky(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, gy) : [0, 1]),
    Dy(n)
  );
}
function Ay(e, t) {
  e = e.slice();
  var n = 0,
    r = e.length - 1,
    i = e[n],
    a = e[r],
    o;
  return (
    a < i && ((o = n), (n = r), (r = o), (o = i), (i = a), (a = o)),
    (e[n] = t.floor(i)),
    (e[r] = t.ceil(a)),
    e
  );
}
function jy(e) {
  return Math.log(e);
}
function My(e) {
  return Math.exp(e);
}
function Ny(e) {
  return -Math.log(-e);
}
function Py(e) {
  return -Math.exp(-e);
}
function Fy(e) {
  return isFinite(e) ? +(`1e` + e) : e < 0 ? 0 : e;
}
function Iy(e) {
  return e === 10 ? Fy : e === Math.E ? Math.exp : (t) => e ** +t;
}
function Ly(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function Ry(e) {
  return (t, n) => -e(-t, n);
}
function zy(e) {
  let t = e(jy, My),
    n = t.domain,
    r = 10,
    i,
    a;
  function o() {
    return (
      (i = Ly(r)),
      (a = Iy(r)),
      n()[0] < 0 ? ((i = Ry(i)), (a = Ry(a)), e(Ny, Py)) : e(jy, My),
      t
    );
  }
  return (
    (t.base = function (e) {
      return arguments.length ? ((r = +e), o()) : r;
    }),
    (t.domain = function (e) {
      return arguments.length ? (n(e), o()) : n();
    }),
    (t.ticks = (e) => {
      let t = n(),
        o = t[0],
        s = t[t.length - 1],
        c = s < o;
      c && ([o, s] = [s, o]);
      let l = i(o),
        u = i(s),
        d,
        f,
        p = e == null ? 10 : +e,
        m = [];
      if (!(r % 1) && u - l < p) {
        if (((l = Math.floor(l)), (u = Math.ceil(u)), o > 0)) {
          for (; l <= u; ++l)
            for (d = 1; d < r; ++d)
              if (((f = l < 0 ? d / a(-l) : d * a(l)), !(f < o))) {
                if (f > s) break;
                m.push(f);
              }
        } else
          for (; l <= u; ++l)
            for (d = r - 1; d >= 1; --d)
              if (((f = l > 0 ? d / a(-l) : d * a(l)), !(f < o))) {
                if (f > s) break;
                m.push(f);
              }
        m.length * 2 < p && (m = wm(o, s, p));
      } else m = wm(l, u, Math.min(u - l, p)).map(a);
      return c ? m.reverse() : m;
    }),
    (t.tickFormat = (e, n) => {
      if (
        ((e ??= 10),
        (n ??= r === 10 ? `s` : `,`),
        typeof n != `function` &&
          (!(r % 1) && (n = kg(n)).precision == null && (n.trim = !0),
          (n = Vg(n))),
        e === 1 / 0)
      )
        return n;
      let o = Math.max(1, (r * e) / t.ticks().length);
      return (e) => {
        let t = e / a(Math.round(i(e)));
        return (t * r < r - 0.5 && (t *= r), t <= o ? n(e) : ``);
      };
    }),
    (t.nice = () =>
      n(
        Ay(n(), {
          floor: (e) => a(Math.floor(i(e))),
          ceil: (e) => a(Math.ceil(i(e))),
        }),
      )),
    t
  );
}
function By() {
  let e = zy(wy()).domain([1, 10]);
  return (
    (e.copy = () => Cy(e, By()).base(e.base())),
    cy.apply(e, arguments),
    e
  );
}
function Vy(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Hy(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Uy(e) {
  var t = 1,
    n = e(Vy(t), Hy(t));
  return (
    (n.constant = function (n) {
      return arguments.length ? e(Vy((t = +n)), Hy(t)) : t;
    }),
    Dy(n)
  );
}
function Wy() {
  var e = Uy(wy());
  return (
    (e.copy = function () {
      return Cy(e, Wy()).constant(e.constant());
    }),
    cy.apply(e, arguments)
  );
}
function Gy(e) {
  return function (t) {
    return t < 0 ? -((-t) ** +e) : t ** +e;
  };
}
function Ky(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function qy(e) {
  return e < 0 ? -e * e : e * e;
}
function Jy(e) {
  var t = e(vy, vy),
    n = 1;
  function r() {
    return n === 1 ? e(vy, vy) : n === 0.5 ? e(Ky, qy) : e(Gy(n), Gy(1 / n));
  }
  return (
    (t.exponent = function (e) {
      return arguments.length ? ((n = +e), r()) : n;
    }),
    Dy(t)
  );
}
function Yy() {
  var e = Jy(wy());
  return (
    (e.copy = function () {
      return Cy(e, Yy()).exponent(e.exponent());
    }),
    cy.apply(e, arguments),
    e
  );
}
function Xy() {
  return Yy.apply(null, arguments).exponent(0.5);
}
function Zy(e) {
  return Math.sign(e) * e * e;
}
function Qy(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function $y() {
  var e = Ty(),
    t = [0, 1],
    n = !1,
    r;
  function i(t) {
    var i = Qy(e(t));
    return isNaN(i) ? r : n ? Math.round(i) : i;
  }
  return (
    (i.invert = function (t) {
      return e.invert(Zy(t));
    }),
    (i.domain = function (t) {
      return arguments.length ? (e.domain(t), i) : e.domain();
    }),
    (i.range = function (n) {
      return arguments.length
        ? (e.range((t = Array.from(n, gy)).map(Zy)), i)
        : t.slice();
    }),
    (i.rangeRound = function (e) {
      return i.range(e).round(!0);
    }),
    (i.round = function (e) {
      return arguments.length ? ((n = !!e), i) : n;
    }),
    (i.clamp = function (t) {
      return arguments.length ? (e.clamp(t), i) : e.clamp();
    }),
    (i.unknown = function (e) {
      return arguments.length ? ((r = e), i) : r;
    }),
    (i.copy = function () {
      return $y(e.domain(), t).round(n).clamp(e.clamp()).unknown(r);
    }),
    cy.apply(i, arguments),
    Dy(i)
  );
}
function eb() {
  var e = [],
    t = [],
    n = [],
    r;
  function i() {
    var r = 0,
      i = Math.max(1, t.length);
    for (n = Array(i - 1); ++r < i; ) n[r - 1] = Mm(e, r / i);
    return a;
  }
  function a(e) {
    return e == null || isNaN((e = +e)) ? r : t[fm(n, e)];
  }
  return (
    (a.invertExtent = function (r) {
      var i = t.indexOf(r);
      return i < 0
        ? [NaN, NaN]
        : [i > 0 ? n[i - 1] : e[0], i < n.length ? n[i] : e[e.length - 1]];
    }),
    (a.domain = function (t) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let n of t) n != null && !isNaN((n = +n)) && e.push(n);
      return (e.sort(am), i());
    }),
    (a.range = function (e) {
      return arguments.length ? ((t = Array.from(e)), i()) : t.slice();
    }),
    (a.unknown = function (e) {
      return arguments.length ? ((r = e), a) : r;
    }),
    (a.quantiles = function () {
      return n.slice();
    }),
    (a.copy = function () {
      return eb().domain(e).range(t).unknown(r);
    }),
    cy.apply(a, arguments)
  );
}
function tb() {
  var e = 0,
    t = 1,
    n = 1,
    r = [0.5],
    i = [0, 1],
    a;
  function o(e) {
    return e != null && e <= e ? i[fm(r, e, 0, n)] : a;
  }
  function s() {
    var i = -1;
    for (r = Array(n); ++i < n; ) r[i] = ((i + 1) * t - (i - n) * e) / (n + 1);
    return o;
  }
  return (
    (o.domain = function (n) {
      return arguments.length
        ? (([e, t] = n), (e = +e), (t = +t), s())
        : [e, t];
    }),
    (o.range = function (e) {
      return arguments.length
        ? ((n = (i = Array.from(e)).length - 1), s())
        : i.slice();
    }),
    (o.invertExtent = function (a) {
      var o = i.indexOf(a);
      return o < 0
        ? [NaN, NaN]
        : o < 1
          ? [e, r[0]]
          : o >= n
            ? [r[n - 1], t]
            : [r[o - 1], r[o]];
    }),
    (o.unknown = function (e) {
      return (arguments.length && (a = e), o);
    }),
    (o.thresholds = function () {
      return r.slice();
    }),
    (o.copy = function () {
      return tb().domain([e, t]).range(i).unknown(a);
    }),
    cy.apply(Dy(o), arguments)
  );
}
function nb() {
  var e = [0.5],
    t = [0, 1],
    n,
    r = 1;
  function i(i) {
    return i != null && i <= i ? t[fm(e, i, 0, r)] : n;
  }
  return (
    (i.domain = function (n) {
      return arguments.length
        ? ((e = Array.from(n)), (r = Math.min(e.length, t.length - 1)), i)
        : e.slice();
    }),
    (i.range = function (n) {
      return arguments.length
        ? ((t = Array.from(n)), (r = Math.min(e.length, t.length - 1)), i)
        : t.slice();
    }),
    (i.invertExtent = function (n) {
      var r = t.indexOf(n);
      return [e[r - 1], e[r]];
    }),
    (i.unknown = function (e) {
      return arguments.length ? ((n = e), i) : n;
    }),
    (i.copy = function () {
      return nb().domain(e).range(t).unknown(n);
    }),
    cy.apply(i, arguments)
  );
}
function rb(e) {
  return new Date(e);
}
function ib(e) {
  return e instanceof Date ? +e : Math.round(e);
}
function ab(e, t, n, r, i, a, o, s, c, l) {
  var u = Ty(),
    d = u.invert,
    f = u.domain,
    p = l(`.%L`),
    m = l(`:%S`),
    h = l(`%I:%M`),
    g = l(`%I %p`),
    _ = l(`%a %d`),
    v = l(`%b %d`),
    y = l(`%B`),
    b = l(`%Y`);
  function x(e) {
    return (
      c(e) < e
        ? p
        : s(e) < e
          ? m
          : o(e) < e
            ? h
            : a(e) < e
              ? g
              : r(e) < e
                ? i(e) < e
                  ? _
                  : v
                : n(e) < e
                  ? y
                  : b
    )(e);
  }
  return (
    (u.invert = function (e) {
      return new Date(Math.round(d(e)));
    }),
    (u.domain = function (e) {
      return arguments.length ? f(Array.from(e, ib)) : f().map(rb);
    }),
    (u.ticks = function (t) {
      var n = f();
      return e(n[0], n[n.length - 1], t ?? 10);
    }),
    (u.tickFormat = function (e, t) {
      return t == null ? x : l(t);
    }),
    (u.nice = function (e) {
      var n = f();
      return (
        (e && typeof e.range == `function`) ||
          (e = t(n[0], n[n.length - 1], e ?? 10)),
        e ? f(Ay(n, e)) : u
      );
    }),
    (u.copy = function () {
      return Cy(u, ab(e, t, n, r, i, a, o, s, c, l));
    }),
    u
  );
}
function ob() {
  return cy.apply(
    ab(P_, F_, k_, D_, f_, c_, o_, i_, r_, ry).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments,
  );
}
function sb() {
  return cy.apply(
    ab(M_, N_, A_, O_, b_, l_, s_, a_, r_, iy).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments,
  );
}
function cb() {
  var e = 0,
    t = 1,
    n,
    r,
    i,
    a,
    o = vy,
    s = !1,
    c;
  function l(e) {
    return e == null || isNaN((e = +e))
      ? c
      : o(
          i === 0
            ? 0.5
            : ((e = (a(e) - n) * i), s ? Math.max(0, Math.min(1, e)) : e),
        );
  }
  ((l.domain = function (o) {
    return arguments.length
      ? (([e, t] = o),
        (n = a((e = +e))),
        (r = a((t = +t))),
        (i = n === r ? 0 : 1 / (r - n)),
        l)
      : [e, t];
  }),
    (l.clamp = function (e) {
      return arguments.length ? ((s = !!e), l) : s;
    }),
    (l.interpolator = function (e) {
      return arguments.length ? ((o = e), l) : o;
    }));
  function u(e) {
    return function (t) {
      var n, r;
      return arguments.length ? (([n, r] = t), (o = e(n, r)), l) : [o(0), o(1)];
    };
  }
  return (
    (l.range = u(hg)),
    (l.rangeRound = u(gg)),
    (l.unknown = function (e) {
      return arguments.length ? ((c = e), l) : c;
    }),
    function (o) {
      return (
        (a = o),
        (n = o(e)),
        (r = o(t)),
        (i = n === r ? 0 : 1 / (r - n)),
        l
      );
    }
  );
}
function lb(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function ub() {
  var e = Dy(cb()(vy));
  return (
    (e.copy = function () {
      return lb(e, ub());
    }),
    ly.apply(e, arguments)
  );
}
function db() {
  var e = zy(cb()).domain([1, 10]);
  return (
    (e.copy = function () {
      return lb(e, db()).base(e.base());
    }),
    ly.apply(e, arguments)
  );
}
function fb() {
  var e = Uy(cb());
  return (
    (e.copy = function () {
      return lb(e, fb()).constant(e.constant());
    }),
    ly.apply(e, arguments)
  );
}
function pb() {
  var e = Jy(cb());
  return (
    (e.copy = function () {
      return lb(e, pb()).exponent(e.exponent());
    }),
    ly.apply(e, arguments)
  );
}
function mb() {
  return pb.apply(null, arguments).exponent(0.5);
}
function hb() {
  var e = [],
    t = vy;
  function n(n) {
    if (n != null && !isNaN((n = +n)))
      return t((fm(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (n.domain = function (t) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let n of t) n != null && !isNaN((n = +n)) && e.push(n);
      return (e.sort(am), n);
    }),
    (n.interpolator = function (e) {
      return arguments.length ? ((t = e), n) : t;
    }),
    (n.range = function () {
      return e.map((n, r) => t(r / (e.length - 1)));
    }),
    (n.quantiles = function (t) {
      return Array.from({ length: t + 1 }, (n, r) => jm(e, r / t));
    }),
    (n.copy = function () {
      return hb(t).domain(e);
    }),
    ly.apply(n, arguments)
  );
}
function gb() {
  var e = 0,
    t = 0.5,
    n = 1,
    r = 1,
    i,
    a,
    o,
    s,
    c,
    l = vy,
    u,
    d = !1,
    f;
  function p(e) {
    return e == null || isNaN((e = +e))
      ? f
      : ((e = 0.5 + ((e = +u(e)) - a) * (r * e < r * a ? s : c)),
        l(d ? Math.max(0, Math.min(1, e)) : e));
  }
  ((p.domain = function (l) {
    return arguments.length
      ? (([e, t, n] = l),
        (i = u((e = +e))),
        (a = u((t = +t))),
        (o = u((n = +n))),
        (s = i === a ? 0 : 0.5 / (a - i)),
        (c = a === o ? 0 : 0.5 / (o - a)),
        (r = a < i ? -1 : 1),
        p)
      : [e, t, n];
  }),
    (p.clamp = function (e) {
      return arguments.length ? ((d = !!e), p) : d;
    }),
    (p.interpolator = function (e) {
      return arguments.length ? ((l = e), p) : l;
    }));
  function m(e) {
    return function (t) {
      var n, r, i;
      return arguments.length
        ? (([n, r, i] = t), (l = Sg(e, [n, r, i])), p)
        : [l(0), l(0.5), l(1)];
    };
  }
  return (
    (p.range = m(hg)),
    (p.rangeRound = m(gg)),
    (p.unknown = function (e) {
      return arguments.length ? ((f = e), p) : f;
    }),
    function (l) {
      return (
        (u = l),
        (i = l(e)),
        (a = l(t)),
        (o = l(n)),
        (s = i === a ? 0 : 0.5 / (a - i)),
        (c = a === o ? 0 : 0.5 / (o - a)),
        (r = a < i ? -1 : 1),
        p
      );
    }
  );
}
function _b() {
  var e = Dy(gb()(vy));
  return (
    (e.copy = function () {
      return lb(e, _b());
    }),
    ly.apply(e, arguments)
  );
}
function vb() {
  var e = zy(gb()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return lb(e, vb()).base(e.base());
    }),
    ly.apply(e, arguments)
  );
}
function yb() {
  var e = Uy(gb());
  return (
    (e.copy = function () {
      return lb(e, yb()).constant(e.constant());
    }),
    ly.apply(e, arguments)
  );
}
function bb() {
  var e = Jy(gb());
  return (
    (e.copy = function () {
      return lb(e, bb()).exponent(e.exponent());
    }),
    ly.apply(e, arguments)
  );
}
function xb() {
  return bb.apply(null, arguments).exponent(0.5);
}
var Sb = a({
  scaleBand: () => fy,
  scaleDiverging: () => _b,
  scaleDivergingLog: () => vb,
  scaleDivergingPow: () => bb,
  scaleDivergingSqrt: () => xb,
  scaleDivergingSymlog: () => yb,
  scaleIdentity: () => ky,
  scaleImplicit: () => uy,
  scaleLinear: () => Oy,
  scaleLog: () => By,
  scaleOrdinal: () => dy,
  scalePoint: () => my,
  scalePow: () => Yy,
  scaleQuantile: () => eb,
  scaleQuantize: () => tb,
  scaleRadial: () => $y,
  scaleSequential: () => ub,
  scaleSequentialLog: () => db,
  scaleSequentialPow: () => pb,
  scaleSequentialQuantile: () => hb,
  scaleSequentialSqrt: () => mb,
  scaleSequentialSymlog: () => fb,
  scaleSqrt: () => Xy,
  scaleSymlog: () => Wy,
  scaleThreshold: () => nb,
  scaleTime: () => ob,
  scaleUtc: () => sb,
  tickFormat: () => Ey,
});
function Cb(e) {
  var t = Sb;
  if (e in t && typeof t[e] == `function`) return t[e]();
  var n = `scale${Me(e)}`;
  if (n in t && typeof t[n] == `function`) return t[n]();
}
function wb(e, t, n) {
  if (typeof e == `function`) return e.copy().domain(t).range(n);
  if (e != null) {
    var r = Cb(e);
    if (r != null) return (r.domain(t).range(n), r);
  }
}
function Tb(e, t, n, r) {
  if (n != null && r != null)
    return typeof e.scale == `function` ? wb(e.scale, n, r) : wb(t, n, r);
}
function Eb(e) {
  return `scale${Me(e)}`;
}
function Db(e) {
  return Eb(e) in Sb;
}
var Ob = (e, t, n) => {
  if (e != null) {
    var r = e.scale,
      i = e.type;
    if (r === `auto`)
      return i === `category` &&
        n &&
        (n.indexOf(`LineChart`) >= 0 ||
          n.indexOf(`AreaChart`) >= 0 ||
          (n.indexOf(`ComposedChart`) >= 0 && !t))
        ? `point`
        : i === `category`
          ? `band`
          : `linear`;
    if (typeof r == `string`) return Db(r) ? r : `point`;
  }
};
function kb(e, t) {
  for (var n = 0, r = e.length, i = e[0] < e[e.length - 1]; n < r; ) {
    var a = Math.floor((n + r) / 2);
    (i ? e[a] < t : e[a] > t) ? (n = a + 1) : (r = a);
  }
  return n;
}
function Ab(e, t) {
  if (e) {
    var n = t ?? e.domain(),
      r = n.map((t) => e(t) ?? 0),
      i = e.range();
    if (!(n.length === 0 || i.length < 2))
      return (e) => {
        var t = kb(r, e);
        if (t <= 0) return n[0];
        if (t >= n.length) return n[n.length - 1];
        var i = r[t - 1] ?? 0,
          a = r[t] ?? 0;
        return Math.abs(e - i) <= Math.abs(e - a) ? n[t - 1] : n[t];
      };
  }
}
function jb(e) {
  if (e != null)
    return `invert` in e && typeof e.invert == `function`
      ? e.invert.bind(e)
      : Ab(e, void 0);
}
function Mb(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Nb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Mb(Object(n), !0).forEach(function (t) {
          Pb(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Mb(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Pb(e, t, n) {
  return (
    (t = Fb(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Fb(e) {
  var t = Ib(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Ib(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Lb(e, t) {
  return Hb(e) || Vb(e, t) || zb(e, t) || Rb();
}
function Rb() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zb(e, t) {
  if (e) {
    if (typeof e == `string`) return Bb(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Bb(e, t)
          : void 0
    );
  }
}
function Bb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Vb(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function Hb(e) {
  if (Array.isArray(e)) return e;
}
var Ub = [0, `auto`],
  Y = {
    allowDataOverflow: !1,
    allowDecimals: !0,
    allowDuplicatedCategory: !0,
    angle: 0,
    dataKey: void 0,
    domain: void 0,
    height: 30,
    hide: !0,
    id: 0,
    includeHidden: !1,
    interval: `preserveEnd`,
    minTickGap: 5,
    mirror: !1,
    name: void 0,
    orientation: `bottom`,
    padding: { left: 0, right: 0 },
    reversed: !1,
    scale: `auto`,
    tick: !0,
    tickCount: 5,
    tickFormatter: void 0,
    ticks: void 0,
    type: `category`,
    unit: void 0,
    niceTicks: `auto`,
  },
  Wb = (e, t) => e.cartesianAxis.xAxis[t],
  Gb = (e, t) => Wb(e, t) ?? Y,
  Kb = {
    allowDataOverflow: !1,
    allowDecimals: !0,
    allowDuplicatedCategory: !0,
    angle: 0,
    dataKey: void 0,
    domain: Ub,
    hide: !0,
    id: 0,
    includeHidden: !1,
    interval: `preserveEnd`,
    minTickGap: 5,
    mirror: !1,
    name: void 0,
    orientation: `left`,
    padding: { top: 0, bottom: 0 },
    reversed: !1,
    scale: `auto`,
    tick: !0,
    tickCount: 5,
    tickFormatter: void 0,
    ticks: void 0,
    type: `number`,
    unit: void 0,
    niceTicks: `auto`,
    width: 60,
  },
  qb = (e, t) => e.cartesianAxis.yAxis[t],
  Jb = (e, t) => qb(e, t) ?? Kb,
  Yb = {
    domain: [0, `auto`],
    includeHidden: !1,
    reversed: !1,
    allowDataOverflow: !1,
    allowDuplicatedCategory: !1,
    dataKey: void 0,
    id: 0,
    name: ``,
    range: [64, 64],
    scale: `auto`,
    type: `number`,
    unit: ``,
  },
  Xb = (e, t) => e.cartesianAxis.zAxis[t] ?? Yb,
  Zb = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return Gb(e, n);
      case `yAxis`:
        return Jb(e, n);
      case `zAxis`:
        return Xb(e, n);
      case `angleAxis`:
        return Rp(e, n);
      case `radiusAxis`:
        return zp(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  Qb = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return Gb(e, n);
      case `yAxis`:
        return Jb(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  $b = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return Gb(e, n);
      case `yAxis`:
        return Jb(e, n);
      case `angleAxis`:
        return Rp(e, n);
      case `radiusAxis`:
        return zp(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  ex = (e) =>
    e.graphicalItems.cartesianItems.some((e) => e.type === `bar`) ||
    e.graphicalItems.polarItems.some((e) => e.type === `radialBar`);
function tx(e, t) {
  return (n) => {
    switch (e) {
      case `xAxis`:
        return `xAxisId` in n && n.xAxisId === t;
      case `yAxis`:
        return `yAxisId` in n && n.yAxisId === t;
      case `zAxis`:
        return `zAxisId` in n && n.zAxisId === t;
      case `angleAxis`:
        return `angleAxisId` in n && n.angleAxisId === t;
      case `radiusAxis`:
        return `radiusAxisId` in n && n.radiusAxisId === t;
      default:
        return !1;
    }
  };
}
var nx = (e) => e.graphicalItems.cartesianItems,
  rx = z([qp, Jp], tx),
  ix = (e, t, n) =>
    e.filter(n).filter((e) => t?.includeHidden === !0 || !e.hide),
  ax = z([nx, Zb, rx], ix, { memoizeOptions: { resultEqualityCheck: $p } }),
  ox = z([ax], (e) =>
    e.filter((e) => e.type === `area` || e.type === `bar`).filter(Zp),
  ),
  sx = (e) => e.filter((e) => !(`stackId` in e) || e.stackId === void 0),
  cx = z([ax], sx),
  lx = (e) =>
    e
      .map((e) => e.data)
      .filter(Boolean)
      .flat(1),
  ux = z([ax], (e) => e.some((e) => !e.data)),
  dx = z([ax], lx, { memoizeOptions: { resultEqualityCheck: $p } }),
  fx = (e, t) => {
    var n = t.chartData,
      r = n === void 0 ? [] : n,
      i = t.dataStartIndex,
      a = t.dataEndIndex;
    return e.length > 0 ? e : r.slice(i, a + 1);
  },
  px = z([dx, Vf], fx),
  mx = (e, t, n) =>
    t?.dataKey == null
      ? n.length > 0
        ? n
            .map((e) => e.dataKey)
            .flatMap((t) => e.map((e) => ({ value: U(e, t) })))
        : e.map((e) => ({ value: e }))
      : e.map((e) => ({ value: U(e, t.dataKey) })),
  hx = (e, t, n, r, i, a) => {
    var o = r.chartData,
      s = o === void 0 ? [] : o,
      c = r.dataStartIndex,
      l = r.dataEndIndex,
      u = mx(e, t, n);
    return i && t?.dataKey != null && a.length > 0
      ? [
          ...s
            .slice(c, l + 1)
            .map((e) => ({ value: U(e, t.dataKey) }))
            .filter((e) => e.value != null),
          ...u,
        ]
      : u;
  },
  gx = z([px, Zb, ax, Vf, ux, dx], hx);
function _x(e) {
  if (Te(e) || e instanceof Date) {
    var t = Number(e);
    if (H(t)) return t;
  }
}
function vx(e) {
  if (Array.isArray(e)) {
    var t = [_x(e[0]), _x(e[1])];
    return Zf(t) ? t : void 0;
  }
  var n = _x(e);
  if (n != null) return [n, n];
}
function yx(e) {
  return e.map(_x).filter(Ne);
}
function bx(e, t) {
  var n = _x(e),
    r = _x(t);
  return n == null && r == null ? 0 : n == null ? -1 : r == null ? 1 : n - r;
}
var xx = z([gx], (e) => e?.map((e) => e.value).sort(bx));
function Sx(e, t) {
  switch (e) {
    case `xAxis`:
      return t.direction === `x`;
    case `yAxis`:
      return t.direction === `y`;
    default:
      return !1;
  }
}
function Cx(e, t, n) {
  if (!n || !n.length) return [];
  var r;
  if (typeof t == `number` && !Ce(t)) r = t;
  else if (Array.isArray(t)) {
    var i = yx(t);
    i.length > 0 && (r = Math.max(...i));
  }
  return r == null
    ? []
    : yx(
        n.flatMap((t) => {
          var n = U(e, t.dataKey),
            i,
            a;
          if (Array.isArray(n)) {
            var o = Lb(n, 2);
            ((i = o[0]), (a = o[1]));
          } else i = a = n;
          if (H(i) && H(a)) return [r - i, r + a];
        }),
      );
}
var X = (e) => $b(e, tm(e), nm(e)),
  wx = z([X], (e) => e?.dataKey),
  Tx = z([ox, Vf, X], Xp),
  Ex = (e, t, n, r) => {
    var i = t.reduce((e, t) => {
      if (t.stackId == null) return e;
      var n = e[t.stackId];
      return ((n ??= []), n.push(t), (e[t.stackId] = n), e);
    }, {});
    return Object.fromEntries(
      Object.entries(i).map((t) => {
        var i = Lb(t, 2),
          a = i[0],
          o = i[1],
          s = r ? [...o].reverse() : o;
        return [a, { stackedData: Ms(e, s.map(Yp), n), graphicalItems: s }];
      }),
    );
  },
  Dx = z([Tx, ox, bp, xp], Ex),
  Ox = (e, t, n, r) => {
    var i = t.dataStartIndex,
      a = t.dataEndIndex;
    if (r == null && n !== `zAxis`) return Rs(e, i, a);
  },
  kx = z([Zb], (e) => e.allowDataOverflow),
  Ax = (e) => {
    if (e == null || !(`domain` in e)) return Ub;
    if (e.domain != null) return e.domain;
    if (`ticks` in e && e.ticks != null) {
      if (e.type === `number`) {
        var t = yx(e.ticks);
        return [Math.min(...t), Math.max(...t)];
      }
      if (e.type === `category`) return e.ticks.map(String);
    }
    return e?.domain ?? Ub;
  },
  jx = z([Zb], Ax),
  Mx = z([jx, kx], $f),
  Nx = z([Dx, zf, qp, Mx], Ox, { memoizeOptions: { resultEqualityCheck: Qp } }),
  Px = (e) => e.errorBars,
  Fx = (e, t, n) =>
    e
      .flatMap((e) => t[e.id])
      .filter(Boolean)
      .filter((e) => Sx(n, e)),
  Ix = function () {
    var e = [...arguments].filter(Boolean);
    if (e.length !== 0) {
      var t = e.flat();
      return [Math.min(...t), Math.max(...t)];
    }
  },
  Lx = function (e, t, n, r, i) {
    var a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
      o,
      s;
    if (
      (n.length > 0 &&
        n.forEach((e) => {
          var n = e.data == null ? a : [...e.data],
            c = r[e.id]?.filter((e) => Sx(i, e));
          n.forEach((n) => {
            var r = U(n, t.dataKey ?? e.dataKey),
              i = Cx(n, r, c);
            if (i.length >= 2) {
              var a = Math.min(...i),
                l = Math.max(...i);
              ((o == null || a < o) && (o = a),
                (s == null || l > s) && (s = l));
            }
            var u = vx(r);
            u != null &&
              ((o = o == null ? u[0] : Math.min(o, u[0])),
              (s = s == null ? u[1] : Math.max(s, u[1])));
          });
        }),
      t?.dataKey != null &&
        n.length === 0 &&
        e.forEach((e) => {
          var n = vx(U(e, t.dataKey));
          n != null &&
            ((o = o == null ? n[0] : Math.min(o, n[0])),
            (s = s == null ? n[1] : Math.max(s, n[1])));
        }),
      H(o) && H(s))
    )
      return [o, s];
  },
  Rx = z([px, Zb, cx, Px, qp, Uf], Lx, {
    memoizeOptions: { resultEqualityCheck: Qp },
  });
function zx(e) {
  var t = e.value;
  if (Te(t) || t instanceof Date) return t;
}
var Bx = (e, t, n) => {
    var r = e.map(zx).filter((e) => e != null);
    return n && (t.dataKey == null || (t.allowDuplicatedCategory && ke(r)))
      ? Rf(0, e.length)
      : t.allowDuplicatedCategory
        ? r
        : Array.from(new Set(r));
  },
  Vx = (e) => e.referenceElements.dots,
  Hx = (e, t, n) =>
    e
      .filter((e) => e.ifOverflow === `extendDomain`)
      .filter((e) => (t === `xAxis` ? e.xAxisId === n : e.yAxisId === n)),
  Ux = z([Vx, qp, Jp], Hx),
  Wx = (e) => e.referenceElements.areas,
  Gx = z([Wx, qp, Jp], Hx),
  Kx = (e) => e.referenceElements.lines,
  qx = z([Kx, qp, Jp], Hx),
  Jx = (e, t) => {
    if (e != null) {
      var n = yx(e.map((e) => (t === `xAxis` ? e.x : e.y)));
      if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
    }
  },
  Yx = z(Ux, qp, Jx),
  Xx = (e, t) => {
    if (e != null) {
      var n = yx(
        e.flatMap((e) => [
          t === `xAxis` ? e.x1 : e.y1,
          t === `xAxis` ? e.x2 : e.y2,
        ]),
      );
      if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
    }
  },
  Zx = z([Gx, qp], Xx);
function Qx(e) {
  if (e.x != null) return yx([e.x]);
  var t = e.segment?.map((e) => e.x);
  return t == null || t.length === 0 ? [] : yx(t);
}
function $x(e) {
  if (e.y != null) return yx([e.y]);
  var t = e.segment?.map((e) => e.y);
  return t == null || t.length === 0 ? [] : yx(t);
}
var eS = (e, t) => {
    if (e != null) {
      var n = e.flatMap((e) => (t === `xAxis` ? Qx(e) : $x(e)));
      if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
    }
  },
  tS = z(Yx, z([qx, qp], eS), Zx, (e, t, n) => Ix(e, n, t)),
  nS = (e, t, n, r, i, a, o, s, c) => {
    if (n != null) return n;
    var l =
        (o === `vertical` && s === `xAxis`) ||
        (o === `horizontal` && s === `yAxis`)
          ? Ix(r, a, i)
          : Ix(a, i),
      u = ep(t, l, e.allowDataOverflow);
    return u == null && e.allowDataOverflow && l == null && c != null ? c : u;
  },
  rS = z(
    [
      Zb,
      jx,
      Mx,
      Nx,
      Rx,
      tS,
      G,
      qp,
      z(
        [Zb],
        (e) => {
          if (
            e != null &&
            e.type === `number` &&
            `ticks` in e &&
            e.ticks != null
          ) {
            var t = yx(e.ticks);
            if (t.length !== 0) return [Math.min(...t), Math.max(...t)];
          }
        },
        { memoizeOptions: { resultEqualityCheck: Qp } },
      ),
    ],
    nS,
    { memoizeOptions: { resultEqualityCheck: Qp } },
  ),
  iS = [0, 1],
  aS = (e, t, n, r, i, a, o) => {
    if ((e != null && n != null && n.length !== 0) || o !== void 0) {
      var s = e.dataKey,
        c = e.type,
        l = ks(t, a);
      return l && s == null
        ? Rf(0, n?.length ?? 0)
        : c === `category`
          ? Bx(r, e, l)
          : i === `expand` && !l
            ? iS
            : o;
    }
  },
  oS = z([Zb, G, px, gx, bp, qp, rS], aS),
  sS = z([Zb, ex, Sp], Ob),
  cS = (e, t, n) => {
    var r = t.niceTicks;
    if (r !== `none`) {
      var i = Ax(t),
        a = Array.isArray(i) && (i[0] === `auto` || i[1] === `auto`);
      if (
        (r === `snap125` || r === `adaptive`) &&
        t != null &&
        t.tickCount &&
        Zf(e)
      ) {
        if (a) return mp(e, t.tickCount, t.allowDecimals, r);
        if (t.type === `number`) return hp(e, t.tickCount, t.allowDecimals, r);
      }
      if (r === `auto` && n === `linear` && t != null && t.tickCount) {
        if (a && Zf(e)) return mp(e, t.tickCount, t.allowDecimals, `adaptive`);
        if (t.type === `number` && Zf(e))
          return hp(e, t.tickCount, t.allowDecimals, `adaptive`);
      }
    }
  },
  lS = z([oS, $b, sS], cS),
  uS = (e, t, n, r) => {
    if (
      r !== `angleAxis` &&
      e?.type === `number` &&
      Zf(t) &&
      Array.isArray(n) &&
      n.length > 0
    ) {
      var i = t[0],
        a = n[0] ?? 0,
        o = t[1],
        s = n[n.length - 1] ?? 0;
      return [Math.min(i, a), Math.max(o, s)];
    }
    return t;
  },
  dS = z([Zb, oS, lS, qp], uS),
  fS = z(
    z(gx, Zb, (e, t) => {
      if (t && t.type === `number`) {
        var n = 1 / 0,
          r = Array.from(yx(e.map((e) => e.value))).sort((e, t) => e - t),
          i = r[0],
          a = r[r.length - 1];
        if (i == null || a == null) return 1 / 0;
        var o = a - i;
        if (o === 0) return 1 / 0;
        for (var s = 0; s < r.length - 1; s++) {
          var c = r[s],
            l = r[s + 1];
          if (c != null && l != null) {
            var u = l - c;
            n = Math.min(n, u);
          }
        }
        return n / o;
      }
    }),
    G,
    vp,
    W,
    (e, t, n, r, i) => i,
    (e, t, n, r, i) => {
      if (!H(e)) return 0;
      var a = t === `vertical` ? r.height : r.width;
      if (i === `gap`) return (e * a) / 2;
      if (i === `no-gap`) {
        var o = Oe(n, e * a),
          s = (e * a) / 2;
        return s - o - ((s - o) / a) * o;
      }
      return 0;
    },
  ),
  pS = (e, t, n) => {
    var r = Gb(e, t);
    return r == null || typeof r.padding != `string`
      ? 0
      : fS(e, `xAxis`, t, n, r.padding);
  },
  mS = (e, t, n) => {
    var r = Jb(e, t);
    return r == null || typeof r.padding != `string`
      ? 0
      : fS(e, `yAxis`, t, n, r.padding);
  },
  hS = z(Gb, pS, (e, t) => {
    if (e == null) return { left: 0, right: 0 };
    var n = e.padding;
    return typeof n == `string`
      ? { left: t, right: t }
      : { left: (n.left ?? 0) + t, right: (n.right ?? 0) + t };
  }),
  gS = z(Jb, mS, (e, t) => {
    if (e == null) return { top: 0, bottom: 0 };
    var n = e.padding;
    return typeof n == `string`
      ? { top: t, bottom: t }
      : { top: (n.top ?? 0) + t, bottom: (n.bottom ?? 0) + t };
  }),
  _S = z([W, hS, mc, pc, (e, t, n) => n], (e, t, n, r, i) => {
    var a = r.padding;
    return i
      ? [a.left, n.width - a.right]
      : [e.left + t.left, e.left + e.width - t.right];
  }),
  vS = z([W, G, gS, mc, pc, (e, t, n) => n], (e, t, n, r, i, a) => {
    var o = i.padding;
    return a
      ? [r.height - o.bottom, o.top]
      : t === `horizontal`
        ? [e.top + e.height - n.bottom, e.top + n.top]
        : [e.top + n.top, e.top + e.height - n.bottom];
  }),
  yS = (e, t, n, r) => {
    switch (t) {
      case `xAxis`:
        return _S(e, n, r);
      case `yAxis`:
        return vS(e, n, r);
      case `zAxis`:
        return Xb(e, n)?.range;
      case `angleAxis`:
        return Wp(e);
      case `radiusAxis`:
        return Gp(e, n);
      default:
        return;
    }
  },
  bS = z([Zb, yS], kp),
  xS = z([Zb, sS, z([sS, dS], im), bS], Tb),
  SS = (e, t, n, r) => {
    if (n != null && n.dataKey != null) {
      var i = n.type,
        a = n.scale;
      if (ks(e, r) && (i === `number` || a !== `auto`))
        return t.map((e) => e.value);
    }
  },
  CS = z([G, gx, $b, qp], SS),
  wS = z([xS], rm);
(z([xS], jb), z([xS, xx], Ab), z([ax, Px, qp], Fx));
function TS(e, t) {
  return e.id < t.id ? -1 : +(e.id > t.id);
}
var ES = (e, t) => t,
  DS = (e, t, n) => n,
  OS = z(Xs, ES, DS, (e, t, n) =>
    e
      .filter((e) => e.orientation === t)
      .filter((e) => e.mirror === n)
      .sort(TS),
  ),
  kS = z(Zs, ES, DS, (e, t, n) =>
    e
      .filter((e) => e.orientation === t)
      .filter((e) => e.mirror === n)
      .sort(TS),
  ),
  AS = (e, t) => {
    var n = typeof t.height == `number` ? t.height : 30;
    return { width: e.width, height: n };
  },
  jS = (e, t) => ({
    width: typeof t.width == `number` ? t.width : 60,
    height: e.height,
  }),
  MS = z(W, Gb, AS),
  NS = (e, t, n) => {
    switch (t) {
      case `top`:
        return e.top;
      case `bottom`:
        return n - e.bottom;
      default:
        return 0;
    }
  },
  PS = (e, t, n) => {
    switch (t) {
      case `left`:
        return e.left;
      case `right`:
        return n - e.right;
      default:
        return 0;
    }
  },
  FS = z(qs, W, OS, ES, DS, (e, t, n, r, i) => {
    var a = {},
      o;
    return (
      n.forEach((n) => {
        var s = AS(t, n);
        o ??= NS(t, r, e);
        var c = (r === `top` && !i) || (r === `bottom` && i);
        ((a[n.id] = o - Number(c) * s.height), (o += (c ? -1 : 1) * s.height));
      }),
      a
    );
  }),
  IS = z(Ks, W, kS, ES, DS, (e, t, n, r, i) => {
    var a = {},
      o;
    return (
      n.forEach((n) => {
        var s = jS(t, n);
        o ??= PS(t, r, e);
        var c = (r === `left` && !i) || (r === `right` && i);
        ((a[n.id] = o - Number(c) * s.width), (o += (c ? -1 : 1) * s.width));
      }),
      a
    );
  }),
  LS = z(
    [
      W,
      Gb,
      (e, t) => {
        var n = Gb(e, t);
        if (n != null) return FS(e, n.orientation, n.mirror);
      },
      (e, t) => t,
    ],
    (e, t, n, r) => {
      if (t != null) {
        var i = n?.[r];
        return i == null ? { x: e.left, y: 0 } : { x: e.left, y: i };
      }
    },
  );
z(
  [
    W,
    Jb,
    (e, t) => {
      var n = Jb(e, t);
      if (n != null) return IS(e, n.orientation, n.mirror);
    },
    (e, t) => t,
  ],
  (e, t, n, r) => {
    if (t != null) {
      var i = n?.[r];
      return i == null ? { x: 0, y: e.top } : { x: i, y: e.top };
    }
  },
);
var RS = z(W, Jb, (e, t) => ({
    width: typeof t.width == `number` ? t.width : 60,
    height: e.height,
  })),
  zS = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return MS(e, n).width;
      case `yAxis`:
        return RS(e, n).height;
      default:
        return;
    }
  },
  BS = (e, t, n, r) => {
    if (n != null) {
      var i = n.allowDuplicatedCategory,
        a = n.type,
        o = n.dataKey,
        s = ks(e, r),
        c = t.map((e) => e.value),
        l = c.filter((e) => e != null);
      if (o && s && a === `category` && i && ke(l)) return c;
    }
  },
  VS = z([G, gx, Zb, qp], BS);
z([G, Qb, sS, wS, VS, CS, yS, lS, qp], (e, t, n, r, i, a, o, s, c) => {
  if (t != null) {
    var l = ks(e, c);
    return {
      angle: t.angle,
      interval: t.interval,
      minTickGap: t.minTickGap,
      orientation: t.orientation,
      tick: t.tick,
      tickCount: t.tickCount,
      tickFormatter: t.tickFormatter,
      ticks: t.ticks,
      type: t.type,
      unit: t.unit,
      axisType: c,
      categoricalDomain: a,
      duplicateDomain: i,
      isCategorical: l,
      niceTicks: s,
      range: o,
      realScaleType: n,
      scale: r,
    };
  }
});
var HS = z([G, $b, sS, wS, lS, yS, VS, CS, qp], (e, t, n, r, i, a, o, s, c) => {
    if (t != null && r != null) {
      var l = ks(e, c),
        u = t.type,
        d = t.ticks,
        f = t.tickCount,
        p =
          n === `scaleBand` && typeof r.bandwidth == `function`
            ? r.bandwidth() / 2
            : 2,
        m = u === `category` && r.bandwidth ? r.bandwidth() / p : 0;
      m =
        c === `angleAxis` && a != null && a.length >= 2
          ? Se(a[0] - a[1]) * 2 * m
          : m;
      var h = d || i;
      return h
        ? h
            .map((e, t) => {
              var n = o ? o.indexOf(e) : e,
                i = r.map(n);
              return H(i)
                ? { index: t, coordinate: i + m, value: e, offset: m }
                : null;
            })
            .filter(Ne)
        : l && s
          ? s
              .map((e, t) => {
                var n = r.map(e);
                return H(n)
                  ? { coordinate: n + m, value: e, index: t, offset: m }
                  : null;
              })
              .filter(Ne)
          : r.ticks
            ? r
                .ticks(f)
                .map((e, t) => {
                  var n = r.map(e);
                  return H(n)
                    ? { coordinate: n + m, value: e, index: t, offset: m }
                    : null;
                })
                .filter(Ne)
            : r
                .domain()
                .map((e, t) => {
                  var n = r.map(e);
                  return H(n)
                    ? {
                        coordinate: n + m,
                        value: o ? o[e] : e,
                        index: t,
                        offset: m,
                      }
                    : null;
                })
                .filter(Ne);
    }
  }),
  US = z([G, $b, wS, yS, VS, CS, qp], (e, t, n, r, i, a, o) => {
    if (t != null && n != null && r != null && r[0] !== r[1]) {
      var s = ks(e, o),
        c = t.tickCount,
        l = 0;
      return (
        (l = o === `angleAxis` && r?.length >= 2 ? Se(r[0] - r[1]) * 2 * l : l),
        s && a
          ? a
              .map((e, t) => {
                var r = n.map(e);
                return H(r)
                  ? { coordinate: r + l, value: e, index: t, offset: l }
                  : null;
              })
              .filter(Ne)
          : n.ticks
            ? n
                .ticks(c)
                .map((e, t) => {
                  var r = n.map(e);
                  return H(r)
                    ? { coordinate: r + l, value: e, index: t, offset: l }
                    : null;
                })
                .filter(Ne)
            : n
                .domain()
                .map((e, t) => {
                  var r = n.map(e);
                  return H(r)
                    ? {
                        coordinate: r + l,
                        value: i ? i[e] : e,
                        index: t,
                        offset: l,
                      }
                    : null;
                })
                .filter(Ne)
      );
    }
  }),
  WS = z(Zb, wS, (e, t) => {
    if (e != null && t != null) return Nb(Nb({}, e), {}, { scale: t });
  });
z(
  (e, t, n) => Xb(e, n),
  z([z([Zb, sS, oS, bS], Tb)], rm),
  (e, t) => {
    if (e != null && t != null) return Nb(Nb({}, e), {}, { scale: t });
  },
);
var GS = z([G, Xs, Zs], (e, t, n) => {
  switch (e) {
    case `horizontal`:
      return t.some((e) => e.reversed) ? `right-to-left` : `left-to-right`;
    case `vertical`:
      return n.some((e) => e.reversed) ? `bottom-to-top` : `top-to-bottom`;
    case `centric`:
    case `radial`:
      return `left-to-right`;
    default:
      return;
  }
});
z([(e, t, n) => e.renderedTicks[t]?.[n]], (e) => {
  if (e && e.length !== 0)
    return (t) => {
      var n = 1 / 0,
        r = e[0];
      for (var i of e) {
        var a = Math.abs(i.coordinate - t);
        a < n && ((n = a), (r = i));
      }
      return r?.value;
    };
});
var KS = (e) => e.options.defaultTooltipEventType,
  qS = (e) => e.options.validateTooltipEventTypes;
function JS(e, t, n) {
  if (e == null) return t;
  var r = e ? `axis` : `item`;
  return n == null ? t : n.includes(r) ? r : t;
}
function YS(e, t) {
  return JS(t, KS(e), qS(e));
}
function XS(e) {
  return R((t) => YS(t, e));
}
var ZS = (e, t) => {
    var n,
      r = Number(t);
    if (!(Ce(r) || t == null))
      return r >= 0
        ? e == null || (n = e[r]) == null
          ? void 0
          : n.value
        : void 0;
  },
  QS = (e) => e.tooltip.settings,
  $S = {
    active: !1,
    index: null,
    dataKey: void 0,
    graphicalItemId: void 0,
    coordinate: void 0,
  },
  eC = Eo({
    name: `tooltip`,
    initialState: {
      itemInteraction: { click: $S, hover: $S },
      axisInteraction: { click: $S, hover: $S },
      keyboardInteraction: $S,
      syncInteraction: {
        active: !1,
        index: null,
        dataKey: void 0,
        label: void 0,
        coordinate: void 0,
        sourceViewBox: void 0,
        graphicalItemId: void 0,
      },
      tooltipItemPayloads: [],
      settings: {
        shared: void 0,
        trigger: `hover`,
        axisId: 0,
        active: !1,
        defaultIndex: void 0,
      },
    },
    reducers: {
      addTooltipEntrySettings: {
        reducer(e, t) {
          e.tooltipItemPayloads.push(B(t.payload));
        },
        prepare: V(),
      },
      replaceTooltipEntrySettings: {
        reducer(e, t) {
          var n = t.payload,
            r = n.prev,
            i = n.next,
            a = Za(e).tooltipItemPayloads.indexOf(B(r));
          a > -1 && (e.tooltipItemPayloads[a] = B(i));
        },
        prepare: V(),
      },
      removeTooltipEntrySettings: {
        reducer(e, t) {
          var n = Za(e).tooltipItemPayloads.indexOf(B(t.payload));
          n > -1 && e.tooltipItemPayloads.splice(n, 1);
        },
        prepare: V(),
      },
      setTooltipSettingsState(e, t) {
        e.settings = t.payload;
      },
      setActiveMouseOverItemIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.syncInteraction.sourceViewBox = void 0),
          (e.keyboardInteraction.active = !1),
          (e.itemInteraction.hover.active = !0),
          (e.itemInteraction.hover.index = t.payload.activeIndex),
          (e.itemInteraction.hover.dataKey = t.payload.activeDataKey),
          (e.itemInteraction.hover.graphicalItemId =
            t.payload.activeGraphicalItemId),
          (e.itemInteraction.hover.coordinate = t.payload.activeCoordinate));
      },
      mouseLeaveChart(e) {
        ((e.itemInteraction.hover.active = !1),
          (e.axisInteraction.hover.active = !1));
      },
      mouseLeaveItem(e) {
        e.itemInteraction.hover.active = !1;
      },
      setActiveClickItemIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.syncInteraction.sourceViewBox = void 0),
          (e.itemInteraction.click.active = !0),
          (e.keyboardInteraction.active = !1),
          (e.itemInteraction.click.index = t.payload.activeIndex),
          (e.itemInteraction.click.dataKey = t.payload.activeDataKey),
          (e.itemInteraction.click.graphicalItemId =
            t.payload.activeGraphicalItemId),
          (e.itemInteraction.click.coordinate = t.payload.activeCoordinate));
      },
      setMouseOverAxisIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.syncInteraction.sourceViewBox = void 0),
          (e.axisInteraction.hover.active = !0),
          (e.keyboardInteraction.active = !1),
          (e.axisInteraction.hover.index = t.payload.activeIndex),
          (e.axisInteraction.hover.dataKey = t.payload.activeDataKey),
          (e.axisInteraction.hover.coordinate = t.payload.activeCoordinate));
      },
      setMouseClickAxisIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.syncInteraction.sourceViewBox = void 0),
          (e.keyboardInteraction.active = !1),
          (e.axisInteraction.click.active = !0),
          (e.axisInteraction.click.index = t.payload.activeIndex),
          (e.axisInteraction.click.dataKey = t.payload.activeDataKey),
          (e.axisInteraction.click.coordinate = t.payload.activeCoordinate));
      },
      setSyncInteraction(e, t) {
        e.syncInteraction = t.payload;
      },
      setKeyboardInteraction(e, t) {
        ((e.keyboardInteraction.active = t.payload.active),
          (e.keyboardInteraction.index = t.payload.activeIndex),
          (e.keyboardInteraction.coordinate = t.payload.activeCoordinate));
      },
    },
  }),
  tC = eC.actions,
  nC = tC.addTooltipEntrySettings,
  rC = tC.replaceTooltipEntrySettings,
  iC = tC.removeTooltipEntrySettings,
  aC = tC.setTooltipSettingsState,
  oC = tC.setActiveMouseOverItemIndex,
  sC = tC.mouseLeaveItem,
  cC = tC.mouseLeaveChart,
  lC = tC.setActiveClickItemIndex,
  uC = tC.setMouseOverAxisIndex,
  dC = tC.setMouseClickAxisIndex,
  fC = tC.setSyncInteraction,
  pC = tC.setKeyboardInteraction,
  mC = eC.reducer;
function hC(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function gC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? hC(Object(n), !0).forEach(function (t) {
          _C(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : hC(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function _C(e, t, n) {
  return (
    (t = vC(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function vC(e) {
  var t = yC(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function yC(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function bC(e, t, n) {
  return t === `axis`
    ? n === `click`
      ? e.axisInteraction.click
      : e.axisInteraction.hover
    : n === `click`
      ? e.itemInteraction.click
      : e.itemInteraction.hover;
}
function xC(e) {
  return e.index != null;
}
var SC = (e, t, n, r) => {
  if (t == null) return $S;
  var i = bC(e, t, n);
  if (i == null) return $S;
  if (i.active) return i;
  if (e.keyboardInteraction.active) return e.keyboardInteraction;
  if (e.syncInteraction.active && e.syncInteraction.index != null)
    return e.syncInteraction;
  var a = e.settings.active === !0;
  if (xC(i)) {
    if (a) return gC(gC({}, i), {}, { active: !0 });
  } else if (r != null)
    return {
      active: !0,
      coordinate: void 0,
      dataKey: void 0,
      index: r,
      graphicalItemId: void 0,
    };
  return gC(gC({}, $S), {}, { coordinate: i.coordinate });
};
function CC(e) {
  if (typeof e == `number`) return Number.isFinite(e) ? e : void 0;
  if (e instanceof Date) {
    var t = e.valueOf();
    return Number.isFinite(t) ? t : void 0;
  }
  var n = Number(e);
  return Number.isFinite(n) ? n : void 0;
}
function wC(e, t) {
  var n = CC(e),
    r = t[0],
    i = t[1];
  return n !== void 0 && n >= Math.min(r, i) && n <= Math.max(r, i);
}
function TC(e, t, n) {
  if (n == null || t == null) return !0;
  var r = U(e, t);
  return r == null || !Zf(n) || wC(r, n);
}
var EC = (e, t, n, r) => {
    var i = e?.index;
    if (i == null) return null;
    var a = Number(i);
    if (!H(a)) return i;
    var o = 0,
      s = 1 / 0;
    t.length > 0 && (s = t.length - 1);
    var c = Math.max(o, Math.min(a, s)),
      l = t[c];
    return l == null || TC(l, n, r) ? String(c) : null;
  },
  DC = (e, t, n, r, i, a, o) => {
    if (a != null) {
      var s = o[0]?.getPosition(a);
      if (s != null) return s;
      var c = i?.[Number(a)];
      if (c)
        switch (n) {
          case `horizontal`:
            return { x: c.coordinate, y: (r.top + t) / 2 };
          default:
            return { x: (r.left + e) / 2, y: c.coordinate };
        }
    }
  },
  OC = (e, t, n, r) => {
    if (t === `axis`) return e.tooltipItemPayloads;
    if (e.tooltipItemPayloads.length === 0) return [];
    var i =
      n === `hover`
        ? e.itemInteraction.hover.graphicalItemId
        : e.itemInteraction.click.graphicalItemId;
    if (e.syncInteraction.active && i == null) return e.tooltipItemPayloads;
    if (i == null && (r != null || e.keyboardInteraction.active)) {
      var a = e.tooltipItemPayloads[0];
      return a == null ? [] : [a];
    }
    return e.tooltipItemPayloads.filter(
      (e) => e.settings?.graphicalItemId === i,
    );
  },
  kC = (e) => e.options.tooltipPayloadSearcher,
  AC = (e) => e.tooltip;
function jC(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function MC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? jC(Object(n), !0).forEach(function (t) {
          NC(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : jC(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function NC(e, t, n) {
  return (
    (t = PC(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function PC(e) {
  var t = FC(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function FC(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function IC(e) {
  if (typeof e == `string` || typeof e == `number`) return e;
}
function LC(e) {
  if (typeof e == `string` || typeof e == `number` || typeof e == `boolean`)
    return e;
}
function RC(e) {
  if (typeof e == `string` || typeof e == `number`) return e;
  if (typeof e == `function`) return (t) => e(t);
}
function zC(e) {
  if (typeof e == `string`) return e;
}
function BC(e) {
  if (typeof e == `object` && e)
    return {
      name: `name` in e ? IC(e.name) : void 0,
      unit: `unit` in e ? LC(e.unit) : void 0,
      dataKey: `dataKey` in e ? RC(e.dataKey) : void 0,
      payload: `payload` in e ? e.payload : void 0,
      color: `color` in e ? zC(e.color) : void 0,
      fill: `fill` in e ? zC(e.fill) : void 0,
    };
}
function VC(e, t) {
  return e ?? t;
}
var HC = (e, t, n, r, i, a, o) => {
    if (t != null && a != null) {
      var s = n.chartData,
        c = n.computedData,
        l = n.dataStartIndex,
        u = n.dataEndIndex;
      return e.reduce((e, n) => {
        var d = n.dataDefinedOnItem,
          f = n.settings,
          p = VC(d, s),
          m = Array.isArray(p) ? xs(p, l, u) : p,
          h = f?.dataKey ?? r,
          g = f?.nameKey,
          _;
        return (
          r && Array.isArray(m) && !Array.isArray(m[0]) && o === `axis`
            ? ((_ = je(m, r, i)), (_ ??= a(m, t, c, g)))
            : (_ = a(m, t, c, g)),
          Array.isArray(_)
            ? _.forEach((t) => {
                var n = BC(t),
                  r = n?.name,
                  i = n?.dataKey,
                  a = n?.payload,
                  o = MC(
                    MC({}, f),
                    {},
                    {
                      name: r,
                      unit: n?.unit,
                      color: n?.color ?? f?.color,
                      fill: n?.fill ?? f?.fill,
                    },
                  );
                e.push(
                  Hs({
                    tooltipEntrySettings: o,
                    dataKey: i,
                    payload: a,
                    value: U(a, i),
                    name: r == null ? void 0 : String(r),
                  }),
                );
              })
            : e.push(
                Hs({
                  tooltipEntrySettings: f,
                  dataKey: h,
                  payload: _,
                  value: U(_, h),
                  name: U(_, g) ?? f?.name,
                }),
              ),
          e
        );
      }, []);
    }
  },
  UC = z([X, ex, Sp], Ob),
  WC = z(
    [
      z(
        [
          (e) => e.graphicalItems.cartesianItems,
          (e) => e.graphicalItems.polarItems,
        ],
        (e, t) => [...e, ...t],
      ),
      X,
      z([tm, nm], tx),
    ],
    ix,
    { memoizeOptions: { resultEqualityCheck: $p } },
  ),
  GC = z([WC], (e) => e.filter(Zp)),
  KC = z([WC], lx, { memoizeOptions: { resultEqualityCheck: $p } }),
  qC = z([WC], (e) => e.some((e) => !e.data)),
  JC = z([KC, zf], fx),
  YC = z([GC, zf, X], Xp),
  XC = z([JC, X, WC, zf, qC, KC], hx),
  ZC = z([X], Ax),
  QC = z([ZC, z([X], (e) => e.allowDataOverflow)], $f),
  $C = z([z([YC, z([WC], (e) => e.filter(Zp)), bp, xp], Ex), zf, tm, QC], Ox),
  ew = z([JC, X, z([WC], sx), Px, tm, Wf], Lx, {
    memoizeOptions: { resultEqualityCheck: Qp },
  }),
  tw = z([z([Vx, tm, nm], Hx), tm], Jx),
  nw = z([z([Wx, tm, nm], Hx), tm], Xx),
  rw = z(
    [
      X,
      G,
      JC,
      XC,
      bp,
      tm,
      z(
        [
          X,
          ZC,
          QC,
          $C,
          ew,
          z([tw, z([z([Kx, tm, nm], Hx), tm], eS), nw], Ix),
          G,
          tm,
        ],
        nS,
      ),
    ],
    aS,
  ),
  iw = z([X, rw, z([rw, X, UC], cS), tm], uS),
  aw = (e) => yS(e, tm(e), nm(e), !1),
  ow = z([X, aw], kp),
  sw = z([z([X, UC, iw, ow], Tb)], rm),
  cw = z(
    [G, X, UC, sw, aw, z([G, XC, X, tm], BS), z([G, XC, X, tm], SS), tm],
    (e, t, n, r, i, a, o, s) => {
      if (t) {
        var c = t.type,
          l = ks(e, s);
        if (r) {
          var u = n === `scaleBand` && r.bandwidth ? r.bandwidth() / 2 : 2,
            d = c === `category` && r.bandwidth ? r.bandwidth() / u : 0;
          return (
            (d =
              s === `angleAxis` && i != null && i?.length >= 2
                ? Se(i[0] - i[1]) * 2 * d
                : d),
            l && o
              ? o
                  .map((e, t) => {
                    var n = r.map(e);
                    return H(n)
                      ? { coordinate: n + d, value: e, index: t, offset: d }
                      : null;
                  })
                  .filter(Ne)
              : r
                  .domain()
                  .map((e, t) => {
                    var n = r.map(e);
                    return H(n)
                      ? {
                          coordinate: n + d,
                          value: a ? a[e] : e,
                          index: t,
                          offset: d,
                        }
                      : null;
                  })
                  .filter(Ne)
          );
        }
      }
    },
  ),
  lw = z([KS, qS, QS], (e, t, n) => JS(n.shared, e, t)),
  uw = (e) => e.tooltip.settings.trigger,
  dw = (e) => e.tooltip.settings.defaultIndex,
  fw = z([AC, lw, uw, dw], SC),
  pw = z([fw, JC, wx, rw], EC),
  mw = z([cw, pw], ZS),
  hw = z([fw], (e) => {
    if (e) return e.dataKey;
  }),
  gw = z([fw], (e) => {
    if (e) return e.graphicalItemId;
  }),
  _w = z([AC, lw, uw, dw], OC),
  vw = z([fw, z([Ks, qs, G, W, cw, dw, _w], DC)], (e, t) =>
    e != null && e.coordinate ? e.coordinate : t,
  ),
  yw = z([fw], (e) => e?.active ?? !1);
z([z([_w, pw, zf, wx, mw, kC, lw], HC)], (e) => {
  if (e != null) {
    var t = e.map((e) => e.payload).filter((e) => e != null);
    return Array.from(new Set(t));
  }
});
function bw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function xw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? bw(Object(n), !0).forEach(function (t) {
          Sw(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : bw(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Sw(e, t, n) {
  return (
    (t = Cw(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Cw(e) {
  var t = ww(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function ww(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Tw = () => R(X),
  Ew = () => {
    var e = Tw(),
      t = R(cw),
      n = R(sw);
    return Vs(!e || !n ? void 0 : xw(xw({}, e), {}, { scale: n }), t);
  };
function Dw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Ow(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Dw(Object(n), !0).forEach(function (t) {
          kw(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Dw(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function kw(e, t, n) {
  return (
    (t = Aw(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Aw(e) {
  var t = jw(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function jw(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Mw = (e, t, n, r) => {
    var i = t.find((e) => e && e.index === n);
    if (i) {
      if (e === `horizontal`) return { x: i.coordinate, y: r.relativeY };
      if (e === `vertical`) return { x: r.relativeX, y: i.coordinate };
    }
    return { x: 0, y: 0 };
  },
  Nw = (e, t, n, r) => {
    var i = t.find((e) => e && e.index === n);
    if (i) {
      if (e === `centric`) {
        var a = i.coordinate,
          o = r.radius;
        return Ow(
          Ow(Ow({}, r), ff(r.cx, r.cy, o, a)),
          {},
          { angle: a, radius: o },
        );
      }
      var s = i.coordinate,
        c = r.angle;
      return Ow(
        Ow(Ow({}, r), ff(r.cx, r.cy, s, c)),
        {},
        { angle: c, radius: s },
      );
    }
    return {
      angle: 0,
      clockWise: !1,
      cx: 0,
      cy: 0,
      endAngle: 0,
      innerRadius: 0,
      outerRadius: 0,
      radius: 0,
      startAngle: 0,
      x: 0,
      y: 0,
    };
  };
function Pw(e, t) {
  var n = e.relativeX,
    r = e.relativeY;
  return (
    n >= t.left && n <= t.left + t.width && r >= t.top && r <= t.top + t.height
  );
}
var Fw = (e, t, n, r, i) => {
    var a = t?.length ?? 0;
    if (a <= 1 || e == null) return 0;
    if (
      r === `angleAxis` &&
      i != null &&
      Math.abs(Math.abs(i[1] - i[0]) - 360) <= 1e-6
    )
      for (
        var o = i[1] - i[0],
          s = (t, n, r) =>
            [e, e + o, e - o].some((e) => (r ? e >= t : e > t) && e <= n),
          c = 0;
        c < a;
        c++
      ) {
        var l = c > 0 ? n[c - 1]?.coordinate : n[a - 1]?.coordinate,
          u = n[c]?.coordinate,
          d = c >= a - 1 ? n[0]?.coordinate : n[c + 1]?.coordinate,
          f = void 0;
        if (l != null && u != null && d != null) {
          if (Se(u - l) !== Se(d - u)) {
            var p = [];
            if (Se(d - u) === Se(i[1] - i[0])) {
              f = d;
              var m = u + i[1] - i[0];
              ((p[0] = Math.min(m, (m + l) / 2)),
                (p[1] = Math.max(m, (m + l) / 2)));
            } else {
              f = l;
              var h = d + i[1] - i[0];
              ((p[0] = Math.min(u, (h + u) / 2)),
                (p[1] = Math.max(u, (h + u) / 2)));
            }
            var g = [Math.min(u, (f + u) / 2), Math.max(u, (f + u) / 2)];
            if (s(g[0], g[1], !1) || s(p[0], p[1], !0)) return n[c]?.index;
          } else {
            var _ = Math.min(l, d),
              v = Math.max(l, d);
            if (s((_ + u) / 2, (v + u) / 2, !1)) return n[c]?.index;
          }
        }
      }
    else if (t)
      for (var y = 0; y < a; y++) {
        var b = t[y];
        if (b != null) {
          var x = t[y + 1],
            S = t[y - 1];
          if (
            (y === 0 && x != null && e <= (b.coordinate + x.coordinate) / 2) ||
            (y === a - 1 &&
              S != null &&
              e > (b.coordinate + S.coordinate) / 2) ||
            (y > 0 &&
              y < a - 1 &&
              S != null &&
              x != null &&
              e > (b.coordinate + S.coordinate) / 2 &&
              e <= (b.coordinate + x.coordinate) / 2)
          )
            return b.index;
        }
      }
    return -1;
  },
  Iw = () => R(Sp),
  Lw = (e, t) => t,
  Rw = (e, t, n) => n,
  zw = (e, t, n, r) => r,
  Bw = z(cw, (e) => ci(e, (e) => e.coordinate)),
  Vw = z([AC, Lw, Rw, zw], SC),
  Hw = z([Vw, JC, wx, rw], EC),
  Uw = (e, t, n) => {
    if (t != null) {
      var r = AC(e);
      return t === `axis`
        ? n === `hover`
          ? r.axisInteraction.hover.dataKey
          : r.axisInteraction.click.dataKey
        : n === `hover`
          ? r.itemInteraction.hover.dataKey
          : r.itemInteraction.click.dataKey;
    }
  },
  Ww = z([AC, Lw, Rw, zw], OC),
  Gw = z([Ks, qs, G, W, cw, zw, Ww], DC),
  Kw = z([Vw, Gw], (e, t) => e.coordinate ?? t),
  qw = z([cw, Hw], ZS),
  Jw = z([Ww, Hw, zf, wx, qw, kC, Lw], HC),
  Yw = z([Vw, Hw], (e, t) => ({
    isActive: e.active && t != null,
    activeIndex: t,
  })),
  Xw = (e, t, n, r, i, a, o) => {
    if (e && n && r && i && Pw(e, o)) {
      var s = Fw(Ws(e, t), a, i, n, r),
        c = Mw(t, i, s, e);
      return { activeIndex: String(s), activeCoordinate: c };
    }
  },
  Zw = (e, t, n, r, i, a, o) => {
    if (e && r && i && a && n) {
      var s = vf(e, n);
      if (s) {
        var c = Fw(Gs(s, t), o, a, r, i),
          l = Nw(t, a, c, s);
        return { activeIndex: String(c), activeCoordinate: l };
      }
    }
  },
  Qw = (e, t, n, r, i, a, o, s) => {
    if (e && t && r && i && a)
      return t === `horizontal` || t === `vertical`
        ? Xw(e, t, r, i, a, o, s)
        : Zw(e, t, n, r, i, a, o);
  },
  $w = z(
    (e) => e.zIndex.zIndexMap,
    (e, t) => t,
    (e, t, n) => n,
    (e, t, n) => {
      if (t != null) {
        var r = e[t];
        if (r != null) return n ? r.panoramaElement : r.element;
      }
    },
  ),
  eT = z(
    (e) => e.zIndex.zIndexMap,
    (e) => {
      var t = Object.keys(e)
        .map((e) => parseInt(e, 10))
        .concat(Object.values(Ep));
      return Array.from(new Set(t)).sort((e, t) => e - t);
    },
    { memoizeOptions: { resultEqualityCheck: em } },
  );
function tT(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function nT(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? tT(Object(n), !0).forEach(function (t) {
          rT(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : tT(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function rT(e, t, n) {
  return (
    (t = iT(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function iT(e) {
  var t = aT(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function aT(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var oT = {
    zIndexMap: Object.values(Ep).reduce(
      (e, t) =>
        nT(
          nT({}, e),
          {},
          { [t]: { element: void 0, panoramaElement: void 0, consumers: 0 } },
        ),
      {},
    ),
  },
  sT = new Set(Object.values(Ep));
function cT(e) {
  return sT.has(e);
}
var lT = Eo({
    name: `zIndex`,
    initialState: oT,
    reducers: {
      registerZIndexPortal: {
        reducer: (e, t) => {
          var n = t.payload.zIndex;
          e.zIndexMap[n]
            ? (e.zIndexMap[n].consumers += 1)
            : (e.zIndexMap[n] = {
                consumers: 1,
                element: void 0,
                panoramaElement: void 0,
              });
        },
        prepare: V(),
      },
      unregisterZIndexPortal: {
        reducer: (e, t) => {
          var n = t.payload.zIndex;
          e.zIndexMap[n] &&
            (--e.zIndexMap[n].consumers,
            e.zIndexMap[n].consumers <= 0 && !cT(n) && delete e.zIndexMap[n]);
        },
        prepare: V(),
      },
      registerZIndexPortalElement: {
        reducer: (e, t) => {
          var n = t.payload,
            r = n.zIndex,
            i = n.element,
            a = n.isPanorama;
          e.zIndexMap[r]
            ? a
              ? (e.zIndexMap[r].panoramaElement = B(i))
              : (e.zIndexMap[r].element = B(i))
            : (e.zIndexMap[r] = {
                consumers: 0,
                element: a ? void 0 : B(i),
                panoramaElement: a ? B(i) : void 0,
              });
        },
        prepare: V(),
      },
      unregisterZIndexPortalElement: {
        reducer: (e, t) => {
          var n = t.payload.zIndex;
          e.zIndexMap[n] &&
            (t.payload.isPanorama
              ? (e.zIndexMap[n].panoramaElement = void 0)
              : (e.zIndexMap[n].element = void 0));
        },
        prepare: V(),
      },
    },
  }),
  uT = lT.actions,
  dT = uT.registerZIndexPortal,
  fT = uT.unregisterZIndexPortal,
  pT = uT.registerZIndexPortalElement,
  mT = uT.unregisterZIndexPortalElement,
  hT = lT.reducer,
  gT = e(f());
function _T(e) {
  var t = e.zIndex,
    n = e.children,
    r = nl() && t !== void 0 && t !== 0,
    i = fc(),
    a = (0, w.useRef)(void 0),
    o = (0, w.useRef)(new Set()),
    s = L(),
    c = R((e) => $w(e, t, i));
  if (
    ((0, w.useLayoutEffect)(() => {
      if (!r) {
        var e = o.current;
        (e.forEach((e) => {
          s(fT({ zIndex: e }));
        }),
          e.clear(),
          (a.current = void 0));
      } else if (
        (o.current.has(t) || (s(dT({ zIndex: t })), o.current.add(t)), c)
      ) {
        a.current = c;
        var n = o.current;
        n.forEach((e) => {
          e !== t && (s(fT({ zIndex: e })), n.delete(e));
        });
      }
    }, [s, t, r, c]),
    (0, w.useLayoutEffect)(() => {
      var e = o.current;
      return () => {
        (e.forEach((e) => {
          s(fT({ zIndex: e }));
        }),
          e.clear());
      };
    }, [s]),
    !r)
  )
    return n;
  var l = c ?? a.current;
  return l ? (0, gT.createPortal)(n, l) : null;
}
function vT() {
  return (
    (vT = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vT.apply(null, arguments)
  );
}
function yT(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function bT(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? yT(Object(n), !0).forEach(function (t) {
          xT(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : yT(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function xT(e, t, n) {
  return (
    (t = ST(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ST(e) {
  var t = CT(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function CT(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function wT(e) {
  var t = e.cursor,
    n = e.cursorComp,
    r = e.cursorProps;
  return (0, w.isValidElement)(t)
    ? (0, w.cloneElement)(t, r)
    : (0, w.createElement)(n, r);
}
function TT(e) {
  var t = e.coordinate,
    n = e.payload,
    r = e.index,
    i = e.offset,
    a = e.tooltipAxisBandSize,
    o = e.layout,
    s = e.cursor,
    c = e.tooltipEventType,
    l = e.chartName,
    u = t,
    d = n,
    f = r;
  if (!s || !u || (l !== `ScatterChart` && c !== `axis`)) return null;
  var p, m, h;
  if (l === `ScatterChart`) ((p = u), (m = Wu), (h = Ep.cursorLine));
  else if (l === `BarChart`)
    ((p = Gu(o, u, i, a)), (m = rf), (h = Ep.cursorRectangle));
  else if (o === `radial` && un(u)) {
    var g = yf(u),
      _ = g.cx,
      v = g.cy,
      y = g.radius;
    ((p = {
      cx: _,
      cy: v,
      startAngle: g.startAngle,
      endAngle: g.endAngle,
      innerRadius: y,
      outerRadius: y,
    }),
      (m = Pf),
      (h = Ep.cursorLine));
  } else ((p = { points: Ff(o, u, i) }), (m = Nu), (h = Ep.cursorLine));
  var b = typeof s == `object` && `className` in s ? s.className : void 0,
    S = bT(
      bT(bT(bT({ stroke: `#ccc`, pointerEvents: `none` }, i), p), k(s)),
      {},
      {
        payload: d,
        payloadIndex: f,
        className: x(`recharts-tooltip-cursor`, b),
      },
    );
  return w.createElement(
    _T,
    { zIndex: e.zIndex ?? h },
    w.createElement(wT, { cursor: s, cursorComp: m, cursorProps: S }),
  );
}
function ET(e) {
  var t = Ew(),
    n = Xc(),
    r = $c(),
    i = Iw();
  return t == null || n == null || r == null || i == null
    ? null
    : w.createElement(
        TT,
        vT({}, e, {
          offset: n,
          layout: r,
          tooltipAxisBandSize: t,
          chartName: i,
        }),
      );
}
var DT = (0, w.createContext)(null),
  OT = () => (0, w.useContext)(DT),
  kT = e(
    o((e, t) => {
      var n = Object.prototype.hasOwnProperty,
        r = `~`;
      function i() {}
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
      function a(e, t, n) {
        ((this.fn = e), (this.context = t), (this.once = n || !1));
      }
      function o(e, t, n, i, o) {
        if (typeof n != `function`)
          throw TypeError(`The listener must be a function`);
        var s = new a(n, i || e, o),
          c = r ? r + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], s])
              : e._events[c].push(s)
            : ((e._events[c] = s), e._eventsCount++),
          e
        );
      }
      function s(e, t) {
        --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
      }
      function c() {
        ((this._events = new i()), (this._eventsCount = 0));
      }
      ((c.prototype.eventNames = function () {
        var e = [],
          t,
          i;
        if (this._eventsCount === 0) return e;
        for (i in (t = this._events))
          n.call(t, i) && e.push(r ? i.slice(1) : i);
        return Object.getOwnPropertySymbols
          ? e.concat(Object.getOwnPropertySymbols(t))
          : e;
      }),
        (c.prototype.listeners = function (e) {
          var t = r ? r + e : e,
            n = this._events[t];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var i = 0, a = n.length, o = Array(a); i < a; i++)
            o[i] = n[i].fn;
          return o;
        }),
        (c.prototype.listenerCount = function (e) {
          var t = r ? r + e : e,
            n = this._events[t];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (c.prototype.emit = function (e, t, n, i, a, o) {
          var s = r ? r + e : e;
          if (!this._events[s]) return !1;
          var c = this._events[s],
            l = arguments.length,
            u,
            d;
          if (c.fn) {
            switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
              case 1:
                return (c.fn.call(c.context), !0);
              case 2:
                return (c.fn.call(c.context, t), !0);
              case 3:
                return (c.fn.call(c.context, t, n), !0);
              case 4:
                return (c.fn.call(c.context, t, n, i), !0);
              case 5:
                return (c.fn.call(c.context, t, n, i, a), !0);
              case 6:
                return (c.fn.call(c.context, t, n, i, a, o), !0);
            }
            for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
            c.fn.apply(c.context, u);
          } else {
            var f = c.length,
              p;
            for (d = 0; d < f; d++)
              switch (
                (c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)
              ) {
                case 1:
                  c[d].fn.call(c[d].context);
                  break;
                case 2:
                  c[d].fn.call(c[d].context, t);
                  break;
                case 3:
                  c[d].fn.call(c[d].context, t, n);
                  break;
                case 4:
                  c[d].fn.call(c[d].context, t, n, i);
                  break;
                default:
                  if (!u)
                    for (p = 1, u = Array(l - 1); p < l; p++)
                      u[p - 1] = arguments[p];
                  c[d].fn.apply(c[d].context, u);
              }
          }
          return !0;
        }),
        (c.prototype.on = function (e, t, n) {
          return o(this, e, t, n, !1);
        }),
        (c.prototype.once = function (e, t, n) {
          return o(this, e, t, n, !0);
        }),
        (c.prototype.removeListener = function (e, t, n, i) {
          var a = r ? r + e : e;
          if (!this._events[a]) return this;
          if (!t) return (s(this, a), this);
          var o = this._events[a];
          if (o.fn)
            o.fn !== t ||
              (i && !o.once) ||
              (n && o.context !== n) ||
              s(this, a);
          else {
            for (var c = 0, l = [], u = o.length; c < u; c++)
              (o[c].fn !== t ||
                (i && !o[c].once) ||
                (n && o[c].context !== n)) &&
                l.push(o[c]);
            l.length
              ? (this._events[a] = l.length === 1 ? l[0] : l)
              : s(this, a);
          }
          return this;
        }),
        (c.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = r ? r + e : e), this._events[t] && s(this, t))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (c.prototype.off = c.prototype.removeListener),
        (c.prototype.addListener = c.prototype.on),
        (c.prefixed = r),
        (c.EventEmitter = c),
        t !== void 0 && (t.exports = c));
    })(),
    1,
  ).default,
  AT = new kT(),
  jT = `recharts.syncEvent.tooltip`,
  MT = `recharts.syncEvent.brush`,
  NT = (e, t) => {
    if (t && Array.isArray(e)) {
      var n = Number.parseInt(t, 10);
      if (!Ce(n)) return e[n];
    }
  },
  PT = Eo({
    name: `options`,
    initialState: {
      chartName: ``,
      tooltipPayloadSearcher: () => void 0,
      eventEmitter: void 0,
      defaultTooltipEventType: `axis`,
    },
    reducers: {
      createEventEmitter: (e) => {
        e.eventEmitter ??= Symbol(`rechartsEventEmitter`);
      },
    },
  }),
  FT = PT.reducer,
  IT = PT.actions.createEventEmitter;
function LT(e) {
  return e.tooltip.syncInteraction;
}
var RT = Eo({
    name: `chartData`,
    initialState: {
      chartData: void 0,
      computedData: void 0,
      dataStartIndex: 0,
      dataEndIndex: 0,
    },
    reducers: {
      setChartData(e, t) {
        ((e.chartData = B(t.payload)),
          t.payload == null
            ? ((e.dataStartIndex = 0), (e.dataEndIndex = 0))
            : t.payload.length > 0 &&
              e.dataEndIndex !== t.payload.length - 1 &&
              (e.dataEndIndex = t.payload.length - 1));
      },
      setComputedData(e, t) {
        e.computedData = t.payload;
      },
      setDataStartEndIndexes(e, t) {
        var n = t.payload,
          r = n.startIndex,
          i = n.endIndex;
        (r != null && (e.dataStartIndex = r),
          i != null && (e.dataEndIndex = i));
      },
    },
  }),
  zT = RT.actions,
  BT = zT.setChartData,
  VT = zT.setDataStartEndIndexes;
zT.setComputedData;
var HT = RT.reducer,
  UT = [`x`, `y`];
function WT(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function GT(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? WT(Object(n), !0).forEach(function (t) {
          KT(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : WT(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function KT(e, t, n) {
  return (
    (t = qT(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function qT(e) {
  var t = JT(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function JT(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function YT(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = XT(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function XT(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function ZT() {
  var e = R(Cp),
    t = R(Tp),
    n = L(),
    r = R(wp),
    i = R(cw),
    a = $c(),
    o = Jc(),
    s = R((e) => e.rootProps.className);
  (0, w.useEffect)(() => {
    if (e == null) return Pe;
    var s = (s, c, l) => {
      if (t !== l && e === s) {
        if (c.payload.active === !1)
          n(
            fC({
              active: !1,
              coordinate: void 0,
              dataKey: void 0,
              index: null,
              label: void 0,
              sourceViewBox: void 0,
              graphicalItemId: void 0,
            }),
          );
        else if (r === `index`) {
          var u;
          if (
            o &&
            c != null &&
            (u = c.payload) != null &&
            u.coordinate &&
            c.payload.sourceViewBox
          ) {
            var d = c.payload.coordinate,
              f = d.x,
              p = d.y,
              m = YT(d, UT),
              h = c.payload.sourceViewBox,
              g = h.x,
              _ = h.y,
              v = h.width,
              y = h.height,
              b = GT(
                GT({}, m),
                {},
                {
                  x: o.x + (v ? (f - g) / v : 0) * o.width,
                  y: o.y + (y ? (p - _) / y : 0) * o.height,
                },
              );
            n(
              GT(
                GT({}, c),
                {},
                { payload: GT(GT({}, c.payload), {}, { coordinate: b }) },
              ),
            );
          } else n(c);
        } else if (i != null) {
          var x;
          typeof r == `function`
            ? (x =
                i[
                  r(i, {
                    activeTooltipIndex:
                      c.payload.index == null
                        ? void 0
                        : Number(c.payload.index),
                    isTooltipActive: c.payload.active,
                    activeIndex:
                      c.payload.index == null
                        ? void 0
                        : Number(c.payload.index),
                    activeLabel: c.payload.label,
                    activeDataKey: c.payload.dataKey,
                    activeCoordinate: c.payload.coordinate,
                  })
                ])
            : r === `value` &&
              (x = i.find((e) => String(e.value) === c.payload.label));
          var S = c.payload.coordinate;
          if (S == null || o == null)
            n(
              fC({
                active: !1,
                coordinate: void 0,
                dataKey: void 0,
                index: null,
                label: void 0,
                sourceViewBox: void 0,
                graphicalItemId: void 0,
              }),
            );
          else if (x == null)
            n(
              fC({
                active: !1,
                coordinate: void 0,
                dataKey: void 0,
                index: null,
                label: void 0,
                sourceViewBox: c.payload.sourceViewBox,
                graphicalItemId: void 0,
              }),
            );
          else {
            var C = S.x,
              w = S.y,
              T = Math.min(C, o.x + o.width),
              E = Math.min(w, o.y + o.height),
              D = {
                x: a === `horizontal` ? x.coordinate : T,
                y: a === `horizontal` ? E : x.coordinate,
              };
            n(
              fC({
                active: c.payload.active,
                coordinate: D,
                dataKey: c.payload.dataKey,
                index: String(x.index),
                label: c.payload.label,
                sourceViewBox: c.payload.sourceViewBox,
                graphicalItemId: c.payload.graphicalItemId,
              }),
            );
          }
        }
      }
    };
    return (
      AT.on(jT, s),
      () => {
        AT.off(jT, s);
      }
    );
  }, [s, n, t, e, r, i, a, o]);
}
function QT() {
  var e = R(Cp),
    t = R(Tp),
    n = L();
  (0, w.useEffect)(() => {
    if (e == null) return Pe;
    var r = (r, i, a) => {
      t !== a && e === r && n(VT(i));
    };
    return (
      AT.on(MT, r),
      () => {
        AT.off(MT, r);
      }
    );
  }, [n, t, e]);
}
function $T() {
  var e = L();
  ((0, w.useEffect)(() => {
    e(IT());
  }, [e]),
    ZT(),
    QT());
}
function eE(e, t, n, r, i, a) {
  var o = R((n) => Uw(n, e, t)),
    s = R(gw),
    c = R(Tp),
    l = R(Cp),
    u = R(wp),
    d = R(LT)?.sourceViewBox != null,
    f = Jc();
  (0, w.useEffect)(() => {
    if (!d && l != null && c != null) {
      var e = fC({
        active: a,
        coordinate: n,
        dataKey: o,
        index: i,
        label: typeof r == `number` ? String(r) : r,
        sourceViewBox: f,
        graphicalItemId: s,
      });
      AT.emit(jT, l, e, c);
    }
  }, [d, n, o, s, i, r, c, l, u, a, f]);
}
function tE(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function nE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? tE(Object(n), !0).forEach(function (t) {
          rE(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : tE(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function rE(e, t, n) {
  return (
    (t = iE(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function iE(e) {
  var t = aE(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function aE(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function oE(e, t) {
  return dE(e) || uE(e, t) || cE(e, t) || sE();
}
function sE() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cE(e, t) {
  if (e) {
    if (typeof e == `string`) return lE(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? lE(e, t)
          : void 0
    );
  }
}
function lE(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function uE(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function dE(e) {
  if (Array.isArray(e)) return e;
}
function fE(e) {
  return e.dataKey;
}
function pE(e, t) {
  return w.isValidElement(e)
    ? w.cloneElement(e, t)
    : typeof e == `function`
      ? w.createElement(e, t)
      : w.createElement(Ul, t);
}
var mE = [],
  hE = {
    allowEscapeViewBox: { x: !1, y: !1 },
    animationDuration: 400,
    animationEasing: `ease`,
    axisId: 0,
    contentStyle: {},
    cursor: !0,
    filterNull: !0,
    includeHidden: !1,
    isAnimationActive: `auto`,
    itemSorter: `name`,
    itemStyle: {},
    labelStyle: {},
    offset: 10,
    reverseDirection: { x: !1, y: !1 },
    separator: ` : `,
    trigger: `hover`,
    useTranslate3d: !1,
    wrapperStyle: {},
  };
function gE(e) {
  var t = yn(e, hE),
    n = t.active,
    r = t.allowEscapeViewBox,
    i = t.animationDuration,
    a = t.animationEasing,
    o = t.content,
    s = t.filterNull,
    c = t.isAnimationActive,
    l = t.offset,
    u = t.payloadUniqBy,
    d = t.position,
    f = t.reverseDirection,
    p = t.useTranslate3d,
    m = t.wrapperStyle,
    h = t.cursor,
    g = t.shared,
    _ = t.trigger,
    v = t.defaultIndex,
    y = t.portal,
    b = t.axisId,
    x = L(),
    S = typeof v == `number` ? String(v) : v;
  (0, w.useEffect)(() => {
    x(aC({ shared: g, trigger: _, axisId: b, active: n, defaultIndex: S }));
  }, [x, g, _, b, n, S]);
  var C = Jc(),
    T = vu(),
    E = XS(g),
    D = R((e) => Yw(e, E, _, S)) ?? {},
    O = D.activeIndex,
    k = D.isActive,
    A = R((e) => Jw(e, E, _, S)),
    j = R((e) => qw(e, E, _, S)),
    M = R((e) => Kw(e, E, _, S)),
    N = A,
    ee = OT(),
    te = n ?? k ?? !1,
    ne = oE(bi([N, te]), 2),
    re = ne[0],
    ie = ne[1],
    ae = E === `axis` ? j : void 0;
  eE(E, _, M, ae, O, te);
  var oe = y ?? ee;
  if (oe == null || C == null || E == null) return null;
  var se = N ?? mE;
  (te || (se = mE),
    s &&
      se.length &&
      (se = kr(
        se.filter((e) => e.value != null && (e.hide !== !0 || t.includeHidden)),
        u,
        fE,
      )));
  var ce = se.length > 0,
    le = nE(
      nE({}, t),
      {},
      {
        payload: se,
        label: ae,
        active: te,
        activeIndex: O,
        coordinate: M,
        accessibilityLayer: T,
      },
    ),
    ue = w.createElement(
      _u,
      {
        allowEscapeViewBox: r,
        animationDuration: i,
        animationEasing: a,
        isAnimationActive: c,
        active: te,
        coordinate: M,
        hasPayload: ce,
        offset: l,
        position: d,
        reverseDirection: f,
        useTranslate3d: p,
        viewBox: C,
        wrapperStyle: m,
        lastBoundingBox: re,
        innerRef: ie,
        hasPortalFromProps: !!y,
      },
      pE(o, le),
    );
  return w.createElement(
    w.Fragment,
    null,
    (0, gT.createPortal)(ue, oe),
    te &&
      w.createElement(ET, {
        cursor: h,
        tooltipEventType: E,
        coordinate: M,
        payload: se,
        index: O,
      }),
  );
}
var _E = (e) => null;
_E.displayName = `Cell`;
function vE(e, t, n) {
  return (
    (t = yE(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function yE(e) {
  var t = bE(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function bE(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var xE = class {
  constructor(e) {
    (vE(this, `cache`, new Map()), (this.maxSize = e));
  }
  get(e) {
    var t = this.cache.get(e);
    return (t !== void 0 && (this.cache.delete(e), this.cache.set(e, t)), t);
  }
  set(e, t) {
    if (this.cache.has(e)) this.cache.delete(e);
    else if (this.cache.size >= this.maxSize) {
      var n = this.cache.keys().next().value;
      n != null && this.cache.delete(n);
    }
    this.cache.set(e, t);
  }
  clear() {
    this.cache.clear();
  }
  size() {
    return this.cache.size;
  }
};
function SE(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function CE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? SE(Object(n), !0).forEach(function (t) {
          wE(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : SE(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function wE(e, t, n) {
  return (
    (t = TE(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function TE(e) {
  var t = EE(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function EE(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var DE = CE({}, { cacheSize: 2e3, enableCache: !0 }),
  OE = new xE(DE.cacheSize),
  kE = {
    position: `absolute`,
    top: `-20000px`,
    left: 0,
    padding: 0,
    margin: 0,
    border: `none`,
    whiteSpace: `pre`,
  },
  AE = `recharts_measurement_span`;
function jE(e, t) {
  return `${e}|${t.fontSize || ``}|${t.fontFamily || ``}|${t.fontWeight || ``}|${t.fontStyle || ``}|${t.letterSpacing || ``}|${t.textTransform || ``}`;
}
var ME = (e, t) => {
    try {
      var n = document.getElementById(AE);
      (n ||
        ((n = document.createElement(`span`)),
        n.setAttribute(`id`, AE),
        n.setAttribute(`aria-hidden`, `true`),
        document.body.appendChild(n)),
        Object.assign(n.style, kE, t),
        (n.textContent = `${e}`));
      var r = n.getBoundingClientRect();
      return { width: r.width, height: r.height };
    } catch {
      return { width: 0, height: 0 };
    }
  },
  NE = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (e == null || Xl.isSsr) return { width: 0, height: 0 };
    if (!DE.enableCache) return ME(e, t);
    var n = jE(e, t),
      r = OE.get(n);
    if (r) return r;
    var i = ME(e, t);
    return (OE.set(n, i), i);
  },
  PE;
function FE(e, t) {
  return BE(e) || zE(e, t) || LE(e, t) || IE();
}
function IE() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function LE(e, t) {
  if (e) {
    if (typeof e == `string`) return RE(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? RE(e, t)
          : void 0
    );
  }
}
function RE(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function zE(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function BE(e) {
  if (Array.isArray(e)) return e;
}
function VE(e, t, n) {
  return (
    (t = HE(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function HE(e) {
  var t = UE(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function UE(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var WE = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  GE = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  KE = /^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/,
  qE = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  JE = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 16,
    in: 96,
    Q: 96 / 101.6,
    px: 1,
  },
  YE = [`cm`, `mm`, `pt`, `pc`, `in`, `Q`, `px`];
function XE(e) {
  return YE.includes(e);
}
var ZE = `NaN`;
function QE(e, t) {
  return e * JE[t];
}
var $E = class e {
  static parse(t) {
    var n = FE(qE.exec(t) ?? [], 3),
      r = n[1],
      i = n[2];
    return r == null ? e.NaN : new e(parseFloat(r), i ?? ``);
  }
  constructor(e, t) {
    ((this.num = e),
      (this.unit = t),
      (this.num = e),
      (this.unit = t),
      Ce(e) && (this.unit = ``),
      t !== `` && !KE.test(t) && ((this.num = NaN), (this.unit = ``)),
      XE(t) && ((this.num = QE(e, t)), (this.unit = `px`)));
  }
  add(t) {
    return this.unit === t.unit
      ? new e(this.num + t.num, this.unit)
      : new e(NaN, ``);
  }
  subtract(t) {
    return this.unit === t.unit
      ? new e(this.num - t.num, this.unit)
      : new e(NaN, ``);
  }
  multiply(t) {
    return this.unit !== `` && t.unit !== `` && this.unit !== t.unit
      ? new e(NaN, ``)
      : new e(this.num * t.num, this.unit || t.unit);
  }
  divide(t) {
    return this.unit !== `` && t.unit !== `` && this.unit !== t.unit
      ? new e(NaN, ``)
      : new e(this.num / t.num, this.unit || t.unit);
  }
  toString() {
    return `${this.num}${this.unit}`;
  }
  isNaN() {
    return Ce(this.num);
  }
};
((PE = $E), VE($E, `NaN`, new PE(NaN, ``)));
function eD(e) {
  if (e == null || e.includes(ZE)) return ZE;
  for (var t = e; t.includes(`*`) || t.includes(`/`); ) {
    var n = FE(WE.exec(t) ?? [], 4),
      r = n[1],
      i = n[2],
      a = n[3],
      o = $E.parse(r ?? ``),
      s = $E.parse(a ?? ``),
      c = i === `*` ? o.multiply(s) : o.divide(s);
    if (c.isNaN()) return ZE;
    t = t.replace(WE, c.toString());
  }
  for (; t.includes(`+`) || /.-\d+(?:\.\d+)?/.test(t); ) {
    var l = FE(GE.exec(t) ?? [], 4),
      u = l[1],
      d = l[2],
      f = l[3],
      p = $E.parse(u ?? ``),
      m = $E.parse(f ?? ``),
      h = d === `+` ? p.add(m) : p.subtract(m);
    if (h.isNaN()) return ZE;
    t = t.replace(GE, h.toString());
  }
  return t;
}
var tD = /\(([^()]*)\)/;
function nD(e) {
  for (var t = e, n; (n = tD.exec(t)) != null; ) {
    var r = FE(n, 2)[1];
    t = t.replace(tD, eD(r));
  }
  return t;
}
function rD(e) {
  var t = e.replace(/\s+/g, ``);
  return ((t = nD(t)), (t = eD(t)), t);
}
function iD(e) {
  try {
    return rD(e);
  } catch {
    return ZE;
  }
}
function aD(e) {
  var t = iD(e.slice(5, -1));
  return t === ZE ? `` : t;
}
var oD = [
    `x`,
    `y`,
    `lineHeight`,
    `capHeight`,
    `fill`,
    `scaleToFit`,
    `textAnchor`,
    `verticalAnchor`,
  ],
  sD = [`dx`, `dy`, `angle`, `className`, `breakAll`];
function cD() {
  return (
    (cD = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    cD.apply(null, arguments)
  );
}
function lD(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = uD(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function uD(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function dD(e, t) {
  return gD(e) || hD(e, t) || pD(e, t) || fD();
}
function fD() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pD(e, t) {
  if (e) {
    if (typeof e == `string`) return mD(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? mD(e, t)
          : void 0
    );
  }
}
function mD(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function hD(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function gD(e) {
  if (Array.isArray(e)) return e;
}
var _D = /[ \f\n\r\t\v\u2028\u2029]+/,
  vD = (e) => {
    var t = e.children,
      n = e.breakAll,
      r = e.style;
    try {
      var i = [];
      return (
        F(t) || (i = n ? t.toString().split(``) : t.toString().split(_D)),
        {
          wordsWithComputedWidth: i.map((e) => ({
            word: e,
            width: NE(e, r).width,
          })),
          spaceWidth: n ? 0 : NE(`\xA0`, r).width,
        }
      );
    } catch {
      return null;
    }
  };
function yD(e) {
  return e === `start` || e === `middle` || e === `end` || e === `inherit`;
}
function bD(e) {
  return (
    F(e) ||
    typeof e == `string` ||
    typeof e == `number` ||
    typeof e == `boolean`
  );
}
var xD = (e, t, n, r) =>
    e.reduce((e, i) => {
      var a = i.word,
        o = i.width,
        s = e[e.length - 1];
      if (s && o != null && (t == null || r || s.width + o + n < Number(t)))
        (s.words.push(a), (s.width += o + n));
      else {
        var c = { words: [a], width: o };
        e.push(c);
      }
      return e;
    }, []),
  SD = (e) => e.reduce((e, t) => (e.width > t.width ? e : t)),
  CD = `…`,
  wD = (e, t, n, r, i, a, o, s) => {
    var c = vD({ breakAll: n, style: r, children: e.slice(0, t) + CD });
    if (!c) return [!1, []];
    var l = xD(c.wordsWithComputedWidth, a, o, s);
    return [l.length > i || SD(l).width > Number(a), l];
  },
  TD = (e, t, n, r, i) => {
    var a = e.maxLines,
      o = e.children,
      s = e.style,
      c = e.breakAll,
      l = P(a),
      u = String(o),
      d = xD(t, r, n, i);
    if (!l || i || !(d.length > a || SD(d).width > Number(r))) return d;
    for (var f = 0, p = u.length - 1, m = 0, h; f <= p && m <= u.length - 1; ) {
      var g = Math.floor((f + p) / 2),
        _ = dD(wD(u, g - 1, c, s, a, r, n, i), 2),
        v = _[0],
        y = _[1],
        b = dD(wD(u, g, c, s, a, r, n, i), 1)[0];
      if ((!v && !b && (f = g + 1), v && b && (p = g - 1), !v && b)) {
        h = y;
        break;
      }
      m++;
    }
    return h || d;
  },
  ED = (e) => [{ words: F(e) ? [] : e.toString().split(_D), width: void 0 }],
  DD = (e) => {
    var t = e.width,
      n = e.scaleToFit,
      r = e.children,
      i = e.style,
      a = e.breakAll,
      o = e.maxLines;
    if ((t || n) && !Xl.isSsr) {
      var s,
        c,
        l = vD({ breakAll: a, children: r, style: i });
      if (l) {
        var u = l.wordsWithComputedWidth,
          d = l.spaceWidth;
        ((s = u), (c = d));
      } else return ED(r);
      return TD(
        { breakAll: a, children: r, maxLines: o, style: i },
        s,
        c,
        t,
        !!n,
      );
    }
    return ED(r);
  },
  OD = `#808080`,
  kD = {
    angle: 0,
    breakAll: !1,
    capHeight: `0.71em`,
    fill: OD,
    lineHeight: `1em`,
    scaleToFit: !1,
    textAnchor: `start`,
    verticalAnchor: `end`,
    x: 0,
    y: 0,
  },
  AD = (0, w.forwardRef)((e, t) => {
    var n = yn(e, kD),
      r = n.x,
      i = n.y,
      a = n.lineHeight,
      o = n.capHeight,
      s = n.fill,
      c = n.scaleToFit,
      l = n.textAnchor,
      u = n.verticalAnchor,
      d = lD(n, oD),
      f = (0, w.useMemo)(
        () =>
          DD({
            breakAll: d.breakAll,
            children: d.children,
            maxLines: d.maxLines,
            scaleToFit: c,
            style: d.style,
            width: d.width,
          }),
        [d.breakAll, d.children, d.maxLines, c, d.style, d.width],
      ),
      p = d.dx,
      m = d.dy,
      h = d.angle,
      g = d.className,
      _ = d.breakAll,
      v = lD(d, sD);
    if (!Te(r) || !Te(i) || f.length === 0) return null;
    var y = Number(r) + (P(p) ? p : 0),
      b = Number(i) + (P(m) ? m : 0);
    if (!H(y) || !H(b)) return null;
    var S;
    switch (u) {
      case `start`:
        S = aD(`calc(${o})`);
        break;
      case `middle`:
        S = aD(`calc(${(f.length - 1) / 2} * -${a} + (${o} / 2))`);
        break;
      default:
        S = aD(`calc(${f.length - 1} * -${a})`);
    }
    var C = [],
      T = f[0];
    if (c && T != null) {
      var E = T.width,
        D = d.width;
      C.push(`scale(${P(D) && P(E) ? D / E : 1})`);
    }
    return (
      h && C.push(`rotate(${h}, ${y}, ${b})`),
      C.length && (v.transform = C.join(` `)),
      w.createElement(
        `text`,
        cD({}, A(v), {
          ref: t,
          x: y,
          y: b,
          className: x(`recharts-text`, g),
          textAnchor: l,
          fill: s.includes(`url`) ? OD : s,
        }),
        f.map((e, t) => {
          var n = e.words.join(_ ? `` : ` `);
          return w.createElement(
            `tspan`,
            { x: y, dy: t === 0 ? S : a, key: `${n}-${t}` },
            n,
          );
        }),
      )
    );
  });
AD.displayName = `Text`;
var jD = [`labelRef`],
  MD = [`content`];
function ND(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = PD(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function PD(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function FD(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function ID(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? FD(Object(n), !0).forEach(function (t) {
          LD(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : FD(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function LD(e, t, n) {
  return (
    (t = RD(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function RD(e) {
  var t = zD(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function zD(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function BD() {
  return (
    (BD = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    BD.apply(null, arguments)
  );
}
var VD = (0, w.createContext)(null),
  HD = (e) => {
    var t = e.x,
      n = e.y,
      r = e.upperWidth,
      i = e.lowerWidth,
      a = e.width,
      o = e.height,
      s = e.children,
      c = (0, w.useMemo)(
        () => ({
          x: t,
          y: n,
          upperWidth: r,
          lowerWidth: i,
          width: a,
          height: o,
        }),
        [t, n, r, i, a, o],
      );
    return w.createElement(VD.Provider, { value: c }, s);
  },
  UD = () => {
    var e = (0, w.useContext)(VD),
      t = Jc();
    return e || (t ? Fe(t) : void 0);
  },
  WD = (0, w.createContext)(null),
  GD = () => {
    var e = (0, w.useContext)(WD),
      t = R(Kp);
    return e || t;
  },
  KD = (e) => {
    var t = e.value,
      n = e.formatter,
      r = F(e.children) ? t : e.children;
    return typeof n == `function` ? n(r) : r;
  },
  qD = (e) => e != null && typeof e == `function`,
  JD = (e, t) => Se(t - e) * Math.min(Math.abs(t - e), 360),
  YD = (e, t, n, r, i) => {
    var a = e.offset,
      o = e.className,
      s = i.cx,
      c = i.cy,
      l = i.innerRadius,
      u = i.outerRadius,
      d = i.startAngle,
      f = i.endAngle,
      p = i.clockWise,
      m = (l + u) / 2,
      h = JD(d, f),
      g = h >= 0 ? 1 : -1,
      _,
      v;
    switch (t) {
      case `insideStart`:
        ((_ = d + g * a), (v = p));
        break;
      case `insideEnd`:
        ((_ = f - g * a), (v = !p));
        break;
      case `end`:
        ((_ = f + g * a), (v = p));
        break;
      default:
        throw Error(`Unsupported position ${t}`);
    }
    v = h <= 0 ? v : !v;
    var y = ff(s, c, m, _),
      b = ff(s, c, m, _ + (v ? 1 : -1) * 359),
      S = `M${y.x},${y.y}
    A${m},${m},0,1,${+!v},
    ${b.x},${b.y}`,
      C = F(e.id) ? De(`recharts-radial-line-`) : e.id;
    return w.createElement(
      `text`,
      BD({}, r, {
        dominantBaseline: `central`,
        className: x(`recharts-radial-bar-label`, o),
      }),
      w.createElement(`defs`, null, w.createElement(`path`, { id: C, d: S })),
      w.createElement(`textPath`, { xlinkHref: `#${C}` }, n),
    );
  },
  XD = (e, t, n) => {
    var r = e.cx,
      i = e.cy,
      a = e.innerRadius,
      o = e.outerRadius,
      s = (e.startAngle + e.endAngle) / 2;
    if (n === `outside`) {
      var c = ff(r, i, o + t, s),
        l = c.x;
      return {
        x: l,
        y: c.y,
        textAnchor: l >= r ? `start` : `end`,
        verticalAnchor: `middle`,
      };
    }
    if (n === `center`)
      return { x: r, y: i, textAnchor: `middle`, verticalAnchor: `middle` };
    if (n === `centerTop`)
      return { x: r, y: i, textAnchor: `middle`, verticalAnchor: `start` };
    if (n === `centerBottom`)
      return { x: r, y: i, textAnchor: `middle`, verticalAnchor: `end` };
    var u = ff(r, i, (a + o) / 2, s);
    return { x: u.x, y: u.y, textAnchor: `middle`, verticalAnchor: `middle` };
  },
  ZD = (e) => e != null && `cx` in e && P(e.cx),
  QD = {
    angle: 0,
    offset: 5,
    zIndex: Ep.label,
    position: `middle`,
    textBreakAll: !1,
  };
function $D(e) {
  if (!ZD(e)) return e;
  var t = e.cx,
    n = e.cy,
    r = e.outerRadius,
    i = r * 2;
  return {
    x: t - r,
    y: n - r,
    width: i,
    upperWidth: i,
    lowerWidth: i,
    height: i,
  };
}
function eO(e) {
  var t = yn(e, QD),
    n = t.viewBox,
    r = t.parentViewBox,
    i = t.position,
    a = t.value,
    o = t.children,
    s = t.content,
    c = t.className,
    l = c === void 0 ? `` : c,
    u = t.textBreakAll,
    d = t.labelRef,
    f = GD(),
    p = UD(),
    m = n == null ? (i === `center` ? p : (f ?? p)) : ZD(n) ? n : Fe(n),
    h,
    g,
    _ = $D(m);
  if (
    !m ||
    (F(a) && F(o) && !(0, w.isValidElement)(s) && typeof s != `function`)
  )
    return null;
  var v = ZD(m) && (i === `insideStart` || i === `insideEnd` || i === `end`);
  if (ZD(m)) v || (g = XD(m, t.offset, t.position));
  else if (_) {
    var y = Ve({
      viewBox: _,
      position: i,
      offset: t.offset,
      parentViewBox: ZD(r) ? void 0 : r,
      clamp: !0,
    });
    g = ID(
      ID(
        {
          x: y.x,
          y: y.y,
          textAnchor: y.horizontalAnchor,
          verticalAnchor: y.verticalAnchor,
        },
        y.width === void 0 ? {} : { width: y.width },
      ),
      y.height === void 0 ? {} : { height: y.height },
    );
  }
  var b = ID(
    ID(
      ID(
        ID({}, g?.x === void 0 ? {} : { x: g.x }),
        g?.y === void 0 ? {} : { y: g.y },
      ),
      t,
    ),
    {},
    { viewBox: m },
  );
  if ((0, w.isValidElement)(s)) {
    b.labelRef;
    var S = ND(b, jD);
    return (0, w.cloneElement)(s, S);
  }
  if (typeof s == `function`) {
    b.content;
    var C = ND(b, MD);
    if (((h = (0, w.createElement)(s, C)), (0, w.isValidElement)(h))) return h;
  } else h = KD(t);
  var T = A(t);
  return v && ZD(m)
    ? YD(t, i, h, T, m)
    : g == null
      ? null
      : w.createElement(
          _T,
          { zIndex: t.zIndex },
          w.createElement(
            AD,
            BD({ ref: d, className: x(`recharts-label`, l) }, T, g, {
              textAnchor: yD(T.textAnchor) ? T.textAnchor : g.textAnchor,
              breakAll: u,
            }),
            h,
          ),
        );
}
eO.displayName = `Label`;
var tO = (e, t, n) => {
  if (!e) return null;
  var r = { viewBox: t, labelRef: n };
  return e === !0
    ? w.createElement(eO, BD({ key: `label-implicit` }, r))
    : Te(e)
      ? w.createElement(eO, BD({ key: `label-implicit`, value: e }, r))
      : (0, w.isValidElement)(e)
        ? e.type === eO
          ? (0, w.cloneElement)(e, ID({ key: `label-implicit` }, r))
          : w.createElement(eO, BD({ key: `label-implicit`, content: e }, r))
        : qD(e)
          ? w.createElement(eO, BD({ key: `label-implicit`, content: e }, r))
          : e && typeof e == `object`
            ? w.createElement(eO, BD({}, e, { key: `label-implicit` }, r))
            : null;
};
function nO(e) {
  var t = e.label,
    n = e.labelRef;
  return tO(t, UD(), n) || null;
}
var rO = [`valueAccessor`],
  iO = [`dataKey`, `clockWise`, `id`, `textBreakAll`, `zIndex`];
function aO() {
  return (
    (aO = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    aO.apply(null, arguments)
  );
}
function oO(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = sO(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function sO(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var cO = (e) => {
    var t = Array.isArray(e.value) ? e.value[e.value.length - 1] : e.value;
    if (bD(t)) return t;
  },
  lO = (0, w.createContext)(void 0),
  uO = lO.Provider,
  dO = (0, w.createContext)(void 0);
dO.Provider;
function fO() {
  return (0, w.useContext)(lO);
}
function pO() {
  return (0, w.useContext)(dO);
}
function mO(e) {
  var t = e.valueAccessor,
    n = t === void 0 ? cO : t,
    r = oO(e, rO),
    i = r.dataKey;
  r.clockWise;
  var a = r.id,
    o = r.textBreakAll,
    s = r.zIndex,
    c = oO(r, iO),
    l = fO(),
    u = pO(),
    d = l || u;
  return !d || !d.length
    ? null
    : w.createElement(
        _T,
        { zIndex: s ?? Ep.label },
        w.createElement(
          oe,
          { className: `recharts-label-list` },
          d.map((e, t) => {
            var s = F(i) ? n(e, t) : U(e.payload, i),
              l = F(a) ? {} : { id: `${a}-${t}` };
            return w.createElement(
              eO,
              aO({ key: `label-${t}` }, A(e), c, l, {
                fill: r.fill ?? e.fill,
                parentViewBox: e.parentViewBox,
                value: s,
                textBreakAll: o,
                viewBox: e.viewBox,
                index: t,
                zIndex: 0,
              }),
            );
          }),
        ),
      );
}
mO.displayName = `LabelList`;
function hO(e) {
  var t = e.label;
  return t
    ? t === !0
      ? w.createElement(mO, { key: `labelList-implicit` })
      : w.isValidElement(t) || qD(t)
        ? w.createElement(mO, { key: `labelList-implicit`, content: t })
        : typeof t == `object`
          ? w.createElement(
              mO,
              aO({ key: `labelList-implicit` }, t, { type: String(t.type) }),
            )
          : null
    : null;
}
var gO = Eo({
    name: `polarAxis`,
    initialState: { radiusAxis: {}, angleAxis: {} },
    reducers: {
      addRadiusAxis(e, t) {
        e.radiusAxis[t.payload.id] = B(t.payload);
      },
      removeRadiusAxis(e, t) {
        delete e.radiusAxis[t.payload.id];
      },
      addAngleAxis(e, t) {
        e.angleAxis[t.payload.id] = B(t.payload);
      },
      removeAngleAxis(e, t) {
        delete e.angleAxis[t.payload.id];
      },
    },
  }),
  _O = gO.actions;
(_O.addRadiusAxis, _O.removeRadiusAxis, _O.addAngleAxis, _O.removeAngleAxis);
var vO = gO.reducer;
function yO(e) {
  return e &&
    typeof e == `object` &&
    `className` in e &&
    typeof e.className == `string`
    ? e.className
    : ``;
}
var bO = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.suspense_list`),
      d = Symbol.for(`react.memo`),
      f = Symbol.for(`react.lazy`),
      p = Symbol.for(`react.view_transition`);
    function m(e) {
      if (typeof e == `object` && e) {
        var m = e.$$typeof;
        switch (m) {
          case t:
            switch (((e = e.type), e)) {
              case r:
              case a:
              case i:
              case l:
              case u:
              case p:
                return e;
              default:
                switch (((e &&= e.$$typeof), e)) {
                  case s:
                  case c:
                  case f:
                  case d:
                    return e;
                  case o:
                    return e;
                  default:
                    return m;
                }
            }
          case n:
            return m;
        }
      }
    }
    e.isFragment = function (e) {
      return m(e) === r;
    };
  }),
  xO = o((e, t) => {
    t.exports = bO();
  })(),
  SO = (e) =>
    typeof e == `string` ? e : e ? e.displayName || e.name || `Component` : ``,
  CO = null,
  wO = null,
  TO = (e) => {
    if (e === CO && Array.isArray(wO)) return wO;
    var t = [];
    return (
      w.Children.forEach(e, (e) => {
        F(e) ||
          ((0, xO.isFragment)(e)
            ? (t = t.concat(TO(e.props.children)))
            : t.push(e));
      }),
      (wO = t),
      (CO = e),
      t
    );
  };
function EO(e, t) {
  var n = [],
    r = [];
  return (
    (r = Array.isArray(t) ? t.map((e) => SO(e)) : [SO(t)]),
    TO(e).forEach((e) => {
      var t = _e(e, `type.displayName`) || _e(e, `type.name`);
      t && r.indexOf(t) !== -1 && n.push(e);
    }),
    n
  );
}
function DO(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function OO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? DO(Object(n), !0).forEach(function (t) {
          kO(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : DO(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function kO(e, t, n) {
  return (
    (t = AO(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function AO(e) {
  var t = jO(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function jO(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function MO(e, t) {
  return OO(OO({}, t), e);
}
function NO(e) {
  return (0, w.isValidElement)(e) ? e.props : e;
}
function PO(e, t) {
  return (0, w.cloneElement)(e, MO(NO(e), t));
}
function FO(e) {
  if (`index` in e) {
    var t = e.index;
    return typeof t == `number` || typeof t == `string` ? t : void 0;
  }
}
function IO(e) {
  return `isActive` in e && e.isActive === !0;
}
function LO(e) {
  var t = e.option,
    n = e.DefaultShape,
    r = e.shapeProps,
    i = e.activeClassName,
    a = i === void 0 ? `recharts-active-shape` : i,
    o = e.inActiveClassName,
    s = o === void 0 ? `recharts-shape` : o,
    c = FO(r),
    l = (0, w.isValidElement)(t)
      ? PO(t, r)
      : t === n
        ? w.createElement(n, r)
        : typeof t == `function`
          ? t(r, c)
          : typeof t == `object`
            ? w.createElement(n, MO(t, r))
            : w.createElement(n, r);
  return IO(r)
    ? w.createElement(oe, { className: a }, l)
    : w.createElement(oe, { className: s }, l);
}
var RO = (e, t, n) => {
    var r = L();
    return (i, a) => (o) => {
      (e?.(i, a, o),
        r(
          oC({
            activeIndex: String(a),
            activeDataKey: t,
            activeCoordinate: i.tooltipPosition,
            activeGraphicalItemId: n,
          }),
        ));
    };
  },
  zO = (e) => {
    var t = L();
    return (n, r) => (i) => {
      (e?.(n, r, i), t(sC()));
    };
  },
  BO = (e, t, n) => {
    var r = L();
    return (i, a) => (o) => {
      (e?.(i, a, o),
        r(
          lC({
            activeIndex: String(a),
            activeDataKey: t,
            activeCoordinate: i.tooltipPosition,
            activeGraphicalItemId: n,
          }),
        ));
    };
  };
function VO(e) {
  var t = e.tooltipEntrySettings,
    n = L(),
    r = fc(),
    i = (0, w.useRef)(null);
  return (
    (0, w.useLayoutEffect)(() => {
      r ||
        (i.current === null
          ? n(nC(t))
          : i.current !== t && n(rC({ prev: i.current, next: t })),
        (i.current = t));
    }, [t, n, r]),
    (0, w.useLayoutEffect)(
      () => () => {
        i.current &&= (n(iC(i.current)), null);
      },
      [n],
    ),
    null
  );
}
function HO(e) {
  var t = e.legendPayload,
    n = L(),
    r = fc(),
    i = (0, w.useRef)(null);
  return (
    (0, w.useLayoutEffect)(() => {
      r ||
        (i.current === null
          ? n(ol(t))
          : i.current !== t && n(sl({ prev: i.current, next: t })),
        (i.current = t));
    }, [n, r, t]),
    (0, w.useLayoutEffect)(
      () => () => {
        i.current &&= (n(cl(i.current)), null);
      },
      [n],
    ),
    null
  );
}
function UO(e, t) {
  return JO(e) || qO(e, t) || GO(e, t) || WO();
}
function WO() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function GO(e, t) {
  if (e) {
    if (typeof e == `string`) return KO(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? KO(e, t)
          : void 0
    );
  }
}
function KO(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function qO(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function JO(e) {
  if (Array.isArray(e)) return e;
}
var YO = `index`,
  XO = `append`;
function ZO(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
    r = [];
  for (var i of n) r.push({ status: `removed`, prev: i });
  for (var a = 0; a < t.length; a++) {
    var o = e[a],
      s = t[a];
    o == null
      ? r.push({ status: `added`, next: s })
      : r.push({ status: `matched`, prev: o, next: s });
  }
  return r;
}
function QO(e, t) {
  var n = e.length / t.length;
  return ZO(
    t.map((t, r) => e[Math.floor(r * n)]),
    t,
  );
}
function $O(e, t) {
  return ZO(
    t.map((t, n) => e[n]),
    t,
  );
}
function ek(e, t) {
  for (var n = new Map(), r = 0; r < e.length; r++) {
    var i = e[r];
    if (i != null) {
      var a = t(i, r);
      a != null && !n.has(a) && n.set(a, i);
    }
  }
  return n;
}
function tk(e, t, n) {
  var r = ek(e, n),
    i = new Set(),
    a = t.map((e, t) => {
      var a = n(e, t);
      if (a != null) {
        var o = r.get(a);
        if (o !== void 0) return (i.add(a), o);
      }
    }),
    o = [];
  for (var s of r) {
    var c = UO(s, 2),
      l = c[0],
      u = c[1];
    i.has(l) || o.push(u);
  }
  return ZO(a, t, o);
}
function nk(e, t, n) {
  return t == null
    ? null
    : e == null
      ? t.map((e) => ({ status: `added`, next: e }))
      : n === `index`
        ? QO(e, t)
        : n === `append`
          ? $O(e, t)
          : tk(e, t, n);
}
function rk(e, t) {
  var n = (0, w.useRef)(e),
    r = (0, w.useRef)(t.current),
    i = (0, w.useRef)(!0);
  n.current !== e &&
    ((n.current = e), (r.current = t.current), (i.current = !1));
  var a = (0, w.useCallback)(
    function (e, n) {
      var a =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
      n === 0
        ? (i.current = !0)
        : (n === 1 && (r.current = e),
          n > 0 && i.current && a && (t.current = e));
    },
    [t],
  );
  return { startValue: r.current, syncStepValue: a };
}
function ik(e, t) {
  return lk(e) || ck(e, t) || ok(e, t) || ak();
}
function ak() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ok(e, t) {
  if (e) {
    if (typeof e == `string`) return sk(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? sk(e, t)
          : void 0
    );
  }
}
function sk(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function ck(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function lk(e) {
  if (Array.isArray(e)) return e;
}
function uk(e, t) {
  var n = ik((0, w.useState)(!1), 2),
    r = n[0],
    i = n[1];
  return {
    isAnimating: r,
    handleAnimationStart: (0, w.useCallback)(() => {
      (typeof e == `function` && e(), i(!0));
    }, [e]),
    handleAnimationEnd: (0, w.useCallback)(() => {
      (typeof t == `function` && t(), i(!1));
    }, [t]),
  };
}
function dk(e) {
  var t = e.animationInput,
    n = e.animationIdPrefix,
    r = e.items,
    i = e.previousItemsRef,
    a = e.isAnimationActive,
    o = e.animationBegin,
    s = e.animationDuration,
    c = e.animationEasing,
    l = e.onAnimationStart,
    u = e.onAnimationEnd,
    d = e.animationInterpolateFn,
    f = e.animationMatchBy,
    p = e.shouldUpdatePreviousRef,
    m = e.children,
    h = e.layout,
    g = Td(t, n),
    _ = rk(g, i),
    v = _.startValue ?? null,
    y = nk(v, r, f ?? YO);
  return w.createElement(
    wd,
    {
      animationId: g,
      begin: o,
      duration: s,
      isActive: a,
      easing: c,
      onAnimationEnd: u,
      onAnimationStart: l,
      key: g,
    },
    (e) => {
      var t = v == null,
        n = r == null ? r : d(y, e, h),
        i = p ? p(e) : e > 0;
      return (_.syncStepValue(n, e, i), n == null ? null : m(n, e, t));
    },
  );
}
function fk(e, t) {
  return _k(e) || gk(e, t) || mk(e, t) || pk();
}
function pk() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mk(e, t) {
  if (e) {
    if (typeof e == `string`) return hk(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? hk(e, t)
          : void 0
    );
  }
}
function hk(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function gk(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function _k(e) {
  if (Array.isArray(e)) return e;
}
var vk =
  w.useId ??
  (() =>
    fk(
      w.useState(() => De(`uid-`)),
      1,
    )[0]);
function yk(e, t) {
  var n = vk();
  return t || (e ? `${e}-${n}` : n);
}
var bk = (0, w.createContext)(void 0),
  xk = (e) => {
    var t = e.id,
      n = e.type,
      r = e.children,
      i = yk(`recharts-${n}`, t);
    return w.createElement(bk.Provider, { value: i }, r(i));
  },
  Sk = Eo({
    name: `graphicalItems`,
    initialState: { cartesianItems: [], polarItems: [] },
    reducers: {
      addCartesianGraphicalItem: {
        reducer(e, t) {
          e.cartesianItems.push(B(t.payload));
        },
        prepare: V(),
      },
      replaceCartesianGraphicalItem: {
        reducer(e, t) {
          var n = t.payload,
            r = n.prev,
            i = n.next,
            a = Za(e).cartesianItems.indexOf(B(r));
          a > -1 && (e.cartesianItems[a] = B(i));
        },
        prepare: V(),
      },
      removeCartesianGraphicalItem: {
        reducer(e, t) {
          var n = Za(e).cartesianItems.indexOf(B(t.payload));
          n > -1 && e.cartesianItems.splice(n, 1);
        },
        prepare: V(),
      },
      addPolarGraphicalItem: {
        reducer(e, t) {
          e.polarItems.push(B(t.payload));
        },
        prepare: V(),
      },
      removePolarGraphicalItem: {
        reducer(e, t) {
          var n = Za(e).polarItems.indexOf(B(t.payload));
          n > -1 && e.polarItems.splice(n, 1);
        },
        prepare: V(),
      },
      replacePolarGraphicalItem: {
        reducer(e, t) {
          var n = t.payload,
            r = n.prev,
            i = n.next,
            a = Za(e).polarItems.indexOf(B(r));
          a > -1 && (e.polarItems[a] = B(i));
        },
        prepare: V(),
      },
    },
  }),
  Ck = Sk.actions,
  wk = Ck.addCartesianGraphicalItem,
  Tk = Ck.replaceCartesianGraphicalItem,
  Ek = Ck.removeCartesianGraphicalItem;
(Ck.addPolarGraphicalItem,
  Ck.removePolarGraphicalItem,
  Ck.replacePolarGraphicalItem);
var Dk = Sk.reducer,
  Ok = (0, w.memo)((e) => {
    var t = L(),
      n = (0, w.useRef)(null);
    return (
      (0, w.useLayoutEffect)(() => {
        (n.current === null
          ? t(wk(e))
          : n.current !== e && t(Tk({ prev: n.current, next: e })),
          (n.current = e));
      }, [t, e]),
      (0, w.useLayoutEffect)(
        () => () => {
          n.current &&= (t(Ek(n.current)), null);
        },
        [t],
      ),
      null
    );
  });
function kk(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Ak(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? kk(Object(n), !0).forEach(function (t) {
          jk(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : kk(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function jk(e, t, n) {
  return (
    (t = Mk(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Mk(e) {
  var t = Nk(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Nk(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Pk = Eo({
    name: `cartesianAxis`,
    initialState: { xAxis: {}, yAxis: {}, zAxis: {} },
    reducers: {
      addXAxis: {
        reducer(e, t) {
          e.xAxis[t.payload.id] = B(t.payload);
        },
        prepare: V(),
      },
      replaceXAxis: {
        reducer(e, t) {
          var n = t.payload,
            r = n.prev,
            i = n.next;
          e.xAxis[r.id] !== void 0 &&
            (r.id !== i.id && delete e.xAxis[r.id], (e.xAxis[i.id] = B(i)));
        },
        prepare: V(),
      },
      removeXAxis: {
        reducer(e, t) {
          delete e.xAxis[t.payload.id];
        },
        prepare: V(),
      },
      addYAxis: {
        reducer(e, t) {
          e.yAxis[t.payload.id] = B(t.payload);
        },
        prepare: V(),
      },
      replaceYAxis: {
        reducer(e, t) {
          var n = t.payload,
            r = n.prev,
            i = n.next;
          e.yAxis[r.id] !== void 0 &&
            (r.id !== i.id && delete e.yAxis[r.id], (e.yAxis[i.id] = B(i)));
        },
        prepare: V(),
      },
      removeYAxis: {
        reducer(e, t) {
          delete e.yAxis[t.payload.id];
        },
        prepare: V(),
      },
      addZAxis: {
        reducer(e, t) {
          e.zAxis[t.payload.id] = B(t.payload);
        },
        prepare: V(),
      },
      replaceZAxis: {
        reducer(e, t) {
          var n = t.payload,
            r = n.prev,
            i = n.next;
          e.zAxis[r.id] !== void 0 &&
            (r.id !== i.id && delete e.zAxis[r.id], (e.zAxis[i.id] = B(i)));
        },
        prepare: V(),
      },
      removeZAxis: {
        reducer(e, t) {
          delete e.zAxis[t.payload.id];
        },
        prepare: V(),
      },
      updateYAxisWidth(e, t) {
        var n = t.payload,
          r = n.id,
          i = n.width,
          a = e.yAxis[r];
        if (a) {
          var o = a.widthHistory || [];
          if (
            o.length === 3 &&
            o[0] === o[2] &&
            i === o[1] &&
            i !== a.width &&
            Math.abs(i - (o[0] ?? 0)) <= 1
          )
            return;
          var s = [...o, i].slice(-3);
          e.yAxis[r] = Ak(Ak({}, a), {}, { width: i, widthHistory: s });
        }
      },
      updateXAxisHeight(e, t) {
        var n = t.payload,
          r = n.id,
          i = n.height,
          a = e.xAxis[r];
        if (a) {
          var o = a.heightHistory || [];
          if (
            o.length === 3 &&
            o[0] === o[2] &&
            i === o[1] &&
            i !== a.height &&
            Math.abs(i - (o[0] ?? 0)) <= 1
          )
            return;
          var s = [...o, i].slice(-3);
          e.xAxis[r] = Ak(Ak({}, a), {}, { height: i, heightHistory: s });
        }
      },
    },
  }),
  Fk = Pk.actions,
  Ik = Fk.addXAxis,
  Lk = Fk.replaceXAxis,
  Rk = Fk.removeXAxis;
(Fk.addYAxis,
  Fk.replaceYAxis,
  Fk.removeYAxis,
  Fk.addZAxis,
  Fk.replaceZAxis,
  Fk.removeZAxis,
  Fk.updateYAxisWidth);
var zk = Fk.updateXAxisHeight,
  Bk = Pk.reducer,
  Vk = z(
    [
      z([W], (e) => ({
        top: e.top,
        bottom: e.bottom,
        left: e.left,
        right: e.right,
      })),
      Ks,
      qs,
    ],
    (e, t, n) => {
      if (e && t != null && n != null)
        return {
          x: e.left,
          y: e.top,
          width: Math.max(0, t - e.left - e.right),
          height: Math.max(0, n - e.top - e.bottom),
        };
    },
  ),
  Hk = () => R(Vk);
function Uk(e, t) {
  return Jk(e) || qk(e, t) || Gk(e, t) || Wk();
}
function Wk() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gk(e, t) {
  if (e) {
    if (typeof e == `string`) return Kk(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Kk(e, t)
          : void 0
    );
  }
}
function Kk(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function qk(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function Jk(e) {
  if (Array.isArray(e)) return e;
}
var Yk = (e, t, n) => {
    var r = n ?? e;
    if (!F(r)) return Oe(r, t, 0);
  },
  Xk = (e, t, n) => {
    var r = {},
      i = e.filter(Zp),
      a = e.filter((e) => e.stackId == null),
      o = i.reduce((e, t) => {
        var n = e[t.stackId];
        return ((n ??= []), n.push(t), (e[t.stackId] = n), e);
      }, r),
      s = Object.entries(o).map((e) => {
        var r = Uk(e, 2),
          i = r[0],
          a = r[1];
        return {
          stackId: i,
          dataKeys: a.map((e) => e.dataKey),
          barSize: Yk(t, n, a[0]?.barSize),
        };
      }),
      c = a.map((e) => ({
        stackId: void 0,
        dataKeys: [e.dataKey].filter((e) => e != null),
        barSize: Yk(t, n, e.barSize),
      }));
    return [...s, ...c];
  };
function Zk(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Qk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Zk(Object(n), !0).forEach(function (t) {
          $k(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Zk(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function $k(e, t, n) {
  return (
    (t = eA(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function eA(e) {
  var t = tA(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function tA(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function nA(e, t, n, r, i) {
  var a = r.length;
  if (!(a < 1)) {
    var o = Oe(e, n, 0, !0),
      s,
      c = [];
    if (H(r[0]?.barSize)) {
      var l = !1,
        u = n / a,
        d = r.reduce((e, t) => e + (t.barSize || 0), 0);
      ((d += (a - 1) * o),
        d >= n && ((d -= (a - 1) * o), (o = 0)),
        d >= n && u > 0 && ((l = !0), (u *= 0.9), (d = a * u)));
      var f = { offset: Math.round((n - d) / 2) - o, size: 0 };
      s = r.reduce((e, t) => {
        var n = {
            stackId: t.stackId,
            dataKeys: t.dataKeys,
            position: {
              offset: f.offset + f.size + o,
              size: l ? u : (t.barSize ?? 0),
            },
          },
          r = [...e, n];
        return ((f = n.position), r);
      }, c);
    } else {
      var p = Oe(t, n, 0, !0);
      n - 2 * p - (a - 1) * o <= 0 && (o = 0);
      var m = (n - 2 * p - (a - 1) * o) / a;
      m > 1 && (m = Math.round(m));
      var h = H(i) ? Math.min(m, i) : m;
      s = r.reduce(
        (e, t, n) => [
          ...e,
          {
            stackId: t.stackId,
            dataKeys: t.dataKeys,
            position: { offset: p + (a * (m - h)) / 2 + (h + o) * n, size: h },
          },
        ],
        c,
      );
    }
    return s;
  }
}
var rA = (e, t, n, r, i, a, o) => {
    var s = F(o) ? t : o,
      c = nA(n, r, i === a ? a : i, e, s);
    return (
      i !== a &&
        c != null &&
        (c = c.map((e) =>
          Qk(
            Qk({}, e),
            {},
            {
              position: Qk(
                Qk({}, e.position),
                {},
                { offset: e.position.offset - i / 2 },
              ),
            },
          ),
        )),
      c
    );
  },
  iA = (e, t) => {
    var n = Yp(t);
    if (e && n != null && t != null) {
      var r = t.stackId;
      if (r != null) {
        var i = e[r];
        if (i) {
          var a = i.stackedData;
          if (a) return a.find((e) => e.key === n);
        }
      }
    }
  },
  aA = (e, t) => {
    if (e != null && t != null) {
      var n = e.find(
        (e) =>
          e.stackId === t.stackId &&
          t.dataKey != null &&
          e.dataKeys.includes(t.dataKey),
      );
      if (n != null) return n.position;
    }
  };
function oA(e, t) {
  return e &&
    typeof e == `object` &&
    `zIndex` in e &&
    typeof e.zIndex == `number` &&
    H(e.zIndex)
    ? e.zIndex
    : t;
}
var sA = (e) => {
    var t = e.chartData,
      n = L(),
      r = fc();
    return (
      (0, w.useEffect)(
        () =>
          r
            ? () => {}
            : (n(BT(t)),
              () => {
                n(BT(void 0));
              }),
        [t, n, r],
      ),
      null
    );
  },
  cA = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  },
  lA = Eo({
    name: `brush`,
    initialState: cA,
    reducers: {
      setBrushSettings(e, t) {
        return t.payload == null ? cA : t.payload;
      },
    },
  });
lA.actions.setBrushSettings;
var uA = lA.reducer;
function dA(e) {
  return ((e % 180) + 180) % 180;
}
var fA = function (e) {
    var t = e.width,
      n = e.height,
      r =
        (dA(
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        ) *
          Math.PI) /
        180,
      i = Math.atan(n / t),
      a = r > i && r < Math.PI - i ? n / Math.sin(r) : t / Math.cos(r);
    return Math.abs(a);
  },
  pA = Eo({
    name: `referenceElements`,
    initialState: { dots: [], areas: [], lines: [] },
    reducers: {
      addDot: (e, t) => {
        e.dots.push(t.payload);
      },
      removeDot: (e, t) => {
        var n = Za(e).dots.findIndex((e) => e === t.payload);
        n !== -1 && e.dots.splice(n, 1);
      },
      addArea: (e, t) => {
        e.areas.push(t.payload);
      },
      removeArea: (e, t) => {
        var n = Za(e).areas.findIndex((e) => e === t.payload);
        n !== -1 && e.areas.splice(n, 1);
      },
      addLine: (e, t) => {
        e.lines.push(B(t.payload));
      },
      removeLine: (e, t) => {
        var n = Za(e).lines.findIndex((e) => e === t.payload);
        n !== -1 && e.lines.splice(n, 1);
      },
    },
  }),
  mA = pA.actions;
(mA.addDot, mA.removeDot, mA.addArea, mA.removeArea, mA.addLine, mA.removeLine);
var hA = pA.reducer;
function gA(e, t) {
  return xA(e) || bA(e, t) || vA(e, t) || _A();
}
function _A() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vA(e, t) {
  if (e) {
    if (typeof e == `string`) return yA(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? yA(e, t)
          : void 0
    );
  }
}
function yA(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function bA(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function xA(e) {
  if (Array.isArray(e)) return e;
}
var SA = (0, w.createContext)(void 0),
  CA = (e) => {
    var t = e.children,
      n = gA((0, w.useState)(`${De(`recharts`)}-clip`), 1)[0],
      r = Hk();
    if (r == null) return null;
    var i = r.x,
      a = r.y,
      o = r.width,
      s = r.height;
    return w.createElement(
      SA.Provider,
      { value: n },
      w.createElement(
        `defs`,
        null,
        w.createElement(
          `clipPath`,
          { id: n },
          w.createElement(`rect`, { x: i, y: a, height: s, width: o }),
        ),
      ),
      t,
    );
  };
function wA() {}
function TA(e) {
  if (!e || typeof e != `object`) return !1;
  let t = Object.getPrototypeOf(e);
  return t !== null &&
    t !== Object.prototype &&
    Object.getPrototypeOf(t) !== null
    ? !1
    : Object.prototype.toString.call(e) === `[object Object]`;
}
function EA(e, t, n) {
  return DA(e, t, void 0, void 0, void 0, void 0, n);
}
function DA(e, t, n, r, i, a, o) {
  let s = o(e, t, n, r, i, a);
  if (s !== void 0) return s;
  if (typeof e == typeof t)
    switch (typeof e) {
      case `bigint`:
      case `string`:
      case `boolean`:
      case `symbol`:
      case `undefined`:
        return e === t;
      case `number`:
        return e === t || Object.is(e, t);
      case `function`:
        return e === t;
      case `object`:
        return OA(e, t, a, o);
    }
  return OA(e, t, a, o);
}
function OA(e, t, n, r) {
  if (Object.is(e, t)) return !0;
  let i = Dn(e),
    a = Dn(t);
  if (
    (i === `[object Arguments]` && (i = Bn),
    a === `[object Arguments]` && (a = Bn),
    i !== a)
  )
    return !1;
  switch (i) {
    case kn:
      return e.toString() === t.toString();
    case An:
      return er(e.valueOf(), t.valueOf());
    case jn:
    case Pn:
    case Nn:
      return Object.is(e.valueOf(), t.valueOf());
    case On:
      return e.source === t.source && e.flags === t.flags;
    case Rn:
      return e === t;
  }
  n ??= new Map();
  let o = n.get(e),
    s = n.get(t);
  if (o != null && s != null) return o === t;
  (n.set(e, t), n.set(t, e));
  try {
    switch (i) {
      case Fn:
        if (e.size !== t.size) return !1;
        for (let [i, a] of e.entries())
          if (!t.has(i) || !DA(a, t.get(i), i, e, t, n, r)) return !1;
        return !0;
      case In: {
        if (e.size !== t.size) return !1;
        let i = Array.from(e.values()),
          a = Array.from(t.values());
        for (let o = 0; o < i.length; o++) {
          let s = i[o],
            c = a.findIndex((i) => DA(s, i, void 0, e, t, n, r));
          if (c === -1) return !1;
          a.splice(c, 1);
        }
        return !0;
      }
      case Ln:
      case Un:
      case Wn:
      case Gn:
      case Kn:
      case qn:
      case Jn:
      case Yn:
      case Xn:
      case Zn:
      case Qn:
      case $n:
        if (dr(e) !== dr(t) || e.length !== t.length) return !1;
        for (let i = 0; i < e.length; i++)
          if (!DA(e[i], t[i], i, e, t, n, r)) return !1;
        return !0;
      case zn:
        return (
          e.byteLength === t.byteLength &&
          OA(new Uint8Array(e), new Uint8Array(t), n, r)
        );
      case Hn:
        return e.byteLength !== t.byteLength || e.byteOffset !== t.byteOffset
          ? !1
          : OA(new Uint8Array(e), new Uint8Array(t), n, r);
      case Vn:
        return e.name === t.name && e.message === t.message;
      case Bn: {
        if (!(OA(e.constructor, t.constructor, n, r) || (TA(e) && TA(t))))
          return !1;
        let i = [...Object.keys(e), ...lr(e)],
          a = [...Object.keys(t), ...lr(t)];
        if (i.length !== a.length) return !1;
        for (let a = 0; a < i.length; a++) {
          let o = i[a],
            s = e[o];
          if (!le(t, o)) return !1;
          let c = t[o];
          if (!DA(s, c, o, e, t, n, r)) return !1;
        }
        return !0;
      }
      default:
        return !1;
    }
  } finally {
    (n.delete(e), n.delete(t));
  }
}
function kA(e, t) {
  return EA(e, t, wA);
}
function AA(e, t) {
  if (t < 1) return [];
  if (t === 1) return e;
  for (var n = [], r = 0; r < e.length; r += t) {
    var i = e[r];
    i !== void 0 && n.push(i);
  }
  return n;
}
function jA(e, t, n) {
  return fA({ width: e.width + t.width, height: e.height + t.height }, n);
}
function MA(e, t, n) {
  var r = n === `width`,
    i = e.x,
    a = e.y,
    o = e.width,
    s = e.height;
  return t === 1
    ? { start: r ? i : a, end: r ? i + o : a + s }
    : { start: r ? i + o : a + s, end: r ? i : a };
}
function NA(e, t, n, r, i) {
  if (e * t < e * r || e * t > e * i) return !1;
  var a = n();
  return e * (t - (e * a) / 2 - r) >= 0 && e * (t + (e * a) / 2 - i) <= 0;
}
function PA(e, t) {
  return AA(e, t + 1);
}
function FA(e, t, n, r, i) {
  for (
    var a = (r || []).slice(),
      o = t.start,
      s = t.end,
      c = 0,
      l = 1,
      u = o,
      d = function () {
        var t = r?.[c];
        if (t === void 0) return { v: AA(r, l) };
        var a = c,
          d,
          f = () => (d === void 0 && (d = n(t, a)), d),
          p = t.coordinate,
          m = c === 0 || NA(e, p, f, u, s);
        (m || ((c = 0), (u = o), (l += 1)),
          m && ((u = p + e * (f() / 2 + i)), (c += l)));
      },
      f;
    l <= a.length;
  )
    if (((f = d()), f)) return f.v;
  return [];
}
function IA(e, t, n, r, i) {
  var a = (r || []).slice().length;
  if (a === 0) return [];
  for (var o = t.start, s = t.end, c = 1; c <= a; c++) {
    for (
      var l = (a - 1) % c,
        u = o,
        d = !0,
        f = function () {
          var t = r[m];
          if (t == null) return 0;
          var a = m,
            o,
            c = () => (o === void 0 && (o = n(t, a)), o),
            f = t.coordinate,
            p = m === l || NA(e, f, c, u, s);
          if (!p) return ((d = !1), 1);
          p && (u = f + e * (c() / 2 + i));
        },
        p,
        m = l;
      m < a && ((p = f()), p === 0 || p !== 1);
      m += c
    );
    if (d) {
      for (var h = [], g = l; g < a; g += c) {
        var _ = r[g];
        _ != null && h.push(_);
      }
      return h;
    }
  }
  return [];
}
function LA(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function RA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? LA(Object(n), !0).forEach(function (t) {
          zA(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : LA(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function zA(e, t, n) {
  return (
    (t = BA(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function BA(e) {
  var t = VA(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function VA(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function HA(e, t, n, r, i) {
  for (
    var a = (r || []).slice(),
      o = a.length,
      s = t.start,
      c = t.end,
      l = function (t) {
        var r = a[t];
        if (r == null) return 1;
        var l = r,
          u,
          d = () => (u === void 0 && (u = n(r, t)), u);
        if (t === o - 1) {
          var f = e * (l.coordinate + (e * d()) / 2 - c);
          a[t] = l = RA(
            RA({}, l),
            {},
            { tickCoord: f > 0 ? l.coordinate - f * e : l.coordinate },
          );
        } else a[t] = l = RA(RA({}, l), {}, { tickCoord: l.coordinate });
        l.tickCoord != null &&
          NA(e, l.tickCoord, d, s, c) &&
          ((c = l.tickCoord - e * (d() / 2 + i)),
          (a[t] = RA(RA({}, l), {}, { isShow: !0 })));
      },
      u = o - 1;
    u >= 0;
    u--
  )
    if (l(u)) continue;
  return a;
}
function UA(e, t, n, r, i, a) {
  var o = (r || []).slice(),
    s = o.length,
    c = t.start,
    l = t.end;
  if (a) {
    var u = r[s - 1];
    if (u != null) {
      var d = n(u, s - 1),
        f = e * (u.coordinate + (e * d) / 2 - l);
      ((o[s - 1] = u =
        RA(
          RA({}, u),
          {},
          { tickCoord: f > 0 ? u.coordinate - f * e : u.coordinate },
        )),
        u.tickCoord != null &&
          NA(e, u.tickCoord, () => d, c, l) &&
          ((l = u.tickCoord - e * (d / 2 + i)),
          (o[s - 1] = RA(RA({}, u), {}, { isShow: !0 }))));
    }
  }
  for (
    var p = a ? s - 1 : s,
      m = function (t) {
        var r = o[t];
        if (r == null) return 1;
        var a = r,
          s,
          u = () => (s === void 0 && (s = n(r, t)), s);
        if (t === 0) {
          var d = e * (a.coordinate - (e * u()) / 2 - c);
          o[t] = a = RA(
            RA({}, a),
            {},
            { tickCoord: d < 0 ? a.coordinate - d * e : a.coordinate },
          );
        } else o[t] = a = RA(RA({}, a), {}, { tickCoord: a.coordinate });
        a.tickCoord != null &&
          NA(e, a.tickCoord, u, c, l) &&
          ((c = a.tickCoord + e * (u() / 2 + i)),
          (o[t] = RA(RA({}, a), {}, { isShow: !0 })));
      },
      h = 0;
    h < p;
    h++
  )
    if (m(h)) continue;
  return o;
}
function WA(e, t, n) {
  var r = e.tick,
    i = e.ticks,
    a = e.viewBox,
    o = e.minTickGap,
    s = e.orientation,
    c = e.interval,
    l = e.tickFormatter,
    u = e.unit,
    d = e.angle;
  if (!i || !i.length || !r) return [];
  if (P(c) || Xl.isSsr) return PA(i, P(c) ? c : 0) ?? [];
  var f = [],
    p = s === `top` || s === `bottom` ? `width` : `height`,
    m =
      u && p === `width`
        ? NE(u, { fontSize: t, letterSpacing: n })
        : { width: 0, height: 0 },
    h = (e, r) => {
      var i = typeof l == `function` ? l(e.value, r) : e.value;
      return p === `width`
        ? jA(NE(i, { fontSize: t, letterSpacing: n }), m, d)
        : NE(i, { fontSize: t, letterSpacing: n })[p];
    },
    g = i[0],
    _ = i[1],
    v =
      i.length >= 2 && g != null && _ != null
        ? Se(_.coordinate - g.coordinate)
        : 1,
    y = MA(a, v, p);
  return c === `equidistantPreserveStart`
    ? FA(v, y, h, i, o)
    : c === `equidistantPreserveEnd`
      ? IA(v, y, h, i, o)
      : ((f =
          c === `preserveStart` || c === `preserveStartEnd`
            ? UA(v, y, h, i, o, c === `preserveStartEnd`)
            : HA(v, y, h, i, o)),
        f.filter((e) => e.isShow));
}
var GA = (e) => {
    var t = e.ticks,
      n = e.label,
      r = e.labelGapWithTick,
      i = r === void 0 ? 5 : r,
      a = e.tickSize,
      o = a === void 0 ? 0 : a,
      s = e.tickMargin,
      c = s === void 0 ? 0 : s,
      l = 0;
    if (t) {
      Array.from(t).forEach((e) => {
        if (e) {
          var t = e.getBoundingClientRect();
          t.width > l && (l = t.width);
        }
      });
      var u = n ? n.getBoundingClientRect().width : 0,
        d = o + c,
        f = l + d + u + (n ? i : 0);
      return Math.round(f);
    }
    return 0;
  },
  KA = (e) => {
    var t = e.ticks,
      n = e.label,
      r = e.labelGapWithTick,
      i = r === void 0 ? 5 : r,
      a = e.tickSize,
      o = a === void 0 ? 0 : a,
      s = e.tickMargin,
      c = s === void 0 ? 0 : s,
      l = 0;
    if (t) {
      Array.from(t).forEach((e) => {
        if (e) {
          var t = e.getBoundingClientRect();
          t.height > l && (l = t.height);
        }
      });
      var u = n ? n.getBoundingClientRect().height : 0,
        d = o + c,
        f = l + d + u + (n ? i : 0);
      return Math.round(f);
    }
    return 0;
  },
  qA = Eo({
    name: `renderedTicks`,
    initialState: { xAxis: {}, yAxis: {} },
    reducers: {
      setRenderedTicks: (e, t) => {
        var n = t.payload,
          r = n.axisType,
          i = n.axisId,
          a = n.ticks;
        e[r][i] = B(a);
      },
      removeRenderedTicks: (e, t) => {
        var n = t.payload,
          r = n.axisType,
          i = n.axisId;
        delete e[r][i];
      },
    },
  }),
  JA = qA.actions,
  YA = JA.setRenderedTicks,
  XA = JA.removeRenderedTicks,
  ZA = qA.reducer,
  QA = [
    `axisLine`,
    `width`,
    `height`,
    `className`,
    `hide`,
    `ticks`,
    `axisType`,
    `axisId`,
  ];
function $A(e, t) {
  return ij(e) || rj(e, t) || tj(e, t) || ej();
}
function ej() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tj(e, t) {
  if (e) {
    if (typeof e == `string`) return nj(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? nj(e, t)
          : void 0
    );
  }
}
function nj(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function rj(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function ij(e) {
  if (Array.isArray(e)) return e;
}
function aj(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = oj(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function oj(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function sj() {
  return (
    (sj = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    sj.apply(null, arguments)
  );
}
function cj(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? cj(Object(n), !0).forEach(function (t) {
          lj(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : cj(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function lj(e, t, n) {
  return (
    (t = uj(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function uj(e) {
  var t = dj(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function dj(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var fj = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: { x: 0, y: 0, width: 0, height: 0 },
  orientation: `bottom`,
  ticks: [],
  stroke: `#666`,
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  tickSize: 6,
  tickMargin: 2,
  interval: `preserveEnd`,
  zIndex: Ep.axis,
};
function pj(e) {
  var t = e.x,
    n = e.y,
    r = e.width,
    i = e.height,
    a = e.orientation,
    o = e.mirror,
    s = e.axisLine,
    c = e.otherSvgProps;
  if (!s) return null;
  var l = Z(Z(Z({}, c), O(s)), {}, { fill: `none` });
  if (a === `top` || a === `bottom`) {
    var u = +((a === `top` && !o) || (a === `bottom` && o));
    l = Z(Z({}, l), {}, { x1: t, y1: n + u * i, x2: t + r, y2: n + u * i });
  } else {
    var d = +((a === `left` && !o) || (a === `right` && o));
    l = Z(Z({}, l), {}, { x1: t + d * r, y1: n, x2: t + d * r, y2: n + i });
  }
  return w.createElement(
    `line`,
    sj({}, l, {
      className: x(`recharts-cartesian-axis-line`, _e(s, `className`)),
    }),
  );
}
function mj(e, t, n, r, i, a, o, s, c) {
  var l,
    u,
    d,
    f,
    p,
    m,
    h = s ? -1 : 1,
    g = e.tickSize || o,
    _ = P(e.tickCoord) ? e.tickCoord : e.coordinate;
  switch (a) {
    case `top`:
      ((l = u = e.coordinate),
        (f = n + +!s * i),
        (d = f - h * g),
        (m = d - h * c),
        (p = _));
      break;
    case `left`:
      ((d = f = e.coordinate),
        (u = t + +!s * r),
        (l = u - h * g),
        (p = l - h * c),
        (m = _));
      break;
    case `right`:
      ((d = f = e.coordinate),
        (u = t + +s * r),
        (l = u + h * g),
        (p = l + h * c),
        (m = _));
      break;
    default:
      ((l = u = e.coordinate),
        (f = n + +s * i),
        (d = f + h * g),
        (m = d + h * c),
        (p = _));
  }
  return { line: { x1: l, y1: d, x2: u, y2: f }, tick: { x: p, y: m } };
}
function hj(e, t) {
  switch (e) {
    case `left`:
      return t ? `start` : `end`;
    case `right`:
      return t ? `end` : `start`;
    default:
      return `middle`;
  }
}
function gj(e, t) {
  switch (e) {
    case `left`:
    case `right`:
      return `middle`;
    case `top`:
      return t ? `start` : `end`;
    default:
      return t ? `end` : `start`;
  }
}
function _j(e) {
  var t = e.option,
    n = e.tickProps,
    r = e.value,
    i,
    a = x(n.className, `recharts-cartesian-axis-tick-value`);
  if (w.isValidElement(t))
    i = w.cloneElement(t, Z(Z({}, n), {}, { className: a }));
  else if (typeof t == `function`) i = t(Z(Z({}, n), {}, { className: a }));
  else {
    var o = `recharts-cartesian-axis-tick-value`;
    (typeof t != `boolean` && (o = x(o, yO(t))),
      (i = w.createElement(AD, sj({}, n, { className: o }), r)));
  }
  return i;
}
function vj(e) {
  var t = e.ticks,
    n = e.axisType,
    r = e.axisId,
    i = L(),
    a = (0, w.useRef)(null);
  return (
    (0, w.useEffect)(() => {
      if (r != null && n != null) {
        var e = t.map((e) => ({
            value: e.value,
            coordinate: e.coordinate,
            offset: e.offset,
            index: e.index,
          })),
          o = a.current;
        (o != null && o.axisId === r && o.axisType === n && kA(o.ticks, e)) ||
          ((a.current = { ticks: e, axisId: r, axisType: n }),
          i(YA({ ticks: e, axisId: r, axisType: n })));
      }
    }, [i, t, r, n]),
    (0, w.useEffect)(
      () =>
        r == null || n == null
          ? Pe
          : () => {
              i(XA({ axisId: r, axisType: n }));
            },
      [i, r, n],
    ),
    null
  );
}
var yj = (0, w.forwardRef)((e, t) => {
    var n = e.ticks,
      r = n === void 0 ? [] : n,
      i = e.tick,
      a = e.tickLine,
      o = e.stroke,
      s = e.tickFormatter,
      c = e.unit,
      l = e.padding,
      u = e.tickTextProps,
      d = e.orientation,
      f = e.mirror,
      p = e.x,
      m = e.y,
      h = e.width,
      g = e.height,
      _ = e.tickSize,
      v = e.tickMargin,
      y = e.fontSize,
      b = e.letterSpacing,
      S = e.getTicksConfig,
      C = e.events,
      T = e.axisType,
      E = e.axisId,
      D = WA(Z(Z({}, S), {}, { ticks: r }), y, b),
      A = O(S),
      j = k(i),
      M = yD(A.textAnchor) ? A.textAnchor : hj(d, f),
      N = gj(d, f),
      ee = {};
    typeof a == `object` && (ee = a);
    var te = Z(Z({}, A), {}, { fill: `none` }, ee),
      ne = D.map((e) => Z({ entry: e }, mj(e, p, m, h, g, d, _, f, v))),
      re = ne.map((e) => {
        var t = e.entry,
          n = e.line;
        return w.createElement(
          oe,
          {
            className: `recharts-cartesian-axis-tick`,
            key: `tick-${t.value}-${t.coordinate}-${t.tickCoord}`,
          },
          a &&
            w.createElement(
              `line`,
              sj({}, te, n, {
                className: x(
                  `recharts-cartesian-axis-tick-line`,
                  _e(a, `className`),
                ),
              }),
            ),
        );
      }),
      ie = ne.map((e, t) => {
        var n = e.entry,
          r = e.tick,
          a = Z(
            Z(
              {},
              Z(
                Z(
                  Z(
                    Z({ verticalAnchor: N }, A),
                    {},
                    { textAnchor: M, stroke: `none`, fill: o },
                    r,
                  ),
                  {},
                  {
                    index: t,
                    payload: n,
                    visibleTicksCount: D.length,
                    tickFormatter: s,
                    padding: l,
                  },
                  u,
                ),
                {},
                { angle: u?.angle ?? A.angle ?? 0 },
              ),
            ),
            j,
          );
        return w.createElement(
          oe,
          sj(
            {
              className: `recharts-cartesian-axis-tick-label`,
              key: `tick-label-${n.value}-${n.coordinate}-${n.tickCoord}`,
            },
            pn(C, n, t),
          ),
          i &&
            w.createElement(_j, {
              option: i,
              tickProps: a,
              value: `${typeof s == `function` ? s(n.value, t) : n.value}${c || ``}`,
            }),
        );
      });
    return w.createElement(
      `g`,
      { className: `recharts-cartesian-axis-ticks recharts-${T}-ticks` },
      w.createElement(vj, { ticks: D, axisId: E, axisType: T }),
      ie.length > 0 &&
        w.createElement(
          _T,
          { zIndex: Ep.label },
          w.createElement(
            `g`,
            {
              className: `recharts-cartesian-axis-tick-labels recharts-${T}-tick-labels`,
              ref: t,
            },
            ie,
          ),
        ),
      re.length > 0 &&
        w.createElement(
          `g`,
          {
            className: `recharts-cartesian-axis-tick-lines recharts-${T}-tick-lines`,
          },
          re,
        ),
    );
  }),
  bj = (0, w.forwardRef)((e, t) => {
    var n = e.axisLine,
      r = e.width,
      i = e.height,
      a = e.className,
      o = e.hide,
      s = e.ticks,
      c = e.axisType,
      l = e.axisId,
      u = aj(e, QA),
      d = $A((0, w.useState)(``), 2),
      f = d[0],
      p = d[1],
      m = $A((0, w.useState)(``), 2),
      h = m[0],
      g = m[1],
      _ = (0, w.useRef)(null);
    (0, w.useImperativeHandle)(t, () => ({
      getCalculatedWidth: () =>
        GA({
          ticks: _.current,
          label: e.labelRef?.current,
          labelGapWithTick: 5,
          tickSize: e.tickSize,
          tickMargin: e.tickMargin,
        }),
      getCalculatedHeight: () =>
        KA({
          ticks: _.current,
          label: e.labelRef?.current,
          labelGapWithTick: 5,
          tickSize: e.tickSize,
          tickMargin: e.tickMargin,
        }),
    }));
    var v = (0, w.useCallback)(
      (e) => {
        if (e) {
          var t = e.getElementsByClassName(
            `recharts-cartesian-axis-tick-value`,
          );
          _.current = t;
          var n = t[0];
          if (n) {
            var r = window.getComputedStyle(n),
              i = r.fontSize,
              a = r.letterSpacing;
            (i !== f || a !== h) && (p(i), g(a));
          }
        }
      },
      [f, h],
    );
    return o || (r != null && r <= 0) || (i != null && i <= 0)
      ? null
      : w.createElement(
          _T,
          { zIndex: e.zIndex },
          w.createElement(
            oe,
            { className: x(`recharts-cartesian-axis`, a) },
            w.createElement(pj, {
              x: e.x,
              y: e.y,
              width: r,
              height: i,
              orientation: e.orientation,
              mirror: e.mirror,
              axisLine: n,
              otherSvgProps: O(e),
            }),
            w.createElement(yj, {
              ref: v,
              axisType: c,
              events: u,
              fontSize: f,
              getTicksConfig: e,
              height: e.height,
              letterSpacing: h,
              mirror: e.mirror,
              orientation: e.orientation,
              padding: e.padding,
              stroke: e.stroke,
              tick: e.tick,
              tickFormatter: e.tickFormatter,
              tickLine: e.tickLine,
              tickMargin: e.tickMargin,
              tickSize: e.tickSize,
              tickTextProps: e.tickTextProps,
              ticks: s,
              unit: e.unit,
              width: e.width,
              x: e.x,
              y: e.y,
              axisId: l,
            }),
            w.createElement(
              HD,
              {
                x: e.x,
                y: e.y,
                width: e.width,
                height: e.height,
                lowerWidth: e.width,
                upperWidth: e.width,
              },
              w.createElement(nO, { label: e.label, labelRef: e.labelRef }),
              e.children,
            ),
          ),
        );
  }),
  xj = w.forwardRef((e, t) => {
    var n = yn(e, fj);
    return w.createElement(bj, sj({}, n, { ref: t }));
  });
xj.displayName = `CartesianAxis`;
var Sj = Eo({
    name: `errorBars`,
    initialState: {},
    reducers: {
      addErrorBar: (e, t) => {
        var n = t.payload,
          r = n.itemId,
          i = n.errorBar;
        (e[r] || (e[r] = []), e[r].push(i));
      },
      replaceErrorBar: (e, t) => {
        var n = t.payload,
          r = n.itemId,
          i = n.prev,
          a = n.next;
        e[r] &&
          (e[r] = e[r].map((e) =>
            e.dataKey === i.dataKey && e.direction === i.direction ? a : e,
          ));
      },
      removeErrorBar: (e, t) => {
        var n = t.payload,
          r = n.itemId,
          i = n.errorBar;
        e[r] &&
          (e[r] = e[r].filter(
            (e) => e.dataKey !== i.dataKey || e.direction !== i.direction,
          ));
      },
    },
  }),
  Cj = Sj.actions;
(Cj.addErrorBar, Cj.replaceErrorBar, Cj.removeErrorBar);
var wj = Sj.reducer,
  Tj = [`children`];
function Ej(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Dj(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function Dj(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Oj = (0, w.createContext)({
  data: [],
  xAxisId: `xAxis-0`,
  yAxisId: `yAxis-0`,
  dataPointFormatter: () => ({ x: 0, y: 0, value: 0 }),
  errorBarOffset: 0,
});
function kj(e) {
  var t = e.children,
    n = Ej(e, Tj);
  return w.createElement(Oj.Provider, { value: n }, t);
}
function Aj(e, t) {
  var n = R((t) => Gb(t, e)),
    r = R((e) => Jb(e, t)),
    i = n?.allowDataOverflow ?? Y.allowDataOverflow,
    a = r?.allowDataOverflow ?? Kb.allowDataOverflow;
  return { needClip: i || a, needClipX: i, needClipY: a };
}
function jj(e) {
  var t = e.xAxisId,
    n = e.yAxisId,
    r = e.clipPathId,
    i = Hk(),
    a = Aj(t, n),
    o = a.needClipX,
    s = a.needClipY,
    c = a.needClip,
    l = R((e) => _S(e, t, !1)),
    u = R((e) => vS(e, n, !1));
  if (!c || !i) return null;
  var d = i.x,
    f = i.y,
    p = i.width,
    m = i.height,
    h = o && l ? Math.min(l[0], l[1]) : d - p / 2,
    g = s && u ? Math.min(u[0], u[1]) : f - m / 2,
    _ = o && l ? Math.abs(l[1] - l[0]) : p * 2,
    v = s && u ? Math.abs(u[1] - u[0]) : m * 2;
  return w.createElement(
    `clipPath`,
    { id: `clipPath-${r}` },
    w.createElement(`rect`, { x: h, y: g, width: _, height: v }),
  );
}
function Mj(e, t) {
  return e.graphicalItems.cartesianItems.find((e) => e.id === t)?.xAxisId ?? 0;
}
function Nj(e, t) {
  return e.graphicalItems.cartesianItems.find((e) => e.id === t)?.yAxisId ?? 0;
}
var Pj = `Invariant failed`;
function Fj(e, t) {
  if (!e) throw Error(Pj);
}
var Ij = [`option`];
function Lj(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Rj(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function Rj(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var zj = rf;
function Bj(e) {
  var t = e.option,
    n = Lj(e, Ij);
  return w.createElement(LO, {
    option: t,
    DefaultShape: zj,
    shapeProps: n,
    activeClassName: `recharts-active-bar`,
    inActiveClassName: `recharts-inactive-bar`,
  });
}
var Vj = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return (n, r) => {
      if (P(e)) return e;
      var i = P(n) || F(n);
      return i
        ? e(n, r)
        : (!i &&
            Fj(
              !1,
              `minPointSize callback function received a value with type of ${typeof n}. Currently only numbers or null/undefined are supported.`,
            ),
          t);
    };
  },
  Hj = (e, t, n) => n,
  Uj = z([nx, (e, t) => t], (e, t) =>
    e.filter((e) => e.type === `bar`).find((e) => e.id === t),
  ),
  Wj = z([Uj], (e) => e?.maxBarSize),
  Gj = (e, t, n, r) => r,
  Kj = z([G, nx, Mj, Nj, Hj], (e, t, n, r, i) =>
    t
      .filter((t) => (e === `horizontal` ? t.xAxisId === n : t.yAxisId === r))
      .filter((e) => e.isPanorama === i)
      .filter((e) => e.hide === !1)
      .filter((e) => e.type === `bar`),
  ),
  qj = (e, t, n) => {
    var r = G(e),
      i = Mj(e, t),
      a = Nj(e, t);
    if (i != null && a != null)
      return r === `horizontal` ? Dx(e, `yAxis`, a, n) : Dx(e, `xAxis`, i, n);
  },
  Jj = z(
    [
      Kj,
      yp,
      (e, t) => {
        var n = G(e),
          r = Mj(e, t),
          i = Nj(e, t);
        if (r != null && i != null)
          return n === `horizontal` ? zS(e, `xAxis`, r) : zS(e, `yAxis`, i);
      },
    ],
    Xk,
  ),
  Yj = (e, t, n) => {
    var r = Uj(e, t);
    if (r == null) return 0;
    var i = Mj(e, t),
      a = Nj(e, t);
    if (i == null || a == null) return 0;
    var o = G(e),
      s = gp(e),
      c = r.maxBarSize,
      l = F(c) ? s : c,
      u,
      d;
    return (
      o === `horizontal`
        ? ((u = WS(e, `xAxis`, i, n)), (d = US(e, `xAxis`, i, n)))
        : ((u = WS(e, `yAxis`, a, n)), (d = US(e, `yAxis`, a, n))),
      Vs(u, d, !0) ?? l ?? 0
    );
  },
  Xj = (e, t, n) => {
    var r = G(e),
      i = Mj(e, t),
      a = Nj(e, t);
    if (i != null && a != null) {
      var o, s;
      return (
        r === `horizontal`
          ? ((o = WS(e, `xAxis`, i, n)), (s = US(e, `xAxis`, i, n)))
          : ((o = WS(e, `yAxis`, a, n)), (s = US(e, `yAxis`, a, n))),
        Vs(o, s)
      );
    }
  },
  Zj = z(
    [
      W,
      uc,
      (e, t, n) => {
        var r = Mj(e, t);
        if (r != null) return WS(e, `xAxis`, r, n);
      },
      (e, t, n) => {
        var r = Nj(e, t);
        if (r != null) return WS(e, `yAxis`, r, n);
      },
      (e, t, n) => {
        var r = Mj(e, t);
        if (r != null) return US(e, `xAxis`, r, n);
      },
      (e, t, n) => {
        var r = Nj(e, t);
        if (r != null) return US(e, `yAxis`, r, n);
      },
      z([z([Jj, gp, _p, vp, Yj, Xj, Wj], rA), Uj], aA),
      G,
      Hf,
      Xj,
      z([qj, Uj], iA),
      Uj,
      Gj,
    ],
    (e, t, n, r, i, a, o, s, c, l, u, d, f) => {
      var p = c.chartData,
        m = c.dataStartIndex,
        h = c.dataEndIndex;
      if (
        !(
          d == null ||
          o == null ||
          t == null ||
          (s !== `horizontal` && s !== `vertical`) ||
          n == null ||
          r == null ||
          i == null ||
          a == null ||
          l == null
        )
      ) {
        var g = d.data,
          _ = g != null && g.length > 0 ? g : p?.slice(m, h + 1);
        if (_ != null)
          return zM({
            layout: s,
            barSettings: d,
            pos: o,
            parentViewBox: t,
            bandSize: l,
            xAxis: n,
            yAxis: r,
            xAxisTicks: i,
            yAxisTicks: a,
            stackedData: u,
            displayedData: _,
            offset: e,
            cells: f,
            dataStartIndex: m,
          });
      }
    },
  ),
  Qj = [`index`];
function $j() {
  return (
    ($j = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $j.apply(null, arguments)
  );
}
function eM(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = tM(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function tM(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var nM = (0, w.createContext)(void 0),
  rM = (e) => {
    var t = (0, w.useContext)(nM);
    if (t != null) return t.stackId;
    if (e != null) return Ns(e);
  },
  iM = (e, t) => `recharts-bar-stack-clip-path-${e}-${t}`,
  aM = (e) => {
    var t = (0, w.useContext)(nM);
    if (t != null) {
      var n = t.stackId;
      return `url(#${iM(n, e)})`;
    }
  },
  oM = (e) => {
    var t = e.index,
      n = eM(e, Qj),
      r = aM(t);
    return w.createElement(
      oe,
      $j({ className: `recharts-bar-stack-layer`, clipPath: r }, n),
    );
  },
  sM = [`onMouseEnter`, `onMouseLeave`, `onClick`],
  cM = [`value`, `background`, `tooltipPosition`],
  lM = [`id`],
  uM = [`onMouseEnter`, `onClick`, `onMouseLeave`];
function dM(e, t) {
  return gM(e) || hM(e, t) || pM(e, t) || fM();
}
function fM() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pM(e, t) {
  if (e) {
    if (typeof e == `string`) return mM(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? mM(e, t)
          : void 0
    );
  }
}
function mM(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function hM(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function gM(e) {
  if (Array.isArray(e)) return e;
}
function _M() {
  return (
    (_M = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    _M.apply(null, arguments)
  );
}
function vM(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? vM(Object(n), !0).forEach(function (t) {
          yM(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : vM(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function yM(e, t, n) {
  return (
    (t = bM(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function bM(e) {
  var t = xM(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function xM(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function SM(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = CM(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function CM(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var wM = (e) => {
    var t = e.dataKey,
      n = e.name,
      r = e.fill,
      i = e.legendType;
    return [
      {
        inactive: e.hide,
        dataKey: t,
        type: i,
        color: r,
        value: Us(n, t),
        payload: e,
      },
    ];
  },
  TM = w.memo((e) => {
    var t = e.dataKey,
      n = e.stroke,
      r = e.strokeWidth,
      i = e.fill,
      a = e.name,
      o = e.hide,
      s = e.unit,
      c = e.formatter,
      l = e.tooltipType,
      u = e.id,
      d = {
        dataDefinedOnItem: void 0,
        getPosition: Pe,
        settings: {
          stroke: n,
          strokeWidth: r,
          fill: i,
          dataKey: t,
          nameKey: void 0,
          name: Us(a, t),
          hide: o,
          type: l,
          color: i,
          unit: s,
          formatter: c,
          graphicalItemId: u,
        },
      };
    return w.createElement(VO, { tooltipEntrySettings: d });
  });
function EM(e) {
  var t = R(pw),
    n = e.data,
    r = e.dataKey,
    i = e.background,
    a = e.allOtherBarProps,
    o = a.onMouseEnter,
    s = a.onMouseLeave,
    c = a.onClick,
    l = SM(a, sM),
    u = RO(o, r, a.id),
    d = zO(s),
    f = BO(c, r, a.id);
  if (!i || n == null) return null;
  var p = k(i);
  return w.createElement(
    _T,
    { zIndex: oA(i, Ep.barBackground) },
    n.map((e, n) => {
      e.value;
      var a = e.background;
      e.tooltipPosition;
      var o = SM(e, cM);
      if (!a) return null;
      var s = u(e, e.originalDataIndex),
        c = d(e, e.originalDataIndex),
        m = f(e, e.originalDataIndex),
        h = Q(
          Q(
            Q(
              Q(
                Q(
                  { option: i, isActive: String(e.originalDataIndex) === t },
                  o,
                ),
                {},
                { fill: `#eee` },
                a,
              ),
              p,
            ),
            pn(l, e, n),
          ),
          {},
          {
            onMouseEnter: s,
            onMouseLeave: c,
            onClick: m,
            dataKey: r,
            index: n,
            className: `recharts-bar-background-rectangle`,
          },
        );
      return w.createElement(Bj, _M({ key: `background-bar-${n}` }, h));
    }),
  );
}
function DM(e) {
  var t = e.showLabels,
    n = e.children,
    r = e.rects?.map((e) => {
      var t = {
        x: e.x,
        y: e.y,
        width: e.width,
        lowerWidth: e.width,
        upperWidth: e.width,
        height: e.height,
      };
      return Q(
        Q({}, t),
        {},
        {
          value: e.value,
          payload: e.payload,
          parentViewBox: e.parentViewBox,
          viewBox: t,
          fill: e.fill,
        },
      );
    });
  return w.createElement(uO, { value: t ? r : void 0 }, n);
}
function OM(e) {
  var t = e.shape,
    n = e.activeBar,
    r = e.baseProps,
    i = e.entry,
    a = e.index,
    o = e.dataKey,
    s = R(pw),
    c = R(hw),
    l = n && String(i.originalDataIndex) === s && (c == null || o === c),
    u =
      s != null &&
      (String(i.originalDataIndex) !== s || (c != null && o !== c)),
    d = dM((0, w.useState)(!1), 2),
    f = d[0],
    p = d[1],
    m = dM((0, w.useState)(!1), 2),
    h = m[0],
    g = m[1];
  (0, w.useEffect)(() => {
    var e;
    return (
      l
        ? (p(!0),
          (e = requestAnimationFrame(() => {
            g(!0);
          })))
        : (g(!1), u && p(!1)),
      () => {
        cancelAnimationFrame(e);
      }
    );
  }, [l, u]);
  var _ = (0, w.useCallback)(() => {
      l || p(!1);
    }, [l]),
    v = l && h,
    y = l || f,
    b = l ? (n === !0 ? t : n) : t,
    x = w.createElement(
      Bj,
      _M({}, r, { name: String(r.name) }, i, {
        isActive: v,
        option: b,
        index: a,
        dataKey: o,
        animationElapsedTime: e.animationElapsedTime,
        isAnimating: e.isAnimating,
        isEntrance: e.isEntrance,
        onTransitionEnd: _,
      }),
    );
  return y
    ? w.createElement(
        _T,
        { zIndex: Ep.activeBar },
        w.createElement(oM, { index: i.originalDataIndex }, x),
      )
    : x;
}
function kM(e) {
  var t = e.shape,
    n = e.baseProps,
    r = e.entry,
    i = e.index,
    a = e.dataKey;
  return w.createElement(
    Bj,
    _M({}, n, { name: String(n.name) }, r, {
      isActive: !1,
      option: t,
      index: i,
      dataKey: a,
      animationElapsedTime: e.animationElapsedTime,
      isAnimating: e.isAnimating,
      isEntrance: e.isEntrance,
    }),
  );
}
function AM(e) {
  var t = e.data,
    n = e.props,
    r = e.animationElapsedTime,
    i = e.isAnimating,
    a = e.isEntrance,
    o = O(n) ?? {},
    s = o.id,
    c = SM(o, lM),
    l = n.shape,
    u = n.dataKey,
    d = n.activeBar,
    f = n.onMouseEnter,
    p = n.onClick,
    m = n.onMouseLeave,
    h = SM(n, uM),
    g = RO(f, u, s),
    _ = zO(m),
    v = BO(p, u, s);
  return t
    ? w.createElement(
        w.Fragment,
        null,
        t.map((e, t) =>
          w.createElement(
            oM,
            _M(
              {
                index: e.originalDataIndex,
                key: `rectangle-${e?.x}-${e?.y}-${e?.value}-${t}`,
                className: `recharts-bar-rectangle`,
              },
              pn(h, e, t),
              {
                onMouseEnter: g(e, e.originalDataIndex),
                onMouseLeave: _(e, e.originalDataIndex),
                onClick: v(e, e.originalDataIndex),
              },
            ),
            d
              ? w.createElement(OM, {
                  shape: l,
                  activeBar: d,
                  baseProps: c,
                  entry: e,
                  index: t,
                  dataKey: u,
                  animationElapsedTime: r,
                  isAnimating: i,
                  isEntrance: a,
                })
              : w.createElement(kM, {
                  shape: l,
                  baseProps: c,
                  entry: e,
                  index: t,
                  dataKey: u,
                  animationElapsedTime: r,
                  isAnimating: i,
                  isEntrance: a,
                }),
          ),
        ),
      )
    : null;
}
var jM = (e, t, n) =>
  e == null
    ? []
    : t === 1
      ? e.flatMap((e) => (e.status === `removed` ? [] : [e.next]))
      : e.flatMap((e) => {
          if (e.status === `removed`)
            return n === `horizontal`
              ? [
                  Q(
                    Q({}, e.prev),
                    {},
                    {
                      height: Ae(e.prev.height, 0, t),
                      y: Ae(e.prev.y, e.prev.y + e.prev.height, t),
                    },
                  ),
                ]
              : [Q(Q({}, e.prev), {}, { width: Ae(e.prev.width, 0, t) })];
          if (e.status === `matched`)
            return [
              Q(
                Q({}, e.next),
                {},
                {
                  x: Ae(e.prev.x, e.next.x, t),
                  y: Ae(e.prev.y, e.next.y, t),
                  width: Ae(e.prev.width, e.next.width, t),
                  height: Ae(e.prev.height, e.next.height, t),
                },
              ),
            ];
          var r = e.next;
          return n === `horizontal`
            ? [
                Q(
                  Q({}, r),
                  {},
                  {
                    height: Ae(0, r.height, t),
                    y: Ae(r.stackedBarStart, r.y, t),
                  },
                ),
              ]
            : [
                Q(
                  Q({}, r),
                  {},
                  {
                    width: Ae(0, r.width, t),
                    x: Ae(r.stackedBarStart, r.x, t),
                  },
                ),
              ];
        });
function MM(e) {
  var t = e.props,
    n = e.previousRectanglesRef,
    r = t.data,
    i = t.isAnimationActive,
    a = t.animationBegin,
    o = t.animationDuration,
    s = t.animationEasing,
    c = t.animationInterpolateFn,
    l = t.layout,
    u = uk(t.onAnimationStart, t.onAnimationEnd),
    d = u.isAnimating,
    f = u.handleAnimationStart,
    p = u.handleAnimationEnd;
  return w.createElement(
    DM,
    { showLabels: !d, rects: r },
    w.createElement(
      dk,
      {
        animationInput: r,
        animationIdPrefix: `recharts-bar-`,
        items: r,
        previousItemsRef: n,
        isAnimationActive: i,
        animationBegin: a,
        animationDuration: o,
        animationEasing: s,
        onAnimationStart: f,
        onAnimationEnd: p,
        animationInterpolateFn: c,
        animationMatchBy: t.animationMatchBy,
        layout: l,
      },
      (e, n, r) =>
        w.createElement(
          oe,
          null,
          w.createElement(AM, {
            props: t,
            data: e,
            animationElapsedTime: n,
            isAnimating: d || n < 1,
            isEntrance: r,
          }),
        ),
    ),
    w.createElement(hO, { label: t.label }),
    t.children,
  );
}
function NM(e) {
  var t = (0, w.useRef)(null);
  return w.createElement(MM, { previousRectanglesRef: t, props: e });
}
var PM = 0,
  FM = (e, t) => {
    var n = Array.isArray(e.value) ? e.value[1] : e.value;
    return { x: e.x, y: e.y, value: n, errorVal: U(e, t) };
  },
  IM = class extends w.PureComponent {
    render() {
      var e = this.props,
        t = e.hide,
        n = e.data,
        r = e.dataKey,
        i = e.className,
        a = e.xAxisId,
        o = e.yAxisId,
        s = e.needClip,
        c = e.background,
        l = e.id;
      if (t || n == null) return null;
      var u = x(`recharts-bar`, i),
        d = l;
      return w.createElement(
        oe,
        { className: u, id: l },
        s &&
          w.createElement(
            `defs`,
            null,
            w.createElement(jj, { clipPathId: d, xAxisId: a, yAxisId: o }),
          ),
        w.createElement(
          oe,
          {
            className: `recharts-bar-rectangles`,
            clipPath: s ? `url(#clipPath-${d})` : void 0,
          },
          w.createElement(EM, {
            data: n,
            dataKey: r,
            background: c,
            allOtherBarProps: this.props,
          }),
          w.createElement(NM, this.props),
        ),
      );
    }
  },
  LM = {
    activeBar: !1,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: `ease`,
    animationInterpolateFn: jM,
    animationMatchBy: XO,
    background: !1,
    hide: !1,
    isAnimationActive: `auto`,
    label: !1,
    legendType: `rect`,
    minPointSize: PM,
    shape: zj,
    xAxisId: 0,
    yAxisId: 0,
    zIndex: Ep.bar,
  };
function RM(e) {
  var t = e.xAxisId,
    n = e.yAxisId,
    r = e.hide,
    i = e.legendType,
    a = e.minPointSize,
    o = e.activeBar,
    s = e.animationBegin,
    c = e.animationDuration,
    l = e.animationEasing,
    u = e.isAnimationActive,
    d = Aj(t, n).needClip,
    f = $c(),
    p = fc(),
    m = EO(e.children, _E),
    h = R((t) => Zj(t, e.id, p, m));
  if (f !== `vertical` && f !== `horizontal`) return null;
  var g,
    _ = h?.[0];
  return (
    (g =
      _ == null || _.height == null || _.width == null
        ? 0
        : f === `vertical`
          ? _.height / 2
          : _.width / 2),
    w.createElement(
      kj,
      {
        xAxisId: t,
        yAxisId: n,
        data: h,
        dataPointFormatter: FM,
        errorBarOffset: g,
      },
      w.createElement(
        IM,
        _M({}, e, {
          layout: f,
          needClip: d,
          data: h,
          xAxisId: t,
          yAxisId: n,
          hide: r,
          legendType: i,
          minPointSize: a,
          activeBar: o,
          animationBegin: s,
          animationDuration: c,
          animationEasing: l,
          isAnimationActive: u,
        }),
      ),
    )
  );
}
function zM(e) {
  var t = e.layout,
    n = e.barSettings,
    r = n.dataKey,
    i = n.minPointSize,
    a = n.hasCustomShape,
    o = e.pos,
    s = e.bandSize,
    c = e.xAxis,
    l = e.yAxis,
    u = e.xAxisTicks,
    d = e.yAxisTicks,
    f = e.stackedData,
    p = e.displayedData,
    m = e.offset,
    h = e.cells,
    g = e.parentViewBox,
    _ = e.dataStartIndex,
    v = t === `horizontal` ? l : c,
    y = f ? v.scale.domain() : null,
    b = Fs({ numericAxis: v }),
    x = v.scale.map(b);
  return p
    .map((e, n) => {
      var p, v, S, C, w, T;
      if (f) {
        var E = f[n + _];
        if (E == null) return null;
        p = As(E, y);
      } else ((p = U(e, r)), Array.isArray(p) || (p = [b, p]));
      var D = Vj(i, PM)(p[1], n);
      if (t === `horizontal`) {
        var O = l.scale.map(p[0]),
          k = l.scale.map(p[1]);
        if (O == null || k == null) return null;
        ((v = Ps({
          axis: c,
          ticks: u,
          bandSize: s,
          offset: o.offset,
          entry: e,
          index: n,
        })),
          (S = k ?? O ?? void 0),
          (C = o.size));
        var A = O - k;
        if (
          ((w = Ce(A) ? 0 : A),
          (T = { x: v, y: m.top, width: C, height: m.height }),
          Math.abs(D) > 0 && Math.abs(w) < Math.abs(D))
        ) {
          var j = Se(w || D) * (Math.abs(D) - Math.abs(w));
          ((S -= j), (w += j));
        }
      } else {
        var M = c.scale.map(p[0]),
          N = c.scale.map(p[1]);
        if (M == null || N == null) return null;
        if (
          ((v = M),
          (S = Ps({
            axis: l,
            ticks: d,
            bandSize: s,
            offset: o.offset,
            entry: e,
            index: n,
          })),
          (C = N - M),
          (w = o.size),
          (T = { x: m.left, y: S, width: m.width, height: w }),
          Math.abs(D) > 0 && Math.abs(C) < Math.abs(D))
        ) {
          var ee = Se(C || D) * (Math.abs(D) - Math.abs(C));
          C += ee;
        }
      }
      return v == null ||
        S == null ||
        C == null ||
        w == null ||
        (!a && (C === 0 || w === 0))
        ? null
        : Q(
            Q({}, e),
            {},
            {
              stackedBarStart: x,
              x: v,
              y: S,
              width: C,
              height: w,
              value: f ? p : p[1],
              payload: e,
              background: T,
              tooltipPosition: { x: v + C / 2, y: S + w / 2 },
              parentViewBox: g,
              originalDataIndex: n,
            },
            h && h[n] && h[n].props,
          );
    })
    .filter(Boolean);
}
function BM(e) {
  var t = yn(e, LM),
    n = rM(t.stackId),
    r = fc();
  return w.createElement(xk, { id: t.id, type: `bar` }, (e) =>
    w.createElement(
      w.Fragment,
      null,
      w.createElement(HO, { legendPayload: wM(t) }),
      w.createElement(TM, {
        dataKey: t.dataKey,
        stroke: t.stroke,
        strokeWidth: t.strokeWidth,
        fill: t.fill,
        name: t.name,
        hide: t.hide,
        unit: t.unit,
        formatter: t.formatter,
        tooltipType: t.tooltipType,
        id: e,
      }),
      w.createElement(Ok, {
        type: `bar`,
        id: e,
        data: void 0,
        xAxisId: t.xAxisId,
        yAxisId: t.yAxisId,
        zAxisId: 0,
        dataKey: t.dataKey,
        stackId: n,
        hide: t.hide,
        barSize: t.barSize,
        minPointSize: t.minPointSize,
        maxBarSize: t.maxBarSize,
        isPanorama: r,
        hasCustomShape: t.shape != null && t.shape !== zj,
      }),
      w.createElement(
        _T,
        { zIndex: t.zIndex },
        w.createElement(RM, _M({}, t, { id: e })),
      ),
    ),
  );
}
var VM = w.memo(BM, Dl);
VM.displayName = `Bar`;
var HM = [`domain`, `range`],
  UM = [`domain`, `range`];
function WM(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = GM(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function GM(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function KM(e, t) {
  return e === t
    ? !0
    : Array.isArray(e) && e.length === 2 && Array.isArray(t) && t.length === 2
      ? e[0] === t[0] && e[1] === t[1]
      : !1;
}
function qM(e, t) {
  if (e === t) return !0;
  var n = e.domain,
    r = e.range,
    i = WM(e, HM),
    a = t.domain,
    o = t.range,
    s = WM(t, UM);
  return !KM(n, a) || !KM(r, o) ? !1 : Dl(i, s);
}
var JM = [`type`],
  YM = [`dangerouslySetInnerHTML`, `ticks`, `scale`],
  XM = [`id`, `scale`];
function ZM() {
  return (
    (ZM = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ZM.apply(null, arguments)
  );
}
function QM(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function $M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? QM(Object(n), !0).forEach(function (t) {
          eN(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : QM(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function eN(e, t, n) {
  return (
    (t = tN(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function tN(e) {
  var t = nN(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function nN(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function rN(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = iN(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function iN(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function aN(e) {
  var t = L(),
    n = (0, w.useRef)(null),
    r = el(),
    i = e.type,
    a = rN(e, JM),
    o = Ap(r, `xAxis`, i),
    s = (0, w.useMemo)(() => {
      if (o != null) return $M($M({}, a), {}, { type: o });
    }, [a, o]);
  return (
    (0, w.useLayoutEffect)(() => {
      s != null &&
        (n.current === null
          ? t(Ik(s))
          : n.current !== s && t(Lk({ prev: n.current, next: s })),
        (n.current = s));
    }, [s, t]),
    (0, w.useLayoutEffect)(
      () => () => {
        n.current &&= (t(Rk(n.current)), null);
      },
      [t],
    ),
    null
  );
}
var oN = (e) => {
    var t = e.xAxisId,
      n = e.className,
      r = e.height,
      i = e.label,
      a = (0, w.useRef)(null),
      o = (0, w.useRef)(null),
      s = R(uc),
      c = fc(),
      l = L(),
      u = `xAxis`,
      d = R((e) => HS(e, u, t, c)),
      f = R((e) => MS(e, t)),
      p = R((e) => LS(e, t)),
      m = R((e) => Wb(e, t));
    if (
      ((0, w.useLayoutEffect)(() => {
        if (
          !(
            r !== `auto` ||
            !f ||
            qD(i) ||
            (0, w.isValidElement)(i) ||
            m == null
          )
        ) {
          var e = a.current;
          if (e) {
            var n = e.getCalculatedHeight();
            Math.round(f.height) !== Math.round(n) &&
              l(zk({ id: t, height: n }));
          }
        }
      }, [d, f, l, i, t, r, m]),
      f == null || p == null || m == null)
    )
      return null;
    (e.dangerouslySetInnerHTML, e.ticks, e.scale);
    var h = rN(e, YM);
    (m.id, m.scale);
    var g = rN(m, XM);
    return w.createElement(
      xj,
      ZM({}, h, g, {
        ref: a,
        labelRef: o,
        x: p.x,
        y: p.y,
        width: f.width,
        height: f.height,
        className: x(`recharts-${u} ${u}`, n),
        viewBox: s,
        ticks: d,
        axisType: u,
        axisId: t,
      }),
    );
  },
  sN = {
    allowDataOverflow: Y.allowDataOverflow,
    allowDecimals: Y.allowDecimals,
    allowDuplicatedCategory: Y.allowDuplicatedCategory,
    angle: Y.angle,
    axisLine: fj.axisLine,
    height: Y.height,
    hide: !1,
    includeHidden: Y.includeHidden,
    interval: Y.interval,
    label: !1,
    minTickGap: Y.minTickGap,
    mirror: Y.mirror,
    orientation: Y.orientation,
    padding: Y.padding,
    reversed: Y.reversed,
    scale: Y.scale,
    tick: Y.tick,
    tickCount: Y.tickCount,
    tickLine: fj.tickLine,
    tickSize: fj.tickSize,
    type: Y.type,
    niceTicks: Y.niceTicks,
    xAxisId: 0,
  },
  cN = w.memo((e) => {
    var t = yn(e, sN);
    return w.createElement(
      w.Fragment,
      null,
      w.createElement(aN, {
        allowDataOverflow: t.allowDataOverflow,
        allowDecimals: t.allowDecimals,
        allowDuplicatedCategory: t.allowDuplicatedCategory,
        angle: t.angle,
        dataKey: t.dataKey,
        domain: t.domain,
        height: t.height,
        hide: t.hide,
        id: t.xAxisId,
        includeHidden: t.includeHidden,
        interval: t.interval,
        minTickGap: t.minTickGap,
        mirror: t.mirror,
        name: t.name,
        orientation: t.orientation,
        padding: t.padding,
        reversed: t.reversed,
        scale: t.scale,
        tick: t.tick,
        tickCount: t.tickCount,
        tickFormatter: t.tickFormatter,
        ticks: t.ticks,
        type: t.type,
        unit: t.unit,
        niceTicks: t.niceTicks,
      }),
      w.createElement(oN, t),
    );
  }, qM);
cN.displayName = `XAxis`;
var lN = z([(e, t) => t, G, Kp, tm, ow, cw, Bw, W], Qw);
function uN(e) {
  return (
    `getBBox` in e.currentTarget && typeof e.currentTarget.getBBox == `function`
  );
}
function dN(e) {
  var t = e.currentTarget.getBoundingClientRect(),
    n,
    r;
  if (uN(e)) {
    var i = e.currentTarget.getBBox();
    ((n = i.width > 0 ? t.width / i.width : 1),
      (r = i.height > 0 ? t.height / i.height : 1));
  } else {
    var a = e.currentTarget;
    ((n = a.offsetWidth > 0 ? t.width / a.offsetWidth : 1),
      (r = a.offsetHeight > 0 ? t.height / a.offsetHeight : 1));
  }
  var o = (e, i) => ({
    relativeX: Math.round((e - t.left) / n),
    relativeY: Math.round((i - t.top) / r),
  });
  return `touches` in e
    ? Array.from(e.touches).map((e) => o(e.clientX, e.clientY))
    : o(e.clientX, e.clientY);
}
var fN = io(`mouseClick`),
  pN = fs();
pN.startListening({
  actionCreator: fN,
  effect: (e, t) => {
    var n = e.payload,
      r = lN(t.getState(), dN(n));
    r?.activeIndex != null &&
      t.dispatch(
        dC({
          activeIndex: r.activeIndex,
          activeDataKey: void 0,
          activeCoordinate: r.activeCoordinate,
        }),
      );
  },
});
var mN = io(`mouseMove`),
  hN = fs(),
  gN = null,
  _N = null,
  vN = null;
hN.startListening({
  actionCreator: mN,
  effect: (e, t) => {
    var n = e.payload,
      r = t.getState().eventSettings,
      i = r.throttleDelay,
      a = r.throttledEvents,
      o = a === `all` || a?.includes(`mousemove`);
    (gN !== null && (cancelAnimationFrame(gN), (gN = null)),
      _N === null ||
        (typeof i == `number` && o) ||
        (clearTimeout(_N), (_N = null)),
      (vN = dN(n)));
    var s = () => {
      var e = t.getState(),
        n = YS(e, e.tooltip.settings.shared);
      if (!vN) ((gN = null), (_N = null));
      else {
        if (n === `axis`) {
          var r = lN(e, vN);
          r?.activeIndex == null
            ? t.dispatch(cC())
            : t.dispatch(
                uC({
                  activeIndex: r.activeIndex,
                  activeDataKey: void 0,
                  activeCoordinate: r.activeCoordinate,
                }),
              );
        }
        ((gN = null), (_N = null));
      }
    };
    o
      ? i === `raf`
        ? (gN = requestAnimationFrame(s))
        : typeof i == `number` && _N === null && (_N = setTimeout(s, i))
      : s();
  },
});
function yN(e, t) {
  return t instanceof HTMLElement
    ? `HTMLElement <${t.tagName} class="${t.className}">`
    : t === window
      ? `global.window`
      : e === `children` && typeof t == `object` && t
        ? `<<CHILDREN>>`
        : t;
}
var bN = {
    accessibilityLayer: !0,
    barCategoryGap: `10%`,
    barGap: 4,
    barSize: void 0,
    className: void 0,
    maxBarSize: void 0,
    stackOffset: `none`,
    syncId: void 0,
    syncMethod: `index`,
    baseValue: void 0,
    reverseStackOrder: !1,
  },
  xN = Eo({
    name: `rootProps`,
    initialState: bN,
    reducers: {
      updateOptions: (e, t) => {
        ((e.accessibilityLayer = t.payload.accessibilityLayer),
          (e.barCategoryGap = t.payload.barCategoryGap),
          (e.barGap = t.payload.barGap ?? bN.barGap),
          (e.barSize = t.payload.barSize),
          (e.maxBarSize = t.payload.maxBarSize),
          (e.stackOffset = t.payload.stackOffset),
          (e.syncId = t.payload.syncId),
          (e.syncMethod = t.payload.syncMethod),
          (e.className = t.payload.className),
          (e.baseValue = t.payload.baseValue),
          (e.reverseStackOrder = t.payload.reverseStackOrder));
      },
    },
  }),
  SN = xN.reducer,
  CN = xN.actions.updateOptions,
  wN = Eo({
    name: `polarOptions`,
    initialState: null,
    reducers: {
      updatePolarOptions: (e, t) =>
        e === null
          ? t.payload
          : ((e.startAngle = t.payload.startAngle),
            (e.endAngle = t.payload.endAngle),
            (e.cx = t.payload.cx),
            (e.cy = t.payload.cy),
            (e.innerRadius = t.payload.innerRadius),
            (e.outerRadius = t.payload.outerRadius),
            e),
    },
  });
wN.actions.updatePolarOptions;
var TN = wN.reducer,
  EN = io(`keyDown`),
  DN = io(`focus`),
  ON = io(`blur`),
  kN = fs(),
  AN = null,
  jN = null,
  MN = null;
(kN.startListening({
  actionCreator: EN,
  effect: (e, t) => {
    ((MN = e.payload), AN !== null && (cancelAnimationFrame(AN), (AN = null)));
    var n = t.getState().eventSettings,
      r = n.throttleDelay,
      i = n.throttledEvents,
      a = i === `all` || i.includes(`keydown`);
    jN === null ||
      (typeof r == `number` && a) ||
      (clearTimeout(jN), (jN = null));
    var o = () => {
      try {
        var e = t.getState();
        if (e.rootProps.accessibilityLayer === !1) return;
        var n = e.tooltip.keyboardInteraction,
          r = MN;
        if (r !== `ArrowRight` && r !== `ArrowLeft` && r !== `Enter`) return;
        var i = EC(n, JC(e), wx(e), rw(e)),
          a = i == null ? -1 : Number(i),
          o = !Number.isFinite(a) || a < 0,
          s = cw(e),
          c = JC(e),
          l = YS(e, e.tooltip.settings.shared);
        if (r === `Enter`) {
          if (o) return;
          var u = Gw(e, l, `hover`, String(n.index));
          t.dispatch(
            pC({
              active: !n.active,
              activeIndex: n.index,
              activeCoordinate: u,
            }),
          );
          return;
        }
        var d = GS(e) === `left-to-right` ? 1 : -1,
          f = r === `ArrowRight` ? 1 : -1,
          p;
        if (o) {
          var m = wx(e),
            h = rw(e),
            g = f * d,
            _ = (e) => ({
              active: !1,
              index: String(e),
              dataKey: void 0,
              graphicalItemId: void 0,
              coordinate: void 0,
            });
          if (((p = -1), g > 0)) {
            for (var v = 0; v < c.length; v++)
              if (EC(_(v), c, m, h) != null) {
                p = v;
                break;
              }
          } else
            for (var y = c.length - 1; y >= 0; y--)
              if (EC(_(y), c, m, h) != null) {
                p = y;
                break;
              }
          if (p < 0) return;
        } else {
          p = a + f * d;
          var b = s?.length || c.length;
          if (b === 0 || p >= b || p < 0) return;
        }
        var x = Gw(e, l, `hover`, String(p));
        t.dispatch(
          pC({ active: !0, activeIndex: p.toString(), activeCoordinate: x }),
        );
      } finally {
        ((AN = null), (jN = null));
      }
    };
    a
      ? r === `raf`
        ? (AN = requestAnimationFrame(o))
        : typeof r == `number` &&
          jN === null &&
          (o(),
          (MN = null),
          (jN = setTimeout(() => {
            MN ? o() : ((jN = null), (AN = null));
          }, r)))
      : o();
  },
}),
  kN.startListening({
    actionCreator: DN,
    effect: (e, t) => {
      var n = t.getState();
      if (n.rootProps.accessibilityLayer !== !1) {
        var r = n.tooltip.keyboardInteraction;
        if (!r.active && r.index == null) {
          var i = `0`,
            a = Gw(n, YS(n, n.tooltip.settings.shared), `hover`, String(i));
          t.dispatch(pC({ active: !0, activeIndex: i, activeCoordinate: a }));
        }
      }
    },
  }),
  kN.startListening({
    actionCreator: ON,
    effect: (e, t) => {
      var n = t.getState();
      if (n.rootProps.accessibilityLayer !== !1) {
        var r = n.tooltip.keyboardInteraction;
        r.active &&
          t.dispatch(
            pC({
              active: !1,
              activeIndex: r.index,
              activeCoordinate: r.coordinate,
            }),
          );
      }
    },
  }));
function NN(e) {
  e.persist();
  var t = e.currentTarget;
  return new Proxy(e, {
    get: (e, n) => {
      if (n === `currentTarget`) return t;
      var r = Reflect.get(e, n);
      return typeof r == `function` ? r.bind(e) : r;
    },
  });
}
var PN = io(`externalEvent`),
  FN = fs(),
  IN = new Map(),
  LN = new Map(),
  RN = new Map();
FN.startListening({
  actionCreator: PN,
  effect: (e, t) => {
    var n = e.payload,
      r = n.handler,
      i = n.reactEvent;
    if (r != null) {
      var a = i.type,
        o = NN(i);
      RN.set(a, { handler: r, reactEvent: o });
      var s = IN.get(a);
      s !== void 0 && (cancelAnimationFrame(s), IN.delete(a));
      var c = t.getState().eventSettings,
        l = c.throttleDelay,
        u = c.throttledEvents,
        d = u === `all` || u?.includes(a),
        f = LN.get(a);
      f === void 0 ||
        (typeof l == `number` && d) ||
        (clearTimeout(f), LN.delete(a));
      var p = () => {
        var e = RN.get(a);
        try {
          if (!e) return;
          var n = e.handler,
            r = e.reactEvent,
            i = t.getState(),
            o = {
              activeCoordinate: vw(i),
              activeDataKey: hw(i),
              activeIndex: pw(i),
              activeLabel: mw(i),
              activeTooltipIndex: pw(i),
              isTooltipActive: yw(i),
            };
          n && n(o, r);
        } finally {
          (IN.delete(a), LN.delete(a), RN.delete(a));
        }
      };
      if (!d) p();
      else if (l === `raf`) {
        var m = requestAnimationFrame(p);
        IN.set(a, m);
      } else if (typeof l == `number`) {
        if (!LN.has(a)) {
          p();
          var h = setTimeout(p, l);
          LN.set(a, h);
        }
      } else p();
    }
  },
});
var zN = z(
    [z([AC], (e) => e.tooltipItemPayloads), (e, t) => t, (e, t, n) => n],
    (e, t, n) => {
      if (t != null) {
        var r = e.find((e) => e.settings.graphicalItemId === n);
        if (r != null) {
          var i = r.getPosition;
          if (i != null) return i(t);
        }
      }
    },
  ),
  BN = io(`touchMove`),
  VN = fs(),
  HN = null,
  UN = null,
  WN = null,
  GN = null;
VN.startListening({
  actionCreator: BN,
  effect: (e, t) => {
    var n = e.payload;
    if (n.touches != null && n.touches.length !== 0) {
      GN = NN(n);
      var r = t.getState().eventSettings,
        i = r.throttleDelay,
        a = r.throttledEvents,
        o = a === `all` || a.includes(`touchmove`);
      (HN !== null && (cancelAnimationFrame(HN), (HN = null)),
        UN === null ||
          (typeof i == `number` && o) ||
          (clearTimeout(UN), (UN = null)),
        (WN = Array.from(n.touches).map((e) =>
          dN({
            clientX: e.clientX,
            clientY: e.clientY,
            currentTarget: n.currentTarget,
          }),
        )));
      var s = () => {
        if (GN != null) {
          var e = t.getState(),
            n = YS(e, e.tooltip.settings.shared);
          if (n === `axis`) {
            var r = WN?.[0];
            if (r == null) {
              ((HN = null), (UN = null));
              return;
            }
            var i = lN(e, r);
            i?.activeIndex != null &&
              t.dispatch(
                uC({
                  activeIndex: i.activeIndex,
                  activeDataKey: void 0,
                  activeCoordinate: i.activeCoordinate,
                }),
              );
          } else if (n === `item`) {
            var a = GN.touches[0];
            if (document.elementFromPoint == null || a == null) return;
            var o = document.elementFromPoint(a.clientX, a.clientY);
            if (!o || !o.getAttribute) return;
            var s = o.getAttribute(Qs),
              c = o.getAttribute(`data-recharts-item-id`) ?? void 0,
              l = WC(e).find((e) => e.id === c);
            if (s == null || l == null || c == null) return;
            var u = l.dataKey,
              d = zN(e, s, c);
            t.dispatch(
              oC({
                activeDataKey: u,
                activeIndex: s,
                activeCoordinate: d,
                activeGraphicalItemId: c,
              }),
            );
          }
          ((HN = null), (UN = null));
        }
      };
      o
        ? i === `raf`
          ? (HN = requestAnimationFrame(s))
          : typeof i == `number` &&
            UN === null &&
            (s(),
            (GN = null),
            (UN = setTimeout(() => {
              GN ? s() : ((UN = null), (HN = null));
            }, i)))
        : s();
    }
  },
});
var KN = {
    throttleDelay: `raf`,
    throttledEvents: [
      `mousemove`,
      `touchmove`,
      `pointermove`,
      `scroll`,
      `wheel`,
    ],
  },
  qN = Eo({
    name: `eventSettings`,
    initialState: KN,
    reducers: {
      setEventSettings: (e, t) => {
        (t.payload.throttleDelay != null &&
          (e.throttleDelay = t.payload.throttleDelay),
          t.payload.throttledEvents != null &&
            (e.throttledEvents = B(t.payload.throttledEvents)));
      },
    },
  }),
  JN = qN.actions.setEventSettings,
  YN = qN.reducer,
  XN = Oi({
    brush: uA,
    cartesianAxis: Bk,
    chartData: HT,
    errorBars: wj,
    eventSettings: YN,
    graphicalItems: Dk,
    layout: bs,
    legend: ll,
    options: FT,
    polarAxis: vO,
    polarOptions: TN,
    referenceElements: hA,
    renderedTicks: ZA,
    rootProps: SN,
    tooltip: mC,
    zIndex: hT,
  }),
  ZN = function (e) {
    var t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : `Chart`;
    return go({
      reducer: XN,
      preloadedState: e,
      middleware: (e) =>
        e({
          serializableCheck: !1,
          immutableCheck: ![`commonjs`, `es6`, `production`].includes(`es6`),
        }).concat([
          pN.middleware,
          hN.middleware,
          kN.middleware,
          FN.middleware,
          VN.middleware,
        ]),
      enhancers: (e) => {
        var t = e;
        return (
          typeof e == `function` && (t = e()),
          t.concat(mo({ type: `raf` }))
        );
      },
      devTools: Xl.devToolsEnabled && {
        serialize: { replacer: yN },
        name: `recharts-${t}`,
      },
    });
  };
function QN(e) {
  var t = e.preloadedState,
    n = e.children,
    r = e.reduxStoreName,
    i = fc(),
    a = (0, w.useRef)(null);
  if (i) return n;
  a.current ??= ZN(t, r);
  var o = Pr;
  return w.createElement(wl, { context: o, store: a.current }, n);
}
function $N(e) {
  var t = e.layout,
    n = e.margin,
    r = L(),
    i = fc();
  return (
    (0, w.useEffect)(() => {
      i || (r(_s(t)), r(gs(n)));
    }, [r, i, t, n]),
    null
  );
}
var eP = (0, w.memo)($N, Dl);
function tP(e) {
  var t = L();
  return (
    (0, w.useEffect)(() => {
      t(CN(e));
    }, [t, e]),
    null
  );
}
var nP = (0, w.memo)((e) => {
  var t = L();
  return (
    (0, w.useEffect)(() => {
      t(JN(e));
    }, [t, e]),
    null
  );
}, Dl);
function rP(e) {
  var t = e.zIndex,
    n = e.isPanorama,
    r = (0, w.useRef)(null),
    i = L();
  return (
    (0, w.useLayoutEffect)(
      () => (
        r.current && i(pT({ zIndex: t, element: r.current, isPanorama: n })),
        () => {
          i(mT({ zIndex: t, isPanorama: n }));
        }
      ),
      [i, t, n],
    ),
    w.createElement(`g`, {
      tabIndex: -1,
      ref: r,
      className: `recharts-zIndex-layer_${t}`,
    })
  );
}
function iP(e) {
  var t = e.children,
    n = e.isPanorama,
    r = R(eT);
  if (!r || r.length === 0) return t;
  var i = r.filter((e) => e < 0),
    a = r.filter((e) => e > 0);
  return w.createElement(
    w.Fragment,
    null,
    i.map((e) => w.createElement(rP, { key: e, zIndex: e, isPanorama: n })),
    t,
    a.map((e) => w.createElement(rP, { key: e, zIndex: e, isPanorama: n })),
  );
}
var aP = [`children`];
function oP(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = sP(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function sP(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function cP() {
  return (
    (cP = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    cP.apply(null, arguments)
  );
}
var lP = { width: `100%`, height: `100%`, display: `block` },
  uP = (0, w.forwardRef)((e, t) => {
    var n = Zc(),
      r = Qc(),
      i = vu();
    if (!Ss(n) || !Ss(r)) return null;
    var a = e.children,
      o = e.otherAttributes,
      s = e.title,
      c = e.desc,
      l,
      u;
    return (
      o != null &&
        ((l = typeof o.tabIndex == `number` ? o.tabIndex : i ? 0 : void 0),
        (u = typeof o.role == `string` ? o.role : i ? `application` : void 0)),
      w.createElement(
        te,
        cP({}, o, {
          title: s,
          desc: c,
          role: u,
          tabIndex: l,
          width: n,
          height: r,
          style: lP,
          ref: t,
        }),
        a,
      )
    );
  }),
  dP = (e) => {
    var t = e.children,
      n = R(mc);
    if (!n) return null;
    var r = n.width,
      i = n.height,
      a = n.y,
      o = n.x;
    return w.createElement(te, { width: r, height: i, x: o, y: a }, t);
  },
  fP = (0, w.forwardRef)((e, t) => {
    var n = e.children,
      r = oP(e, aP);
    return fc()
      ? w.createElement(dP, null, w.createElement(iP, { isPanorama: !0 }, n))
      : w.createElement(
          uP,
          cP({ ref: t }, r),
          w.createElement(iP, { isPanorama: !1 }, n),
        );
  });
function pP(e, t) {
  return vP(e) || _P(e, t) || hP(e, t) || mP();
}
function mP() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hP(e, t) {
  if (e) {
    if (typeof e == `string`) return gP(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? gP(e, t)
          : void 0
    );
  }
}
function gP(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function _P(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function vP(e) {
  if (Array.isArray(e)) return e;
}
function yP() {
  var e = L(),
    t = pP((0, w.useState)(null), 2),
    n = t[0],
    r = t[1],
    i = R(Js);
  return (
    (0, w.useEffect)(() => {
      if (n != null) {
        var t = n.getBoundingClientRect().width / n.offsetWidth;
        H(t) && t !== i && e(ys(t));
      }
    }, [n, e, i]),
    r
  );
}
function bP(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function xP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? bP(Object(n), !0).forEach(function (t) {
          SP(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : bP(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function SP(e, t, n) {
  return (
    (t = CP(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function CP(e) {
  var t = wP(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function wP(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function TP() {
  return (
    (TP = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    TP.apply(null, arguments)
  );
}
function EP(e, t) {
  return jP(e) || AP(e, t) || OP(e, t) || DP();
}
function DP() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function OP(e, t) {
  if (e) {
    if (typeof e == `string`) return kP(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? kP(e, t)
          : void 0
    );
  }
}
function kP(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function AP(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function jP(e) {
  if (Array.isArray(e)) return e;
}
var MP = () => ($T(), null);
function NP(e) {
  if (typeof e == `number`) return e;
  if (typeof e == `string`) {
    var t = parseFloat(e);
    if (!Number.isNaN(t)) return t;
  }
  return 0;
}
var PP = (0, w.forwardRef)((e, t) => {
    var n = (0, w.useRef)(null),
      r = EP(
        (0, w.useState)({
          containerWidth: NP(e.style?.width),
          containerHeight: NP(e.style?.height),
        }),
        2,
      ),
      i = r[0],
      a = r[1],
      o = (0, w.useCallback)((e, t) => {
        a((n) => {
          var r = Math.round(e),
            i = Math.round(t);
          return n.containerWidth === r && n.containerHeight === i
            ? n
            : { containerWidth: r, containerHeight: i };
        });
      }, []),
      s = (0, w.useCallback)(
        (e) => {
          if (
            (typeof t == `function` && t(e),
            n.current != null && (n.current.disconnect(), (n.current = null)),
            e != null && typeof ResizeObserver < `u`)
          ) {
            var r = e.getBoundingClientRect(),
              i = r.width,
              a = r.height;
            o(i, a);
            var s = new ResizeObserver((e) => {
              var t = e[0];
              if (t != null) {
                var n = t.contentRect,
                  r = n.width,
                  i = n.height;
                o(r, i);
              }
            });
            (s.observe(e), (n.current = s));
          }
        },
        [t, o],
      );
    return (
      (0, w.useEffect)(
        () => () => {
          n.current?.disconnect();
        },
        [o],
      ),
      w.createElement(
        w.Fragment,
        null,
        w.createElement(rl, {
          width: i.containerWidth,
          height: i.containerHeight,
        }),
        w.createElement(`div`, TP({ ref: s }, e)),
      )
    );
  }),
  FP = (0, w.forwardRef)((e, t) => {
    var n = e.width,
      r = e.height,
      i = EP(
        (0, w.useState)({ containerWidth: NP(n), containerHeight: NP(r) }),
        2,
      ),
      a = i[0],
      o = i[1],
      s = (0, w.useCallback)((e, t) => {
        o((n) => {
          var r = Math.round(e),
            i = Math.round(t);
          return n.containerWidth === r && n.containerHeight === i
            ? n
            : { containerWidth: r, containerHeight: i };
        });
      }, []),
      c = (0, w.useCallback)(
        (e) => {
          if ((typeof t == `function` && t(e), e != null)) {
            var n = e.getBoundingClientRect(),
              r = n.width,
              i = n.height;
            s(r, i);
          }
        },
        [t, s],
      );
    return w.createElement(
      w.Fragment,
      null,
      w.createElement(rl, {
        width: a.containerWidth,
        height: a.containerHeight,
      }),
      w.createElement(`div`, TP({ ref: c }, e)),
    );
  }),
  IP = (0, w.forwardRef)((e, t) => {
    var n = e.width,
      r = e.height;
    return w.createElement(
      w.Fragment,
      null,
      w.createElement(rl, { width: n, height: r }),
      w.createElement(`div`, TP({ ref: t }, e)),
    );
  }),
  LP = (0, w.forwardRef)((e, t) => {
    var n = e.width,
      r = e.height;
    return typeof n == `string` || typeof r == `string`
      ? w.createElement(FP, TP({}, e, { ref: t }))
      : typeof n == `number` && typeof r == `number`
        ? w.createElement(IP, TP({}, e, { width: n, height: r, ref: t }))
        : w.createElement(
            w.Fragment,
            null,
            w.createElement(rl, { width: n, height: r }),
            w.createElement(`div`, TP({ ref: t }, e)),
          );
  });
function RP(e) {
  return e ? PP : LP;
}
var zP = (0, w.forwardRef)((e, t) => {
    var n = e.children,
      r = e.className,
      i = e.height,
      a = e.onClick,
      o = e.onContextMenu,
      s = e.onDoubleClick,
      c = e.onMouseDown,
      l = e.onMouseEnter,
      u = e.onMouseLeave,
      d = e.onMouseMove,
      f = e.onMouseUp,
      p = e.onTouchEnd,
      m = e.onTouchMove,
      h = e.onTouchStart,
      g = e.style,
      _ = e.width,
      v = e.responsive,
      y = e.dispatchTouchEvents,
      b = y === void 0 || y,
      S = (0, w.useRef)(null),
      C = L(),
      T = EP((0, w.useState)(null), 2),
      E = T[0],
      D = T[1],
      O = EP((0, w.useState)(null), 2),
      k = O[0],
      A = O[1],
      j = yP(),
      M = Gc(),
      N = M?.width > 0 ? M.width : _,
      ee = M?.height > 0 ? M.height : i,
      te = (0, w.useCallback)(
        (e) => {
          (j(e),
            typeof t == `function` && t(e),
            D(e),
            A(e),
            e != null && (S.current = e));
        },
        [j, t, D, A],
      ),
      ne = (0, w.useCallback)(
        (e) => {
          (C(fN(e)), C(PN({ handler: a, reactEvent: e })));
        },
        [C, a],
      ),
      re = (0, w.useCallback)(
        (e) => {
          (C(mN(e)), C(PN({ handler: l, reactEvent: e })));
        },
        [C, l],
      ),
      ie = (0, w.useCallback)(
        (e) => {
          (C(cC()), C(PN({ handler: u, reactEvent: e })));
        },
        [C, u],
      ),
      ae = (0, w.useCallback)(
        (e) => {
          (C(mN(e)), C(PN({ handler: d, reactEvent: e })));
        },
        [C, d],
      ),
      oe = (0, w.useCallback)(() => {
        C(DN());
      }, [C]),
      se = (0, w.useCallback)(() => {
        C(ON());
      }, [C]),
      ce = (0, w.useCallback)(
        (e) => {
          C(EN(e.key));
        },
        [C],
      ),
      le = (0, w.useCallback)(
        (e) => {
          C(PN({ handler: o, reactEvent: e }));
        },
        [C, o],
      ),
      ue = (0, w.useCallback)(
        (e) => {
          C(PN({ handler: s, reactEvent: e }));
        },
        [C, s],
      ),
      de = (0, w.useCallback)(
        (e) => {
          C(PN({ handler: c, reactEvent: e }));
        },
        [C, c],
      ),
      fe = (0, w.useCallback)(
        (e) => {
          C(PN({ handler: f, reactEvent: e }));
        },
        [C, f],
      ),
      pe = (0, w.useCallback)(
        (e) => {
          C(PN({ handler: h, reactEvent: e }));
        },
        [C, h],
      ),
      me = (0, w.useCallback)(
        (e) => {
          (b && C(BN(e)), C(PN({ handler: m, reactEvent: e })));
        },
        [C, b, m],
      ),
      he = (0, w.useCallback)(
        (e) => {
          C(PN({ handler: p, reactEvent: e }));
        },
        [C, p],
      ),
      ge = RP(v);
    return w.createElement(
      DT.Provider,
      { value: E },
      w.createElement(
        We.Provider,
        { value: k },
        w.createElement(
          ge,
          {
            width: N ?? g?.width,
            height: ee ?? g?.height,
            className: x(`recharts-wrapper`, r),
            style: xP(
              { position: `relative`, cursor: `default`, width: N, height: ee },
              g,
            ),
            onClick: ne,
            onContextMenu: le,
            onDoubleClick: ue,
            onFocus: oe,
            onBlur: se,
            onKeyDown: ce,
            onMouseDown: de,
            onMouseEnter: re,
            onMouseLeave: ie,
            onMouseMove: ae,
            onMouseUp: fe,
            onTouchEnd: he,
            onTouchMove: me,
            onTouchStart: pe,
            ref: te,
          },
          w.createElement(MP, null),
          n,
        ),
      ),
    );
  }),
  BP = [
    `width`,
    `height`,
    `responsive`,
    `children`,
    `className`,
    `style`,
    `compact`,
    `title`,
    `desc`,
  ];
function VP(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = HP(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function HP(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var UP = (0, w.forwardRef)((e, t) => {
  var n = e.width,
    r = e.height,
    i = e.responsive,
    a = e.children,
    o = e.className,
    s = e.style,
    c = e.compact,
    l = e.title,
    u = e.desc,
    d = O(VP(e, BP));
  return c
    ? w.createElement(
        w.Fragment,
        null,
        w.createElement(rl, { width: n, height: r }),
        w.createElement(fP, { otherAttributes: d, title: l, desc: u }, a),
      )
    : w.createElement(
        zP,
        {
          className: o,
          style: s,
          width: n,
          height: r,
          responsive: i ?? !1,
          onClick: e.onClick,
          onMouseLeave: e.onMouseLeave,
          onMouseEnter: e.onMouseEnter,
          onMouseMove: e.onMouseMove,
          onMouseDown: e.onMouseDown,
          onMouseUp: e.onMouseUp,
          onContextMenu: e.onContextMenu,
          onDoubleClick: e.onDoubleClick,
          onTouchStart: e.onTouchStart,
          onTouchMove: e.onTouchMove,
          onTouchEnd: e.onTouchEnd,
        },
        w.createElement(
          fP,
          { otherAttributes: d, title: l, desc: u, ref: t },
          w.createElement(CA, null, a),
        ),
      );
});
function WP() {
  return (
    (WP = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    WP.apply(null, arguments)
  );
}
function GP(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function KP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? GP(Object(n), !0).forEach(function (t) {
          qP(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : GP(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function qP(e, t, n) {
  return (
    (t = JP(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function JP(e) {
  var t = YP(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function YP(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var XP = KP(
    {
      accessibilityLayer: !0,
      barCategoryGap: `10%`,
      barGap: 4,
      layout: `horizontal`,
      margin: { top: 5, right: 5, bottom: 5, left: 5 },
      responsive: !1,
      reverseStackOrder: !1,
      stackOffset: `none`,
      syncMethod: `index`,
    },
    KN,
  ),
  ZP = (0, w.forwardRef)(function (e, t) {
    var n = yn(e.categoricalChartProps, XP),
      r = e.chartName,
      i = e.defaultTooltipEventType,
      a = e.validateTooltipEventTypes,
      o = e.tooltipPayloadSearcher,
      s = e.categoricalChartProps,
      c = {
        chartName: r,
        defaultTooltipEventType: i,
        validateTooltipEventTypes: a,
        tooltipPayloadSearcher: o,
        eventEmitter: void 0,
      };
    return w.createElement(
      QN,
      { preloadedState: { options: c }, reduxStoreName: s.id ?? r },
      w.createElement(sA, { chartData: s.data }),
      w.createElement(eP, { layout: n.layout, margin: n.margin }),
      w.createElement(nP, {
        throttleDelay: n.throttleDelay,
        throttledEvents: n.throttledEvents,
      }),
      w.createElement(tP, {
        baseValue: n.baseValue,
        accessibilityLayer: n.accessibilityLayer,
        barCategoryGap: n.barCategoryGap,
        maxBarSize: n.maxBarSize,
        stackOffset: n.stackOffset,
        barGap: n.barGap,
        barSize: n.barSize,
        syncId: n.syncId,
        syncMethod: n.syncMethod,
        className: n.className,
        reverseStackOrder: n.reverseStackOrder,
      }),
      w.createElement(UP, WP({}, n, { ref: t })),
    );
  }),
  QP = [`axis`, `item`],
  $P = (0, w.forwardRef)((e, t) =>
    w.createElement(ZP, {
      chartName: `BarChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: QP,
      tooltipPayloadSearcher: NT,
      categoricalChartProps: e,
      ref: t,
    }),
  ),
  eF = (e, t) => (t > 0 ? Math.round((e / t) * 1e3) / 10 : null),
  tF = [
    `FILA_EMERGENCIA_MEDICA`,
    `FILA_REVISAO_HUMANA_PRIORITARIA`,
    `FILA_REVISAO_HUMANA`,
    `AUDITORIA_AUTORIZACOES`,
    `FARMACIA_HOSPITALAR`,
    `PRONTUARIO_ELETRONICO`,
  ];
function nF(e) {
  let t = e.filter((e) =>
      [
        `processado`,
        `em_auditoria`,
        `aprovado_auditoria`,
        `rejeitado`,
      ].includes(e.status),
    ),
    r = e.map((e) => e.confiancaClassificacao?.pct).filter((e) => e !== void 0);
  return {
    total: e.length,
    processados: t.length,
    emAndamento: e.filter((e) => e.emAndamento).length,
    pendentesRevisao: e.filter((e) => e.status === `em_auditoria`).length,
    urgentesPendentes: e.filter((e) => e.status === `em_auditoria` && e.urgente)
      .length,
    naFilaEmergencia: e.filter(
      (e) => e.roteamento?.destino === `FILA_EMERGENCIA_MEDICA`,
    ).length,
    aprovados: e.filter((e) => e.status === `aprovado_auditoria`).length,
    rejeitados: e.filter((e) => e.status === `rejeitado`).length,
    erros: e.filter((e) => e.status === `erro`).length,
    taxaSucessoPct: eF(
      e.filter((e) => e.status !== `erro` && !e.emAndamento).length,
      e.filter((e) => !e.emAndamento).length,
    ),
    confiancaClassificacaoMediaPct: r.length
      ? Math.round(r.reduce((e, t) => e + t, 0) / r.length)
      : null,
    semRevisaoPct: eF(
      e.filter((e) => e.status === `processado`).length,
      t.length,
    ),
    porDestino: tF.map((t) => ({
      destino: t,
      rotulo: n[t],
      valor: e.filter((e) => e.roteamento?.destino === t).length,
    })),
  };
}
var $ = d();
function rF({
  label: e,
  value: t,
  detail: n,
  Icon: r,
  tone: a = `blue`,
  to: o,
}) {
  let s = (0, $.jsxs)($.Fragment, {
    children: [
      (0, $.jsxs)(`div`, {
        children: [
          (0, $.jsx)(`span`, { children: e }),
          (0, $.jsx)(`strong`, { children: t }),
          n && (0, $.jsx)(`em`, { className: a, children: n }),
        ],
      }),
      (0, $.jsx)(r, { className: a, size: 21 }),
    ],
  });
  return o
    ? (0, $.jsx)(i, { to: o, className: `card stat clickable`, children: s })
    : (0, $.jsx)(`div`, { className: `card stat`, children: s });
}
var iF = (e) => e.toLocaleString(`pt-BR`),
  aF = (e) => (e === null ? `—` : `${String(e).replace(`.`, `,`)}%`);
function oF() {
  let { resolved: e } = s(),
    { views: n, carga: r, erro: a, recarregar: o } = t(),
    l = e === `dark`,
    d = (0, w.useMemo)(() => nF(n), [n]);
  return r === `carregando`
    ? (0, $.jsx)(p, {})
    : r === `erro`
      ? (0, $.jsx)(u, { message: a, onRetry: o })
      : (0, $.jsxs)($.Fragment, {
          children: [
            (0, $.jsx)(`div`, {
              className: `page-head`,
              children: (0, $.jsx)(`h1`, { children: `Dashboard` }),
            }),
            n.length === 0
              ? (0, $.jsx)(`div`, {
                  className: `card`,
                  children: (0, $.jsx)(m, {
                    title: `Nenhum documento processado ainda`,
                    children: (0, $.jsx)(i, {
                      className: `primary link-as-button`,
                      to: `/processar`,
                      children: `Processar um documento`,
                    }),
                  }),
                })
              : (0, $.jsxs)($.Fragment, {
                  children: [
                    d.urgentesPendentes > 0 &&
                      (0, $.jsxs)(`div`, {
                        className: `alert`,
                        children: [
                          (0, $.jsx)(c, { size: 22 }),
                          (0, $.jsx)(`div`, {
                            children: (0, $.jsxs)(`b`, {
                              children: [
                                d.urgentesPendentes,
                                ` `,
                                d.urgentesPendentes === 1
                                  ? `documento urgente aguarda`
                                  : `documentos urgentes aguardam`,
                                ` revisão humana`,
                              ],
                            }),
                          }),
                          (0, $.jsx)(i, {
                            className: `alert-link`,
                            to: `/processar?tab=pendentes&prioridade=urgente`,
                            children: `Revisar agora`,
                          }),
                        ],
                      }),
                    (0, $.jsxs)(`div`, {
                      className: `stats three`,
                      children: [
                        (0, $.jsx)(rF, {
                          label: `Processados`,
                          value: iF(d.processados),
                          detail: d.naFilaEmergencia
                            ? `${d.naFilaEmergencia} na fila de emergência`
                            : void 0,
                          Icon: y,
                          to: `/documentos`,
                        }),
                        (0, $.jsx)(rF, {
                          label: `Pendentes de revisão`,
                          value: iF(d.pendentesRevisao),
                          Icon: _,
                          tone: `amber`,
                          to: `/processar?tab=pendentes`,
                        }),
                        (0, $.jsx)(rF, {
                          label: `Aprovados na auditoria`,
                          value: iF(d.aprovados),
                          detail: d.rejeitados
                            ? `${d.rejeitados} rejeitados`
                            : void 0,
                          Icon: h,
                          tone: `green`,
                          to: `/documentos?filtro=aprovados`,
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `grid-2`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `card chart`,
                          children: [
                            (0, $.jsx)(`div`, {
                              className: `card-title`,
                              children: (0, $.jsx)(`h2`, {
                                children: `Documentos por destino`,
                              }),
                            }),
                            (0, $.jsx)(qc, {
                              width: `100%`,
                              height: 240,
                              children: (0, $.jsxs)($P, {
                                data: d.porDestino,
                                children: [
                                  (0, $.jsx)(cN, {
                                    dataKey: `rotulo`,
                                    tickLine: !1,
                                    axisLine: !1,
                                    stroke: l ? `#7f8da5` : `#6b7a90`,
                                    fontSize: 11,
                                  }),
                                  (0, $.jsx)(gE, {
                                    cursor: {
                                      fill: l
                                        ? `rgba(255,255,255,.04)`
                                        : `rgba(15,27,45,.05)`,
                                    },
                                    contentStyle: {
                                      background: l ? `#111a2d` : `#ffffff`,
                                      border: `1px solid ${l ? `#273752` : `#dbe3ee`}`,
                                      borderRadius: 8,
                                      color: l ? `#e8eefc` : `#0f1b2d`,
                                    },
                                  }),
                                  (0, $.jsx)(VM, {
                                    dataKey: `valor`,
                                    name: `Documentos`,
                                    radius: [5, 5, 0, 0],
                                    fill: l ? `#3b82f6` : `#2563eb`,
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `card performance`,
                          children: [
                            (0, $.jsx)(`h2`, { children: `Desempenho` }),
                            (0, $.jsxs)(`dl`, {
                              children: [
                                (0, $.jsxs)(`div`, {
                                  children: [
                                    (0, $.jsx)(`dt`, {
                                      children: `Sem falha técnica`,
                                    }),
                                    (0, $.jsx)(`dd`, {
                                      children: aF(d.taxaSucessoPct),
                                    }),
                                  ],
                                }),
                                (0, $.jsxs)(`div`, {
                                  children: [
                                    (0, $.jsx)(`dt`, {
                                      children: `Confiança média da classificação`,
                                    }),
                                    (0, $.jsx)(`dd`, {
                                      children: aF(
                                        d.confiancaClassificacaoMediaPct,
                                      ),
                                    }),
                                  ],
                                }),
                                (0, $.jsxs)(`div`, {
                                  children: [
                                    (0, $.jsx)(`dt`, {
                                      children: `Roteados sem revisão humana`,
                                    }),
                                    (0, $.jsx)(`dd`, {
                                      children: aF(d.semRevisaoPct),
                                    }),
                                  ],
                                }),
                                (0, $.jsxs)(`div`, {
                                  children: [
                                    (0, $.jsx)(`dt`, {
                                      children: `Falhas técnicas`,
                                    }),
                                    (0, $.jsx)(`dd`, { children: iF(d.erros) }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
          ],
        });
}
export { oF as default };