const slider = (slideFieldSelector,slideItemSelector) => {
    const slideField = document.querySelector(slideFieldSelector),
        slideItem = document.querySelectorAll(slideItemSelector),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next');
    let offset = 0, 
        width = 280;

    slideField.style.width = 100 * slideItem.length + '%';
    slideField.style.display = 'flex';

    prev.addEventListener('click', () => {

        if (window.screen.availWidth <= 992) {

            if (offset == width * (slideItem.length - 2)) {
            offset = width;
            } else {
               offset += width; 
            }
            
        } else if (window.screen.availWidth <= 768) {
            
            if (offset == width * (slideItem.length - 1)) {
                offset = width;
                } else {
                   offset += width; 
                }
                
        }else {
            if (offset == width * (slideItem.length - 3)) {
                offset = width;
            }  else {
                offset += width; 
            }
           
        }
        
        slideField.style.transform = `translateX(-${offset}px)`;

    });

    next.addEventListener('click', () => {
        if (offset == width * (slideItem.length - 3)) {
            offset = 0;
        } else {
            offset += width;
        }

        slideField.style.transform = `translateX(-${offset}px)`;
     
    });
    
  
};

export default slider;