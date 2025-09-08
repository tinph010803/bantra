import React from "react";
import { useParams, Link } from "react-router-dom";

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Sample blog data - in real app this would come from API
  const blogData: { [key: string]: any } = {
    "1": {
      title: "Chỉ dẫn hương vị",
      date: "31/12/2016",
      author: "Đăng bởi Da Xuo",
      image:
        "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/blog3-D4nJ4omb.jpg",
      tags: ["Hương vị trà"],
      content: {
        intro:
          'Một "từ diển" các tính từ mô tả hương vị sau đây sẽ giúp bạn vượt qua sự chúng chúng và nắm bắt tốt nhất các hương vị cụ thể từng loại trà, làm phong phú thêm thế giới trà của bạn.',
        sections: [
          {
            text: "Nên nhớ rằng không có mùi vị độc lập hay biến giới nghiêm ngặt nào giữa các từ này, mùi vị luôn tồn tại phức hợp và đôi khi các từ mô tả không lặp lên được.",
          },
          {
            text: "Khi nếm thử, chúng ta đánh giá 3 khía cạnh của trà: mùi hương, vị và dịch trà.",
          },
          {
            title: "Mùi hương :",
            text: "Là các phần chất của trà được cảm nhận bằng mũi. Bạn có thể thưởng thức hương trà ở cả nước trà và sợi trà vừa pha trong ấm. Tôi thường thích thưởng thức mùi hương trong ấm trà khi vừa rót ra hết.",
            additional:
              "Để khám phá sự phong phú diệu kỳ của các hương vị, hãy nhờ bạn phải biết cách pha trà.",
          },
        ],
      },
    },
    "2": {
      title: "Cách pha trà",
      date: "31/12/2016",
      author: "Đăng bởi tokyoshop-1 tokyoshop-1",
      image:
        "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/blog2-6nDzXyty.jpg",
      tags: ["Cách pha trà"],
      content: {
        intro:
          'Mọi người thường nghĩ pha trà rất công phu phức tạp, nên cũng hình thành 2 "trường phái", một là hối hột vì không thích tìm hiểu, hai là sa đà vào những phương thức huyền hoặc không thực tế. Tôi sẽ chỉ cho bạn 3 điểm đơn giản để có một chén chả ngon. Ai cũng biết các bước pha trà cơ bản, là trà khô được hấm bằng nước sôi trong ấm và rót ra chén thưởng thức. Pha trà không phức tạp đến mức bạn phải là một chuyên gia nhưng cũng không phải đơn giản chỉ là ngâm trà trong ấm.',
        sections: [
          {
            title: "3 Yếu tố quan trọng nhất trong pha trà",
            text: "Bí quyết để pha trà ngon nằm trong 3 yếu tố: Nhiệt độ nước, Lượng trà và thời gian hầm.",
            subsections: [
              {
                title: "Nhiệt độ nước",
                text: 'Tất nhiên pha trà phải dùng nước nóng, nhưng nóng bao nhiêu thì mỗi loại trà lại thích hợp với một nhiệt độ khác nhau. Nước vừa sôi chỉ phù hợp với trà đen hoặc trà ô long già, nó cần nhiệt độ cao để phá vỡ các kết cấu và phát tán hương vị. Nhưng phải dùng nước nguội hơn cho các loại trà có hương vị tinh tế, như trà xanh, trà ô long. Nước quá nóng sẽ làm trà bị "cháy", làm cho trà bị đắng chát và mất đi các hương vị tinh tế, nhưng nước quá nguội cũng sẽ làm hương vị trà yếu đi rất nhiều vì các hợp chất trong trà không được hòa tan.',
              },
              {
                title: "Lượng trà",
                text: "Lượng trà quá nhiều sẽ làm trà quá đặng (và tốn kém ^__^), nhưng quá ít trà thì hương vị sẽ rất yếu không đủ thưởng thức. Tuy vào từng loại trà sẽ có định lượng khác nhau. Một tỉ lệ mà các bạn có thể bắt đầu thử là 8g trà cho một ấm 300ml, sau đó bạn có thể gia giảm lượng trà cho phù hợp với khẩu vị của mình.",
              },
              {
                title: "Thời gian hầm",
                text: 'Kỹ nhất trong pha trà là "ngắm" trà, nhưng lời này hầu hết mọi người đều mắc phải, nó sẽ làm trà quá đắng chát và có mùi nặu. Giống như mùi nước, mỗi loại trà sẽ phù hợp với một thời gian hầm nhất định. Trà đen, trà ô long có thể ngâm lâu hơn nhưng trà xanh thì nhanh hơn nhiều. Nhìn chung thời gian hầm trà được tính bằng giây chứ không phải bằng phút.',
              },
            ],
          },
          {
            title: "Các bước pha trà",
            text: "Đây là cách pha trà 7 bước được Trà Việt khuyến khích, các bạn cần có: trà, ấm chén và chuyện trà để bắt đầu",
            steps: [
              "Dun nước: Một lần nữa chắc chắn rằng nước bạn có là nước dòng chai đã được lọc, không phải nước khoáng hay nước máy. Hầu hết các loại trà đều pha trà dưới nhiệt độ sôi, trong khoảng 75°C – 98°C tùy loại.",
              "Làm nóng ấm chén: Khi ấm dun nước gần đạt độ sôi, bạn rót nước vào ấm, đậy nắp lại. Khi ấm trà nóng lên, bạn rót hết nước ra chuyển trà và các ly.",
              "Dong trà: Cho trà vào ấm, lượng trà ít nhiều tùy từng loại, thông thường là 1/5 đến 1/2 ấm trà.",
              'Đánh thức trà: rót nước nóng ngập trà và đổ đi càng nhanh càng tốt.. Đây không phải là nước để uống, nó có tác dụng "đánh thức" để các lá trà bắt đầu nở ra. Nước nóng đánh thức trà không phải là nước sôi.',
              "Hầm trà: Đổ nước nóng vào đầy ấm, đậy nắp ấm và hầm trà trong khoảng 10-40 giây tùy loại trà. Đây là công đoạn quan trọng nhất, hãy đảm bảo nhiệt độ nước và thời gian hầm phù hợp với loại trà.",
            ],
          },
        ],
      },
    },
    "3": {
      title: "Người việt uống trà hay thưởng trà",
      date: "12/12/2016",
      author: "Đăng bởi tokyoshop-1 tokyoshop-1",
      image:
        "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/blog1-5WQP7x5V.jpg",
      tags: ["Trà Việt"],
      content: {
        intro:
          "1, Việt Nam đất nước vùng chèTrong chè thái nguyên ở Việt Nam là một trong những cái nổi trà liệu lớn nhất thế giới, với những vùng nhiên liệu đại ghi tên ấn tượng trong bản đồ trà nhân loại như rừng trà Shan tuyết mọc trên chớt vót vùng núi đá tai mèo ở Phin Hồ, Hà Giang, đồi trà Tà Sùa, Thượng Sơn ở Bắc Yên, Sơn La hay những đồi chè xanh mướt ở đất Tân Cương – Thái Nguyên, Thanh Sơn – Phú Thọ, Quốc Oai – Hà Tây, Bảo Lộc – Lâm Đồng.... Tuy nhiên, xét về góc độ tìm hiểu về các thủ liệu lịch sử hay có tích tình hoa trong nước, thì lượng chữ viết về trà nghe chúng và cùng khiêm tốn nếu đem so với các công trình trà thư của Trung Hoa hay Nhật Bản. Trong bài viết này, chúng tôi chỉ xin bàn về một góc cạnh nhỏ trong văn hóa trà Việt, đó là vấn đề thường trà trong văn hóa ứng xử dân gian...",
        sections: [
          {
            title: "2. Chè đi từ lúy tre con sông",
            text: 'Việt Nam là một quốc gia có tỷ lệ người nông thôn khá lớn, trong lịch sử đã từng chiếm đến 90% tỉ lệ dân số. Số đi người việt dung cụm từ "người nông thôn" mà không dung cụm từ "nông dân" bởi lẽ trong nông thôn Việt Nam, giai cấp nông dân không tuyệt đối hóa tỷ lệ choán, mà còn xen kẻ các tầng lớp khác cùng cư. Những bát nước chè tươi trong dân gian thì lại phân nhiều gần đến tâm thức uống trà của người lao động chân làm tay bụn. Có khi nói nước chè đặt ở giữa sân, bà con lỗi xóm tum năm tum bẩy dưới tráng uống nước chè tán gẫu, có khi nói nước chè xanh theo người lên rẫy, ra đồng. Khi sáng sớm, lúc ban trưa, khi đêm tráng sáng... Nỗi nước chè tươi gần liền với đời sống người lao động. Nhiều người Việt uống nước chè thay cho các loại nước còn lại khác cần thiết cho sức khỏe con người, không đơn giản chỉ là thời quen, mà còn là nhiều vấn đề khác liên quan đến động tiến bất gao.',
          },
          {
            title: "3. Chè thái nguyên đi vào cả phố phường",
            text: 'Chén trà nơi quan cốc hệ phố tuy không mang tài đẳng cấp của nghệ thuật pha chè và thưởng thức, nhưng nó đáp ứng nhu cầu có thật của tầng lớp bình dân thành thị. Nó đã từng đi vào tho ca và nỗi nhớ của bao người khi xa quê và là một trong những hình ảnh "hoài cổ" gắn với những nét văn hóa bình dân tương đồng khác. Chính loại hình này làm người ta nhắc nhiều hơn về trà Việt, nhớ tình phố biến và tình tạo trung của nó khi mà cài chuyện về trà Việt Nam trong con mắt quốc tế vẫn là một cái gì đó nghiêng về trà liệu là nhiều. Bởi lẽ, trà thư (sách viết về trà) của Việt Nam gần như không có. Hệ thống lý luận cũng như văn liệu về trà chỉ xuất hiện ít ỏi trong các tác phẩm văn chương, mà phần hư cấu chiếm tỷ lệ khá cao so với thực tế đời sống văn hóa ẩm trà của người Việt từ xưa đến nay. Cho nên, khi nghiên cứu về mặt lịch sử của nghệ thuật thưởng trà của người Việt, các học giả thường phải dẫn nhập từ các kinh điển lý luận của Trung Hoa hay Nhật Bản. Đó là điều khiến cho nhiều người quan tâm về trà, về văn hóa trà Việt trăn trở cho một nền tảng lý thuyết, không xây dựng được cái này thì khó mà đem cái giá trị của văn hóa trà Việt ra với bạn bè quốc tế.',
          },
        ],
      },
    },
  };

  const blog = blogData[id || "1"];

  if (!blog) {
    return <div>Bài viết không tồn tại</div>;
  }

  // Related articles for sidebar
  const relatedArticles = [
    { id: "1", title: "Chỉ dẫn hương vị" },
    { id: "2", title: "Cách pha trà" },
    { id: "3", title: "Người việt uống trà hay thưởng trà" },
  ].filter((article) => article.id !== id);

  return (
    <div className="blog-detail-page">
      {/* Breadcrumb */}
      <div className="breadcrumb" style={{ padding: "15px 0" }}>
        <div className="container mx-auto px-4">
          <nav
            className="flex items-center space-x-2 text-sm"
            style={{ color: "#999" }}
          >
            <Link to="/" style={{ color: "#999", textDecoration: "none" }}>
              Trang chủ
            </Link>
            <span>›</span>
            <Link to="/blog" style={{ color: "#999", textDecoration: "none" }}>
              Blog
            </Link>
            <span>›</span>
            <span style={{ color: "#666" }}>{blog.title}</span>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main article content */}
          <div className="lg:w-2/3">
            <article>
              <h1
                style={{
                  fontSize: "28px",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "20px",
                  lineHeight: "1.3",
                }}
              >
                {blog.title}
              </h1>

              {/* Article meta */}
              <div
                style={{
                  fontSize: "14px",
                  color: "#999",
                  marginBottom: "30px",
                  paddingBottom: "15px",
                  borderBottom: "1px solid #eee",
                }}
              >
                {blog.date} - {blog.author}
              </div>

              {/* Article content */}
              <div className="article-content">
                {/* Intro paragraph */}
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.8",
                    color: "#444",
                    marginBottom: "25px",
                    textAlign: "justify",
                  }}
                >
                  {blog.content.intro}
                </p>

                {/* Article sections */}
                {blog.content.sections.map((section: any, index: number) => (
                  <div key={index} style={{ marginBottom: "30px" }}>
                    {section.title && (
                      <h3
                        style={{
                          fontSize: "20px",
                          fontWeight: "600",
                          color: "#333",
                          marginBottom: "15px",
                        }}
                      >
                        {section.title}
                      </h3>
                    )}

                    <p
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.8",
                        color: "#444",
                        marginBottom: "15px",
                        textAlign: "justify",
                      }}
                    >
                      {section.text}
                    </p>

                    {section.additional && (
                      <p
                        style={{
                          fontSize: "16px",
                          lineHeight: "1.8",
                          color: "#444",
                          marginBottom: "15px",
                          textAlign: "justify",
                        }}
                      >
                        {section.additional}
                      </p>
                    )}

                    {/* Subsections */}
                    {section.subsections &&
                      section.subsections.map(
                        (subsection: any, subIndex: number) => (
                          <div
                            key={subIndex}
                            style={{ marginBottom: "20px", marginLeft: "20px" }}
                          >
                            <h4
                              style={{
                                fontSize: "18px",
                                fontWeight: "600",
                                color: "#333",
                                marginBottom: "10px",
                              }}
                            >
                              {subsection.title}
                            </h4>
                            <p
                              style={{
                                fontSize: "16px",
                                lineHeight: "1.8",
                                color: "#444",
                                marginBottom: "10px",
                                textAlign: "justify",
                              }}
                            >
                              {subsection.text}
                            </p>
                          </div>
                        )
                      )}

                    {/* Steps */}
                    {section.steps && (
                      <div style={{ marginLeft: "20px" }}>
                        {section.steps.map(
                          (step: string, stepIndex: number) => (
                            <div
                              key={stepIndex}
                              style={{ marginBottom: "15px" }}
                            >
                              <p
                                style={{
                                  fontSize: "16px",
                                  lineHeight: "1.8",
                                  color: "#444",
                                  textAlign: "justify",
                                }}
                              >
                                <strong>{step.split(":")[0]}:</strong>{" "}
                                {step.split(":").slice(1).join(":")}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div
                style={{
                  marginTop: "40px",
                  paddingTop: "20px",
                  borderTop: "1px solid #eee",
                }}
              >
                <span
                  style={{ fontSize: "16px", color: "#666", fontWeight: "600" }}
                >
                  Tags:{" "}
                </span>
                {blog.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    style={{
                      fontSize: "14px",
                      color: "#666",
                      marginRight: "10px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Comment form */}
              <div style={{ marginTop: "50px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#333",
                    marginBottom: "20px",
                  }}
                >
                  Để lại bình luận
                </h3>

                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        style={{
                          fontSize: "14px",
                          color: "#666",
                          marginBottom: "5px",
                          display: "block",
                        }}
                      >
                        Họ và tên *
                      </label>
                      <input
                        type="text"
                        style={{
                          width: "100%",
                          padding: "10px",
                          border: "1px solid #ddd",
                          borderRadius: "4px",
                          fontSize: "14px",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          fontSize: "14px",
                          color: "#666",
                          marginBottom: "5px",
                          display: "block",
                        }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        style={{
                          width: "100%",
                          padding: "10px",
                          border: "1px solid #ddd",
                          borderRadius: "4px",
                          fontSize: "14px",
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <label
                      style={{
                        fontSize: "14px",
                        color: "#666",
                        marginBottom: "5px",
                        display: "block",
                      }}
                    >
                      Bình luận *
                    </label>
                    <textarea
                      rows={5}
                      style={{
                        width: "100%",
                        padding: "10px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "14px",
                        resize: "vertical",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#8B4513",
                      color: "white",
                      padding: "12px 30px",
                      border: "none",
                      borderRadius: "4px",
                      fontSize: "14px",
                      fontWeight: "600",
                      cursor: "pointer",
                      textTransform: "uppercase",
                    }}
                  >
                    ĐĂNG BÌNH LUẬN
                  </button>
                </form>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div style={{ padding: "20px", borderRadius: "8px" }}>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "20px",
                }}
              >
                Bài viết khác
              </h3>

              <ul style={{ listStyle: "none", padding: 0 }}>
                {relatedArticles.map((article) => (
                  <li key={article.id} style={{ marginBottom: "10px" }}>
                    <Link
                      to={`/blog/${article.id}`}
                      style={{
                        color: "#666",
                        textDecoration: "none",
                        fontSize: "14px",
                        display: "block",
                        padding: "8px 0",
                        borderBottom: "1px solid #eee",
                      }}
                    >
                      › {article.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "30px" }}>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#333",
                    marginBottom: "20px",
                  }}
                >
                  Tags
                </h3>

                <div>
                  {["Hương vị trà", "Trà Việt"].map((tag, index) => (
                    <span
                      key={index}
                      style={{
                        display: "inline-block",
                        padding: "6px 12px",
                        backgroundColor: "white",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "12px",
                        color: "#666",
                        marginRight: "8px",
                        marginBottom: "8px",
                        cursor: "pointer",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
