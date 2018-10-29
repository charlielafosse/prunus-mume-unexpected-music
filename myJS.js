// things to alter: make mobile compatible; play with fonts; play with colours; add buttons and extra functionality;

// write a function here that executes
// randomiseVid when video ends

//  problem: this ^ only works on first, hardcoded vid, and not after click listener/randomiseVid has already been called. why? perhaps something to do with the random url that's being passed in. - Doesn't seem to be a problem as console.logged random url and it successfully has ?enablejsapi=1. or there's a conflict between the player that the iframe api is making and the already-existing code - But it stil turning it blue in onPlayerReady function.

  var tag = document.createElement("script");
  tag.id = "iframe-demo";
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
    });
  }

   function onPlayerReady(event) {
  console.log("rolling");
  event.target.playVideo();
  }

  function onPlayerStateChange(event) {
    if(event.data == YT.PlayerState.ENDED){
      // alert("hello");
      randomiseVid();
      }
  }


// also, make sure, to list YT channels somewhere and their corresponding playlistIds to keep track of!
// below order corresponds to IDs
// Contain Yr Brain
// Growing Bin
// Disco Ma Non Troppo
// Dream Chimney
// Antinote Recordings
// Dark Entries Records
// Organic Music
// Adventures in Sound
// RVNG Intl.
// Fergus Clark
// Ricardo Maraña
// spool hand
// Matt Short
// Isle of Jura
// emma zoia puts pretty good music on youtube
// Left Ear Records
// jemiedub
// Music from Memory
// Obscure Little Beasties
// magrosi65
// Okonkole y Trompa
// MoogMelodiya
// Alexa Chirnoagă
// szatowski
// RJJNY
// gmercado
// Infinite Expanse
// Basic Rhythm
// Marius Georgescu
// Dusan Jankovic
// julian
// Murf Woram
// Musical Treasure
// Sonne Image
// Mr Bongo
// Saturn Archives 土星のアーカイブ
// no obi, no insert
// Brazilian Rare Grooves
// Rare & Unfamiliar Music Hunt

var collectedVids = [];

function executeRandom(){
      var randomVid = collectedVids[Math.floor(Math.random()*collectedVids.length)];
    $("h5").text(randomVid.snippet.title);
   $("h6").text("channel: " + randomVid.snippet.channelTitle);

  player.loadVideoById(randomVid.snippet.resourceId.videoId);

  // $("#player").attr("src","https://www.youtube.com/embed/" +randomVid.snippet.resourceId.videoId+"?enablejsapi=1");
  // var newUrl = $("#player").attr("src");
  // console.log(newUrl);
};

function randomiseVid(){
    var channelPlaylistIds = ["UU08jDacpvnQ67ViGO3TfTXw", "UUKwzSZH4C4fs8P36Yl7-13g", "UUeZuqnSmUxDjq33qbWtpVtg", "UUbiZfxvkjBZi9_i7k8sxMXg","UUk1jxjTo9_Q5Ud-3XCe_TlA", "UUdBdbj1ks-ihdyEO-L5U3Qw", "UUASPUONx7T4cSw3IubpbmSQ", "UUAMuwfmjImYPY2Xq_PACrvQ", "UUAMuwfmjImYPY2Xq_PACrvQ", "UUjzuPtzIC1P7X9JJFKOaoww", "UUG9inuDQ1ROLufVWNmItj_g", "UUWrt09qfWJbRqATUGfv2-oA", "UUEvOBw1tbvSY0xZ1OeVXk4A", "UUV5Ml7O3gLAfgOz97SaCNsw", "UUIUvL9I4Cgd1zSfwtgVNd-g", "UUpz7oXnz_OeuVozJZOggA6g", "UUyuxokhhrf_2lJ-ArNTNNUg", "UUvQ1Jtd1qCQYuUFyA08ZWJA", "UUj-WhJNoYVKHVs4n2eI5tHQ", "UU1WpidoYChUGcyHAcnALQIg", "UCp-XZs1z6ZDm8hOa9i1fJvg", "UUHbEFqMsIXgshWqburkwX2w", "UUwJxd6D0kKRiZBvBCc8SHYQ", "UUvaQ3kpf0RD4iLuPbhLd1DA", "UUXG_MHlRfXWHYN_qlBXKxdA", "UU4OKXcQcvNwzW0S9aOchoiA", "UUcplO6c0soIRLAJecMbfgQw", "UU5DqN_9-87Wi2-r9q0uGCEg", "UU9KPDqc4Gsv-YD5IL4r1CBQ", "UUnOFDxLA201r1yH6eGM3hag", "UUFgDSWi8sywY6i8AwAT4Jkw", "UUBG4i92lRPljHtffjD0fyqw", "UUe7Vj9aUUuVNgtagtfTV5NA", "UUpUaVaLffIuWGnxvDpapbrQ", "UUlbrGiQIGFlF-Wm4JCNM7Rg", "UUQKlrmwFP2flRdjBPoiq8PA", "UU3GsG9eD__5p2eeWaxvW7gA", "UU8ya7uaEIuwo3lRn54gpRZw", "UUvMGwfEQz5rSJQFYFl6LWVA"];

    var randomChannelPlaylistId = "";

    function chooseChannelAndSong(){
      randomChannelPlaylistId = channelPlaylistIds[Math.floor(Math.random()*channelPlaylistIds.length)];
      $.get(" https://www.googleapis.com/youtube/v3/playlistItems", {part: "snippet", maxResults: 50, playlistId: randomChannelPlaylistId, key: "AIzaSyAf2mNxfsJgmJCWoTwXVc61fsqR7ksCnls"},
           function(data){
        $.each(data.items, function(i, item){
          collectedVids.push(item);
        });
        console.log(collectedVids);
        executeRandom();
      })
    };
    chooseChannelAndSong();
};

$(document).ready(function(){
  $(".clickButton").on("click", randomiseVid);
});



// helpful link https://www.htmlgoodies.com/beyond/video/respond-to-embedded-youtube-video-events.html
