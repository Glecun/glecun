(function ($) {
    // Bind window onload events
    $(window).load(function () {
        var $a = $('<audio>');
        var $s = $('<source>');
        var $snow = false;
        $a.attr('autoplay', 'autoplay');
        $s.attr('type', 'audio/mpeg');
        $('body').append($a);
        shortcut.add("Ctrl+Alt+u", function () {
            $s.attr('src', 'easterEggs/sounds/shoryuken.mp3');
            $a.append($s);
            $a.get(0).load();

            var $img = $('<img src="easterEggs/images/ee/streetfighter.gif" width="85" height="140" style="right:-85px;position:absolute;bottom:0;z-index:99999" />');

            $('body')
                .css('overflow-x', 'hidden')
                .append(
                    $img.animate({
                        right: "250px",
                        bottom: "500px"
                    }, 600).
                        animate({
                            right: "-85px",
                            bottom: "0px"
                        }, 600, function () {
                            $img.remove();
                        })
                );
        });
        shortcut.add("Ctrl+Alt+t", function () {
            if (!$snow) {
                $snow = true;
                var $img = $('<img id="santaGif" src="easterEggs/images/ee/santa.gif" width="50" height="50" style="right:0;position:absolute;bottom:0;z-index:99999" />');
                $s.attr('src', 'easterEggs/sounds/christmas.mp3');
                $a.append($s);
                $a.get(0).load();
                $('body')
                    .css('overflow', 'hidden')
                    .append(
                        $img
                            .animate({
                                right: '120%',
                                bottom: '80%'
                            }, 6000, function () {
                                $img.css('right', '-50px');
                            })
                            .animate({
                                right: '120%',
                                bottom: '50%'
                            }, 6000, function () {
                                $img.css('right', '-50px');
                            })
                            .animate({
                                right: '120%',
                                bottom: '30%'
                            }, 6000, function () {
                                $img.css('right', '-50px');
                            })
                            .animate({
                                right: '120%',
                                bottom: '90%'
                            }, 6000, function () {
                                $img.remove();
                            })
                    );
                $(document).snowfall({
                    image: "easterEggs/images/ee/flake.png",
                    minSize: 10,
                    maxSize: 32
                });
                return true;
            }
            $('audio').each(function () {
                $(this).get(0).pause();
                $(this).get(0).currentTime = 0;
            });
            $('#santaGif').remove();
            $(document).snowfall('clear');
            $snow = false;
        });
    });
})(jQuery);