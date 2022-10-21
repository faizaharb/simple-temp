let liTag = document.querySelectorAll( ".tabs-navs li" );
let imgPortfolio = Array.from( document.images );

liTag.forEach( ( li ) => {
  li.addEventListener('click',activeControl)
  li.addEventListener('click',imgsControl)
})

function activeControl() {
  liTag.forEach( ( li ) => {
    li.classList.remove( 'active' )
    this.classList.add('active')
  })
}

function imgsControl() {
  imgPortfolio.forEach( ( img ) => {
    img.style.display='none'
  } )
  document.querySelectorAll( this.dataset.catch ).forEach( ( item ) => {
    item.style.display='block'
  })
}

