class Counter extends eui.Component{
	private timer1:egret.Timer
	private fullTime:number = 4;
	private timeContainer:egret.Sprite = new egret.Sprite();
	private mysound:Sound = new Sound();

	private time1: egret.Bitmap = Main.createBitmapByName("img15_png");
	private time2: egret.Bitmap = Main.createBitmapByName("img14_png");
	private time3: egret.Bitmap = Main.createBitmapByName("img13_png");
	private time4: egret.Bitmap = Main.createBitmapByName("img12_png");

	public constructor() {
		super();
		
		this.skinName = "resource/assets/Skins/Srd.exml";

		
		this.timer1 = new egret.Timer(1000, 0);
		this.timer1.addEventListener(egret.TimerEvent.TIMER, this.showTime, this);
        this.timer1.start();
		
	}

	

	private showTime(){
		this.addChild(this.timeContainer);
		this.timeContainer.x = 360;
		this.timeContainer.y = 300;
		this.countTime();
	}

	private countTime(){
		this.fullTime--;
		console.log(this.fullTime);
		if(this.fullTime == 3){
			this.mysound.time_S();
			this.timeContainer.addChild(this.time1);
		}else if(this.fullTime == 2){
			this.mysound.time_S();
			this.timeContainer.addChild(this.time2);
			this.timeContainer.removeChild(this.time1);
		}else if(this.fullTime == 1){
			this.mysound.time_S();
			this.timeContainer.addChild(this.time3);
			this.timeContainer.removeChild(this.time2);
			
		}else if(this.fullTime == 0){
			this.mysound.game_begin();
			this.timeContainer.addChild(this.time4);
			this.timeContainer.removeChild(this.time3);
			this.timeContainer.x = 260;
			
		}else{
			this.timer1.stop();
			this.startGame();
		}
	}

	private startGame(){

		var gameBG= new Surroundings();
		this.parent.addChild(gameBG);
		this.parent.removeChild(this);

	}



}