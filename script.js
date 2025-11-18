// Story Data for the second panel (The Descent)
const storyData = [
  {
      image: 'assets/image_ancient_architect.jpg',
      alt: 'Ancient architect planning a Jhalra',
      text: 'Chapter I: The Necessity. Long ago, as the desert expanded, life depended on ingenuity. The Jhalra, or step-tank, was born not just as a well, but as a monumental system to collect and filter every drop of precious monsoon water, designed by master architects using local stone.'
  },
  {
      image: 'assets/image_water_access.jpg',
      alt: 'Women accessing water at a Jhalra',
      text: 'Chapter II: The Community Heart. Unlike simple wells, the tiered structure of the Jhalra allows access to the water table as it fluctuates, making it a reliable, year-round source. It naturally became the central meeting place—a stone theatre for daily life, social rituals, and the sharing of community news.'
  },
  {
      image: 'assets/image_festival_light.jpg',
      alt: 'Jhalra decorated with thousands of diyas during a festival',
      text: 'Chapter III: Living Memory. On nights of great festivals, the steps are adorned with thousands of oil lamps (diyas). The reflections on the water surface multiply the light, turning the structure into an illuminated celestial map. These festivals cement its status as a site of shared memory and deep spiritual practice, tying the present community to its ancestors.'
  },
  {
      image: 'assets/image_modern_revival.jpg',
      alt: 'Young volunteers cleaning or restoring a Jhalra',
      text: 'Chapter IV: The Revival. Though some fell into disrepair, a modern youth-led movement has revived many Jhalras. Today, they are protected as heritage sites, cleaned, and reimagined through art, reminding the digital generation that the wisdom for water survival is etched right into their city’s stone foundations.'
  }
];

// Function to build and inject the story HTML
function renderStory() {
  const contentDiv = document.getElementById('story-content');
  contentDiv.innerHTML = storyData.map((data, index) => `
      <div class="story-section" id="story-sec-${index}">
          <p class="story-text">${data.text}</p>
          <img class="story-image" src="${data.image}" alt="${data.alt}" loading="lazy"/>
      </div>
  `).join('');
}

// Function to handle the slow fade-in on scroll
function checkStoryVisibility() {
  const storySections = document.querySelectorAll('.story-section');
  storySections.forEach(section => {
      const rect = section.getBoundingClientRect();
      // Check if the top of the section is within 80% of the viewport height
      if (rect.top < window.innerHeight * 0.8) {
          section.classList.add('visible');
      }
  });
}

// Initial setup
window.addEventListener('load', () => {
  renderStory(); // Load story content
  checkStoryVisibility(); // Check visibility on load (for sections already in view)
});

// Event listener for checking story visibility on scroll
window.addEventListener('scroll', checkStoryVisibility);

/* All old toggleFact and openCard logic is removed. */