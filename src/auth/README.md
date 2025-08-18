# Hệ thống Đăng nhập - TokyoShop

## Các file đã tạo:

### 1. Components
- `src/components/Login.tsx` - Component form đăng nhập
- `src/components/Login.css` - Styles cho form đăng nhập

### 2. Pages
- `src/pages/LoginPage.tsx` - Trang đăng nhập

### 3. Context
- `src/context/AuthContext.tsx` - Context quản lý authentication

### 4. Utils
- `src/auth/index.ts` - Export tất cả auth-related components

## Cách sử dụng:

### 1. Wrap App với AuthProvider:
```tsx
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      {/* Your app components */}
    </AuthProvider>
  );
}
```

### 2. Sử dụng trong component:
```tsx
import { useAuth } from './context/AuthContext';

function SomeComponent() {
  const { user, isAuthenticated, logout } = useAuth();
  
  if (isAuthenticated) {
    return <div>Xin chào {user?.email}</div>;
  }
  
  return <div>Chưa đăng nhập</div>;
}
```

### 3. Thêm route trong Router:
```tsx
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

// Thêm vào Routes
<Route path="/login" element={<LoginPage />} />
```

## Tính năng:

✅ Form đăng nhập với email và password
✅ Hiển thị/ẩn mật khẩu
✅ Validation cơ bản
✅ Loading state khi đăng nhập
✅ Context để quản lý trạng thái đăng nhập
✅ Lưu trữ thông tin trong localStorage
✅ Responsive design
✅ Chuyển hướng sau khi đăng nhập thành công

## Tùy chỉnh:

### Thay đổi API endpoint:
Sửa function `login` trong `AuthContext.tsx` để gọi API thực tế của bạn.

### Thay đổi giao diện:
Sửa file `Login.css` để thay đổi styles.

### Thêm validation:
Thêm validation logic trong component `Login.tsx`.

## Lưu ý:

- Hiện tại đang sử dụng demo data, bạn cần thay thế bằng API thực tế
- Token được lưu trong localStorage (có thể thay đổi thành httpOnly cookies để bảo mật hơn)
- Chưa có tính năng "Quên mật khẩu" (có thể thêm sau)
- Chưa có trang đăng ký (có thể tạo tương tự)
