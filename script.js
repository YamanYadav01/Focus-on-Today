const redMark = document.querySelector('.redMark')
const Textbox = document.querySelectorAll('.text')
let checkbox = document.querySelectorAll('.radio')
const progressbar = document.querySelector('#progressBar')
const disableCheckboxes = () => {
  for (let box of checkbox) {
    box.disabled = true;
  }
};


const enableCheckboxes = () => {
  for (let box of checkbox) {
    box.disabled = false;
  }
};


const checkTextboxes = ()=>{
  for(let Text of Textbox){
   if(Text.value===''){
     return false;
   }
  }
  return true;
}


const updateCheckboxes = () => {
  if (checkTextboxes()) {
   
    enableCheckboxes();
  } else {
   
    disableCheckboxes();
  }
};

disableCheckboxes();



Textbox.forEach((textbox)=>{
         textbox.addEventListener('input',()=>{
          updateCheckboxes();
       
         })
})


checkbox.forEach((box) => {
  box.addEventListener('click', (e) => {
   const currentVal = progressbar.value;
   if (currentVal < progressbar.max) {
    progressbar.value = currentVal + 33.33; // Increase by 10 for example
}
  });
});



