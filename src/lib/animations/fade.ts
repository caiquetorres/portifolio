export function fade(node: HTMLElement) {
	node.animate([{ opacity: '0' }, { opacity: '1' }], {
		duration: 150,
		easing: 'ease-in-out'
	});
}
