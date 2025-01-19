# Media Search Web Application

This is a web application that allows users to search for music, books, and other media using the [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1). The app includes a search bar, displays a list of search results, and has a responsive design for mobile devices.

## Features

- **Search for Media**: Users can search for music, books, and other media via the iTunes Search API.
- **Responsive Design**: The application is fully responsive, ensuring a good experience across mobile, tablet, and desktop devices.
- **UI**: The app has a clean and simple UI with cards showing search results for various media types.
- **TypeScript & React**: The app is built using TypeScript and React functional components with hooks.
- **Styling**: The application is styled using **Tailwind CSS** for utility-first styling.
- **UI Library**: **Shadcn UI** is used for UI components to enhance user experience.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A statically typed superset of JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Shadcn UI**: A UI library for building modern, accessible components.
- **iTunes Search API**: API used to fetch media data.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 14 or higher)
- **npm** (Node package manager)

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/javy99/media-searcher.git
cd media-searcher
```

### 2. Install Dependencies

Install the necessary dependencies using npm:

```bash
npm install
```

### 3. Start the Development Server

Start the app in development mode:

```bash
npm run dev
```

This will start the development server, and you can access the app by navigating to http://localhost:5173 in your browser.

### 4. Build and Deploy (Optional)

If you'd like to build the project for production, run the following command:

```bash
npm run build
npm run start
```

You can deploy it to any platform of your choice.

## API Integration

The app uses the iTunes Search API to fetch media content based on user search input. The API request format looks like this:

```typescript
const fetchMediaData = async (searchTerm: string) => {
  const response = await fetch(
    `https://itunes.apple.com/search?term=${searchTerm}&limit=10`
  );
  const data = await response.json();
  return data.results;
};
```
This function makes a GET request to the iTunes Search API, retrieves the results, and returns them to be displayed in the UI.

### Extended API Query Parameters
The API query supports additional parameters to refine your search. Below is an example of how you can customize the API request with various options:

```bash
https://itunes.apple.com/search?
  term={searchTerm}&
  country={countryCode}&
  media={mediaType}&
  entity={entityType}&
  attribute={attributeType}&
  limit=25&
  explicit=Yes&
  lang=en_us
```

term: The search term (e.g., "Beatles").

country: The country code (e.g., "US" for United States).

media: The media type (e.g., "music", "movie", "book").

entity: The entity type (e.g., "album", "musicTrack").

attribute: The attribute type (e.g., "artistTerm", "albumTerm").

limit: The number of results to return (e.g., 25).

explicit: Whether to include explicit content (e.g., "Yes" or "No").

lang: The language code (e.g., "en_us").
  
Feel free to adjust these parameters based on your search needs.

## Acknowledgements
iTunes Search API Documentation

Enjoy building and exploring this app! If you have any questions, feel free to open an issue in the repository.


