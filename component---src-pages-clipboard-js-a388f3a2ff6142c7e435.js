(window.webpackJsonp = window.webpackJsonp || []).push([
    [4],
    {
        159: function(e, t, a) {
            'use strict';
            a.r(t);
            var n = a(0),
                r = a.n(n),
                i = a(160),
                s = a(168),
                c = (a(169), a(166)),
                o = (a(189), a(98), a(193)),
                l = a.n(o),
                u = (a(42), a(44), a(196), a(197)),
                d = a.n(u),
                p = a(38),
                h = a.n(p),
                f = a(8),
                m = a.n(f),
                g = a(198),
                v = a.n(g),
                b = a(179),
                x = a(59),
                C = 'fb84db084f544767adeb22337db0ce13',
                y = (function(e) {
                    function t(t) {
                        var a;
                        return (
                            ((a = e.call(this, t) || this).state = {
                                mediaStream: null,
                                facingMode: 'user',
                                captureURL: '',
                                textBoxes: [],
                                recognitionResult: null,
                                cachedText: '',
                                renderImage: '',
                                loading: !1,
                            }),
                            (a.ctx = null),
                            (a.width = 0),
                            (a.height = 0),
                            (a.frameCount = 0),
                            (a.loop = null),
                            (a.init = null),
                            (a.req = !1),
                            (a.player = r.a.createRef()),
                            (a.canvas = r.a.createRef()),
                            (a.initCanvas = a.initCanvas.bind(h()(a))),
                            (a.initCamera = a.initCamera.bind(h()(a))),
                            (a.reverseCamera = a.reverseCamera.bind(h()(a))),
                            (a.offCamera = a.offCamera.bind(h()(a))),
                            (a.captureFrame = a.captureFrame.bind(h()(a))),
                            (a.getCV = a.getCV.bind(h()(a))),
                            (a.genText = a.genText.bind(h()(a))),
                            (a.captureImage = a.captureImage.bind(h()(a))),
                            a
                        );
                    }
                    m()(t, e);
                    var a = t.prototype;
                    return (
                        (a.initCanvas = function() {
                            var e = this.player.current.getBoundingClientRect();
                            (this.width = e.width),
                                (this.height = e.height),
                                this.canvas.current.setAttribute(
                                    'width',
                                    this.width
                                ),
                                this.canvas.current.setAttribute(
                                    'height',
                                    this.height
                                ),
                                (this.ctx = this.canvas.current.getContext(
                                    '2d'
                                ));
                        }),
                        (a.initCamera = (function() {
                            var e = d()(
                                l.a.mark(function e() {
                                    var t,
                                        a = this;
                                    return l.a.wrap(
                                        function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            this.setState({
                                                                textBoxes: [],
                                                                cachedText: '',
                                                            }),
                                                            (e.prev = 1),
                                                            (e.next = 4),
                                                            navigator.mediaDevices.getUserMedia(
                                                                {
                                                                    audio: !1,
                                                                    video: {
                                                                        facingMode: this
                                                                            .state
                                                                            .facingMode,
                                                                    },
                                                                }
                                                            )
                                                        );
                                                    case 4:
                                                        return (
                                                            (t = e.sent),
                                                            (this.player.current.srcObject = t),
                                                            this.setState({
                                                                mediaStream: t,
                                                            }),
                                                            (e.next = 9),
                                                            new Promise(
                                                                function(e, t) {
                                                                    a.setState({
                                                                        loading: !0,
                                                                    }),
                                                                        (a.init = setTimeout(
                                                                            function() {
                                                                                a.initCanvas(),
                                                                                    a.setState(
                                                                                        {
                                                                                            loading: !1,
                                                                                        }
                                                                                    ),
                                                                                    e();
                                                                            },
                                                                            1e3
                                                                        ));
                                                                }
                                                            )
                                                        );
                                                    case 9:
                                                        (this.loop = setInterval(
                                                            d()(
                                                                l.a.mark(
                                                                    function e() {
                                                                        return l.a.wrap(
                                                                            function(
                                                                                e
                                                                            ) {
                                                                                for (;;)
                                                                                    switch (
                                                                                        (e.prev =
                                                                                            e.next)
                                                                                    ) {
                                                                                        case 0:
                                                                                            if (
                                                                                                a.req
                                                                                            ) {
                                                                                                e.next = 9;
                                                                                                break;
                                                                                            }
                                                                                            return (
                                                                                                (a.req = !0),
                                                                                                (e.next = 4),
                                                                                                a.captureFrame()
                                                                                            );
                                                                                        case 4:
                                                                                            return (
                                                                                                (e.next = 6),
                                                                                                a.getCV()
                                                                                            );
                                                                                        case 6:
                                                                                            return (
                                                                                                (e.next = 8),
                                                                                                a.genText()
                                                                                            );
                                                                                        case 8:
                                                                                            a.req = !1;
                                                                                        case 9:
                                                                                        case 'end':
                                                                                            return e.stop();
                                                                                    }
                                                                            },
                                                                            e
                                                                        );
                                                                    }
                                                                )
                                                            ),
                                                            250
                                                        )),
                                                            (e.next = 15);
                                                        break;
                                                    case 12:
                                                        (e.prev = 12),
                                                            (e.t0 = e.catch(1)),
                                                            console.log(e.t0);
                                                    case 15:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        this,
                                        [[1, 12]]
                                    );
                                })
                            );
                            return function() {
                                return e.apply(this, arguments);
                            };
                        })()),
                        (a.reverseCamera = (function() {
                            var e = d()(
                                l.a.mark(function e() {
                                    return l.a.wrap(
                                        function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            this.setState({
                                                                facingMode:
                                                                    'user' ===
                                                                    this.state
                                                                        .facingMode
                                                                        ? 'environment'
                                                                        : 'user',
                                                            }),
                                                            (e.next = 3),
                                                            this.offCamera()
                                                        );
                                                    case 3:
                                                        return (
                                                            (e.prev = 3),
                                                            (e.next = 6),
                                                            this.initCamera()
                                                        );
                                                    case 6:
                                                        e.next = 12;
                                                        break;
                                                    case 8:
                                                        return (
                                                            (e.prev = 8),
                                                            (e.t0 = e.catch(3)),
                                                            (e.next = 12),
                                                            this.reverseCamera()
                                                        );
                                                    case 12:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        this,
                                        [[3, 8]]
                                    );
                                })
                            );
                            return function() {
                                return e.apply(this, arguments);
                            };
                        })()),
                        (a.offCamera = (function() {
                            var e = d()(
                                l.a.mark(function e() {
                                    return l.a.wrap(
                                        function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if (
                                                            (clearTimeout(
                                                                this.init
                                                            ),
                                                            clearInterval(
                                                                this.loop
                                                            ),
                                                            !this.state
                                                                .mediaStream)
                                                        ) {
                                                            e.next = 5;
                                                            break;
                                                        }
                                                        return (
                                                            (e.next = 5),
                                                            this.state.mediaStream
                                                                .getTracks()[0]
                                                                .stop()
                                                        );
                                                    case 5:
                                                        this.setState({
                                                            mediaStream: null,
                                                        });
                                                    case 6:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        this
                                    );
                                })
                            );
                            return function() {
                                return e.apply(this, arguments);
                            };
                        })()),
                        (a.captureFrame = (function() {
                            var e = d()(
                                l.a.mark(function e() {
                                    var t;
                                    return l.a.wrap(
                                        function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            this.ctx.drawImage(
                                                                this.player
                                                                    .current,
                                                                0,
                                                                0
                                                            ),
                                                            (e.next = 3),
                                                            this.canvas.current.toDataURL(
                                                                'image/jpeg'
                                                            )
                                                        );
                                                    case 3:
                                                        (t = e.sent),
                                                            this.setState({
                                                                captureURL: t,
                                                            }),
                                                            this.frameCount++;
                                                    case 6:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        this
                                    );
                                })
                            );
                            return function() {
                                return e.apply(this, arguments);
                            };
                        })()),
                        (a.chunkDataURL = function(e) {
                            for (
                                var t = e.split(',')[1],
                                    a = (e.split(';')[0].slice(5),
                                    window.atob(t)),
                                    n = new ArrayBuffer(a.length),
                                    r = new Uint8Array(n),
                                    i = 0;
                                i < a.length;
                                i++
                            )
                                r[i] = a.charCodeAt(i);
                            return r;
                        }),
                        (a.getCV = (function() {
                            var e = d()(
                                l.a.mark(function e() {
                                    var t, a, n;
                                    return l.a.wrap(
                                        function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (t = this.chunkDataURL(
                                                                this.state
                                                                    .captureURL
                                                            )),
                                                            (e.next = 3),
                                                            fetch(
                                                                'https://cors-anywhere.herokuapp.com/https://eastus.api.cognitive.microsoft.com/vision/v2.0/recognizeText?mode=Printed',
                                                                {
                                                                    method:
                                                                        'POST',
                                                                    headers: {
                                                                        'Content-Type':
                                                                            'application/octet-stream',
                                                                        'Ocp-Apim-Subscription-Key': C,
                                                                    },
                                                                    body: t,
                                                                }
                                                            )
                                                        );
                                                    case 3:
                                                        a = e.sent;
                                                    case 4:
                                                        return (
                                                            (e.next = 6),
                                                            fetch(
                                                                a.headers.get(
                                                                    'Operation-Location'
                                                                ),
                                                                {
                                                                    method:
                                                                        'GET',
                                                                    headers: {
                                                                        'Content-Type':
                                                                            'application/json',
                                                                        'Ocp-Apim-Subscription-Key': C,
                                                                    },
                                                                }
                                                            ).then(
                                                                (function() {
                                                                    var e = d()(
                                                                        l.a.mark(
                                                                            function e(
                                                                                t
                                                                            ) {
                                                                                return l.a.wrap(
                                                                                    function(
                                                                                        e
                                                                                    ) {
                                                                                        for (;;)
                                                                                            switch (
                                                                                                (e.prev =
                                                                                                    e.next)
                                                                                            ) {
                                                                                                case 0:
                                                                                                    return (
                                                                                                        (e.next = 2),
                                                                                                        t.json()
                                                                                                    );
                                                                                                case 2:
                                                                                                    return e.abrupt(
                                                                                                        'return',
                                                                                                        e.sent
                                                                                                    );
                                                                                                case 3:
                                                                                                case 'end':
                                                                                                    return e.stop();
                                                                                            }
                                                                                    },
                                                                                    e
                                                                                );
                                                                            }
                                                                        )
                                                                    );
                                                                    return function(
                                                                        t
                                                                    ) {
                                                                        return e.apply(
                                                                            this,
                                                                            arguments
                                                                        );
                                                                    };
                                                                })()
                                                            )
                                                        );
                                                    case 6:
                                                        n = e.sent;
                                                    case 7:
                                                        if (
                                                            'Succeeded' !=
                                                            n.status
                                                        ) {
                                                            e.next = 4;
                                                            break;
                                                        }
                                                    case 8:
                                                        console.log(n),
                                                            this.setState({
                                                                recognitionResult:
                                                                    n.recognitionResult,
                                                            });
                                                    case 10:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        this
                                    );
                                })
                            );
                            return function() {
                                return e.apply(this, arguments);
                            };
                        })()),
                        (a.genText = (function() {
                            var e = d()(
                                l.a.mark(function e() {
                                    var t,
                                        a = this;
                                    return l.a.wrap(
                                        function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            this.setState({
                                                                textBoxes: [],
                                                                cachedText: '',
                                                            }),
                                                            this.ctx.save(),
                                                            (t = ''),
                                                            this.state.recognitionResult.lines.forEach(
                                                                function(e) {
                                                                    t +=
                                                                        e.text +
                                                                        '\n';
                                                                    var n =
                                                                            e.boundingBox,
                                                                        i = a.canvas.current.getBoundingClientRect();
                                                                    a.setState({
                                                                        textBoxes: a.state.textBoxes.concat(
                                                                            [
                                                                                {
                                                                                    str:
                                                                                        e.text,
                                                                                    el: r.a.createElement(
                                                                                        b.a,
                                                                                        {
                                                                                            key:
                                                                                                e.text +
                                                                                                Math.random(),
                                                                                            x:
                                                                                                n[6] +
                                                                                                i.x,
                                                                                            y:
                                                                                                n[7] +
                                                                                                i.y -
                                                                                                Math.abs(
                                                                                                    n[1] -
                                                                                                        n[7]
                                                                                                ),
                                                                                            text:
                                                                                                e.text,
                                                                                            size: Math.abs(
                                                                                                n[1] -
                                                                                                    n[7]
                                                                                            ),
                                                                                        }
                                                                                    ),
                                                                                },
                                                                            ]
                                                                        ),
                                                                    }),
                                                                        (a.ctx.font =
                                                                            Math.abs(
                                                                                n[1] -
                                                                                    n[7]
                                                                            ) +
                                                                            'px ' +
                                                                            a
                                                                                .props
                                                                                .readerFont),
                                                                        (a.ctx.fillStyle =
                                                                            a.props.readerBgColor),
                                                                        a.ctx.fillRect(
                                                                            n[0],
                                                                            n[1],
                                                                            a.ctx.measureText(
                                                                                e.text
                                                                            )
                                                                                .width,
                                                                            Math.abs(
                                                                                n[1] -
                                                                                    n[7]
                                                                            )
                                                                        ),
                                                                        (a.ctx.fillStyle =
                                                                            a.props.readerColor),
                                                                        a.ctx.fillText(
                                                                            e.text,
                                                                            n[6],
                                                                            n[7]
                                                                        );
                                                                }
                                                            ),
                                                            (e.t0 = this),
                                                            (e.t1 = t),
                                                            (e.next = 8),
                                                            this.canvas.current.toDataURL(
                                                                'image/jpeg'
                                                            )
                                                        );
                                                    case 8:
                                                        (e.t2 = e.sent),
                                                            (e.t3 = {
                                                                cachedText:
                                                                    e.t1,
                                                                renderImage:
                                                                    e.t2,
                                                            }),
                                                            e.t0.setState.call(
                                                                e.t0,
                                                                e.t3
                                                            ),
                                                            this.ctx.restore();
                                                    case 12:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        this
                                    );
                                })
                            );
                            return function() {
                                return e.apply(this, arguments);
                            };
                        })()),
                        (a.captureImage = (function() {
                            var e = d()(
                                l.a.mark(function e() {
                                    var t;
                                    return l.a.wrap(
                                        function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            console.log(
                                                                'Captured!'
                                                            ),
                                                            this.player.current.pause(),
                                                            (e.next = 4),
                                                            this.offCamera()
                                                        );
                                                    case 4:
                                                        if (!this.ctx) {
                                                            e.next = 11;
                                                            break;
                                                        }
                                                        return (
                                                            (e.next = 7),
                                                            this.captureFrame()
                                                        );
                                                    case 7:
                                                        return (
                                                            (e.next = 9),
                                                            this.getCV()
                                                        );
                                                    case 9:
                                                        return (
                                                            (e.next = 11),
                                                            this.genText()
                                                        );
                                                    case 11:
                                                        null !=
                                                            this.state
                                                                .recognitionResult &&
                                                            (null ==
                                                            (t = JSON.parse(
                                                                localStorage.getItem(
                                                                    'captures'
                                                                )
                                                            ))
                                                                ? localStorage.setItem(
                                                                      'captures',
                                                                      JSON.stringify(
                                                                          [
                                                                              {
                                                                                  date: Date.now(),
                                                                                  recognitionResult: this
                                                                                      .state
                                                                                      .recognitionResult,
                                                                                  cachedText: this
                                                                                      .state
                                                                                      .cachedText,
                                                                                  renderImage: this
                                                                                      .state
                                                                                      .renderImage,
                                                                                  originalImage: this
                                                                                      .state
                                                                                      .captureURL,
                                                                                  originalDimension: {
                                                                                      width: this
                                                                                          .width,
                                                                                      height: this
                                                                                          .height,
                                                                                  },
                                                                              },
                                                                          ]
                                                                      )
                                                                  )
                                                                : localStorage.setItem(
                                                                      'captures',
                                                                      JSON.stringify(
                                                                          t.concat(
                                                                              [
                                                                                  {
                                                                                      date: Date.now(),
                                                                                      recognitionResult: this
                                                                                          .state
                                                                                          .recognitionResult,
                                                                                      cachedText: this
                                                                                          .state
                                                                                          .cachedText,
                                                                                      renderImage: this
                                                                                          .state
                                                                                          .renderImage,
                                                                                      originalImage: this
                                                                                          .state
                                                                                          .captureURL,
                                                                                      originalDimension: {
                                                                                          width: this
                                                                                              .width,
                                                                                          height: this
                                                                                              .height,
                                                                                      },
                                                                                  },
                                                                              ]
                                                                          )
                                                                      )
                                                                  ),
                                                            console.log(
                                                                this.state
                                                            ),
                                                            console.log(
                                                                localStorage
                                                            ));
                                                    case 12:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        this
                                    );
                                })
                            );
                            return function() {
                                return e.apply(this, arguments);
                            };
                        })()),
                        (a.componentWillUnmount = function() {
                            this.offCamera();
                        }),
                        (a.render = function() {
                            var e = this;
                            return r.a.createElement(
                                'div',
                                { className: v.a.backdrop },
                                this.state.loading
                                    ? r.a.createElement(
                                          'div',
                                          { className: v.a.loader },
                                          r.a.createElement(
                                              'h1',
                                              null,
                                              'Loading...'
                                          )
                                      )
                                    : null,
                                this.state.textBoxes.map(function(e) {
                                    return e.el;
                                }),
                                r.a.createElement('video', {
                                    ref: this.player,
                                    autoPlay: !0,
                                    style: {
                                        transform:
                                            'translate(-50%, -50%) rotateY(' +
                                            (this.state.facingMode, '0') +
                                            'deg)',
                                    },
                                }),
                                r.a.createElement('canvas', {
                                    ref: this.canvas,
                                    style: {
                                        transform: 'translate(-50%, -50%)',
                                    },
                                }),
                                this.state.mediaStream
                                    ? null
                                    : r.a.createElement(
                                          'div',
                                          {
                                              className: v.a.prompt,
                                              onClick: function() {
                                                  e.setState({
                                                      facingMode: 'user',
                                                  }),
                                                      e.initCamera();
                                              },
                                          },
                                          r.a.createElement(
                                              'p',
                                              null,
                                              'Turn on Camera'
                                          )
                                      ),
                                r.a.createElement(
                                    'div',
                                    { className: v.a.controls },
                                    r.a.createElement(
                                        'div',
                                        null,
                                        r.a.createElement(
                                            i.a,
                                            { to: '/gallery' },
                                            r.a.createElement(
                                                'button',
                                                { onClick: this.offCamera },
                                                r.a.createElement('i', {
                                                    className: 'fas fa-images',
                                                })
                                            )
                                        )
                                    ),
                                    r.a.createElement(
                                        'div',
                                        null,
                                        r.a.createElement(
                                            'button',
                                            { onClick: this.captureImage },
                                            r.a.createElement('i', {
                                                className: 'far fa-circle',
                                            })
                                        )
                                    ),
                                    r.a.createElement(
                                        'div',
                                        null,
                                        r.a.createElement(
                                            'button',
                                            { onClick: this.reverseCamera },
                                            r.a.createElement('i', {
                                                className: 'fas fa-sync-alt',
                                            })
                                        )
                                    )
                                )
                            );
                        }),
                        t
                    );
                })(r.a.Component),
                E = Object(x.b)(function(e) {
                    return {
                        readerBgColor: e.readerBgColor,
                        readerColor: e.readerColor,
                        readerFont: e.readerFont,
                    };
                }, null)(y),
                w = a(161);
            t.default = Object(x.b)(
                function(e) {
                    return { bgColor: e.bgColor };
                },
                function(e) {
                    return {
                        changeBG: function(t) {
                            return e(Object(w.a)(t));
                        },
                    };
                }
            )(function(e) {
                return (
                    (0, e.changeBG)('black'),
                    r.a.createElement(
                        s.a,
                        null,
                        r.a.createElement(c.a, { title: 'Clipboard' }),
                        r.a.createElement(E, null)
                    )
                );
            });
        },
        160: function(e, t, a) {
            'use strict';
            a.d(t, 'b', function() {
                return u;
            });
            var n = a(0),
                r = a.n(n),
                i = a(1),
                s = a.n(i),
                c = a(37),
                o = a.n(c);
            a.d(t, 'a', function() {
                return o.a;
            }),
                a.d(t, 'c', function() {
                    return c.navigate;
                });
            a(162);
            var l = r.a.createContext({}),
                u = function(e) {
                    return r.a.createElement(l.Consumer, null, function(t) {
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
                data: s.a.object,
                query: s.a.string.isRequired,
                render: s.a.func,
                children: s.a.func,
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
                s = a.n(i),
                c = a(60),
                o = a(3),
                l = function(e) {
                    var t = e.location,
                        a = o.default.getResourcesForPathnameSync(t.pathname);
                    return a
                        ? r.a.createElement(
                              c.a,
                              Object.assign(
                                  { location: t, pageResources: a },
                                  a.json
                              )
                          )
                        : null;
                };
            (l.propTypes = {
                location: s.a.shape({ pathname: s.a.string.isRequired })
                    .isRequired,
            }),
                (t.default = l);
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
                s = a(1),
                c = a.n(s),
                o = a(176),
                l = a.n(o);
            function u(e) {
                var t = e.description,
                    a = e.lang,
                    r = e.meta,
                    s = e.title,
                    c = n.data.site,
                    o = t || c.siteMetadata.description;
                return i.a.createElement(
                    l.a,
                    {
                        htmlAttributes: { lang: a },
                        title: s,
                        titleTemplate: '%s | ' + c.siteMetadata.title,
                        meta: [
                            { name: 'description', content: o },
                            { property: 'og:title', content: s },
                            { property: 'og:description', content: o },
                            { property: 'og:type', content: 'website' },
                            { name: 'twitter:card', content: 'summary' },
                            {
                                name: 'twitter:creator',
                                content: c.siteMetadata.author,
                            },
                            { name: 'twitter:title', content: s },
                            { name: 'twitter:description', content: o },
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
                    description: c.a.string,
                    lang: c.a.string,
                    meta: c.a.arrayOf(c.a.object),
                    title: c.a.string.isRequired,
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
                s = a(1),
                c = a.n(s),
                o = a(160),
                l = (a(172), a(38)),
                u = a.n(l),
                d = a(8),
                p = a.n(d),
                h = a(59),
                f = a(161),
                m = a(173),
                g = a.n(m),
                v = (a(174),
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
                                            g.a.menuToggle +
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
                                                    ? g.a.dark
                                                    : g.a.light),
                                        })
                                    )
                                ),
                                i.a.createElement(
                                    'div',
                                    {
                                        className:
                                            g.a.navContainer +
                                            ' ' +
                                            (this.state.isCollapse
                                                ? g.a.isActive
                                                : ''),
                                    },
                                    i.a.createElement(
                                        'div',
                                        { className: g.a.nav },
                                        i.a.createElement(
                                            'div',
                                            { className: g.a.profile },
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
                                            { className: g.a.pages },
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
                                                        o.a,
                                                        {
                                                            className: g.a.page,
                                                            activeClassName:
                                                                g.a.pageActive,
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
                b = Object(h.b)(
                    function(e) {
                        return { bgColor: e.bgColor };
                    },
                    function(e) {
                        return {
                            changeBG: function(t) {
                                return e(Object(f.a)(t));
                            },
                        };
                    }
                )(v),
                x = (a(175),
                function(e) {
                    var t = e.bgColor,
                        a = (e.changeBG, e.children);
                    return i.a.createElement(o.b, {
                        query: '2924840780',
                        render: function(e) {
                            return i.a.createElement(
                                i.a.Fragment,
                                null,
                                i.a.createElement(b, null),
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
            x.propTypes = { children: c.a.node.isRequired };
            t.a = Object(h.b)(
                function(e) {
                    return { bgColor: e.bgColor };
                },
                function(e) {
                    return {
                        changeBG: function(t) {
                            return e(Object(f.a)(t));
                        },
                    };
                }
            )(x);
        },
        169: function(e, t, a) {
            'use strict';
            a(170), a(0), a(160), a(171);
        },
        170: function(e) {
            e.exports = {
                data: {
                    placeholderImage: {
                        childImageSharp: {
                            fluid: {
                                base64:
                                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==',
                                aspectRatio: 1,
                                src:
                                    '/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png',
                                srcSet:
                                    '/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w',
                                sizes: '(max-width: 300px) 100vw, 300px',
                            },
                        },
                    },
                },
            };
        },
        179: function(e, t, a) {
            'use strict';
            var n = a(8),
                r = a.n(n),
                i = a(0),
                s = a.n(i),
                c = a(59),
                o = (function(e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        r()(t, e),
                        (t.prototype.render = function() {
                            return s.a.createElement(
                                'div',
                                {
                                    style: {
                                        backgroundColor: this.props
                                            .readerBgColor,
                                        zIndex: '1000',
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
            t.a = Object(c.b)(function(e) {
                return {
                    readerBgColor: e.readerBgColor,
                    readerColor: e.readerColor,
                    readerFont: e.readerFont,
                };
            }, null)(o);
        },
    },
]);
//# sourceMappingURL=component---src-pages-clipboard-js-a388f3a2ff6142c7e435.js.map
