function solution(genres, plays) {
  const genreTotalPlays = {};
  const songs = [];
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    if (!genreTotalPlays[genre]) {
      genreTotalPlays[genre] = 0;
    }
    genreTotalPlays[genre] += play;

    songs.push({
      id: i,
      genre,
      play
    });
  }
  songs.sort((a, b) => {
    if (a.genre !== b.genre) {
      return genreTotalPlays[b.genre] - genreTotalPlays[a.genre];
    }
    if (a.play !== b.play) {
      return b.play - a.play;
    }
    return a.id - b.id;
  });

  const answer = [];
  const genreCount = {};
  for (const song of songs) {
    if (!genreCount[song.genre]) {
      genreCount[song.genre] = 0;
    }
    if (genreCount[song.genre] < 2) {
      answer.push(song.id);
      genreCount[song.genre]++;
    }
  }

  return answer;
}
