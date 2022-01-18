let pics = document.querySelectorAll('.editemsPic1');


pics[1].addEventListener('hover',()=>{
    pics[1].style.transform.scale = "1.5";
    pics[1].style.transform.translateY = "-17%";    //values in string format
    pics[1].style.zIndex = "100";           //camelCase is must
    pics[2].style.transform.scale = "1.2";
    pics[2].style.transform.translateY = "-21%";
    pics[2].style.zIndex = "0";
})

function changeSize(n){
  let p1;
  let p2;
  let p3;
  if(n === '1'){
    p1 = 0;
    p2 = 1;
    p3 = 2;
  }
  else if(n === '4'){
    p1 = 3;
    p2 = 2;
    p3 = 1;
  }
  pics[p1].style.transform.scale = "1.5";
  pics[p1].style.transform.translateY = "-17%";    //values in string format
  pics[p1].style.zIndex = "100";           //camelCase is must
  pics[p2].style.transform.scale = "1.2";
  pics[p2].style.transform.translateY = "-21%";
  pics[p2].style.zIndex = "0";
  pics[p3].style.transform.scale = "1.1";
  pics[p3].style.transform.translateY = "-23%";
  pics[p3].style.zIndex = "0";

}

pics[0].addEventListener('hover', changeSize(1));
pics[3].addEventListener('hover', changeSize(4));
