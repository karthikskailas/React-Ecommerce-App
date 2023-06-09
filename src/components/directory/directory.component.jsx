import CategoryItem from "../category-items/category-item.component";
import "./directory.style.scss";

const Directory = ({categories}) => {
	return (
		<div className="directory-container">
			{categories.map((arr) => (
				<CategoryItem key={arr.id} category={arr}/>
			))}
		</div>
	);
};

export default Directory;
