// Create sparks animation
function createSparks() {
    const sparksContainer = document.getElementById('sparks');
    if (!sparksContainer) return;
    
    const sparksCount = 80;
    
    for (let i = 0; i < sparksCount; i++) {
        const spark = document.createElement('div');
        spark.classList.add('spark');
        
        // Random position and animation delay
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 2 + Math.random() * 3;
        const size = 2 + Math.random() * 4;
        
        spark.style.left = `${left}%`;
        spark.style.animationDelay = `${delay}s`;
        spark.style.animationDuration = `${duration}s`;
        spark.style.width = `${size}px`;
        spark.style.height = `${size}px`;
        
        sparksContainer.appendChild(spark);
    }
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Add hover sound to buttons
document.addEventListener('DOMContentLoaded', function() {
    // Initialize sparks
    createSparks();
    
    // Add hover sound to buttons
    document.querySelectorAll('.btn-welding, .btn-whatsapp, .product-inquiry').forEach(button => {
        button.addEventListener('mouseenter', function() {
            document.getElementById('hoverSound').play();
        });
    });
    
    // Add click sound to buttons
    document.querySelectorAll('.btn-welding, .btn-whatsapp, .product-inquiry').forEach(button => {
        button.addEventListener('click', function() {
            document.getElementById('clickSound').play();
        });
    });
    
    // Add steel sound to CNC elements
    document.querySelectorAll('.cnc-cut').forEach(element => {
        element.addEventListener('mouseenter', function() {
            document.getElementById('steelSound').play();
        });
    });
    
    // Add hover sound to product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            document.getElementById('hoverSound').play();
        });
    });
    
    // Add welding sound on spark animation
    setInterval(() => {
        document.getElementById('sparkSound').play();
    }, 3000);
});