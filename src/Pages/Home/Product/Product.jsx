import { Toaster } from "react-hot-toast";
import { useGetPaginateQuery, useGetProductsQuery } from "../../../Features/Product/ProductApi";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";
import { PuffLoader } from "react-spinners";
import Filter from "./Filter";
import { useSelector } from "react-redux";
import { useState } from "react";
const Product = () => {
      const { select, search } = useSelector(state => state.filter);
      const [page, setPage] = useState(1)
      let limit=3
      const { data: products, isLoading, isError } = useGetProductsQuery({ select, search });
      const { data: paginateProducts } = useGetPaginateQuery({page,limit})
      const override = {
            display: 'block',
            margin: '0 auto',
            borderColor: 'red',
      };
      const handlePage = (selectPage) => {
            setPage(selectPage)
      }
      let pages
      if (search === "" && select === "") {
            pages = [...Array(paginateProducts?.totalPage).keys()]
      }
      else {
            pages = [...Array(Math.ceil(products?.length / limit)).keys()]
      }
      let content = null
      if (isLoading) content = <PuffLoader cssOverride={override} color="#36d7b7" />
      if (!isLoading && isError) content = <h3 className="error">There is an Error</h3>

      if (!isLoading && !isError && products?.length === 0) content = <h3 className="error">There is No Product</h3>
      if (!isLoading && !isError && products?.length > 0) content =
            search === "" && select === "" ? paginateProducts?.data?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                  : products?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
      return (
            <main className="py-16">
                  <Filter></Filter>
                  <div className="productWrapper mb-10">
                        <Toaster></Toaster>
                        <div className="productContainer" id="lws-productContainer">
                              {content}
                        </div>

                        <div>
                              <ProductForm></ProductForm>
                        </div>
                        <div className="join justify-center">
                              {
                                    pages?.map((page, index) => <button onClick={() => handlePage(page + 1)} key={index} className="join-item btn">{page + 1}</button>)
                              }
                        </div>

                  </div>


            </main>
      );
};

export default Product;