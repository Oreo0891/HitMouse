class Sound extends egret.DisplayObjectContainer{
	public static sound:Sound=new Sound();
	public hammer_s:egret.Sound;
	public gameover_s:egret.Sound;
	public time_s:egret.Sound;
	public begin_s:egret.Sound;
	public bgm_s:egret.Sound;
	public constructor() {
		super();
	}
	//锤子挥动声音
	public hammer_S():void {
        this.hammer_s = new egret.Sound();
        this.hammer_s.load("resource/assets/MySound/no_hit.mp3");
        this.hammer_s.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);      
    }
	//游戏结束声音
	public over_S():void {
        this.gameover_s = new egret.Sound();
        this.gameover_s.load("resource/assets/MySound/over_music.mp3");
        this.gameover_s.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);      
    }
	//倒计时声音
	public time_S():void {
        this.time_s = new egret.Sound();
        this.time_s.load("resource/assets/MySound/second_music.mp3");
        this.time_s.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);      
    }
	//游戏开始声音
	public game_begin():void {
        this.begin_s = new egret.Sound();
        this.begin_s.load("resource/assets/MySound/begin_music.mp3");
        this.begin_s.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);      
    }
    //播放声音
    private onLoadComplete(event:egret.Event):void {
        //获取加载到的 Sound 对象
        var sound:egret.Sound = <egret.Sound>event.target;
        //播放音乐
        var channel:egret.SoundChannel = sound.play(0,1);
    }
	//游戏开始声音
	public bgm_S():void {
        this.bgm_s = new egret.Sound();
        this.bgm_s.load("resource/assets/MySound/game_music.mp3");
        this.bgm_s.addEventListener(egret.Event.COMPLETE, this.onLoadComplete1, this);      
    }
	 private onLoadComplete1(event:egret.Event):void {
        //获取加载到的 Sound 对象
        var sound:egret.Sound = <egret.Sound>event.target;
        //播放音乐
        var channel:egret.SoundChannel = sound.play(0,0);
    }
}
