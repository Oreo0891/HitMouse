class Surroundings extends eui.Component{
	private myhole:Holes;
	private bResult:boolean;
	public addScore:number=0;
	private scoreNum:egret.TextField=new egret.TextField();
	private changeScore:egret.Bitmap;

	public constructor() {
		super();
		this.skinName = "resource/assets/Skins/Srd.exml";

		var showScore = new Scores();
		this.addChild(showScore);

		this.myhole = new Holes();
		this.addChild(this.myhole);

		this.repeatDo();

        var ham:Hammer = new Hammer();
        this.addChild(ham);

		var displayTime:Time=new Time();
		this.addChild(displayTime);

	}

	private radIdx():number{
		
		var holesidx:number = Math.floor(Math.random() * 9);
		
        return holesidx;
	}

	private outMouse():void{
		var hid:number = this.radIdx();
		var hole:egret.Sprite = this.myhole.getHole(hid);
		if(hole.numChildren == 0){
			var mouseType:number = Math.floor(Math.random() * 5) + 1;
			var mouse:Mouse = new Mouse(mouseType);
			mouse.touchEnabled = true;
			mouse.addEventListener(egret.TouchEvent.TOUCH_TAP,(e:egret.TouchEvent)=>{
				this.bResult = this.hitTestPoint(e.stageX, e.stageY, false);
				if(this.bResult){
					mouse.touchEnabled = false;
					mouse.derection = hid;
					mouse.state = 1;
					mouse.beHit();
					this.showScore(mouseType);
					this.showAddScore(mouse,mouseType);
				}
			},this);
			hole.addChild(mouse);
		}else{
			this.outMouse();
		}
	}

	private repeatDo():void{
		var timerIn = new egret.Timer(1000, 0);
		timerIn.addEventListener(egret.TimerEvent.TIMER, this.outMouse, this);
        timerIn.start();
	}

	private showScore(mouseType:number):void{
		if(mouseType==1){
            this.addScore=this.addScore*1.2;
		}else if(mouseType==2){
            this.addScore=this.addScore+100;
		}else if(mouseType==3){
            this.addScore=this.addScore+500;
		}else if(mouseType==4){
            this.addScore=this.addScore-100;
		}else if(mouseType==5){
			this.addScore=this.addScore/2;
		}
		if(this.addScore<=0){
            this.addScore=0;
		}
		this.scoreNum.text=parseInt(this.addScore+"")+"";
		this.addChild(this.scoreNum);
		this.scoreNum.x=425;
		this.scoreNum.y=150;
		Scores.gameScore = this.addScore;
	}

	private showAddScore(mouse:Mouse,mouseType):void{
		this.changeScore = Main.createBitmapByName("score"+mouseType+"_png");
		var hole:egret.Sprite = this.myhole.getHole(mouse.derection);
		hole.addChild(this.changeScore);
		egret.Tween.get(this.changeScore)
		.to({y:this.changeScore.y-30},700,egret.Ease.cubicInOut).wait(700)
		.call(function(mymouse1:egret.Bitmap):void{
			if(mymouse1 && mymouse1.parent)
			{
				mymouse1.parent.removeChild(mymouse1);
				mymouse1 = null;
			}
		},this.changeScore,[this.changeScore]);
	}

}