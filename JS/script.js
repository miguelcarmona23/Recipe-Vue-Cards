const cards = [
    { title: 'Gooey PBJ Brownies', author: 'John Walibur', image: 'https://images.unsplash.com/photo-1560788843-b93c2f18a3e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2001&q=80' },
    { title: 'Crisp Spanish Tortilla Matzo Brei', author: 'Colman Andrews', image: 'https://images.unsplash.com/photo-1584949602321-8ce8e1e72486?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' },
    { title: 'Grilled Shrimp with Lemon and Garlic', author: 'Celeste Mills', image: 'https://www.seriouseats.com/recipes/images/2015/06/20150625-food-lab-grilled-shrimp-15-1500x1125.jpg' }
]

new Vue({
    el: '#app',
    data: {
        cards: cards,
        selectedCard: -1
    },
    methods: {
        hoverCard(selectedIndex) {
            this.selectedCard = selectedIndex
            this.animateCards()
        },
        animateCards() {
            this.cards.forEach((card, index) => {
                const direction = this.calculateCardDirection(index, this.selectedCard)
                TweenMax.to(
                    this.$refs[`card_${index}`],
                    0.3, { x: direction * 50 }
                )
            })
        },
        calculateCardDirection(cardIndex, selectedIndex) {
            if (selectedIndex === -1) {
                return 0
            }

            const diff = cardIndex - selectedIndex
            return diff === 0 ? 0 : diff / Math.abs(diff)
        },
        isSelected(cardIndex) {
            return this.selectedCard === cardIndex
        }
    }
})