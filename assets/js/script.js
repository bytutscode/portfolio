
// mob menu
const menuIcon = document.querySelector('#menu-mobile');
const menuOptions = document.querySelectorAll('header ul li');
const h1 = document.querySelector('h1');

const toggleMenu = ()=>{
    let menuLines = document.querySelectorAll('#menu-mobile span');
    let header = document.querySelector('header');

    header.classList.toggle('show')
    menuLines[0].classList.toggle('firstline');
    menuLines[1].classList.toggle('secondline');
    menuLines[2].classList.toggle('thirdline');
}

menuIcon.addEventListener('click',toggleMenu);

menuOptions.forEach((e)=>{
    e.addEventListener('click', toggleMenu);
});


// projects scroll slider
const container = document.querySelector('.projects');
const previus = document.querySelector('button.previus');
const next = document.querySelector('button.next');
const scrollbarWidth = container.offsetWidth;

const projects = document.querySelectorAll('.project');

projects.forEach((e)=>{
    if(window.innerWidth > 700){
        let projectWidth = (container.clientWidth - 120) / 3;
        e.style.minWidth = `${projectWidth}px`;
    } else {
        let projectWidth = (container.clientWidth - 40) / 1;
        e.style.minWidth = `${projectWidth}px`;
    }
    
    e.querySelector('img').addEventListener('click',(a)=>{
        let body = document.querySelector('body');
        let project = e.querySelector('.opened');
        project.style.display = 'block';

        body.classList.add('bodyScroll');

        let back = e.querySelector('#backbtn');

        setTimeout(()=>{
            project.style.opacity = '1';
        },050);

        back.addEventListener('click',()=>{
            let body = document.querySelector('body');
            body.classList.remove('bodyScroll');
            project.style.opacity = '0';
            setTimeout(()=>{
                project.style.display = 'none';
            },300);
        });

    });
    e.querySelector('h3').addEventListener('click',()=>{
        let project = e.querySelector('.opened');
        project.style.display = 'block';
        let body = document.querySelector('body');
        body.classList.add('bodyScroll');
    });

    let mainImage =e.querySelector('.opened img');
    let othersImages = e.querySelectorAll('.opened div .others img');


    othersImages.forEach((i)=>{
        i.addEventListener('click',()=>{
            
            othersImages.forEach((a)=>{
                if(a.classList.remove('active')){
                    a.classList.remove('active');
                }
            });

            i.classList.add('active');
            let imgSrc = i.getAttribute('src');
            mainImage.setAttribute('src',imgSrc);
            mainImage.style.animationName = 'none';
            setTimeout(()=>{mainImage.style.animationName = 'websiteviewer';},1000);
            mainImage.style.objectPosition ='top 0px';
        })
    })
})

const nextSlide = ()=>{
    container.scroll({
        top:0,
        left:container.scrollLeft+scrollbarWidth,
        behavior:'smooth'
    })
}

const previusSlide = ()=>{
    container.scroll({
        top:0,
        left:container.scrollLeft-scrollbarWidth,
        behavior:'smooth'
    })
}

next.addEventListener('click',nextSlide);
previus.addEventListener('click',previusSlide);



const typing= ()=>{
    let text = h1.innerHTML;
    text = text.split('');
    h1.innerHTML = '';
    let interval = 120;
    let currentTime = 0;
    text.forEach(l =>{
        currentTime = currentTime + interval;
        const type = ()=>{
            h1.innerHTML+=l
        }
        setTimeout(type,currentTime)
    });
}
typing();




// animation on show

let observe = new IntersectionObserver(entries =>{
 
    entries.forEach((e)=>{
        if(e.boundingClientRect.y < 0){
            e.target.classList.remove('hidden');
            e.target.classList.add('obs-show');
            
        }
        if(e.intersectionRatio > 0){
            e.target.classList.remove('hidden');
            e.target.classList.add('obs-show');
           
        }

    })
   
},{threshold:[0.50]});


let imgs = document.querySelectorAll('.hidden');
imgs.forEach(e =>{
    observe.observe(e);
})


