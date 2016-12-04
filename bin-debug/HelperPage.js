var HelperPage = (function (_super) {
    __extends(HelperPage, _super);
    function HelperPage() {
        _super.call(this);
        this.skinName = "resource/assets/Skins/Helppage.exml";
        this.backToMenu();
    }
    var d = __define,c=HelperPage,p=c.prototype;
    p.backToMenu = function () {
        var backbutton = Main.createBitmapByName("img28_png");
        backbutton.x = 300;
        backbutton.y = 380;
        this.addChild(backbutton);
        backbutton.touchEnabled = true;
        backbutton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changePage, this);
    };
    p.changePage = function () {
        var idxPage = new IndexPage();
        this.parent.addChild(idxPage);
        this.parent.removeChild(this);
    };
    return HelperPage;
}(eui.Component));
egret.registerClass(HelperPage,'HelperPage');
//# sourceMappingURL=HelperPage.js.map