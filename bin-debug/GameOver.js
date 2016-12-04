var GameOver = (function (_super) {
    __extends(GameOver, _super);
    // public gameScore:number;
    function GameOver() {
        _super.call(this);
        this.skinName = "resource/assets/Skins/Endpage.exml";
        this.reStartBtn();
        this.showYourScore();
    }
    var d = __define,c=GameOver,p=c.prototype;
    p.showYourScore = function () {
        // var srding:Surroundings = new Surroundings();
        var myscore = new egret.TextField();
        myscore.x = 250;
        myscore.y = 350;
        myscore.size = 40;
        myscore.text = "你的得分为:" + parseInt(+Scores.gameScore + "") + "";
        this.addChild(myscore);
    };
    p.reStartBtn = function () {
        var button1 = Main.createBitmapByName("img24_png");
        button1.x = 300;
        button1.y = 400;
        this.addChild(button1);
        button1.touchEnabled = true;
        button1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reStart, this);
    };
    p.reStart = function () {
        // console.log("I'm here");
        var counter = new Counter();
        this.parent.addChild(counter);
        this.parent.removeChild(this);
    };
    return GameOver;
}(eui.Component));
egret.registerClass(GameOver,'GameOver');
//# sourceMappingURL=GameOver.js.map