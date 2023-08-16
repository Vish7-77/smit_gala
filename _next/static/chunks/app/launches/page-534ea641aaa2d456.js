(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [460],
  {
    5257: function (e, i, t) {
      Promise.resolve().then(t.bind(t, 3375));
    },
    1465: function (e, i, t) {
      "use strict";
      t.r(i),
        t.d(i, {
          MouseContext: function () {
            return a;
          },
        });
      var l = t(9268),
        r = t(6006);
      let a = (0, r.createContext)({
        cursorText: "",
        cursorVariant: "default",
        cursorChangeHandler: (e, i) => {},
      });
      i.default = (e) => {
        let [i, t] = (0, r.useState)(""),
          [n, s] = (0, r.useState)("default");
        return (0, l.jsx)(a.Provider, {
          value: {
            cursorText: i,
            cursorVariant: n,
            cursorChangeHandler: (e, i) => {
              t(e), s(i);
            },
          },
          children: e.children,
        });
      };
    },
    7305: function (e, i, t) {
      "use strict";
      t.d(i, {
        Z: function () {
          return s;
        },
      });
      var l = t(9268);
      t(6006);
      var r = t(9050),
        a = t.n(r),
        n = t(9791);
      function s(e) {
        let { color: i = "", size: t = "large" } = e;
        return (0, l.jsx)("div", {
          className: (0, n.Z)(a()["hover-glow"], a()[i], a()[t]),
        });
      }
    },
    8054: function (e, i, t) {
      "use strict";
      t.d(i, {
        Z: function () {
          return n;
        },
      });
      var l = t(9268);
      t(6006);
      var r = t(4584),
        a = t.n(r);
      function n(e) {
        let { label: i } = e;
        return (0, l.jsx)("li", { className: a().pill, children: i });
      }
    },
    2083: function (e, i, t) {
      "use strict";
      var l = t(9268);
      t(6006);
      var r = t(8227),
        a = t.n(r),
        n = t(9791);
      i.Z = (e) => {
        let { as: i = "h1", size: t = "h1", style: r = "", children: s } = e,
          o = (0, n.Z)(a().heading, a()[t], r);
        return (0, l.jsx)(i, { className: o, children: s });
      };
    },
    2913: function (e, i, t) {
      "use strict";
      t.r(i);
      var l = t(9268),
        r = t(6006),
        a = t(6027),
        n = t(7743),
        s = t(9133),
        o = t.n(s),
        d = t(5846),
        c = t.n(d),
        u = t(9791),
        _ = t(2083),
        m = t(7305),
        v = t(8054),
        p = t(1465);
      i.default = (e) => {
        let i,
          {
            title: t,
            direction: s = "left",
            services: d,
            industry: h,
            imgUrl: g,
            link: w,
            onMouseEnter: b,
            onMouseLeave: f,
            type: x = "list",
            color: y = "blue",
          } = e,
          [j, k] = (0, r.useState)(!1),
          [H, N] = (0, r.useState)({ x: 0, y: 0 }),
          { cursorChangeHandler: E } = (0, r.useContext)(p.MouseContext),
          C = () => {
            null == f || f(), k(!1), E("", "default");
          },
          Z = (0, u.Z)(o()[s]),
          I = "";
        return (
          "left" === s
            ? (i = "is-12-mobile is-12-tablet is-4-widescreen is-3-fullhd")
            : ((i = "is-12-mobile is-12-tablet is-12-desktop is-6-widescreen"),
              (I = "image-right")),
          (0, l.jsxs)(a.E.div, {
            className: (0, u.Z)(
              "column",
              "is-12",
              o()["work-item-wrapper"],
              o()[x]
            ),
            onMouseMove: (e) => {
              N({
                x:
                  e.clientX -
                  e.currentTarget.getBoundingClientRect().left -
                  400,
                y:
                  e.clientY - e.currentTarget.getBoundingClientRect().top - 400,
              });
            },
            onMouseEnter: () => {
              null == b || b(), k(!0), E("View Work", "project");
            },
            onMouseLeave: C,
            children: [
              (0, l.jsx)("div", {
                className: (0, u.Z)(o()["hover-glow-wrapper"]),
                children: (0, l.jsx)(n.M, {
                  children:
                    j &&
                    (0, l.jsx)(a.E.div, {
                      transition: {
                        type: "spring",
                        stiffness: 250,
                        damping: 80,
                      },
                      initial: { opacity: 0 },
                      animate: { x: H.x, y: H.y, opacity: 1 },
                      exit: { opacity: 0 },
                      children: (0, l.jsx)(m.Z, { color: y }),
                    }),
                }),
              }),
              (0, l.jsx)(c(), {
                href: w,
                className: (0, u.Z)(o()["work-item-link"], Z),
                "aria-label": t,
                onClick: C,
                children: (0, l.jsxs)("div", {
                  className: (0, u.Z)(
                    o()["work-item"],
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
                        i,
                        o()["work-item-image"],
                        o()[I]
                      ),
                      children: (0, l.jsx)("img", {
                        src: g,
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className: (0, u.Z)(
                        "column",
                        o().column,
                        o()["work-item-content"]
                      ),
                      children: [
                        (0, l.jsx)(_.Z, {
                          as: "h4",
                          size: "h3",
                          style: "work-title",
                          children: t,
                        }),
                        (0, l.jsxs)("div", {
                          className: (0, u.Z)(o()["list-item-pills"]),
                          children: [
                            (0, l.jsx)("span", {
                              className: (0, u.Z)(
                                "x-small",
                                "no-margin",
                                o()["industry-name"]
                              ),
                              children: h,
                            }),
                            (0, l.jsx)("ul", {
                              className: (0, u.Z)("services-pills"),
                              children:
                                d &&
                                d.map((e, i) =>
                                  (0, l.jsx)(v.Z, { label: e }, i)
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
                        o()["work-item-arrow"]
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
    3375: function (e, i, t) {
      "use strict";
      t.r(i),
        t.d(i, {
          default: function () {
            return h;
          },
        });
      var l = t(9268),
        r = t(6006),
        a = t(2913),
        n = t(6027),
        s = t(446),
        o = t.n(s),
        d = t(9791),
        c = (e) => {
          let {
              options: i,
              classes: t,
              defValue: a = "",
              label: s,
              onSelect: c,
              reset: u = !1,
            } = e,
            _ = [{ label: s, value: a }, ...i],
            [m, v] = (0, r.useState)(!1),
            [p, h] = (0, r.useState)(_[0]),
            g = (0, r.useRef)(void 0),
            w = (0, r.useRef)(null);
          (0, r.useEffect)(() => {
            u !== g.current && (h(_[0]), v(!1)), (g.current = u);
          }, [u]);
          let b = (e) => {
              var i;
              h(e),
                c(e.value),
                v(!1),
                null === (i = window.document.scrollingElement) ||
                  void 0 === i ||
                  i.scrollTo(0, 0);
            },
            f = (e) => {
              w.current && !w.current.contains(e.target) && v(!1);
            };
          (0, r.useEffect)(
            () => (
              document.addEventListener("mousedown", f),
              () => {
                document.removeEventListener("mousedown", f);
              }
            ),
            []
          );
          let x = { hidden: { opacity: 0 }, show: { opacity: 1 } };
          return (0, l.jsxs)("div", {
            className: (0, d.Z)(o().dropdown, o()[t]),
            ref: w,
            children: [
              (0, l.jsx)("button", {
                className: (0, d.Z)(
                  o()["dropdown-toggle"],
                  o()[m ? "is-open" : ""]
                ),
                onClick: () => {
                  v(!m);
                },
                children: p.label,
              }),
              m &&
                (0, l.jsx)(n.E.ul, {
                  className: (0, d.Z)(o()["dropdown-menu"]),
                  variants: {
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: { delayChildren: 0.2, staggerChildren: 0.5 },
                    },
                  },
                  initial: "hidden",
                  animate: "show",
                  children: _.map((e) =>
                    (0, l.jsx)(
                      n.E.li,
                      {
                        className: (0, d.Z)(
                          o()["dropdown-option"],
                          o()[e.value === p.value ? "active" : ""]
                        ),
                        variants: x,
                        whileHover: { opacity: 0.65 },
                        initial: "hidden",
                        animate: "show",
                        children: (0, l.jsx)("button", {
                          onClick: () => b(e),
                          children: e.label,
                        }),
                      },
                      e.value
                    )
                  ),
                }),
            ],
          });
        },
        u = t(7442),
        _ = t.n(u),
        m = (e) => {
          let {
              options: i,
              classes: t,
              defValue: a = "",
              label: s,
              onSelect: o,
              reset: c = !1,
            } = e,
            u = [{ label: s, value: a }, ...i],
            [m, v] = (0, r.useState)(!1),
            [p, h] = (0, r.useState)(u[0]),
            g = (0, r.useRef)(void 0);
          (0, r.useEffect)(() => {
            c !== g.current && (h(u[0]), v(!1)), (g.current = c);
          }, [c]);
          let w = (e) => {
              var i;
              h(e),
                o(e.value),
                null === (i = window.document.scrollingElement) ||
                  void 0 === i ||
                  i.scrollTo(0, 0);
            },
            b = { hidden: { opacity: 0 }, show: { opacity: 1 } };
          return (0, l.jsx)("div", {
            className: (0, d.Z)(_()["filter-list-wrapper"], _()[t]),
            children: (0, l.jsx)(n.E.ul, {
              className: (0, d.Z)(_()["filter-list"]),
              variants: {
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { delayChildren: 0.2, staggerChildren: 0.5 },
                },
              },
              initial: "hidden",
              animate: "show",
              children: u.map((e) =>
                (0, l.jsx)(
                  n.E.li,
                  {
                    className: (0, d.Z)(
                      _()["dropdown-option"],
                      _()[e.value === p.value ? "active" : ""]
                    ),
                    variants: b,
                    whileHover: { opacity: 0.65 },
                    initial: "hidden",
                    animate: "show",
                    children: (0, l.jsx)("button", {
                      onClick: () => w(e),
                      children: e.label,
                    }),
                  },
                  e.value
                )
              ),
            }),
          });
        },
        v = t(2759),
        p = t(7743);
      function h(e) {
        let { caseStudyData: i, industries: t, services: s } = e,
          o = t.data.map((e) => ({
            value: e.attributes.slug,
            label: e.attributes.name,
          })),
          d = s.data.map((e) => ({
            value: e.attributes.slug,
            label: e.attributes.name,
          })),
          [u, _] = (0, r.useState)(!1),
          [h, g] = (0, r.useState)(!1),
          [w, b] = (0, r.useState)(null),
          [f, x] = (0, r.useState)(null),
          [y, j] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
          let e = () => {
            j(!1);
          };
          return (
            window.addEventListener("click", e),
            () => window.removeEventListener("click", e)
          );
        }, []);
        let k = (e) => {
            j(!1), x(e), b(null), g(!h);
          },
          H = i.data.filter(
            (e) =>
              (!w || e.attributes.industry.data.attributes.slug === w) &&
              (!f ||
                !!e.attributes.service_types.data.some(
                  (e) => e.attributes.slug === f
                ))
          ),
          N = {
            hidden: { opacity: 0, y: 200 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: v.Vv },
            },
            exit: { opacity: 0, y: -200 },
          };
        return (0, l.jsx)("main", {
          className: "page projects",
          children: (0, l.jsxs)("section", {
            className: "projects-listing-section",
            children: [
              (0, l.jsxs)(n.E.div, {
                className: "projects-background",
                transition: { duration: 1.5, ease: v.Vv, delay: 0.5 },
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                children: [
                  
                  (0, l.jsx)(n.E.img, {
                    src: "/images/home/home-blob-green.webp",
                    className: "home-blob-green",
                    transition: { delay: 1.2, duration: 1.5 },
                    initial: { opacity: 0 },
                    animate: { opacity: 0.5 },
                  }),
                
                  (0, l.jsx)(n.E.img, {
                    src: "/images/home/home-blob-pink.webp",
                    className: "home-blob-pink",
                    transition: { delay: 4.5, duration: 3.5 },
                    initial: { opacity: 0 },
                    animate: { opacity: 0.125 },
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className: "projects-filter-wrapper",
                children: (0, l.jsxs)("div", {
                  className: "projects-filter-container",
                  children: [
                    (0, l.jsx)(c, {
                      options: o,
                      onSelect: (e) => {
                        j(!1), b(e), x(null), _(!u);
                      },
                      reset: h,
                      defValue: "",
                      label: "All Industries",
                      classes: "project-filter industry-wrapper",
                    }),
                    (0, l.jsx)("div", {
                      className: "is-hidden-desktop is-fill-mobile",
                      children: (0, l.jsx)(c, {
                        options: d,
                        onSelect: k,
                        reset: u,
                        defValue: "",
                        label: "All Services",
                        classes: "project-filter industry-wrapper",
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className: "is-hidden-touch overflow-x-scroll",
                      children: (0, l.jsx)(m, {
                        options: d,
                        onSelect: k,
                        reset: u,
                        defValue: "",
                        label: "All Services",
                        classes: "project-filter services-wrapper",
                      }),
                    }),
                  ],
                }),
              }),
              (0, l.jsx)(n.E.div, {
                variants: {
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { staggerChildren: 0.25 } },
                },
                initial: "hidden",
                animate: "show",
                exit: "exit",
                className: "projects-listing-wrapper columns is-multiline",
                children:
                  i &&
                  H.map((e) => {
                    var i, t, r, s, o, d, c, u, _, m, v, h, g, w, b, f, x, y, j;
                    return (0, l.jsx)(
                      p.M,
                      {
                        children: (0, l.jsx)(
                          n.E.div,
                          {
                            variants: N,
                            style: { width: "100%" },
                            className: "work-item-listing-item",
                            children: (0, l.jsx)(
                              a.default,
                              {
                                title:
                                  "Social media creation"
                                    ? void 0
                                    : null === (i = e.attributes) ||
                                      void 0 === i
                                    ? void 0
                                    : "Social media creation",
                              
                                
                              },
                              e.id
                            ),
                          },
                          e.id
                        ),
                      },
                      e.id
                    );
                  }),
              }),
            ],
          }),
        });
      }
    },
    9050: function (e) {
      e.exports = {
        "card-base": "HoverGlow_card-base__PA7P_",
        "hover-glow": "HoverGlow_hover-glow__4_nou",
        small: "HoverGlow_small__WONu8",
        medium: "HoverGlow_medium__Ii886",
        large: "HoverGlow_large__1Kru2",
        purple: "HoverGlow_purple__HIxCG",
        green: "HoverGlow_green__aQeK3",
        electric: "HoverGlow_electric__JIDRQ",
        turquoise: "HoverGlow_turquoise__uyug6",
        navy: "HoverGlow_navy__7XR9R",
        "dark-navy": "HoverGlow_dark-navy__4Hzi_",
        "royal-blue": "HoverGlow_royal-blue___sSAD",
      };
    },
    4584: function (e) {
      e.exports = {
        "card-base": "Pill_card-base__Fl02N",
        pill: "Pill_pill__PHTMr",
      };
    },
    8227: function (e) {
      e.exports = {
        "card-base": "Heading_card-base__ik88o",
        heading: "Heading_heading__UtA1b",
        allcaps: "Heading_allcaps__JoBvC",
        h1: "Heading_h1__PHJ4y",
        subtitle: "Heading_subtitle__YsrOL",
        nondisplay: "Heading_nondisplay__Tz8O6",
        h2: "Heading_h2__UAVm0",
        h3: "Heading_h3__kqkLm",
        h4: "Heading_h4__oEOy2",
        h5: "Heading_h5__pjEAC",
        h6: "Heading_h6__zGof_",
        lighter: "Heading_lighter__mKz2_",
        regular: "Heading_regular__8i0FH",
        bold: "Heading_bold__kv4gf",
        bolder: "Heading_bolder__OotsX",
        "no-top-margin": "Heading_no-top-margin__usYE5",
        "no-bottom-margin": "Heading_no-bottom-margin__IMyMr",
        magenta: "Heading_magenta__WQPif",
      };
    },
    446: function (e) {
      e.exports = {
        "card-base": "Dropdown_card-base__QbBpr",
        dropdown: "Dropdown_dropdown__EMCw_",
        "dropdown-toggle": "Dropdown_dropdown-toggle__kUqpi",
        "is-open": "Dropdown_is-open__kBhfr",
        "dropdown-menu": "Dropdown_dropdown-menu___CNym",
        active: "Dropdown_active__GJTAA",
      };
    },
    7442: function (e) {
      e.exports = {
        "card-base": "FilterList_card-base__QeMVL",
        "filter-list-wrapper": "FilterList_filter-list-wrapper__ai_3O",
        "filter-list": "FilterList_filter-list__Tm_HU",
        active: "FilterList_active__z3wFc",
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
  },
  function (e) {
    e.O(0, [846, 395, 253, 698, 744], function () {
      return e((e.s = 5257));
    }),
      (_N_E = e.O());
  },
]);
