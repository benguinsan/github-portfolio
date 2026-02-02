# Tài liệu về Three.js Components và Models

## Tổng quan

File `Hero.jsx` sử dụng **React Three Fiber** và **@react-three/drei** để tạo một scene 3D với các model được load từ file GLB. Scene này hiển thị 3 đối tượng 3D chính: Zaku II (robot), React Logo, và Stylized Planet.

---

## Cấu trúc Scene 3D

### 1. Canvas Component
```jsx
<Canvas className="w-full h-full">
```
- **Canvas** từ `@react-three/fiber` là container chính cho toàn bộ scene 3D
- Tạo một WebGL context để render các đối tượng 3D
- Chiếm toàn bộ không gian của section Hero

### 2. Suspense và Loading
```jsx
<Suspense fallback={<CanvasLoader/>}>
```
- **Suspense** được sử dụng để xử lý việc load các model 3D (async operation)
- **CanvasLoader** hiển thị progress bar và phần trăm loading khi các model đang được tải

---

## Camera System

### PerspectiveCamera
```jsx
<PerspectiveCamera makeDefault position={[0, 0, 20]}/>
```
- Camera mặc định với vị trí `[0, 0, 20]` (x, y, z)
- `makeDefault` đảm bảo đây là camera chính của scene

### HeroCamera Component
```jsx
<HeroCamera isMobile={isMobile}>
  <Zaku_ii ... />
</HeroCamera>
```

**HeroCamera** là component wrapper tạo hiệu ứng tương tác:

- **useFrame Hook**: Chạy mỗi frame để tạo animation mượt mà
  - `easing.damp3()`: Tạo hiệu ứng zoom in/out mượt cho camera
  - `easing.dampE()`: Tạo hiệu ứng xoay model theo con trỏ chuột (chỉ trên desktop)
  
- **Responsive Behavior**:
  - Trên mobile: Không có hiệu ứng xoay theo chuột
  - Trên desktop: Model xoay nhẹ theo vị trí con trỏ chuột

---

## 3D Models

### 1. Zaku_ii (Robot Model)

**File model**: `public/models/zaku_ii.glb`

**Component**: `src/components/Zaku_ii.jsx`

**Đặc điểm**:
- Model robot từ Gundam series
- Sử dụng `useGLTF` hook để load model GLB
- Có `castShadow` và `receiveShadow` để tạo bóng đổ
- Được wrap trong `HeroCamera` để có hiệu ứng tương tác

**Props được truyền từ Hero.jsx**:
```jsx
<Zaku_ii
  scale={sizes.zakuScale}      // 3.0 (small) | 3.3 (mobile) | 4.0 (desktop)
  position={sizes.zakuPosition} // [2, -9, 8] (mobile) | [5, -9, 8] (desktop)
  rotation={[0, 2.5, 0]}        // Xoay 2.5 radian quanh trục Y
/>
```

**Cấu trúc**:
- `nodes.Object_2`: Mesh chính của model
- `materials.m_14`: Material/texture của model
- Rotation `[-Math.PI / 2, 0, 0]`: Xoay model để đúng hướng

---

### 2. ReactLogo

**File model**: `public/models/react.glb`

**Component**: `src/components/ReactLogo.jsx`

**Đặc điểm**:
- Logo React dạng 3D
- Sử dụng **Float** component từ `@react-three/drei` để tạo hiệu ứng nổi lên/xuống
- `floatIntensity={1}`: Độ mạnh của hiệu ứng float

**Props**:
```jsx
<ReactLogo 
  position={sizes.reactLogoPosition}  // Vị trí responsive
/>
```

**Vị trí responsive**:
- Small (≤440px): `[3, 4, 0]`
- Mobile (≤768px): `[5, 6, 0]`
- Tablet (768-1024px): `[5, 4, 0]`
- Desktop (>1024px): `[-7, 4, 0]`

**Cấu trúc**:
- `nodes['React-Logo_Material002_0']`: Geometry của logo
- `materials['Material.002']`: Material của logo
- Scale mặc định: `0.3`
- Rotation: `[0, 0, -Math.PI / 2]` để xoay logo đúng hướng

---

### 3. Stylized_Planet

**File model**: `public/models/stylized_planet.glb`

**Component**: `src/components/Stylized_Planet.jsx`

**Đặc điểm**:
- Hành tinh có style hóa học với mây và bề mặt
- Sử dụng **Float** với `floatIntensity={2}` (mạnh hơn ReactLogo)
- Có animation được load từ file GLB (mặc dù không được sử dụng trong code hiện tại)

**Props**:
```jsx
<Stylized_Planet
  scale={sizes.stylized_planetScale}      // 3 (small/mobile) | 6 (desktop)
  position={sizes.stylized_planetPosition} // Vị trí responsive
/>
```

**Vị trí responsive**:
- Mobile: `[-5, 0, 0]`
- Tablet: `[-5, 0, 0]`
- Desktop: `[-9.2, -4, 0]`

**Cấu trúc**:
- **Clouds_1**: Nhóm chứa mesh mây (`Object_4` với material `Clouds`)
- **Planet_2**: Nhóm chứa mesh hành tinh (`Object_6` với material `Planet`)
- Cả hai đều có `castShadow` và `receiveShadow`

---

## Lighting System

```jsx
<ambientLight intensity={1}/>
<directionalLight position={[10, 10, 10]} intensity={0.5}/>
```

### Ambient Light
- Ánh sáng tổng thể cho toàn scene
- `intensity={1}`: Độ sáng mạnh, đảm bảo các model đủ sáng

### Directional Light
- Ánh sáng có hướng (giống mặt trời)
- `position={[10, 10, 10]}`: Vị trí nguồn sáng
- `intensity={0.5}`: Độ sáng vừa phải, tạo độ tương phản và bóng đổ

---

## Responsive Sizing System

Hàm `calculateSizes()` trong `src/constants/index.js` tính toán kích thước và vị trí dựa trên breakpoints:

### Breakpoints
- **isSmall**: `maxWidth: 440px`
- **isMobile**: `maxWidth: 768px`
- **isTablet**: `minWidth: 768px, maxWidth: 1024px`
- **Desktop**: `> 1024px`

### Kích thước Model

**Zaku_ii Scale**:
- Small: `3.0`
- Mobile: `3.3`
- Desktop: `4.0`

**Stylized_Planet Scale**:
- Small/Mobile: `3`
- Desktop: `6`

### Vị trí Model

**Zaku Position**:
- Mobile: `[2, -9, 8]`
- Desktop: `[5, -9, 8]`

**ReactLogo Position**: Thay đổi theo 4 breakpoints (xem phần ReactLogo ở trên)

**Stylized_Planet Position**: Thay đổi theo 3 breakpoints (xem phần Stylized_Planet ở trên)

---

## CanvasLoader Component

**Component**: `src/components/CanvasLoader.jsx`

**Chức năng**:
- Hiển thị progress bar khi các model 3D đang được load
- Sử dụng `useProgress()` hook từ `@react-three/drei` để lấy tiến độ loading
- Sử dụng `Html` component để render HTML trong môi trường 3D

**Hiển thị**:
- Progress bar (CSS class `canvas-loader`)
- Phần trăm loading: `{progress.toFixed(2)}%`
- Text "Loading..." khi progress = 0

---

## Preloading Models

Tất cả các model đều được preload để tăng hiệu suất:

```jsx
useGLTF.preload('models/zaku_ii.glb')
useGLTF.preload('models/react.glb')
useGLTF.preload('models/stylized_planet.glb')
```

Preloading giúp:
- Load model sớm hơn khi cần
- Giảm thời gian chờ khi vào scene
- Cải thiện trải nghiệm người dùng

---

## Các Hook và Utilities được sử dụng

### Từ @react-three/fiber:
- **Canvas**: Container cho scene 3D
- **useFrame**: Hook để chạy code mỗi frame (cho animation)

### Từ @react-three/drei:
- **useGLTF**: Hook để load file GLB/GLTF
- **PerspectiveCamera**: Component camera
- **Float**: Component tạo hiệu ứng nổi
- **Html**: Component để render HTML trong 3D space
- **useProgress**: Hook để lấy tiến độ loading
- **useAnimations**: Hook để xử lý animation (được load trong Stylized_Planet nhưng chưa sử dụng)

### Từ maath:
- **easing.damp3**: Hàm tạo animation mượt cho position (vector 3D)
- **easing.dampE**: Hàm tạo animation mượt cho rotation (Euler angles)

---

## Luồng hoạt động

1. **Khởi tạo**: Canvas được mount, Suspense bắt đầu load models
2. **Loading**: CanvasLoader hiển thị progress bar
3. **Models loaded**: Các model được render vào scene
4. **Animation**: 
   - HeroCamera bắt đầu animate camera và rotation theo chuột
   - Float components tạo hiệu ứng nổi cho ReactLogo và Stylized_Planet
5. **Interaction**: Trên desktop, model Zaku_ii xoay theo con trỏ chuột

---

## Lưu ý

- File GLB phải được đặt trong thư mục `public/models/`
- Các model được load async, nên cần Suspense để xử lý
- Responsive sizing quan trọng để đảm bảo UI tốt trên mọi thiết bị
- Leva controls đã được comment, có thể uncomment để debug và chỉnh sửa position/rotation/scale trên UI
