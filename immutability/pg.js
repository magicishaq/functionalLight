var obj = {
    status : true, 
    name : 'ishaq'
}

if("status" in obj){
    console.log(obj.name)
}


//dont mutate objects, instead make a copy

function changeObj(ob) {
    var copyiedObject = {...ob} //makes a copy
    if(!("surname" in ob)){
        copyiedObject.surname = 'Khan'
        return copyiedObject
    }

    return 'There is already a surname is this object'
    
}

var ishaqKhan = changeObj(obj)

console.log(ishaqKhan.surname, ishaqKhan.name)