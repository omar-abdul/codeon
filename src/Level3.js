Game.Level3=function(game){};


var myInput;
var cherry;

Game.Level3.prototype={

	create:function(){

		bg3=this.add.tileSprite(0,0,this.game.width,this.game.height,'background3');
    bg3.fixedToCamera=true;
		
		this.createInput2();
		

		player=this.add.sprite(this.world.x+400,this.world.centerY-200,'player');
		player.visible=false;
		player.animations.add('run',Phaser.Animation.generateFrameNames('Run',1,8),15,true);
		player.animations.add('jump',Phaser.Animation.generateFrameNames('Jump',1,9),20,true);
		 player.animations.add('dead',Phaser.Animation.generateFrameNames('Dead',1,10),10,true);
	

		text=this.add.text(this.world.x,this.world.y,"Create an object 'p'of Player class,\n(for example x = new Player();  Don't forget to add the semicolon in the end of your statments)",{font:'32px Arial',fill:'#000000',align:'left'});
		text2=this.add.text(this.world.x+400,this.world.y+10,"Congrats, you have created the pumpkin player",{font:'16px Arial',fill:'#000000',align:'left'});	
		text3=this.add.text(this.world.x,this.world.y,"Let us try that again",{font:'32px Arial',fill:'#000000'});
		text2.visible=false;
		text3.visible=false;	






	},

	update:function(){





	},

	

	createInput2:function(){

		var input2=this.add.inputField(this.world.x,this.world.y+100,{
			width: 300,
			height:70,
			placeHolder: 'input code'
		});
		 var submitBtn = this.add.button(this.world.x+300,this.world.y+100, 'btn',0,1,0,1);
            
            submitBtn.inputEnabled = true;
            submitBtn.input.useHandCursor = true;
            submitBtn.events.onInputUp.add(function(){
            	answer=input2.value;
            		if(answer==="p = new Player();"){
            			text3.visible=false;


			player.visible=true;
			
			text.text="now add behavior run\n (e.g x.run();)";
			text2.visible=true;
			txt3.visible=false;
		}

		if(answer==="p.run();"){
		
player.animations.play('run');

// text2.text="Look at me run!";
text.text="Using the same way, add behavior jump and behavior die";
text3.visible=false;
				
					
			
		}

		if(answer==="p.jump();"){

			player.animations.play('jump');
		
			text2.text="I caan Fly!!";
			
		}
		if (answer==="p.die();"){
			player.animations.play('dead');
			
		}
	
            });
PhaserInput.onKeyboardClose.addOnce(function() {
    this.resizeBackgroundImage();
});

	},

	






};