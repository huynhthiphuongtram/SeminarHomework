$(document).ready(function() {    
    $(".tab_content").hide();
    $(".tab_content:first").show();
    $("table.info-table li").click(function() {
        $("table.info-table li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#"+activeTab).fadeIn();
    });
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
	var acc = document.getElementsByClassName("danhmuc");     //Cài đặt danh mục trượt xuống
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
});