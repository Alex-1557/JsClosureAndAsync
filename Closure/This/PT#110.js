function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype.addVertex = 
  function (v) {
    this.vertices.push(v);
};

const g = new Graph();

g.addVertex(5);
g.addVertex(10);
console.log(g.vertices);
