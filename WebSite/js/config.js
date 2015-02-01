/*********************************************=Header(scrolling)=************************************************************/

function InitHeaderScrolling() {
    var scrollFromTop = 100;
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > scrollFromTop) {
            $('.header-wrapper').addClass('scrolled');
        } else {
            $('.header-wrapper').removeClass('scrolled');
        }
    });
}

/*********************************************=Gallery(Portfolio)=************************************************************/

function InitGallery() {
    var imagesContainer = $('.gallery-images');
    var galleryItems = imagesContainer.find('.gallery-item');
    var images = galleryItems.find("img");
    var imageCategories = $('.gallery-category');

    function loadMasonry() {
        var masonry = imagesContainer.masonry({
            itemSelector: '.masonry-item',
            //gutter: 10,
            columnWidth: '.masonry-item',
            //columnWidth: 215,
            isFitWidth: true
        });
    }

    function reloadMasonry(loadImages) {
        //reload masonry
        loadImages = typeof loadImages !== 'undefined' ? loadImages : true;

        if (loadImages) {
            imagesContainer.masonry('on', 'layoutComplete', function () {
                loadImagesOnScroll();
                return true; //run only once
            });
            loadMagnificPopUp();

            //use this 2 methods in pair because of bug in masonry. reloadItems needed for layoutComplete to be called...
            imagesContainer.masonry('reloadItems'); //this call adds .masonry-item el-s to calculations but doesn't re-layout them on screen
            imagesContainer.masonry();
        }
        else {
            //imagesContainer.masonry('reloadItems'); //this doesn't needed
            imagesContainer.masonry();
        }
    }

    function loadImagesOnScroll() {
        images.filter(".not-loaded").unveil(100, function () {
            $(this).load(function () {
                reloadMasonry(false);
                $(this).removeClass("not-loaded").fadeTo(1500, 1);
            });
        });
    }

    function loadMagnificPopUp() {
        imagesContainer.find('.masonry-item').magnificPopup({
            type: 'image',
            delegate: 'a',
            image: {
                titleSrc: null,
                cursor: null
            },
            gallery: {
                enabled: true,
                preload: [0, 1],
                arrowMarkup: '<button title="%title%" type="button" class="custom-arrow arrow-%dir%">' +
                                '<div class="mfp-prevent-close"></div>' +
                             '</button>'
            },
            closeMarkup: '<button title="%title%" class="mfp-close">' +
                            //'<span class="glyphicon glyphicon-remove-circle"></span>' +
                        '</button>',
            mainClass: 'mfp-fade',
            removalDelay: 300,
            callbacks: {
                buildControls: function () {
                    // re-appends controls inside the main container
                    this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
                }
            }
        });
    }

    function setSelectedCategory(category) {
        imageCategories.removeClass('active');
        var categoryEl = imageCategories.filter(function () {
            return $(this).text().trim().toLowerCase() == category;
        });
        categoryEl.addClass('active');

        if (category == "all") {
            galleryItems.fadeIn('slow').addClass('masonry-item');
            reloadMasonry();
        }
        else {
            var counter = 0;
            function waitForAll() {
                counter++;
                if (counter == galleryItems.length) {
                    reloadMasonry();
                }
            }

            galleryItems.each(function () {
                $(this).hasClass(category) ?
                    $(this).fadeIn('slow', waitForAll).addClass('masonry-item') :
                    $(this).fadeOut('slow', waitForAll).removeClass('masonry-item');
            });
        }
    }

    loadImagesOnScroll();
    loadMasonry();
    loadMagnificPopUp();

    //click on category
    imageCategories.on('click', function () {
        var category = $(this).text().toLowerCase().trim();
        setSelectedCategory(category);
    });
};

/*****************************************Google analytics******************************************************************/
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g;
    m.parentNode.insertBefore(a, m);
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-54105375-4', 'auto');
ga('send', 'pageview');
/*End of Google analytics*/