import './App.css';
import { Icon } from './Icon';

function App() {
  return (
    <div className='gallery'>
      <Icon iconName="facebook" size={16} />
      <Icon iconName="instagram" size={24} />
      <Icon iconName="twitter" size={32} />
      <Icon iconName="whatsapp" size={40} />
    </div>
  );
}

export default App;
