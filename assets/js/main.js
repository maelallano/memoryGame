var cards = document.querySelectorAll('.card')
var colors = ['red', 'red', 'green', 'green', 'purple', 'purple', 'pink', 'pink', 'silver', 'silver', 'black', 'black']
var flippedCards = []

var check = 0
var gameOver = 6

for (var i = 0; i < cards.length; i++) {
	cards[i].addEventListener('click', function() {
		if (check < 2) {
			this.classList.add('flipped')
			check++
		} if (check === 2) {
			for (var i = 0; i < cards.length; i++) {
				if (cards[i].classList.value === "card flipped") {
					flippedCards.push(cards[i])
				}
			}
		 if (flippedCards[0].style.background === flippedCards[1].style.background) {
			setTimeout(function() {
				flippedCards[0].style.display = 'none'
				flippedCards[1].style.display = 'none'
				flippedCards[0].classList.value = "card"
				flippedCards[1].classList.value = "card"
				flippedCards = []
				check = 0
				gameOver--
				if (gameOver === 0) {
					window.location.reload()
				}
			}, 1000)
		} else {
			setTimeout(function() {
				flippedCards[0].classList.value = "card"
				flippedCards[1].classList.value = "card"
				flippedCards.pop()
				flippedCards.pop()
				check = 0
			}, 1000)
		}
	}
	})
}

function shuffle(a) {
    var j, x, i
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        x = a[i]
        a[i] = a[j]
        a[j] = x
    }
}
shuffle(colors)

for (var i = 0; i < cards.length; i++) {
	cards[i].style.background = colors[i]
}