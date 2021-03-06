import './Product.css';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import PublishIcon from '@mui/icons-material/Publish';

const Product = () => {
	return (
		<div className="product">
			<div className="productTitleContainer">
				<h1 className="productTitle">Product</h1>
				<Link to="/newProduct">
					<button className="productAddButton">Create</button>
				</Link>
			</div>
			<div className="productTop">
				<div className="productTopLeft">
					<Chart data={productData} dataKey="Sales" title="Sales Performance" />
				</div>
				<div className="productTopRight">
					<div className="productInfoTop">
						<img
							src="https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?cs=srgb&dl=pexels-dina-3825517.jpg&fm=jpg"
							alt=""
							className="productInfoImg"
						/>{' '}
						<span className="productName">Apple Airpods</span>
					</div>
					<div className="productInfoBottom">
						<div className="productInfoItem">
							<span className="productInfoKey">id:</span>
							<span className="productInfoValue">123</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">sales:</span>
							<span className="productInfoValue">51232</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">active:</span>
							<span className="productInfoValue">Yes</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">in Stock:</span>
							<span className="productInfoValue">no</span>
						</div>
					</div>
				</div>
			</div>
			<div className="productBottom">
				<form className="productForm">
					<div className="productFormLeft">
						<label htmlFor="">Product Name</label>
						<input type="text" placeholder="Apple Airpods" />
						<label htmlFor="">In Stock</label>
						<select name="inStock" id="inStock">
							<option value="Yes">Yes</option>
							<option value="No">No</option>
						</select>
						<label htmlFor="">Active</label>

						<select name="Active" id="Active">
							<option value="Yes">Yes</option>
							<option value="No">No</option>
						</select>
					</div>
					<div className="productFormRight">
						<div className="productUpload">
							<img
								src="https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?cs=srgb&dl=pexels-dina-3825517.jpg&fm=jpg"
								alt=""
								className="productUploadImg"
							/>
							<label htmlFor="file">
								<PublishIcon className="productUpdateIcon" />
							</label>
						</div>
						<input type="file" id="file" style={{ display: 'none' }} />
						<button className="productButton">Update</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Product;
