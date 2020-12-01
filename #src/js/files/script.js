
document.addEventListener('DOMContentLoaded', () => {
    

    const sizeInput = document.querySelector('#size');
    const sideCheckbox = document.querySelector('#sizePx');
    const radiusInput = document.querySelector('#radius');
    const radiusCheckbox = document.querySelector('#radiusPx')
    const redSquare = document.querySelector('#redSquare');
    const inputs = document.querySelectorAll('.item-aside__input');
    const checkbox = document.querySelectorAll('.item-aside__hide-input');
    const sliderResize = document.querySelector('.aside__slider');
    const aside = document.querySelector('.aside');


    const resizeSquare = () => {
            let unit;
            if(sideCheckbox.checked){
                unit = "px";
            }else{
                unit = "%";
            }
            redSquare.style.width = `${sizeInput.value }${unit}`;
            redSquare.style.height = `${sizeInput.value}${unit}`;
        }

    const radiusSquare = () => {
            let unit;
            if(radiusCheckbox.checked){
                unit = "px";
            }else{
                unit = "%";
            }
            redSquare.style.borderRadius = `${radiusInput.value }${unit}`;
        }


        sizeInput.addEventListener('keyup', resizeSquare);
        radiusInput.addEventListener('keyup', radiusSquare);
        resizeSquare();
        radiusSquare();

        // resize aside
        // let oldSize;
        // const resizeAside = (e) => {
        //     let newSize = e.pageX;
        //         if(oldSize != newSize){
        //             if(oldSize > newSize){
        //                 aside.style.width = `${aside.offsetWidth + (oldSize - newSize)}px`;
        //             }else{
        //                 aside.style.width = `${aside.offsetWidth - (newSize - oldSize)}px`;
        //             }
        //         }
        // }

        // sliderResize.addEventListener('mousedown', (event) => {
        //     oldSize = event.pageX;
        //     sliderResize.addEventListener('mousemove', throttle(resizeAside, 1000));
        // });
        // sliderResize.addEventListener('mouseup', () => {
        //     sliderResize.removeEventListener('mousemove', throttle(resizeAside, 1000));
        // });

       // resize aside
        const resizeAside = event => {
            aside.style.width = `${document.documentElement.getBoundingClientRect().width - event.pageX}px`
        }

        const throttledResize = throttle(resizeAside, 10, {trailing: true})

        sliderResize.addEventListener('mousedown', () => {
            document.body.addEventListener('mousemove', throttledResize);

            document.body.addEventListener('mouseup', () => {
                document.body.removeEventListener('mousemove', throttledResize);
            }, {once: true});
        });

});