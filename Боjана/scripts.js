
    function toggleResponsive() {
      var navigation = document.getElementById("myNavigation");
      if (navigation.classList.contains("responsive")) {
        navigation.classList.remove("responsive");
      } else {
        navigation.classList.add("responsive");
      }
    }
 // Получаваме всички елементи на акордеона
var accordionItems = document.querySelectorAll('.accordion-item');

// Добавяме събитие на клик за всеки заглавен елемент
accordionItems.forEach(function(item) {
  var header = item.querySelector('.accordion-header');
  
  header.addEventListener('click', function() {
    // Премахваме класа 'active' от всички елементи на акордеона
    accordionItems.forEach(function(item) {
      item.classList.remove('active');
    });
    
    // Добавяме класа 'active' само на текущия елемент
    item.classList.add('active');
  });
});
