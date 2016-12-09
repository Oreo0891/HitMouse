var IndexPage = (function (_super) {
    __extends(IndexPage, _super);
    function IndexPage() {
        _super.call(this);
        this.skinName = "resource/assets/Skins/Mainpage.exml";
        this.showbutton1();
        this.showbutton2();
        this.showbutton3();
    }
    var d = __define,c=IndexPage,p=c.prototype;
    p.showbutton1 = function () {
        var button1 = Main.createBitmapByName("img22_png");
        button1.x = 493;
        button1.y = 230;
        this.addChild(button1);
        button1.touchEnabled = true;
        button1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
    };
    p.startGame = function () {
        var counter = new Counter();
        this.parent.addChild(counter);
        this.parent.removeChild(this);
    };
    //游戏帮助按钮
    p.showbutton2 = function () {
        // var button2:egret.Bitmap = new egret.Bitmap(RES.getRes("img20"));
        var button2 = Main.createBitmapByName("img20_png");
        button2.x = 493;
        button2.y = 320;
        this.addChild(button2);
        button2.touchEnabled = true;
        button2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.askHelp, this);
    };
    p.askHelp = function () {
        var help = new HelperPage();
        this.parent.addChild(help);
        this.parent.removeChild(this);
    };
    //退出按钮
    p.showbutton3 = function () {
        var button3 = Main.createBitmapByName("img26_png");
        button3.x = 493;
        button3.y = 410;
        this.addChild(button3);
    };
    return IndexPage;
}(eui.Component));
egret.registerClass(IndexPage,'IndexPage');
//# sourceMappingURL=IndexPage.js.map