import { Component } from "react";
import styles from "./Blogs.module.css";

//class component to display all blogs card
class BlogPost extends Component {
	render() {
		let post = this.props.blog;
		return (
			<>
				<img
					src={post.imageUrl}
					alt="Blog"
					className={styles["blog-image"]}
				/>
				<h3 className={styles["blog-header"]}>{post.author}</h3>
			</>
		);
	}
}
export default BlogPost;
