class Time extends egret.Sprite{
	public constructor() {
		super();
		this.timer = new egret.Timer(1000, 0);
		this.timer.addEventListener(egret.TimerEvent.TIMER, this.showTime, this);
        this.timer.start();
		
		var timePic:egret.Bitmap=Main.createBitmapByName("time_png");
		timePic.x=230;
		timePic.y=144;
		this.addChild(timePic);
	}
	private timer:egret.Timer
	private timeShow:egret.TextField=new egret.TextField();
	private timeS:number=31;
	
	private showTime():void{

		this.timeS--;
		this.timeShow.text=this.timeS+"";
		this.addChild(this.timeShow);
		this.timeShow.x=280;
		this.timeShow.y=150;
		this.timeShow.textColor=0xFA8D3B;
		if(this.timeS<=0){
			var gameOver:GameOver = new GameOver();
			var gameMusic:Sound = new Sound();
			gameMusic.over_S();
			this.timer.stop();
			this.parent.parent.addChild(gameOver);
			this.parent.parent.removeChild(this.parent);

		}

	}
}