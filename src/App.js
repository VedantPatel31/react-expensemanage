import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import UserRegister from './components/users/UserRegistration';
import UserLogin from './components/users/UserLogin';
// import UserAddExpense from './components/expenseManage/UserAddExpense';
import AddExpenseCategory from './components/expenseManage/AddExpenseCategory';
import AddExpenseSubcategory from './components/expenseManage/AddExpenseSubcategory';
import FetchExpenses from './components/expenseManage/FetchExpenses';
import ProtectedRoutes from './components/hooks/ProtectedRoutes';
import PopupBox from './components/hooks/PopupBox';
import UserAddExpense1 from './components/expenseManage/UserAddExpense1';
// import PieChart1 from './components/hooks/PieChart1';
import PieChart1 from './components/hooks/PieChartDemo1';
import { PieChartS } from './components/hooks/PieChartS';

function App() {
  return (
    <div className="App">
      {<Navbar title="Expense Manage" />}
      {<Routes>
        <Route path='/userRegister' element={<UserRegister />}></Route>
        <Route path='/userLogin' element={<UserLogin />}></Route>
        <Route path='/addExpenseCategory' element={<AddExpenseCategory />}></Route>
        <Route path='/addExpenseSubCategory' element={<AddExpenseSubcategory />}></Route>
        <Route element={<ProtectedRoutes />}>
          {/* <Route path='/userExpense' element={<UserAddExpense />}></Route> */}
          <Route path='/userExpense' element={<UserAddExpense1/>}></Route>
          <Route path='/fetchExpenses' element={<FetchExpenses />}></Route>
        </Route>
        <Route path='/popupBox' element={<PopupBox/>}></Route>
        <Route path='/pieChart' element={<PieChart1/>}></Route>
        <Route path='/pieChart1' element={<PieChartS/>}></Route>

      </Routes>}
    </div>
  );
}

export default App;
