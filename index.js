const switchItems = [...document.querySelectorAll('.switch-item')]

const $ul = document.querySelector('.text')

const arrayLi = [
	'Пожар, взрыв, удар молнии, стихийные бедствия, противоправные действия третьих лиц;',
	'Воздействие жидкости, посторонних предметов, электрического тока, повреждение в результате ДТП;',
	'Внешнее механическое воздействие, в том числе случайное падение (этот и предыдущие риски — на первый год действия полиса);',
	'Поломка имущества (условия, аналогичные гарантийным условиям от производителя) (на второй год действия полиса по окончании гарантии от производителя).'
]

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


document.addEventListener('DOMContentLoaded', function() {
	$ul.innerHTML = ''
	for(li of arrayLi) {
		$ul.innerHTML += `<li>${li}</li>`
	}
}, false);