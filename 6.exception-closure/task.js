function parseCount(parse){
    let parseResult = Number.parseFloat(parse)

    if(isNaN(parseResult)) {
        throw new Error ('Невалидное значение')
    } else {
        return parseResult
    }

}

function validateCount(parse){

    try{
       return parseCount(parse)
    }catch (error){
        return error
    }finally{
        
    }
}

class Triangle{
    constructor(a, b, c){
        if(a + b <= c || a + c <= b || b + c <= a) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    get perimeter(){
        return this.a + this.b + this.c
    }
    get area(){
        let p = 0.5 * (this.a + this.b + this.c)
        return Number(Math.sqrt(p * (p - this.a)*(p - this.b)*(p - this.c)).toFixed(3))
    }
}

function getTriangle(a, b, c){
    try{
        return new Triangle(a, b, c)
    }catch{
        return {
            get perimeter(){
                return "Ошибка! Треугольник не существует"
            },
            get area(){
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}