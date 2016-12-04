class HelperPage extends eui.Component{
	public constructor() {
		super();
		this.skinName = "resource/assets/Skins/Helppage.exml";
		this.backToMenu();
	}
	private backToMenu():void{
		var backbutton: egret.Bitmap = Main.createBitmapByName("img28_png");
		backbutton.x=300;
		backbutton.y=380;
		this.addChild(backbutton);
		backbutton.touchEnabled=true;
		backbutton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.changePage,this);
	}
	private changePage(){
		var idxPage:IndexPage = new IndexPage();
		this.parent.addChild(idxPage);
		this.parent.removeChild(this);
	}
}