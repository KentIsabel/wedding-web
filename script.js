// 等待文档加载完成
$(document).ready(function () {

    // 预加载器
    $(window).on('load', function () {
        $('.preloader').fadeOut('slow');
    });

    // 滚动到顶部按钮
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scroll-top').addClass('show');
        } else {
            $('.scroll-top').removeClass('show');
        }
    });

    // 点击滚动到顶部
    $('.scroll-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    // 平滑滚动到锚点
    $('a[href^="#"]').click(function (e) {
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 100
            }, 800);
        }
    });

    // 导航菜单滚动效果
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.nav-header').addClass('scrolled');
        } else {
            $('.nav-header').removeClass('scrolled');
        }
    });

    // 移动端菜单切换
    $('.menu-toggle').click(function () {
        $('.mobile-menu-wrapper').toggleClass('active');
        $('body').toggleClass('menu-open');
    });

    // 侧边菜单切换
    $('.sidebar-btn').click(function () {
        $('.sidemenu-wrapper').addClass('active');
        $('body').addClass('sidemenu-open');
    });

    $('.closeButton').click(function () {
        $('.sidemenu-wrapper').removeClass('active');
        $('body').removeClass('sidemenu-open');
    });

    // 点击外部关闭菜单
    $(document).click(function (e) {
        if (!$(e.target).closest('.sidemenu-wrapper, .sidebar-btn').length) {
            $('.sidemenu-wrapper').removeClass('active');
            $('body').removeClass('sidemenu-open');
        }
    });

    // 英雄区域滑块
    if ($('#heroSlider1').length) {
        $('#heroSlider1').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false
        });
    }

    // 测试imonial滑块
    if ($('.testi-slider1').length) {
        $('.testi-slider1').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    // 计数器动画
    $('.counter-card_number').each(function () {
        var $this = $(this);
        var countTo = $this.attr('data-odometer-final');

        $({ countNum: 0 }).animate({
            countNum: countTo
        }, {
            duration: 2000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
            }
        });
    });

    // 作品集滤镜
    if ($('.filter-item').length) {
        $('.portfolio-area-1').imagesLoaded(function () {
            $('.masonary-active').isotope({
                itemSelector: '.filter-item',
                layoutMode: 'masonry'
            });
        });
    }

    // 弹出图片
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // 弹出视频
    $('.popup-video').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // 表单提交
    $('.contact-form').submit(function (e) {
        e.preventDefault();
        var formData = $(this).serialize();

        // 这里可以添加AJAX提交逻辑
        alert('感谢您的预订！我们会尽快与您联系。');
    });

    // 新闻订阅表单
    $('.newsletter-form').submit(function (e) {
        e.preventDefault();
        var email = $(this).find('input[type="email"]').val();

        if (email) {
            alert('感谢您的订阅！');
            $(this).find('input[type="email"]').val('');
        }
    });

    // 滚动动画
    function animateOnScroll() {
        $('.title-anim, .fade_left, .fade_right').each(function () {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animated');
            }
        });
    }

    // 初始检查
    animateOnScroll();

    // 滚动时检查
    $(window).scroll(animateOnScroll);

    // 鼠标跟随效果
    $(document).mousemove(function (e) {
        $('.cursor').css({
            left: e.clientX + 'px',
            top: e.clientY + 'px'
        });

        $('.cursor-follower').css({
            left: e.clientX - 10 + 'px',
            top: e.clientY - 10 + 'px'
        });
    });

    // 鼠标悬停效果
    $('a, button, .btn').hover(
        function () {
            $('.cursor-follower').addClass('hover');
        },
        function () {
            $('.cursor-follower').removeClass('hover');
        }
    );

    // 页面加载完成后的初始化
    setTimeout(function () {
        $('body').addClass('loaded');
    }, 1000);

});

// 添加一些CSS类用于动画
$(document).ready(function () {
    // 为动画元素添加CSS类
    $('.title-anim').addClass('animate-on-scroll');
    $('.fade_left').addClass('animate-on-scroll fade-left');
    $('.fade_right').addClass('animate-on-scroll fade-right');

    // 添加鼠标跟随效果的CSS
    $('<style>')
        .prop('type', 'text/css')
        .html(`
            .cursor {
                position: fixed;
                width: 20px;
                height: 20px;
                background: rgba(0, 123, 255, 0.5);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                transition: all 0.1s ease;
            }
            .cursor-follower {
                position: fixed;
                width: 40px;
                height: 40px;
                border: 2px solid rgba(0, 123, 255, 0.3);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9998;
                transition: all 0.3s ease;
            }
            .cursor-follower.hover {
                transform: scale(1.5);
                border-color: rgba(0, 123, 255, 0.8);
            }
            .animate-on-scroll {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.6s ease;
            }
            .animate-on-scroll.animated {
                opacity: 1;
                transform: translateY(0);
            }
            .fade-left {
                transform: translateX(-50px);
            }
            .fade-right {
                transform: translateX(50px);
            }
            .nav-header.scrolled {
                background: rgba(255, 255, 255, 0.98);
                box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
            }
            .mobile-menu-wrapper {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                background: rgba(0, 0, 0, 0.9);
                z-index: 9999;
                display: none;
                align-items: center;
                justify-content: center;
            }
            .mobile-menu-wrapper.active {
                display: flex;
            }
            .sidemenu-wrapper {
                position: fixed;
                top: 0;
                right: -400px;
                width: 400px;
                height: 100vh;
                background: #333;
                z-index: 9999;
                transition: right 0.3s ease;
                overflow-y: auto;
            }
            .sidemenu-wrapper.active {
                right: 0;
            }
            body.menu-open,
            body.sidemenu-open {
                overflow: hidden;
            }
        `)
        .appendTo('head');
}); 