import React from 'react';

const Blog: React.FC = () => {
  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: 'Chỉ dẫn hương vị',
      date: '31/12/2016',
      author: 'Đăng bởi Da Xuo',
      image: 'https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/blog3-D4nJ4omb.jpg',
      excerpt: 'Một "từ diển" các tính từ mô tả hương vị sau đây sẽ giúp bạn vượt qua sự...'
    },
    {
      id: 2,
      title: 'Cách pha trà',
      date: '31/12/2016',
      author: 'Đăng bởi tokyoshop-1 tokyoshop-1',
      image: 'https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/blog2-6nDzXyty.jpg',
      excerpt: 'Mọi người thường nghĩ pha trà rất công phu phức tạp, nên cũng hình thành 2 "trường phái",...'
    },
    {
      id: 3,
      title: 'Người việt uống trà hay thưởng trà',
      date: '12/12/2016',
      author: 'Đăng bởi tokyoshop-1 tokyoshop-1',
      image: 'https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/blog1-5WQP7x5V.jpg',
      excerpt: '1, Việt Nam đất nước vùng chèTrong chè thái nguyên ở Việt Nam là một trong những cái...'
    }
  ];

  return (
    <div className="blog-page" style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      {/* Breadcrumb */}
      <div className="breadcrumb" style={{ padding: '15px 0' }}>
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm" style={{ color: '#999' }}>
            <a href="/" style={{ color: '#999', textDecoration: 'none' }}>Trang chủ</a>
            <span>›</span>
            <span style={{ color: '#666' }}>Tin tức</span>
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
            Tin Tức
          </h1>
          
          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="blog-post-card">
                {/* Post image */}
                <div style={{ marginBottom: '15px' }}>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
                
                {/* Post content */}
                <div>
                  <h3 style={{ 
                    fontSize: '18px', 
                    fontWeight: '600', 
                    color: '#333',
                    marginBottom: '8px',
                    lineHeight: '1.4'
                  }}>
                    {post.title}
                  </h3>
                  
                  <div style={{ 
                    fontSize: '12px', 
                    color: '#999',
                    marginBottom: '12px'
                  }}>
                    {post.date}- {post.author}
                  </div>
                  
                  <p style={{ 
                    fontSize: '14px', 
                    lineHeight: '1.6', 
                    color: '#666',
                    textAlign: 'justify',
                    marginBottom: '0'
                  }}>
                    {post.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
