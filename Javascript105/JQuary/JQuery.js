// // $(document).ready(function () {
// //     $(".btn1").click(function () {
// //         $("#pp").hide();
// //     }
// //     )
// //     $(".btn2").click(function(){
// //         $("#pp").show();
// //     })
// // })

// // $("p").on("MyCustomEvent",function(event,myName){
// //     $(this).text(myName + "Сайн байна уу");
// //     $("span").stop().css("opacity",1).text("myName = " +myName).fadein(30).fadeout(1000);
// // });
// // $("button").click(function(){
// //     $("p").trigger("MyCustomEvent", ["Ганаа"]);
// // }
// // );


// $(Document).ready(function(){
//     $(".burger-nav").click(function ()
//     {
//         $(this).show();
//     }
//     )

// });

$(document).ready(function () {
    $(".hint").hide();
    $(".wrong").hide();
    $(".correct").hide();
});
//alham4
$(".hint-box").on("click"), () => {
    $(".hint").slideToggle(1000);
};
//alham5

$(".wrong-answer-one").on("click", function () {
    $(".wrong-answer-one").fadeOut("slow");
    $(".wrong").show();

});
$(".wrong-answer-two").on("click", function (){
    $(".wrong-answer-two").fadeOut("slow")
    $(".wrong").show();

});
$(".wrong-answer-three").on("click", function () {
    $(".wrong-answer-three").fadeOut("slow");
    $(".wrong").show();

});

$(".correct-answer").on("click", function () {
    $(".correct-answer").fadeOut("fast");
    $(".correct").show();
    $(".wrong").hide();
});


