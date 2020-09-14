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
    var acc = document.getElementsByClassName("danhmuc");     //Cài đặt danh mục trượt xuống ở bên trái
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
        });
    }
    var acc = document.getElementsByClassName("conlai");     //Cài đặt danh mục trượt xuống chỗ story ở bên phải
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
        });
    }
    $("#dt").on({                   /*Hiện nền xám khi rê chuột vào*/
        mouseleave: function() {
            $(this).css({
                "background-color": ""
            })
        },
        mouseenter: function() {
            $(this).css({
                "background-color": "gray"
            })
        }
    })
    $(".sau").on({                  /*Hiện to story khi mình rê chuột vào*/
    mouseleave: function() {
        $(this).css({
            "width": "100%",
            "padding": "0px 17px 0px 17px"
        })
    },
    mouseenter: function() {
        $(this).css({
            "width": "105%",
            "padding": "0 14px 0 10px"
        })
    }
    })
});
    

