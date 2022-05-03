/*object literal: not good for if an obj has more than 1 method which we call behavior

const circle= {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log('draw')
    }
}
circle.draw()




/*factories*/


/*if the key and the value of the key are the same we can remove the key*/
function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('draw')
        }
    };     
}

//call this to create a new circle and pass in 1 for the radius parameter
const circle= createCircle(1)

//constructor function ; first letter needs to be uppercase
//use the this keyword to set properties on the obj

function Circle(radius){
this.radius= radius;
this.draw= function(){
    console.log('draw')
}
}
//create a new cirlce using the new operator & pass 1 as the argument
const another= new Circle(1)


