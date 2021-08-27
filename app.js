let userscore=0;
let computerscore=0;
const myscore=document.getElementById("spl_score");
const compscore=document.getElementById("comp_score");
const result_div=document.getElementById("resultid");
const stone=document.getElementById("st");
const paper=document.getElementById("p");
const scissor=document.getElementById("sc");
const choices=['st','p','sc'];

function compchoice(){

	const choices=['st','p','sc'];
	const random=Math.floor(Math.random()*3);
	return choices[random];
}

function win(userc,computerc){
	userscore=userscore+1;
	myscore.innerHTML=userscore;
	compscore.innerHTML=computerscore;
	result_div.innerHTML=convert(userc)+" wins "+convert(computerc)+" You Win!";
}
function loss(userc,computerc){
	computerscore++;
	myscore.innerHTML=userscore;
	compscore.innerHTML=computerscore;
	result_div.innerHTML=convert(userc)+" lose "+convert(computerc)+" You loss!";
}
function draw(userc,computerc){
	myscore.innerHTML=userscore;
	compscore.innerHTML=computerscore;
	result_div.innerHTML="Ur thing and Computer thing are Same. It is Draw!";
}
function convert(name)
{
	if(name=="st") return "Stone";
	if(name=="p") return "paper";
	return "scissor";
}

function game(user){
const computer=compchoice();
switch(user+computer){
	case"stsc":
	case"pst":
	case"scp":
	    win(user,computer);
	    break;
	case"stp":
	case"stsc":
	case"scst":
	    loss(user,computer);
	    break;
	case"stst":
	case"scsc":
	case"pp":
	    draw(user,computer);
	    break;
}
}

function main(){
stone.addEventListener('click',function()
{
game("st");
})
paper.addEventListener('click',function()
{
	game("p");
})
scissor.addEventListener('click',function()
{
game("sc");	
})
}
main();


