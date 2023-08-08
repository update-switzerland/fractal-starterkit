const ElementHelper = {
    slideDown(element) { 
        element.style.height = 'auto';
        const height = element.clientHeight + 'px';
        element.style.height = '0';

        setTimeout(() => element.style.height = height);
    },

    slideUp(element) {
        console.log(element)
        element.style.height = element.clientHeight + 'px';
        setTimeout(() => element.style.height = '0');
    }
}