import { useSelector } from 'react-redux';
import { RootState } from './store/store';


function App() {
  const GlobalState = useSelector((state: RootState) => state.global);
  console.log(GlobalState);

  return (
    <>
      app
    </>
  )
}

export default App