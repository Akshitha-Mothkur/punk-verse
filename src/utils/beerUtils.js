function getAbvLevel(abv){
    if(abv<=5){
        return "light"
    }
    else if(abv<=9){
        return "strong"
    }
    else{
        return "xstrong"
    }
}

function getIbuLevel(ibu){
    if(ibu<=20){
        return "mild"
    }
    else if(ibu<=40){
        return "balanced"
    }
    else if(ibu<=60){
        return "bitter"
    }
    else{
        return "xbitter"
    }
}

export {getAbvLevel,getIbuLevel}