class Mouse extends egret.Sprite{
	public derection:number;
	public type:number;
	private tempmouse:egret.Bitmap;
	private mouseContainer:egret.Sprite;
	public state:number;
	

	public constructor(mouseType:number) {

		super();
		this.type = mouseType;
		this.mouseContainer = new egret.Sprite();
		this.createMouse();
		this.addChild(this.mouseContainer);
		
	}

	public createMouse():void{
		this.tempmouse = Main.createBitmapByName("mouse"+this.type+"_png");
		this.mouseContainer.addChild(this.tempmouse);
		egret.Tween.get(this.mouseContainer).to({y:this.mouseContainer.y-100},1000,egret.Ease.cubicInOut).wait(1000).to({y:this.mouseContainer.y},1000,egret.Ease.cubicInOut).call(
		(myContainer:egret.Sprite)=>{
			if(myContainer&&myContainer.parent){
				myContainer.parent.removeChild(myContainer);
				myContainer = null;
			}
		},this.mouseContainer,[this]);
		
		var mask0: egret.Shape = new egret.Shape();
        mask0.graphics.beginFill(0xffffff, 1);
        mask0.graphics.drawCircle(this.tempmouse.x+60, this.tempmouse.y-70, 80);
        mask0.graphics.endFill();
        this.addChild(mask0);
        this.tempmouse.mask = mask0;
	}
	public beHit():void{
			
			if(this.tempmouse&&this.tempmouse.parent){
				this.tempmouse.parent.removeChild(this.tempmouse);
				this.tempmouse = null;
			}

			this.tempmouse = Main.createBitmapByName("mouse_"+this.type+"_png");
			this.tempmouse.y += 100;
			this.mouseContainer.addChild(this.tempmouse);
			egret.Tween.get(this.tempmouse)
			.to({y:this.tempmouse.y-100},0,egret.Ease.cubicInOut).wait(1000).to({y:this.tempmouse.y-100},1000,egret.Ease.cubicInOut)
			.call((myContainer:egret.Sprite)=>{
				if(myContainer&&myContainer.parent){
					myContainer.parent.removeChild(myContainer);
					myContainer = null;
				}
			},this.mouseContainer,[this]);

			var mask1: egret.Shape = new egret.Shape();
        	mask1.graphics.beginFill(0xffffff, 1);
        	mask1.graphics.drawCircle(this.tempmouse.x+60, this.tempmouse.y-160, 80);
        	mask1.graphics.endFill();
        	this.addChild(mask1);
        	this.tempmouse.mask = mask1;
		}

	
	// }
}
