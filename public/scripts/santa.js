/*(function(){
    var b;
    var x=0, y=0;
    //var dx = Math.random()*300;
    //var dy = Math.random()*300;
  /*  var dx = 600;
    var dy = 80;  
    
    function init(){
      b = document.getElementById('santa');
      console.log('started...');
      moveSanta();
    }
    
    window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
    })();
    
    function moveSanta(){
      x += (dx-x) * 0.015;
      y += (dy-x) * 0.015;
      b.style.left = x + "px";
      //*b.style.top = y + "px";*/
    /*  b.style.top = 80 + "px";
      if(Math.abs(x-dx) < 1){ */
       //  dx = Math.random()*300;
       // dy = Math.random()*300;
       // x = 10;*/
     /*   if (dx > 10){
          b.style.transform = "scaleX(-1)";
          dx = 10;}
        else {
          b.style.transform = "scaleX(1)";
          dx = document.documentElement.clientWidth - 360;
        }
             
      }
      requestAnimFrame(moveSanta, b);
    }
    
    init();
    
  })() */


  (function(){
    var b;
    var x=0, y=0;
    //var dx = Math.random()*300;
    //var dy = Math.random()*300;
    var dx = 600;
    var dy = 80;  
    
    function init(){
      b = document.getElementById('santa');
      b.style.position = "absolute";
      b.style.width = "370px";
      b.style.height = "190px";
      b.style.opacity = "0.2";
     // b.style.background = "url('http://www.netanimations.net/Animated_santa_reindeer_flying.gif') no-repeat";
     b.style.background = "url('images/santa.gif') no-repeat";
      console.log('started...');
      moveSanta();
    }
    
    window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
    })();
    
    function moveSanta(){
      x += (dx-x) * 0.015;
      y += (dy-x) * 0.015;
      b.style.left = x + "px";
      //*b.style.top = y + "px";*/
      b.style.top = 80 + "px";
      if(Math.abs(x-dx) < 1){
       //  dx = Math.random()*300;
       // dy = Math.random()*300;
       // x = 10;*/
        if (dx > 10){
          b.style.transform = "scaleX(-1)";
          dx = 10;}
        else {
          b.style.transform = "scaleX(1)";
          dx = document.documentElement.clientWidth - 360;
        }
             
      }
      requestAnimFrame(moveSanta, b);
    }


    setTimeout(init, 8000);
   
    //init();
  })() ;


//11111111111111111111111111111111

  (function(){
    var b;
    var x=0, y=0;
    //var dx = Math.random()*300;
    //var dy = Math.random()*300;
    var dx = 600;
    var dy = 80;  
    
    
    
    window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
    })();
    
    function moveSanta(){
      x += (dx-x) * 0.015;
      y += (dy-x) * 0.015;
      b.style.left = x + "px";
      //*b.style.top = y + "px";*/
      b.style.top = 80 + "px";
      if(Math.abs(x-dx) < 1){
       //  dx = Math.random()*300;
       // dy = Math.random()*300;
       // x = 10;*/
        if (dx > 10){
          b.style.transform = "scaleX(-1)";
          dx = 10;}
        else {
          b.style.transform = "scaleX(1)";
          dx = document.documentElement.clientWidth - 360;
        }
             
      }
      requestAnimFrame(moveSanta, b);
    }


    function init1(){
      b = document.getElementById('santa');
      b.style.position = "absolute";
      b.style.width = "370px";
      b.style.height = "190px";
      b.style.opacity = "0.4";
     b.style.background = "url('images/santa.gif') no-repeat";
      console.log('started...');
      moveSanta();
    }

    

    
    setTimeout(init1, 8400);
   
   
  })() ;

//2222222222222222222222


//11111111111111111111111111111111

(function(){
  var b;
  var x=0, y=0;
  //var dx = Math.random()*300;
  //var dy = Math.random()*300;
  var dx = 600;
  var dy = 80;  
  
  
  
  window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
  })();
  
  function moveSanta(){
    x += (dx-x) * 0.015;
    y += (dy-x) * 0.015;
    b.style.left = x + "px";
    //*b.style.top = y + "px";*/
    b.style.top = 80 + "px";
    if(Math.abs(x-dx) < 1){
     //  dx = Math.random()*300;
     // dy = Math.random()*300;
     // x = 10;*/
      if (dx > 10){
        b.style.transform = "scaleX(-1)";
        dx = 10;}
      else {
        b.style.transform = "scaleX(1)";
        dx = document.documentElement.clientWidth - 360;
      }
           
    }
    requestAnimFrame(moveSanta, b);
  }


  function init2(){
    b = document.getElementById('santa');
    b.style.position = "absolute";
    b.style.width = "370px";
    b.style.height = "190px";
    b.style.opacity = "0.6";
   b.style.background = "url('images/santa.gif') no-repeat";
    console.log('started...');
    moveSanta();
  }

  setTimeout(init2, 8900);
 
})() ;

//33333333333333333333

(function(){
  var b;
  var x=0, y=0;
  //var dx = Math.random()*300;
  //var dy = Math.random()*300;
  var dx = 600;
  var dy = 80;  
  
  
  
  window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
  })();
  
  function moveSanta(){
    x += (dx-x) * 0.015;
    y += (dy-x) * 0.015;
    b.style.left = x + "px";
    //*b.style.top = y + "px";*/
    b.style.top = 80 + "px";
    if(Math.abs(x-dx) < 1){
     //  dx = Math.random()*300;
     // dy = Math.random()*300;
     // x = 10;*/
      if (dx > 10){
        b.style.transform = "scaleX(-1)";
        dx = 10;}
      else {
        b.style.transform = "scaleX(1)";
        dx = document.documentElement.clientWidth - 360;
      }
           
    }
    requestAnimFrame(moveSanta, b);
  }


  function init3(){
    b = document.getElementById('santa');
    b.style.position = "absolute";
    b.style.width = "370px";
    b.style.height = "190px";
    b.style.opacity = "1";
   b.style.background = "url('images/santa.gif') no-repeat";
    console.log('started...');
    moveSanta();
  }

  setTimeout(init3, 9100);
 
})() ;


 
    function removeSanta(){
      const remSanta = document.getElementById('santa');
       document.body.removeChild(remSanta);
    }

    setTimeout(removeSanta, 42000);
