//game structure: collect strawberries to reveal the story.

//bugs to figure out: 
//1. restart messes up the strawberries in scene 1 and 2. 
//2. sometimes in the swim scene, the girl char glitches

let aspectRatio = 2.35;
let screenWidth = 400;
let sceneNumber =0;
let tempSceneNumber=0;
let numberOfStrawberries=5;
let StrawberryXPos=1;
let StrawberryYPos=0;
let StrawberryCount=0;
let charXPos = 0;
let charYPos =0 ;
let charYPosBaseline =screenWidth-100 ;
let charYPosChange = charYPosBaseline;
let StrawberryHeightArr=[charYPosBaseline, charYPosBaseline-120,charYPosBaseline-240]
let startStawberry = 0;
let stopStawberry = numberOfStrawberries;
let previousSceneNumber=1;
tempXpos =0;
tempYpos =0;
let count=0;
//storyArray=[[],["","one,one","one,two","one,three","one,four","one,five"],["","two,one","two,two","two,three","two,four","two,five"],["","three,one","three,two","three,three","three,four","three,five"],["","four,one","four,two","four,three","four,four","four,five"],["","five,one","five,two","five,three","five,four","five,five"],["","six,one","six,two","six,three","six,four","six,five"]]; //trial array
storyArray= [[],['','She spent her days in her head', 'Lost to the world around her', 'Burdened by herself', 'She walked through life', 'Oblivious to those surrounding her'], ['','Unknown places were ventured','New fears were discovered','Doubts swarmed','Swallowing her up slowly','Till she was indistinguishable'], ['','She ran ahead', 'flustered, Scrambling for times before', 'Nostalgia can be cruel', 'and its cruelty left her', 'on loop'],['','She jumped and danced', 'But', 'there weren’t as many joys','In the world', 'As in her head'], ['','She longed for meaning', 'Longed for purpose', 'Longed for connection', 'And so,','Onto the long road she set forth again.']] //story array that can be accessed by [sceneNumber][index] 
var charSprite;
var strawberrySprite;
var pathSprite;
var collectStrawberries;
var collectPath;
var bgSound
function preload() {
  BG0= loadImage('../BG0.png'); //loading all images
  BG1= loadImage('../BG1.png');
  BG2= loadImage('../BG2.png');
  BG3= loadImage('../BG3.png');
  BG4= loadImage('../BG4.png');
  BG5= loadImage('../BG5.png');
  BG6= loadImage('../BG6.png');
  charSprite = createSprite(-50, -50); //position x,y
  charSprite.addAnimation('normal','../char/G1.png','../char/G1.png','../char/G2.png','../char/G2.png'); //animating 
  charSprite.addAnimation('upwards','../char/G4.png','../char/G4.png');  
  charSprite.addAnimation('swim','../char/G3.png','../char/G3.png');
  bgSound=loadSound('../bgSound.mp3') //music
}
function setup() {
  createCanvas(aspectRatio*screenWidth,screenWidth); //set up in ratio 1:2.35
  noStroke();  
  collectStrawberries = new Group();
  collectPath = new Group();
  frameRate(46);
}
function draw() {
  switch(sceneNumber){
    case 0: scene0(); //all the scenes called using switch statement
            break
    case 1: scene1();
            break
    case 2: scene2();
            break
    case 3: scene3();
            break
    case 4: scene4();
            break            
    case 5: scene5();
            break
    case 6: scene6();
            break   
    case 7: scene7();
            break           
  }
}
function scene0(){ //instruction page
  image(BG0, 0, 0);
  textSize(32);
  fill('#D4656E');
  text('Life Time Lies', 10, 30);
  text('Instructions:', 100, 70);
  textSize(25);
  text('Character, Beta, traverses landscapes collecting', 100, 130);
  text('strawberries and revealing their story', 100, 170);
  text('Move around pressing up, down and right arrow', 100, 230);
  text('Just dont look back.', 100, 270);
  text('Press any key to START', width-380, 330);

  if(keyIsPressed== true){
  	 sceneNumber++;
     changeScene(sceneNumber);
     if (!bgSound.isPlaying()) {
    	//bgSound.setVolume(0.8);
  		bgSound.play(); 
	}
  }
}
function scene1(){ //city page
  image(BG1, 0, 0); //loads new background image
  characterMovements() ;  //decides the movement and calls a couple more fn
  //all the scenes (1-6) have the same set up
}
function scene2(){ //forest 1 page
  image(BG2, 0, 0);
  characterMovements() ;  
}
function scene3(){ //forest 2 page
  image(BG3, 0, 0);
  characterMovements() ;
}
function scene4(){ //ocean 1 page
  image(BG4, 0, 0);
  characterMovements() ;
}
function scene5(){ //ocean 2 page
  image(BG5, 0, 0);
  characterMovements() ;
}
function scene6(){ //mountain page
  image(BG6, 0, 0);
  characterMovements() ;
}
function scene7(){ //mountain page
  image(BG0, 0, 0); //instructions
  textSize(32);
  fill('#D4656E');
  text('Thanks for listening', 40, 50);
  text('Press any key to RESTART', 40, 100);
  if(keyIsPressed== true){ 
  	   sceneNumber=1; //moves back to first scene
       changeScene(sceneNumber); 
  }
}
function displayStrawberryCount(){
	//this function isn't called but can be used during debugging
	fill('#fcc8a3');
	rect(width-210,40,150,50)
  	fill('#d4656e');
  	textSize(15);
  	text('Strawberry count:', width-200, 80);
  	text(StrawberryCount, width-80, 80);
}
function changeScene(tempSceneNumber){
   //not sure if this is useful, but it is being used anyways
  sceneNumber=tempSceneNumber;
} 
function characterMovements(){
   //up
  if (keyIsDown(UP_ARROW) && charYPos>100) {
    charYPos -= 3;
    charXPos+= 1;
    charSprite.changeAnimation('upwards');
  } 
  //down
  else if(keyIsDown(DOWN_ARROW) && charYPos<300){
    charYPos+= 3;
    charXPos+= 1;
    charSprite.changeAnimation('upwards');
  }
  //right
  else if(keyIsDown(RIGHT_ARROW) ){
    charYPos+= 0;
    charXPos+= 3;
    charSprite.changeAnimation('upwards');
  }
  else {
    charYPos =charYPosChange;
    charXPos+=3;
    //if it is 4/5 make the animation swim
    if((sceneNumber==4 && charYPosChange>charYPosBaseline)||(sceneNumber==5 && charYPosChange>charYPosBaseline))
    	charSprite.changeAnimation('swim');
    else
    	charSprite.changeAnimation('normal');
  }  
  CollisionDetection(); //detects the lil strawberries
  character(charXPos,charYPos); //moves the position of the char
  charReset(); //if char leaves the scene i.e. xPos> width, change scene
}
function character(xx,yy){
   charSprite.position.x=xx; //move the char
   charSprite.position.y=yy;
   drawSprites();
}
function charReset(){
	if(charXPos>width){
   	  sceneNumber++;
   	  changeScene(sceneNumber)
   	  charXPos=0
   	  if((sceneNumber)%7!=0)
      	objectDisplay(1,1) //displays the strawberry and path
        //placed here so it is called only once
  }
}
function CollisionDetection(){
	//detects all the collisions and displays text accordingly
	charSprite.overlap(collectStrawberries, stawberryCollect); //using p5
	printStory();
	waterJumper();
}
function stawberryCollect(collector, collected){
  StrawberryCount+=1
  collected.remove(); //i.e. removes the strawberry
}
function pathCollect(collector, collected){
  collector.position.y= collected.position.y;
  charYPosChange= collector.position.y-50;
}
function printStory(){
	push();
	fill('#D4656E');
	if(sceneNumber==4 || sceneNumber==5){
		fill(255); //since the water is a dark colour
	}
	textSize(25);
	if (previousSceneNumber!=sceneNumber){ //idk what is happening here??
		previousSceneNumber= sceneNumber;
		StrawberryCount=0;
	}
	text(storyArray[previousSceneNumber-1][StrawberryCount%6],300, 380); //disp story
	pop();
}
function objectDisplay(switchState,stopLoop){
	switch(switchState){
		case 0:
			break
		case 1:
		if(stopLoop==1){
			if(sceneNumber >2){
			collectStrawberries.removeSprites();
			collectPath.removeSprites(); 
			}
			for(var j=startStawberry; j<stopStawberry; j++){
				tempXpos = (j%8)*180 + 100;
				tempYpos = random(charYPosBaseline,charYPosBaseline-240);
    			var strawberry = createSprite(tempXpos,tempYpos);
    			strawberry.addAnimation('normal', '../Strawberry.png');
    			collectStrawberries.add(strawberry);
    			stopLoop=0;	
    			if(sceneNumber == 4||sceneNumber == 5){
    				var path = createSprite(tempXpos,tempYpos+20);
    				path.addAnimation('normal', '../waterPath.png');
    				collectPath.add(path);	
    				}	
    		    }
       }		

    			startStawberry=stopStawberry;
    			stopStawberry+=8
    			break

  }
  
}
function waterJumper(){
	if(sceneNumber==4 || sceneNumber==5){
		while(!(charSprite.overlap(collectPath, pathCollect)) && charYPosChange<(charYPosBaseline+50))
			charYPosChange+=1;
            charXPos+=0;
	}
	else
		charYPosChange=screenWidth-100 ;		
}
