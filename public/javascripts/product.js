// Get modal elements
const modal = document.getElementById('product-details-modal');
const closeButton = document.querySelector('.close-button');

// Open modal on product click
document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('click', () => {
        modal.style.display = 'block';
        // Populate modal with product details
        const productName = product.querySelector('.product-info h2').textContent;
        const productDescription = product.querySelector('.product-info p').textContent;
        const productPrice = product.querySelector('.price').textContent;
        const productImageSrc = product.querySelector('img').src;

        document.querySelector('.modal-product-name').textContent = productName;
        document.querySelector('.modal-product-description').textContent = productDescription;
        document.querySelector('.modal-product-price').textContent = productPrice;
        document.querySelector('.modal-image').src = productImageSrc;
    });
});

// Close modal on close button click
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal if user clicks outside the modal content
window.addEventListener('click', event => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});