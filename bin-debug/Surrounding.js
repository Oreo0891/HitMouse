var Surroundings = (function (_super) {
    __extends(Surroundings, _super);
    function Surroundings() {
        _super.call(this);
        this.addScore = 0;
        this.scoreNum = new egret.TextField();
        this.mymusic = new Sound();
        this.skinName = "resource/assets/Skins/Srd.exml";
        var showScore = new Scores();
        this.addChild(showScore);
        this.myhole = new Holes();
        this.addChild(this.myhole);
        this.repeatDo();
        var ham = new Hammer();
        this.addChild(ham);
        var displayTime = new Time();
        this.addChild(displayTime);
        this.mymusic.bgm_S();
    }
    var d = __define,c=Surroundings,p=c.prototype;
    p.radIdx = function () {
        var holesidx = Math.floor(Math.random() * 9);
        return holesidx;
    };
    p.outMouse = function () {
        var _this = this;
        var hid = this.radIdx();
        var hole = this.myhole.getHole(hid);
        if (hole.numChildren == 0) {
            var mouseType = Math.floor(Math.random() * 5) + 1;
            var mouse = new Mouse(mouseType);
            mouse.touchEnabled = true;
            mouse.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                _this.bResult = _this.hitTestPoint(e.stageX, e.stageY, false);
                if (_this.bResult) {
                    mouse.touchEnabled = false;
                    mouse.derection = hid;
                    mouse.state = 1;
                    mouse.beHit();
                    _this.showScore(mouseType);
                    _this.showAddScore(mouse, mouseType);
                }
            }, this);
            hole.addChild(mouse);
        }
        else {
            this.outMouse();
        }
    };
    p.repeatDo = function () {
        var timerIn = new egret.Timer(1000, 0);
        timerIn.addEventListener(egret.TimerEvent.TIMER, this.outMouse, this);
        timerIn.start();
    };
    p.showScore = function (mouseType) {
        if (mouseType == 1) {
            this.addScore = this.addScore * 1.2;
        }
        else if (mouseType == 2) {
            this.addScore = this.addScore + 100;
        }
        else if (mouseType == 3) {
            this.addScore = this.addScore + 500;
        }
        else if (mouseType == 4) {
            this.addScore = this.addScore - 100;
        }
        else if (mouseType == 5) {
            this.addScore = this.addScore / 2;
        }
        if (this.addScore <= 0) {
            this.addScore = 0;
        }
        this.scoreNum.text = parseInt(this.addScore + "") + "";
        this.addChild(this.scoreNum);
        this.scoreNum.x = 425;
        this.scoreNum.y = 150;
        Scores.gameScore = this.addScore;
    };
    p.showAddScore = function (mouse, mouseType) {
        this.changeScore = Main.createBitmapByName("score" + mouseType + "_png");
        var hole = this.myhole.getHole(mouse.derection);
        hole.addChild(this.changeScore);
        egret.Tween.get(this.changeScore)
            .to({ y: this.changeScore.y - 30 }, 700, egret.Ease.cubicInOut).wait(700)
            .call(function (mymouse1) {
            if (mymouse1 && mymouse1.parent) {
                mymouse1.parent.removeChild(mymouse1);
                mymouse1 = null;
            }
        }, this.changeScore, [this.changeScore]);
    };
    return Surroundings;
}(eui.Component));
egret.registerClass(Surroundings,'Surroundings');
//# sourceMappingURL=Surrounding.js.map