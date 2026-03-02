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
  // Gumroad product IDs — replace these with your actual Gumroad product IDs
  var GUMROAD_PRODUCTS = {
    'AI Mega Prompt Pack': 'REPLACE_WITH_GUMROAD_ID',
    'Notion Productivity Bundle': 'REPLACE_WITH_GUMROAD_ID',
    'Content Calendar Kit': 'REPLACE_WITH_GUMROAD_ID',
    'Complete Business Bundle': 'REPLACE_WITH_GUMROAD_ID'
  };

  window.handlePurchase = function (productName, price) {
    // Track the purchase intent
    trackEvent('purchase_click', { product: productName, price: price });

    var gumroadId = GUMROAD_PRODUCTS[productName];

    if (gumroadId && gumroadId !== 'REPLACE_WITH_GUMROAD_ID') {
      // Real Gumroad purchase — opens Gumroad overlay
      window.open('https://gumroad.com/l/' + gumroadId, '_blank');
    } else {
      // Setup mode — show setup instructions in a nice modal
      showSetupModal(productName, price);
    }
  };

  // ==================== SETUP MODAL ====================
  function showSetupModal(productName, price) {
    var overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.8);z-index:9999;display:flex;align-items:center;justify-content:center;padding:24px;';

    overlay.innerHTML =
      '<div style="background:var(--dark-card);border:1px solid rgba(108,92,231,0.3);border-radius:20px;padding:40px;max-width:500px;width:100%;color:var(--white);font-family:var(--font-main);">' +
        '<h3 style="margin-bottom:8px;font-size:1.3rem;">⚡ Setup Required</h3>' +
        '<p style="color:var(--gray-400);margin-bottom:24px;">' + productName + ' — $' + price + '</p>' +
        '<div style="background:var(--dark-soft);border-radius:12px;padding:20px;margin-bottom:24px;">' +
          '<p style="color:var(--gray-300);font-size:0.9rem;margin-bottom:12px;"><strong style="color:var(--secondary);">To activate sales, complete these steps:</strong></p>' +
          '<ol style="color:var(--gray-300);font-size:0.9rem;padding-left:20px;line-height:2;">' +
            '<li>Create a free account at <strong>gumroad.com</strong></li>' +
            '<li>Upload your product files from <code style="background:rgba(108,92,231,0.2);padding:2px 6px;border-radius:4px;">/products/</code></li>' +
            '<li>Set the price to <strong>$' + price + '</strong></li>' +
            '<li>Copy the product ID from Gumroad</li>' +
            '<li>Update <code style="background:rgba(108,92,231,0.2);padding:2px 6px;border-radius:4px;">GUMROAD_PRODUCTS</code> in <code style="background:rgba(108,92,231,0.2);padding:2px 6px;border-radius:4px;">js/main.js</code></li>' +
          '</ol>' +
        '</div>' +
        '<button onclick="this.closest(\'div\').parentElement.remove()" style="width:100%;padding:14px;background:var(--gradient-primary);color:white;border:none;border-radius:12px;font-size:1rem;font-weight:600;cursor:pointer;">Got It</button>' +
      '</div>';

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) overlay.remove();
    });

    document.body.appendChild(overlay);
  }

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
