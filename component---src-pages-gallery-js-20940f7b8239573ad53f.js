(window.webpackJsonp = window.webpackJsonp || []).push([
    [5],
    {
        170: function(e, t, a) {
            'use strict';
            a.r(t);
            var r = a(0),
                n = a.n(r),
                i = a(172),
                s = a(180),
                o = (a(181), a(178)),
                l = a(62),
                c = a(173),
                d = (a(211), a(40)),
                u = a.n(d),
                f = a(8),
                p = a.n(f),
                g = a(216),
                m = a.n(g),
                h = a(191),
                b = a(21),
                y = (function(e) {
                    function t(t) {
                        var a;
                        return (
                            ((a = e.call(this, t) || this).state = {
                                textBoxes: [],
                                captures: b.get('captures'),
                            }),
                            a.state.captures &&
                                a.state.captures.length &&
                                (a.state.captures = a.state.captures.reverse()),
                            (a.original = n.a.createRef()),
                            (a.imgLoad = a.imgLoad.bind(u()(a))),
                            a
                        );
                    }
                    p()(t, e);
                    var a = t.prototype;
                    return (
                        (a.imgLoad = function() {
                            var e = this;
                            this.setState({ textBoxes: [] });
                            var t = [];
                            this.state.captures[
                                this.props.id
                            ].recognitionResult.lines.forEach(function(a) {
                                var r = a.boundingBox,
                                    i = e.original.current.getBoundingClientRect();
                                t.push({
                                    str: a.text,
                                    el: n.a.createElement(h.a, {
                                        key: a.text + Math.random(),
                                        x: r[6] + i.x,
                                        y: r[7] + i.y - Math.abs(r[1] - r[7]),
                                        text: a.text,
                                        size: Math.abs(r[1] - r[7]),
                                    }),
                                });
                            }),
                                this.setState({ textBoxes: t });
                        }),
                        (a.render = function() {
                            var e = this;
                            return this.props.id
                                ? n.a.createElement(
                                      n.a.Fragment,
                                      null,
                                      this.state.textBoxes.map(function(e) {
                                          return e.el;
                                      }),
                                      n.a.createElement(
                                          'div',
                                          { className: m.a.single },
                                          n.a.createElement('img', {
                                              ref: this.original,
                                              src: this.state.captures[
                                                  this.props.id
                                              ].originalImage,
                                              onLoad: this.imgLoad,
                                          })
                                      ),
                                      n.a.createElement(
                                          'div',
                                          { className: m.a.controls },
                                          n.a.createElement(
                                              'div',
                                              null,
                                              n.a.createElement(
                                                  'button',
                                                  {
                                                      onClick: function() {
                                                          e.props.id > 0 &&
                                                              Object(i.c)(
                                                                  '/gallery/' +
                                                                      (Number(
                                                                          e
                                                                              .props
                                                                              .id
                                                                      ) -
                                                                          1)
                                                              );
                                                      },
                                                  },
                                                  n.a.createElement('i', {
                                                      className:
                                                          'fas fa-arrow-left',
                                                  })
                                              )
                                          ),
                                          n.a.createElement(
                                              'div',
                                              null,
                                              n.a.createElement(
                                                  'button',
                                                  {
                                                      onClick: function() {
                                                          Object(i.c)(
                                                              '/gallery'
                                                          );
                                                      },
                                                  },
                                                  n.a.createElement('i', {
                                                      className:
                                                          'fas fa-images',
                                                  })
                                              )
                                          ),
                                          n.a.createElement(
                                              'div',
                                              null,
                                              n.a.createElement(
                                                  'button',
                                                  {
                                                      onClick: function() {
                                                          e.props.id <
                                                              e.state.captures
                                                                  .length -
                                                                  1 &&
                                                              Object(i.c)(
                                                                  '/gallery/' +
                                                                      (Number(
                                                                          e
                                                                              .props
                                                                              .id
                                                                      ) +
                                                                          1)
                                                              );
                                                      },
                                                  },
                                                  n.a.createElement('i', {
                                                      className:
                                                          'fas fa-arrow-right',
                                                  })
                                              )
                                          )
                                      )
                                  )
                                : n.a.createElement(
                                      'div',
                                      { className: m.a.gallery },
                                      this.state.captures
                                          ? n.a.createElement(
                                                n.a.Fragment,
                                                null,
                                                this.state.captures.map(
                                                    function(e, t) {
                                                        return n.a.createElement(
                                                            i.a,
                                                            {
                                                                to:
                                                                    '/gallery/' +
                                                                    t,
                                                                key:
                                                                    'capture-' +
                                                                    t,
                                                            },
                                                            n.a.createElement(
                                                                'img',
                                                                {
                                                                    src:
                                                                        e.renderImage,
                                                                }
                                                            )
                                                        );
                                                    }
                                                ),
                                                n.a.createElement(
                                                    'div',
                                                    { className: m.a.controls },
                                                    n.a.createElement(
                                                        'button',
                                                        {
                                                            onClick: function() {
                                                                b.clearAll(),
                                                                    window.location.reload();
                                                            },
                                                        },
                                                        n.a.createElement(
                                                            'h3',
                                                            null,
                                                            'Clear Gallery'
                                                        )
                                                    )
                                                )
                                            )
                                          : n.a.createElement(
                                                'h3',
                                                null,
                                                'No Captures here...'
                                            )
                                  );
                        }),
                        t
                    );
                })(n.a.Component);
            t.default = Object(l.b)(
                function(e) {
                    return { bgColor: e.bgColor };
                },
                function(e) {
                    return {
                        changeBG: function(t) {
                            return e(Object(c.a)(t));
                        },
                    };
                }
            )(function(e) {
                e.changeBG('white');
                var t = e.location.pathname,
                    a = t.substring(t.lastIndexOf('/') + 1);
                return n.a.createElement(
                    s.a,
                    null,
                    n.a.createElement(o.a, { title: 'Home' }),
                    n.a.createElement(
                        'h1',
                        {
                            style: {
                                textAlign: 'center',
                                margin: '50px 10px 25px',
                            },
                        },
                        'Gallery'
                    ),
                    n.a.createElement(y, { id: isNaN(a) ? null : a })
                );
            });
        },
        172: function(e, t, a) {
            'use strict';
            a.d(t, 'b', function() {
                return d;
            });
            var r = a(0),
                n = a.n(r),
                i = a(1),
                s = a.n(i),
                o = a(39),
                l = a.n(o);
            a.d(t, 'a', function() {
                return l.a;
            }),
                a.d(t, 'c', function() {
                    return o.navigate;
                });
            a(174);
            var c = n.a.createContext({}),
                d = function(e) {
                    return n.a.createElement(c.Consumer, null, function(t) {
                        return e.data || (t[e.query] && t[e.query].data)
                            ? (e.render || e.children)(
                                  e.data ? e.data.data : t[e.query].data
                              )
                            : n.a.createElement(
                                  'div',
                                  null,
                                  'Loading (StaticQuery)'
                              );
                    });
                };
            d.propTypes = {
                data: s.a.object,
                query: s.a.string.isRequired,
                render: s.a.func,
                children: s.a.func,
            };
        },
        173: function(e, t, a) {
            'use strict';
            a.d(t, 'a', function() {
                return i;
            }),
                a.d(t, 'b', function() {
                    return s;
                }),
                a.d(t, 'c', function() {
                    return o;
                }),
                a.d(t, 'd', function() {
                    return l;
                });
            var r = a(23),
                n = a(21);
            function i(e) {
                return n.set('bgColor', e), { type: r.a, bgColor: e };
            }
            function s(e) {
                return (
                    n.set('readerBgColor', e), { type: r.b, readerBgColor: e }
                );
            }
            function o(e) {
                return n.set('readerColor', e), { type: r.c, readerColor: e };
            }
            function l(e) {
                return n.set('readerFont', e), { type: r.d, readerFont: e };
            }
        },
        174: function(e, t, a) {
            var r;
            e.exports = ((r = a(176)) && r.default) || r;
        },
        175: function(e) {
            e.exports = {
                data: { site: { siteMetadata: { title: 'EasyRead' } } },
            };
        },
        176: function(e, t, a) {
            'use strict';
            a.r(t);
            a(29);
            var r = a(0),
                n = a.n(r),
                i = a(1),
                s = a.n(i),
                o = a(63),
                l = a(3),
                c = function(e) {
                    var t = e.location,
                        a = l.default.getResourcesForPathnameSync(t.pathname);
                    return a
                        ? n.a.createElement(
                              o.a,
                              Object.assign(
                                  { location: t, pageResources: a },
                                  a.json
                              )
                          )
                        : null;
                };
            (c.propTypes = {
                location: s.a.shape({ pathname: s.a.string.isRequired })
                    .isRequired,
            }),
                (t.default = c);
        },
        177: function(e, t, a) {
            e.exports =
                a.p +
                'static/reading-profile-667bb35fe9e05f79fe62d06332339c07.png';
        },
        178: function(e, t, a) {
            'use strict';
            var r = a(179),
                n = a(0),
                i = a.n(n),
                s = a(1),
                o = a.n(s),
                l = a(188),
                c = a.n(l);
            function d(e) {
                var t = e.description,
                    a = e.lang,
                    n = e.meta,
                    s = e.title,
                    o = r.data.site,
                    l = t || o.siteMetadata.description;
                return i.a.createElement(
                    c.a,
                    {
                        htmlAttributes: { lang: a },
                        title: s,
                        titleTemplate: '%s | ' + o.siteMetadata.title,
                        meta: [
                            { name: 'description', content: l },
                            { property: 'og:title', content: s },
                            { property: 'og:description', content: l },
                            { property: 'og:type', content: 'website' },
                            { name: 'twitter:card', content: 'summary' },
                            {
                                name: 'twitter:creator',
                                content: o.siteMetadata.author,
                            },
                            { name: 'twitter:title', content: s },
                            { name: 'twitter:description', content: l },
                        ].concat(n),
                    },
                    i.a.createElement('link', {
                        rel: 'stylesheet',
                        href:
                            'https://use.fontawesome.com/releases/v5.8.2/css/all.css',
                        integrity:
                            'sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay',
                        crossorigin: 'anonymous',
                    })
                );
            }
            (d.defaultProps = { lang: 'en', meta: [], description: '' }),
                (d.propTypes = {
                    description: o.a.string,
                    lang: o.a.string,
                    meta: o.a.arrayOf(o.a.object),
                    title: o.a.string.isRequired,
                }),
                (t.a = d);
        },
        179: function(e) {
            e.exports = {
                data: {
                    site: {
                        siteMetadata: {
                            title: 'EasyRead',
                            description: 'Make reading easier',
                            author: '@squishy123',
                        },
                    },
                },
            };
        },
        180: function(e, t, a) {
            'use strict';
            var r = a(175),
                n = a(0),
                i = a.n(n),
                s = a(1),
                o = a.n(s),
                l = a(172),
                c = (a(184), a(40)),
                d = a.n(c),
                u = a(8),
                f = a.n(u),
                p = a(62),
                g = a(173),
                m = a(185),
                h = a.n(m),
                b = (a(186),
                (function(e) {
                    function t(t) {
                        var a;
                        return (
                            ((a = e.call(this, t) || this).state = {
                                isCollapse: !1,
                            }),
                            (a.toggleNav = a.toggleNav.bind(d()(a))),
                            a
                        );
                    }
                    f()(t, e);
                    var r = t.prototype;
                    return (
                        (r.toggleNav = function() {
                            this.setState({
                                isCollapse: !this.state.isCollapse,
                            });
                        }),
                        (r.render = function() {
                            var e = this;
                            return i.a.createElement(
                                i.a.Fragment,
                                null,
                                i.a.createElement(
                                    'div',
                                    {
                                        className:
                                            h.a.menuToggle +
                                            ' hamburger hamburger--spin ' +
                                            (this.state.isCollapse
                                                ? 'is-active'
                                                : ''),
                                        onClick: this.toggleNav,
                                        type: 'button',
                                    },
                                    i.a.createElement(
                                        'span',
                                        { className: 'hamburger-box' },
                                        i.a.createElement('span', {
                                            className:
                                                'hamburger-inner ' +
                                                ('black' == this.props.bgColor
                                                    ? h.a.dark
                                                    : h.a.light),
                                        })
                                    )
                                ),
                                i.a.createElement(
                                    'div',
                                    {
                                        className:
                                            h.a.navContainer +
                                            ' ' +
                                            (this.state.isCollapse
                                                ? h.a.isActive
                                                : ''),
                                    },
                                    i.a.createElement(
                                        'div',
                                        { className: h.a.nav },
                                        i.a.createElement(
                                            'div',
                                            { className: h.a.profile },
                                            i.a.createElement('img', {
                                                src: a(177),
                                            }),
                                            i.a.createElement(
                                                'h1',
                                                null,
                                                'Easyread'
                                            ),
                                            i.a.createElement(
                                                'p',
                                                null,
                                                'Welcome back!'
                                            )
                                        ),
                                        i.a.createElement('hr', null),
                                        i.a.createElement(
                                            'ul',
                                            { className: h.a.pages },
                                            [
                                                {
                                                    name: 'Clipboard',
                                                    url: '/clipboard',
                                                },
                                                {
                                                    name: 'Gallery',
                                                    url: '/gallery',
                                                },
                                                {
                                                    name: 'Settings',
                                                    url: '/settings',
                                                },
                                                {
                                                    name: 'Progress Tracker',
                                                    url: '/tracker',
                                                },
                                            ].map(function(t) {
                                                return i.a.createElement(
                                                    'li',
                                                    {
                                                        key: t.url,
                                                        onClick: e.toggleNav,
                                                    },
                                                    i.a.createElement(
                                                        l.a,
                                                        {
                                                            className: h.a.page,
                                                            activeClassName:
                                                                h.a.pageActive,
                                                            to: t.url,
                                                        },
                                                        i.a.createElement('i', {
                                                            className:
                                                                'fas fa-heart fa-2x',
                                                        }),
                                                        i.a.createElement(
                                                            'p',
                                                            null,
                                                            t.name
                                                        )
                                                    )
                                                );
                                            })
                                        )
                                    )
                                )
                            );
                        }),
                        t
                    );
                })(i.a.Component)),
                y = Object(p.b)(
                    function(e) {
                        return { bgColor: e.bgColor };
                    },
                    function(e) {
                        return {
                            changeBG: function(t) {
                                return e(Object(g.a)(t));
                            },
                        };
                    }
                )(b),
                v = (a(187),
                function(e) {
                    var t = e.bgColor,
                        a = (e.changeBG, e.children);
                    return i.a.createElement(l.b, {
                        query: '2924840780',
                        render: function(e) {
                            return i.a.createElement(
                                i.a.Fragment,
                                null,
                                i.a.createElement(y, null),
                                i.a.createElement(
                                    'div',
                                    {
                                        className: 'main',
                                        style: { backgroundColor: t },
                                    },
                                    i.a.createElement('main', null, a),
                                    i.a.createElement('footer', null)
                                )
                            );
                        },
                        data: r,
                    });
                });
            v.propTypes = { children: o.a.node.isRequired };
            t.a = Object(p.b)(
                function(e) {
                    return { bgColor: e.bgColor };
                },
                function(e) {
                    return {
                        changeBG: function(t) {
                            return e(Object(g.a)(t));
                        },
                    };
                }
            )(v);
        },
        181: function(e, t, a) {
            'use strict';
            a(182), a(0), a(172), a(183);
        },
        182: function(e) {
            e.exports = {
                data: {
                    placeholderImage: {
                        childImageSharp: {
                            fluid: {
                                base64:
                                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==',
                                aspectRatio: 1,
                                src:
                                    '/easyread/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png',
                                srcSet:
                                    '/easyread/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/easyread/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/easyread/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/easyread/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/easyread/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/easyread/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w',
                                sizes: '(max-width: 300px) 100vw, 300px',
                            },
                        },
                    },
                },
            };
        },
        183: function(e, t, a) {
            'use strict';
            var r = a(9);
            (t.__esModule = !0), (t.default = void 0);
            var n,
                i = r(a(8)),
                s = r(a(40)),
                o = r(a(84)),
                l = r(a(85)),
                c = r(a(0)),
                d = r(a(1)),
                u = function(e) {
                    var t = (0, l.default)({}, e);
                    return (
                        t.resolutions &&
                            ((t.fixed = t.resolutions), delete t.resolutions),
                        t.sizes && ((t.fluid = t.sizes), delete t.sizes),
                        t
                    );
                },
                f = Object.create({}),
                p = function(e) {
                    var t = u(e),
                        a = t.fluid ? t.fluid.src : t.fixed.src;
                    return f[a] || !1;
                },
                g = new WeakMap();
            var m = function(e, t) {
                    var a = (void 0 === n &&
                        'undefined' != typeof window &&
                        window.IntersectionObserver &&
                        (n = new window.IntersectionObserver(
                            function(e) {
                                e.forEach(function(e) {
                                    if (g.has(e.target)) {
                                        var t = g.get(e.target);
                                        (e.isIntersecting ||
                                            e.intersectionRatio > 0) &&
                                            (n.unobserve(e.target),
                                            g.delete(e.target),
                                            t());
                                    }
                                });
                            },
                            { rootMargin: '200px' }
                        )),
                    n);
                    return (
                        a && (a.observe(e), g.set(e, t)),
                        function() {
                            a.unobserve(e), g.delete(e);
                        }
                    );
                },
                h = function(e) {
                    var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
                        a = e.sizes ? 'sizes="' + e.sizes + '" ' : '',
                        r = e.srcSetWebp
                            ? "<source type='image/webp' srcset=\"" +
                              e.srcSetWebp +
                              '" ' +
                              a +
                              '/>'
                            : '',
                        n = e.srcSet ? 'srcset="' + e.srcSet + '" ' : '',
                        i = e.title ? 'title="' + e.title + '" ' : '',
                        s = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
                        o = e.width ? 'width="' + e.width + '" ' : '',
                        l = e.height ? 'height="' + e.height + '" ' : '',
                        c = e.crossOrigin
                            ? 'crossorigin="' + e.crossOrigin + '" '
                            : '';
                    return (
                        '<picture>' +
                        r +
                        '<img ' +
                        (e.loading ? 'loading="' + e.loading + '" ' : '') +
                        o +
                        l +
                        a +
                        n +
                        t +
                        s +
                        i +
                        c +
                        'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
                    );
                },
                b = c.default.forwardRef(function(e, t) {
                    var a = e.sizes,
                        r = e.srcSet,
                        n = e.src,
                        i = e.style,
                        s = e.onLoad,
                        d = e.onError,
                        u = e.nativeLazyLoadSupported,
                        f = e.loading,
                        p = (0, o.default)(e, [
                            'sizes',
                            'srcSet',
                            'src',
                            'style',
                            'onLoad',
                            'onError',
                            'nativeLazyLoadSupported',
                            'loading',
                        ]),
                        g = {};
                    return (
                        u && (g.loading = f),
                        c.default.createElement(
                            'img',
                            (0, l.default)(
                                { sizes: a, srcSet: r, src: n },
                                p,
                                { onLoad: s, onError: d, ref: t },
                                g,
                                {
                                    style: (0, l.default)(
                                        {
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                        },
                                        i
                                    ),
                                }
                            )
                        )
                    );
                });
            b.propTypes = {
                style: d.default.object,
                onError: d.default.func,
                onLoad: d.default.func,
            };
            var y = (function(e) {
                function t(t) {
                    var a;
                    a = e.call(this, t) || this;
                    var r = !0,
                        n = !1,
                        i = t.fadeIn,
                        o = !1,
                        l = p(t);
                    !l &&
                        'undefined' != typeof window &&
                        window.IntersectionObserver &&
                        ((r = !1), (n = !0)),
                        'undefined' != typeof HTMLImageElement &&
                            'loading' in HTMLImageElement.prototype &&
                            ((r = !0), (o = !0)),
                        'undefined' == typeof window && (r = !1),
                        t.critical && ((r = !0), (n = !1));
                    var d = !(t.critical && !t.fadeIn);
                    return (
                        (a.state = {
                            isVisible: r,
                            imgLoaded: !1,
                            imgCached: !1,
                            IOSupported: n,
                            fadeIn: i,
                            hasNoScript: d,
                            seenBefore: l,
                            nativeLazyLoadSupported: o,
                        }),
                        (a.imageRef = c.default.createRef()),
                        (a.handleImageLoaded = a.handleImageLoaded.bind(
                            (0, s.default)((0, s.default)(a))
                        )),
                        (a.handleRef = a.handleRef.bind(
                            (0, s.default)((0, s.default)(a))
                        )),
                        a
                    );
                }
                (0, i.default)(t, e);
                var a = t.prototype;
                return (
                    (a.componentDidMount = function() {
                        if (
                            (this.state.isVisible &&
                                'function' == typeof this.props.onStartLoad &&
                                this.props.onStartLoad({
                                    wasCached: p(this.props),
                                }),
                            this.props.critical)
                        ) {
                            var e = this.imageRef.current;
                            e && e.complete && this.handleImageLoaded();
                        }
                    }),
                    (a.componentWillUnmount = function() {
                        this.cleanUpListeners && this.cleanUpListeners();
                    }),
                    (a.handleRef = function(e) {
                        var t = this;
                        this.state.nativeLazyLoadSupported ||
                            (this.state.IOSupported &&
                                e &&
                                (this.cleanUpListeners = m(e, function() {
                                    var e = p(t.props);
                                    t.state.isVisible ||
                                        'function' !=
                                            typeof t.props.onStartLoad ||
                                        t.props.onStartLoad({ wasCached: e }),
                                        t.setState(
                                            { isVisible: !0 },
                                            function() {
                                                return t.setState({
                                                    imgLoaded: e,
                                                    imgCached: !!t.imageRef
                                                        .current.currentSrc,
                                                });
                                            }
                                        );
                                })));
                    }),
                    (a.handleImageLoaded = function() {
                        var e, t, a;
                        (e = this.props),
                            (t = u(e)),
                            (a = t.fluid ? t.fluid.src : t.fixed.src),
                            (f[a] = !0),
                            this.setState({ imgLoaded: !0 }),
                            this.state.seenBefore &&
                                this.setState({ fadeIn: !1 }),
                            this.props.onLoad && this.props.onLoad();
                    }),
                    (a.render = function() {
                        var e = u(this.props),
                            t = e.title,
                            a = e.alt,
                            r = e.className,
                            n = e.style,
                            i = void 0 === n ? {} : n,
                            s = e.imgStyle,
                            o = void 0 === s ? {} : s,
                            d = e.placeholderStyle,
                            f = void 0 === d ? {} : d,
                            p = e.placeholderClassName,
                            g = e.fluid,
                            m = e.fixed,
                            y = e.backgroundColor,
                            v = e.durationFadeIn,
                            E = e.Tag,
                            S = e.itemProp,
                            N = (e.critical, u(this.props).loading);
                        var w = this.state.nativeLazyLoadSupported,
                            C =
                                this.state.imgLoaded ||
                                !1 === this.state.fadeIn,
                            L =
                                !0 === this.state.fadeIn &&
                                !this.state.imgCached,
                            I = (0, l.default)(
                                {
                                    opacity: C ? 1 : 0,
                                    transition: L
                                        ? 'opacity ' + v + 'ms'
                                        : 'none',
                                },
                                o
                            ),
                            x = 'boolean' == typeof y ? 'lightgray' : y,
                            A = { transitionDelay: v + 'ms' },
                            O = (0, l.default)(
                                { opacity: this.state.imgLoaded ? 0 : 1 },
                                L && A,
                                o,
                                f
                            ),
                            R = {
                                title: t,
                                alt: this.state.isVisible ? '' : a,
                                style: O,
                                className: p,
                            };
                        if (g) {
                            var z = g;
                            return c.default.createElement(
                                E,
                                {
                                    className:
                                        (r || '') + ' gatsby-image-wrapper',
                                    style: (0, l.default)(
                                        {
                                            position: 'relative',
                                            overflow: 'hidden',
                                        },
                                        i
                                    ),
                                    ref: this.handleRef,
                                    key: 'fluid-' + JSON.stringify(z.srcSet),
                                },
                                c.default.createElement(E, {
                                    style: {
                                        width: '100%',
                                        paddingBottom:
                                            100 / z.aspectRatio + '%',
                                    },
                                }),
                                x &&
                                    c.default.createElement(E, {
                                        title: t,
                                        style: (0, l.default)(
                                            {
                                                backgroundColor: x,
                                                position: 'absolute',
                                                top: 0,
                                                bottom: 0,
                                                opacity: this.state.imgLoaded
                                                    ? 0
                                                    : 1,
                                                right: 0,
                                                left: 0,
                                            },
                                            L && A
                                        ),
                                    }),
                                z.base64 &&
                                    c.default.createElement(
                                        b,
                                        (0, l.default)({ src: z.base64 }, R)
                                    ),
                                z.tracedSVG &&
                                    c.default.createElement(
                                        b,
                                        (0, l.default)({ src: z.tracedSVG }, R)
                                    ),
                                this.state.isVisible &&
                                    c.default.createElement(
                                        'picture',
                                        null,
                                        z.srcSetWebp &&
                                            c.default.createElement('source', {
                                                type: 'image/webp',
                                                srcSet: z.srcSetWebp,
                                                sizes: z.sizes,
                                            }),
                                        c.default.createElement(b, {
                                            alt: a,
                                            title: t,
                                            sizes: z.sizes,
                                            src: z.src,
                                            crossOrigin: this.props.crossOrigin,
                                            srcSet: z.srcSet,
                                            style: I,
                                            ref: this.imageRef,
                                            onLoad: this.handleImageLoaded,
                                            onError: this.props.onError,
                                            itemProp: S,
                                            nativeLazyLoadSupported: w,
                                            loading: N,
                                        })
                                    ),
                                this.state.hasNoScript &&
                                    c.default.createElement('noscript', {
                                        dangerouslySetInnerHTML: {
                                            __html: h(
                                                (0, l.default)(
                                                    {
                                                        alt: a,
                                                        title: t,
                                                        loading: N,
                                                    },
                                                    z
                                                )
                                            ),
                                        },
                                    })
                            );
                        }
                        if (m) {
                            var T = m,
                                j = (0, l.default)(
                                    {
                                        position: 'relative',
                                        overflow: 'hidden',
                                        display: 'inline-block',
                                        width: T.width,
                                        height: T.height,
                                    },
                                    i
                                );
                            return (
                                'inherit' === i.display && delete j.display,
                                c.default.createElement(
                                    E,
                                    {
                                        className:
                                            (r || '') + ' gatsby-image-wrapper',
                                        style: j,
                                        ref: this.handleRef,
                                        key:
                                            'fixed-' + JSON.stringify(T.srcSet),
                                    },
                                    x &&
                                        c.default.createElement(E, {
                                            title: t,
                                            style: (0, l.default)(
                                                {
                                                    backgroundColor: x,
                                                    width: T.width,
                                                    opacity: this.state
                                                        .imgLoaded
                                                        ? 0
                                                        : 1,
                                                    height: T.height,
                                                },
                                                L && A
                                            ),
                                        }),
                                    T.base64 &&
                                        c.default.createElement(
                                            b,
                                            (0, l.default)({ src: T.base64 }, R)
                                        ),
                                    T.tracedSVG &&
                                        c.default.createElement(
                                            b,
                                            (0, l.default)(
                                                { src: T.tracedSVG },
                                                R
                                            )
                                        ),
                                    this.state.isVisible &&
                                        c.default.createElement(
                                            'picture',
                                            null,
                                            T.srcSetWebp &&
                                                c.default.createElement(
                                                    'source',
                                                    {
                                                        type: 'image/webp',
                                                        srcSet: T.srcSetWebp,
                                                        sizes: T.sizes,
                                                    }
                                                ),
                                            c.default.createElement(b, {
                                                alt: a,
                                                title: t,
                                                width: T.width,
                                                height: T.height,
                                                sizes: T.sizes,
                                                src: T.src,
                                                crossOrigin: this.props
                                                    .crossOrigin,
                                                srcSet: T.srcSet,
                                                style: I,
                                                ref: this.imageRef,
                                                onLoad: this.handleImageLoaded,
                                                onError: this.props.onError,
                                                itemProp: S,
                                                nativeLazyLoadSupported: w,
                                                loading: N,
                                            })
                                        ),
                                    this.state.hasNoScript &&
                                        c.default.createElement('noscript', {
                                            dangerouslySetInnerHTML: {
                                                __html: h(
                                                    (0, l.default)(
                                                        {
                                                            alt: a,
                                                            title: t,
                                                            loading: N,
                                                        },
                                                        T
                                                    )
                                                ),
                                            },
                                        })
                                )
                            );
                        }
                        return null;
                    }),
                    t
                );
            })(c.default.Component);
            y.defaultProps = {
                fadeIn: !0,
                durationFadeIn: 500,
                alt: '',
                Tag: 'div',
                loading: 'lazy',
            };
            var v = d.default.shape({
                    width: d.default.number.isRequired,
                    height: d.default.number.isRequired,
                    src: d.default.string.isRequired,
                    srcSet: d.default.string.isRequired,
                    base64: d.default.string,
                    tracedSVG: d.default.string,
                    srcWebp: d.default.string,
                    srcSetWebp: d.default.string,
                }),
                E = d.default.shape({
                    aspectRatio: d.default.number.isRequired,
                    src: d.default.string.isRequired,
                    srcSet: d.default.string.isRequired,
                    sizes: d.default.string.isRequired,
                    base64: d.default.string,
                    tracedSVG: d.default.string,
                    srcWebp: d.default.string,
                    srcSetWebp: d.default.string,
                });
            y.propTypes = {
                resolutions: v,
                sizes: E,
                fixed: v,
                fluid: E,
                fadeIn: d.default.bool,
                durationFadeIn: d.default.number,
                title: d.default.string,
                alt: d.default.string,
                className: d.default.oneOfType([
                    d.default.string,
                    d.default.object,
                ]),
                critical: d.default.bool,
                crossOrigin: d.default.oneOfType([
                    d.default.string,
                    d.default.bool,
                ]),
                style: d.default.object,
                imgStyle: d.default.object,
                placeholderStyle: d.default.object,
                placeholderClassName: d.default.string,
                backgroundColor: d.default.oneOfType([
                    d.default.string,
                    d.default.bool,
                ]),
                onLoad: d.default.func,
                onError: d.default.func,
                onStartLoad: d.default.func,
                Tag: d.default.string,
                itemProp: d.default.string,
                loading: d.default.oneOf(['auto', 'lazy', 'eager']),
            };
            var S = y;
            t.default = S;
        },
        189: function(e, t, a) {
            var r = a(89),
                n = a(65).concat('length', 'prototype');
            t.f =
                Object.getOwnPropertyNames ||
                function(e) {
                    return r(e, n);
                };
        },
        190: function(e, t, a) {
            var r = a(90),
                n = a(64),
                i = a(43),
                s = a(86),
                o = a(31),
                l = a(88),
                c = Object.getOwnPropertyDescriptor;
            t.f = a(19)
                ? c
                : function(e, t) {
                      if (((e = i(e)), (t = s(t, !0)), l))
                          try {
                              return c(e, t);
                          } catch (a) {}
                      if (o(e, t)) return n(!r.f.call(e, t), e[t]);
                  };
        },
        191: function(e, t, a) {
            'use strict';
            var r = a(8),
                n = a.n(r),
                i = a(0),
                s = a.n(i),
                o = a(62),
                l = (function(e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        n()(t, e),
                        (t.prototype.render = function() {
                            return s.a.createElement(
                                'div',
                                {
                                    style: {
                                        backgroundColor: this.props
                                            .readerBgColor,
                                        zIndex: '1',
                                        position: 'fixed',
                                        top: this.props.y,
                                        left: this.props.x,
                                    },
                                },
                                s.a.createElement(
                                    'h1',
                                    {
                                        style: {
                                            margin: 0,
                                            fontSize: this.props.size,
                                            color: this.props.readerColor,
                                            fontFamily: this.props.readerFont,
                                        },
                                    },
                                    this.props.text
                                )
                            );
                        }),
                        t
                    );
                })(s.a.Component);
            t.a = Object(o.b)(function(e) {
                return {
                    readerBgColor: e.readerBgColor,
                    readerColor: e.readerColor,
                    readerFont: e.readerFont,
                };
            }, null)(l);
        },
        211: function(e, t, a) {
            'use strict';
            var r = a(6),
                n = a(31),
                i = a(15),
                s = a(212),
                o = a(86),
                l = a(20),
                c = a(189).f,
                d = a(190).f,
                u = a(30).f,
                f = a(214).trim,
                p = r.Number,
                g = p,
                m = p.prototype,
                h = 'Number' == i(a(93)(m)),
                b = 'trim' in String.prototype,
                y = function(e) {
                    var t = o(e, !1);
                    if ('string' == typeof t && t.length > 2) {
                        var a,
                            r,
                            n,
                            i = (t = b ? t.trim() : f(t, 3)).charCodeAt(0);
                        if (43 === i || 45 === i) {
                            if (88 === (a = t.charCodeAt(2)) || 120 === a)
                                return NaN;
                        } else if (48 === i) {
                            switch (t.charCodeAt(1)) {
                                case 66:
                                case 98:
                                    (r = 2), (n = 49);
                                    break;
                                case 79:
                                case 111:
                                    (r = 8), (n = 55);
                                    break;
                                default:
                                    return +t;
                            }
                            for (
                                var s, l = t.slice(2), c = 0, d = l.length;
                                c < d;
                                c++
                            )
                                if ((s = l.charCodeAt(c)) < 48 || s > n)
                                    return NaN;
                            return parseInt(l, r);
                        }
                    }
                    return +t;
                };
            if (!p(' 0o1') || !p('0b1') || p('+0x1')) {
                p = function(e) {
                    var t = arguments.length < 1 ? 0 : e,
                        a = this;
                    return a instanceof p &&
                        (h
                            ? l(function() {
                                  m.valueOf.call(a);
                              })
                            : 'Number' != i(a))
                        ? s(new g(y(t)), a, p)
                        : y(t);
                };
                for (
                    var v,
                        E = a(19)
                            ? c(g)
                            : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'.split(
                                  ','
                              ),
                        S = 0;
                    E.length > S;
                    S++
                )
                    n(g, (v = E[S])) && !n(p, v) && u(p, v, d(g, v));
                (p.prototype = m), (m.constructor = p), a(16)(r, 'Number', p);
            }
        },
        212: function(e, t, a) {
            var r = a(11),
                n = a(213).set;
            e.exports = function(e, t, a) {
                var i,
                    s = t.constructor;
                return (
                    s !== a &&
                        'function' == typeof s &&
                        (i = s.prototype) !== a.prototype &&
                        r(i) &&
                        n &&
                        n(e, i),
                    e
                );
            };
        },
        213: function(e, t, a) {
            var r = a(11),
                n = a(7),
                i = function(e, t) {
                    if ((n(e), !r(t) && null !== t))
                        throw TypeError(t + ": can't set as prototype!");
                };
            e.exports = {
                set:
                    Object.setPrototypeOf ||
                    ('__proto__' in {}
                        ? (function(e, t, r) {
                              try {
                                  (r = a(22)(
                                      Function.call,
                                      a(190).f(Object.prototype, '__proto__')
                                          .set,
                                      2
                                  ))(e, []),
                                      (t = !(e instanceof Array));
                              } catch (n) {
                                  t = !0;
                              }
                              return function(e, a) {
                                  return (
                                      i(e, a),
                                      t ? (e.__proto__ = a) : r(e, a),
                                      e
                                  );
                              };
                          })({}, !1)
                        : void 0),
                check: i,
            };
        },
        214: function(e, t, a) {
            var r = a(13),
                n = a(24),
                i = a(20),
                s = a(215),
                o = '[' + s + ']',
                l = RegExp('^' + o + o + '*'),
                c = RegExp(o + o + '*$'),
                d = function(e, t, a) {
                    var n = {},
                        o = i(function() {
                            return !!s[e]() || '​' != '​'[e]();
                        }),
                        l = (n[e] = o ? t(u) : s[e]);
                    a && (n[a] = l), r(r.P + r.F * o, 'String', n);
                },
                u = (d.trim = function(e, t) {
                    return (
                        (e = String(n(e))),
                        1 & t && (e = e.replace(l, '')),
                        2 & t && (e = e.replace(c, '')),
                        e
                    );
                });
            e.exports = d;
        },
        215: function(e, t) {
            e.exports = '\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff';
        },
    },
]);
//# sourceMappingURL=component---src-pages-gallery-js-20940f7b8239573ad53f.js.map
