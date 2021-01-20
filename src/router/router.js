import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import Blogs from "../components/BlogComponent/Blogs";
import singleBlog from "../components/BlogProfile/singleBlog";
import ErrorPage from "../components/ErrorPage/404Error";
//components
import Header from "../components/HeaderComponent/Header";
import Footer from "../components/FooterComponent/Footer";

class Router extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Header />
					<Switch>
						<Route path="/react-blog-render" exact component={Blogs} />
						<Route path="/" exact component={Blogs} />
						<Route path="/blogs/:id" exact component={singleBlog} />
						<Route component={ErrorPage} />
					</Switch>
					<Footer />
				</BrowserRouter>
			</div>
		);
	}
}
export default Router;
