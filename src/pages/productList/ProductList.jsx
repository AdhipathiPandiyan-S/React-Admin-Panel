import './ProductList.css';
import { Fragment, useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { productRows } from '../../dummyData';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const ProductList = () => {
	const [ data, setData ] = useState(productRows);

	const handleDelete = (id) => {
		setData(
			data.filter((item) => {
				return item.id !== id;
			})
		);
	};

	const columns = [
		{ field: 'id', headerName: 'ID', width: 90 },
		{
			field: 'product',
			headerName: 'Product',
			width: 200,
			renderCell: (params) => {
				return (
					<div className="productListItem">
						<img className="productListImg" src={params.row.img} alt="" /> {params.row.name}
					</div>
				);
			},
		},
		{ field: 'stock', headerName: 'Stock', width: 200 },
		{
			field: 'status',
			headerName: 'Status',
			width: 120,
		},
		{
			field: 'price',
			headerName: 'Price',
			width: 160,
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 150,
			renderCell: (params) => {
				return (
					<Fragment>
						<Link to={'/products/' + params.row.id}>
							<button className="productListEdit">Edit</button>
						</Link>
						<DeleteOutlineIcon className="productListDelete" onClick={() => handleDelete(params.row.id)} />
					</Fragment>
				);
			},
		},
	];
	return (
		<div className="productList">
			<DataGrid
				rows={data}
				columns={columns}
				pageSize={8}
				rowsPerPageOptions={[ 5 ]}
				checkboxSelection
				disableSelectionOnClick
			/>
		</div>
	);
};

export default ProductList;
