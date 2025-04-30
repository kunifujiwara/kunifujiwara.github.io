// Fix for all external links on the site
document.addEventListener('DOMContentLoaded', function() {
  console.log('Fix links script loaded');
  
  // Function to check if a URL is an external link
  function isExternalLink(url) {
    if (!url) return false;
    return url.startsWith('http') || url.startsWith('https');
  }
  
  // Get all links on the page
  const allLinks = document.querySelectorAll('a');
  console.log('Total links found:', allLinks.length);
  
  // Process each link
  allLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    // Skip links without href
    if (!href) return;
    
    // For external links, ensure they open properly
    if (isExternalLink(href)) {
      // Add target and rel attributes if not present
      if (!link.getAttribute('target')) {
        link.setAttribute('target', '_blank');
      }
      
      if (!link.getAttribute('rel')) {
        link.setAttribute('rel', 'noopener');
      }
      
      // Ensure the click event works
      link.addEventListener('click', function(e) {
        // Don't interfere with default behavior, just log
        console.log('External link clicked:', href);
        
        // On rare occasions where default behavior might be prevented by other scripts
        // This ensures the link still works
        if (e.defaultPrevented) {
          e.stopPropagation();
          console.log('Default prevented, forcing link open:', href);
          window.open(href, '_blank');
        }
      });
    }
  });
  
  // Specifically fix any links with click issues
  const problematicLinkSelectors = [
    'a[href*="scholar.google"]',
    'a[href*="orcid.org"]',
    // Add other problematic links here if discovered
  ];
  
  problematicLinkSelectors.forEach(selector => {
    const links = document.querySelectorAll(selector);
    links.forEach(link => {
      console.log('Fixing problematic link:', link.href);
      
      // Ensure proper attributes
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener');
      
      // Make it visually clear it's clickable
      link.style.cursor = 'pointer';
      
      // Add additional class for styling if needed
      link.classList.add('external-link');
    });
  });
}); 