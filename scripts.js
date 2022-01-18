let pics = document.querySelectorAll('.editemsPic1');

pics[1].addEventListener('mouseover',() =>{
  pics[1].classList.toggle('top1');
  pics[2].classList.toggle('top2');
})

pics[1].addEventListener('mouseout',() =>{
  pics[1].classList.toggle('top1');
  pics[2].classList.toggle('top2');
})

pics[0].addEventListener('mouseover',() =>{
  pics[0].classList.toggle('top1');
  pics[1].classList.toggle('top2');
  pics[2].classList.toggle('top3');
  pics[3].classList.toggle('top4');
})

pics[3].addEventListener('mouseover',() =>{
  pics[3].classList.toggle('top1');
  pics[2].classList.toggle('top2');
  pics[1].classList.toggle('top3');
})

pics[0].addEventListener('mouseout',() =>{
  pics[0].classList.toggle('top1');
  pics[1].classList.toggle('top2');
  pics[2].classList.toggle('top3');
  pics[3].classList.toggle('top4');
})

pics[3].addEventListener('mouseout',() =>{
  pics[3].classList.toggle('top1');
  pics[2].classList.toggle('top2');
  pics[1].classList.toggle('top3');
})



// console.log(pics);
// pics[1].addEventListener('mouseover',()=>{
//     pics[1].style.transform = "scale(1.5) translateY(-17%)";
//     pics[1].style.zIndex = "100";           //camelCase is must
//     pics[2].style.transform = "scale(1.2) translateY(-21%)";
//     pics[2].style.zIndex = "0";
// })

// function changeSize(n){
//   let p1;
//   let p2;
//   let p3;
//   if(n === '1'){
//     p1 = 0;
//     p2 = 1;
//     p3 = 2;
//   }
//   else if(n === '4'){
//     p1 = 3;
//     p2 = 2;
//     p3 = 1;
//   }
//   pics[p1].style.transform = "scale(1.5) translateY(-17%)";
//   pics[p1].style.zIndex = "100";           //camelCase is must
//   pics[p2].style.transform = "scale(1.2) translateY(-21%)";
//   pics[p2].style.zIndex = "0";
//   pics[p3].style.transform = "scale(1.1) translateY(-23%)";
//   pics[p3].style.zIndex = "0";

// }

// pics[0].addEventListener('mouseover', changeSize(1));
// pics[3].addEventListener('mouseover', changeSize(4));
