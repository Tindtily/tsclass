var fuckUrl;
function toCourseVideo(courseId, videoId) {
    var _schoolCourseId = $("#schoolCourseId").val();
    if (! (courseId && videoId) || courseId.length <= 0 || videoId.length <= 0) return;
    if (iscommiting) {
        alert("�������У����Ժ�...");
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
                alert("������æ,���Ժ����Ի�������ˢ��ҳ�档")
            }
        },
        error: function(e) {
            iscommiting = false;
            alert("������æ,���Ժ����Ի�������ˢ��ҳ�档")
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
        var text = dt[l].innerHTML.replace(/[\n\s]/g, '').replace(/&nbsp;/g, '').replace(/^[0-9]��(.*?)[\(|��].*?\)$/g, '$1');
        var code = '<span style="border: 2px solid #777;padding: 7px;background: red;"><a href="http://www.baidu.com/s?wd=' + text + '" target="_blank" style="text-decoration: none;">���᣿��������</a></span>';
        dt[l].innerHTML += code
    }
}
function initUI() {
    var current = $('#currli').find('a').attr('url');
    eval(current);
    $('.black_background').append('<div style=" border: 2px dashed #054; width: 200px; height: 50px; font-size: 25px; line-height: 50px; text-align: center; cursor: pointer; position:fixed;top:45%;right:5%;z-index:9999;background-color: blue; color:black;" id="toNext">����������һ��<div></div></div>');
    $('.black_background').append('<div style="border: 2px dashed rgb(0, 85, 68); width: 550px; height: 50px; font-size: 25px; line-height: 50px; text-align: center; cursor: pointer; position: fixed; top: 83%; right: 30%; z-index: 9999; background-color: rgb(70, 196, 38); color: rgb(243, 12, 234);">�ȱ�����ȫֹͣ���ٵ���һ����Ŧ �мǣ�����<div></div></div>');
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
alert('\u8be5\u4ee3\u7801\u4ec5\u4f9bjs\u7f16\u7a0b\u5b66\u4e60\u4ea4\u6d41\u4f7f\u7528\uff0c\u82e5\u6709\u4e2a\u522b\u4eba\u58eb\u7528\u4e8e\u5546\u4e1a\u7528\u9014\u9020\u6210\u7684\u540e\u679c\u6982\u4e0e\u672c\u4eba\u65e0\u5173\n\u82e5\u56e0\u4ee3\u7801\u4f7f\u7528\u4e0d\u5f53\uff0c\u9020\u6210\u60a8\u7684\u8bfe\u7a0b\u65e0\u6cd5\u83b7\u53d6\u5b66\u5206\uff0c\u672c\u4eba\u6982\u4e0d\u8d1f\u8d23\n\n \u4ee3\u7801\u4f5c\u8005\uff1aah\u4f24\u661f \n\u535a\u5ba2\uff1ahttp://www.ccc5.cc');
if (document.location.href.indexOf('student') > 0) {
    fuckZy()
} else if (document.location.href.indexOf('courseAction') > 0) {
    
            initUI();
}
        