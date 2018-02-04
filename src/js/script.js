$(document).ready(function(){
    // تغيير خصائص navbar عند النزول مسافة أكير من 400 م
    $(window).scroll(function(){
        if($(this).scrollTop()>=400){
            $("#navBar").addClass("noTransparrent");
            $('#logo-image').attr('src','./images/orange-Logo.png');
        }
        else{
            $("#navBar").removeClass("noTransparrent");
            $('#logo-image').attr('src','./images/logo.png');
        }
    });
    var wow = new WOW({
        mobile:false
    });
    wow.init();

    // لإخفاء القائمة عند النقر علي أي رابط
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
      });

    //   لعمل حركة عند الإنتقال عبر الصفحة بإستخدام الروابط
    $("a.scroll").on('click', function(event){
        var hash = this.hash;
        $('html, body').animate({scrollTop: $(hash).offset().top},800,function(){});
    });

    // تغيير وتبديل صورتي + و _ في قسم الأسئلة الشائعة
    $('#headingOne').click(function(){

        if ($("#headingOne").attr("aria-expanded") == "false"){
            $(".imageOne").attr('src','./images/minusicon.svg');
        }
        else{
            $(".imageOne").attr('src','./images/plusicon.svg');
        };
 
        $(".imageTwo").attr('src','./images/plusicon.svg');
    
        $(".imageThree").attr('src','./images/plusicon.svg');
    
        $(".imageFour").attr('src','./images/plusicon.svg');
    
        $(".imageFive").attr('src','./images/plusicon.svg');

     }); 

     $('#headingTwo').click(function(){

        $(".imageOne").attr('src','./images/plusicon.svg');
 
        if ($("#headingTwo").attr("aria-expanded") == "false"){
            $(".imageTwo").attr('src','./images/minusicon.svg');
        }
        else{
            $(".imageTwo").attr('src','./images/plusicon.svg');
        };

        $(".imageThree").attr('src','./images/plusicon.svg');
    
        $(".imageFour").attr('src','./images/plusicon.svg');

        $(".imageFive").attr('src','./images/plusicon.svg');
     });

     $('#headingThree').click(function(){

        $(".imageOne").attr('src','./images/plusicon.svg');

        $(".imageTwo").attr('src','./images/plusicon.svg');

        if ($("#headingThree").attr("aria-expanded") == "false"){
            $(".imageThree").attr('src','./images/minusicon.svg');
        }
        else{
            $(".imageThree").attr('src','./images/plusicon.svg');
        }
        
        $(".imageFour").attr('src','./images/plusicon.svg');

        $(".imageFive").attr('src','./images/plusicon.svg');
     });

     $('#headingFour').click(function(){

        $(".imageOne").attr('src','./images/plusicon.svg');

        $(".imageTwo").attr('src','./images/plusicon.svg');

        if ($("#headingFour").attr("aria-expanded") == "false"){
            $(".imageFour").attr('src','./images/minusicon.svg');
        }
        else{
            $(".imageFour").attr('src','./images/plusicon.svg');
        }
        
        $(".imageThree").attr('src','./images/plusicon.svg');

        $(".imageFive").attr('src','./images/plusicon.svg');
     });

     $('#headingFive').click(function(){

        $(".imageOne").attr('src','./images/plusicon.svg');

        $(".imageTwo").attr('src','./images/plusicon.svg');

        if ($("#headingFive").attr("aria-expanded") == "false"){
            $(".imageFive").attr('src','./images/minusicon.svg');
        }
        else{
            $(".imageFive").attr('src','./images/plusicon.svg');
        }
        
        $(".imageThree").attr('src','./images/plusicon.svg');

        $(".imageFour").attr('src','./images/plusicon.svg');
     });

     $('#thumbnail-img').hover(function () {
        $('#opinion').addClass('motion');
      });
});



