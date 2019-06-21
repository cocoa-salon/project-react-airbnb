import { useEffect } from 'react';
// import { withRouter } from 'react-router-dom';

const ScrollToTopOnMount = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0); 
    },[]);

    return null;
}

export default ScrollToTopOnMount;

// const ScrollToTop = ({ children, location: { pathname } }) => {
//     useEffect(() => {
//       window.scrollTo(0, 0);
//     }, [pathname]);
  
//     return children;
//   };

// export default withRouter(ScrollToTop);