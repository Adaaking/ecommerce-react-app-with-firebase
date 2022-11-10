import { useSelector } from "react-redux";
import './loading.scss'
const Loading = () => {
  const loader = useSelector(state => state.loader.IsLoading)
  return (
    loader&&
      <div className="spinner-container">
      <div className="loading-spinner">
      </div>
    </div>
  )
};

export default Loading;
