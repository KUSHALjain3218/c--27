class hello {
constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY
    var options={
        bodyA:bodyA,
        bodyB: bodyB,     
        stiffness:0.3,
        length:-205,
        pointB:{x:this.offsetX,y:this.offsetY}
    
        }
        
        
        this.body = Matter.Constraint.create(options)
        World.add(world,this.body);










}


display(){
push();
    strokeWeight(5);
    stroke("white");
    line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.body.bodyB.position.x,this.body.bodyB.position.y)
    

pop ();


}
}