const $switchItems = [...document.querySelectorAll('.switch-item')]

const $ul = document.querySelector('.text')

const $input1 = document.getElementById('input1')
const $input2 = document.getElementById('input2')

const prices = [
	{
		amount: 999,
		price: 549
	},
	{
		amount: 1999,
		price: 639
	},
	{
		amount: 2999,
		price: 849
	},
	{
		amount: 3999,
		price: 1049
	},
	{
		amount: 4999,
		price: 1249
	},
	{
		amount: 5999,
		price: 1399
	},
	{
		amount: 6999,
		price: 1719
	},
	{
		amount: 7999,
		price: 1839
	},
	{
		amount: 8999,
		price: 1949
	},
	{
		amount: 11999,
		price: 2409
	},
	{
		amount: 13999,
		price: 2749
	},
	{
		amount: 16999,
		price: 2979
	},
	{
		amount: 19999,
		price: 3209
	},
	{
		amount: 21999,
		price: 3669
	},
	{
		amount: 23999,
		price: 3789
	},
	{
		amount: 24999,
		price: 3889
	},
	{
		amount: 29999,
		price: 4239
	},
	{
		amount: 34999,
		price: 5039
	},
	{
		amount: 44999,
		price: 5379
	},
	{
		amount: 49999,
		price: 6079
	},
	{
		amount: 54999,
		price: 6759
	},
	{
		amount: 59999,
		price: 7449
	},
	{
		amount: 64999,
		price: 8009
	},
	{
		amount: 69999,
		price: 8929
	},
	{
		amount: 74999,
		price: 9619
	},
	{
		amount: 79999,
		price: 10079
	},
	{
		amount: 89999,
		price: 10999
	},
	{
		amount: 109999,
		price: 13169
	},
	{
		amount: 129999,
		price: 14999
	}
]

const arraysLi = [
	[
	'Пожар, взрыв, удар молнии, стихийные бедствия, противоправные действия третьих лиц;',
	'Воздействие жидкости, посторонних предметов, электрического тока, повреждение в результате ДТП;',
	'Внешнее механическое воздействие, в том числе случайное падение (этот и предыдущие риски — на первый год действия полиса);',
	'Поломка имущества (условия, аналогичные гарантийным условиям от производителя) (на второй год действия полиса по окончании гарантии от производителя).'
	],
	[
	'1;',
	'Воздействие жидкости, посторонних предметов, электрического тока, повреждение в результате ДТП;',
	'Внешнее механическое воздействие, в том числе случайное падение (этот и предыдущие риски — на первый год действия полиса);',
	'Поломка имущества (условия, аналогичные гарантийным условиям от производителя) (на второй год действия полиса по окончании гарантии от производителя).'
	],
	[
	'2;',
	'Воздействие жидкости, посторонних предметов, электрического тока, повреждение в результате ДТП;',
	'Внешнее механическое воздействие, в том числе случайное падение (этот и предыдущие риски — на первый год действия полиса);',
	'Поломка имущества (условия, аналогичные гарантийным условиям от производителя) (на второй год действия полиса по окончании гарантии от производителя).'
	]
]

let activeSwitchItemNum = 0

let maxAmount = Math.max(...prices.map(el => el.amount));

const renderText = () => {

	$ul.innerHTML = ''
	for(li of arraysLi[activeSwitchItemNum]) {
		$ul.innerHTML += `<li>${li}</li>`
	}
}

const renderInput = () => {
	const currentPrice = prices.filter((element,idx) => element.amount > +$input1.value)[0] || prices.find(el => el.amount === maxAmount)

	$input2.value = currentPrice.price
}

const $switchItemsHandler = event => {
	$switchItems.forEach(el => {
		el.classList.remove('active')
	})
	event.target.classList.add('active')
	activeSwitchItemNum = $switchItems.findIndex(item => item === event.target)

	maxAmount = Math.max(...prices.map(el => el.amount));

	renderText()
	renderInput()
}

$switchItems.forEach(function(node) {
	node.addEventListener('click', $switchItemsHandler)
})


document.addEventListener('DOMContentLoaded', function() {
	renderText()
	renderInput()
}, false);

$input1.addEventListener('input', () => {
	if ($input1.value < 0) {
		$input1.value = 1
	} else if ($input1.value > maxAmount) {
		$input1.value = maxAmount
	}
	renderInput()
})