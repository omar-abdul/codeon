


Game.Level1=function(game){};



var scaleRatio=devicePixelRatio/3;
 var player;
 var ques;
 var passed=true;
var count=0;

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
   
    var index=0;
    
    var flag;
    var buttonCorrect;
    var buttonWrong;
   


Game.Level1.prototype={

create:function(){

	//this.stage.backgroundColor="#64efff";
 

bg1=this.add.tileSprite(0,0,this.game.width,this.game.height,'background1');
    bg1.fixedToCamera=true;
 
   


    correct=this.add.audio('achieve');
   

    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.checkCollision.down=false;
    map=this.add.tilemap('map');
      
        map.addTilesetImage('tilemap2','lev');
         map.addTilesetImage('slice','slice');
       
        
       
       

      
        
        
   
     layer=map.createLayer('back');  

     

  
   map.setCollisionBetween(1,200,true,'back');
  

   cherry=this.add.group();
   cherry.enableBody=true;
   map.createFromObjects('Object Layer 1',9,'cherry',0,true,false,cherry);
  

 flag=this.add.group();
 flag.enableBody=true;
 //

 fexclam=this.add.group();
 fexclam.enableBody=true;
 //
 sexclam=this.add.group();
 sexclam.enableBody=true;

  texclam=this.add.group();
 texclam.enableBody=true;
  foexclam=this.add.group();
 foexclam.enableBody=true;
  fiexclam=this.add.group();
 fiexclam.enableBody=true;
  siexclam=this.add.group();
 siexclam.enableBody=true;
  svexclam=this.add.group();
 svexclam.enableBody=true;
  etexclam=this.add.group();
 etexclam.enableBody=true;

 map.createFromObjects('Object Layer 1',8,'flag',0,true,false,flag);

 map.createFromObjects('Object Layer 1',11,'quest',0,true,false,fexclam);
 map.createFromObjects('Object Layer 1',12,'quest',0,true,false,sexclam);
 map.createFromObjects('Object Layer 1',13,'quest',0,true,false,texclam);
 map.createFromObjects('Object Layer 1',14,'quest',0,true,false,foexclam);
  map.createFromObjects('Object Layer 1',15,'quest',0,true,false,fiexclam);
   map.createFromObjects('Object Layer 1',16,'quest',0,true,false,siexclam);
    map.createFromObjects('Object Layer 1',17,'quest',0,true,false,svexclam);
     map.createFromObjects('Object Layer 1',18,'quest',0,true,false,etexclam);
 //

fexclam.callAll('animations.add','animations','alert',[0,1,2,3,4,5,6,7,8],10,true);
fexclam.callAll('animations.play','animations','alert');
sexclam.callAll('animations.add','animations','alert',[0,1,2,3,4,5,6,7,8],10,true);
sexclam.callAll('animations.play','animations','alert');
texclam.callAll('animations.add','animations','alert',[0,1,2,3,4,5,6,7,8],10,true);
texclam.callAll('animations.play','animations','alert');
foexclam.callAll('animations.add','animations','alert',[0,1,2,3,4,5,6,7,8],10,true);
foexclam.callAll('animations.play','animations','alert');
fiexclam.callAll('animations.add','animations','alert',[0,1,2,3,4,5,6,7,8],10,true);
fiexclam.callAll('animations.play','animations','alert');
siexclam.callAll('animations.add','animations','alert',[0,1,2,3,4,5,6,7,8],10,true);
siexclam.callAll('animations.play','animations','alert');
svexclam.callAll('animations.add','animations','alert',[0,1,2,3,4,5,6,7,8],10,true);
svexclam.callAll('animations.play','animations','alert');
etexclam.callAll('animations.add','animations','alert',[0,1,2,3,4,5,6,7,8],10,true);
etexclam.callAll('animations.play','animations','alert');






  

   
   
layer.resizeWorld();
    

player=this.add.sprite(this.world.x,this.world.y+400,'player');
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
    player.events.onOutOfBounds.add(this.restart,this);
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
  
  




    player.checkWorldBounds=true;
    player.outofBoundsKill=true;

  this.camera.follow(player,Phaser.Camera.FOLLOW_PLATFORMER);

  but1=this.add.group();
  but2=this.add.group();



 

},
update: function(){




  timeCheck=this.time.create(false);

timeCheck.add(3000,this.clearArea,this);


	       this.physics.arcade.collide(player,layer);
         this.physics.arcade.TILE_BIAS=40;
       
    

         this.physics.arcade.overlap(player,cherry,this.collectCherry,null,this);
         this.physics.arcade.overlap(player,fexclam,this.questionFirst,null,this);
         this.physics.arcade.overlap(player,sexclam,this.questionSecond,null,this);
         this.physics.arcade.overlap(player,texclam,this.questionThird,null,this);
         this.physics.arcade.overlap(player,foexclam,this.questionFourth,null,this);
         this.physics.arcade.overlap(player,fiexclam,this.questionFifth,null,this);
         this.physics.arcade.overlap(player,siexclam,this.questionSix,null,this);
         this.physics.arcade.overlap(player,svexclam,this.questionSvn,null,this);
         this.physics.arcade.overlap(player,etexclam,this.questionEight,null,this);
         this.physics.arcade.overlap(player,flag,this.nextLevel,null,this);
        

        
          player.body.velocity.x=0;



          
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
       

      

},


questionFirst :function(player,fexclam){
    //player.body.gravity.y=0;
        
        buttonleft.inputEnabled=false;
        buttonright.inputEnabled=false;
        buttonjump.inputEnabled=false;
        jump=false;
        right=false;
        left=false;


  questbubble=this.add.sprite(fexclam.x-50,this.world.centerY-100,'questbubble');
   
    var style = { font: "16px TheMinion", fill: "#000000", wordWrap: true, wordWrapWidth: questbubble.width-20, align: "center",};
    questxt=this.add.text(0,0,"You can think of objects in Object Oriented Programming as real things, and a class as the collection of objects",style);
    questxt.anchor.set(0.5);

   questxt.x = Math.floor(questbubble.x + questbubble.width / 2);
    questxt.y = Math.floor(questbubble.y + questbubble.height / 2);

  //questxt.text="Is a class in java declared like this: Class Something{}";
  
learnt=this.add.button(questbubble.x,this.world.centerY+50,'learnt',null,this,0,1,0,1);


    


   but1.add(learnt);

 
  
but1.setAll('inputEnabled',true);

 but1.callAll('events.onInputUp.add', 'events.onInputUp',this.done,this);
  
 
    
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


  questbubble=this.add.sprite(sexclam.x-50,this.world.centerY-150,'questbubble');
    var style = { font: "16px TheMinion", fill: "#000000", wordWrap: true, wordWrapWidth: questbubble.width-20, align: "center",};
    questxt=this.add.text(0,0,"Classes in Object Oriented Programming is a group of related objects put together, and in java the syntax to create a class is: class Classname{}",style);
    questxt.anchor.set(0.5);

   questxt.x = Math.floor(questbubble.x + questbubble.width / 2);
    questxt.y = Math.floor(questbubble.y + questbubble.height / 2);

  //questxt.text="Is a class in java declared like this: Class Something{}";
  

    

learnt=this.add.button(questbubble.x,this.world.centerY,'learnt',null,this,0,1,0,1);



   but1.add(learnt);

  
  
but1.setAll('inputEnabled',true);
but1.callAll('events.onInputUp.add', 'events.onInputUp',this.done,this);

  
    
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


  questbubble=this.add.sprite(texclam.x-50,this.world.centerY-300,'questbubble');
    var style = { font: "16px TheMinion", fill: "#000000", wordWrap: true, wordWrapWidth: questbubble.width-20, align: "center",};
    questxt=this.add.text(0,0,"Just as in any real life object, objects in OOP have states(attributes) and behaviours.The Student object has an attribut of name,course,e.t.c, and has a behaviour learning!",style);
    questxt.anchor.set(0.5);

   questxt.x = Math.floor(questbubble.x + questbubble.width / 2);
    questxt.y = Math.floor(questbubble.y + questbubble.height / 2);

  //questxt.text="Is a class in java declared like this: Class Something{}";
  

    

learnt=this.add.button(questbubble.x,this.world.centerY-100,'learnt',null,this,0,1,0,1);


    


   but1.add(learnt);

 
  
but1.setAll('inputEnabled',true);

 but1.callAll('events.onInputUp.add', 'events.onInputUp',this.done,this);

      
  
    
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


  questbubble=this.add.sprite(foexclam.x,this.world.centerY-150,'questbubble');
    var style = { font: "16px TheMinion", fill: "#000000", wordWrap: true, wordWrapWidth: questbubble.width-20, align: "center",};
    questxt=this.add.text(0,0,"In object-oriented programming, polymorphism refers to a programming language's ability to process objects differently depending on their data type or class.",style);
    questxt.anchor.set(0.5);

   questxt.x = Math.floor(questbubble.x + questbubble.width / 2);
    questxt.y = Math.floor(questbubble.y + questbubble.height / 2);

  //questxt.text="Is a class in java declared like this: Class Something{}";
  

    

learnt=this.add.button(questbubble.x,this.world.centerY,'learnt',null,this,0,1,0,1);


    


   but1.add(learnt);

 
  
but1.setAll('inputEnabled',true);

 but1.callAll('events.onInputUp.add', 'events.onInputUp',this.done,this);

      
  
    
    foexclam.kill();

response=3;



},
questionFifth:function(player,fiexclam){
   //player.body.gravity.y=0;
        
        buttonleft.inputEnabled=false;
        buttonright.inputEnabled=false;
        buttonjump.inputEnabled=false;
        jump=false;
        right=false;
        left=false;


  questbubble=this.add.sprite(fiexclam.x-50,this.world.centerY-200,'questbubble');
    var style = { font: "16px TheMinion", fill: "#000000", wordWrap: true, wordWrapWidth: questbubble.width-20, align: "center",};
    questxt=this.add.text(0,0,"Encapsulation is a concept that binds together the data & functions that manipulate the data, and that keeps both safe from outside interference and misuse.",style);
    questxt.anchor.set(0.5);

   questxt.x = Math.floor(questbubble.x + questbubble.width / 2);
    questxt.y = Math.floor(questbubble.y + questbubble.height / 2);

  //questxt.text="Is a class in java declared like this: Class Something{}";
  

    

learnt=this.add.button(questbubble.x,this.world.centerY,'learnt',null,this,0,1,0,1);


    


   but1.add(learnt);

 
  
but1.setAll('inputEnabled',true);

 but1.callAll('events.onInputUp.add', 'events.onInputUp',this.done,this);

      
  
    
    fiexclam.kill();

response=3;



},
questionSix:function(player,siexclam){
   //player.body.gravity.y=0;
        
        buttonleft.inputEnabled=false;
        buttonright.inputEnabled=false;
        buttonjump.inputEnabled=false;
        jump=false;
        right=false;
        left=false;


  questbubble=this.add.sprite(siexclam.x-50,this.world.centerY-80,'questbubble');
    var style = { font: "16px TheMinion", fill: "#000000", wordWrap: true, wordWrapWidth: questbubble.width-20, align: "center",};
    questxt=this.add.text(0,0,"In object-oriented programming, inheritance enables new objects to take on the properties of existing objects. A class that is used as the basis for inheritance is called a superclass or base class. ",style);
    questxt.anchor.set(0.5);

   questxt.x = Math.floor(questbubble.x + questbubble.width / 2);
    questxt.y = Math.floor(questbubble.y + questbubble.height / 2);

  //questxt.text="Is a class in java declared like this: Class Something{}";
  

    

learnt=this.add.button(questbubble.x,this.world.centerY+80,'learnt',null,this,0,1,0,1);


    


   but1.add(learnt);

 
  
but1.setAll('inputEnabled',true);

 but1.callAll('events.onInputUp.add', 'events.onInputUp',this.done,this);

      
  
    
    siexclam.kill();

response=3;



},
questionSvn:function(player,svexclam){
   //player.body.gravity.y=0;
        
        buttonleft.inputEnabled=false;
        buttonright.inputEnabled=false;
        buttonjump.inputEnabled=false;
        jump=false;
        right=false;
        left=false;


  questbubble=this.add.sprite(svexclam.x-50,this.world.centerY-100,'questbubble');
    var style = { font: "16px TheMinion", fill: "#000000", wordWrap: true, wordWrapWidth: questbubble.width-20, align: "center",};
    questxt=this.add.text(0,0,"An instance is a specific object built from a specific class. When you make a new instance the process is called instantiation and is typically done using the new keyword.",style);
    questxt.anchor.set(0.5);

   questxt.x = Math.floor(questbubble.x + questbubble.width / 2);
    questxt.y = Math.floor(questbubble.y + questbubble.height / 2);

  //questxt.text="Is a class in java declared like this: Class Something{}";
  

    

learnt=this.add.button(questbubble.x,this.world.centerY+80,'learnt',null,this,0,1,0,1);


    


   but1.add(learnt);

 
  
but1.setAll('inputEnabled',true);

 but1.callAll('events.onInputUp.add', 'events.onInputUp',this.done,this);

      
  
    
    svexclam.kill();

response=3;



},
questionEight:function(player,etexclam){
   //player.body.gravity.y=0;
        
        buttonleft.inputEnabled=false;
        buttonright.inputEnabled=false;
        buttonjump.inputEnabled=false;
        jump=false;
        right=false;
        left=false;


  questbubble=this.add.sprite(etexclam.x-50,this.world.centerY-180,'questbubble');
    var style = { font: "16px TheMinion", fill: "#000000", wordWrap: true, wordWrapWidth: questbubble.width-20, align: "center",};
    questxt=this.add.text(0,0,"Control Structures are structres that determine how we can control the flow of the program, there are two types, Conditionals and loops",style);
    questxt.anchor.set(0.5);

   questxt.x = Math.floor(questbubble.x + questbubble.width / 2);
    questxt.y = Math.floor(questbubble.y + questbubble.height / 2);

  //questxt.text="Is a class in java declared like this: Class Something{}";
  

    

learnt=this.add.button(questbubble.x,this.world.centerY,'learnt',null,this,0,1,0,1);


    


   but1.add(learnt);

 
  
but1.setAll('inputEnabled',true);

 but1.callAll('events.onInputUp.add', 'events.onInputUp',this.done,this);

      
  
    
    etexclam.kill();

response=3;



},
done:function(){
  questbubble.kill();
  questxt.kill();
  learnt.kill();
  player.body.gravity.y=1200;
        
        buttonleft.inputEnabled=true;
        buttonright.inputEnabled=true;
        buttonjump.inputEnabled=true;


},








nextLevel:function(player,flag){

  



   this.game.state.start('Level2');
  


},

collectCherry:function(player,cherry){
	cherry.kill();
        score+=10;
        scoreText.text=""+score;



      
},
restart:function(){
  
this.keepScore();

  player.reset(this.world.x,this.world.y+400);
},


keepScore :function(){
var highscore=localStorage.getItem('highscore');

    if(score>highscore){

          localStorage.setItem('highscore',score);
        }
      
}

       








       

       



};


