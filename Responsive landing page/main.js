
        // Mobile Menu Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            });
        });

        // Simple testimonial slider
        const testimonials = [
            {
                text: "InnovateTech transformed our business operations completely. Their solutions helped us increase productivity by 40% in just three months!",
                author: "John Smith",
                position: "CEO, TechSolutions Inc.",
                initials: "JS"
            },
            {
                text: "The team at InnovateTech delivered beyond our expectations. Their attention to detail and technical expertise is second to none.",
                author: "Sarah Johnson",
                position: "Marketing Director, GrowthCo",
                initials: "SJ"
            },
            {
                text: "Working with InnovateTech was a game-changer for our startup. They helped us build a robust platform that scaled with our growth.",
                author: "Michael Chen",
                position: "Founder, StartupXYZ",
                initials: "MC"
            }
        ];

        let currentTestimonial = 0;
        const testimonialSlide = document.querySelector('.testimonial-slide');
        
        function changeTestimonial() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            const testimonial = testimonials[currentTestimonial];
            
            testimonialSlide.innerHTML = `
                <p class="testimonial-text">"${testimonial.text}"</p>
                <div class="testimonial-author">
                    <div class="author-img">${testimonial.initials}</div>
                    <div>
                        <h4>${testimonial.author}</h4>
                        <p>${testimonial.position}</p>
                    </div>
                </div>
            `;
        }

        // Change testimonial every 5 seconds
        setInterval(changeTestimonial, 5000);