function unlock()
{
	if(isLogin=='0'||isLogin==0)return ;
	var o=$("#currli + .featureBox > .zcblks1 > a");
	if(o&&o.eq(0)){
		o.children(".lock").remove();
		o.attr("href",o.attr("url"));
	}
}