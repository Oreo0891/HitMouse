var Sound = (function (_super) {
    __extends(Sound, _super);
    function Sound() {
        _super.call(this);
    }
    var d = __define,c=Sound,p=c.prototype;
    //锤子挥动声音
    p.hammer_S = function () {
        this.hammer_s = new egret.Sound();
        this.hammer_s.load("resource/assets/MySound/no_hit.mp3");
        this.hammer_s.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
    };
    //游戏结束声音
    p.over_S = function () {
        this.gameover_s = new egret.Sound();
        this.gameover_s.load("resource/assets/MySound/over_music.mp3");
        this.gameover_s.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
    };
    //倒计时声音
    p.time_S = function () {
        this.time_s = new egret.Sound();
        this.time_s.load("resource/assets/MySound/second_music.mp3");
        this.time_s.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
    };
    //游戏开始声音
    p.game_begin = function () {
        this.begin_s = new egret.Sound();
        this.begin_s.load("resource/assets/MySound/begin_music.mp3");
        this.begin_s.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
    };
    //播放声音
    p.onLoadComplete = function (event) {
        //获取加载到的 Sound 对象
        var sound = event.target;
        //播放音乐
        var channel = sound.play(0, 1);
    };
    //游戏开始声音
    p.bgm_S = function () {
        this.bgm_s = new egret.Sound();
        this.bgm_s.load("resource/assets/MySound/game_music.mp3");
        this.bgm_s.addEventListener(egret.Event.COMPLETE, this.onLoadComplete1, this);
    };
    p.onLoadComplete1 = function (event) {
        //获取加载到的 Sound 对象
        var sound = event.target;
        //播放音乐
        var channel = sound.play(0, 0);
    };
    Sound.sound = new Sound();
    return Sound;
}(egret.DisplayObjectContainer));
egret.registerClass(Sound,'Sound');
//# sourceMappingURL=Sound.js.map