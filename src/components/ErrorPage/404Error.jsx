import { Component } from "react";
import style from "./404Error.module.css";
import image from "../../images/404.gif";

export default class ErorrPage extends Component {
	render() {
		return (
			<div
				style={{
					marginTop: "45px",
					marginLeft: "300px",
					marginBottom: "-45px",
				}}
			>
				<img
					src={image}
					style={{ width: "73%" }}
					className={style["container-image"]}
					alt="404 Page Not Found"
				/>
			</div>
		);
	}
}
