$(function () {
  $("#main_title_video").YTPlayer({
    videoURL: "https://youtu.be/_bgN7BTrnLU",
    containment: ".main_title_video",
    autoPlay: true,
    ratio: 'auto',
    abundance: 0.15,
    mute: true,
    startAt: 0,
    opacity: 1,
    showControls: false,
    playOnlyIfVisible: true,
    loop: true,
    // 화질설정
    quality: 'hd1080'
  });

  $("#main_idea_sketch").YTPlayer({
    videoURL: "https://youtu.be/8bheyFVP4nI",
    containment: ".main_idea_sketch",
    autoPlay: true,
    ratio: '4/3',
    mute: true,
    startAt: 0,
    opacity: 1,
    showControls: false,
    playOnlyIfVisible: true,
    loop: true,
    // 화질설정
    quality: 'hd1080'
  });


  $('.main_product_lineup .container').slick({
    dots: false,
    infinite: true,
    speed: 100,
    fade: true,
    cssEase: 'linear',
  })



})