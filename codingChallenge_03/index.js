var Mark={
    mass: 78,
    height: 1.9,
    calcBMI: function(){
        this.BMI = this.mass / (this.height **2);
        return this.BMI;
    }
}
var John={
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMI = this.mass / (this.height **2);
        return this.BMI;
    }
}

Mark.calcBMI() > John.calcBMI() ? console.log(`BMI của Mark(${Mark.calcBMI()}) cao hơn John(${John.calcBMI()})`):console.log(`BMI của John (${John.calcBMI()}) cao hơn Mark (${Mark.calcBMI()})`);



