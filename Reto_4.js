const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
    ]

function fitsInOneBox(boxes){

    let boxFit = false;
    
    const nboxes = boxes.sort((a,b) =>{
        if((a.l + a.w + a.h) < (b.l + b.w + b.h)) return -1;
        return 1;
    })
    nboxes.reduce((prev, actual,index) =>{
        if(prev.l < actual.l && prev.w < actual.w && prev.h < actual.h){
            boxFit = true;
        } else{
            boxFit = false;
            return false;
        }
        return actual
    })
    return boxFit;
}
console.log(boxes)
console.log(fitsInOneBox(boxes))