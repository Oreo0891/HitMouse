class GameOver extends eui.Component{
	public constructor() {
		super();
		this.skinName = "resource/assets/Skins/Endpage.exml";

		this.reStartBtn();
		this.showYourScore();
	}

	private showYourScore():void{
		var myscore:egret.TextField=new egret.TextField();
		
		myscore.x = 250;
		myscore.y = 350;
		myscore.size = 40;
		myscore.text="你的得分为:" + parseInt(+Scores.gameScore+"")+"";
		this.addChild(myscore);
	}

	private reStartBtn():void{
		var button1: egret.Bitmap = Main.createBitmapByName("img24_png");
		button1.x = 300;
		button1.y = 400;
		this.addChild(button1);
		button1.touchEnabled=true;
		button1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.reStart,this);
	}

	private  reStart():void{
		var counter:Counter = new Counter();
		this.parent.addChild(counter);
		this.parent.removeChild(this);
	}

}