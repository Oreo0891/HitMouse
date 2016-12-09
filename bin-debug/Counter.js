var Counter = (function (_super) {
    __extends(Counter, _super);
    function Counter() {
        _super.call(this);
        this.fullTime = 4;
        this.timeContainer = new egret.Sprite();
        this.mysound = new Sound();
        this.time1 = Main.createBitmapByName("img15_png");
        this.time2 = Main.createBitmapByName("img14_png");
        this.time3 = Main.createBitmapByName("img13_png");
        this.time4 = Main.createBitmapByName("img12_png");
        this.skinName = "resource/assets/Skins/Srd.exml";
        this.timer1 = new egret.Timer(1000, 0);
        this.timer1.addEventListener(egret.TimerEvent.TIMER, this.showTime, this);
        this.timer1.start();
    }
    var d = __define,c=Counter,p=c.prototype;
    p.showTime = function () {
        this.addChild(this.timeContainer);
        this.timeContainer.x = 360;
        this.timeContainer.y = 300;
        this.countTime();
    };
    p.countTime = function () {
        this.fullTime--;
        console.log(this.fullTime);
        if (this.fullTime == 3) {
            this.mysound.time_S();
            this.timeContainer.addChild(this.time1);
        }
        else if (this.fullTime == 2) {
            this.mysound.time_S();
            this.timeContainer.addChild(this.time2);
            this.timeContainer.removeChild(this.time1);
        }
        else if (this.fullTime == 1) {
            this.mysound.time_S();
            this.timeContainer.addChild(this.time3);
            this.timeContainer.removeChild(this.time2);
        }
        else if (this.fullTime == 0) {
            this.mysound.game_begin();
            this.timeContainer.addChild(this.time4);
            this.timeContainer.removeChild(this.time3);
            this.timeContainer.x = 260;
        }
        else {
            this.timer1.stop();
            this.startGame();
        }
    };
    p.startGame = function () {
        var gameBG = new Surroundings();
        this.parent.addChild(gameBG);
        this.parent.removeChild(this);
    };
    return Counter;
}(eui.Component));
egret.registerClass(Counter,'Counter');
//# sourceMappingURL=Counter.js.map