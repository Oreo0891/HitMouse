class Holes extends egret.Sprite{
	public holes:Array<egret.Sprite>;
	public constructor() {
		super();
		this.makeHoles();
	}

	private place:number[][]=[
			[140,260],
			[330,260],
			[530,265],
			[110,350],
			[330,350],
			[530,350],
            [105,450],
			[330,455],
			[550,455]
		];

	private makeHoles():void{
		this.holes = new Array();
		for(var a:number = 0;a < this.place.length;a++){
				var container = new egret.Sprite();
				container.x = this.place[a][0];
				container.y = this.place[a][1];
				this.addChild(container);
				this.holes.push(container);
			}
		
	}
	public getHole(_index:number):egret.Sprite
	{
		return this.holes[_index];
	}

	
}