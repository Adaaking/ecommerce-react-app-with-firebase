
import { ScaleLoader } from 'react-spinners'
import "./loading.scss";
const Loading = () => {
  return <div className="loading">
     <ScaleLoader
      size={200}
      color={"green"}
     />
  </div>;
};

export default Loading;
