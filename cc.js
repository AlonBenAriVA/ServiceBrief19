fetch('cc.json').then(response =>{
  return response.json();
}).then(data =>{
  console.log(data) ;  
  var bar = [
    {
      
      y:data.total,
      type:'bar',
      font:{
        family:'Ariel',
        size :2
      },
      text:data.trig 
    }

  ];

  layout_bar ={
    title:{
      text:'Distribution of patient count CC'
    },
    yaxis:{
      title:'count'
    },

  };

  var cum  = [{
    y:data.fraction,
      type:'bar',
      font:{
        family:'Ariel',
        size :2
      },
      text:data.trig 

  }];

  layout_cum ={
    title:{
      text:'Cumulative distribution of patient count CC'
    },
    yaxis:{
      title:'Probabilty'
    }

  };

  Plotly.newPlot('cc',bar,layout_bar);
  Plotly.newPlot('cc_cum',cum ,layout_cum);

}).catch(err =>{
  console.log('error catched')
});
