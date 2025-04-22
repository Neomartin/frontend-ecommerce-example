import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './AdminProduct.css';
import '../Admin/Admin.css';
import { faEdit, faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { set, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '../../components/Pagination/Pagination';
import { FILES_URL, URL } from '../../config/env.config';
import Swal from 'sweetalert2';

export default function AdminProduct() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  // const [currentPage, setCurrentPage] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm();

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    if(editProduct) {
      setValue('name', editProduct.name);
      setValue('price', editProduct.price);
      setValue('stock', editProduct.stock);
      setValue('category', editProduct.category);
      setValue('description', editProduct.description);
      setValue('favorite', !!editProduct.favorite)
    } else {
      reset();
    }
  }, [editProduct]);


  const loadProducts = async () => {
    try {
      const { data } = await axios.get(`${URL}/products`);
      // setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async(data) => {
    try {

      const formData = new FormData();

      formData.append('name', data.name);
      formData.append('price', data.price);
      formData.append('stock', data.stock);
      formData.append('category', data.category);
      formData.append('description', data.description);

      if(data.image?.length) {
        formData.append('image', data.image[0])
      }
      

      if(editProduct) {
        
        const response = await axios.put(`${URL}/products/${editProduct._id}`, formData);

        setProducts((prev) => prev.map((prod) => prod._id === editProduct._id ? response.data : prod));

        setEditProduct(null);
      } else {
        const response = await axios.post(`${URL}/products`, formData);

       
      }

      

      reset();


    } catch (error) {
      console.log(error);
      alert('Error uploading product');
    }
  };

  const deleteProduct = async (id) => {
    try {
      console.log(id);
      const response = await axios.delete(`${URL}/products/${id}`);
      console.log(response.data);
      setProducts((prev) => prev.filter((prod) => prod._id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <SectionTitle
        title="Admin"
        mixed="Products"
        subtitle="Manage your products"
      />
      <div className="admin-container">
        <div className="admin-form-section">
          <form
            action=""
            className="admin-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="form-title">
              <span>Add</span> Product
            </h2>
            <div className="input-group">
              <label htmlFor="">Product name</label>
              <input
                type="text"
                {...register('name', {
                  required: { value: true, message: 'This field is required' },
                  maxLength: { value: 20, message: 'Max length is 20' },
                  minLength: { value: 3, message: 'Min length is 3' },
                })}
              />
              {errors.name && (
                <span className="input-error">{errors.name?.message}</span>
              )}
            </div>

            <div className="input-row">
              <div className="input-group">
                <label htmlFor="">Price</label>
                <input
                  type="number"
                  {...register('price', {
                    required: {
                      value: true,
                      message: 'This field is required',
                    },
                    max: { value: 20000000, message: 'Max price is 20000000' },
                    min: { value: 1, message: 'Min price is 1' },
                  })}
                />
                {errors.price && (
                  <span className="input-error">{errors.price?.message}</span>
                )}
              </div>
              <div className="input-group input-stock">
                <label htmlFor="">Stock</label>
                <input
                  type="number"
                  {...register('stock', {
                    required: {
                      value: true,
                      message: 'This field is required',
                    },
                    max: { value: 100000, message: 'Max price is 100000' },
                    min: { value: 1, message: 'Min price is 1' },
                  })}
                />
                {errors.price && (
                  <span className="input-error">{errors.price?.message}</span>
                )}
              </div>
              <div className="input-group input-row-span-2">
                <label htmlFor="">Category</label>
                <select
                  {...register('category', {
                    required: {
                      value: true,
                      message: 'This field is required',
                    },
                  })}
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="1">Category 1</option>
                  <option value="2">Category 2</option>
                  <option value="3">Category 3</option>
                </select>
                {errors.category && (
                  <span className="input-error">
                    {errors.category?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="">Description</label>
              <textarea
                rows={5}
                {...register('description', {
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                  maxLength: { value: 500, message: 'Max length is 500' },
                  minLength: { value: 5, message: 'Min length is 5' },
                })}
              ></textarea>
              {errors.description && (
                <span className="input-error">
                  {errors.description.message}
                </span>
              )}
            </div>



            <div className="input-group">
              <label htmlFor="">Product name</label>
              <input
                type="file"
                accept="image/*"
                {...register('image', {
                  // required: { value: true, message: 'This field is required' },
                  validate: (files) => {
                    // 
                    if(setEditProduct?.images?.length) return true;

                    if (files.length < 1) return 'Min 1 file';
                    // for (const file of files) {
                    //   if (file.size > 5000000) return 'Max size is 5MB';
                    // }
                  },
                })}
              />
              {errors.image && (
                <span className="input-error">{errors.image.message}</span>
              )}
            </div>



            

            <div className="input-group input-group--inline">
              <input type="checkbox" {...register('favorite')}  />
              <label htmlFor="">Favorite</label>
            </div>
            <button
              type="submit"
              // disabled={!isValid}
              className="button button--md"
            >
              {editProduct ? 'Editar' : 'Cargar'}
            </button>
          </form>
        </div>
        <div className="admin__elements">
          {/* <h2>Product List</h2> */}
          <div className="admin__filters">FILTROS</div>
          <div className="admin__table-wrapper">
            <table className="admin__table">
              <thead>
                <tr>
                  <th className="image__head-cell">Image</th>
                  <th className="name__head-cell">Product</th>
                  <th className="description__head-cell">Product</th>
                  <th className="price__head-cell">Price</th>
                  <th className="stock__head-cell">Stock</th>
                  <th className="date__head-cell">Fecha</th>
                  <th className="actions__head-cell">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((prod) => (
                  <tr key={prod.id || prod._id}>
                    <td className="image__cell">
                      <img
                        src={`${FILES_URL}/products/${prod.images[0]}`}
                        alt={prod.name}
                        loading="lazy"
                        className="admin__product-image"
                      />
                    </td>
                    <td className="name__cell">{prod.name}</td>
                    <td className="description__cell">{prod.description}</td>
                    <td className="price__cell">${prod.price}</td>
                    <td className="stock__cell">{prod.stock || 0}</td>
                    <td className="date__cell">{prod.createdAt}</td>
                    <td className="actions__cell">
                      <div className="actions__wrapper">
                        <button
                          className="actions__button"
                          title="Edit product"
                          onClick={() => setEditProduct(prod)}
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button
                          className="actions__button actions__button--secondary"
                          title="Favorite product"
                        >
                          <FontAwesomeIcon icon={faStar} />
                        </button>
                        <button
                          className="actions__button actions__button--danger"
                          title="Delete product"
                          onClick={() => deleteProduct(prod._id)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}
