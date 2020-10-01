/* Source: http://jsfiddle.net/onigetoc/mk4uF/ */

$("#darkModeSVG").click(function() {
    $("#darkModeSVG").toggleClass("moveSwitch");
    $(".toggleBGC").toggleClass("brightBGC darkBGC");
    $(".toggleC").toggleClass("brightC darkC");
    $(".toggleNav").toggleClass("brightNav darkNav");
});
  