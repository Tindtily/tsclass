function toCourseVideo(courseId,videoId)
{
if(!(courseId&&videoId)||courseId.length<=0||videoId.length<=0)return;
if(iscommiting)
{
    alert("请求处理中，请稍候...");
    return;
}
iscommiting=true;
 $.ajax({
        type:"POST", 
        data:
        {
            courseId:courseId,
            videoId:videoId
        },
        async: true,  
        cache: false,   
        url: "/courseAction!getCourseVideo",
        dataType:"text",
        contentType:"application/x-www-form-urlencoded; charset=UTF-8",
        timeout : 30000,
        success:function(data)
        {
            iscommiting=false;
            if(data&&data.length>0){
                 $("#video_list").html(data);
                 cur_video=$("#span_cur_video").attr("cur_video");
                 init_scroll();
                 publishVideo($("#span_localflv").attr("localflv"),
                        $("#span_flv").attr("flv")+"?t="+new Date().getTime(),
                        $("#span_subtitle").attr("subtitle"),
                        $("#span_localsubtitle").attr("localsubtitle"),
                        $("#span_isSend").attr("issend"),
                        $("#span_recieveurl").attr("recieveurl"),
                        1,
                        $("#span_nextVideoId").attr("nextvideoid"),
                        $("#span_nextVideourl").attr("nextvideourl"),
                        $("#span_vbai").attr("vbai"),
                        $("#span_currentVideoExamineCount").attr("currentVideoExamineCount"),
                        $("#span_homeworkurl").attr("homeworkurl"),
                        cur_video
                        );
            }else
            {
                alert("服务器忙,请稍候再试或者重新刷新页面。");
            }
        } ,
        error : function(e)
        {
            iscommiting=false;
            alert("服务器忙,请稍候再试或者重新刷新页面。");
        }
    });
}