const $switchItems = [...document.querySelectorAll('.switch-item')]

const $ul = document.querySelector('.text')

const $input1 = document.getElementById('input1')
const $input2 = document.getElementById('input2')

const prices = [
	{
		amount: 999,
		purchaseProtectionPrice: 399,
		extendedWarrantyPrice: 159,
		comprehensiveProtectionPrice: 549
	},
	{
		amount: 1999,
		purchaseProtectionPrice: 489,
		extendedWarrantyPrice: 199,
		comprehensiveProtectionPrice: 639
	},
	{
		amount: 2999,
		purchaseProtectionPrice: 699,
		extendedWarrantyPrice: 349,
		comprehensiveProtectionPrice: 849
	},
	{
		amount: 3999,
		purchaseProtectionPrice: 899,
		extendedWarrantyPrice: 499,
		comprehensiveProtectionPrice: 1049
	},
	{
		amount: 4999,
		purchaseProtectionPrice: 1069,
		extendedWarrantyPrice: 549,
		comprehensiveProtectionPrice: 1249
	},
	{
		amount: 5999,
		purchaseProtectionPrice: 1249,
		extendedWarrantyPrice: 749,
		comprehensiveProtectionPrice: 1399
	},
	{
		amount: 6999,
		purchaseProtectionPrice: 1599,
		extendedWarrantyPrice: 1039,
		comprehensiveProtectionPrice: 1719
	},
	{
		amount: 7999,
		purchaseProtectionPrice: 1599,
		extendedWarrantyPrice: 1139,
		comprehensiveProtectionPrice: 1839
	},
	{
		amount: 8999,
		purchaseProtectionPrice: 1719,
		extendedWarrantyPrice: 1379,
		comprehensiveProtectionPrice: 1949
	},
	{
		amount: 11999,
		purchaseProtectionPrice: 1949,
		extendedWarrantyPrice: 1549,
		comprehensiveProtectionPrice: 2409
	},
	{
		amount: 13999,
		purchaseProtectionPrice: 2289,
		extendedWarrantyPrice: 1719,
		comprehensiveProtectionPrice: 2749
	},
	{
		amount: 16999,
		purchaseProtectionPrice: 2519,
		extendedWarrantyPrice: 1949,
		comprehensiveProtectionPrice: 2979
	},
	{
		amount: 19999,
		purchaseProtectionPrice: 2749,
		extendedWarrantyPrice: 2289,
		comprehensiveProtectionPrice: 3209
	},
	{
		amount: 21999,
		purchaseProtectionPrice: 3329,
		extendedWarrantyPrice: 2519,
		comprehensiveProtectionPrice: 3669
	},
	{
		amount: 23999,
		purchaseProtectionPrice: 3329,
		extendedWarrantyPrice: 2749,
		comprehensiveProtectionPrice: 3789
	},
	{
		amount: 24999,
		purchaseProtectionPrice: 3429,
		extendedWarrantyPrice: 2749,
		comprehensiveProtectionPrice: 3889
	},
	{
		amount: 29999,
		purchaseProtectionPrice: 3669,
		extendedWarrantyPrice: 2979,
		comprehensiveProtectionPrice: 4239
	},
	{
		amount: 34999,
		purchaseProtectionPrice: 3789,
		extendedWarrantyPrice: 2979,
		comprehensiveProtectionPrice: 4929
	},
	{
		amount: 39999,
		purchaseProtectionPrice: 3789,
		extendedWarrantyPrice: 3089,
		comprehensiveProtectionPrice: 5039
	},
	{
		amount: 44999,
		purchaseProtectionPrice: 4129,
		extendedWarrantyPrice: 3429,
		comprehensiveProtectionPrice: 5379
	},
	{
		amount: 49999,
		purchaseProtectionPrice: 4579,
		extendedWarrantyPrice: 3889,
		comprehensiveProtectionPrice: 6079
	},
	{
		amount: 54999,
		purchaseProtectionPrice: 4929,
		extendedWarrantyPrice: 4129,
		comprehensiveProtectionPrice: 6759
	},
	{
		amount: 59999,
		purchaseProtectionPrice: 5269,
		extendedWarrantyPrice: 4579,
		comprehensiveProtectionPrice: 7449
	},
	{
		amount: 64999,
		purchaseProtectionPrice: 5619,
		extendedWarrantyPrice: 4809,
		comprehensiveProtectionPrice: 8009
	},
	{
		amount: 69999,
		purchaseProtectionPrice: 6179,
		extendedWarrantyPrice: 4809,
		comprehensiveProtectionPrice: 8929
	},
	{
		amount: 74999,
		purchaseProtectionPrice: 6529,
		extendedWarrantyPrice: 5269,
		comprehensiveProtectionPrice: 9619
	},
	{
		amount: 79999,
		purchaseProtectionPrice: 6869,
		extendedWarrantyPrice: 5719,
		comprehensiveProtectionPrice: 10079
	},
	{
		amount: 89999,
		purchaseProtectionPrice: 7669,
		extendedWarrantyPrice: 6299,
		comprehensiveProtectionPrice: 10999
	},
	{
		amount: 109999,
		purchaseProtectionPrice: 9279,
		extendedWarrantyPrice: 6869,
		comprehensiveProtectionPrice: 13169
	},
	{
		amount: 129999,
		purchaseProtectionPrice: 10199,
		extendedWarrantyPrice: 7329,
		comprehensiveProtectionPrice: 14999
	}
]

const arraysLi = [
	[
		'Пожар, взрыв, удар молнии, стихийные бедствия, противоправные действия третьих лиц;',
		'Воздействие жидкости, посторонних предметов, электрического тока, повреждение в результате ДТП;',
  	'Внешнее механическое воздействие, в том числе случайное падение.'
	],
	[
		'Воздействие электрического тока (на первый год действия полиса);',
		'Поломка имущества (условия, аналогичные гарантийным условиям от производителя) (на второй год действия полиса по окончании гарантии от производителя).'
	],
	[
		'Пожар, взрыв, удар молнии, стихийные бедствия, противоправные действия третьих лиц;',
		'Воздействие жидкости, посторонних предметов, электрического тока, повреждение в результате ДТП;',
		'Внешнее механическое воздействие, в том числе случайное падение (этот и предыдущие риски – на первый год действия полиса);',
		'Поломка имущества (условия, аналогичные гарантийным условиям от производителя) (на второй год действия полиса по окончании гарантии от производителя).'
	]
]

let activeSwitchItemNum = 0
let activeSwitchItemName = document.querySelector('.switch-item.active').getAttribute('name')

let maxAmount = Math.max(...prices.map(el => el.amount));

const renderText = () => {

	$ul.innerHTML = ''
	for(li of arraysLi[activeSwitchItemNum]) {
		$ul.innerHTML += `<li>${li}</li>`
	}
}

const renderInput = () => {
	const currentPrice = prices.filter((element,idx) => element.amount > +$input1.value-1)[0] || prices.find(el => el.amount === maxAmount)

	$input2.value = currentPrice[activeSwitchItemName]
}

const $switchItemsHandler = event => {
	$switchItems.forEach(el => {
		el.classList.remove('active')
	})
	event.target.classList.add('active')

	activeSwitchItemNum = $switchItems.findIndex(item => item === event.target)
	activeSwitchItemName = event.target.getAttribute('name')

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