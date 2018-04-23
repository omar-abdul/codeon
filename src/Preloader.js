



 Game.Preloader= function(game){

	this.preloaderBar=null;
};

Game.Preloader.prototype={

	preload:function(){
		this.preloaderBar=this.add.sprite(this.world.centerX,this.world.centerY,'preloaderBar');

		this.preloaderBar.anchor.setTo(0.5,0.5);

		this.time.advancedTiming=true;
		this.load.setPreloadSprite(this.preloaderBar);


		//load assets
          this.load.spritesheet('btn', 'asset/btn.png',64,64);
           this.load.spritesheet('btnstart', 'asset/btnstart.png',128,64);
            this.load.spritesheet('btnhi', 'asset/btnhig.png',128,30);
            this.load.image('startback',"asset/back.jpg");

		this.load.atlas('player',"asset/pumpkin.png","asset/pumpkin.json");
        this.load.tilemap('map',"asset/level1.json",null,Phaser.Tilemap.TILED_JSON);
        
          //this.load.image('tile',"asset/tilemap.png");
          this.load.image('spike',"asset/spikes.png");
          this.load.image('cherry',"asset/cherry.png");

          this.load.tilemap('map2',"asset/lev2.json",null,Phaser.Tilemap.TILED_JSON);
          this.load.image('lev',"asset/tilemap2.png");
          this.load.image('slice',"asset/slice27_27.png");


          this.load.image('flag',"asset/flagBlue.png");
       
          this.load.spritesheet('quest',"asset/exclamation_spritesheet_01.png",16,32);
          this.load.spritesheet('buttonjump',"asset/button-diagonal copy.png",192,192);
          this.load.spritesheet('buttonright',"asset/button-round-b copy.png",128,128);
          this.load.spritesheet('buttonleft',"asset/button-round-a copy.png",128,128);
          this.load.spritesheet('truebutton',"asset/buttonblue.png",100,50);
          this.load.spritesheet('falsebutton',"asset/buttonbluefalse.png",100,50);
          this.load.spritesheet('learnt',"asset/learnt.png",100,50);
         

          this.load.spritesheet('questbubble',"asset/questionbubble.png");
          this.load.image('background1',"asset/backi.png");
          this.load.image('background2',"asset/level2bg.png");
          this.load.image('background3',"asset/back3.png");
          

          this.load.audio('song',['asset/MattOglseby - 2.m4a','asset/MattOglseby - 2.ogg']);
          this.load.audio('achieve',"asset/NewAchievement1.ogg");

          
	},
	

	create:function(){
		music=this.add.audio('song');
          music.loop=true;
          music.play();

		 this.state.start('MainMenu');
		
	},

	update:function(){}
	
  };



