window.onload=function(){
  var squares=document.getElementById('board').children;
  for(i=0;i<squares.length;i++){
    squares[i].setAttribute('class','square');
  }
  for(i=0;i<squares.length;i++){
  var button=squares[i];
  var countclick=0;
  let myDiv=squares[i];
  var mouseHov=squares[i];
  var track=[];
  const p1=''
  var reset=document.getElementsByClassName('btn');
  my=document.getElementById('board').children;
  if((my[0].innerHTML==='X'||my[0].innerHTML==='O')||(my[1].innerHTML==='X'||my[1].innerHTML==='O')){
    button.preventDefault();
  }
  button.addEventListener('click',function(){

    //||my[1].innerHTML===''||my[2].innerHTML===''||my[3].innerHTML===''||my[4].innerHTML===''||my[5].innerHTML===''||my[6].innerHTML===''
    //||my[7].innerHTML===''||my[8].innerHTML===''){

    
    console.log("Button clicked.");
    console.log("Count Click: " + countclick);
    if(myDiv.innerHTML === ""){
      countclick++;
      if(countclick%2===1){
        myDiv.innerHTML="X";
        myDiv.className='square X';
      }
      else{
        myDiv.innerHTML="O";
        myDiv.className='square O';
        countclick=0
      }
      if((my[0].innerHTML==='X'&&my[1].innerHTML==='X'&&my[2].innerHTML==='X')||(my[3].innerHTML==='X'&&my[4].innerHTML==='X'&&my[5].innerHTML==='X')||
    (my[6].innerHTML==='X'&&my[7].innerHTML==='X'&&my[8].innerHTML==='X')||(my[0].innerHTML==='X'&&my[3].innerHTML==='X'&&my[6].innerHTML==='X')||
    (my[1].innerHTML==='X'&&my[4].innerHTML==='X'&&my[7].innerHTML==='X')||(my[2].innerHTML==='X'&&my[5].innerHTML==='X'&&my[8].innerHTML==='X')
    ||(my[0].innerHTML==='X'&&my[4].innerHTML==='X'&&my[8].innerHTML==='X')||(my[2].innerHTML==='X'&&my[4].innerHTML==='X'&&my[6].innerHTML==='X')){
        console.log('Winner X');
        player='X'
        winner=document.getElementById('status');
        winner.innerHTML="Congratulations! "+player+" is the Winner!"
        winner.classList.add('you-won');
      }
      else if ((my[0].innerHTML==='O'&&my[1].innerHTML==='O'&&my[2].innerHTML==='O')||(my[3].innerHTML==='O'&&my[4].innerHTML==='O'&&my[5].innerHTML==='O')||
    (my[6].innerHTML==='O'&&my[7].innerHTML==='O'&&my[8].innerHTML==='O')||(my[0].innerHTML==='O'&&my[3].innerHTML==='O'&&my[6].innerHTML==='O')||
    (my[1].innerHTML==='O'&&my[4].innerHTML==='O'&&my[7].innerHTML==='O')||(my[2].innerHTML==='O'&&my[5].innerHTML==='O'&&my[8].innerHTML==='O')
    ||(my[0].innerHTML==='O'&&my[4].innerHTML==='O'&&my[8].innerHTML==='O')||(my[2].innerHTML==='O'&&my[4].innerHTML==='O'&&my[6].innerHTML==='O')) {
        console.log('Winner O');
        player='O'
        winner=document.getElementById('status');
        winner.innerHTML="Congratulations! "+player+" is the Winner!"
        winner.classList.add('you-won');
      }
      else{
        console.log('No Winner')
      }
    }

  });


  mouseHov.addEventListener('mouseover',function(){
    myDiv.classList.add('hover');
  })
  mouseHov.addEventListener('mouseout',function(){
    myDiv.classList.remove('hover');
  })

  reset[0].addEventListener('click',function(){
    location.reload(true);
  })

}

}
