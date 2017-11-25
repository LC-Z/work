window.onload=function(){
	var search=document.getElementById('main_search');
	var suggest=document.getElementById('suggest-search');
	var inputBorder=search.getElementsByTagName('input')[0];
	var suggests=suggest.getElementsByTagName('li');
	var mainNav=document.getElementById('main_nav_r');
	var imgNum=document.getElementById('imgNum');
	var navNum=imgNum.getElementsByTagName('a');	
	var speed=3000;
	
	// 导航图片滚动	
	var myScroll=setInterval("scrollUp()",speed);
	mainNav.onmouseover=function(){
		clearInterval(myScroll);
	}
	mainNav.onmouseout=function(){
		myScroll=setInterval("scrollUp()",speed);
	}
	 for (var i =0; i <navNum.length; i++ ){	
	 	navNum[i].onmouseover=function(){
	 		scrollUp();
		}		
	}

	// 拖动滚动条时显示backtop
	window.onscroll=function(){
		var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
		var backBlock=document.getElementById('backtop');
		if(scrollTop>0){			
			backBlock.style.display='block';
		}else if(scrollTop==0){
			backBlock.style.display='none';
		}
	}
	// 搜索框下拉列表点击，鼠标经过的相应效果	
	search.onclick=function(event){
		var event=event||window.event;
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble=true;
		}
		suggest.style.display='block';
		inputBorder.style.border='1px solid #00B38A';
	}
	for(var i=0;i<suggests.length;i++){
		suggests[i].onmouseover=function(){
			this.style.background='#00B38A';
			this.style.color='#FFF';
		}
		suggests[i].onmouseout=function(){
			this.style.background='none';
			this.style.color='#555';
		}
		suggests[i].onclick=function(){
			window.location.href="https://www.lagou.com/jobs/list_"+this.innerHTML;
		}
	}
	// 点击document时隐藏下拉列表
	document.onclick=function(){
           suggest.style.display='none';
           inputBorder.style.border='1px solid #E8E8E8';
       }
}
function scrollUp(){
	var navPic=document.getElementById('main_nav_pic');
	var navImg=navPic.getElementsByTagName('li');
	var imgNum=document.getElementById('imgNum');
	var navNum=imgNum.getElementsByTagName('a');	
	var dis=-840*(navImg.length-1);
	var pic_dis=navPic.offsetLeft;
	var a=[0,-840];		
		if(pic_dis==dis){
		 	navPic.style.left=0;
		 	navNum[0].style.background='#777';
		 	for(var i=1;i<navNum.length;i++){
		 		navNum[i].style.background='#FFF';
			}					
		 }else{		
		 	navPic.style.left=pic_dis-840+'px';	
		 	for(var i=0;i<navNum.length;i++){
		 		if(navPic.offsetLeft==a[i]){
		 		navNum[i].style.background='#777';
		 		}else{
		 			navNum[i].style.background='#FFF';
		 		}
			}			
		 }
		
	}
