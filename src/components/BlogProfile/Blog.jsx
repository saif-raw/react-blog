import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./singleBlog.module.css";

class Blog extends Component {
	render() {
		let blogdetail = this.props.blog;
		return (
			<main className={styles["blog-main"]}>
				<aside className={styles["aside-link"]}>
					<h2 className={styles["aside-h2"]}>Related Links</h2>
					<div className={styles["related-links-div"]}>
						{blogdetail.links.map((link, i) => {
							return (
								<div key={`${link.id} ${i}`}>
									<Link
										to={`/blogs/${link.id}`}
										onClick={() => this.props.blogById(link.id)}
										className={styles["related-link-list"]}
									>
										<p>{link.title}</p>
									</Link>
								</div>
							);
						})}
					</div>
				</aside>

				<section className={styles["blog-section"]}>
					<h1 className={styles["blog-title"]}>{blogdetail.title}</h1>
					<div className={styles["blog-image"]}>
						<img src={blogdetail.imageUrl} alt={blogdetail.author} />
					</div>
					<h1 className={styles["blog-author"]}>{blogdetail.author}</h1>
					<p className={styles["blog-content"]}>{blogdetail.content}</p>
				</section>
			</main>
		);
	}
}
export default Blog;
