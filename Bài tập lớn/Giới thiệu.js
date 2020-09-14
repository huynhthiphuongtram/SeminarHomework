$(document).ready(function() {
    $("#Gototopimg").hide()         //Ẩn Davinci    
    $(window).scroll(function() {   //Cho Davinci xuất hiện khi trượt xuống
      var t = $(this).scrollTop()
      if (t >= 200)
          $("#Gototopimg").show(500)
      else
          $("#Gototopimg").hide(500)
    })
    $("#Gototop").click(function(){ //Bấm vào Davinci sẽ quay về đầu trang
      $('html, body').animate({
          'scrollTop': 0
      }, 500)
    })
});