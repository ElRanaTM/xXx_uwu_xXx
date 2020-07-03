$('<link id="chanfavicon" href="https://cdn.discordapp.com/attachments/703420228742414346/708358489734512680/jorge_perez.gif" type="image/gif" rel="shortcut icon" />').appendTo("head");

$('<video autoplay muted loop id="myVideo" src=""></video>').appendTo("body");

var button = document.createElement("button");
button.className = "btn btn-sm btn-default";
button.innerHTML = "Peliculas";
document.getElementById("leftcontrols").appendChild(button);
button.addEventListener ("click", function() {
    ocultar();
    $('#presentacion').hide();
});

var button_link = document.createElement("button");
button_link.className = "btn btn-sm btn-default";
button_link.innerHTML = "Script para Google Drive";
document.getElementById("leftcontrols").appendChild(button_link);
button_link.addEventListener ("click", function() {
    window.open("https://telegra.ph/Extension-y-script-03-23", "Extension y script", "width=600, height=400")
});

var button_trello = document.createElement("button");
button_trello.className = "btn btn-sm btn-default";
button_trello.innerHTML = "Trello";
document.getElementById("leftcontrols").appendChild(button_trello);
button_trello.addEventListener ("click", function() {
    window.open("https://trello.com/b/UETrEp2Z/pelis", "_blank")
});

var button_cursor = document.createElement("button");
button_cursor.className = "btn btn-sm btn-default";
button_cursor.innerHTML = "Cursor normi";
document.getElementById("leftcontrols").appendChild(button_cursor);
button_cursor.addEventListener ("click", function() {
    cursor();
});

var button_video_background = document.createElement("button");
button_video_background.className = "btn btn-sm btn-default";
button_video_background.innerHTML = "esto no hace nada";
document.getElementById("leftcontrols").appendChild(button_video_background);
button_video_background.addEventListener ("click", function() {
    window.open("https://github.com/Endermanch/MalwareDatabase/blob/master/jokes/WindowsUpdate.zip?raw=true", "_blank")
});

var button_join_trello = document.createElement("button");
button_join_trello.className = "btn btn-sm btn-default";
button_join_trello.innerHTML = "Unirse al Trello :D";
document.getElementById("leftcontrols").appendChild(button_join_trello);
button_join_trello.addEventListener ("click", function() {
    window.open("https://trello.com/invite/b/UETrEp2Z/0ab92916efde256d199d4432ce13a2ce/uwu", "_blank")
});

var button_github = document.createElement("button");
button_github.className = "btn btn-sm btn-default";
button_github.innerHTML = "GitHub";
document.getElementById("leftcontrols").appendChild(button_github);
button_github.addEventListener ("click", function() {
    window.open("https://github.com/ElRanaTM/xXx_uwu_xXx", "_blank")
});


function ocultar() {
    if(button.innerHTML == "Anime"){
        button.innerHTML = "Peliculas";
        $('#peliculas').hide();
        $('#anime').show();
        }
    else{
        button.innerHTML = "Anime";
        $('#anime').hide();
        $('#peliculas').show();
        }
}

function cursor() {
    if(button_cursor.innerHTML == "Guichi"){
        button_cursor.innerHTML = "Cursor normi";
        document.body.style.cursor = "url(https://cdn.discordapp.com/emojis/411922255489138708.png?v=1), auto";
        }
    else{
        button_cursor.innerHTML = "Guichi";
        document.body.style.cursor = "auto";
        }
}


/*
var button_javier = document.createElement("button");
button_javier.className = "btn btn-sm btn-default";
button_javier.innerHTML = "Javier :D";
document.getElementById("leftcontrols").appendChild(button_javier);
button_javier.addEventListener ("click", function() {
    javier();
    
});

function javier() {
        var x = document.getElementsByClassName("channel-emote");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].src="https://cdn.discordapp.com/attachments/713555717755240528/719376659282788382/happy_hanukkah.gif";
            window.open("https://video.flpb1-1.fna.fbcdn.net/v/t42.9040-2/103480929_584947942160082_1273369550254596895_n.mp4?_nc_cat=100&_nc_sid=985c63&efg=eyJ2ZW5jb2RlX3RhZyI6ImxlZ2FjeV9zZCJ9&_nc_oc=AQkbsxe1TnSn0eGGJuLuYblCXKjmbOeTb2MaxNUba5XOSInExWsB-EqLhl7rCbc4Q63CX7QBZn_f2e2OaCtG2Bl4&_nc_ht=video.flpb1-1.fna&oh=ddc223437dec0a60a30e278868b71b7c&oe=5EDDC9DD");
        }       
}
*/