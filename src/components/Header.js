import IconMenu from "./Icon-menu";
import Menu from "./Menu";
import { useState } from "react";

const Header = function () {

	const [active, setActive] = useState(false);

	return <div className="header">
		<IconMenu setActive={setActive} active={active} />
		<Menu active={active} setActive={setActive} />
	</div>
}


export default Header