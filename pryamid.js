const blockSize = 15;
const blockWidth = 80;
const blockHeight = 40;

let draw = SVG('drawing').size(1400, 825);

var linear23 = draw.gradient('linear', function(stop) {
    stop.at(0, 'red')
    stop.at(1, 'blue')
  })

let rect = draw.rect(blockWidth, blockHeight)
rect.fill('white');
rect.stroke('black');











var text = draw.text(function(add) {
    add.tspan(' I').fill('green')
    add.tspan(' am').fill('blue').dy(0)
    add.tspan(' very').fill('red').dy(20)
    add.tspan(' Cool').fill('magenta').dy(40)
  })
  
  var path = 'M 100 200 C 200 100 300 0 400 100 C 500 200 600 300 700 200 C 800 100 900 100 900 100'
  
  text.path(path).font({ size: 35, family: 'fantasy' })
  text.plot('M 300 500 C 200 100 300 0 400 100 C 500 200 600 300 700 200 C 800 100 900 100 900 100')
  text.textPath().attr('startOffset', '50%')
  text.textPath().animate(4000).attr('startOffset', '80%')
  text.loop(true, true)
