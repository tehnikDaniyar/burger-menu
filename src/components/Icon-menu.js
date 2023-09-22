import { useState } from 'react'
import '../styles/iconMenu.scss'

const IconMenu = function ({ setActive, active }) {


	return <div className={`icon-menu ${active ? '_active' : ''}`} onClick={() => setActive(!active)} >
		<span></span>
	</div>
}
export default IconMenu