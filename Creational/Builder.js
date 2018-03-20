/* Separate the construction of a complex object from 
its representation so that the same construction process can
create different representations */

// Mixed Interface (or abstract class) with the Director entity
let Builder =  {
  // Abstract class 
  step1: function (step1) { console.log(step1) },
  step2: function (step2) { console.log(step2) },
  step3: function (step3) { console.log(step3) },
  // Director
  getObject: function(obj) { 
    obj.step1();
    obj.step2();
    obj.step3();
  }
}

let ObjBuilderA = {
  step1: function () {Builder.step1('StepA1 done')},
  step2: function () {Builder.step2('StepA2 done')},
  step3: function () {Builder.step3('StepA3 done')}
}

let ObjBuilderB = {
  step1: function () {Builder.step1('StepB1 done')},
  step2: function () {Builder.step2('StepB2 done')},
  step3: function () {Builder.step3('StepB3 done')}
}

function Run() {
  console.log('Builde Example');
  Builder.getObject(ObjBuilderA);
  console.log(' ');
  Builder.getObject(ObjBuilderB);
}

Run();