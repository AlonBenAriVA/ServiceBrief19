fetch('scatter.json').then(response =>{
  return response.json();
}).then(data =>{
  console.log(data) ;  
  
  var scatter = {
    y:data.count,
    x : data.days,
    type:'scatter',
    name:'trig',
    text:data.trig,
    marker:{size:5},
    font:{
      family:'Ariel, sans-serif',
      size:2,
      color:data.color
    },
    mode:'markers',
    
  };
  console.log(scatter)
  var points = [scatter]
  var layout ={
    title :{
      text:'work load among "triangles" of clinis'
    },
    xaxis:{
      title:{
        text:'days',
      }
    },
    yaxis:{
      title:{
        text:'count',
      }
    },
  };

  
  Plotly.newPlot('scatter',points, layout);

}).catch(err =>{
  console.log('error catched')
});
