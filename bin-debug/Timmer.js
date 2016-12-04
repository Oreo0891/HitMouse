var Time = (function (_super) {
    __extends(Time, _super);
    function Time() {
        _super.call(this);
        this.timeShow = new egret.TextField();
        this.timeS = 31;
        this.timer = new egret.Timer(1000, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.showTime, this);
        this.timer.start();
        var timePic = Main.createBitmapByName("time_png");
        timePic.x = 230;
        timePic.y = 144;
        this.addChild(timePic);
    }
    var d = __define,c=Time,p=c.prototype;
    p.showTime = function () {
        this.timeS--;
        this.timeShow.text = this.timeS + "";
        this.addChild(this.timeShow);
        this.timeShow.x = 280;
        this.timeShow.y = 150;
        this.timeShow.textColor = 0xFA8D3B;
        if (this.timeS <= 0) {
            var gameOver = new GameOver();
            this.timer.stop();
            this.parent.parent.addChild(gameOver);
            this.parent.parent.removeChild(this.parent);
        }
    };
    return Time;
}(egret.Sprite));
egret.registerClass(Time,'Time');
//# sourceMappingURL=Timmer.js.map