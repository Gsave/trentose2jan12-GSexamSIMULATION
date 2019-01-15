class Area{
    static getArea(sides){
        var ris 
        if( (typeof sides[0] == "integer") && (typeof sides[1] == "integer")){
            ris = sides[0]*sides[1]
        }else{
            ris = -1
        }
        return ris
    }
};

module.exports = Area;