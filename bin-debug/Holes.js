var Holes = (function (_super) {
    __extends(Holes, _super);
    function Holes() {
        _super.call(this);
        this.place = [
            [140, 260],
            [330, 260],
            [530, 265],
            [110, 350],
            [330, 350],
            [530, 350],
            [105, 450],
            [330, 455],
            [550, 455]
        ];
        this.makeHoles();
    }
    var d = __define,c=Holes,p=c.prototype;
    p.makeHoles = function () {
        this.holes = new Array();
        for (var a = 0; a < this.place.length; a++) {
            var container = new egret.Sprite();
            container.x = this.place[a][0];
            container.y = this.place[a][1];
            this.addChild(container);
            this.holes.push(container);
        }
    };
    p.getHole = function (_index) {
        return this.holes[_index];
    };
    return Holes;
}(egret.Sprite));
egret.registerClass(Holes,'Holes');
//# sourceMappingURL=Holes.js.map