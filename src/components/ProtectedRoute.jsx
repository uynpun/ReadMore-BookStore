// ProtectedRoute.jsx - Tuần 6
// Người làm: A (Trưởng nhóm)
// ✅ Route guard — kiểm tra điều kiện trước khi cho vào trang
// ✅ Nếu không đủ quyền → redirect về trang chủ (hoặc trang login)
// ✅ Dùng Navigate từ react-router-dom để redirect

import { Navigate } from 'react-router-dom';

// Props:
//   isAllowed: boolean — điều kiện cho phép truy cập
//   redirectTo: string — đường dẫn redirect khi không được phép (mặc định "/")
//   children: ReactNode — nội dung trang được bảo vệ
function ProtectedRoute({ isAllowed, redirectTo = '/', children }) {
  // ✅ Nếu không được phép → redirect
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }

  // ✅ Nếu được phép → render children (trang con)
  return children;
}

export default ProtectedRoute;
