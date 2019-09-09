import networkx as nx
from networkx.readwrite.json_graph import cytoscape_data
import json


class b2019:
  def __init__(self):
    service = ['ClinicalInformatics','ClinApps','TeleHealth-Ray','TeleHealth-Alon','Clinical Services','Cardioogy','Ophthalmology','Anesthesiology','Infection Disease','Infection Prevention - CLC',
    'Anti-Microbial Stewardship','LEAF','TH Volunteers'
    'GPM office','Personnel Development','CERNER',]
    link = ['../nodes/' +s+'.html' for s in service]
    self.G = nx.DiGraph()
    for n, lbl,in enumerate(service):
      self.G.add_node(n)
      self.G.node[n]['label'] = lbl
      self.G.node[n]['link'] = "./nodes/deck.js/boilerplate.html"
    for e in range(1,len(service)):
      self.G.add_edge(e,0) # add edges
    for n,d in self.G.in_degree():
      self.G.node[n]['width'] = d+2
      self.G.node[n]['height'] = d+2
    
    self.graph = cytoscape_data(self.G)
    with open('BriefGraph.json','w') as f:
        json.dump(self.graph['elements'], f, indent = 4)

###run 
b = b2019()
