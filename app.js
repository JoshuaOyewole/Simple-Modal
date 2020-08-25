const modalSection = document.querySelector('.section-offer');
const bookSection = document.querySelector('.section-book');
const modalOpen = document.querySelectorAll('.book__button');
const modalClose = document.querySelector('.btn-close');
const body = document.querySelector('body');

/* console.log(bookSection.style.display='none'); */


 Array.from(modalOpen).map(cur =>{
    cur.addEventListener('click', ()=>{
        bookSection.style.display='none';
        const container = document.createElement('div');
        const section = document.createElement('section').appendChild(container);
        section.className = 'section-offer';
        container.className = 'container';
        const textHeading = document.createElement('h1');
        const textContent = document.createElement('p');
        const orderBtn = document.createElement('button');
        orderBtn.textContent = 'Order Now';
        orderBtn.className = 'btn order';
        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Close';
        closeBtn.className = 'btn-close';
        textContent.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse deserunt doloremque deleniti, rerum ipsum dolor omnis, placeat quibusdam saepe nam vel? Magni expedita voluptatem atque enim quidem accusamus suscipit ipsum inventore velit omnis quasi, totam laboriosam cumque, ut natus qui. Vero deleniti dolorem magnam adipisci, dolore quod suscipit neque illum!';
        textHeading.textContent= 'Power in Purity';
       container.appendChild(textHeading);
       container.appendChild(textContent);
       container.appendChild(orderBtn);
       container.appendChild(closeBtn);
       body.appendChild(section);


 })
});


//TO CLOSE MODAL
body.addEventListener('click', (e)=>{
    if(e.target.className == 'btn-close'){
        bookSection.style.display='block';
    }
    
})


