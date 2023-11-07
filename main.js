// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area.
//   Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method.
//   Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.


class Shape {
    calculateArea() {
     
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super()
         this.radius = radius;
    }
  
    calculateArea() {
        let a= (3.14*this.radius*this.radius);
        console.log(`the area of circle is ${a}`)
     
    }
  }
  
  class Triangle extends Shape {
    constructor(width,height) {
    super()
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
    let b=(1/2)*(this.width * this.height)
    console.log(`the area of triangle is ${b}`)
    }
  }

  let circle = new Circle(7);
  circle.calculateArea();
  let circle1 = new Circle(6);
  circle1.calculateArea();
  
  

   let triangle = new Triangle(8, 9);
  triangle.calculateArea();
  let triangle1 = new Triangle(5, 5);
  triangle1.calculateArea();
  