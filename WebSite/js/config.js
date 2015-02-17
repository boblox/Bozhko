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

    function getShareButtonsContent(imgSrc) {
        var sharers = {
            facebook: {
                url: "http://www.facebook.com/sharer/sharer.php?u="
            },
            instagram: {
                url: "http://www.instagram.com/sharer/sharer.php?u="
            },
            vkontakte: {
                url: "https://vk.com/share.php?url="
            },
            twitter: {
                url: "http://twitter.com/share?url="
            },
            messenger: {
                url: "http://www.instagram.com/sharer/sharer.php?u="
            }
        }

        function getShareButton(type) {
            var url = sharers[type].url + encodeURIComponent(imgSrc);
            var link = $("<a>")
                .addClass(type)
                .attr('title', "share on " + type)
                //.attr('href', url)
                //.attr('target', '_blank')
                .on('click', function () {
                    window.open(url, '_blank', "width=600,height=400");
                });
            return $("<li>").append(link);
        }

        var container = $("<ul>").addClass("mfp-share-buttons");
        container.append(getShareButton("facebook"));
        container.append(getShareButton("vkontakte"));
        //container.append(getShareButton("messenger"));
        //container.append(getShareButton("instagram"));
        container.append(getShareButton("twitter"));
        return container;
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
                arrowMarkup: '<button title="%title%" type="button" class="mfp-custom-arrow arrow-%dir%">' +
                                '<div class="mfp-prevent-close"></div>' +
                             '</button>'
            },
            tLoading: '',
            closeMarkup: '<button title="%title%" class="mfp-close">' +
                        '</button>',
            mainClass: 'mfp-fade',
            removalDelay: 300,
            callbacks: {
                buildControls: function () {
                    // re-appends controls inside the main container
                    this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
                    var img = this.content.find("img");
                    this.content.find("figure").before(getShareButtonsContent(img.prop('src')));
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

/*********************************************=ImagesCarousel=****************************************************************/

function InitImagesCarousel(carouselWrapperId) {
    var carouselWrapper = $("#" + carouselWrapperId);
    var carousel = carouselWrapper.find('.owl-carousel');
    carousel.owlCarousel({
        items: 1,
        lazyLoad: true,
        dotsSpeed: 800,
        //smartSpeed:3000,
        animateOut: 'fadeOut',
        //nav: true,
        //animateIn: 'fadeIn'
    });

    //new next-prev buttons
    //carouselWrapper.find('.owl-carousel-prev').click(function () {
    //    carousel.trigger('prev.owl.carousel', [800]);
    //});
    //carouselWrapper.find('.owl-carousel-next').click(function () {
    //    carousel.trigger('next.owl.carousel', [800]);
    //});
}

/***************************************************=Disqus=******************************************************************/

function InitDisqus(identifier) {
    /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
    window.disqus_shortname = 'helenbozhko'; // required: replace example with your forum shortname
    window.disqus_identifier = identifier;
    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function () {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
}

/**********************************************=Scroll to top=***************************************************************/

function InitScrollToTop() {
    var identifier = ".scroll-to-top";

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $(identifier).fadeIn("slow");
        } else {
            $(identifier).fadeOut("slow");
        }
    });

    //Click event to scroll to top
    $(identifier).click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
}

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