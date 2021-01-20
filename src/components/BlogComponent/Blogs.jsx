import { Component } from "react";
import { Link } from "react-router-dom";
import url from "../ApiCall";
import BlogPost from "./BlogPost";
import styles from "./Blogs.module.css";

//page displaying all blog cards
class AllBlogs extends Component {
	state = {
		blogs: [],
		status: "",
	};
	componentDidMount = (event) => {
		fetch(url, {
			method: "GET",
			mode: "cors",
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.setState({ blogs: data.data, status: "Successful" });
			})
			.catch((err) => {
				console.log(err);
			});
	};
	render() {
		return (
			<>
				<div className={styles["blog-post"]}>
					{this.state.blogs.map((blog) => {
						return (
							<div
								id={blog.id}
								key={blog.id}
								className={styles["blog-container"]}
							>
								<Link
									className={styles["blog-link"]}
									to={`/blogs/${blog.id}`}
								>
									<BlogPost blog={blog} />
								</Link>
							</div>
						);
					})}
				</div>
			</>
		);
	}
}
export default AllBlogs;
