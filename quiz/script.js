
    // Alert messages
    function orderNowAlert() {
      alert("Thank you for choosing Delish Delivery! Your order will be processed shortly.");
    }

    function submitFormAlert(event) {
      event.preventDefault();
      alert("Your message has been sent! We'll get back to you soon.");
    }

    // Objects
    const menuItems = [
      { name: "Pepperoni Pizza", price: "$13.99", category: "Pizza", rating: 4.5 },
      { name: "Cheeseburger", price: "$10.49", category: "Burger", rating: 4.8 },
      { name: "California Roll", price: "$14.99", category: "Sushi", rating: 4.6 },
      { name: "Carbonara Pasta", price: "$15.99", category: "Pasta", rating: 4.7 }
    ];

    console.log("Menu Items:", menuItems);

    // OOP
    class FoodItem {
      constructor(name, price, category, rating = 4.0) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.rating = rating;
      }

      getInfo() {
        return `${this.name} - ${this.price} (${this.category}). Rating: ${this.rating}`;
      }

      applyDiscount(discountPercent) {
        // Simple discount calculation (for demo)
        const discountedPrice = parseFloat(this.price.replace('$', '')) * (1 - discountPercent / 100);
        return `$${discountedPrice.toFixed(2)}`;
      }
    }

    const pizzaItem = new FoodItem("Margherita Pizza", "$12.99", "Pizza", 4.5);
    console.log("Pizza Info:", pizzaItem.getInfo());
    console.log("Pizza with 10% discount:", pizzaItem.applyDiscount(10));

    // Basic jQuery
    $(document).ready(function() {
      // Smooth scrolling for navbar links
      $('.navbar-nav a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 80 // Adjust for navbar height
          }, 800);
        }
      });

      // Toggle class on hover for category cards
      $('.category-card').hover(
        function() {
          $(this).addClass('shadow-lg');
        },
        function() {
          $(this).removeClass('shadow-lg');
        }
      );

      // Toggle visibility of FAQ items (basic toggle)
      $('.accordion-button').on('click', function() {
        const target = $(this).attr('data-bs-target');
        if ($(target).hasClass('show')) {
          $(target).removeClass('show');
        } else {
          // Simple collapse (Bootstrap handles advanced, this is basic)
          $(target).addClass('show');
        }
      });
    });
  