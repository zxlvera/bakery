import React, { useContext, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import Link from 'next/link';
import { ProductsContext } from '../context';
import refreshProducts from '../lib/refreshProducts';
import Button from '../components/Button';

const Basic = () => {
  const [addItemStatus, setAddItemStatus] = useState(false);
  const appContext = useContext(ProductsContext);
  const {
    products, subCategories,
  } = appContext;

  const deleteItem = async (e, values) => {
    e.preventDefault();
    await axios.delete('http://localhost:3001/', { data: { id: values } }).then((res) => {
      refreshProducts(appContext);
      setAddItemStatus(true);
    });
  };

  const updateItem = async (e, values) => {
    e.preventDefault();
    await axios.put('http://localhost:3001/', { id: values }).then((res) => {
      refreshProducts(appContext);
      setAddItemStatus(true);
    });
  };

  return (
    <div>
      <h1>Add New Items!</h1>
      <Formik
        initialValues={{ name: '', type: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
          // console.log(values);
            setSubmitting(true);

            const hello = async (values) => {
              await axios.post('http://localhost:3001/', values).then((res) => {
                refreshProducts(appContext);
                setAddItemStatus(true);
              });
            };
            hello(values);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="type" value="croissants" />
                Croissants
              </label>
              <label>
                <Field type="radio" name="type" value="cupcakes" />
                Cupcakes
              </label>
              <label>
                <Field type="radio" name="type" value="cookies" />
                Cookies
              </label>
            </div>
            {errors.type && touched.type && errors.type}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      { addItemStatus
          && (
            <div>
              <h1>uploaded succesfully!</h1>
              <Link href="/shop" passHref>
                <div>
                  <Button text="Go Back" />
                </div>
              </Link>
            </div>
          )}
      <table className="table-auto">
        <thead>
          <tr>
            <th>Action</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr>
              <td>
                <button onClick={(e) => updateItem(e, p.id)}>✏️</button>
                <button onClick={(e) => deleteItem(e, p.id)}>❌</button>
              </td>
              <td>{p.name}</td>
              <td>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Basic;
