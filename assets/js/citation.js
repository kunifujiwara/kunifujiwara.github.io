// Citation popup functionality
console.log('Citation script initialized');

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded');
  
  // Find all citation buttons - try different selectors
  const citationButtons = document.querySelectorAll('a[href*="cite.bib"], a[href*="citation"], .citation-button, .cite-button');
  console.log('Found citation buttons:', citationButtons.length);
  
  citationButtons.forEach(button => {
    console.log('Adding click handler to button:', button.href, button.className);
    
    // Remove any existing click handlers
    button.removeEventListener('click', handleCitationClick);
    
    // Add click handler
    button.addEventListener('click', handleCitationClick);
  });
});

async function handleCitationClick(e) {
  console.log('Citation button clicked');
  e.preventDefault(); // Prevent default download behavior
  e.stopPropagation(); // Stop event propagation
  
  try {
    // Get the citation URL
    const citationUrl = this.href;
    console.log('Fetching citation from:', citationUrl);
    
    // Fetch the citation content
    const response = await fetch(citationUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const citationText = await response.text();
    console.log('Citation content fetched:', citationText.substring(0, 100) + '...');
    
    // Create popup container
    const popup = document.createElement('div');
    popup.className = 'citation-popup';
    popup.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 1000;
      max-width: 90%;
      max-height: 90vh;
      overflow-y: auto;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    `;
    
    // Create content container
    const content = document.createElement('pre');
    content.style.cssText = `
      margin: 0;
      white-space: pre-wrap;
      word-wrap: break-word;
      font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
      font-size: 0.875rem;
      line-height: 1.5;
      color: #24292e;
      background: #f6f8fa;
      padding: 1rem;
      border-radius: 0.25rem;
      border: 1px solid #e1e4e8;
    `;
    content.textContent = citationText;
    
    // Create buttons container
    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.cssText = `
      display: flex;
      justify-content: flex-end;
      gap: 0.75rem;
      margin-top: 1.5rem;
    `;
    
    // Create copy button
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy';
    copyButton.style.cssText = `
      padding: 0.5rem 1rem;
      border: 1px solid #e1e4e8;
      border-radius: 0.25rem;
      background: #fff;
      color: #24292e;
      cursor: pointer;
      font-size: 0.875rem;
      transition: all 0.2s ease;
    `;
    copyButton.onmouseover = () => {
      copyButton.style.backgroundColor = '#f6f8fa';
    };
    copyButton.onmouseout = () => {
      copyButton.style.backgroundColor = '#fff';
    };
    copyButton.onclick = () => {
      navigator.clipboard.writeText(citationText);
      copyButton.textContent = 'Copied!';
      setTimeout(() => {
        copyButton.textContent = 'Copy';
      }, 2000);
    };
    
    // Create download button
    const downloadButton = document.createElement('button');
    downloadButton.textContent = 'Download';
    downloadButton.style.cssText = `
      padding: 0.5rem 1rem;
      border: 1px solid #e1e4e8;
      border-radius: 0.25rem;
      background: #fff;
      color: #24292e;
      cursor: pointer;
      font-size: 0.875rem;
      transition: all 0.2s ease;
    `;
    downloadButton.onmouseover = () => {
      downloadButton.style.backgroundColor = '#f6f8fa';
    };
    downloadButton.onmouseout = () => {
      downloadButton.style.backgroundColor = '#fff';
    };
    downloadButton.onclick = () => {
      const blob = new Blob([citationText], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'citation.bib';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    };
    
    // Create close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.cssText = `
      padding: 0.5rem 1rem;
      border: 1px solid #e1e4e8;
      border-radius: 0.25rem;
      background: #fff;
      color: #24292e;
      cursor: pointer;
      font-size: 0.875rem;
      transition: all 0.2s ease;
    `;
    closeButton.onmouseover = () => {
      closeButton.style.backgroundColor = '#f6f8fa';
    };
    closeButton.onmouseout = () => {
      closeButton.style.backgroundColor = '#fff';
    };
    closeButton.onclick = () => {
      document.body.removeChild(popup);
      document.body.removeChild(overlay);
    };
    
    // Add buttons to container
    buttonsContainer.appendChild(copyButton);
    buttonsContainer.appendChild(downloadButton);
    buttonsContainer.appendChild(closeButton);
    
    // Add content and buttons to popup
    popup.appendChild(content);
    popup.appendChild(buttonsContainer);
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      z-index: 999;
      backdrop-filter: blur(2px);
    `;
    
    // Add popup and overlay to body
    document.body.appendChild(overlay);
    document.body.appendChild(popup);
    
    // Close popup when clicking overlay
    overlay.onclick = () => {
      document.body.removeChild(popup);
      document.body.removeChild(overlay);
    };
    
  } catch (error) {
    console.error('Error fetching citation:', error);
  }
} 