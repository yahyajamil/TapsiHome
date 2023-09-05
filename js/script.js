$(document).ready(function () {
    $(".wrapper").each(function () {
        var $title = $(this).find(".title");
        var $subTitle = $(this).find(".sub-title");

        $title.mouseover(function () {
            $subTitle.css("display", "inline-block");
        });

        $title.mouseout(function () {
            $subTitle.css("display", "none");
        });
    });

    function rotateItems() {
        let items = [
            {
                image1: "images/cc-classic.png",
                image2: "images/illus-classic.webp",
                title: "تپسی کلاسیک",
                text: "با سرویس کلاسیک تپسی، یک خودروی اختصاصی برای رسیدن به مقصدتان دارید. تپسی کلاسیک، راهی سریع و آسان برای سفرهای درون‌شهری در هر ساعتی از روز است. در این سرویس، شما امکان تعیین دو یا چند مقصد و همچنین توقف در مسیر را دارید."
            },
            {
                image1: "images/cc-tel.png",
                image2: "images/illus-tel.webp",
                title: "تپسی تلفنی",
                text: "سرویس تپسی تلفنی یا ۱۶۳۰، این امکان را به شما می‌دهد که بدون نیاز به اینترنت و اپلیکیشن، درخواست خودرو بدهید. این سرویس تاکسی تلفنی مناسب زمانی است که به هر دلیلی دسترسی به اینترنت یا اپلیکیشن ندارید. همچنین سرویس تلفنی تپسی، راه حلی مناسب برای افرادی است که کار کردن با اپلیکیشن‌های موبایلی برایشان راحت نیست."
            },
            {
                image1: "images/cc-line.png",
                image2: "images/illus-line.webp",
                title: "تپسی لاین",
                text: "تپسی لاین سرویسی است که امکان سفر اشتراکی را برایتان فراهم می‌کند. در این سرویس شما با مسافر دیگری که هم‌مسیرتان است، هم‌سفر خواهید بود و هزینه سفرتان تقسیم می‌شود."
            },
            {
                image1: "images/cc-motopeyk.png",
                image2: "images/illus-motopeyk.webp",
                title: "موتوپیک",
                text: "با استفاده از سرویس موتوپیک، بسته‌ها و مرسولاتتان با پیک موتور به مقصد ارسال می‌شوند. این سرویس مناسب زمانی است که می‌خواهید مرسوله سریع‌تر به مقصد برسد. در این سرویس، شما می‌توانید مسیر رسیدن مرسوله‌تان به مقصد را به صورت لحظه‌ای روی نقشه دنبال کنید."
            },
            {
                image1: "images/cc-autopeyk.png",
                image2: "images/illus-autopeyk.webp",
                title: "اتوپیک",
                text: "اتوپیک سرویسی برای ارسال بسته‌های شما با خودرو است. این سرویس، برای زمانی مناسب است که بسته‌های شما، با موتور قابل ارسال نیستند و یا در حین جابجایی، نیاز به مراقبت بیشتری دارند. در این سرویس نیز امکان رصد لحظه ‌به لحظه موقعیت مکانی مرسوله تا زمان رسیدن به مقصد فراهم است."
            },
            {
                image1: "images/cc-plus.png",
                image2: "images/illus-plus.webp",
                title: "تپسی پلاس",
                text: "در سرویس پلاس تاکسی اینترنتی تپسی، خودرویی با مدل بالاتر و عمر کمتر، به دنبال شما خواهد آمد. همچنین، رانندگان این سرویس بالاترین امتیاز را از مسافران دریافت کرده‌اند. در این سرویس که در حال حاضر در تهران فعال است، امکان تعیین چند مقصد یا توقف در حین سفر، وجود دارد."
            },
            {
                image1: "images/cc-hamyar.png",
                image2: "images/illus-hamyar.webp",
                title: "همیار",
                text: "سرویس همیار تپسی، به جای شما خرید می‌کند. کافیست فروشگاه مورد نظر خود را به عنوان مبدا مشخص کرده و لیست خریدتان را داخل اپ وارد کنید. این خرید‌ها می‌تواند از سوپرمارکت یا داروخانه مورد نظر شما باشند."
            }
        ]

        let $navItemsContainer = $("#nav-tab");
        let $tabContentContainer = $("#nav-tabContent");
        let $navItems = $navItemsContainer.children();
        $navItemsContainer.empty();

        $.each(items, function (index, item) {
            let $elem = $(`<a class="nav-item nav-link" id="nav-classic-tab-${index}"><img src="${item.image1}" alt="tapsi-classic-icon"><p>${item.title}</p></a>`);
            let $bodyElem = $(`<div class="tab-pane mt-4" id="nav-classic-${index}"><div class="content-container"><h3 class="title my-4 font-weight-bolder">${item.title}</h3><p class="description">${item.text}</p></div><div class="service-image" aria-label="classic service image"><img class="img-responsive p-0 main-image" src="${item.image2}"alt="tapsi-classic"></div></div>`);

            $tabContentContainer.append($bodyElem);
            $navItemsContainer.append($elem);

            $elem.on('click', function () {
                $navItems.removeClass('active');
                $tabContentContainer.children().removeClass('active d-flex');
                $bodyElem.addClass('active d-flex');
                $(this).addClass('active');
                setTimeout(function () {
                    $bodyElem.removeClass('active d-flex');
                    $(this).removeClass('active');
                }, 2000);
            });
        });

        let currentIndex = 0;
        let totalItems = items.length;

        $navItemsContainer.children().eq(currentIndex).addClass('active');
        $tabContentContainer.children().eq(currentIndex).addClass('active d-flex');

        function rotateToNext() {
            $navItemsContainer.children().eq(currentIndex).removeClass('active');
            $tabContentContainer.children().eq(currentIndex).removeClass('active d-flex');
            currentIndex = (currentIndex + 1) % totalItems;
            $navItemsContainer.children().eq(currentIndex).addClass('active');
            $tabContentContainer.children().eq(currentIndex).addClass('active d-flex');
        }

        setInterval(rotateToNext, 3000);
    }

    rotateItems();
});


