jQuery(function () {
    var $window = $(window),
    $body = $('body');

    //// Disable animations/transitions until the page has loaded.
    //$body.addClass('is-loading');
    //$window.on('load', function () {
    //    $body.removeClass('is-loading');
    //});

    //skel.init({
    //    reset: 'full',
    //    //grid: { gutters: '2.5em' },
    //    breakpoints: {
    //        'global': { range: '*', href: '/css/style.css' },
    //        'desktop': { range: '737-', href: '/css/style-desktop.css', containers: 1200, grid: { gutters: '2.5em' } },
    //        '1000px': { range: '737-1200', href: '/css/style-1000px.css', containers: 960, grid: { gutters: '1.5em' }, viewport: { width: 1080 } },
    //        'mobile': { range: '-736', href: '/css/style-mobile.css', containers: '100%', grid: { collapse: true, gutters: '2em' }, viewport: { scalable: false } }
    //    },
    //    plugins: {
    //        layers: {
    //            config: {
    //                baseZIndex: 1000,
    //                transform: false
    //            },
    //            titleBar: {
    //                breakpoints: ['mobile'],
    //                position: 'top-left',
    //                width: '100%',
    //                height: 44,
    //                html: '<div class="toggle" data-action="toggleLayer" data-args="navPanel"></div>'
    //            },
    //            navPanel: {
    //                breakpoints: ['mobile'],
    //                position: 'top-left',
    //                width: '80%',
    //                height: '100%',
    //                orientation: 'vertical',
    //                side: 'left',
    //                hidden: true,
    //                animation: 'pushX',
    //                clickToHide: true,
    //                html: '<div data-args="nav" data-action="navList"></div>'
    //            }
    //        }
    //    }
    //});

    //$('#nav > ul').dropotron({
    //    mode: 'fade',
    //    noOpenerFade: true,
    //    speed: 200,
    //    alignment: 'center',
    //    offsetX: 2
    //});
});

/*Google analytics*/
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g;
    m.parentNode.insertBefore(a, m);
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-54105375-1', 'auto');
ga('send', 'pageview');
/*End of Google analytics*/