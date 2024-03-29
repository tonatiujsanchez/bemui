/*=== === Mostrar el enlace activo === ===*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = ()=>{
    const scrollY = window.pageYOffset;
    
    sections.forEach( section =>{
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 130
        let sectionId = section.getAttribute('id')

        if( scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(`.sidebar__item a[href*=${ sectionId }]`)?.classList.add('sidebar__link-active')
        }else{
            document.querySelector(`.sidebar__item a[href*=${ sectionId }]`)?.classList.remove('sidebar__link-active');
        }
    })
}
window.addEventListener('scroll', scrollActive);
