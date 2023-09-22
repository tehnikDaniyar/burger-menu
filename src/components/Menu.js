const Menu = function ({ active, setActive }) {

	return <div className={`menu ${active ? '_active' : ''}`} onClick={() => setActive(false)}>
		<ul onClick={(e) => e.stopPropagation()}>
			<li key={1}>1</li>
			<li key={2}>2</li>
			<li key={3}>3</li>
			<li key={4}>4</li>
			<li key={5}>5</li>
		</ul>
	</div>
}
export default Menu