$(document).ready(function(){
    //header불러오기
    $.ajax({
        url:"header.html",
        dataType:"html",
        success:function(data){
            aa = $("#header").html(data).find(".headerBox");
            $("#header").html(aa);
        }
    });
    $.ajax({
        url:"footer.html",
        dataType:"html",
        success:function(data){
            bb = $("#footer").html(data).find(".footerWrap");
            $("#footer").html(bb);
        }
    });
});