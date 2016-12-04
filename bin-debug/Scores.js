var Scores = (function (_super) {
    __extends(Scores, _super);
    function Scores() {
        _super.call(this);
        var scorePic = Main.createBitmapByName("icon_25_png");
        scorePic.x = 350;
        scorePic.y = 150;
        this.addChild(scorePic);
    }
    var d = __define,c=Scores,p=c.prototype;
    return Scores;
}(egret.Sprite));
egret.registerClass(Scores,'Scores');
//# sourceMappingURL=Scores.js.map