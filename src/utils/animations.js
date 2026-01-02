
export function initAnimations() {
    if (typeof window === 'undefined') return () => { };

    const cleanupTasks = [];

    /**
     * Smooth Scroll Implementation
     */
    class SmoothScroll {
        constructor() {
            this.DOM = {
                scrollable: document.querySelector('body')
            };
            this.current = 0;
            this.target = 0;
            this.ease = 0.12;
            this.isScrolling = false;
            this.scrollTimeout = null;
            this.maxScroll = 0;
            this.rafId = null;
            this.isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

            // Bind methods for cleanup
            this.onWheelBound = this.onWheel.bind(this);
            this.onResizeBound = this.onResize.bind(this);
            this.onKeyDownBound = this.onKeyDown.bind(this);
            // Anchor click is handled via delegation or individual logic - keeping simple for now

            if (!this.isTouchDevice) {
                this.init();
            }
        }

        init() {
            this.createScrollWrapper();
            if (!this.wrapper) return;

            // Set body styles
            document.body.style.height = `${this.wrapper.getBoundingClientRect().height}px`;
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed'; // Prevents native scroll
            document.body.style.width = '100%';
            document.body.style.top = '0';
            document.body.style.left = '0';

            this.calculateMaxScroll();
            this.bindEvents();
            this.animate();

            window.addEventListener('resize', this.onResizeBound);
        }

        createScrollWrapper() {
            // Target the React wrapper
            this.wrapper = document.getElementById('smooth-scroll-wrapper');
            if (this.wrapper) {
                this.wrapper.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    will-change: transform;
                    z-index: 1;
                `;
            }
        }

        calculateMaxScroll() {
            if (this.wrapper) {
                this.maxScroll = this.wrapper.getBoundingClientRect().height - window.innerHeight;
            }
        }

        bindEvents() {
            window.addEventListener('wheel', this.onWheelBound, { passive: false });
            window.addEventListener('keydown', this.onKeyDownBound);

            // Anchors - we'll use delegation on document
            document.addEventListener('click', (e) => {
                const anchor = e.target.closest('a[href^="#"]');
                if (anchor) {
                    this.onAnchorClick(e, anchor);
                }
            });
        }

        onWheel(e) {
            e.preventDefault();
            const delta = e.deltaY;
            this.target += delta;
            this.target = Math.max(0, Math.min(this.target, this.maxScroll));
            this.isScrolling = true;
            if (this.scrollTimeout) clearTimeout(this.scrollTimeout);
            this.scrollTimeout = setTimeout(() => { this.isScrolling = false; }, 150);
        }

        onKeyDown(e) {
            const scrollAmount = window.innerHeight * 0.3;
            switch (e.key) {
                case 'ArrowDown':
                case 'PageDown':
                    e.preventDefault();
                    this.target = Math.min(this.target + scrollAmount, this.maxScroll);
                    break;
                case 'ArrowUp':
                case 'PageUp':
                    e.preventDefault();
                    this.target = Math.max(this.target - scrollAmount, 0);
                    break;
                case 'Home':
                    e.preventDefault();
                    this.target = 0;
                    break;
                case 'End':
                    e.preventDefault();
                    this.target = this.maxScroll;
                    break;
                case ' ':
                    e.preventDefault();
                    if (e.shiftKey) {
                        this.target = Math.max(this.target - window.innerHeight * 0.8, 0);
                    } else {
                        this.target = Math.min(this.target + window.innerHeight * 0.8, this.maxScroll);
                    }
                    break;
            }
        }

        onAnchorClick(e, anchor) {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const rect = targetElement.getBoundingClientRect();
                // We need position relative to logic. 
                // Current logic: targetPosition = current + rect.top ...
                // Note: rect.top is affected by current transform! 
                // So (current + rect.top) gives absolute position from top of document. 
                const targetPosition = this.current + rect.top - 80;
                this.target = Math.max(0, Math.min(targetPosition, this.maxScroll));
            }
        }

        animate() {
            this.current += (this.target - this.current) * this.ease;
            const rounded = Math.round(this.current * 100) / 100;

            if (this.wrapper) {
                this.wrapper.style.transform = `translate3d(0, ${-rounded}px, 0)`;
            }

            this.updateParallax(rounded);
            // Navbar update is handled by component listener, but we trigger event
            // Note: we removed direct updateNavbar call to rely on events or React state
            // But to be safe properly mimicking strict behavior:
            // The Navbar component listens to 'smoothscroll'.

            // Helper for window scroll
            // window.scrollY is read-only usually, but we set scrollTop
            document.documentElement.scrollTop = rounded;

            window.dispatchEvent(new CustomEvent('smoothscroll', {
                detail: { scrollY: rounded }
            }));

            this.rafId = requestAnimationFrame(() => this.animate());
        }

        updateParallax(scrollY) {
            // Generic Parallax
            // Generic Parallax
            const parallaxElements = document.querySelectorAll('[data-parallax]');
            parallaxElements.forEach(el => {
                const speed = parseFloat(el.dataset.parallax) || 0.5;
                const rect = el.getBoundingClientRect(); // rect includes current transform!

                // Retrieve the previously applied offset from a property (more stable than parsing string)
                const prevOffset = el._parallaxY || 0;

                // Calculate natural center by removing the previous offset
                const elementBaseCenter = (rect.top - prevOffset) + (rect.height / 2);
                const viewportCenter = window.innerHeight / 2;

                const distanceFromCenter = elementBaseCenter - viewportCenter;
                let yOffset = distanceFromCenter * speed * -1;

                // Apply Optional Clamping
                const min = el.dataset.parallaxMin ? parseFloat(el.dataset.parallaxMin) : -Infinity;
                const max = el.dataset.parallaxMax ? parseFloat(el.dataset.parallaxMax) : Infinity;
                yOffset = Math.max(min, Math.min(max, yOffset));

                // Store for next frame
                el._parallaxY = yOffset;
                el.style.transform = `translate3d(0, ${yOffset}px, 0)`;
            });

            // BG Parallax
            const bgLayers = document.querySelectorAll('[data-parallax-bg]');
            bgLayers.forEach(layer => {
                const speed = parseFloat(layer.dataset.parallaxBg) || 0.3;
                const yOffset = scrollY * speed;
                layer.style.transform = `translate3d(0, ${yOffset}px, 0)`;
            });

            // 3D Mockup
            const heroMockup = document.querySelector('.hero-mockup');
            if (heroMockup) {
                const rawScrollY = scrollY;
                const windowHeight = window.innerHeight;
                const scrollEnd = windowHeight * 0.4;
                const scrollProgress = Math.max(0, Math.min(1, rawScrollY / scrollEnd));

                if (rawScrollY > 5) {
                    heroMockup.style.animation = 'none';
                    heroMockup.style.transition = 'none'; // DISABLE CSS TRANSITION LAG
                    const maxRotation = 35;
                    const currentRotation = maxRotation * (1 - scrollProgress);
                    const maxTranslateZ = 220; // Increased from 100/150 to 220 for "more forward"
                    const currentTranslateZ = maxTranslateZ * scrollProgress;
                    const currentScale = 1 + (0.02 * scrollProgress);

                    heroMockup.style.transform = `
                        rotateX(${currentRotation}deg) 
                        translateZ(${currentTranslateZ}px)
                        scale(${currentScale})
                    `;
                    heroMockup.style.opacity = 1;
                }
            }
        }

        onResize() {
            if (this.wrapper) {
                // Force layout update
                const height = this.wrapper.getBoundingClientRect().height;
                if (height > 0) {
                    document.body.style.height = `${height}px`;
                    this.calculateMaxScroll();
                    this.target = Math.min(this.target, this.maxScroll);
                    this.current = Math.min(this.current, this.maxScroll);

                    // Force re-render of transform to prevent glitch
                    const rounded = Math.round(this.current * 100) / 100;
                    this.wrapper.style.transform = `translate3d(0, ${-rounded}px, 0)`;
                }
            }
        }

        destroy() {
            if (this.rafId) cancelAnimationFrame(this.rafId);
            window.removeEventListener('wheel', this.onWheelBound);
            window.removeEventListener('keydown', this.onKeyDownBound);
            window.removeEventListener('resize', this.onResizeBound);
            document.body.style.cssText = '';
            // Don't clear wrapper styles completely as it might flash, but React handles unmount.
        }
    }

    /**
     * Scroll Animation Controller
     */
    class ScrollAnimationController {
        constructor() {
            this.observer = null;
            this.init();
        }

        init() {
            this.setupIntersectionObserver();
        }

        setupIntersectionObserver() {
            const options = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        requestAnimationFrame(() => {
                            entry.target.classList.add('visible');
                        });
                    }
                });
            }, options);

            const selectors = ['.scroll-fade-up', '.scroll-scale', '.scroll-slide-left', '.scroll-slide-right'];
            selectors.forEach(selector => {
                document.querySelectorAll(selector).forEach(el => this.observer.observe(el));
            });

            // Initial check
            this.checkInitialVisibility();
        }

        checkInitialVisibility() {
            const selectors = ['.scroll-fade-up', '.scroll-scale', '.scroll-slide-left', '.scroll-slide-right'];
            selectors.forEach(selector => {
                document.querySelectorAll(selector).forEach(el => {
                    const rect = el.getBoundingClientRect();
                    if (rect.top < window.innerHeight * 0.85) {
                        setTimeout(() => el.classList.add('visible'), 100);
                    }
                });
            });
        }

        destroy() {
            if (this.observer) this.observer.disconnect();
        }
    }

    /**
     * Scroll Progress Indicator
     */
    class ScrollProgress {
        constructor() {
            this.createProgressBar();
            this.setupScrollListener();
        }

        createProgressBar() {
            this.progressBar = document.createElement('div');
            this.progressBar.className = 'scroll-progress';
            this.progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';

            // Add styles
            const style = document.createElement('style');
            style.textContent = `
                .scroll-progress {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background: transparent;
                    z-index: 1001;
                }
                .scroll-progress-bar {
                    height: 100%;
                    background: linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7);
                    width: 0%;
                    transition: width 0.1s linear;
                }
            `;
            document.head.appendChild(style);
            document.body.appendChild(this.progressBar);
            this.styleElement = style;
            this.progressBarInner = this.progressBar.querySelector('.scroll-progress-bar');
        }

        setupScrollListener() {
            this.onScroll = () => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercent = (scrollTop / docHeight) * 100;
                this.progressBarInner.style.width = `${scrollPercent}%`;
            };

            // Listen to both native and custom events
            window.addEventListener('scroll', this.onScroll, { passive: true });
            window.addEventListener('smoothscroll', this.onScroll);
        }

        destroy() {
            window.removeEventListener('scroll', this.onScroll);
            window.removeEventListener('smoothscroll', this.onScroll);
            if (this.progressBar) this.progressBar.remove();
            if (this.styleElement) this.styleElement.remove();
        }
    }

    /**
     * UI Enhancements
     */
    class UIEnhancements {
        constructor() {
            this.cleanupFuncs = [];
            this.init();
        }
        init() {
            this.setupCardTilt();
            this.setupMagneticButtons();
        }
        setupCardTilt() {
            const cards = document.querySelectorAll('.feature-card, .testimonial-card, .pricing-card');
            cards.forEach(card => {
                const onMove = (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 20;
                    const rotateY = (centerX - x) / 20;
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
                };
                const onLeave = () => { card.style.transform = ''; };

                card.addEventListener('mousemove', onMove);
                card.addEventListener('mouseleave', onLeave);

                this.cleanupFuncs.push(() => {
                    card.removeEventListener('mousemove', onMove);
                    card.removeEventListener('mouseleave', onLeave);
                });
            });
        }
        setupMagneticButtons() {
            const buttons = document.querySelectorAll('.btn-primary, .nav-cta');
            buttons.forEach(btn => {
                const onMove = (e) => {
                    const rect = btn.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
                };
                const onLeave = () => { btn.style.transform = ''; };

                btn.addEventListener('mousemove', onMove);
                btn.addEventListener('mouseleave', onLeave);

                this.cleanupFuncs.push(() => {
                    btn.removeEventListener('mousemove', onMove);
                    btn.removeEventListener('mouseleave', onLeave);
                });
            });
        }

        destroy() {
            this.cleanupFuncs.forEach(fn => fn());
        }
    }

    /**
     * Debug Helper
     */
    class DebugHelper {
        constructor() {
            this.createOverlay();
            this.boundUpdate = this.update.bind(this);
            window.addEventListener('smoothscroll', this.boundUpdate);
        }

        createOverlay() {
            this.el = document.createElement('div');
            this.el.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: rgba(0, 0, 0, 0.8);
                color: #00ff00;
                padding: 15px;
                border-radius: 8px;
                font-family: monospace;
                font-size: 12px;
                z-index: 9999;
                pointer-events: none;
                min-width: 200px;
            `;
            document.body.appendChild(this.el);
        }

        update(e) {
            const scrollY = e.detail.scrollY;
            const windowHeight = window.innerHeight;
            const scrollEnd = windowHeight * 0.5; // Match logical constant
            const progress = Math.max(0, Math.min(1, scrollY / scrollEnd));
            const rotation = 35 * (1 - progress);
            const zoom = 150 * progress;

            this.el.innerHTML = `
                <div><strong>Debug Monitor</strong></div>
                <div>------------------</div>
                <div>ScrollY:   ${Math.round(scrollY)}px</div>
                <div>Target:    ${Math.round(scrollEnd)}px</div>
                <div>Progress:  ${(progress * 100).toFixed(1)}%</div>
                <div>Rotation:  ${rotation.toFixed(1)}°</div>
                <div>Zoom Z:    ${zoom.toFixed(1)}px</div>
                <div>------------------</div>
                <div style="color: #aaa">Edit src/utils/animations.js<br>Line 199 (Target)<br>Line 204 (Rotation)<br>Line 206 (Zoom)</div>
            `;
        }

        destroy() {
            window.removeEventListener('smoothscroll', this.boundUpdate);
            if (this.el) this.el.remove();
        }
    }

    // Initialize
    const smoothScroll = new SmoothScroll();
    cleanupTasks.push(() => smoothScroll.destroy());

    const scrollController = new ScrollAnimationController();
    cleanupTasks.push(() => scrollController.destroy());

    const uiEnhancements = new UIEnhancements();
    cleanupTasks.push(() => uiEnhancements.destroy());

    const scrollProgress = new ScrollProgress();
    cleanupTasks.push(() => scrollProgress.destroy());

    // Uncomment to enable debug overlay permanently, or keep enabled as requested
    // const debugHelper = new DebugHelper();
    // cleanupTasks.push(() => debugHelper.destroy());

    document.body.classList.add('loaded');

    return () => {
        cleanupTasks.forEach(t => t());
    };
}
