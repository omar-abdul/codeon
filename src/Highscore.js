Game.Highscore=function(game){};
Game.Highscore.prototype={

create :function(){

this.stage.backgroundColor="#000000";


var style={ font: "32px Arial", fill: "#ffffff", align: "center" };

highscoretxt=this.add.text(this.world.centerX,this.world.centerY,"High Score:\n",style);
var highscore=localStorage.getItem('highscore');
if(highscore===null){
	localStorage.setItem('highscore',0);
	highscore=0;
}

highscoretxt.text="High Score:\n"+highscore;


var backtxt=this.add.text(this.world.x,this.world.y,"BACK",style);
backtxt.inputEnabled=true;
backtxt.events.onInputUp.add(this.goBack,this);


},

goBack:function(){

	this.state.start('MainMenu');

}



};