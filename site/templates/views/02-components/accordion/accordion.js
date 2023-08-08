const accordionItems = document.querySelectorAll('.cp-accordion .el-accordion-item');
const accordionContainers = document.querySelectorAll('.accordion-items .accordion-container');
const accordionTitles = document.querySelectorAll('.cp-accordion .accordion-title');

accordionTitles.forEach(function(accordionTitle) {
    accordionTitle.addEventListener('click', function() {
        const openItem = !this.parentElement.classList.contains('open') && !this.parentElement.classList.contains('already-open');

        accordionContainers.forEach(container => ElementHelper.slideUp(container));
        accordionItems.forEach(item => item.classList.remove('open', 'already-open'));

        if (openItem) {
            ElementHelper.slideDown(this.nextElementSibling);
            this.parentElement.classList.add('open');
        }
    });
});