
document.addEventListener('DOMContentLoaded', () => {
    

    const sizeInput = document.querySelector('#size');
    const radiusInput = document.querySelector('#radius');
    const radiusCheckbox = document.querySelector('#radiusPx')
    const colorInput = document.querySelector('#color');
    const borderInput = document.querySelector('#border');
    const borderColorInput = document.querySelector('#borderColor');
    const redSquare = document.querySelector('#redSquare');
    const inputs = document.querySelectorAll('.item-aside__input');
    const checkbox = document.querySelectorAll('.item-aside__hide-input');
    const sliderResize = document.querySelector('.aside__slider');
    const aside = document.querySelector('.aside');
    const zoom = document.querySelectorAll('input[name="zoom"]');
    const themeChange = document.querySelector('#themeChange');

    themeChange.addEventListener('change', () => {
        document.body.classList.toggle('_dark');
        
        if(document.body.classList.contains('_dark')){
            localStorage.setItem('dark', true);
        }else{
            localStorage.setItem('dark', false);
        }
        
    });
    
    if(localStorage.getItem('dark') == 'true'){
        document.body.classList.add('_dark');
    }

    zoom.forEach(element => {
        element.addEventListener('change', () => {
            if(element.checked){
               let scaleValue = element.id.slice(4);
               document.querySelector('.main__content').style.transform = `scale(${scaleValue})`;
            }
        });
    });
    
    const resizeSquare = () => {
            redSquare.style.width = `${(sizeInput.value == false) ? 0: sizeInput.value}px`;
            redSquare.style.height = `${(sizeInput.value == false) ? 0: sizeInput.value}px`;
            borderSquare();
        }

    const radiusSquare = () => {
            let unit;
            if(radiusCheckbox.checked){
                unit = "px";
            }else{
                unit = "%";
            }
            redSquare.style.borderRadius = `${(radiusInput.value == '') ? 0: radiusInput.value}${unit}`;
        }

        const getColorSquare = (color = 'ff0000') => {
            redSquare.style.background = `#${color}`;
        }

        const colorSquare = () => {
            let colorValue = colorInput.value;
            getColorSquare(colorValue);
        }
        let borderColorValue = '000000';

        const borderSquare = () => {
            let borerValue = (borderInput.value == false) ? 0: (sizeInput.value == false) ? 0:  ((borderInput.value >= sizeInput.value/2) ? (sizeInput.value/2): borderInput.value);
            redSquare.style.border = `${borerValue}px solid #${borderColorValue}`;
        }

        const borderColorSquare = () => {
            borderColorValue = borderColorInput.value;
            borderSquare();
        }

        checkbox.forEach(element => {
            element.addEventListener('change', () => {
                resizeSquare();
                radiusSquare();
            });
        });

        sizeInput.addEventListener('keyup', resizeSquare);
        radiusInput.addEventListener('keyup', radiusSquare);
        colorInput.addEventListener('keyup', colorSquare);
        borderInput.addEventListener('keyup', borderSquare);
        borderColorInput.addEventListener('keyup', borderColorSquare);
        resizeSquare();
        radiusSquare();
        getColorSquare();
        borderSquare();



       // resize aside
        const resizeAside = event => {
            aside.style.width = `${document.documentElement.getBoundingClientRect().width - event.pageX}px`
        }

        const throttledResize = throttle(resizeAside, 10, {trailing: true})

        sliderResize.addEventListener('mousedown', () => {
            document.body.addEventListener('mousemove', throttledResize);
        });
        document.body.addEventListener('mouseup', () => {
                document.body.removeEventListener('mousemove', throttledResize);
        });


        





});