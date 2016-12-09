class IndexPage extends eui.Component{
		public constructor() {
			super();
			this.skinName = "resource/assets/Skins/Mainpage.exml";
			this.showbutton1();
			this.showbutton2();
			this.showbutton3();
		}

		private showbutton1():void{
			var button1: egret.Bitmap = Main.createBitmapByName("img22_png");
			button1.x = 493;
			button1.y = 230;
			this.addChild(button1);
			button1.touchEnabled=true;
			button1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startGame,this);
		}

		private startGame(){
			
			var counter:Counter = new Counter();
			this.parent.addChild(counter);
			this.parent.removeChild(this);
			
		}

		//游戏帮助按钮
		private showbutton2():void{
			// var button2:egret.Bitmap = new egret.Bitmap(RES.getRes("img20"));
			var button2: egret.Bitmap = Main.createBitmapByName("img20_png");
			button2.x = 493;
			button2.y = 320;
			this.addChild(button2);
			button2.touchEnabled=true;
			button2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.askHelp,this);				
		} 

		private askHelp(){
			var help:HelperPage = new HelperPage();
			this.parent.addChild(help);
			this.parent.removeChild(this);
		}

		//退出按钮
		private showbutton3():void{
			var button3: egret.Bitmap = Main.createBitmapByName("img26_png");
			button3.x = 493;
			button3.y = 410;
			this.addChild(button3);
		}
		
	}
