import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    let title = 'MalosFlix';

    if (location.pathname === '/') {
      title = 'Home - MalosFlix';
    } else if (location.pathname === '/Moviepage') {
      title = 'Movies - MalosFlix';
    } else if (location.pathname === '/Anime') {
      title = 'Anime - MalosFlix';
    } else if (location.pathname === '/TvShow') {
      title = 'TV Shows - MalosFlix';
    } else if (location.pathname === '/aboutus') {
      title = 'About Us - MalosFlix';
    } else if (location.pathname === '/contactus') {
      title = 'Contact Us - MalosFlix';
    } else if (location.pathname.startsWith('/moviedetails')) {
      title = 'Movie Details - MalosFlix';
    } else {
        title = '404 Page Not Found'
    }


    document.title = title;
  }, [location]);

  return null;
};

export default PageTitleUpdater;
