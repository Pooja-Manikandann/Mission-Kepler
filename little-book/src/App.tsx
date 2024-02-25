import React, { useEffect, useState } from "react";
import "./App.css";
import { SideBar } from "./containers/sidebar/SideBar";
import BlogsContainer from "./containers/BlogsContainer/BlogsContainer";
import BlogDescription from "./containers/BlogDescription/BlogDescription";
import { useDispatch, useSelector } from 'react-redux'
import { blogType, filterType } from "./modals/modals";
import CustomModal from "./components/CustomModal/CustomModal";
import Loader from "./components/Loader/Loader";
import { getBlogs } from "./services/blogsServices";
import { loaderAction } from "./store/loaderSlice";
import ConfirmationModal from "./components/ConfirmationModal/ConfirmationModal";
import { filterHelper } from "./utils/filters.utils";
import Overlay from "./components/Overlay/Overlay";

function App() {
  const [selectedBlog, setSelectedBlog] = useState<blogType>({title: '', details: '', type: '', photo:''});
  const [selectedBlogIndex, setSelectedBlogIndex] = useState(0);
  const [filters, setFilters] = useState<Array<string> | []>([]);
  const [blogs, setBlogs] = useState<Array<blogType>| any>([]);
  const [isEditView, setIsEditView] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [filtersData, setFiltersData] = useState<Array<filterType> | []>([]);

  const isDarkTheme = useSelector((state:any) => state.theme.isDarkTheme);
  const dispatch = useDispatch();


  const {constructFilters } = filterHelper;

  const isLoading = useSelector((state: any) => state.loader.isLoading)
  const updateBlog = (updatedBlog: blogType) => {
    setSelectedBlog(updatedBlog)
    setBlogs([...blogs.slice(0, selectedBlogIndex), updatedBlog, ...blogs.slice(selectedBlogIndex+1)])
  }

  const updateSelectedBlog = (blog: blogType, blogsList: Array<blogType>) => {
    setSelectedBlog(blog)
    const index:number = blogsList.findIndex((currentBlog: blogType) => currentBlog.title === blog.title);
    setSelectedBlogIndex(index>=0 ? index: 0);
  }

  const toggleConfirmationModal = () => {
    setShowConfirmation(!showConfirmation);
    setIsEditView(false);
  }

  const closeModal = () => {
    setShowConfirmation(!showConfirmation);
  }

  useEffect(() => {
    const fetchBlogs = async () => {
        dispatch(loaderAction.toggleLoader(true));
        const data = await getBlogs();
        setBlogs(data);
        setSelectedBlog(data[0])
        dispatch(loaderAction.toggleLoader(false));
        const { filters, filtersData } = constructFilters(data)
        setFiltersData(filtersData)
        setFilters(filters)
    }
    fetchBlogs();
}, [])
  
  return <div className="App">
    <div className="container">
    {isEditView && <Overlay variant={'transparent'} handleOverlayClick={closeModal} zindex={2} showCursor={false}/>}
      <SideBar filters={filters} setFilters={setFilters} filtersData={filtersData} />
      <BlogsContainer blogs={blogs} selectedBlogIndex={selectedBlogIndex} setBlogs={setBlogs} filters={filters} updateSelectedBlog={updateSelectedBlog} setFilters={setFilters} setFiltersData={setFiltersData} />
      <BlogDescription  {...selectedBlog} updateBlog={updateBlog} isEditView={isEditView} setIsEditView={setIsEditView} />
      <CustomModal />
      {showConfirmation && <ConfirmationModal onCloseModal={toggleConfirmationModal} closeModal={closeModal}/>}
      {isLoading && <Loader />}
    </div>
  </div>;
}

export default App;
