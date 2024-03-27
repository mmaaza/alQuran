import React from 'react'

export default function Juz() {
  
// Function to fetch audio data for the Arabic text of the Quran
async function fetchAudioData() {
  const apiUrl = 'http://api.alquran.cloud/v1/juz/1/quran-uthmani?offset=3&limit=10'; 

  try {
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      
      const audioData = await response.json();
     console.log(response)
     console.log(audioData)
  } catch (error) {
      console.error('Error fetching audio data:', error);
      console.log(error)
  }
}
fetchAudioData();

  return (
  <>



  </>
  )
}
