import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import ChatHome from './Pages/Chats/ChatHome';
import ChatPage from './Pages/Chats/ChatPage';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />

        <Route path='/chat-home' element={<ChatHome/>}>
        <Route index element={<ChatPage />}></Route>
        </Route>
      </Routes>

      {/* 
      <Route path='/dashboard' element={<ProtectedPath><DashBoard /></ProtectedPath>}>
          <Route index element={<MyOrders />}></Route>
          <Route path='add-review' element={<AddReview />}></Route>
          <Route path='my-profile' element={<MyProfile />}></Route>
          <Route path='add-product' element={<AddProduct />}></Route>
          <Route path='make-admin' element={<AdminPath><MakeAdmin /></AdminPath>}></Route>
          <Route path='manage-all-orders' element={<ManageAllOrders />}></Route>
          <Route path='manage-products' element={<ManageProducts />}></Route>

        </Route>
      */}
    </div>
  );
}

export default App;
