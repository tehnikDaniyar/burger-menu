import { useState } from 'react'
import '../styles/iconMenu.scss'

const IconMenu = function () {
	const [active, setActive] = useState(false);


	return <div className={`icon-menu ${active ? '_active' : ''}`} onClick={() => setActive(!active)} >
		<span></span>
	</div>
}
export default IconMenu