import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchItem, selectCategory } from "../../../Features/FilterItem/Fitlter";

const Filter = () => {
      const { select, search } = useSelector(state => state.filter)
      const [category, setCategory] = useState(select)
      const dispatch = useDispatch()
      const [searchValue, setSearchValue] = useState(search)

      const handleSubmit = (e) => {
            e.preventDefault()
            dispatch(searchItem(searchValue))
            setSearchValue("")
      }

      useEffect(() => {
            dispatch(selectCategory(category))
      }, [dispatch, category])
      return (
            <div className="flex justify-between text-center my-10">
                  <form onSubmit={handleSubmit} className="w-full">
                        <input onChange={(e) => setSearchValue(e.target.value)}
                              type="text"
                              placeholder="Search by Product Name"
                              className="input input-bordered w-full max-w-xs"
                        />
                  </form>
                  <div className="w-full">
                        <select value={category} onChange={(e) => setCategory(e.target.value)} className="select select-bordered w-full max-w-xs">
                              <option value="">All Item</option>
                              <option value="Converse">Converse</option>
                              <option value="Sneaker">Sneaker</option>
                              <option value="Boot">Martin Boot</option>
                        </select>
                  </div>
            </div>

      );
};

export default Filter;