console.log('Hello')

fetch('BriefGraph.json').then(function(response) {
  return response.json();
}).then(function(data){
 console.log(data)
  console.log(data);
	

    var cy = window.cy = cytoscape({
      container: document.getElementById('cy'),

      style: [
        {
          selector: 'node',
          style: {
            'content': 'data(label)'
          }
        },

        {
          selector: 'edge',
          style: {
            'curve-style': 'bezier',
            'target-arrow-shape': 'triangle'
          }
        }
      ],

      elements: data,


      layout: {
        name: 'circle',
        spacingFactor:20,
          nodeSpacing:40,
          padding:30,
          fit:true,
          animationDuration:150,
          animate:true,
          // concentric:'concentric',
          boundingBox: { // to give cola more space to resolve initial overlaps
                x1: 0,
                y1: 0,
                x2: 1000,
                y2: 1000
              }
      }
    });
    cy.on('tap', 'node', function(){
      try { // your browser may block popups
        window.open( this.data('link') );
      } catch(e){ // fall back on url change
        window.location.href = this.data('href');
      }
    }); 

    
 
}).catch(function(err){
  // Do something for an error here
});






