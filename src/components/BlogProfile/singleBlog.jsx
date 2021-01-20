import { Component } from "react";
import url from "../ApiCall";
import Blog from "./Blog.jsx";
import BlogStyles from "./singleBlog.module.css";
import ErrorPage from "../ErrorPage/404Error";

//class component to display blogById
export default class singleBlog extends Component {
	state = {
		blog: [],
		status: "",
		blogId: "",
	};
	componentDidMount = (event) => {
		fetch(url + this.props.match.params.id)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				if (data.data)
					this.setState({
						blog: data.data[0],
						status: "Successful",
						blogId: this.props.match.params.id,
					});
				else {
					this.setState({ status: "Successful" });
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
	//fetch blog by id
	blogById = (id) => {
		fetch(url + id)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.setState({
					blog: data.data[0],
					status: "Successful",
					blogId: id,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
	render() {
		return (
			<div className={BlogStyles.container}>
				{this.state.status === "" ? (
					<h1> </h1>
				) : this.state.status === "Successful" &&
				  this.state.blog.length !== 0 ? (
					<Blog
						blog={this.state.blog}
						status={this.state.status}
						blogById={this.blogById}
						{...this.props}
					/>
				) : (
					<ErrorPage />
				)}
			</div>
		);
	}
}
