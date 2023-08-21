const slider = document.querySelectorAll('.el-slider');
if (slider) {
    slider.forEach(slide => {
        let glide = new Glide(slide, {
            type: 'carousel',
            perView: 1,
            autoplay: false,
            animationDuration: 500
        });

        glide.on(['mount.before'], function () {
            const bulletCount = glide.selector.querySelectorAll('.glide__slide').length;
            const bulletWrapper = glide.selector.querySelectorAll('.glide__bullets')[0];
            for (let index = 0; index < bulletCount; index++) {
                const button = document.createElement('button');
                button.className = 'glide__bullet';
                button.setAttribute("data-glide-dir", '=' + index);
                bulletWrapper.appendChild(button);
            }
        });

        glide.mount();
    });
}