import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TodoPage } from './pages';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/TodoMindbox/" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
