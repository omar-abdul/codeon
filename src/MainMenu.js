
 Game.MainMenu= function(game){

	
};

Game.MainMenu.prototype={

	
		init:function(){

 


		},
	

	create:function(){

		var startback=this.add.tileSprite(0,0,this.game.width,this.game.height,'startback');

		var btnstart=this.add.button(this.world.centerX-50,this.world.centerY,'btnstart',0,1,0,1);
		var btnhi=this.add.button(this.world.centerX-50,this.world.centerY+100,'btnhi',0,1,0,1);
		btnstart.inputEnabled=true;
		btnhi.inputEnabled=true;
		btnstart.events.onInputUp.add(this.begin,this);
		btnhi.events.onInputUp.add(this.view,this);
		//this.stage.backgroundColor="#64ffff";
		
	

		},

		begin:function(){
			this.state.start('Level1');
		},

		view:function(){
			this.state.start('Highscore');
		},

	};
	
  