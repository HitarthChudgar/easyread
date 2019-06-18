(window.webpackJsonp = window.webpackJsonp || []).push([
    [4],
    {
        153: function(e, t, a) {
            'use strict';
            a.r(t);
            var n = a(0),
                r = a.n(n),
                i = a(168),
                l = a(166);
            t.default = function() {
                return r.a.createElement(
                    i.a,
                    null,
                    r.a.createElement(l.a, { title: '404: Not found' }),
                    r.a.createElement('h1', null, 'NOT FOUND'),
                    r.a.createElement(
                        'p',
                        null,
                        "You just hit a route that doesn't exist... the sadness."
                    )
                );
            };
        },
        160: function(e, t, a) {
            'use strict';
            a.d(t, 'b', function() {
                return u;
            });
            var n = a(0),
                r = a.n(n),
                i = a(1),
                l = a.n(i),
                s = a(37),
                c = a.n(s);
            a.d(t, 'a', function() {
                return c.a;
            }),
                a.d(t, 'c', function() {
                    return s.navigate;
                });
            a(162);
            var o = r.a.createContext({}),
                u = function(e) {
                    return r.a.createElement(o.Consumer, null, function(t) {
                        return e.data || (t[e.query] && t[e.query].data)
                            ? (e.render || e.children)(
                                  e.data ? e.data.data : t[e.query].data
                              )
                            : r.a.createElement(
                                  'div',
                                  null,
                                  'Loading (StaticQuery)'
                              );
                    });
                };
            u.propTypes = {
                data: l.a.object,
                query: l.a.string.isRequired,
                render: l.a.func,
                children: l.a.func,
            };
        },
        161: function(e, t, a) {
            'use strict';
            a.d(t, 'a', function() {
                return r;
            });
            var n = a(21);
            function r(e) {
                return { type: n.a, bgColor: e };
            }
        },
        162: function(e, t, a) {
            var n;
            e.exports = ((n = a(164)) && n.default) || n;
        },
        163: function(e) {
            e.exports = {
                data: { site: { siteMetadata: { title: 'EasyRead' } } },
            };
        },
        164: function(e, t, a) {
            'use strict';
            a.r(t);
            a(27);
            var n = a(0),
                r = a.n(n),
                i = a(1),
                l = a.n(i),
                s = a(60),
                c = a(3),
                o = function(e) {
                    var t = e.location,
                        a = c.default.getResourcesForPathnameSync(t.pathname);
                    return a
                        ? r.a.createElement(
                              s.a,
                              Object.assign(
                                  { location: t, pageResources: a },
                                  a.json
                              )
                          )
                        : null;
                };
            (o.propTypes = {
                location: l.a.shape({ pathname: l.a.string.isRequired })
                    .isRequired,
            }),
                (t.default = o);
        },
        165: function(e, t, a) {
            e.exports =
                a.p +
                'static/reading-profile-667bb35fe9e05f79fe62d06332339c07.png';
        },
        166: function(e, t, a) {
            'use strict';
            var n = a(167),
                r = a(0),
                i = a.n(r),
                l = a(1),
                s = a.n(l),
                c = a(176),
                o = a.n(c);
            function u(e) {
                var t = e.description,
                    a = e.lang,
                    r = e.meta,
                    l = e.title,
                    s = n.data.site,
                    c = t || s.siteMetadata.description;
                return i.a.createElement(
                    o.a,
                    {
                        htmlAttributes: { lang: a },
                        title: l,
                        titleTemplate: '%s | ' + s.siteMetadata.title,
                        meta: [
                            { name: 'description', content: c },
                            { property: 'og:title', content: l },
                            { property: 'og:description', content: c },
                            { property: 'og:type', content: 'website' },
                            { name: 'twitter:card', content: 'summary' },
                            {
                                name: 'twitter:creator',
                                content: s.siteMetadata.author,
                            },
                            { name: 'twitter:title', content: l },
                            { name: 'twitter:description', content: c },
                        ].concat(r),
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
            (u.defaultProps = { lang: 'en', meta: [], description: '' }),
                (u.propTypes = {
                    description: s.a.string,
                    lang: s.a.string,
                    meta: s.a.arrayOf(s.a.object),
                    title: s.a.string.isRequired,
                }),
                (t.a = u);
        },
        167: function(e) {
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
        168: function(e, t, a) {
            'use strict';
            var n = a(163),
                r = a(0),
                i = a.n(r),
                l = a(1),
                s = a.n(l),
                c = a(160),
                o = (a(172), a(38)),
                u = a.n(o),
                m = a(8),
                p = a.n(m),
                d = a(59),
                g = a(161),
                f = a(173),
                h = a.n(f),
                b = (a(174),
                (function(e) {
                    function t(t) {
                        var a;
                        return (
                            ((a = e.call(this, t) || this).state = {
                                isCollapse: !1,
                            }),
                            (a.toggleNav = a.toggleNav.bind(u()(a))),
                            a
                        );
                    }
                    p()(t, e);
                    var n = t.prototype;
                    return (
                        (n.toggleNav = function() {
                            this.setState({
                                isCollapse: !this.state.isCollapse,
                            });
                        }),
                        (n.render = function() {
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
                                                src: a(165),
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
                                            ].map(function(e) {
                                                return i.a.createElement(
                                                    'li',
                                                    { key: e.url },
                                                    i.a.createElement(
                                                        c.a,
                                                        {
                                                            className: h.a.page,
                                                            activeClassName:
                                                                h.a.pageActive,
                                                            to: e.url,
                                                        },
                                                        i.a.createElement('i', {
                                                            className:
                                                                'fas fa-heart fa-2x',
                                                        }),
                                                        i.a.createElement(
                                                            'p',
                                                            null,
                                                            e.name
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
                E = Object(d.b)(
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
                v = (a(175),
                function(e) {
                    var t = e.bgColor,
                        a = (e.changeBG, e.children);
                    return i.a.createElement(c.b, {
                        query: '2924840780',
                        render: function(e) {
                            return i.a.createElement(
                                i.a.Fragment,
                                null,
                                i.a.createElement(E, null),
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
                        data: n,
                    });
                });
            v.propTypes = { children: s.a.node.isRequired };
            t.a = Object(d.b)(
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
    },
]);
//# sourceMappingURL=component---src-pages-404-js-662772c7d35ab99c4d32.js.map
