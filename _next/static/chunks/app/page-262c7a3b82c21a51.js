(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    2038: function (e, a, r) {
      Promise.resolve().then(r.bind(r, 6839));
    },
    7853: function (e, a, r) {
      "use strict";
      r.r(a),
        r.d(a, {
          default: function () {
            return u;
          },
        });
      var l = r(9268),
        s = r(6006),
        i = r(3679),
        t = r.n(i),
        o = r(4364),
        n = r(7743),
        c = r(6027),
        d = r(9791);
      function u(e) {
        let {
            tilt: a = !0,
            effect: r = "holo",
            style: i = "",
            imgUrl: u,
            imgAlt: m,
            color: _ = "#FF008D",
            window: g = !1,
            reverse: h = !0,
            isRainbow: p = !0,
            lazy: v = !0,
          } = e,
          x = _;
        switch (x) {
          case "purple":
            x = "#8800ff";
            break;
          case "navy":
            x = "#4a08b2";
            break;
          case "blue":
            x = "#1c49e8";
            break;
          case "yellow":
            x = "#FFB800";
            break;
          case "green":
            x = "#02c39d";
            break;
          case "magenta":
            x = "#ff008d";
            break;
          case "electric":
            x = "#9d00ff";
            break;
          case "turquoise":
            x = "#4dd1d4";
        }
        let f = !1;
        "holo" === r && (f = !0);
        let [j, w] = (0, s.useState)({ y: 0 });
        j.y;
        let y = (0, d.Z)(
          t()["image-wrapper"],
          t()[r],
          t()[i],
          "none" === r ? t()["no-effect"] : ""
        );
        return (0, l.jsx)(o.Z, {
          tiltEnable: a,
          glareEnable: f,
          tiltMaxAngleX: 10,
          tiltReverse: h,
          trackOnWindow: g,
          tiltMaxAngleY: 10,
          perspective: 1e3,
          glareColor: x,
          glareBorderRadius: "16px",
          glareMaxOpacity: 0.2,
          glareReverse: !0,
          glarePosition: "all",
          children: (0, l.jsx)("div", {
            className: (0, d.Z)(
              t().tiltComponent,
              "tiltComponent",
              p ? t().rainbow + " rainbow" : ""
            ),
            onMouseMove: (e) => {
              w({
                y:
                  e.clientY -
                  e.currentTarget.getBoundingClientRect().top -
                  e.currentTarget.getBoundingClientRect().height / 2,
              });
            },
            children: (0, l.jsxs)("div", {
              className: y,
              children: [
                (0, l.jsx)("img", {
                  src: u,
                  loading: v ? "lazy" : void 0,
                }),
                (0, l.jsx)(n.M, {
                  children: (0, l.jsx)(c.E.div, {
                    className: (0, d.Z)(
                      t()["image-overlay"],
                      t()["color-" + _]
                    ),
                    initial: { rotate: -45, x: 0, opacity: 0.8 },
                    whileHover: { rotate: -45, x: 0, y: j.y, opacity: 0.8 },
                    children: " ",
                  }),
                }),
              ],
            }),
          }),
        });
      }
    },
    8978: function (e, a, r) {
      "use strict";
      r.r(a);
      var l = r(9268);
      r(6006);
      var s = r(6027),
        i = r(5733),
        t = r.n(i),
        o = r(9791);
      a.default = (e) => {
        let {
            tiltDirection: a = "right",
            angle: r = "normal",
            animationDirection: i = "rtl",
            type: n,
            animation: c = "auto",
            stagger: d = !1,
            pauseOnHover: u = !1,
            offsetTop: m = !1,
            speed: _ = "24s",
            style: g = "",
            children: h,
          } = e,
          p = (0, o.Z)(
            t()[r],
            t()["angle-" + a],
            t()[c + "-animation"],
            d ? t().stagger : ""
          );
        return (0, l.jsx)("div", {
          className: (0, o.Z)(
            "marquee-wrapper",
            "offset-section",
            m && "offset-top",
            g
          ),
          children: (0, l.jsx)("div", {
            className: (0, o.Z)(t().marquee, "marquee", p),
            children: (0, l.jsxs)(s.E.div, {
              className: (0, o.Z)(
                t()["marquee-track"],
                u && t().pauseOnHover,
                "is-centered",
                "columns",
                "is-mobile",
                t()[n + "-marquee"],
                n + "-marquee",
                t()[i]
              ),
              style: { "--speed": _ },
              children: [h, h],
            }),
          }),
        });
      };
    },
    3315: function (e, a, r) {
      "use strict";
      var l = r(9268),
        s = r(6006),
        i = r(9098),
        t = r.n(i),
        o = r(9791),
        n = r(226),
        c = r(9128);
      a.Z = (e) => {
        let {
            tiltDirection: a = "right",
            angle: r = "normal",
            animationDirection: i = "rtl",
            type: d,
            animation: u = "auto",
            stagger: m = !1,
            offsetTop: _ = !1,
            style: g = "",
            parent: h,
            leftOffset: p,
            rightOffset: v,
            children: x,
          } = e,
          f = (0, o.Z)(
            t()[r],
            t()["angle-" + a],
            t()[u + "-animation"],
            m ? t().stagger : ""
          ),
          j = (0, s.useRef)(null);
        return (
          n.p8.registerPlugin(c.ScrollTrigger),
          (0, s.useEffect)(() => {
            n.p8.fromTo(
              j.current,
              { translateX: p },
              {
                translateX: v,
                ease: "none",
                scrollTrigger: {
                  trigger: h.current,
                  scrub: 2,
                  start: "top top",
                  end: "bottom top",
                },
              }
            );
          }, []),
          (0, l.jsx)("div", {
            className: (0, o.Z)(
              "marquee-wrapper",
              "offset-section",
              _ && "offset-top",
              g
            ),
            children: (0, l.jsx)("div", {
              className: (0, o.Z)(t().marquee, "marquee", f),
              children: (0, l.jsx)("div", {
                className: (0, o.Z)(
                  t()["marquee-track"],
                  "is-centered",
                  "columns",
                  "is-mobile",
                  t()[d + "-marquee"],
                  t()[i]
                ),
                ref: j,
                children: x,
              }),
            }),
          })
        );
      };
    },
    2913: function (e, a, r) {
      "use strict";
      r.r(a);
      var l = r(9268),
        s = r(6006),
        i = r(6027),
        t = r(7743),
        o = r(9133),
        n = r.n(o),
        c = r(5846),
        d = r.n(c),
        u = r(9791),
        m = r(2083),
        _ = r(7305),
        g = r(8054),
        h = r(1465);
      a.default = (e) => {
        let a,
          {
            title: r,
            direction: o = "left",
            services: c,
            industry: p,
            imgUrl: v,
            link: x,
            onMouseEnter: f,
            onMouseLeave: j,
            type: w = "list",
            color: y = "blue",
          } = e,
          [b, q] = (0, s.useState)(!1),
          [M, k] = (0, s.useState)({ x: 0, y: 0 }),
          { cursorChangeHandler: S } = (0, s.useContext)(h.MouseContext),
          N = () => {
            null == j || j(), q(!1), S("", "default");
          },
          I = (0, u.Z)(n()[o]),
          O = "";
        return (
          "left" === o
            ? (a = "is-12-mobile is-12-tablet is-4-widescreen is-3-fullhd")
            : ((a = "is-12-mobile is-12-tablet is-12-desktop is-6-widescreen"),
              (O = "image-right")),
          (0, l.jsxs)(i.E.div, {
            className: (0, u.Z)(
              "column",
              "is-12",
              n()["work-item-wrapper"],
              n()[w]
            ),
            onMouseMove: (e) => {
              k({
                x:
                  e.clientX -
                  e.currentTarget.getBoundingClientRect().left -
                  400,
                y:
                  e.clientY - e.currentTarget.getBoundingClientRect().top - 400,
              });
            },
            onMouseEnter: () => {
              null == f || f(), q(!0), S("Get now", "project");
            },
            onMouseLeave: N,
            children: [
              (0, l.jsx)("div", {
                className: (0, u.Z)(n()["hover-glow-wrapper"]),
                children: (0, l.jsx)(t.M, {
                  children:
                    b &&
                    (0, l.jsx)(i.E.div, {
                      transition: {
                        type: "spring",
                        stiffness: 250,
                        damping: 80,
                      },
                      initial: { opacity: 0 },
                      animate: { x: M.x, y: M.y, opacity: 1 },
                      exit: { opacity: 0 },
                      children: (0, l.jsx)(_.Z, { color: y }),
                    }),
                }),
              }),
              (0, l.jsx)(d(), {
                href: x,
                className: (0, u.Z)(n()["work-item-link"], I),
                "aria-label": r,
                onClick: N,
                children: (0, l.jsxs)("div", {
                  className: (0, u.Z)(
                    n()["work-item"],
                    "columns",
                    "is-mobile",
                    "is-multiline",
                    "is-vcentered",
                    "is-variable",
                    "is-8"
                  ),
                  children: [
                    (0, l.jsx)("div", {
                      className: (0, u.Z)(
                        "column",
                        a,
                        n()["work-item-image"],
                        n()[O]
                      ),
                   
                    }),
                    (0, l.jsxs)("div", {
                      className: (0, u.Z)(
                        "column",
                        n().column,
                        n()["work-item-content"]
                      ),
                      children: [
                        (0, l.jsx)(m.Z, {
                          as: "h4",
                          size: "h3",
                          style: "work-title",
                          children: r,
                        }),
                        (0, l.jsxs)("div", {
                          className: (0, u.Z)(n()["list-item-pills"]),
                          children: [
                            (0, l.jsx)("span", {
                              className: (0, u.Z)(
                                "x-small",
                                "no-margin",
                                n()["industry-name"]
                              ),
                              children: p,
                            }),
                            (0, l.jsx)("ul", {
                              className: (0, u.Z)("services-pills"),
                              children:
                                c &&
                                c.map((e, a) =>
                                  (0, l.jsx)(g.Z, { label: e }, a)
                                ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: (0, u.Z)(
                        "column",
                        "is-narrow",
                        "is-hidden-mobile",
                        n()["work-item-arrow"]
                      ),
                      children: (0, l.jsx)("img", {
                        src: "/images/arrow-up-right.svg",
                        "aria-hidden": !0,
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
    },
    9025: function (e, a, r) {
      "use strict";
      r.r(a),
        r.d(a, {
          default: function () {
            return p;
          },
        });
      var l = r(9268),
        s = r(6006),
        i = r(1465),
        t = r(1382),
        o = r.n(t),
        n = r(9791),
        c = r(4574),
        d = r.n(c),
        u = r(5803),
        m = r(7743),
        _ = r(6027);
      function g(e) {
        let { videoUrl: a, fullVideoUrl: r, posterUrl: t = "" } = e,
          [o, c] = (0, s.useState)(!1),
          g = (0, s.useRef)(null),
          h = (0, s.useRef)(null),
          p = (0, s.useRef)(null),
          v = (0, u.Y)(g, { once: !1, amount: 0.01 }),
          { cursorChangeHandler: x } = (0, s.useContext)(i.MouseContext),
          f = () => {
            x("", "default");
          },
          j = () => {
            c(!o),
              h.current && p.current && o
                ? (h.current.play(), p.current.play())
                : h.current &&
                  p.current &&
                  !o &&
                  (h.current.pause(), p.current.pause());
          };
        return (0, l.jsxs)("div", {
          className: (0, n.Z)(d()["video-container"]),
          ref: g,
          style: { backgroundImage: "url(" + t + ")" },
          children: [
            v &&
              (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsxs)("video", {
                    className: (0, n.Z)(d().video),
                    ref: p,
                    muted: !0,
                    loop: !0,
                    autoPlay: !0,
                    onClick: j,
                    poster: t,
                    playsInline: !0,
                    children: [
                      (0, l.jsx)("source", { src: a, type: "video/mp4" }),
                      "Your browser does not support the video tag.",
                    ],
                  }),
                  (0, l.jsxs)("video", {
                    className: (0, n.Z)(d().video, d().blur),
                    ref: h,
                    muted: !0,
                    loop: !0,
                    autoPlay: !0,
                    poster: t,
                    playsInline: !0,
                    children: [
                      (0, l.jsx)("source", { src: a, type: "video/mp4" }),
                      "Your browser does not support the video tag.",
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: (0, n.Z)(d()["play-button"]),
                    children: (0, l.jsx)("svg", {
                      width: "100%",
                      height: "100%",
                      viewBox: "0 0 100 100",
                      style: { marginLeft: ".5rem" },
                      children: (0, l.jsx)("polygon", {
                        points: "30,25 30,75 70,50",
                      }),
                    }),
                  }),
                ],
              }),
            (0, l.jsx)(m.M, {
              children:
                o &&
                (0, l.jsxs)(
                  _.E.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    className: (0, n.Z)(d()["video-modal"]),
                    onMouseEnter: f,
                    onMouseLeave: f,
                    children: [
                      (0, l.jsx)("button", {
                        onClick: j,
                        onMouseEnter: () => {
                          x("", "smallCta");
                        },
                        onMouseLeave: f,
                        className: (0, n.Z)(d()["close-button"]),
                        children: (0, l.jsxs)("svg", {
                          width: "37",
                          height: "38",
                          viewBox: "0 0 37 38",
                          children: [
                            (0, l.jsx)("rect", {
                              x: "4.71094",
                              y: "31.6631",
                              width: "37",
                              height: "2",
                              transform: "rotate(-45 4.71094 31.6631)",
                              fill: "white",
                            }),
                            (0, l.jsx)("rect", {
                              x: "6.125",
                              y: "5.5",
                              width: "37",
                              height: "2",
                              transform: "rotate(45 6.125 5.5)",
                              fill: "white",
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsxs)("video", {
                        className: (0, n.Z)(d()["full-video"]),
                        poster: t,
                        loop: !0,
                        controls: !0,
                        autoPlay: !0,
                        playsInline: !0,
                        children: [
                          (0, l.jsx)("source", { src: r, type: "video/mp4" }),
                          "Your browser does not support the video tag.",
                        ],
                      }),
                    ],
                  },
                  "modal"
                ),
            }),
          ],
        });
      }
      var h = r(2083);
      function p(e) {
        let { videoUrl: a, fullVideoUrl: r, posterUrl: t } = e,
          { cursorChangeHandler: c } = (0, s.useContext)(i.MouseContext);
        return (0, l.jsxs)("section", {
          id: "reel",
          className: (0, n.Z)(o()["video-reel-section"]),
          children: [
            (0, l.jsx)("div", {
              className: (0, n.Z)(o()["video-wrapper"]),
              onMouseEnter: () => {
                c("▶", "video");
              },
              onMouseLeave: () => {
                c("", "default");
              },
              children: (0, l.jsx)(g, {
                videoUrl: a,
                fullVideoUrl: r,
                posterUrl: t,
              }),
            }),
            (0, l.jsx)("div", {
              className: (0, n.Z)(o()["marquee-wrapper"], "marquee-wrapper"),
              children: (0, l.jsx)("div", {
                className: (0, n.Z)(
                  o().marquee,
                  "marquee",
                  "angle-left",
                  "shallow"
                ),
                children: (0, l.jsxs)("div", {
                  className: (0, n.Z)("marquee-track", "columns", "is-mobile"),
                  children: [
                    (0, l.jsx)(h.Z, {
                      as: "h5",
                      size: "h5",
                      style: "regular no-bottom-margin",
                      children:
                        "OUR WORK SHOWREEL — OUR WORK SHOWREEL — OUR WORK SHOWREEL — OUR WORK SHOWREEL —",
                    }),
                    (0, l.jsx)(h.Z, {
                      as: "h5",
                      size: "h5",
                      style: "regular no-bottom-margin",
                      children:
                        "OUR WORK SHOWREEL — OUR WORK SHOWREEL — OUR WORK SHOWREEL — OUR WORK SHOWREEL —",
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
    },
    6839: function (e, a, r) {
      "use strict";
      r.r(a),
        r.d(a, {
          default: function () {
            return y;
          },
        });
      var l = r(9268),
        s = r(6006),
        i = r(9025),
        t = r(2083),
        o = r(7853),
        n = r(3315),
        c = r(2376),
        d = r(9186);
      function u() {
        let e = (0, s.useRef)(null);
        return (0, l.jsxs)("section", {
          className: "about-section",
          ref: e,
          children: [
            (0, l.jsx)("div", {
              className: "columns",
              children: (0, l.jsx)("div", {
                className: "column is-12",
                children: (0, l.jsxs)(t.Z, {
                  as: "h3",
                  size: "h3",
                  style: "lighter no-bottom-margin",
                  children: [
                    (0, l.jsx)(c.default, {
                      children: (0, l.jsx)("span", {
                        className: "kicker subtitle",
                        children: "i am smit gala",
                      }),
                    }),
                    (0, l.jsx)(c.default, {
                      delay: 0.1,
                      children: "I turn data into",
                    }),
                    (0, l.jsx)(c.default, {
                      delay: 0.2,
                      children: "strategies, strategies",
                    }),
                    (0, l.jsx)(c.default, {
                      delay: 0.3,
                      children: "into campaigns and campaigns into results.",
                    }),
                  ],
                }),
              }),
            }),
            (0, l.jsx)("div", {
              className: "columns flex-column-reverse-mobile is-mobile",
              children: (0, l.jsx)("div", {
                className:
                  "column is-12-tablet is-10-desktop is-offset-2-desktop is-7-fullhd is-offset-5-fullhd about-content",
                children: (0, l.jsxs)(c.default, {
                  delay: 0.5,
                  skew: 0,
                  direction: "ltr",
                  children: [
                    (0, l.jsx)("p", {
                      className: "large lighter",
                      children:
                        "As a holistic marketer, my focus is on creating an integrated marketing strategy that considers the full range of tools and tactics available to reach and engage customers. This means taking a data-driven approach to understanding consumer behavior, and utilizing a combination of traditional and digital marketing techniques to create a cohesive and effective campaign.",
                    }),
                   
                    (0, l.jsx)(d.default, {
                      as: "a",
                      to: "/smit.pdf",
                      text: "view portfolio",
                      size: "small",
                    }),
                  ],
                }),
              }),
            }),
            (0, l.jsx)(n.Z, {
              type: "image",
              animation: "scroll",
              animationDirection: "rtl",
              stagger: !0,
              offsetTop: !0,
              parent: e,
              leftOffset: "10%",
              rightOffset: "-50%",
              children: (0, l.jsxs)("div", {
                className: "image-marquee-wrapper",
                children: [
                  (0, l.jsx)(o.default, {
                    imgUrl: "/images/home/slider/1.png",
                    imgAlt: "",
                  }),
                  (0, l.jsx)(o.default, {
                    imgUrl: "/images/home/slider/2.png",
                    imgAlt: "",
                    color: "purple",
                  }),
                  (0, l.jsx)(o.default, {
                    imgUrl: "/images/home/slider/3.png",
                    imgAlt: "",
                  }),
                  (0, l.jsx)(o.default, {
                    imgUrl: "/images/home/slider/4.png",
                    imgAlt: "",
                  }),
                  (0, l.jsx)(o.default, {
                    imgUrl: "/images/home/slider/5.png",
                    imgAlt: "",
                  }),
                  (0, l.jsx)(o.default, {
                    imgUrl: "/images/home/slider/6.png",
                    imgAlt: "",
                  }),
                  (0, l.jsx)(o.default, {
                    imgUrl: "/images/home/slider/7.png",
                    imgAlt: "",
                  }),
                ],
              }),
            }),
            (0, l.jsx)(n.Z, {
              type: "image",
              animation: "scroll",
              animationDirection: "ltr",
              stagger: !0,
              parent: e,
              leftOffset: "-100%",
              rightOffset: "0%",
              angle: "none",
              children: (0, l.jsxs)("div", {
                className: "image-marquee-wrapper",
                children: [
                  (0, l.jsx)(o.default, {
                    imgUrl: "/images/home/slider/8.png",
                    imgAlt: "",
                    lazy: !1,
                  }),
                  (0, l.jsx)(o.default, {
                    imgUrl: "/images/home/slider/9.png",
                    imgAlt: "",
                    lazy: !1,
                  }),
                  (0, l.jsx)(o.default, {
                    imgUrl: "/images/home/slider/10.png",
                    imgAlt: "",
                    lazy: !1,
                  }),
                  (0, l.jsx)(o.default, {
                    imgUrl: "/images/home/slider/11.png",
                    imgAlt: "",
                    lazy: !1,
                  }),
                  (0, l.jsx)(o.default, {
                    imgUrl: "/images/home/slider/12.png",
                    imgAlt: "",
                    lazy: !1,
                  }),
                  (0, l.jsx)(o.default, {
                    imgUrl: "/images/home/slider/13.png",
                    imgAlt: "",
                    lazy: !1,
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var m = r(5803),
        _ = r(6027),
        g = (e) =>
          (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 560 164",
            width: 560,
            height: 164,
            fill: "none",
            ...e,
            children: [
              (0, l.jsx)("style", {
                children:
                  "@keyframes dash{0%{stroke-dashoffset:1}to{stroke-dashoffset:0}}",
              }),
              (0, l.jsx)("g", {
                filter: "url(#a)",
                children: (0, l.jsx)("path", {
                  stroke: "#02C39D",
                  strokeLinecap: "round",
                  strokeWidth: 4,
                  d: "M431.561 18.111C319.498 5.515 81.576-3.285 26.383 62.283c-68.99 81.961 219.081 96.693 410.615 59.465 191.533-37.227 101.706-95.4-88.689-92.34",
                  pathLength: 1,
                  style: {
                    strokeDasharray: 1,
                    strokeDashoffset: 1,
                    animation:
                      "dash 600ms 500ms cubic-bezier(.36,0,0,.97) forwards",
                  },
                }),
              }),
              (0, l.jsx)("defs", {
                children: (0, l.jsxs)("filter", {
                  id: "a",
                  width: 559.077,
                  height: 163.413,
                  x: 0.144,
                  y: 0.493,
                  colorInterpolationFilters: "sRGB",
                  filterUnits: "userSpaceOnUse",
                  children: [
                    (0, l.jsx)("feFlood", {
                      floodOpacity: 0,
                      result: "BackgroundImageFix",
                    }),
                    (0, l.jsx)("feColorMatrix", {
                      in: "SourceAlpha",
                      result: "hardAlpha",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    }),
                    (0, l.jsx)("feOffset", { dy: 7.017 }),
                    (0, l.jsx)("feGaussianBlur", { stdDeviation: 7.017 }),
                    (0, l.jsx)("feColorMatrix", {
                      values:
                        "0 0 0 0 0.00784314 0 0 0 0 0.764706 0 0 0 0 0.615686 0 0 0 0.33 0",
                    }),
                    (0, l.jsx)("feBlend", {
                      in2: "BackgroundImageFix",
                      result: "effect1_dropShadow_4180_13697",
                    }),
                    (0, l.jsx)("feColorMatrix", {
                      in: "SourceAlpha",
                      result: "hardAlpha",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    }),
                    (0, l.jsx)("feOffset", { dy: 1.754 }),
                    (0, l.jsx)("feGaussianBlur", { stdDeviation: 2.631 }),
                    (0, l.jsx)("feColorMatrix", {
                      values:
                        "0 0 0 0 0.00784314 0 0 0 0 0.764706 0 0 0 0 0.615686 0 0 0 0.3 0",
                    }),
                    (0, l.jsx)("feBlend", {
                      in2: "effect1_dropShadow_4180_13697",
                      result: "effect2_dropShadow_4180_13697",
                    }),
                    (0, l.jsx)("feBlend", {
                      in: "SourceGraphic",
                      in2: "effect2_dropShadow_4180_13697",
                      result: "shape",
                    }),
                  ],
                }),
              }),
            ],
          }),
        h = r(5846),
        p = r.n(h),
        v = r(8978);
      function x(e) {
        let { isShown: a } = e;
        return (0, l.jsx)("section", {
          className: "partners-section",
          children: (0, l.jsxs)(_.E.div, {
            className: "partners-marquees-wrapper",
            initial: { opacity: 0 },
            animate: { opacity: a ? 1 : 0 },
            transition: { duration: 1, delay: 2 },
            children: [
              (0, l.jsx)(v.default, {
                type: "logo",
                angle: "none",
                tiltDirection: "none",
                animationDirection: "rtl",
                speed: "72s",
                style: "no-border-top",
                children: (0, l.jsxs)("div", {
                  className: "client-logos-marquee",
                  children: [
                    (0, l.jsx)("img", {
                      src: "/images/clients/1.png",
                      alt: "AMFA",
                    }),
                    (0, l.jsx)("img", {
                      src: "/images/clients/2.png",
                      alt: "SmartResume",
                    }),
                    (0, l.jsx)("img", {
                      src: "/images/clients/3.png",
                      alt: "Axway",
                    }),
                    (0, l.jsx)("img", {
                      src: "/images/clients/4.png",
                      alt: "Lexicon",
                    }),
                    (0, l.jsx)("img", {
                      src: "/images/clients/5.png",
                      alt: "Laravel",
                    }),
                    (0, l.jsx)("img", {
                      src: "/images/clients/6.png",
                      alt: "SyFy",
                    }),
                    (0, l.jsx)("img", {
                      src: "/images/clients/7.png",
                      alt: "IBM",
                    }),
                    (0, l.jsx)("img", {
                      src: "/images/clients/8.png",
                      alt: "Ritz",
                    }),
                    (0, l.jsx)("img", {
                      src: "/images/clients/2.png",
                      alt: "Seven Eleven",
                    }),
                
                    (0, l.jsx)("img", {
                      src: "/images/clients/11.png",
                      alt: "Stella Artois",
                    }),
                    (0, l.jsx)("img", {
                      src: "/images/clients/12.png",
                      alt: "Centennial Bank",
                    }),
                    (0, l.jsx)("img", {
                      src: "/images/clients/13.png",
                      alt: "Budweiser",
                    }),
                    (0, l.jsx)("img", {
                      src: "/images/clients/7.png",
                      alt: "SETI Institute",
                    }),
                    (0, l.jsx)("img", {
                      src: "/images/clients/5.png",
                      alt: "Walmart",
                      className: "medium",
                    }),
                  ],
                }),
              }),
              (0, l.jsx)(v.default, {
                type: "logo",
                angle: "none",
                tiltDirection: "none",
                animationDirection: "ltr",
                speed: "72s",
                children: (0, l.jsxs)("div", {
                  className: "client-logos-marquee",
                  children: [
                    (0, l.jsx)("img", {
                      src: "/images/clients/3.png",
                      alt: "Voltage",
                    }),
                    (0, l.jsx)("img", {
                      src: "/images/clients/4.png",
                      alt: "Crystal Bridges",
                    }),
                    (0, l.jsx)("img", {
                      src: "/images/clients/5.png",
                      alt: "Fit Body",
                    }),
                    (0, l.jsx)("img", {
                      src: "/images/clients/6.png",
                      alt: "Cars.com",
                    }),
                    (0, l.jsx)("img", {
                      src: "/images/clients/7.png",
                      alt: "Tyson",
                    }),
                    (0, l.jsx)("img", {
                      src: "/images/clients/8.png",
                      alt: "Wells Fargo",
                    }),
                    (0, l.jsx)("img", {
                      src: "/images/clients/2.png",
                      alt: "Nabholz",
                    }),

                    (0, l.jsx)("img", {
                      src: "/images/clients/11.png",
                      alt: "Bank OZK",
                      className: "large",
                    }),
                    (0, l.jsx)("img", {
                      src: "/images/clients/12.png",
                      alt: "GE",
                    }),
                    (0, l.jsx)("img", {
                      src: "/images/clients/13.png",
                      alt: "Arkansas Farm Bureau",
                    }),
                    (0, l.jsx)("img", {
                      src: "/images/clients/1.png",
                      alt: "Goodwill",
                    }),
                    (0, l.jsx)("img", {
                      src: "/images/clients/3.png",
                      alt: "Vermont",
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      function f() {
        let e = (0, s.useRef)(null),
          a = (0, m.Y)(e, { once: !0, amount: "some" }),
          r = (0, s.useRef)(null),
          i = (0, m.Y)(r);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)("section", {
              className:
                "hero homepage columns is-multiline is-vcentered is-centered is-mobile is-variable is-4",
              ref: r,
              children: [
                (0, l.jsx)("iframe", {
                  src: "https://my.spline.design/WlezuHlZzo5AJj7qOly6mdkt/",
                  frameBorder: "0",
                  width: "100%",
                  height: "100%",
                }),
                (0, l.jsxs)("div", {
                  className: "blob-wrapper",
                  children: [
                    (0, l.jsx)(_.E.img, {
                      src: "/images/home/home-blob-purple.webp",
                      className: "home-blob-purple",
                      transition: { delay: 0.2, duration: 0.5 },
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                    }),
                    (0, l.jsx)(_.E.img, {
                      src: "/images/home/home-blob-pink.webp",
                      className: "home-blob-pink",
                      transition: { delay: 0.5, duration: 0.5 },
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                    }),
                    ,
                    (0, l.jsx)(_.E.img, {
                      src: "/images/home/home-blob-green.webp",
                      className: "home-blob-green",
                      transition: { delay: 0.3, duration: 0.5 },
                      initial: { opacity: 0 },
                      animate: { opacity: 0.95 },
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: "column is-12 is-hidden-touch",
                  ref: e,
                  children: [
                    (0, l.jsxs)(t.Z, {
                      as: "h1",
                      size: "h3",
                      style: "no-bottom-margin no-top-margin allcaps",
                      children: [
                        (0, l.jsx)(c.default, {
                          delay: 0.4,
                          children: (0, l.jsx)(t.Z, {
                            as: "span",
                            size: "h1",
                            style: "hero-line-1",
                            children: "Make Your",
                          }),
                        }),
                        (0, l.jsx)(c.default, {
                          delay: 0.6,
                          children: (0, l.jsx)(t.Z, {
                            as: "span",
                            size: "h1",
                            style: "allcaps hero-line-2",
                            children: "Digital",
                          }),
                        }),
                        (0, l.jsx)(c.default, {
                          delay: 0.8,
                          children: (0, l.jsx)(t.Z, {
                            as: "span",
                            size: "h1",
                            style: "allcaps hero-line-3",
                            children: "Presence wow.",
                          }),
                        }),
                      ],
                    }),
                    i &&
                      (0, l.jsx)(_.E.div, {
                        className: "circle-wrapper",
                        initial: { opacity: 0, display: "none" },
                        animate: { opacity: 1, display: "block" },
                        transition: {
                          delay: 1.8,
                          duration: 0.5,
                          ease: "circOut",
                        },
                        children: (0, l.jsx)(g, { className: "hero-circle" }),
                      }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: "column is-12 is-hidden-desktop",
                  ref: e,
                  children: [
                    (0, l.jsxs)(t.Z, {
                      as: "h1",
                      size: "h3",
                      style: "no-bottom-margin no-top-margin allcaps",
                      children: [
                        (0, l.jsx)(c.default, {
                          delay: 0.2,
                          children: (0, l.jsx)(t.Z, {
                            as: "span",
                            size: "h1",
                            style: "hero-line-1",
                            children: "Make your",
                          }),
                        }),
                        (0, l.jsx)(c.default, {
                          delay: 0.4,
                          children: (0, l.jsx)(t.Z, {
                            as: "span",
                            size: "h1",
                            style: "allcaps hero-line-2",
                            children: "social",
                          }),
                        }),
                        (0, l.jsx)(c.default, {
                          delay: 0.6,
                          children: (0, l.jsx)(t.Z, {
                            as: "span",
                            size: "h1",
                            style: "allcaps hero-line-2",
                            children: "media",
                          }),
                        }),
                        (0, l.jsx)(c.default, {
                          delay: 0.8,
                          children: (0, l.jsx)(t.Z, {
                            as: "span",
                            size: "h1",
                            style: "allcaps hero-line-3",
                            children: "presence ",
                          }),
                        }),
                        (0, l.jsx)(c.default, {
                          delay: 1,
                          children: (0, l.jsx)(t.Z, {
                            as: "span",
                            size: "h1",
                            style: "allcaps hero-line-3",
                            children: "wow.",
                          }),
                        }),
                      ],
                    }),
                    a &&
                      (0, l.jsx)(_.E.div, {
                        className: "circle-wrapper",
                        initial: { opacity: 0, display: "none" },
                        animate: { opacity: 1, display: "block" },
                        transition: {
                          delay: 1.8,
                          duration: 0.5,
                          ease: "circOut",
                        },
                        children: (0, l.jsx)(g, { className: "hero-circle" }),
                      }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: "column is-12 cta-link-wrapper",
                  children: (0, l.jsx)(p(), {
                    href: "https://docs.google.com/forms/d/e/1FAIpQLSfjbxju6Cug2FXMtwqOFA2l8p425vghSoAYStrQvvEJx-WLRA/viewform",
                    className: "cta-link",
                    children: (0, l.jsxs)(_.E.div, {
                      initial: { opacity: 0, y: 100 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 1, duration: 0.5, ease: "circOut" },
                      className:
                        " columns is-multiline hero-cta-wrapper column is-centered",
                      children: [
                        (0, l.jsx)("div", {
                          className:
                            "column is-12-tablet is-8-desktop is-3-fifths-widescreen cta-content",
                          children: (0, l.jsx)("p", {
                            className: "large light",
                            children:
                              "Not just a marketer, but also your business partner 💪",
                          }),
                        }),
                        (0, l.jsxs)("div", {
                          className:
                            "column is-12-tablet is-4-desktop is-2-fifths-widescreen hero-cta-button",
                          children: [
                            "Book a Call",
                            (0, l.jsx)("span", {
                              className: "icon",
                              children: (0, l.jsx)("img", {
                                src: "/images/forward-arrow.svg",
                                "aria-hidden": !0,
                                href:'https://docs.google.com/forms/d/e/1FAIpQLSfjbxju6Cug2FXMtwqOFA2l8p425vghSoAYStrQvvEJx-WLRA/viewform'
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            (0, l.jsx)(x, { isShown: i }),
          ],
        });
      }
      var j = r(2913),
        w = r(2396);
      function y(e) {
        let a = e.data;
        console.log(a);
        let r = e.testimonials.data.map((e) => {
          var a, r, l, s, i, t, o, n, c, d, u, m, _, g, h;
          return {
            id: null == e ? void 0 : e.id,
            quote:
              null == e
                ? void 0
                : null === (a = e.attributes) || void 0 === a
                ? void 0
                : a.quote,
            name:
              null == e
                ? void 0
                : null === (r = e.attributes) || void 0 === r
                ? void 0
                : r.name,
            company:
              null == e
                ? void 0
                : null === (l = e.attributes) || void 0 === l
                ? void 0
                : l.company,
            job_title:
              null == e
                ? void 0
                : null === (s = e.attributes) || void 0 === s
                ? void 0
                : s.job_title,
            date:
              null == e
                ? void 0
                : null === (i = e.attributes) || void 0 === i
                ? void 0
                : i.date,
            avatar:
              null == e
                ? void 0
                : null === (u = e.attributes) || void 0 === u
                ? void 0
                : null === (d = u.avatar) || void 0 === d
                ? void 0
                : null === (c = d.data) || void 0 === c
                ? void 0
                : null === (n = c.attributes) || void 0 === n
                ? void 0
                : null === (o = n.formats) || void 0 === o
                ? void 0
                : null === (t = o.thumbnail) || void 0 === t
                ? void 0
                : t.url,
            avatar_alt:
              null == e
                ? void 0
                : null === (h = e.attributes) || void 0 === h
                ? void 0
                : null === (g = h.avatar) || void 0 === g
                ? void 0
                : null === (_ = g.data) || void 0 === _
                ? void 0
                : null === (m = _.attributes) || void 0 === m
                ? void 0
                : m.alternativeText,
          };
        });
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(f, {}),
           
            (0, l.jsx)(u, {}),
            (0, l.jsx)(w.default, {
              hasBackgroundEffect: !0,
              testimonials: r,
              loops: !0,
            }),
            (0, l.jsxs)("section", {
              id:'#services',
              className: "work-section offset-section swirl-bg",
              children: [
                (0, l.jsx)("div", {
                  className: "columns undo-offset",
                  children: (0, l.jsx)("div", {
                    className: "column is-12",
                    children: (0, l.jsx)(t.Z, {
                      as: "h3",
                      size: "h3",
                      style: "lighter no-bottom-margin",
                      children: (0, l.jsx)("span", {
                        className: "kicker subtitle",
                        children: "Service i provide",
                        id:'#services'
                      }),
                    }),
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "columns is-multiline",
                  children:
                    a &&
                    a.data.map((e) => {
                      var a,
                        r,
                        s,
                        i,
                        t,
                        o,
                        n,
                        c,
                        d,
                        u,
                        m,
                        _,
                        g,
                        h,
                        p,
                        v,
                        x,
                        f,
                        w;
                      return (0, l.jsx)(
                        j.default,
                        {
                          title:
                            null == e
                              ? void 0
                              : null === (a = e.attributes) || void 0 === a
                              ? void 0
                              : a.project_name,
                          industry:
                            null == e
                              ? void 0
                              : null === (t = e.attributes) || void 0 === t
                              ? void 0
                              : null === (i = t.industry) || void 0 === i
                              ? void 0
                              : null === (s = i.data) || void 0 === s
                              ? void 0
                              : null === (r = s.attributes) || void 0 === r
                              ? void 0
                              : r.name,
                          services:
                            null == e
                              ? void 0
                              : null === (c = e.attributes) || void 0 === c
                              ? void 0
                              : null === (n = c.service_types) || void 0 === n
                              ? void 0
                              : null === (o = n.data) || void 0 === o
                              ? void 0
                              : o.map((e) => {
                                  var a;
                                  return null == e
                                    ? void 0
                                    : null === (a = e.attributes) ||
                                      void 0 === a
                                    ? void 0
                                    : a.name;
                                }),
                         
                          link: "/next.html",
                          color:
                            null === (w = e.attributes) || void 0 === w
                              ? void 0
                              : null === (f = w.industry) || void 0 === f
                              ? void 0
                              : null === (x = f.data) || void 0 === x
                              ? void 0
                              : null === (v = x.attributes) || void 0 === v
                              ? void 0
                              : v.color,
                          direction: "right",
                        },
                        e.id
                      );
                    }),
                }),
              ],
            }),
          ],
        });
      }
    },
    3679: function (e) {
      e.exports = {
        "card-base": "OverlayImage_card-base__orkGm",
        tiltComponent: "OverlayImage_tiltComponent__GDNIE",
        "glare-wrapper": "OverlayImage_glare-wrapper__4fxxk",
        "image-wrapper": "OverlayImage_image-wrapper__LSQdW",
        rainbow: "OverlayImage_rainbow__a46C2",
        "no-effect": "OverlayImage_no-effect__4LBv4",
        "image-overlay": "OverlayImage_image-overlay__yaa8U",
        "color-turquoise": "OverlayImage_color-turquoise__dxKpm",
        "color-electric": "OverlayImage_color-electric__leMP6",
        "color-yellow": "OverlayImage_color-yellow__ow2vb",
        "color-magenta": "OverlayImage_color-magenta__N1y2g",
        "color-navy": "OverlayImage_color-navy__Bxa9z",
        "color-green": "OverlayImage_color-green__yr8il",
        "color-purple": "OverlayImage_color-purple__nioDC",
        "color-blue": "OverlayImage_color-blue__sRfC6",
      };
    },
    4574: function (e) {
      e.exports = {
        "card-base": "Video_card-base__FTIsj",
        "video-container": "Video_video-container__xt6oG",
        "play-button": "Video_play-button__mB_3K",
        video: "Video_video__Hc6aE",
        blur: "Video_blur__jF_m6",
        "video-modal": "Video_video-modal__cHjiW",
        "full-video": "Video_full-video__DsEfS",
        "close-button": "Video_close-button__AmpX9",
      };
    },
    5733: function (e) {
      e.exports = {
        "card-base": "Marquee_card-base__kGR9x",
        "marquee-wrapper": "Marquee_marquee-wrapper__ZEr8N",
        "offset-section": "Marquee_offset-section__UXpwF",
        "offset-top": "Marquee_offset-top___YS2M",
        marquee: "Marquee_marquee__TSsQ9",
        "angle-right": "Marquee_angle-right__uz2_t",
        shallow: "Marquee_shallow__cfW8F",
        "angle-left": "Marquee_angle-left__Pol5k",
        "angle-none": "Marquee_angle-none__NY3Qo",
        none: "Marquee_none__rYY2N",
        "marquee-track": "Marquee_marquee-track__urWkC",
        "is-5": "Marquee_is-5__pV7vl",
        columns: "Marquee_columns__nJXMR",
        "is-variable": "Marquee_is-variable__bKIc_",
        rtl: "Marquee_rtl__rUyjq",
        ltr: "Marquee_ltr__hikdu",
        pauseOnHover: "Marquee_pauseOnHover__HmJEh",
        "auto-animation": "Marquee_auto-animation__FAljm",
        "marquee-normal": "Marquee_marquee-normal__xmSmv",
        column: "Marquee_column__Np3Fx",
        "text-marquee": "Marquee_text-marquee__E8p8S",
        stagger: "Marquee_stagger__1wk_d",
        "stagger-tops": "Marquee_stagger-tops__R7ZhD",
        "card-marquee": "Marquee_card-marquee__yULYe",
        "circle-rotate": "Marquee_circle-rotate__wDsgX",
        "circle-rotate-small": "Marquee_circle-rotate-small__FKHIc",
        "circle-rotate-xsmall": "Marquee_circle-rotate-xsmall__y_cDB",
        "reverse-circle-rotate-xsmall":
          "Marquee_reverse-circle-rotate-xsmall__WHQda",
        circle: "Marquee_circle___a9nk",
        "reverse-circle": "Marquee_reverse-circle__kdaz2",
        "reverse-circle-rotate": "Marquee_reverse-circle-rotate__516Ql",
        "big-circle": "Marquee_big-circle____7U9",
        spear: "Marquee_spear__grDp3",
        navLoad: "Marquee_navLoad__C6lhU",
        projectsNavLoad: "Marquee_projectsNavLoad__8PK2N",
        dropHighlight: "Marquee_dropHighlight__o1xSN",
        rotate: "Marquee_rotate__Lo6rE",
        "fade-in": "Marquee_fade-in__9dFxz",
        "fade-in-up": "Marquee_fade-in-up__LvfF_",
        skewInBottom: "Marquee_skewInBottom__MVTMQ",
        loadInBottom: "Marquee_loadInBottom__eABoU",
        wave: "Marquee_wave__ZlGQ7",
        "occasional-wave": "Marquee_occasional-wave__A_csU",
        "rocket-takeoff": "Marquee_rocket-takeoff__330si",
      };
    },
    9098: function (e) {
      e.exports = {
        "card-base": "ScrollMarquee_card-base__6zWwq",
        "marquee-wrapper": "ScrollMarquee_marquee-wrapper__xvviW",
        "offset-section": "ScrollMarquee_offset-section__yV2uE",
        "offset-top": "ScrollMarquee_offset-top__fv9TG",
        marquee: "ScrollMarquee_marquee__SJ2b8",
        "angle-right": "ScrollMarquee_angle-right__dxJNd",
        shallow: "ScrollMarquee_shallow__c94mm",
        "angle-left": "ScrollMarquee_angle-left__bvJIR",
        "angle-none": "ScrollMarquee_angle-none__XwnZi",
        none: "ScrollMarquee_none__4d_dt",
        "marquee-track": "ScrollMarquee_marquee-track__gipm3",
        "is-5": "ScrollMarquee_is-5__Iu6n1",
        columns: "ScrollMarquee_columns__1j1V_",
        "is-variable": "ScrollMarquee_is-variable__L0fUm",
        rtl: "ScrollMarquee_rtl__N5GNS",
        ltr: "ScrollMarquee_ltr__VVMw_",
        pauseOnHover: "ScrollMarquee_pauseOnHover__vuZke",
        "auto-animation": "ScrollMarquee_auto-animation__a_UwJ",
        stagger: "ScrollMarquee_stagger__RXOH5",
        column: "ScrollMarquee_column__4FGcW",
        "stagger-tops": "ScrollMarquee_stagger-tops___ZUWE",
        "text-marquee": "ScrollMarquee_text-marquee__75e5T",
        "card-marquee": "ScrollMarquee_card-marquee__WW3SA",
        "logo-marquee": "ScrollMarquee_logo-marquee__DTnCI",
        "marquee-normal": "ScrollMarquee_marquee-normal__0p9Wi",
        "circle-rotate": "ScrollMarquee_circle-rotate__EIPnl",
        "circle-rotate-small": "ScrollMarquee_circle-rotate-small__4Vx_W",
        "circle-rotate-xsmall": "ScrollMarquee_circle-rotate-xsmall__AOp_9",
        "reverse-circle-rotate-xsmall":
          "ScrollMarquee_reverse-circle-rotate-xsmall__cYE0V",
        circle: "ScrollMarquee_circle__j3HpR",
        "reverse-circle": "ScrollMarquee_reverse-circle___kex_",
        "reverse-circle-rotate": "ScrollMarquee_reverse-circle-rotate__U_p08",
        "big-circle": "ScrollMarquee_big-circle__Hp03Z",
        spear: "ScrollMarquee_spear__9PwGw",
        navLoad: "ScrollMarquee_navLoad__HJN58",
        projectsNavLoad: "ScrollMarquee_projectsNavLoad__ne8Lt",
        dropHighlight: "ScrollMarquee_dropHighlight__t_Rj5",
        rotate: "ScrollMarquee_rotate__hAQum",
        "fade-in": "ScrollMarquee_fade-in__72GI7",
        "fade-in-up": "ScrollMarquee_fade-in-up__YDXVg",
        skewInBottom: "ScrollMarquee_skewInBottom__4_37P",
        loadInBottom: "ScrollMarquee_loadInBottom__GqvnY",
        wave: "ScrollMarquee_wave__NyW3U",
        "occasional-wave": "ScrollMarquee_occasional-wave__ml7rV",
        "rocket-takeoff": "ScrollMarquee_rocket-takeoff__xGbIF",
      };
    },
    9133: function (e) {
      e.exports = {
        "card-base": "WorkItem_card-base__sFC3_",
        "work-item-wrapper": "WorkItem_work-item-wrapper__VVOMI",
        "case-study": "WorkItem_case-study__gwQL8",
        right: "WorkItem_right__7CwWp",
        left: "WorkItem_left__Jp8Uh",
        "work-item-image": "WorkItem_work-item-image__DMXsP",
        "work-item": "WorkItem_work-item__dymU0",
        "image-right": "WorkItem_image-right__dzB1H",
        "work-item-content": "WorkItem_work-item-content__0Xb1G",
        column: "WorkItem_column__D5xpc",
        "industry-name": "WorkItem_industry-name__iOuoD",
        "list-item-pills": "WorkItem_list-item-pills__GrM3T",
        "hover-glow-wrapper": "WorkItem_hover-glow-wrapper__9W4r3",
      };
    },
    1382: function (e) {
      e.exports = {
        "card-base": "Showreel_card-base__3X1GT",
        "video-reel-section": "Showreel_video-reel-section__tnqmc",
        "video-wrapper": "Showreel_video-wrapper__nP_GM",
        "marquee-wrapper": "Showreel_marquee-wrapper__R5Axf",
        marquee: "Showreel_marquee__n_89a",
        "marquee-normal": "Showreel_marquee-normal__6VF4n",
        "circle-rotate": "Showreel_circle-rotate__Hq_zl",
        "circle-rotate-small": "Showreel_circle-rotate-small__J4wzb",
        "circle-rotate-xsmall": "Showreel_circle-rotate-xsmall__lRURH",
        "reverse-circle-rotate-xsmall":
          "Showreel_reverse-circle-rotate-xsmall__zeda_",
        circle: "Showreel_circle__ptDCK",
        "reverse-circle": "Showreel_reverse-circle__3epn2",
        "reverse-circle-rotate": "Showreel_reverse-circle-rotate__JnLCq",
        "big-circle": "Showreel_big-circle__8gJQl",
        spear: "Showreel_spear__E5ZAA",
        navLoad: "Showreel_navLoad__BCVdd",
        projectsNavLoad: "Showreel_projectsNavLoad__3bMfN",
        dropHighlight: "Showreel_dropHighlight__ZJNDi",
        rotate: "Showreel_rotate__gDxM6",
        "fade-in": "Showreel_fade-in__P64Wp",
        "fade-in-up": "Showreel_fade-in-up__p0dcT",
        skewInBottom: "Showreel_skewInBottom__hUD7d",
        loadInBottom: "Showreel_loadInBottom__gQYNN",
        wave: "Showreel_wave__2jwcP",
        "occasional-wave": "Showreel_occasional-wave__0IAHN",
        "rocket-takeoff": "Showreel_rocket-takeoff__zXjQI",
      };
    },
  },
  function (e) {
    e.O(0, [224, 846, 395, 366, 391, 249, 253, 698, 744], function () {
      return e((e.s = 2038));
    }),
      (_N_E = e.O());
  },
]);
