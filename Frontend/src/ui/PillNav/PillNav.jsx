import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { motion } from 'motion/react';
import './PillNav.css';

const PillNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  activeHref,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#fff',
  pillColor = '#120F17',
  hoveredPillTextColor = '#120F17',
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true,
  ctaText = 'Book a Call',
  ctaHref = '#',
  brandName = 'Shinta'
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState({});
  const [expandedCountries, setExpandedCountries] = useState({});
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);

  const toggleMobileItem = (index) => {
    setExpandedMobileItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleMobileCountry = (index, countryTitle) => {
    setExpandedCountries(prev => ({
      ...prev,
      [`${index}-${countryTitle}`]: !prev[`${index}-${countryTitle}`]
    }));
  };
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);
  const logoImgRef = useRef(null);
  const logoTweenRef = useRef(null);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navItemsRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach(circle => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;

        // Safeguard against layout calculations before components are sized
        if (w === 0 || h === 0) return;

        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`
        });

        const label = pill.querySelector('.pill-label');
        const white = pill.querySelector('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(
          circle,
          { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' },
          0
        );

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener('resize', onResize);

    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: 'hidden', opacity: 0, scaleY: 1 });
    }

    return () => window.removeEventListener('resize', onResize);
  }, [items, ease]);

  const handleEnter = i => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLeave = i => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    gsap.set(img, { rotate: 0 });
    logoTweenRef.current = gsap.to(img, {
      rotate: 360,
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll('.hamburger-line');
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: 'visible' });
        gsap.fromTo(menu, { opacity: 0, y: 10, scaleY: 1 }, {
          opacity: 1,
          y: 0,
          scaleY: 1,
          duration: 0.3,
          ease,
          transformOrigin: 'top center'
        });
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          scaleY: 1,
          duration: 0.2,
          ease,
          transformOrigin: 'top center',
          onComplete: () => {
            gsap.set(menu, { visibility: 'hidden' });
          }
        });
      }
    }

    onMobileMenuClick?.();
  };

  const isExternalLink = href =>
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('//') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('#');

  const isRouterLink = href => href && !isExternalLink(href);

  const cssVars = {
    ['--base']: baseColor,
    ['--pill-bg']: pillColor,
    ['--hover-text']: hoveredPillTextColor,
    ['--pill-text']: resolvedPillTextColor
  };

  return (
    <motion.div 
      className="pill-nav-container"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className={`pill-nav ${className}`} aria-label="Primary" style={cssVars}>
        <motion.div 
          className="pill-nav-brand"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        >
          {isRouterLink(items?.[0]?.href) ? (
            <Link
              className="pill-logo"
              to={items[0].href}
              aria-label="Home"
              onMouseEnter={handleLogoEnter}
              role="menuitem"
              ref={el => {
                logoRef.current = el;
              }}>
              <img src={logo} alt={logoAlt} ref={logoImgRef} />
            </Link>
          ) : (
            <a
              className="pill-logo"
              href={items?.[0]?.href || '#'}
              aria-label="Home"
              onMouseEnter={handleLogoEnter}
              ref={el => {
                logoRef.current = el;
              }}>
              <img src={logo} alt={logoAlt} ref={logoImgRef} />
            </a>
          )}
          <span className="pill-brand-text">{brandName}</span>
        </motion.div>

        <motion.div 
          className="pill-nav-items desktop-only" 
          ref={navItemsRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
        >
          <ul className="pill-list" role="menubar">
            {items.map((item, i) => {
              const hasDropdown = item.dropdown && item.dropdown.length > 0;
              const isOpen = activeDropdownIndex === i;
              return (
                <li
                  key={item.href || `item-${i}`}
                  role="none"
                  className={`pill-list-item${hasDropdown ? ' has-dropdown' : ''}${isOpen ? ' dropdown-open' : ''}`}
                  onMouseEnter={() => {
                    handleEnter(i);
                    setActiveDropdownIndex(i);
                  }}
                  onMouseLeave={() => {
                    handleLeave(i);
                    setActiveDropdownIndex(null);
                  }}
                >
                  {isRouterLink(item.href) ? (
                    <Link
                      role="menuitem"
                      to={item.href}
                      className={`pill${activeHref === item.href ? ' is-active' : ''}`}
                      aria-label={item.ariaLabel || item.label}
                    >
                      <span
                        className="hover-circle"
                        aria-hidden="true"
                        ref={el => {
                          circleRefs.current[i] = el;
                        }} />
                      <span className="label-stack">
                        <span className="pill-label">{item.label}</span>
                        <span className="pill-label-hover" aria-hidden="true">
                          {item.label}
                        </span>
                      </span>
                    </Link>
                  ) : (
                    <a
                      role="menuitem"
                      href={item.href}
                      className={`pill${activeHref === item.href ? ' is-active' : ''}`}
                      aria-label={item.ariaLabel || item.label}
                    >
                      <span
                        className="hover-circle"
                        aria-hidden="true"
                        ref={el => {
                          circleRefs.current[i] = el;
                        }} />
                      <span className="label-stack">
                        <span className="pill-label">{item.label}</span>
                        <span className="pill-label-hover" aria-hidden="true">
                          {item.label}
                        </span>
                      </span>
                    </a>
                  )}

                  {hasDropdown && (
                    <div className="mega-dropdown">
                      <div className="mega-dropdown-grid">
                        {item.dropdown.map((col, colIdx) => (
                          <div key={colIdx} className="mega-dropdown-col">
                            <h4 className="mega-col-title">{col?.title || ''}</h4>
                            {(col?.categories || []).map((cat, catIdx) => (
                              <div key={catIdx} className="mega-category-sec">
                                <h5 className="mega-cat-header">{cat?.header || ''}</h5>
                                <ul className="mega-cat-links">
                                  {(cat?.links || []).map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                      {isRouterLink(link.href) ? (
                                        <Link to={link.href} className="mega-dropdown-link">
                                          {link.label}
                                        </Link>
                                      ) : (
                                        <a href={link.href} className="mega-dropdown-link">
                                          {link.label}
                                        </a>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </motion.div>

        {ctaText && (
          <motion.div 
            className="pill-nav-cta-container desktop-only"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
          >
            <a href={ctaHref} className="pill-nav-cta-btn">
              {ctaText}
            </a>
          </motion.div>
        )}

        <button
          className="mobile-menu-button mobile-only"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          ref={hamburgerRef}>
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>
      <div
        className="mobile-menu-popover mobile-only"
        ref={mobileMenuRef}
        style={cssVars}>
        <ul className="mobile-menu-list">
          {items.map((item, i) => {
            const hasDropdown = item.dropdown && item.dropdown.length > 0;
            const isExpanded = !!expandedMobileItems[i];

            return (
              <li key={item.href || `mobile-item-${i}`} className="mobile-menu-item-wrapper">
                {hasDropdown ? (
                  <>
                    <button
                      type="button"
                      className={`mobile-menu-link mobile-menu-dropdown-toggle${isExpanded ? ' is-expanded' : ''}`}
                      onClick={() => toggleMobileItem(i)}
                    >
                      <span>{item.label}</span>
                      <span className="accordion-chevron">
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="chevron-icon">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </button>
                    
                    {isExpanded && (
                      <ul className="mobile-dropdown-submenu">
                        {item.dropdown.map((col, colIdx) => {
                          const colKey = `${i}-${col?.title || colIdx}`;
                          const isCountryExpanded = !!expandedCountries[colKey];
                          
                          return (
                            <li key={colIdx} className="mobile-submenu-country-wrapper">
                              <button
                                type="button"
                                className={`mobile-submenu-country-toggle${isCountryExpanded ? ' is-expanded' : ''}`}
                                onClick={() => toggleMobileCountry(i, col?.title || colIdx)}
                              >
                                <span>{col?.title || ''}</span>
                                <span className="accordion-chevron-sub">
                                  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="chevron-icon">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                  </svg>
                                </span>
                              </button>
                              
                              {isCountryExpanded && (
                                <ul className="mobile-submenu-links">
                                  {(col?.categories || []).map((cat, catIdx) => (
                                    <div key={catIdx} className="mobile-submenu-cat-sec">
                                      <div className="mobile-submenu-cat-header">{cat?.header || ''}</div>
                                      {(cat?.links || []).map((link, linkIdx) => (
                                        <li key={linkIdx}>
                                          {isRouterLink(link.href) ? (
                                            <Link
                                              to={link.href}
                                              className="mobile-submenu-link"
                                              onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                              {link.label}
                                            </Link>
                                          ) : (
                                            <a
                                              href={link.href}
                                              className="mobile-submenu-link"
                                              onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                              {link.label}
                                            </a>
                                          )}
                                        </li>
                                      ))}
                                    </div>
                                  ))}
                                </ul>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </>
                ) : (
                  isRouterLink(item.href) ? (
                    <Link
                      to={item.href}
                      className={`mobile-menu-link${activeHref === item.href ? ' is-active' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className={`mobile-menu-link${activeHref === item.href ? ' is-active' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}>
                      {item.label}
                    </a>
                  )
                )}
              </li>
            );
          })}
          {ctaText && (
            <li key="cta-mobile">
              <a
                href={ctaHref}
                className="mobile-menu-link mobile-cta-btn"
                onClick={() => setIsMobileMenuOpen(false)}>
                {ctaText}
              </a>
            </li>
          )}
        </ul>
      </div>
    </motion.div>
  );
};

export default PillNav;
