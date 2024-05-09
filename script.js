class SuperMath {
    check(obj) {
        const response = confirm("Do you want a calculate...?")
        let result; 
        if(response === true){
            switch(obj.Z){
                case'+':
                    result = obj.X + obj.Y;
                    break;
                case'-':
                result = obj.X - obj.Y;
                break;
                case'*':
                result = obj.X * obj.Y;
                break;
                case'/':
                result = obj.X / obj.Y;
                break;
                case'%':
                result = obj.X % obj.Y;
                break;
                default:
                    result = 'select operation';
            }
            alert(result);
        } else {
            this.input()
        }
    }

    input() {
        const newX = +prompt('input new x');
        const newY = +prompt('input new y');
        let newZnak;
        do {
            newZnak = prompt('input new znak: +, -, *, /, %');
        } while(!['+', '-', '*', '/', '%'].includes(newZnak));

        const newObj = {X: newX, Y: newY, Z: newZnak}
        this.check(newObj);
    }
}

const math = new SuperMath();
math.check({X: 12, Y: 3, Z: "/"})