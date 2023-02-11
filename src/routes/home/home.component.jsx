import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';
import items from '../../items.json';

function Home() {

  return (
    <div>
      <Outlet />
      <Directory categories={items.categories} />
    </div>
  );
}

export default Home;
