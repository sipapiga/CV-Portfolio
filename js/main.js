$(document).ready(function () {
    getLanguage();
    showLanguage();
    /* Smooth scroll */
    /*     $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (e) {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                && location.hostname == this.hostname) {
                let target = $(this.hash);
                target = target.length ? target : '[name=' + this.hash.slice(1) + ']';
                console.log('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    console.log(target);
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 400, 'swing', function () {
                        window.location.hash = target;
                    });
                }
            }
        }); */

    $('#skills').hide();
    $('#CV').hide();
    $('#portfolio').hide();

    //Add active class
    $(".navbar li a").click(function () {
        $(".navbar li").removeClass('active');
        $(this).parent().addClass('active');
    });


    $('li.skills a').on('click', function () {
        $('.progress-bar').css({ "width": 0 });
        $('#home').hide();
        $('#skills').show();
        $('#CV').hide();
        $('#portfolio').hide();
        $(".progress-bar").css('width', function () {
            return $(this).attr("aria-valuenow");
        })
    })
    $('li.cv a,#cvBtn').on('click', function () {
        $('#home').hide();
        $('#skills').hide();
        $('#CV').show();
        $('#portfolio').hide();
    })
    $('li.portfolio a').on('click', function () {
        $('#home').hide();
        $('#skills').hide();
        $('#CV').hide();
        $('#portfolio').show();
    })
    $('li.homeNav a').on('click', function () {
        $('#home').show();
        $('#skills').hide();
        $('#CV').hide();
        $('#portfolio').hide();
    })
    //Choose language
    $('.dropdown-menu').on('click', function (e) {
        let laugChoosed = e.target.textContent.toLowerCase().trim();
        console.log(laugChoosed);
        console.log(e.target.textContent);
        localStorage.setItem("Language", JSON.stringify(laugChoosed));
    })
    //Get language from localStorage
    function getLanguage() {
        let lang = "";
        if (localStorage.getItem("Language") === null) {
            lang = "en";
        } else {
            lang = JSON.parse(localStorage.getItem("Language"));
        }
        return lang;
    }
    function showLanguage() {
        const langFromLocal = getLanguage();
        if (langFromLocal === "sv") {
            $('[lang="sv"').show();
            $('[lang="en"').hide();
        } else if (langFromLocal === "en") {
            $('[lang="en"').show();
            $('[lang="sv"').hide();
        }
    }
    //Change language
    $('#swedishLang').click(function () {
        $('[lang="sv"').show();
        $('[lang="en"').hide();
    });
    $('#englishLang').click(function () {
        $('[lang="sv"').hide();
        $('[lang="en"').show();
    });

    //Show msg on contace me button
    $('#saveBtn').on('click', function () {
        $('#contactmeModal').modal('hide');
    });

});
