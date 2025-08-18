import React from 'react';

const IntroduceHome: React.FC = () => {
  return (
    <div className="introduce-page" style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      {/* Breadcrumb */}
      <div className="breadcrumb" style={{ padding: '15px 0' }}>
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm" style={{ color: '#999' }}>
            <a href="/" style={{ color: '#999', textDecoration: 'none' }}>Trang chủ</a>
            <span>›</span>
            <span style={{ color: '#666' }}>Giới thiệu</span>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 style={{ 
            fontSize: '32px', 
            fontWeight: 'normal', 
            color: '#333', 
            marginBottom: '40px',
            textAlign: 'left'
          }}>
            Giới thiệu
          </h1>
          
          <div className="flex flex-col lg:flex-row items-start" style={{ gap: '20px' }}>
            {/* Image section */}
            <div>
              <img 
                src="https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/aboutme-C0JTeQsD.jpg" 
                alt="Giới thiệu về cửa hàng trà" 
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>
            
            {/* Text content */}
            <div className="flex-1">
              <div style={{ 
                fontSize: '14px', 
                lineHeight: '1.7', 
                color: '#666',
                textAlign: 'justify'
              }}>
                <p style={{ marginBottom: '16px' }}>
                  Đã từ lâu trà không chỉ là một thứ đồ uống thông thường mà còn được coi như một nét văn hóa. Trà dùng để uống và thưởng thức các hương vị đặc biệt, trà dùng để làm những món quà biếu tặng đầy ý nghĩa...
                </p>
                
                <p style={{ marginBottom: '16px' }}>
                  Tokyoshop là một trong những cửa hàng đầu tiên chuyên bán và cung cấp các sản phẩm trà nổi tiếng của tỉnh Phúc Kiến - Trung Quốc và các sản phẩm trà Đài Loan. Chúng tôi đã được cấp chứng chỉ xác nhận đại lý của các thương hiệu trà nổi tiếng.
                </p>
                
                <p style={{ marginBottom: '16px' }}>
                  Ngoài các sản phẩm đặc biệt về trà của hãng chúng tôi còn cung cấp các mặt hàng khác như dụng cụ pha trà, hương liệu trà các sản phẩm mà chúng tôi cung cấp đều là các mặt hàng cao cấp và đảm bảo chất lượng.
                </p>
                
                <p style={{ marginBottom: '16px' }}>
                  Với mong muốn đem đến cho mọi người một nét văn hóa đặc trưng của người Á Đông chúng tôi đã tiên hành đưa sản phẩm và thương hiệu lên website tokyoshop nhằm giúp mọi người hiểu biết hơn về các sản phẩm của chúng tôi. Đồng thời chúng tôi sẽ cung cấp thêm những kiến thức về trà, về các sản phẩm trà và các kinh nghiệm, kỹ năng trong lĩnh vực này.
                </p>
                
                <p style={{ 
                  fontSize: '14px', 
                  color: '#666',
                  marginBottom: '0'
                }}>
                  Chúng tôi rất hoan nghênh các bạn ghé thăm cửa hàng để xem các sản phẩm. Các bạn sẽ được đón tiếp và tư vấn một cách tận tình nhất. Thay mặt cửa hàng một lần nữa chúng tôi xin cảm ơn sự quan tâm của quý khách!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroduceHome;
