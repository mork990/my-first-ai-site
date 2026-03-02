/**
 * PromptForge — Main JavaScript
 * Handles: Navigation, Animations, FAQ, Newsletter, Purchase CTAs
 */

(function () {
  'use strict';

  // ==================== NAVBAR ====================
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  // Scroll effect
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Mobile menu toggle
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('active');
      });
    });
  }

  // ==================== SCROLL ANIMATIONS ====================
  function handleScrollAnimations() {
    var elements = document.querySelectorAll('.animate-on-scroll');
    var windowHeight = window.innerHeight;

    elements.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 80) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', handleScrollAnimations, { passive: true });
  window.addEventListener('load', handleScrollAnimations);

  // ==================== FAQ TOGGLE ====================
  window.toggleFaq = function (element) {
    var faqItem = element.parentElement;
    var isActive = faqItem.classList.contains('active');

    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(function (item) {
      item.classList.remove('active');
    });

    // Open clicked one (if it wasn't already active)
    if (!isActive) {
      faqItem.classList.add('active');
    }
  };

  // ==================== NEWSLETTER FORM ====================
  window.handleNewsletterSubmit = function (event) {
    event.preventDefault();
    var form = event.target;
    var emailInput = form.querySelector('input[type="email"]');
    var email = emailInput.value;

    if (!email) return;

    // Show success message
    var btn = form.querySelector('button');
    var originalText = btn.textContent;
    btn.textContent = 'Subscribed!';
    btn.style.background = 'var(--success)';
    emailInput.value = '';

    // Store email locally (in production, this would hit an API)
    var subscribers = JSON.parse(localStorage.getItem('pf_subscribers') || '[]');
    if (subscribers.indexOf(email) === -1) {
      subscribers.push(email);
      localStorage.setItem('pf_subscribers', JSON.stringify(subscribers));
    }

    // Track event
    trackEvent('newsletter_subscribe', { email_domain: email.split('@')[1] });

    // Reset button after 3 seconds
    setTimeout(function () {
      btn.textContent = originalText;
      btn.style.background = '';
    }, 3000);
  };

  // ==================== PURCHASE HANDLER ====================
  window.handlePurchase = function (productName, price) {
    // Track the purchase intent
    trackEvent('purchase_click', { product: productName, price: price });

    // In production, this would redirect to Gumroad
    // For now, show a message directing to set up Gumroad
    alert(
      'Product: ' + productName + ' — $' + price + '\n\n' +
      'To complete setup, create a Gumroad account and replace this ' +
      'handler with your Gumroad product links.\n\n' +
      'Steps:\n' +
      '1. Go to gumroad.com and create an account\n' +
      '2. Create your products\n' +
      '3. Replace the onclick handlers with Gumroad links'
    );
  };

  // ==================== ANALYTICS & TRACKING ====================
  function trackEvent(eventName, data) {
    // Store events locally for the Analytics Agent
    var events = JSON.parse(localStorage.getItem('pf_events') || '[]');
    events.push({
      event: eventName,
      data: data || {},
      timestamp: new Date().toISOString(),
      page: window.location.pathname
    });

    // Keep only last 1000 events
    if (events.length > 1000) {
      events = events.slice(-1000);
    }

    localStorage.setItem('pf_events', JSON.stringify(events));

    // Log for debugging
    console.log('[PromptForge]', eventName, data);
  }

  // Track page views
  trackEvent('page_view', {
    page: window.location.pathname,
    referrer: document.referrer,
    title: document.title
  });

  // Track scroll depth
  var maxScroll = 0;
  window.addEventListener('scroll', function () {
    var scrollPercent = Math.round(
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    );
    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
      if (maxScroll === 25 || maxScroll === 50 || maxScroll === 75 || maxScroll === 100) {
        trackEvent('scroll_depth', { depth: maxScroll });
      }
    }
  }, { passive: true });

  // Track outbound link clicks
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a');
    if (link && link.hostname !== window.location.hostname && link.href) {
      trackEvent('outbound_click', { url: link.href });
    }
  });

  // Track time on page
  var startTime = Date.now();
  window.addEventListener('beforeunload', function () {
    var timeSpent = Math.round((Date.now() - startTime) / 1000);
    trackEvent('time_on_page', { seconds: timeSpent, page: window.location.pathname });
  });

  // ==================== ANALYTICS DASHBOARD (About page) ====================
  function updateDashboard() {
    var revenueEl = document.getElementById('revenue-counter');
    var productsEl = document.getElementById('products-counter');

    if (revenueEl) {
      // Animate counter
      var events = JSON.parse(localStorage.getItem('pf_events') || '[]');
      var pageViews = events.filter(function (e) { return e.event === 'page_view'; }).length;
      revenueEl.textContent = '$' + (pageViews > 0 ? '0' : '0');
    }
  }

  updateDashboard();

  // ==================== SMOOTH SCROLL FOR ANCHOR LINKS ====================
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ==================== PRINT STARTUP MESSAGE ====================
  console.log(
    '%c⚡ PromptForge',
    'font-size: 24px; font-weight: bold; color: #6C5CE7;'
  );
  console.log(
    '%cAutonomous AI-Powered Digital Business',
    'font-size: 14px; color: #A29BFE;'
  );
  console.log(
    '%cAgent System: 6 agents active | Status: Running',
    'font-size: 12px; color: #00CEC9;'
  );

})();
