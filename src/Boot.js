
var Game={};

 Game.Boot =function(game){

};
var gameWidth=800;
var gameHeight=480;

Game.Boot.prototype={


	init:function(){
		
		this.add.plugin(Fabrique.Plugins.InputField);


			this.input.maxPointers=2;
			this.stage.disableVisibilityChange=true;
        if(this.game.device.desktop){
 

        	this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
        

			
 this.scale.pageAlignHorizontally = true;
   this.scale.pageAlignVertically = true; 
this.scale.minWidth = gameWidth/2;           
this.scale.minHeight = gameHeight/2;
    this.scale.maxWidth = gameWidth;  
this.scale.maxHeight = gameHeight; 
this.scale.refresh();}
        else{
              this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;            this.scale.minWidth = gameWidth/2;            this.scale.minHeight = gameHeight/2;            this.scale.maxWidth = 2048;          this.scale.maxHeight = 1228;        this.scale.pageAlignHorizontally = true;            this.scale.pageAlignVertically = true;            this.scale.forceOrientation(true, false); 
            this.scale.refresh(); 
        }
			
        
        // Re-calculate scale mode and update screen size. This only applies if
        // ScaleMode is not set to RESIZE.
        //this.scale.setScreenSize(true);

			

			

		},

	preload:function(){

		this.load.image('preloaderBar','asset/loading.png');

	},
	create:function(){
		
		//this.scale.setScreenSize(true);
       //var pre= this.add.sprite(0,0 ,'preloaderBar');

		this.game.state.start("Preloader");
	}
};