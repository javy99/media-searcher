export type MediaType =
  | "movie"
  | "podcast"
  | "music"
  | "musicVideo"
  | "audiobook"
  | "shortFilm"
  | "tvShow"
  | "software"
  | "all"
  | "ebook";

export const mediaTypeEntities: Record<MediaType, { label: string; value: string }[]> = {
  movie: [
    { label: "Movie", value: "movie" },
    { label: "Movie Artist", value: "movieArtist" },
  ],
  podcast: [
    { label: "Podcast", value: "podcast" },
    { label: "Podcast Author", value: "podcastAuthor" },
  ],
  music: [
    { label: "Music Artist", value: "musicArtist" },
    { label: "Music Track", value: "musicTrack" },
    { label: "Album", value: "album" },
    { label: "Music Video", value: "musicVideo" },
    { label: "Mix", value: "mix" },
    { label: "Song", value: "song" },
  ],
  musicVideo: [
    { label: "Music Artist", value: "musicArtist" },
    { label: "Music Video", value: "musicVideo" },
  ],
  audiobook: [
    { label: "Audiobook", value: "audiobook" },
    { label: "Audiobook Author", value: "audiobookAuthor" },
  ],
  shortFilm: [
    { label: "Short Film", value: "shortFilm" },
    { label: "Short Film Artist", value: "shortFilmArtist" },
  ],
  tvShow: [
    { label: "TV Episode", value: "tvEpisode" },
    { label: "TV Season", value: "tvSeason" },
  ],
  software: [
    { label: "Software", value: "software" },
    { label: "iPad Software", value: "iPadSoftware" },
    { label: "Mac Software", value: "macSoftware" },
  ],
  ebook: [{ label: "Ebook", value: "ebook" }],
  all: [
    { label: "Movie", value: "movie" },
    { label: "Album", value: "album" },
    { label: "All Artists", value: "allArtist" },
    { label: "Podcast", value: "podcast" },
    { label: "Music Video", value: "musicVideo" },
    { label: "Mix", value: "mix" },
    { label: "Audiobook", value: "audiobook" },
    { label: "TV Season", value: "tvSeason" },
    { label: "All Tracks", value: "allTrack" },
  ],
};
