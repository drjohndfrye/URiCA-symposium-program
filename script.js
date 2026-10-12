function switchTab(tabId) {
  // Hide all sections
  const sections = document.querySelectorAll('.tab-content');
  sections.forEach(section => section.classList.remove('active'));

  // Remove active styling from all buttons
  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach(button => button.classList.remove('active'));

  // Show target section
  document.getElementById(tabId).classList.add('active');

  // Activate target button
  const activeButton = Array.from(buttons).find(
    btn => btn.getAttribute('onclick') === `switchTab('${tabId}')`
  );
  if (activeButton) {
    activeButton.classList.add('active');
  }

  // Scroll to top of content
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
