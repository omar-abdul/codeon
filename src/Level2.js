Game.Level2=function(game){};



var player;
var isDead=true;
 var ques;
 var passed=true;

 var cherry;

    var hozMove = 500;
    var verMove = -850;
    var jumptimer=0;
    var map;
    var layer;
    var skylayer;
    var facing=true;
    var cursors;
    var score=0;
    var scoreText;
    var quest;
    var jump=false;
    var right=false;
    var left=false;
    var guide1;
    var life=0;
    var buttonCorrect;
    var buttonWrong;
    var flag;



Game.Level2.prototype={


	preload:function(){


	},



	create:function(){
	

bg2=this.add.tileSprite(0,0,this.game.width,this.game.height,'background2');
    bg2.fixedToCamera=true;
 

    
   correct=this.add.audio('achieve');

    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.checkCollision.down=false;
    map=this.add.tilemap('map2');
      
        map.addTilesetImage('tilemap2','lev');
        map.addTilesetImage('slice','slice');
       
        
       
       

      
        
        
   
     layer=map.createLayer('back');  
     

  
   map.setCollisionBetween(1,200,true,'back');
    spikes=this.add.group();
 spikes.enableBody=true;
 map.createFromObjects('Object Layer 1',4,'spike',0,true,false,spikes);


   cherry=this.add.group();
   cherry.enableBody=true;
   map.createFromObjects('Object Layer 1',9,'cherry',0,true,false,cherry);

 flag=this.add.group();
 flag.enableBody=true;

 map.createFromObjects('Object Layer 1',8,'flag',0,true,false,flag);



 

  fexclam=this.add.group();
 fexclam.enableBody=true;
 //
 sexclam=this.add.group();
 sexclam.enableBody=true;

  texclam=this.add.group();
 texclam.enableBody=true;

 foexclam=this.add.group();
 foexclam.enableBody=true;



 map.createFromObjects('Object Layer 1',10,'quest',0,true,false,fexclam);
 map.createFromObjects('Object Layer 1',11,'quest',0,true,false,sexclam);
 map.createFromObjects('Object Layer 1',12,'quest',0,true,false,texclam);
 map.createFromObjects('Object Layer 1',13,'quest',0,true,false,foexclam);


fexclam.callAll('animations.add','animations','alert',[0,1,2,3,4,5,6,7,8],10,true);
fexclam.callAll('animations.play','animations','alert');
sexclam.callAll('animations.add','animations','alert',[0,1,2,3,4,5,6,7,8],10,true);
sexclam.callAll('animations.play','animations','alert');
texclam.callAll('animations.add','animations','alert',[0,1,2,3,4,5,6,7,8],10,true);
texclam.callAll('animations.play','animations','alert');
foexclam.callAll('animations.add','animations','alert',[0,1,2,3,4,5,6,7,8],10,true);
foexclam.callAll('animations.play','animations','alert');


   
   
layer.resizeWorld();
//create pumpkin player
player=this.add.sprite(this.world.x,this.world.y+200,'player');
cursors=this.input.keyboard.createCursorKeys();

    this.physics.enable(player);
   

   player.animations.add('idle',Phaser.Animation.generateFrameNames('Idle',1,10),10,true);
   player.animations.add('run',Phaser.Animation.generateFrameNames('Run',1,8),15,true);
   player.animations.add('run_left',Phaser.Animation.generateFrameNames('Run',1,8,'_left'),15,true);
   player.animations.add('jump',Phaser.Animation.generateFrameNames('Jump',1,9),20,true);
   player.animations.add('jump_left',Phaser.Animation.generateFrameNames('Jump',1,9,'_left'),15,true);
   player.animations.add('dead',Phaser.Animation.generateFrameNames('Dead',1,10),10,true);
   player.animations.add('dead_left',Phaser.Animation.generateFrameNames('Dead',1,10,'_left'),10,true);
   player.animations.add('idle_left',Phaser.Animation.generateFrameNames('Idle',1,10,'_left'),10,true);
   player.animations.play('idle');
    player.body.collideWorldBounds=true;
    player.body.gravity.y=1200;



    //create buttons
 buttonjump = this.add.button(this.world.x+550, this.world.y+380, 'buttonjump', null, this, 0, 1, 0, 1);  //game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame
    buttonjump.fixedToCamera = true; 
    buttonjump.anchor.setTo(0.5,0.5);
    buttonjump.scale.setTo(0.8,0.8);

    buttonjump.events.onInputDown.add(function(){jump=true;});
    buttonjump.events.onInputUp.add(function(){jump=false;});

    buttonright = this.add.button(this.world.x+190, this.world.y+400, 'buttonright', null, this, 0, 1, 0, 1);  //game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame
    buttonright.fixedToCamera = true; 
    buttonright.anchor.setTo(0.5,0.5);
    buttonright.scale.setTo(0.8,0.8);
  
    buttonright.events.onInputDown.add(function(){right=true; });
    buttonright.events.onInputUp.add(function(){right=false;});

    buttonleft = this.add.button(this.world.x+50, this.world.y+400, 'buttonleft', null, this, 0, 1, 0, 1);  //game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame
    buttonleft.fixedToCamera = true; 
    buttonleft.anchor.setTo(0.5,0.5);
    buttonleft.scale.setTo(0.8,0.8);
    buttonleft.events.onInputDown.add(function(){left=true; });
    buttonleft.events.onInputUp.add(function(){left=false;});


    





cherryscore=this.add.sprite(this.world.x+300,this.world.y,'cherry');

cherryscore.fixedToCamera=true;
cherryscore.scale.setTo(0.7,0.7);

    
      scoreText=this.add.text(this.world.x+350, this.world.y+20, "", { font: "16px Arial", fill: "#33ff00", align: "center" });
      scoreText.fixedToCamera=true;
 


  //kill player if out of bounds

    player.checkWorldBounds=true;
    player.outofBoundsKill=true;
    player.events.onOutOfBounds.add(this.restart,this);
    //camera should always follow player

  this.camera.follow(player,Phaser.Camera.FOLLOW_PLATFORMER);
  but1=this.add.group();
  but2=this.add.group();

  gameover=this.add.text(player.x,this.world.centerY-200,"Game Over",{font:'64px TheMinion',fill:'#ffff00',align:'center'});
		startOver=this.add.text(this.world.x+50,this.world.centerY-100,"Play Again",{font:'32px TheMinion',fill:'#ffff00',align:'center'});
   

		gameover.visible=false;
		startOver.visible=false;
   
		startOver.inputEnabled=true;
    
		gameover.fixedToCamera=true;
		startOver.fixedToCamera=true;
		startOver.events.onInputUp.add(this.endGame,this);
   




	},

	update:function(){

		//false timer
    timeCheck=this.time.create(false);

timeCheck.add(3000,this.clearArea,this);


	       this.physics.arcade.collide(player,layer,null,this.dead);
         this.physics.arcade.TILE_BIAS=40;
       
     

         this.physics.arcade.overlap(player,cherry,this.collectCherry,null,this);
         this.physics.arcade.overlap(player,fexclam,this.questionFirst,null,this);
         this.physics.arcade.overlap(player,sexclam,this.questionSecond,null,this);
         this.physics.arcade.overlap(player,texclam,this.questionThird,null,this);
         this.physics.arcade.overlap(player,foexclam,this.questionFourth,null,this);
         this.physics.arcade.overlap(player,spikes,this.death,null,this);
         
         
         this.physics.arcade.overlap(player,flag,this.nextLevel,null,this);
        

        
          player.body.velocity.x=0;
          


//player controls
          
          if(cursors.left.isDown || left ){

          

            player.body.velocity.x= -hozMove;
              
              player.animations.play('run_left');

             
                facing=false;

          

          }
           else{player.animations.stop('run_left');}
              

              
  		if(cursors.right.isDown|| right){
             


     player.body.velocity.x= hozMove;
              player.animations.play('run');
            
             
  facing=true;
             
          
      }
      else{ player.animations.stop('run');}
               
        
        if((cursors.up.isDown|| jump) && player.body.onFloor() && this.time.now>jumptimer&&facing){

         

            player.body.velocity.y=verMove;
            player.animations.play('jump');
            jumptimer=this.time.now + 650;
          
           
            
        }
        if((cursors.up.isDown|| jump)&& player.body.onFloor() && this.time.now>jumptimer&&!facing){
            
            player.body.velocity.y=verMove;
            player.animations.play('jump_left');
            jumptimer=this.time.now + 650;
            
           
            
        }

        if((cursors.up.isUp|| !jump) && player.body.onFloor()&&!facing){
           
            player.animations.stop('jump');

        }
        if((cursors.up.isUp|| !jump)&& player.body.onFloor()&&facing){
            
            player.animations.stop('jump_left');

        }
        if(player.body.velocity.x===0&& player.body.velocity.y===0){
          if (!facing){player.animations.play('idle_left');}
          else{player.animations.play('idle');}

          if (this.input.currentPointers === 0 && this.input.activePointer.isMouse){ right=false; left=false;  jump=false;} 

            
        }
        if(!isDead&&!facing){
        	player.animations.play('dead_left');


        }
        else if(!isDead &&facing){
        	player.animations.play('dead');
        }


	},
	questionFirst :function(player,fexclam){

        
        buttonleft.inputEnabled=false;
        buttonright.inputEnabled=false;
        buttonjump.inputEnabled=false;
        jump=false;
        right=false;
        left=false;


  questbubble=this.add.sprite(fexclam.x-50,this.world.centerY-200,'questbubble');
    var style = { font: "16px TheMinion", fill: "#000000", wordWrap: true, wordWrapWidth: questbubble.width-20, align: "center",};
    questxt=this.add.text(0,0,"An object is an instance of a class",style);
    questxt.anchor.set(0.5);

   questxt.x = Math.floor(questbubble.x + questbubble.width / 2);
    questxt.y = Math.floor(questbubble.y + questbubble.height / 2);

  //questxt.text="Is a class in java declared like this: Class Something{}";
  buttonCorrect=this.add.button(questbubble.x,this.world.centerY,'truebutton',null,this,0,1,0,1);
buttonWrong=this.add.button(questbubble.x+200,this.world.centerY,'falsebutton',null,this,0,1,0,1);
    


   but1.add(buttonCorrect);

   but2.add(buttonWrong);
    //falsebutton.events.onInputUp.add(this.wrongAnswer,this);

    but1.setAll('inputEnabled',true);
 but2.setAll('inputEnabled',true);
 but1.callAll('events.onInputUp.add', 'events.onInputUp',this.correctAnswer,this);
but2.callAll('events.onInputUp.add', 'events.onInputUp',this.wrongAnswer,this);
  
 
    
 fexclam.kill();



response=1;


},

questionSecond :function(player,sexclam){
    //player.body.gravity.y=0;
        
        buttonleft.inputEnabled=false;
        buttonright.inputEnabled=false;
        buttonjump.inputEnabled=false;
        jump=false;
        right=false;
        left=false;


  questbubble=this.add.sprite(sexclam.x-50,this.world.centerY-200,'questbubble');
    var style = { font: "16px TheMinion", fill: "#000000", wordWrap: true, wordWrapWidth: questbubble.width-20, align: "center",};
    questxt=this.add.text(0,0,"Is a class in java declared like this: class Something{}",style);
    questxt.anchor.set(0.5);

   questxt.x = Math.floor(questbubble.x + questbubble.width / 2);
    questxt.y = Math.floor(questbubble.y + questbubble.height / 2);

  //questxt.text="Is a class in java declared like this: Class Something{}";
  

    

 buttonCorrect=this.add.button(questbubble.x,this.world.centerY-50,'truebutton',null,this,0,1,0,1);
buttonWrong=this.add.button(questbubble.x+200,this.world.centerY-50,'falsebutton',null,this,0,1,0,1);
    


   but1.add(buttonCorrect);

   but2.add(buttonWrong);
  
but1.setAll('inputEnabled',true);
 but2.setAll('inputEnabled',true);
 but1.callAll('events.onInputUp.add', 'events.onInputUp',this.correctAnswer,this);
but2.callAll('events.onInputUp.add', 'events.onInputUp',this.wrongAnswer,this);
      
  
    
    sexclam.kill();

response=2;


},

questionThird:function(player,texclam){
   //player.body.gravity.y=0;
        
        buttonleft.inputEnabled=false;
        buttonright.inputEnabled=false;
        buttonjump.inputEnabled=false;
        jump=false;
        right=false;
        left=false;


  questbubble=this.add.sprite(texclam.x-50,this.world.centerY-280,'questbubble');
    var style = { font: "16px TheMinion", fill: "#000000", wordWrap: true, wordWrapWidth: questbubble.width-20, align: "center",};
    questxt=this.add.text(0,0,"Objects Do not have states or behaviours",style);
    questxt.anchor.set(0.5);

   questxt.x = Math.floor(questbubble.x + questbubble.width / 2);
    questxt.y = Math.floor(questbubble.y + questbubble.height / 2);

  //questxt.text="Is a class in java declared like this: Class Something{}";
  

    

 buttonCorrect=this.add.button(questbubble.x-100,this.world.centerY-200,'falsebutton',null,this,0,1,0,1);
buttonWrong=this.add.button(questbubble.x-200,this.world.centerY-200,'truebutton',null,this,0,1,0,1);
    


   but1.add(buttonCorrect);

   but2.add(buttonWrong);
  
but1.setAll('inputEnabled',true);
 but2.setAll('inputEnabled',true);
 but1.callAll('events.onInputUp.add', 'events.onInputUp',this.correctAnswer,this);
but2.callAll('events.onInputUp.add', 'events.onInputUp',this.wrongAnswer,this);
      
  
    
    texclam.kill();

response=3;



},
questionFourth:function(player,foexclam){
   //player.body.gravity.y=0;
        
        buttonleft.inputEnabled=false;
        buttonright.inputEnabled=false;
        buttonjump.inputEnabled=false;
        jump=false;
        right=false;
        left=false;


  questbubble=this.add.sprite(foexclam.x-50,this.world.centerY-280,'questbubble');
    var style = { font: "16px TheMinion", fill: "#000000", wordWrap: true, wordWrapWidth: questbubble.width-20, align: "center",};
    questxt=this.add.text(0,0,"Inheritance allows new objects to take properties of exising objects",style);
    questxt.anchor.set(0.5);

   questxt.x = Math.floor(questbubble.x + questbubble.width / 2);
    questxt.y = Math.floor(questbubble.y + questbubble.height / 2);

  //questxt.text="Is a class in java declared like this: Class Something{}";
  

    

 buttonWrong=this.add.button(questbubble.x-100,this.world.centerY-200,'falsebutton',null,this,0,1,0,1);
buttonCorrect=this.add.button(questbubble.x-200,this.world.centerY-200,'truebutton',null,this,0,1,0,1);
    


   but1.add(buttonCorrect);

   but2.add(buttonWrong);
  
but1.setAll('inputEnabled',true);
 but2.setAll('inputEnabled',true);
 but1.callAll('events.onInputUp.add', 'events.onInputUp',this.correctAnswer,this);
but2.callAll('events.onInputUp.add', 'events.onInputUp',this.wrongAnswer,this);
      
  
    
    foexclam.kill();

response=4;



},


correctAnswer:function(){
   score+=50;
   scoreText.text=""+score;
   correct.play();
   player.body.gravity.y=1200;
        
        buttonleft.inputEnabled=true;
        buttonright.inputEnabled=true;
        buttonjump.inputEnabled=true;
        timeCheck.start();
        if(response===1){questxt.text="GOOD WORK!!!";}
   if(response===2){questxt.text=" GREAT!";}
   if(response===3){questxt.text="Just one more";}
   if(response===4){questxt.text="Nice work, proceed to the next level";}
    buttonCorrect.kill();
    buttonWrong.kill();
    

        

   
  

  
 


},

wrongAnswer:function(){
      player.body.gravity.y=1200;
        
        buttonleft.inputEnabled=true;
        buttonright.inputEnabled=true;
        buttonjump.inputEnabled=true;


   
  questxt.font="12px";
   
  if(response===1){questxt.text="You can think of objects in object oriented programming as real things, and a class as the collection of objects";
learnt=this.add.button(questbubble.x,this.world.centerY,'learnt',null,this,0,1,0,1);
  learnt.events.onInputUp.add(function(){questbubble.kill();questxt.kill();learnt.kill();});}
  if(response===2){questxt.text="Classes in Object Oriented Programming is a group of related objects put together, and in java the syntax to create a class is: class Classname{}";
learnt=this.add.button(questbubble.x,this.world.centerY-50,'learnt',null,this,0,1,0,1);
  learnt.events.onInputUp.add(function(){questbubble.kill();questxt.kill();learnt.kill();});}
  if(response===3){questxt.text="Just as in any real life object, objects in OOP have states(attributes) and behaviours.The Student object has an attribut of name,course,e.t.c, and has a behaviour learning!";
learnt=this.add.button(questbubble.x,this.world.centerY,'learnt',null,this,0,1,0,1);
  learnt.events.onInputUp.add(function(){questbubble.kill();questxt.kill();learnt.kill();});}
   if(response===4){questxt.text="Inheritance enables new objects to take on the properties of existing objects. A class that is used as the basis for inheritance is called a superclass.";
learnt=this.add.button(questbubble.x,this.world.centerY-90,'learnt',null,this,0,1,0,1);
  learnt.events.onInputUp.add(function(){questbubble.kill();questxt.kill();learnt.kill();});}
  buttonCorrect.kill();
  buttonWrong.kill();

 




      },


clearArea:function(){

questxt.kill();
questbubble.kill();




},





nextLevel:function(player,flag){

 



   this.game.state.start('Level3');
  


},

collectCherry:function(player,cherry){
	cherry.kill();
        score+=10;
        scoreText.text=""+score;
},


       

death:function(player,spikes){
  

        isDead=false;


       



},

dead:function(player,layer){



	 return isDead;
	


},

restart:function(){
	 




	isDead=true;

	

	index++;
	if(index<3){
		player.reset(this.world.x,this.world.y+200);
	}
	else{
    player.kill();
		startOver.visible=true;
		gameover.visible=true;
    
		
		index=0;
			}
},



endGame :function(){
this.keepScore();
score=0;

	this.state.start('Level1');
},
keepScore :function(){
var highscore=localStorage.getItem('highscore');

    if(score>highscore){

          localStorage.setItem('highscore',score);
        }
        },


render:function(){

	//this.game.debug.body(player);
}





       

       





};