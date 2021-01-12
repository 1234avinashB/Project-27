class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:210,
            stiffness:0.05
        }
        this.pointB=pointB;
        this.chain =  Constraint.create(options)
        World.add(world, this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.pointB;
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}