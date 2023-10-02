import { useState } from "react";
import { useAddProductMutation } from "../../../Features/Product/ProductApi";
import toast from "react-hot-toast";

const ProductForm = () => {
      const [name, setName] = useState("")
      const [category, setCategory] = useState("")
      const [image, setImage] = useState("")
      const [price, setPrice] = useState("")
      const [quantity, setQuantity] = useState("")

      const [addProduct, { isLoading }] = useAddProductMutation()

      const reset = () => {
            setName("")
            setCategory("")
            setImage("")
            setPrice("")
            setQuantity("")
      }

      const handleSubmit = async (e) => {
            e.preventDefault()
            const data = {
                  name,
                  category,
                  image,
                  quantity: parseInt(quantity),
                  price: parseFloat(price)
            }
            try {
                  const response = await addProduct(data);
                  if (response.data?.insertedId) {
                        toast.success("Product Added Successfully")
                  }
                  reset()
            }
            catch (error) {
                  toast.error("There is an Error")
            }
      }


      return (
            <div className="formContainer">
                  <h4 className="formTitle">Add New Product</h4>
                  <form onSubmit={handleSubmit} className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
                        <div className="space-y-2">
                              <label htmlFor="lws-inputName">Product Name</label>
                              <input name="name" value={name} onChange={e => setName(e.target.value)} className="addProductInput" id="lws-inputName" type="text" required />
                        </div>

                        <div className="space-y-2">
                              <label htmlFor="lws-inputCategory">Category</label>
                              {/* <input name="category" value={category}  id="lws-inputCategory" type="text" required /> */}
                              <select  onChange={e => setCategory(e.target.value)} className="select select-bordered w-full max-w-xs addProductInput">
                                    <option disabled>Category</option>
                                    <option value="Sneaker">Sneaker</option>
                                    <option value="Converse">Converse</option>
                                    <option value="Boot">Martin Boot</option>
                              </select>
                        </div>

                        <div className="space-y-2">
                              <label htmlFor="lws-inputImage">Image Url</label>
                              <input name="image" value={image} onChange={e => setImage(e.target.value)} className="addProductInput" id="lws-inputImage" type="text" required />
                        </div>

                        <div className="grid grid-cols-2 gap-8 pb-4">

                              <div className="space-y-2">
                                    <label htmlFor="ws-inputPrice">Price</label>
                                    <input name="price" value={price} onChange={e => setPrice(e.target.value)} className="addProductInput" type="number" id="lws-inputPrice" required />
                              </div>

                              <div className="space-y-2">
                                    <label htmlFor="lws-inputQuantity">Quantity</label>
                                    <input name="quantity" value={quantity} onChange={e => setQuantity(e.target.value)} className="addProductInput" type="number" id="lws-inputQuantity" required />
                              </div>
                        </div>

                        <button disabled={isLoading} type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
                  </form>
            </div>

      );
};

export default ProductForm;
