const starter = '<!DOCTYPE html><html><head>';
const meta0 = '<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0">';
const title = '<title>We were on a break!</title>';
const favicon = '<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"><link rel="icon" href="img/favicon.ico" type="image/x-icon">';
const style_tag = '<link rel="stylesheet" href="main.css">';
const head_body = '</head><body>';
const nav_start = '<nav class="navbar">';
const nav_start_home = '<div class="nav-item"><a href="/home">';
const nav_icon_home = '<svg viewBox="0 0 24 24" width="25" height="25" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>';
const nav_end_home = '<span> HOME</span></a></div>';
const nav_start_watch = '<div class="nav-item"><a href="javascript:void(0)" onclick="return openWatch()">';
const nav_icon_watch = '<svg viewBox="0 0 24 24" width="25" height="25" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>';
const nav_end_watch = '<span> WATCH</span></a></div>';
const nav_start_explore = '<div class="nav-item"><a href="/explore">';
const nav_icon_explore = '<svg viewBox="0 0 24 24" width="25" height="25" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>';
const nav_end_explore = '<span> MORE</span></a></div></nav>';
const nav = nav_start + nav_start_home + nav_icon_home + nav_end_home + nav_start_watch + nav_icon_watch + nav_end_watch + nav_start_explore + nav_icon_explore + nav_end_explore;
var watch_box = '<div id="watch-box"><div id="box-container"></div></div>';

document.write(starter + meta0 + title + favicon +style_tag + head_body + nav + watch_box);

var s = "";
var s_color = ['--primary-', '--success-', '--warning-', '--primary-', '--danger-', '--danger-', '--warning-', '--success-', '--danger-', '--primary-'];
for (var i = 1; i <= 10; i++) {
    //if (i==7) { s += '<br/>'; }
    s += '<div class="season-box" style="background-color:var(' + s_color[i-1] + 'bg);"><a href="watch.html?season=' + i + '"><h2>Season ' + i + '</h2><img src="img/s/s' + i + '_1.png" class="season-img si-left"><img src="img/s/s' + i + '_2.png" class="season-img si-right"></a></div>';
}
s += '<a href="javascript:void(0)" onclick="closeWatch()" class="closebtn">&times; Close</a>';


document.getElementById("box-container").innerHTML = s;

const wb = document.getElementById("watch-box");
function openWatch() {
    wb.style.display = "block";
    wb.style.zIndex = "999";
}
function closeWatch() {
    wb.style.display = "none";
    wb.style.zIndex = "0";
}
window.onclick = function(event) {
    if (event.target == wb) {
      this.closeWatch()
    }
}
