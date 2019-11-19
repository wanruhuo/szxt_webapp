//事件绑定函数
function bind(obj,eventStr,callback){
	if(obj.addEventListener){
		/*
		* addEventListener中的第三个参数表示事件传播特性
		* true:事件传播
		* false:事件不传播
		*/
		obj.addEventListener(eventStr,callback,false);
	}else{
		/* 
		 * 1、attachEvent事件中，所传递的事件字符串需要带on
		 * 
		 * 2、因为addEventListener(谁调用this就是谁)和attachEvent(window)事件中this所指的对象不是同一个
		 * 		因此在attachEvent事件的回调函数中使用匿名函数，来设置this所指的对象；
		 * */
		obj.attachEvent("on"+eventStr,function(){
			callback.call(obj);
		})
	}
}

//拖拽功能
function drag(obj){
	obj.onmousedown=function(event){
		event=event || window.event;
		var ol = event.clientX-obj.offsetLeft;
		var ot = event.clientY-obj.offsetTop;
		//该方法用来捕获所有的事件到其自身上
//		obj.setCapture && obj.setCapture();
		document.onmousemove=function(event){
			event=event || window.event;
			var left = event.clientX;
			var top = event.clientY;
			
			obj.style.left=left-ol+"px";
			obj.style.top=top-ot+"px";
		}
		
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
			//取消所有的捕获事件
//			obj.releaseCapture && obj.releaseCapture();
		}
		return false;
	}
}
