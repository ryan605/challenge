
console.log(studentMarks(56))
function studentMarks(marks){
    if(marks >79 && marks <100){     
      return `A` // A grade block
    }
    else if(marks >=60 && marks <=79){
      return `B` //B grade block

    }
      
    else if (marks >=49 && marks <=59){
      return `C` // C grade block

    }
           
    else if (marks >=40 && marks <=49){
      return `D`// D grade block

    }
             
    else if(marks < 40 && marks>=0){     //E grade block
      return `E`

    }else return 'not valid'// returns not valid if student marks is not inputed 
              
}
