const switchItems = [...document.querySelectorAll('.switch-item')]

let activeSwitchItemNum = 0

const switchItemsHandler = event => {
	switchItems.forEach(el => {
		el.classList.remove('active')
	})
	event.target.classList.add('active')
	activeSwitchItemNum = switchItems.findIndex(item => item === event.target)
}

switchItems.forEach(function(node) {
	node.addEventListener('click', switchItemsHandler)
})