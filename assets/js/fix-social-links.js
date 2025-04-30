// Fix for social media links
document.addEventListener('DOMContentLoaded', function() {
  console.log('Fix social links script loaded');
  
  // Find all profile/social media links
  const socialLinks = document.querySelectorAll('.network-icon a');
  
  // Log found links
  console.log('Found social links:', socialLinks.length);
  
  socialLinks.forEach(link => {
    // Log link info
    console.log('Social link:', link.href, link.className);
    
    // Ensure the link works with direct click
    link.addEventListener('click', function(e) {
      console.log('Social link clicked:', this.href);
      window.open(this.href, '_blank');
    });
  });
  
  // Specifically target Google Scholar links
  const scholarLinks = document.querySelectorAll('a[href*="scholar.google"]');
  console.log('Found Google Scholar links:', scholarLinks.length);
  
  scholarLinks.forEach(link => {
    console.log('Scholar link:', link.href);
    
    // Remove any existing click handlers by cloning and replacing
    const newLink = link.cloneNode(true);
    if (link.parentNode) {
      link.parentNode.replaceChild(newLink, link);
    }
    
    // Add direct click handler
    newLink.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Google Scholar link clicked, opening:', this.href);
      window.open(this.href, '_blank');
      return false;
    });
  });
}); 