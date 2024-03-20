function show_result(){
    let py= document.querySelector('#py').value;
    let ja=document.querySelector('#ja').value;
    let dsa=document.querySelector('#dsa').value;
    let coal=document.querySelector('#coal').value;
    let ds=document.querySelector('#ds').value;

    let tot=parseFloat(py) + parseFloat(ja) + parseFloat(dsa) +parseFloat(dsa)+parseFloat(coal);
let per=(tot*100)/500;

if(per>=90){
    document.querySelector('.gra').innerHTML="A+";
}else if(per>=80){
    document.querySelector('.gra').innerHTML="A";
}else if(per>=70){
    document.querySelector('.gra').innerHTML="B";
}else if(per>=60){
    document.querySelector('.gra').innerHTML="C";
}else if(per>=50){
    document.querySelector('.gra').innerHTML="D";
}else {
    document.querySelector('.gra').innerHTML="Fail";
}


    document.querySelector('.tot').innerHTML = tot;
    document.querySelector('.per').innerHTML = per;

    if(per>40){
        document.querySelector('.result h2').innerHTML='you are pass';
    }
    else{
        document.querySelector('.result h2').innerHTML='you are fail';
    }

}