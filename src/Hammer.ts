class Hammer extends egret.Sprite{
	public constructor() {
		super();
		this.once( egret.Event.ADDED_TO_STAGE, this.Hitit, this );
	}
	private Hitit(e:egret.Event):void{
		var hitmusic:Sound = new Sound();
		var smallHammer:egret.Bitmap=Main.createBitmapByName("ham_pic");	
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,(e:egret.TouchEvent)=>{
			this.addChild(smallHammer);
			hitmusic.hammer_S();
			smallHammer.touchEnabled =  false;

			smallHammer.x = e.stageX + smallHammer.width * 0.6;
			smallHammer.y = e.stageY - smallHammer.height * 0.2;
			smallHammer.anchorOffsetX = smallHammer.width * 0.8;
			smallHammer.anchorOffsetY = smallHammer.height * 0.8;
		
			egret.Tween.get(smallHammer).to({rotation:-40},300,egret.Ease.backInOut).call(()=>{
				smallHammer.rotation = 40;
				if(smallHammer.parent){
					smallHammer.parent.removeChild(smallHammer);
				}
			},this);
        },this);

	}
}