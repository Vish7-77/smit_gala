(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [691],
  {
    2164: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 8741)),
        Promise.resolve().then(s.bind(s, 7897)),
        Promise.resolve().then(s.bind(s, 1004)),
        Promise.resolve().then(s.bind(s, 2396)),
        Promise.resolve().then(s.bind(s, 7035)),
        Promise.resolve().then(s.bind(s, 2700)),
        Promise.resolve().then(s.bind(s, 2913)),
        Promise.resolve().then(s.t.bind(s, 1776, 23)),
        Promise.resolve().then(s.t.bind(s, 8227, 23)),
        Promise.resolve().then(s.t.bind(s, 8262, 23)),
        Promise.resolve().then(s.t.bind(s, 2713, 23)),
        Promise.resolve().then(s.t.bind(s, 6083, 23)),
        Promise.resolve().then(s.t.bind(s, 8282, 23));
    },
    2913: function (e, t, s) {
      "use strict";
      s.r(t);
      var i = s(9268),
        r = s(6006),
        n = s(6027),
        a = s(7743),
        o = s(9133),
        d = s.n(o),
        l = s(5846),
        c = s.n(l),
        u = s(9791),
        _ = s(2083),
        m = s(7305),
        h = s(8054),
        y = s(1465);
      t.default = (e) => {
        let t,
          {
            title: s,
            direction: o = "left",
            services: l,
            industry: p,
            imgUrl: v,
            link: x,
            onMouseEnter: f,
            onMouseLeave: C,
            type: b = "list",
            color: g = "blue",
          } = e,
          [w, k] = (0, r.useState)(!1),
          [j, S] = (0, r.useState)({ x: 0, y: 0 }),
          { cursorChangeHandler: I } = (0, r.useContext)(y.MouseContext),
          N = () => {
            null == C || C(), k(!1), I("", "default");
          },
          Z = (0, u.Z)(d()[o]),
          M = "";
        return (
          "left" === o
            ? (t = "is-12-mobile is-12-tablet is-4-widescreen is-3-fullhd")
            : ((t = "is-12-mobile is-12-tablet is-12-desktop is-6-widescreen"),
              (M = "image-right")),
          (0, i.jsxs)(n.E.div, {
            className: (0, u.Z)(
              "column",
              "is-12",
              d()["work-item-wrapper"],
              d()[b]
            ),
            onMouseMove: (e) => {
              S({
                x:
                  e.clientX -
                  e.currentTarget.getBoundingClientRect().left -
                  400,
                y:
                  e.clientY - e.currentTarget.getBoundingClientRect().top - 400,
              });
            },
            onMouseEnter: () => {
              null == f || f(), k(!0), I("View Work", "project");
            },
            onMouseLeave: N,
            children: [
              (0, i.jsx)("div", {
                className: (0, u.Z)(d()["hover-glow-wrapper"]),
                children: (0, i.jsx)(a.M, {
                  children:
                    w &&
                    (0, i.jsx)(n.E.div, {
                      transition: {
                        type: "spring",
                        stiffness: 250,
                        damping: 80,
                      },
                      initial: { opacity: 0 },
                      animate: { x: j.x, y: j.y, opacity: 1 },
                      exit: { opacity: 0 },
                      children: (0, i.jsx)(m.Z, { color: g }),
                    }),
                }),
              }),
              (0, i.jsx)(c(), {
                href: x,
                className: (0, u.Z)(d()["work-item-link"], Z),
                "aria-label": s,
                onClick: N,
                children: (0, i.jsxs)("div", {
                  className: (0, u.Z)(
                    d()["work-item"],
                    "columns",
                    "is-mobile",
                    "is-multiline",
                    "is-vcentered",
                    "is-variable",
                    "is-8"
                  ),
                  children: [
                    (0, i.jsx)("div", {
                      className: (0, u.Z)(
                        "column",
                        t,
                        d()["work-item-image"],
                        d()[M]
                      ),
                      children: (0, i.jsx)("img", {
                        src: v,
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className: (0, u.Z)(
                        "column",
                        d().column,
                        d()["work-item-content"]
                      ),
                      children: [
                        (0, i.jsx)(_.Z, {
                          as: "h4",
                          size: "h3",
                          style: "work-title",
                          children: s,
                        }),
                        (0, i.jsxs)("div", {
                          className: (0, u.Z)(d()["list-item-pills"]),
                          children: [
                            (0, i.jsx)("span", {
                              className: (0, u.Z)(
                                "x-small",
                                "no-margin",
                                d()["industry-name"]
                              ),
                              children: p,
                            }),
                            (0, i.jsx)("ul", {
                              className: (0, u.Z)("services-pills"),
                              children:
                                l &&
                                l.map((e, t) =>
                                  (0, i.jsx)(h.Z, { label: e }, t)
                                ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: (0, u.Z)(
                        "column",
                        "is-narrow",
                        "is-hidden-mobile",
                        d()["work-item-arrow"]
                      ),
                      children: (0, i.jsx)("img", {
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
    7035: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return m;
          },
        });
      var i = s(9268),
        r = s(6006),
        n = s(1465),
        a = s(5846),
        o = s.n(a),
        d = s(8831),
        l = s.n(d),
        c = s(9791),
        u = s(7897),
        _ = s(2083);
      function m(e) {
        let { nextTitle: t, nextUrl: s, nextImage: a } = e,
          { cursorChangeHandler: d } = (0, r.useContext)(n.MouseContext);
        return (0, i.jsx)(o(), {
          href: s,
          onMouseEnter: () => {
            d("↗", "cta");
          },
          onMouseLeave: () => {
            d("", "default");
          },
          children: (0, i.jsxs)("section", {
            className: (0, c.Z)(l()["case-study-cta"]),
            children: [
              (0, i.jsx)(u.default, {}),
              (0, i.jsx)("div", {
                className: (0, c.Z)("columns", "is-multiline"),
                children: (0, i.jsxs)("div", {
                  className: (0, c.Z)("column", "is-12"),
                  children: [
                    (0, i.jsxs)(_.Z, {
                      as: "h3",
                      size: "h1",
                      style: l().h1,
                      children: [
                        (0, i.jsx)("span", {
                          className: (0, c.Z)("h5", "serif", "subtitle"),
                          children: "Next Launch",
                        }),
                        t,
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: (0, c.Z)(l().previewImage),
                      children: (0, i.jsx)("img", {
                        src: a,
                        loading: "lazy",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
    },
    8741: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return c;
          },
        });
      var i = s(9268),
        r = s(6006),
        n = s(8045),
        a = s.n(n),
        o = s(9791),
        d = s(1465),
        l = s(2083);
      function c(e) {
        let { client: t, title: s, imgUrl: n } = e,
          { cursorChangeHandler: c } = (0, r.useContext)(d.MouseContext);
        return (0, i.jsx)("section", {
          onMouseEnter: () => {
            c("", "default");
          },
          onMouseLeave: () => {
            c("", "default");
          },
          className: (0, o.Z)(a()["case-study-hero"]),
          style: { backgroundImage: "url(".concat(n, ")") },
          children: (0, i.jsx)("div", {
            className: "columns is-multiline",
            children: (0, i.jsx)("div", {
              className: "column is-12",
              children: (0, i.jsxs)(l.Z, {
                as: "h1",
                size: "h2",
                children: [
                  (0, i.jsx)("span", {
                    className: "h5 serif subtitle ",
                    children: t,
                  }),
                  s,
                ],
              }),
            }),
          }),
        });
      }
    },
    2700: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        });
      var i = s(9268),
        r = s(6006),
        n = s(543),
        a = s.n(n),
        o = s(9791),
        d = s(1465),
        l = s(5803),
        c = s(6027);
      function u(e) {
        var t;
        let { posterUrl: s, videoUrl: n, autoPlayVideo: u } = e,
          [_, m] = (0, r.useState)(u),
          h = (0, r.useRef)(null),
          y = (0, r.useRef)(null),
          p = (0, l.Y)(y, { amount: 0.01 }),
          { cursorChangeHandler: v } = (0, r.useContext)(d.MouseContext);
        return (0, i.jsx)("section", { 
          ref: y,
          children: (0, i.jsxs)(c.E.div, {
            style: { display: "none" },
            initial: { opacity: 0 },
            animate: p ? { opacity: 1 } : { opacity: 0 },
            children: [
              p &&
                (0, i.jsx)("video", {
                  ref: h,
                  src: n,
                  style: { position: "absolute", top: 0, left: 0 },
                  width: "100%",
                  height: "100%",
                  loop: !0,
                  poster: s,
                  autoPlay: u,
                  playsInline: !0,
                  muted: !0,
                }),
              (0, i.jsx)("video", {
                src: n,
                className: (0, o.Z)(a()["video-placeholder"]),
                width: "100%",
                height: "100%",
                poster: s,
                paused: !0,
                muted: !0,
              }),
              (0, i.jsx)("div", {
                className: (0, o.Z)(a()["play-button"], a().pause),
                children: (
                  null === (t = h.current) || void 0 === t ? void 0 : t.paused
                )
                  ? (0, i.jsx)("svg", {
                      width: "100%",
                      height: "100%",
                      viewBox: "0 0 100 100",
                      style: { marginLeft: ".5rem" },
                      children: (0, i.jsx)("polygon", {
                        points: "30,25 30,75 70,50",
                      }),
                    })
                  : (0, i.jsxs)("svg", {
                      width: "100%",
                      height: "100%",
                      viewBox: "0 0 100 100",
                      children: [
                        (0, i.jsx)("rect", {
                          x: "30",
                          y: "25",
                          width: "10",
                          height: "50",
                        }),
                        (0, i.jsx)("rect", {
                          x: "60",
                          y: "25",
                          width: "10",
                          height: "50",
                        }),
                      ],
                    }),
              }),
            ],
          }),
        });
      }
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
    8831: function (e) {
      e.exports = {
        "card-base": "CaseStudyCTA_card-base__oMS76",
        "case-study-cta": "CaseStudyCTA_case-study-cta___yjfD",
        h1: "CaseStudyCTA_h1__Kbv1K",
        previewImage: "CaseStudyCTA_previewImage__55_iM",
      };
    },
    6083: function (e) {
      e.exports = {
        "card-base": "CaseStudyContentBlock_card-base__JQSUA",
        "case-study-content-block":
          "CaseStudyContentBlock_case-study-content-block__iPfb7",
        white: "CaseStudyContentBlock_white__i_rIr",
        "effect-spear-blue": "CaseStudyContentBlock_effect-spear-blue__C_hGE",
        h6: "CaseStudyContentBlock_h6__mJvdl",
      };
    },
    8262: function (e) {
      e.exports = {
        "card-base": "CaseStudyForm_card-base__Y7Kb8",
        "case-study-form": "CaseStudyForm_case-study-form__kjNSM",
      };
    },
    2713: function (e) {
      e.exports = {
        "card-base": "CaseStudyFullWidthImg_card-base__M8HRo",
        "case-study-full-width-img":
          "CaseStudyFullWidthImg_case-study-full-width-img__O_9vB",
      };
    },
    8045: function (e) {
      e.exports = {
        "card-base": "CaseStudyHero_card-base__Lz0GH",
        "case-study-hero": "CaseStudyHero_case-study-hero__d1HJ_",
      };
    },
    8282: function (e) {
      e.exports = {
        "card-base": "CaseStudyImageGrid_card-base__7PIHY",
        "case-study-image-grid":
          "CaseStudyImageGrid_case-study-image-grid__PRVhq",
        white: "CaseStudyImageGrid_white__kf24H",
        bottom: "CaseStudyImageGrid_bottom__jUMWV",
      };
    },
    1776: function (e) {
      e.exports = {
        "card-base": "CaseStudyIntro_card-base__gf4NF",
        "case-study-intro": "CaseStudyIntro_case-study-intro__T8hx_",
        "meta-wrapper": "CaseStudyIntro_meta-wrapper__9UYyq",
        "client-meta": "CaseStudyIntro_client-meta__d3TTm",
        "services-list": "CaseStudyIntro_services-list__SQXTr",
        "intro-content-wrapper": "CaseStudyIntro_intro-content-wrapper__GDfvm",
        "intro-main-content": "CaseStudyIntro_intro-main-content__GCThW",
        kicker: "CaseStudyIntro_kicker__7pHez",
        stylized: "CaseStudyIntro_stylized__Oqsuo",
        "intro-content": "CaseStudyIntro_intro-content__Em4fd",
      };
    },
    543: function (e) {
      e.exports = {
        "card-base": "CaseStudyVideo_card-base__zYNZh",
        "case-study-video": "CaseStudyVideo_case-study-video__RfN7_",
        "play-button": "CaseStudyVideo_play-button__Y7__5",
        pause: "CaseStudyVideo_pause__5L02f",
        "video-placeholder": "CaseStudyVideo_video-placeholder__h5975",
      };
    },
  },
  function (e) {
    e.O(0, [846, 395, 366, 249, 825, 253, 698, 744], function () {
      return e((e.s = 2164));
    }),
      (_N_E = e.O());
  },
]);
