var Hammer = (function (_super) {
    __extends(Hammer, _super);
    function Hammer() {
        _super.call(this);
        this.once(egret.Event.ADDED_TO_STAGE, this.Hitit, this);
    }
    var d = __define,c=Hammer,p=c.prototype;
    p.Hitit = function (e) {
        var _this = this;
        var hitmusic = new Sound();
        var smallHammer = Main.createBitmapByName("ham_pic");
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            _this.addChild(smallHammer);
            hitmusic.hammer_S();
            smallHammer.touchEnabled = false;
            smallHammer.x = e.stageX + smallHammer.width * 0.6;
            smallHammer.y = e.stageY - smallHammer.height * 0.2;
            smallHammer.anchorOffsetX = smallHammer.width * 0.8;
            smallHammer.anchorOffsetY = smallHammer.height * 0.8;
            egret.Tween.get(smallHammer).to({ rotation: -40 }, 300, egret.Ease.backInOut).call(function () {
                smallHammer.rotation = 40;
                if (smallHammer.parent) {
                    smallHammer.parent.removeChild(smallHammer);
                }
            }, _this);
        }, this);
    };
    return Hammer;
}(egret.Sprite));
egret.registerClass(Hammer,'Hammer');
//# sourceMappingURL=Hammer.js.map