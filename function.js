const play_btn = document.querySelector('.buter')
const audio = document.querySelector('.audio')
var source = document.getElementById('audioSource');
let time = document.querySelector('.duration')
let tra = document.querySelector('.track')
let vol = document.querySelector('.slider_valume')

var module = document.querySelector(".block_playlist_text a");
let name_song = document.querySelector('.name_song')

let play_track = document.querySelectorAll('.buter_track2')
// var play_track_create = document.createElement("img");
//     play_track_create.innerHTML = '<img style="position: relative; top: 25%; left: 35%;' +
//         'width: 20px; height: 26px;" class="play_track_img" src="img/Polygon%2012%20(2).png">';
//
    let track = document.createElement('audio');
duration = track.duration;
valum = track.volume
// let songs = ['ANAZE', 'ANAZED', 'd477477ls - I miss you', 'OGO2 - BandCamp', 'Pop Smoke - AP']
let song_index = 0
let Playing_song = false
let what_play = false

function load_songs(song) {
    audio.src = `audio/${song}.mp3`

}
let resize2 = false;

var burger_menu = document.querySelector('.burger_menu')
var fat = document.querySelector('.dell')
let burger_on = false
$(document).ready(function() {
    $(document).on('click', '.burg', function () {
        console.log("burger")
        if (burger_on === false) {
            console.log("burger false")
            burger_on = true;
            // burger_menu.style.display = '';
            $('.content_zone1').append('<ul class="burger_menu">\n' +
                '            <li><a href="profile.html">Профиль</a></li>\n' +
                            '<li><a>|</a></li>\n'+

                '            <li><a href="index.html">Главная</a></li>\n' +
                '<li><a>|</a></li>\n'+
                '            <li><a href="my_music.html">Моя музыка</a></li>\n' +

                '<li><a>|</a></li>\n'+
                '            <li><a href="artists.html">Артисты</a></li>\n' +

                '<li><a>|</a></li>\n'+
                '            <li><a href="magazine.html">Журнал</a></li>\n' +
                '<li><a>|</a></li>\n'+
                '            <li><a href="add_music.html">Добавить песню</a></li>\n' +
                '<li><a>|</a></li>\n'+
                '            <li><a href="add_news.html">Добавить статью</a></li>\n' +
                '<li><a>|</a></li>\n'+
                '            <li><a href="#audio">Плеер</a></li>\n' +
                '        </ul>');
        }else{
            console.log("burger true")
            burger_on = false;
            $('.burger_menu').remove()
            // burger_menu.style.display = 'none'
        }
    })
})

function play_song(){
    track.play()
}
function pause_song(){
    audio.pause()
}
function play_track_create(){
    audio.pause()
}
// $(".slider_valume").bind("change", function() {
//     console.log(1)
//     track.volume = Number(`0.${vol.value}`);
//     console.log(track.volume)
//     // $(".slider_valume").attr("max", track.volume);
// });
$(document).bind("change",".slider_valume", function() {
    let vol = document.querySelector('.slider_valume')
    track.volume = Number(`0.${vol.value}`);

    // $(".slider_valume").attr("max", track.volume);
})
$(document).bind("change",".slider", function() {
    let time = document.querySelector('.slider')
    track.currentTime = $(time).val();
    $(".slider").attr("max", track.duration);
})


track.addEventListener('timeupdate', function () {
    let time = document.querySelector('.slider')

    curtime = parseInt(track.currentTime, 10);
    // console.log(curtime)
    // console.log(time)
    // console.log(66666)
    // $(document).attr('value', '.slider', function (){curtime})
    $(time).attr("value", curtime);

});
let id = 0
let play_song_real_life = false
$(document).on('click', '#play', function (){
    let play_playlist = document.getElementsByClassName('.playlist_play')

    if (what_play === true) {
        console.log(' 878732');
        if (Playing_song === false) {
            console.log(1);
            $(this).empty();
            // track.src = `audio/${this.value}.mp3`;
            play_song();
            id = this.value
            Playing_song = true;
            $(lol).empty()
            $(lol).append('<img class="play_track_img2" src="img/stop.png">');
            $('.playlist_play').empty()
            console.log(play_song_real_life)
            $(play_song_real_life).append('<img class="play_track_img2" src="img/stop.png">');
            $(this).append('<img src="img/stop.png">');
        } else {
            console.log(24);
            Playing_song = false;
            track.pause()
            $('.buter_track2').empty()
            // $(".playlist_play").css("backgroundColor", "rgba(0,0,0,.0)");
            $(lol).append('<img class="play_track_img2" src="img/Polygon%2012%20(2).png">');
            $('.playlist_play').empty()
            // play_playlist.style.backgroundColor = '';
            $(play_song_real_life).append('<img class="play_track_img2" src="img/Polygon%2012%20(2).png">');

            $("#play").empty();
            $("#play").append('<img src="img/Polygon%2012%20(2).png">');
        }
    }else{

    }
})
let lol= false

$(document).on('click', '.buter_track2, .playlist_play', function (){
    if (play_song_real_life === false || play_song_real_life === this) {
        if (Playing_song === false) {
            console.log(1);
            $(this).empty();
            if (play_song_real_life === false) {
                track.src = `songs/${this.value}.mp3`;
            }
            play_song();
            id = this.value
            Playing_song = true;
            play_song_real_life = this;
            $(this).append('<img class="play_track_img2" src="img/stop.png">');
            $("#play").empty();
            console.log(4);
            lol = this

            $("#play").append('<img src="img/stop.png">');

            // this.style.backgroundColor = "#2A2626";
            this.style.backgroundColor = "rgba(0,0,0,.5)";
            what_play = true

        } else {
            console.log(2);
            $('.playlist_play').empty()
            $("#play").empty();
            $("#play").append('<img src="img/Polygon%2012%20(2).png">');
            lol = this

            $(".buter_track2, .playlist_play").empty();
            // $(this).append('<img class="play_track_img2" src="img/Polygon%2012%20(2).png">');
            this.style.backgroundColor = "";
            console.log(2);
            Playing_song = false;
            track.pause()

        }
    }else{
        console.log(3);
        $("#play").empty();
        lol = this
        $(".playlist_play").css("backgroundColor", "rgba(0,0,0,.0)");

        $("#play").append('<img src="img/stop.png">');
        $(".buter_track2, .playlist_play").empty();
        $(this).append('<img class="play_track_img2" src="img/stop.png">');
        for (var i =0; i < play_track.length; i++) {
            play_track[i].style.backgroundColor = "rgba(0,0,0,.0)";
        }
        this.style.backgroundColor = "rgba(0,0,0,.5)";

        track.pause()
        track.src = `songs/${this.value}.mp3`;
        console.log(5);

        play_song()
        play_song_real_life = this
        Playing_song = true
    }

});
$(function() {

    $(".buter_track2, .playlist_play").mouseenter(function () {
        console.log(21)
        if (play_song_real_life === false || play_song_real_life === this) {

            if (Playing_song === false) {
            lol = this
            // $(this).append('<div style="background-color: #4CAF50; width: 100px; height: 100px;"></div>')
            $(this).append('<img class="play_track_img2" src="img/Polygon%2012%20(2).png">');

            // $(this).append('<img class="play_track_img2" src="img/Polygon%2012%20(2).png">')
            // $(".play_track_img2").fadeIn("slow");
            }else{


                // $(this).append('<div style="background-color: #4CAF50; width: 100px; height: 100px;"></div>')
                // $(this).append('<img class="play_track_img2" src="img/stop.png">');

                // $(this).append('<img class="play_track_img2" src="img/Polygon%2012%20(2).png">')
                // $(".play_track_img2").fadeIn("slow");
            }}
        else{
            // $(this).append('<div style="background-color: #4CAF50; width: 100px; height: 100px;"></div>')
            $(this).append('<img class="play_track_img2" src="img/Polygon%2012%20(2).png">');

        }});
    $(".buter_track2, .playlist_play").mouseleave(function () {
        if (play_song_real_life === this && Playing_song === true) {

        }else{
            $(this).empty();

        }
    });
});
var music_but_menu_js = document.querySelectorAll('.music_but_menu')
$(document).on('click', '.music_but_menu', function () {
    for (var i=0; i < music_but_menu_js.length; i++){
        music_but_menu_js[i].style.color='#9A9A9A';
        music_but_menu_js[i].style.borderBottom = '1px solid #9A9A9A'
    }
    console.log('12131')
    this.style.color='#E0DFDF';
    this.style.borderBottom = '1px solid #E0DFDF'
})