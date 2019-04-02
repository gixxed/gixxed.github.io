let draw = SVG('drawing').size(1600, 1600);





var linear1 = draw.gradient('linear', function(stop) {
    stop.at(0, 'magenta')
    stop.at(1, '#0f9')
  })
  var linear2 = draw.gradient('linear', function(stop) {
    stop.at(0, 'red')
    stop.at(1, '#0f9')
  })
  var linear3 = draw.gradient('linear', function(stop) {
    stop.at(0, 'orange')
    stop.at(1, '#0f9')
  })
  var linear4 = draw.gradient('linear', function(stop) {
    stop.at(0, 'yellow')
    stop.at(1, '#0f9')
  }) 
   var linear5 = draw.gradient('linear', function(stop) {
    stop.at(0, 'green')
    stop.at(1, '#0f9')
  })
  var linear6 = draw.gradient('linear', function(stop) {
    stop.at(0, 'teal')
    stop.at(1, '#0f9')
  })
  var linear7 = draw.gradient('linear', function(stop) {
    stop.at(0, 'blue')
    stop.at(1, '#0f9')
  })
  var linear8 = draw.gradient('linear', function(stop) {
    stop.at(0, 'purple')
    stop.at(1, '#0f9')
  })


function drawthisstuffplease(x,y) {
    let ellipse2 = draw.ellipse(10, 20).fill('limegreen').move(x+70, y+9).fill(linear1);
    let ellipse = draw.ellipse(10, 20).fill('limegreen').move(x+80, y+12).fill(linear2).transform({ rotation: 45 })
    let leef = draw.ellipse(10, 20).fill('limegreen').move(x+82.5, y+20).fill(linear3).transform({ rotation: 90});
    let leeef = draw.ellipse(10, 20).fill('limegreen').move(x+78, y+29).fill(linear4).transform({ rotation: 135});
    let leaf = draw.ellipse(10, 20).fill('limegreen').move(x+70, y+30).fill(linear5).transform({ rotation: 180});
    let leaaf = draw.ellipse(10, 20).fill('limegreen').move(x+61, y+26).fill(linear6).transform({ rotation: 225});
    let leaaaf = draw.ellipse(10, 20).fill('limegreen').move(x+60, y+20).fill(linear7).transform({ rotation: 270});
    let leaaaaf = draw.ellipse(10, 20).fill('limegreen').move(x+61, y+12).fill(linear8).transform({ rotation: 315});
    
    let ciricle = draw.circle(10, 10).fill('yellow').move(x+71, y+23.5);
}

drawthisstuffplease(100,100);
drawthisstuffplease(800,300);
drawthisstuffplease(200,700);
drawthisstuffplease(400,200);
drawthisstuffplease(500,500);
drawthisstuffplease(1000,600);
drawthisstuffplease(1200,200);
drawthisstuffplease(50,400);
drawthisstuffplease(700,100);