// Fix for social media links
document.addEventListener('DOMContentLoaded', function() {
  console.log('Fix social links script loaded');
  
  // Find all profile/social media links in the network-icon class
  const socialLinks = document.querySelectorAll('.network-icon a');
  
  // Log found links
  console.log('Found social links:', socialLinks.length);
  
  socialLinks.forEach(link => {
    // Log link info
    console.log('Social link:', link.href, link.className);
    
    // Ensure each link opens in a new tab
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener');
    
    // Add click tracking (but don't interfere with normal behavior)
    link.addEventListener('click', function(e) {
      console.log('Social link clicked normally:', this.href);
      // Allow default behavior to continue
    });
  });
  
  // Specifically target Google Scholar links anywhere on the page
  const scholarLinks = document.querySelectorAll('a[href*="scholar.google"]');
  console.log('Found Google Scholar links:', scholarLinks.length);
  
  scholarLinks.forEach(link => {
    console.log('Scholar link:', link.href);
    
    // Make sure link opens in new tab
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener');
    
    // Set style to make it clear it's clickable
    link.style.cursor = 'pointer';
    
    // Optional: Add a title attribute for better UX
    if (!link.title) {
      link.title = 'Open Google Scholar profile in a new tab';
    }
  });
}); 