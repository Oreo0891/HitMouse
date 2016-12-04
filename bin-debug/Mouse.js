var Mouse = (function (_super) {
    __extends(Mouse, _super);
    function Mouse(mouseType) {
        _super.call(this);
        this.type = mouseType;
        this.mouseContainer = new egret.Sprite();
        this.createMouse();
        this.addChild(this.mouseContainer);
    }
    var d = __define,c=Mouse,p=c.prototype;
    p.createMouse = function () {
        this.tempmouse = Main.createBitmapByName("mouse" + this.type + "_png");
        this.mouseContainer.addChild(this.tempmouse);
        egret.Tween.get(this.mouseContainer).to({ y: this.mouseContainer.y - 100 }, 1000, egret.Ease.cubicInOut).wait(1000).to({ y: this.mouseContainer.y }, 1000, egret.Ease.cubicInOut).call(function (myContainer) {
            if (myContainer && myContainer.parent) {
                myContainer.parent.removeChild(myContainer);
                myContainer = null;
            }
        }, this.mouseContainer, [this]);
        var mask0 = new egret.Shape();
        mask0.graphics.beginFill(0xffffff, 1);
        mask0.graphics.drawCircle(this.tempmouse.x + 60, this.tempmouse.y - 70, 80);
        mask0.graphics.endFill();
        this.addChild(mask0);
        this.tempmouse.mask = mask0;
    };
    p.beHit = function () {
        if (this.tempmouse && this.tempmouse.parent) {
            this.tempmouse.parent.removeChild(this.tempmouse);
            this.tempmouse = null;
        }
        this.tempmouse = Main.createBitmapByName("mouse_" + this.type + "_png");
        this.tempmouse.y += 100;
        this.mouseContainer.addChild(this.tempmouse);
        egret.Tween.get(this.tempmouse)
            .to({ y: this.tempmouse.y - 100 }, 0, egret.Ease.cubicInOut).wait(1000).to({ y: this.tempmouse.y - 100 }, 1000, egret.Ease.cubicInOut)
            .call(function (myContainer) {
            if (myContainer && myContainer.parent) {
                myContainer.parent.removeChild(myContainer);
                myContainer = null;
            }
        }, this.mouseContainer, [this]);
        var mask1 = new egret.Shape();
        mask1.graphics.beginFill(0xffffff, 1);
        mask1.graphics.drawCircle(this.tempmouse.x + 60, this.tempmouse.y - 160, 80);
        mask1.graphics.endFill();
        this.addChild(mask1);
        this.tempmouse.mask = mask1;
    };
    return Mouse;
}(egret.Sprite));
egret.registerClass(Mouse,'Mouse');
//# sourceMappingURL=Mouse.js.map