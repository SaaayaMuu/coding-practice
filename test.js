const fade_bottom = 50; // 画面下からどの位置でフェードさせるか(px)
const fade_move = 100; // どのぐらい要素を動かすか(px)
const fade_time = 800; // エフェクトの時間(ms)

// $(".slide-left").css({
//     opacity: 0,
//     transform: "translateX(" + fade_move + "px)",
//     transition: fade_time + "ms",
//   });

//ウィンドウの高さを取得
// var window_h = $(window).height();

// //スクロールイベント
// $(window).on("scroll", function() {

//     //スクロールの位置を取得する
//     var scroll_top = $(window).scrollTop();
//     //スクロール量を取得
// 　  $(window).scrollTop()
// 　
//     //eachにより各ボックスの処理
//     $(".slide-content").each(function() {
// 　　//各ボックスのトップの位置
//     var elem_pos = $(this).offset().top;

//     if(scroll_top >= elem_pos - window_h){
//         $(this).addClass(".show");　//fadeinクラスを追加
//      } else{
//         $(this).removeClass(".show"); //fadinクラスを削除
//      }

//   });
// });

// var window_h = $(window).height();
// スクロールイベント
// $(window).on("scroll", function() {
//   var scroll_top = $(window).scrollTop();

//   // $('.slide-right').css({
//   //   'transform': 'translateX(200%)'
//   // });

//   $(".slide-content").each(function() {
//     var elem_pos = $(this).offset().top;
//   　
//     //どのタイミングでフェードインさせるか
//     if (scroll_top >= elem_pos - window_h+50) {
//       $(this).addClass("show");
//     } 
//     // else {
//     //   $(this).removeClass("show");
//     // }
//   });


// });

$('.inview-slide-left').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
  if(isInView){
    // 要素が表示されたらslide-leftクラスを追加
    $(this).stop().addClass('slide-left');
  }
});
// BBBが選ばれる理由（スライド右）
$('.inview-slide-right').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
  if(isInView){
    // 要素が表示されたらslide-rightクラスを追加
    $(this).stop().addClass('slide-right');
  }
});


var window_h = $(window).height();
$(window).on("scroll", function() {
  var scroll_top = $(window).scrollTop();


  $(".voice-content").each(function() {
    var elem_pos = $(this).offset().top;
  　
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h+50) {
      $(this).addClass("view");
    } 
    // else {
    //   $(this).removeClass("show");
    // }
  });


});

$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    $('#menu-content').fadeToggle();
    event.preventDefault();
  });
});