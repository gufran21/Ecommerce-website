import React from 'react'
import { Footer, Navbar } from "../components";
import ReactMarkdown from 'react-markdown';
const AboutPage = () => {
  const aboutUsContent = `
Welcome to Ecommerce Website!

At Ecommerce Website, we believe shopping should be a delightful experience. Our mission is to bring you a diverse selection of high-quality products at competitive prices, all while providing exceptional customer service and a seamless online shopping experience.

#### Our Story

Founded in 2000, Ecommerce Website began with a simple goal: to create an online marketplace where customers can find everything they need in one place. Over the years, we have grown and evolved, but our core values remain the same. We are passionate about offering a curated selection of products that meet the highest standards of quality and value.

#### What We Offer

We offer a wide range of products across various categories, including:

- **Electronics**: From the latest gadgets to essential accessories.
- **Fashion**: Trendy apparel, footwear, and accessories for all ages.
- **Home & Living**: Everything you need to make your house a home.
- **Beauty & Health**: Top-notch products to help you look and feel your best.
- **Gifts & Specialty Items**: Unique and thoughtful gifts for every occasion.

#### Our Commitment to You

At Ecommerce Website, customer satisfaction is our top priority. We are committed to providing:

- **Quality Assurance**: We carefully select and vet our products to ensure they meet our high standards.
- **Affordable Prices**: We strive to offer the best prices on the market without compromising on quality.
- **Easy Shopping**: Our user-friendly website and mobile app make it easy to find what you need quickly and efficiently.
- **Secure Transactions**: Your privacy and security are paramount. We use advanced security measures to protect your information.
- **Exceptional Customer Service**: Our dedicated support team is here to assist you with any questions or concerns.

#### Why Choose Us?

- **Wide Selection**: Our extensive product range means you'll find everything you need in one place.
- **Trusted Brands**: We partner with reputable brands to bring you the best products available.
- **Fast Shipping**: We understand the importance of quick delivery, and we work hard to get your orders to you as fast as possible.
- **Satisfaction Guarantee**: We stand behind our products and are committed to making sure you are completely satisfied with your purchase.

#### Our Vision

We aspire to be your go-to online shopping destination. Our goal is to continually improve our offerings and services, staying ahead of trends and leveraging the latest technology to enhance your shopping experience. We are dedicated to building a community of satisfied customers who can shop with confidence and ease.

Thank you for choosing Ecommerce Website. We look forward to serving you and making your online shopping experience a pleasure.

Happy Shopping!

The Ecommerce Website Team
`;
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead">
        <ReactMarkdown>{aboutUsContent}</ReactMarkdown>
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage