class Scores extends egret.Sprite{
	public static gameScore:number;
	public constructor() {
		super();
		var scorePic:egret.Bitmap=Main.createBitmapByName("icon_25_png");
		scorePic.x=350;
		scorePic.y=150;
		this.addChild(scorePic);
	}
	
}