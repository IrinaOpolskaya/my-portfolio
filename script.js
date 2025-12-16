// Burger Menu
document.addEventListener('DOMContentLoaded', function() {
    // Burger menu
    const burgerBtn = document.getElementById('burger-btn');
    const closeBtn = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    // Open menu
    if (burgerBtn) {
        burgerBtn.addEventListener('click', function() {
            mobileMenu.classList.remove('-translate-x-full');
            mobileMenu.classList.add('translate-x-0');
            burgerBtn.classList.add('burger-open');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Close menu
    function closeMenu() {
        if (mobileMenu) {
            mobileMenu.classList.remove('translate-x-0');
            mobileMenu.classList.add('-translate-x-full');
            if (burgerBtn) burgerBtn.classList.remove('burger-open');
            document.body.style.overflow = '';
        }
    }
    
    // Close button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }
    
    // Close on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            closeMenu();
            
            setTimeout(() => {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 20,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        });
    });
    
    // Close on escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeMenu();
    });
    
    // Close on resize to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 1024) closeMenu();
    });
    
    // Works scroll
    const worksScroll = document.getElementById('works-scroll');
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');
    
    if (scrollLeftBtn && scrollRightBtn && worksScroll) {
        scrollLeftBtn.addEventListener('click', () => {
            worksScroll.scrollBy({ left: -350, behavior: 'smooth' });
        });
        
        scrollRightBtn.addEventListener('click', () => {
            worksScroll.scrollBy({ left: 350, behavior: 'smooth' });
        });
    }
    
    // Work cards click
    if (worksScroll) {
        worksScroll.querySelectorAll('.work-card').forEach(card => {
            card.addEventListener('click', function() {
                const title = this.querySelector('h3')?.textContent || 'Проект';
                const modal = document.getElementById('work-modal');
                const modalBody = document.getElementById('modal-body');
                
                if (modal && modalBody) {
                    modalBody.innerHTML = `
                        <div class="space-y-6">
                            <h3 class="font-source-serif text-2xl sm:text-3xl text-dark-brown mb-2">${title}</h3>
                            <div class="flex items-center gap-3 mb-4">
                                <span class="px-3 py-1 bg-dark-brown/10 text-dark-brown rounded-full text-sm">Проект</span>
                                <span class="text-medium-brown"><i class="far fa-calendar mr-1"></i> 2024</span>
                            </div>
                            <div class="h-48 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 mb-6"></div>
                            <p class="text-dark-brown mb-4">Детальное описание проекта.</p>
                        </div>
                    `;
                    
                    modal.classList.remove('hidden');
                    document.body.style.overflow = 'hidden';
                }
            });
        });
    }
    
    // Modal close
    const closeModal = document.getElementById('close-modal');
    const workModal = document.getElementById('work-modal');
    
    if (closeModal && workModal) {
        closeModal.addEventListener('click', () => {
            workModal.classList.add('hidden');
            document.body.style.overflow = '';
        });
        
        workModal.addEventListener('click', (e) => {
            if (e.target === workModal) {
                workModal.classList.add('hidden');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Contact button
    const contactBtn = document.getElementById('contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            alert('Свяжитесь со мной через контакты в разделе ниже!');
        });
    }
    
    // Smooth scroll for desktop navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update copyright year
    const copyright = document.getElementById('copyright');
    if (copyright) {
        copyright.textContent = `© ${new Date().getFullYear()} Портфолио Ирина Опольская. Все права защищены.`;
    }
});