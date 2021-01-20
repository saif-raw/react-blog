import React, { Component } from "react";
import style from "./Footer.module.css";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Footer extends Component {
	render() {
		return (
			<>
				<div className={style["footer-container"]}>
					<div className={style["social-icons"]}>
						<Link to="/#">
							<FaInstagram className={style["instagram"]} />
						</Link>
						<Link to="/#">
							<FaGithub className={style["github"]} />
						</Link>
						<Link to="/#">
							<FaTwitter className={style["twitter"]} />
						</Link>
						<Link to="/#">
							<FaLinkedin className={style["linkedin"]} />
						</Link>
					</div>

					<div className={style["legal"]}>
						<p className={style["no-wrap"]}>
							Raw Engineering
						</p>
						<p className={style["no-wrap"]}>
							<Link to="/#">We make lives better</Link>
							<span> · </span>
							<Link to="/#">Serving you with the best softwares and applications</Link>
						</p>
					</div>
				</div>
			</>

		);
	}
}
