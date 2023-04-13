export default function render(type) {
  const content = document.createElement('div');
  content.classList.add('footerLinkContent');

  function aboutRender() { content.innerHTML = '<h1 class="title">Our Story</h1><div class="paragraphCollection"><div class="piece"><h2 class="subtitle">Introduction:</h2><p class="descriptionPara">At Gazelle Diner, we are passionate about creating an authentic African dining experience for our customers. Our team of dedicated chefs and staff work tirelessly to provide our customers with delicious, high-quality food and exceptional service in a warm and welcoming atmosphere.</p></div><div class="piece"><h2 class="subtitle">Our History:</h2><p class="descriptionPara">Founded in 2010 by Chef Ahmed, Gazelle Diner started as a small food stall that served traditional African dishes at local fairs and festivals. As word spread about the quality of our food, we quickly gained a loyal following and decided to open our first restaurant in the heart of the city.</p></div><div class="piece"><h2 class="subtitle">Our Vision:</h2><p class="descriptionPara">Our vision is to be the go-to destination for anyone looking to experience the rich flavors and culture of Africa. We are committed to using the freshest ingredients, authentic spices, and traditional cooking techniques to bring the vibrant tastes of the savannah to your table.</p></div><div class="piece"><h2 class="subtitle">Our Values:</h2><p class="descriptionPara">At Gazelle Diner, we value authenticity, quality, and community. We believe in using fresh, locally sourced ingredients and providing exceptional service to our customers. We also strive to give back to the community by supporting local charities and organizations.</p></div></div>'; }
  function privacyRender() { content.innerHTML = '<h1 class="title">Privacy Policy & Terms of Use</h1><div class="paragraphCollection"><div class="piece"><h2 class="subtitle">Introduction:</h2><p class="descriptionPara">At Gazelle Diner, we take your privacy and security very seriously. This page outlines our policies regarding the collection, use, and disclosure of personal information on our website, as well as our terms of use for the site.</p></div><div class="piece"><h2 class="subtitle">Privacy Policy:</h2><p class="descriptionPara">Our privacy policy outlines how we collect, use, and protect your personal information when you visit our website. We do not sell, trade, or rent your personal information to third parties. We use industry-standard security measures to protect your information from unauthorized access, disclosure, or destruction.</p></div><div class="piece"><h2 class="subtitle">Terms of Use:</h2><p class="descriptionPara">Our terms of use outline the rules and regulations for using our website. By accessing and using our website, you agree to abide by these terms. These include restrictions on the use of our website for illegal or unauthorized purposes, limitations on liability, and disclaimers of warranties.</p></div></div>'; }
  function tcRender() { content.innerHTML = '<h1 class="title">Terms and Conditions</h1><div class="paragraphCollection"><div class="piece"><h2 class="subtitle">Introduction:</h2><p class="descriptionPara">At Gazelle Diner, we are committed to providing our customers with the best possible dining experience. This page outlines the terms and conditions that govern the use of our restaurant services.</p></div><div class="piece"><h2 class="subtitle">Reservation Policy:</h2><p class="descriptionPara">We require reservations for parties of 6 or more, and recommend making reservations in advance to ensure availability. If you need to cancel or modify your reservation, please do so at least 24 hours in advance.</p></div><div class="piece"><h2 class="subtitle">Payment Policy:</h2><p class="descriptionPara">We accept all major credit cards, as well as cash. Payment is due at the time of service.</p></div><div class="piece"><h2 class="subtitle">Dress Code:</h2><p class="descriptionPara">We encourage our guests to dress comfortably, but we do request that all guests refrain from wearing overly casual attire such as athletic wear, shorts, or flip-flops.</p></div><div class="piece"><h2 class="subtitle">Smoking Policy:</h2><p class="descriptionPara">Gazelle Diner is a non-smoking establishment. Smoking is prohibited on our premises, including on our outdoor patio.</p></div></div>'; }

  switch (type) {
    case 'about':
      aboutRender();
      break;
    case 'privacy':
      privacyRender();
      break;
    case 't&c':
      tcRender();
      break;
    default:
      break;
  }

  return content;
}
