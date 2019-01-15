class Area{
    static isInt(n){
        if (is_numeric(n) && (n%1 ==0)) {
            return true
        }else{
            return false
        }
    }

    static getArea(sides){
        var ris 
        if( isInt(sides[0]) && sides[0]>0 && isInt(sides[1]) && sides[1]>0){
            ris = sides[0]*sides[1]
        }else{
            ris = -1
        }
        return ris
    }
};

module.exports = Area;