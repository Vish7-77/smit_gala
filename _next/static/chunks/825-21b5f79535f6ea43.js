(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [825],
  {
    1004: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return Q;
          },
        });
      var r = n(9268),
        o = n(6006),
        a = n(6027),
        c = n(1772),
        i = n.n(c),
        s = n(9791),
        l = n(5468),
        u = n.n(l);
      function d(e) {
        let {
            name: t,
            value: n,
            label: o,
            hidden: a = !1,
            required: c = !0,
            as: i = "input",
            layout: l,
            type: d = "text",
            onChange: p,
            id: f = "",
          } = e,
          m = (0, s.Z)(u().textfield, "column", l);
        return (0, r.jsx)("div", {
          className: (0, s.Z)("column", u()[a ? "hidden" : ""], "".concat(m)),
          children: (0, r.jsxs)("div", {
            className: (0, s.Z)(u().field),
            children: [
              (0, r.jsx)("label", {
                htmlFor: f,
                className: (0, s.Z)(u().label, "label", c ? "required" : ""),
                children: o || t,
              }),
              (0, r.jsx)("div", {
                className: (0, s.Z)(u().control, u()[i]),
                children: (0, r.jsx)(i, {
                  required: c,
                  className: (0, s.Z)(u().input),
                  name: t.toLowerCase(),
                  type: d,
                  placeholder: n || t,
                  id: f,
                  onChange: p,
                }),
              }),
            ],
          }),
        });
      }
      var p = n(2083),
        f = n(8066),
        m = n.n(f);
      function h(e) {
        let {
          label: t,
          name: n,
          value: o,
          checked: a = !1,
          onChange: c,
          id: i = "id_checkbox",
        } = e;
        return (0, r.jsxs)("label", {
          className: m()["checkbox-wrapper"],
          htmlFor: i,
          children: [
            (0, r.jsx)("input", {
              type: "checkbox",
              value: o,
              className: m().checkbox,
              name: n,
              id: i,
              checked: a,
              onChange: c,
            }),
            (0, r.jsx)("span", {
              className: (0, s.Z)(m()["checkbox-label"]),
              children: t,
            }),
          ],
        });
      }
      var y,
        b = n(9186),
        v = n(8611),
        x = function () {
          return (x =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
        g = function (e) {
          var t;
          e
            ? (function (e) {
                if (e) for (; e.lastChild; ) e.lastChild.remove();
              })("string" == typeof e ? document.getElementById(e) : e)
            : (t = document.querySelector(".grecaptcha-badge")) &&
              t.parentNode &&
              document.body.removeChild(t.parentNode);
        },
        w = function (e, t) {
          g(t), (window.___grecaptcha_cfg = void 0);
          var n,
            r = document.querySelector("#" + e);
          r && r.remove(),
            (n = document.querySelector(
              'script[src^="https://www.gstatic.com/recaptcha/releases"]'
            )) && n.remove();
        },
        _ = function (e) {
          var t = e.render,
            n = e.onLoadCallbackName,
            r = e.language,
            o = e.onLoad,
            a = e.useRecaptchaNet,
            c = e.useEnterprise,
            i = e.scriptProps,
            s = void 0 === i ? {} : i,
            l = s.nonce,
            u = void 0 === l ? "" : l,
            d = s.defer,
            p = s.async,
            f = s.id,
            m = s.appendTo,
            h = (void 0 === f ? "" : f) || "google-recaptcha-v3";
          if (document.querySelector("#" + h)) o();
          else {
            var y,
              b =
                "https://www." +
                ((y = { useEnterprise: c, useRecaptchaNet: a }).useRecaptchaNet
                  ? "recaptcha.net"
                  : "google.com") +
                "/recaptcha/" +
                (y.useEnterprise ? "enterprise.js" : "api.js"),
              v = document.createElement("script");
            (v.id = h),
              (v.src =
                b +
                "?render=" +
                t +
                ("explicit" === t ? "&onload=" + n : "") +
                (r ? "&hl=" + r : "")),
              u && (v.nonce = u),
              (v.defer = !!(void 0 !== d && d)),
              (v.async = !!(void 0 !== p && p)),
              (v.onload = o),
              ("body" === m
                ? document.body
                : document.getElementsByTagName("head")[0]
              ).appendChild(v);
          }
        },
        C = function (e) {
          void 0 === v || v.env, console.warn(e);
        };
      (y || (y = {})).SCRIPT_NOT_AVAILABLE =
        "Recaptcha script is not available";
      var S = (0, o.createContext)({
        executeRecaptcha: function () {
          throw Error(
            "GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider"
          );
        },
      });
      function j(e) {
        var t = e.reCaptchaKey,
          n = e.useEnterprise,
          r = void 0 !== n && n,
          a = e.useRecaptchaNet,
          c = void 0 !== a && a,
          i = e.scriptProps,
          s = e.language,
          l = e.container,
          u = e.children,
          d = (0, o.useState)(null),
          p = d[0],
          f = d[1],
          m = (0, o.useRef)(t),
          h = JSON.stringify(i),
          b = JSON.stringify(null == l ? void 0 : l.parameters);
        (0, o.useEffect)(
          function () {
            if (t) {
              var e = (null == i ? void 0 : i.id) || "google-recaptcha-v3",
                n =
                  (null == i ? void 0 : i.onLoadCallbackName) ||
                  "onRecaptchaLoadCallback";
              return (
                (window[n] = function () {
                  var e = r ? window.grecaptcha.enterprise : window.grecaptcha,
                    n = x(
                      { badge: "inline", size: "invisible", sitekey: t },
                      (null == l ? void 0 : l.parameters) || {}
                    );
                  m.current = e.render(null == l ? void 0 : l.element, n);
                }),
                _({
                  render: (null == l ? void 0 : l.element) ? "explicit" : t,
                  onLoadCallbackName: n,
                  useEnterprise: r,
                  useRecaptchaNet: c,
                  scriptProps: i,
                  language: s,
                  onLoad: function () {
                    if (window && window.grecaptcha) {
                      var e = r
                        ? window.grecaptcha.enterprise
                        : window.grecaptcha;
                      e.ready(function () {
                        f(e);
                      });
                    } else
                      C(
                        "<GoogleRecaptchaProvider /> " + y.SCRIPT_NOT_AVAILABLE
                      );
                  },
                  onError: function () {
                    C("Error loading google recaptcha script");
                  },
                }),
                function () {
                  w(e, null == l ? void 0 : l.element);
                }
              );
            }
            C("<GoogleReCaptchaProvider /> recaptcha key not provided");
          },
          [r, c, h, b, s, t, null == l ? void 0 : l.element]
        );
        var v = (0, o.useCallback)(
            function (e) {
              if (!p || !p.execute)
                throw Error(
                  "<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded"
                );
              return p.execute(m.current, { action: e });
            },
            [p, m]
          ),
          g = (0, o.useMemo)(
            function () {
              return {
                executeRecaptcha: p ? v : void 0,
                container: null == l ? void 0 : l.element,
              };
            },
            [v, p, null == l ? void 0 : l.element]
          );
        return o.createElement(S.Provider, { value: g }, u);
      }
      function k(e) {
        var t = this,
          n = e.action,
          r = e.onVerify,
          a = e.refreshReCaptcha,
          c = (0, o.useContext)(S);
        (0, o.useEffect)(
          function () {
            var e,
              o,
              a,
              i = c.executeRecaptcha;
            i &&
              ((e = void 0),
              (o = void 0),
              (a = function () {
                var e;
                return (function (e, t) {
                  var n,
                    r,
                    o,
                    a,
                    c = {
                      label: 0,
                      sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1];
                      },
                      trys: [],
                      ops: [],
                    };
                  return (
                    (a = { next: i(0), throw: i(1), return: i(2) }),
                    "function" == typeof Symbol &&
                      (a[Symbol.iterator] = function () {
                        return this;
                      }),
                    a
                  );
                  function i(a) {
                    return function (i) {
                      return (function (a) {
                        if (n)
                          throw TypeError("Generator is already executing.");
                        for (; c; )
                          try {
                            if (
                              ((n = 1),
                              r &&
                                (o =
                                  2 & a[0]
                                    ? r.return
                                    : a[0]
                                    ? r.throw ||
                                      ((o = r.return) && o.call(r), 0)
                                    : r.next) &&
                                !(o = o.call(r, a[1])).done)
                            )
                              return o;
                            switch (
                              ((r = 0), o && (a = [2 & a[0], o.value]), a[0])
                            ) {
                              case 0:
                              case 1:
                                o = a;
                                break;
                              case 4:
                                return c.label++, { value: a[1], done: !1 };
                              case 5:
                                c.label++, (r = a[1]), (a = [0]);
                                continue;
                              case 7:
                                (a = c.ops.pop()), c.trys.pop();
                                continue;
                              default:
                                if (
                                  !(o =
                                    (o = c.trys).length > 0 &&
                                    o[o.length - 1]) &&
                                  (6 === a[0] || 2 === a[0])
                                ) {
                                  c = 0;
                                  continue;
                                }
                                if (
                                  3 === a[0] &&
                                  (!o || (a[1] > o[0] && a[1] < o[3]))
                                ) {
                                  c.label = a[1];
                                  break;
                                }
                                if (6 === a[0] && c.label < o[1]) {
                                  (c.label = o[1]), (o = a);
                                  break;
                                }
                                if (o && c.label < o[2]) {
                                  (c.label = o[2]), c.ops.push(a);
                                  break;
                                }
                                o[2] && c.ops.pop(), c.trys.pop();
                                continue;
                            }
                            a = t.call(e, c);
                          } catch (e) {
                            (a = [6, e]), (r = 0);
                          } finally {
                            n = o = 0;
                          }
                        if (5 & a[0]) throw a[1];
                        return { value: a[0] ? a[1] : void 0, done: !0 };
                      })([a, i]);
                    };
                  }
                })(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, i(n)];
                    case 1:
                      return (
                        (e = t.sent()),
                        r
                          ? (r(e), [2])
                          : (C("Please define an onVerify function"), [2])
                      );
                  }
                });
              }),
              new (o || (o = Promise))(function (n, r) {
                function c(e) {
                  try {
                    s(a.next(e));
                  } catch (e) {
                    r(e);
                  }
                }
                function i(e) {
                  try {
                    s(a.throw(e));
                  } catch (e) {
                    r(e);
                  }
                }
                function s(e) {
                  var t;
                  e.done
                    ? n(e.value)
                    : ((t = e.value) instanceof o
                        ? t
                        : new o(function (e) {
                            e(t);
                          })
                      ).then(c, i);
                }
                s((a = a.apply(t, e || [])).next());
              }));
          },
          [n, r, a, c]
        );
        var i = c.container;
        return "string" == typeof i ? o.createElement("div", { id: i }) : null;
      }
      function N(e, t) {
        return e((t = { exports: {} }), t.exports), t.exports;
        /** @license React v16.13.1
         * react-is.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
      }
      S.Consumer;
      var T = "function" == typeof Symbol && Symbol.for,
        P = T ? Symbol.for("react.element") : 60103,
        E = T ? Symbol.for("react.portal") : 60106,
        R = T ? Symbol.for("react.fragment") : 60107,
        $ = T ? Symbol.for("react.strict_mode") : 60108,
        L = T ? Symbol.for("react.profiler") : 60114,
        M = T ? Symbol.for("react.provider") : 60109,
        I = T ? Symbol.for("react.context") : 60110,
        A = T ? Symbol.for("react.async_mode") : 60111,
        F = T ? Symbol.for("react.concurrent_mode") : 60111,
        Z = T ? Symbol.for("react.forward_ref") : 60112,
        O = T ? Symbol.for("react.suspense") : 60113,
        z = T ? Symbol.for("react.suspense_list") : 60120,
        V = T ? Symbol.for("react.memo") : 60115,
        G = T ? Symbol.for("react.lazy") : 60116,
        q = T ? Symbol.for("react.block") : 60121,
        B = T ? Symbol.for("react.fundamental") : 60117,
        D = T ? Symbol.for("react.responder") : 60118,
        X = T ? Symbol.for("react.scope") : 60119;
      function J(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case P:
              switch ((e = e.type)) {
                case A:
                case F:
                case R:
                case L:
                case $:
                case O:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case I:
                    case Z:
                    case G:
                    case V:
                    case M:
                      return e;
                    default:
                      return t;
                  }
              }
            case E:
              return t;
          }
        }
      }
      function Y(e) {
        return J(e) === F;
      }
      var W = {
          AsyncMode: A,
          ConcurrentMode: F,
          ContextConsumer: I,
          ContextProvider: M,
          Element: P,
          ForwardRef: Z,
          Fragment: R,
          Lazy: G,
          Memo: V,
          Portal: E,
          Profiler: L,
          StrictMode: $,
          Suspense: O,
          isAsyncMode: function (e) {
            return Y(e) || J(e) === A;
          },
          isConcurrentMode: Y,
          isContextConsumer: function (e) {
            return J(e) === I;
          },
          isContextProvider: function (e) {
            return J(e) === M;
          },
          isElement: function (e) {
            return "object" == typeof e && null !== e && e.$$typeof === P;
          },
          isForwardRef: function (e) {
            return J(e) === Z;
          },
          isFragment: function (e) {
            return J(e) === R;
          },
          isLazy: function (e) {
            return J(e) === G;
          },
          isMemo: function (e) {
            return J(e) === V;
          },
          isPortal: function (e) {
            return J(e) === E;
          },
          isProfiler: function (e) {
            return J(e) === L;
          },
          isStrictMode: function (e) {
            return J(e) === $;
          },
          isSuspense: function (e) {
            return J(e) === O;
          },
          isValidElementType: function (e) {
            return (
              "string" == typeof e ||
              "function" == typeof e ||
              e === R ||
              e === F ||
              e === L ||
              e === $ ||
              e === O ||
              e === z ||
              ("object" == typeof e &&
                null !== e &&
                (e.$$typeof === G ||
                  e.$$typeof === V ||
                  e.$$typeof === M ||
                  e.$$typeof === I ||
                  e.$$typeof === Z ||
                  e.$$typeof === B ||
                  e.$$typeof === D ||
                  e.$$typeof === X ||
                  e.$$typeof === q))
            );
          },
          typeOf: J,
        },
        U = N(function (e, t) {}),
        H =
          (U.AsyncMode,
          U.ConcurrentMode,
          U.ContextConsumer,
          U.ContextProvider,
          U.Element,
          U.ForwardRef,
          U.Fragment,
          U.Lazy,
          U.Memo,
          U.Portal,
          U.Profiler,
          U.StrictMode,
          U.Suspense,
          U.isAsyncMode,
          U.isConcurrentMode,
          U.isContextConsumer,
          U.isContextProvider,
          U.isElement,
          U.isForwardRef,
          U.isFragment,
          U.isLazy,
          U.isMemo,
          U.isPortal,
          U.isProfiler,
          U.isStrictMode,
          U.isSuspense,
          U.isValidElementType,
          U.typeOf,
          N(function (e) {
            e.exports = W;
          })),
        K = {};
      (K[H.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (K[H.Memo] = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        });
      var Q = (e) => {
        let { children: t, reference: n } = e,
          [c, l] = (0, o.useState)({
            name: "",
            email: "",
            phone: "",
            message: "",
            interestedIn: [],
          }),
          u = (0, o.useRef)(null),
          [f, m] = (0, o.useState)(!1),
          [y, v] = (0, o.useState)(!1),
          [x, g] = (0, o.useState)("");
        function w(e) {
          let { name: t, checked: n } = e.target;
          n
            ? l((e) => ({ ...e, interestedIn: [...e.interestedIn, t] }))
            : l((e) => ({
                ...e,
                interestedIn: e.interestedIn.filter((e) => e !== t),
              }));
        }
        function _(e) {
          let { name: t, value: n } = e.target;
          l((e) => ({ ...e, [t]: n }));
        }
        let C = async (e) => {
          var t;
          e.preventDefault();
          let n = JSON.stringify(c),
            r = await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: n,
            });
          if (r.ok) m(!0);
          else {
            let e = await r.json();
            console.log(e), v(!0);
          }
          null === (t = u.current) ||
            void 0 === t ||
            t.scrollIntoView({ behavior: "smooth" });
        };
        return f
          ? (0, r.jsxs)(a.E.div, {
              initial: { opacity: 0, y: 100 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, ease: "easeInOut" },
              className: (0, s.Z)(
                "column",
                "is-12",
                "contact-form",
                i()["contact-form-container"]
              ),
              children: [
                (0, r.jsx)("img", {
                  src: "https://i.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.webp",
                
                }),
                (0, r.jsx)(p.Z, {
                  as: "h2",
                  size: "h2",
                  style: "no-bottom-margin",
                  children: "Thanks for your message!",
                }),
                (0, r.jsx)("p", {
                  className: "large",
                  children: "We'll be in touch with you shortly.",
                }),
              ],
            })
          : y
          ? (0, r.jsxs)(a.E.div, {
              initial: { opacity: 0, y: 100 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, ease: "easeInOut" },
              className: (0, s.Z)(
                "column",
                "is-12",
                "contact-form",
                i()["contact-form-container"]
              ),
              children: [
                (0, r.jsx)(p.Z, {
                  as: "h2",
                  size: "h2",
                  children: "There was an error submitting your form.",
                }),
                (0, r.jsx)("p", {
                  className: "large",
                  children: "Please try again later.",
                }),
              ],
            })
          : (0, r.jsx)(j, {
              reCaptchaKey: "6LdrDJAmAAAAAMNsiZY3DOpdsxJH4XRXRsSTQocV",
              children: (0, r.jsxs)("form", {
                onSubmit: C,
                className: (0, s.Z)("column", "is-12", "contact-form"),
                id: "contactForm",
                ref: u,
                children: [
                  (0, r.jsxs)("div", {
                    className: (0, s.Z)("columns", "is-multiline"),
                    children: [
                      (0, r.jsx)(d, {
                        name: "Name",
                        type: "text",
                        value: "Name",
                        layout: "is-half-tablet",
                        id: "name",
                        onChange: _,
                      }),
                      (0, r.jsx)(d, {
                        name: "Phone",
                        type: "tel",
                        layout: "is-half-tablet",
                        id: "phone",
                        onChange: _,
                      }),
                      (0, r.jsx)(d, {
                        name: "Email",
                        type: "email",
                        layout: "is-12-tablet",
                        id: "email",
                        onChange: _,
                      }),
                      (0, r.jsxs)("div", {
                        className: (0, s.Z)(
                          "column",
                          "is-full-tablet",
                          i()["checkbox-group"]
                        ),
                        children: [
                          (0, r.jsx)("label", {
                            children: (0, r.jsx)(p.Z, {
                              as: "h3",
                              size: "h6",
                              children: "I'm interested in...",
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: (0, s.Z)(
                              "control",
                              i()["contact-radio"]
                            ),
                            children: [
                              "Logo / Branding",
                              "UI / UX",
                              "Website Design",
                              "Mobile App Design",
                              "Web Development",
                              "Mobile Development",
                              "Strategy",
                            ].map((e) =>
                              (0, r.jsx)(
                                h,
                                {
                                  label: e,
                                  name: e,
                                  id: e,
                                  onChange: w,
                                  checked: c.interestedIn.includes(e),
                                },
                                e
                              )
                            ),
                          }),
                        ],
                      }),
                      (0, r.jsx)(d, {
                        name: "Form Subject",
                        type: "text",
                        value: n || "General Contact Form",
                        layout: "is-12-tablet",
                        required: !1,
                        hidden: !0,
                        id: "subject",
                        onChange: _,
                      }),
                      (0, r.jsx)(d, {
                        name: "Message",
                        label: "Tell Us About the Project",
                        type: "textarea",
                        as: "textarea",
                        value:
                          "Please include any applicable details, such as your budget, timeline, project type, etc...",
                        layout: "is-12-tablet",
                        id: "message",
                        onChange: _,
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: "column is-12",
                    children: (0, r.jsx)(k, {
                      onVerify: (e) => {
                        g(e);
                      },
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: (0, s.Z)(
                      "column",
                      "is-12",
                      i()["form-button-wrapper"]
                    ),
                    children: (0, r.jsx)(b.default, {
                      as: "button",
                      type: "submit",
                      text: "Book a Call",
                      variant: "default",
                    }),
                  }),
                ],
              }),
            });
      };
    },
    8066: function (e) {
      e.exports = {
        "card-base": "Checkbox_card-base__LuRG7",
        "checkbox-wrapper": "Checkbox_checkbox-wrapper__yuCc8",
        "button-rotate": "Checkbox_button-rotate__XNwP6",
        checkbox: "Checkbox_checkbox__F3cOi",
        "checkbox-label": "Checkbox_checkbox-label__58o3B",
      };
    },
    5468: function (e) {
      e.exports = {
        "card-base": "TextInput_card-base__BV083",
        control: "TextInput_control__Xcwuo",
        "button-rotate": "TextInput_button-rotate__brjcH",
        textarea: "TextInput_textarea__8PEXb",
        hidden: "TextInput_hidden__Wibzz",
        input: "TextInput_input__qjuZ_",
      };
    },
    1772: function (e) {
      e.exports = {
        "card-base": "ContactForm_card-base__hD3bL",
        "contact-form-container": "ContactForm_contact-form-container__YOm8_",
        "form-button-wrapper": "ContactForm_form-button-wrapper__sYnRp",
        "checkbox-group": "ContactForm_checkbox-group__Zv6Xu",
        "contact-radio": "ContactForm_contact-radio__buPYy",
      };
    },
    8611: function (e) {
      var t,
        n,
        r,
        o = (e.exports = {});
      function a() {
        throw Error("setTimeout has not been defined");
      }
      function c() {
        throw Error("clearTimeout has not been defined");
      }
      function i(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === a || !t) && setTimeout)
          return (t = setTimeout), setTimeout(e, 0);
        try {
          return t(e, 0);
        } catch (n) {
          try {
            return t.call(null, e, 0);
          } catch (n) {
            return t.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          t = "function" == typeof setTimeout ? setTimeout : a;
        } catch (e) {
          t = a;
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : c;
        } catch (e) {
          n = c;
        }
      })();
      var s = [],
        l = !1,
        u = -1;
      function d() {
        l &&
          r &&
          ((l = !1), r.length ? (s = r.concat(s)) : (u = -1), s.length && p());
      }
      function p() {
        if (!l) {
          var e = i(d);
          l = !0;
          for (var t = s.length; t; ) {
            for (r = s, s = []; ++u < t; ) r && r[u].run();
            (u = -1), (t = s.length);
          }
          (r = null),
            (l = !1),
            (function (e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === c || !n) && clearTimeout)
                return (n = clearTimeout), clearTimeout(e);
              try {
                n(e);
              } catch (t) {
                try {
                  return n.call(null, e);
                } catch (t) {
                  return n.call(this, e);
                }
              }
            })(e);
        }
      }
      function f(e, t) {
        (this.fun = e), (this.array = t);
      }
      function m() {}
      (o.nextTick = function (e) {
        var t = Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        s.push(new f(e, t)), 1 !== s.length || l || i(p);
      }),
        (f.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (o.title = "browser"),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ""),
        (o.versions = {}),
        (o.on = m),
        (o.addListener = m),
        (o.once = m),
        (o.off = m),
        (o.removeListener = m),
        (o.removeAllListeners = m),
        (o.emit = m),
        (o.prependListener = m),
        (o.prependOnceListener = m),
        (o.listeners = function (e) {
          return [];
        }),
        (o.binding = function (e) {
          throw Error("process.binding is not supported");
        }),
        (o.cwd = function () {
          return "/";
        }),
        (o.chdir = function (e) {
          throw Error("process.chdir is not supported");
        }),
        (o.umask = function () {
          return 0;
        });
    },
  },
]);
