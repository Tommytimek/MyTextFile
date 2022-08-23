
var i = 0;
var time
var page = 0
var id = "1"
var url = ""
var pic_name = new Image()
var pic = new Array()

function k(x, y, z) {
    page = x
    id = y
    url = z
    if (page != 0) {
        i = 0
        xianshi()
    }
}
function xianshi() {
    clearTimeout(time)
    if (i >= page) {
        i = 1;
    }
    else {
        i += 1;
    }
    pic_name.src = url + i + ".jpg"
    if (pic[i - 1] != pic_name.src) {
        pic[i - 1] = pic_name.src
    }

    const n = document.getElementById(id);
    n.setAttribute("src", pic[i - 1]);
    time = setTimeout(xianshi, 3000);
}
function left() {
    clearTimeout(time);
    if (i <= 1) {
        i = page - 1;
    }
    else {
        i -= 2;
    }
    xianshi();
}
function right() {
    clearTimeout(time);
    xianshi();
}
