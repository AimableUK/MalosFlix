# MalosFlix

MalosFlix is a movie database web application that allows users to search for movies, TV series, and anime. The app fetches data from the OMDB API and provides essential movie details such as plots, casts, and ratings.

## Features

- 🔍 **Search for Movies & TV Shows**
- 📄 **View Movie Details**
- 🎞 **Recommended Movies & Series**
- 🌙 **Responsive Design**

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **State Management:** Zustand
- **Data Fetching:** SWR
- **API:** OMDB API

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/AimableTrague/MalosFlix.git
   cd malosflix
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file and add your OMDB API key:
   ```env
   VITE_OMDB_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage

- **Search for movies:** Type a title and press enter.
- **View movie details:** Click on a movie to see more info.
- **Explore recommendations:** Scroll to find similar content.

### Screenshots

![Search Page](path/to/search-page.png)
![Movie Details](path/to/movie-details.png)

## Deployment

To deploy on Netlify/Vercel:
1. Push code to GitHub.
2. Connect repository to Netlify/Vercel.
3. Set the `VITE_OMDB_API_KEY` variable.
4. Deploy!

---

Enjoy **MalosFlix**! 🎬🍿
