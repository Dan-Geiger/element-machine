
//Dom element selection

const select = {
    btnToggleView: document.querySelector('.btn__toggle-view'),
    elCodeContainer: document.querySelector('.output-code__container'),
    elCodeOutput: document.querySelectorAll('.output-code__output'),
    elDesk: document.querySelector('.desk__container'),
    elShapeType: document.getElementById('menu-shape'),
  }
  //canvas init
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = select.elDesk.offsetWidth;
  canvas.height = select.elDesk.offsetHeight;
  
  //----------------------model-------------------
  let data = {
    currentPoint:[],
    continuousPoint: [],
  }
  
  class Shape{
    constructor(name, type){
      this.name = name;
      this.type = type;
      this.clickPoints = [];
      this.editMode = true;
    }
    boundingBox(){
      
    }
    
  }
  
  
  //----------------------controller-------------------
  function ShapeHandler(type, ClickXnY){
    console.log(type, ClickXnY)
    /////////////////////////////////////////////////////////////////////continue implementation
  }
  
  //----------------------view-------------------
  //button listeners
  select.btnToggleView.addEventListener('click', ()=>{
    select.elCodeContainer.classList.toggle('output-code__container--animation')
    select.elCodeOutput.forEach((e)=>e.classList.toggle('output-code__output--animation'))
  })
  
  //continuous mouse position
  canvas.addEventListener('mousemove', (e)=>{
    data.continuousPoint = [e.pageX, e.pageY]
  })
  
  //clicked mouse position
  canvas.addEventListener('click', (e)=>{
    //record points clicked
    if(data.currentPoint.length >= 1)data.currentPoint = []
    data.currentPoint.push(e.pageX, e.pageY)
    
    // create shape
    ShapeHandler(select.elShapeType.value, data.currentPoint)
  })
  
  //canvas resizing
  window.addEventListener('resize', ()=>{
    canvas.width = select.elDesk.offsetWidth;
    canvas.height = select.elDesk.offsetHeight;
  })
  
  //canvas refresh
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);
  }
  // animate()
  