import React, { useContext, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import Link from 'next/link';
import { ProductsContext } from '../context';
import refreshProducts from '../lib/refreshProducts';
import Button from '../components/Button';

const Basic = () => {
  <a href="/api/auth/logout">Logout</a>;
  const [addItemStatus, setAddItemStatus] = useState(false);
  const appContext = useContext(ProductsContext);
  const {
    products, subCategories,
  } = appContext;

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
    </div>
  );
};

export default Basic;
