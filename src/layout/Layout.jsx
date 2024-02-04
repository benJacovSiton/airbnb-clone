import Navbar from "./Navbar";
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="mainContainer">
      <Navbar />
      <div className="contentContainer">
        <Sidebar />
        <div className="mainContent">{children}</div> 
      </div>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
}

/*
  
 The {children} prop in React is a special prop that allows you to pass components or
 elements as children to a parent component. It's a way to compose components and 
 create more flexible and reusable code.


  Here, {children} refers to any components, elements, or content that you pass between the
  opening and closing tags of the Layout component. For example,
  when you use the Layout component like this:



 The <Residences /> component will be the children of the Layout component. 
 In the Layout component, {children} is a placeholder that will be replaced by 
 whatever content you provide when you use the Layout component.

This makes the Layout component more versatile because it can wrap different content, 
and the structure around the content (such as the Navbar, Sidebar, and Footer) remains 
consistent.

In summary, {children} is a dynamic way to include content within a component, 
making the component more flexible and reusable.
*/