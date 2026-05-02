const artworks = [
    {
        id: 1,
        title: 'Mona Lisa',
        artist: 'Leonardo da Vinci',
        year: 'c. 1503–1519',
        category: 'Renaissance',
        image: 'assets/images/mona-lisa.jpg',
        description: 'One of the most recognized portraits in art history, admired for its subtle expression and atmospheric background.'
    },
    {
        id: 2,
        title: 'The Great Wave off Kanagawa',
        artist: 'Katsushika Hokusai',
        year: 'c. 1831',
        category: 'Ukiyo-e',
        image: 'assets/images/great-wave.jpg',
        description: 'A dramatic woodblock print from the series Thirty-Six Views of Mount Fuji, celebrated for motion, pattern, and scale.'
    },
    {
        id: 3,
        title: "The Birth of Venus",
        artist: "Sandro Botticelli",
        year: 1486,
        category: "Renaissance",
        image: "assets/images/Birth_of_Venus.jpg",
        description: "A depiction of the goddess Venus emerging from the sea."
    },
    {
        id: 4,
        title: "The Last Supper",
        artist: "Leonardo da Vinci",
        year: 1498,
        category: "Renaissance",
        image: "assets/images/The_Last_Supper.jpg",
        description: "Jesus and his disciples during the final meal."
    },
    {
        id: 5,
        title: "The Creation of Adam",
        artist: "Michelangelo",
        year: 1512,
        category: "Renaissance",
        image: "assets/images/Creation_of_Adam.jpg",
        description: "Part of the Sistine Chapel ceiling."
    },
    {
        id: 6,
        title: "School of Athens",
        artist: "Raphael",
        year: 1511,
        category: "Renaissance",
        image: "assets/images/School_of_Athens.jpg",
        description: "Philosophers gathered in a grand architectural setting."
    },
    {
        id: 7,
        title: "The Night Watch",
        artist: "Rembrandt",
        year: 1642,
        category: "Baroque",
        image: "assets/images/The_Night_Watch.jpg",
        description: "A dynamic group portrait of a city militia."
    },
    {
        id: 8,
        title: "Girl with a Pearl Earring",
        artist: "Johannes Vermeer",
        year: 1665,
        category: "Baroque",
        image: "assets/images/The_Girl_With_The_Pearl_Earring.jpg",
        description: "A tronie of a girl wearing an exotic dress."
    },
    {
        id: 9,
        title: "Las Meninas",
        artist: "Diego Velázquez",
        year: 1656,
        category: "Baroque",
        image: "assets/images/Las_Meninas.jpg",
        description: "A complex and enigmatic royal portrait."
    },
    {
        id: 10,
        title: "The Swing",
        artist: "Jean-Honoré Fragonard",
        year: 1767,
        category: "Rococo",
        image: "assets/images/The_Swing.jpg",
        description: "A playful and romantic Rococo scene."
    },
    {
        id: 11,
        title: "Liberty Leading the People",
        artist: "Eugène Delacroix",
        year: 1830,
        category: "Romanticism",
        image: "assets/images/Liberty_Leading_The_People.jpg",
        description: "Allegory of freedom during revolution."
    },
    {
        id: 12,
        title: "The Third of May 1808",
        artist: "Francisco Goya",
        year: 1814,
        category: "Romanticism",
        image: "assets/images/Third_Of_May_1808.jpg",
        description: "A dramatic portrayal of wartime execution."
    },
    {
        id: 13,
        title: "The Hay Wain",
        artist: "John Constable",
        year: 1821,
        category: "Romanticism",
        image: "assets/images/The_Hay_Wain.jpg",
        description: "A peaceful rural English landscape."
    },
    {
        id: 14,
        title: "The Gleaners",
        artist: "Jean-François Millet",
        year: 1857,
        category: "Realism",
        image: "assets/images/The_Gleaners.jpg",
        description: "Peasants collecting leftover grain."
    },
    {
        id: 15,
        title: "Olympia",
        artist: "Édouard Manet",
        year: 1863,
        category: "Realism",
        image: "assets/images/Olympia.jpg",
        description: "A bold and controversial nude portrait."
    },
    {
        id: 16,
        title: "The Dance Class",
        artist: "Edgar Degas",
        year: 1874,
        category: "Impressionism",
        image: "assets/images/The_Dance_Class.jpg",
        description: "Ballet dancers in rehearsal."
    },
    {
        id: 17,
        title: "Water Lilies",
        artist: "Claude Monet",
        year: 1916,
        category: "Impressionism",
        image: "assets/images/Water_Lilies.jpg",
        description: "A tranquil study of light and water."
    },
    {
        id: 18,
        title: "The Card Players",
        artist: "Paul Cézanne",
        year: 1895,
        category: "Post-Impressionism",
        image: "assets/images/The_Card_Players.jpg",
        description: "Men absorbed in a quiet card game."
    },
    {
        id: 19,
        title: "Where Do We Come From?",
        artist: "Paul Gauguin",
        year: 1897,
        category: "Post-Impressionism",
        image: "assets/images/Origin.jpg",
        description: "A philosophical painting about life."
    },
    {
        id: 20,
        title: "The Kiss",
        artist: "Gustav Klimt",
        year: 1908,
        category: "Symbolism",
        image: "assets/images/The_Kiss.jpg",
        description: "A gold-leaf romantic embrace."
    },
    {
        id: 21,
        title: "Composition VIII",
        artist: "Wassily Kandinsky",
        year: 1923,
        category: "Abstract",
        image: "assets/images/Composition_8.jpg",
        description: "Geometric abstraction and color harmony."
    },
    {
        id: 22,
        title: "Broadway Boogie Woogie",
        artist: "Piet Mondrian",
        year: 1943,
        category: "Abstract",
        image: "assets/images/Broadway_Boogie_Woogie.jpg",
        description: "A rhythmic grid inspired by New York."
    },
    {
        id: 23,
        title: "American Gothic",
        artist: "Grant Wood",
        year: 1930,
        category: "Modernism",
        image: "assets/images/American_Gothic.jpg",
        description: "A portrait of rural American life."
    },
    {
        id: 24,
        title: "The Son of Man",
        artist: "René Magritte",
        year: 1964,
        category: "Surrealism",
        image: "assets/images/TheSonOfMan.jpg",
        description: "A man obscured by a floating apple."
    },
    {
        id: 25,
        title: "The Lovers",
        artist: "René Magritte",
        year: 1928,
        category: "Surrealism",
        image: "assets/images/The_Lovers.jpg",
        description: "A mysterious veiled kiss."
    },
    {
        id: 26,
        title: "Nighthawks",
        artist: "Edward Hopper",
        year: 1942,
        category: "Modernism",
        image: "assets/images/Nighthawks.jpg",
        description: "Late-night diner scene."
    },
    {
        id: 27,
        title: "Campbell's Soup Cans",
        artist: "Andy Warhol",
        year: 1962,
        category: "Pop Art",
        image: "assets/images/Campbells_Soup_Cans.jpg",
        description: "Iconic pop art consumer imagery."
    }
];

const artistProfiles = [
    {
        name: 'Leonardo da Vinci',
        initials: 'LD',
        movement: 'Renaissance',
        bio: 'Leonardo was an Italian polymath known for blending scientific observation with artistic mastery. His paintings often show delicate modeling, careful anatomy, and atmospheric perspective.'
    },
    {
        name: 'Katsushika Hokusai',
        initials: 'KH',
        movement: 'Ukiyo-e',
        bio: 'Hokusai was a Japanese artist and printmaker whose work helped shape global visual culture. His bold compositions and stylized movement made his prints especially influential.'
    },
    {
        name: "Sandro Botticelli",
        initials: "SB",
        movement: "Renaissance",
        bio: "Italian painter known for mythological and religious works like The Birth of Venus."
    },
    {
        name: "Michelangelo",
        initials: "M",
        movement: "Renaissance",
        bio: "Master sculptor and painter, famous for the Sistine Chapel ceiling."
    },
    {
        name: "Raphael",
        initials: "R",
        movement: "Renaissance",
        bio: "Renowned for balanced compositions and clarity in Renaissance art."
    },
    {
        name: "Rembrandt",
        initials: "R",
        movement: "Baroque",
        bio: "Dutch master known for dramatic lighting and portraits."
    },
    {
        name: "Johannes Vermeer",
        initials: "JV",
        movement: "Baroque",
        bio: "Known for quiet interior scenes and masterful use of light."
    },
    {
        name: "Diego Velázquez",
        initials: "DV",
        movement: "Baroque",
        bio: "Spanish court painter known for Las Meninas."
    },
    {
        name: "Jean-Honoré Fragonard",
        initials: "JHF",
        movement: "Rococo",
        bio: "Painter of playful, romantic Rococo scenes."
    },
    {
        name: "Eugène Delacroix",
        initials: "ED",
        movement: "Romanticism",
        bio: "Leader of the Romantic movement in France."
    },
    {
        name: "Francisco Goya",
        initials: "FG",
        movement: "Romanticism",
        bio: "Spanish artist bridging classical and modern art."
    },
    {
        name: "John Constable",
        initials: "JC",
        movement: "Romanticism",
        bio: "Landscape painter focused on the English countryside."
    },
    {
        name: "Jean-François Millet",
        initials: "JFM",
        movement: "Realism",
        bio: "Focused on rural life and peasant labor."
    },
    {
        name: "Édouard Manet",
        initials: "EM",
        movement: "Realism",
        bio: "Key figure in the transition to Impressionism."
    },
    {
        name: "Edgar Degas",
        initials: "ED",
        movement: "Impressionism",
        bio: "Known for ballet dancers and movement studies."
    },
    {
        name: "Claude Monet",
        initials: "CM",
        movement: "Impressionism",
        bio: "Founder of Impressionism, focused on light and color."
    },
    {
        name: "Paul Cézanne",
        initials: "PC",
        movement: "Post-Impressionism",
        bio: "Influenced the development of modern art."
    },
    {
        name: "Paul Gauguin",
        initials: "PG",
        movement: "Post-Impressionism",
        bio: "Known for bold colors and symbolic themes."
    },
    {
        name: "Gustav Klimt",
        initials: "GK",
        movement: "Symbolism",
        bio: "Austrian painter known for decorative, gold-leaf works."
    },
    {
        name: "Wassily Kandinsky",
        initials: "WK",
        movement: "Abstract",
        bio: "Pioneer of abstract art and color theory."
    },
    {
        name: "Piet Mondrian",
        initials: "PM",
        movement: "Abstract",
        bio: "Developed geometric abstraction using grids and primary colors."
    },
    {
        name: "Grant Wood",
        initials: "GW",
        movement: "Modernism",
        bio: "American painter known for regionalist works."
    },
    {
        name: "René Magritte",
        initials: "RM",
        movement: "Surrealism",
        bio: "Surrealist known for thought-provoking visual paradoxes."
    },
    {
        name: "Edward Hopper",
        initials: "EH",
        movement: "Modernism",
        bio: "Captured themes of isolation in urban life."
    },
    {
        name: "Andy Warhol",
        initials: "AW",
        movement: "Pop Art",
        bio: "Leading figure in Pop Art and consumer imagery."
    }
];

const galleryGrid = document.getElementById('galleryGrid');
const filterButtons = document.getElementById('filterButtons');
const searchInput = document.getElementById('searchInput');
const resultsText = document.getElementById('resultsText');
const emptyState = document.getElementById('emptyState');
const artistProfilesContainer = document.getElementById('artistProfiles');
const artworkCount = document.getElementById('artworkCount');
const artistCount = document.getElementById('artistCount');
const themeToggle = document.getElementById('themeToggle');

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCategory = document.getElementById('lightboxCategory');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxMeta = document.getElementById('lightboxMeta');
const lightboxDescription = document.getElementById('lightboxDescription');
const lightboxClose = document.getElementById('lightboxClose');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const zoomToggle = document.getElementById('zoomToggle');
const playToggle = document.getElementById('playToggle');

let activeCategory = 'All';
let currentIndex = 0;
let slideshowInterval = null;

function uniqueCategories() {
    return ['All', ...new Set(artworks.map((art) => art.category))];
}

function matchesFilters(art) {
    const term = searchInput.value.trim().toLowerCase();
    const matchesCategory = activeCategory === 'All' || art.category === activeCategory;
    const haystack = `${art.title} ${art.artist} ${art.year} ${art.category}`.toLowerCase();
    return matchesCategory && haystack.includes(term);
}

function currentFilteredArtworks() {
    return artworks.filter(matchesFilters);
}

function renderFilters() {
    filterButtons.innerHTML = '';
    uniqueCategories().forEach((category) => {
        const button = document.createElement('button');
        button.className = `filter-button ${category === activeCategory ? 'active' : ''}`;
        button.textContent = category;
        button.addEventListener('click', () => {
            activeCategory = category;
            renderFilters();
            renderGallery();
            renderArtists();
        });
        filterButtons.appendChild(button);
    });
}

function renderGallery() {
    const filtered = currentFilteredArtworks();
    galleryGrid.innerHTML = '';
    resultsText.textContent = `${filtered.length} artwork${filtered.length === 1 ? '' : 's'} shown`;
    emptyState.classList.toggle('hidden', filtered.length > 0);

    filtered.forEach((art) => {
        const card = document.createElement('article');
        card.className = 'art-card';
        card.innerHTML = `
      <figure>
        <img src="${art.image}" alt="${art.title} by ${art.artist}" loading="lazy" />
        <span class="card-badge">${art.category}</span>
      </figure>
      <figcaption>
        <h4>${art.title}</h4>
        <p class="card-meta">${art.artist} · ${art.year}</p>
        <p>${art.description}</p>
        <div class="card-actions">
          <button class="primary-button" data-open-id="${art.id}">View artwork</button>
          <span class="artist-meta">Click to zoom & slideshow</span>
        </div>
      </figcaption>
    `;
        galleryGrid.appendChild(card);
    });

    galleryGrid.querySelectorAll('[data-open-id]').forEach((button) => {
        button.addEventListener('click', () => {
            const filteredItems = currentFilteredArtworks();
            currentIndex = filteredItems.findIndex((art) => art.id === Number(button.dataset.openId));
            openLightbox(filteredItems);
        });
    });
}

function renderArtists() {
    artistProfilesContainer.innerHTML = '';

    const filteredArtworks = currentFilteredArtworks();
    const visibleArtistNames = new Set(filteredArtworks.map((art) => art.artist));

    const filteredArtists = artistProfiles.filter((artist) =>
        visibleArtistNames.has(artist.name)
    );

    if (!filteredArtists.length) {
        artistProfilesContainer.innerHTML = `
      <p class="empty-copy">No artist profiles match the current filters.</p>
    `;
        return;
    }

    filteredArtists.forEach((artist) => {
        const card = document.createElement('article');
        card.className = 'artist-card';
        card.innerHTML = `
      <div class="artist-card-content">
        <div class="artist-avatar">${artist.initials}</div>
        <h4>${artist.name}</h4>
        <p class="artist-meta">${artist.movement}</p>
        <p>${artist.bio}</p>
      </div>
    `;
        artistProfilesContainer.appendChild(card);
    });
}

function updateCounters() {
    artworkCount.textContent = artworks.length;
    artistCount.textContent = artistProfiles.length;
}

function openLightbox(list) {
    if (!list.length) return;
    const art = list[currentIndex];
    lightboxImage.src = art.image;
    lightboxImage.alt = `${art.title} by ${art.artist}`;
    lightboxImage.classList.remove('zoomed');
    zoomToggle.textContent = 'Zoom in';
    lightboxCategory.textContent = art.category;
    lightboxTitle.textContent = art.title;
    lightboxMeta.textContent = `${art.artist} · ${art.year}`;
    lightboxDescription.textContent = art.description;
    lightbox.classList.remove('hidden');
    lightbox.setAttribute('aria-hidden', 'false');

    prevButton.onclick = () => {
        currentIndex = (currentIndex - 1 + list.length) % list.length;
        openLightbox(list);
    };

    nextButton.onclick = () => {
        currentIndex = (currentIndex + 1) % list.length;
        openLightbox(list);
    };
}

function closeLightbox() {
    lightbox.classList.add('hidden');
    lightbox.setAttribute('aria-hidden', 'true');
    stopSlideshow();
}

function stopSlideshow() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
    }
    playToggle.textContent = 'Start slideshow';
}

function toggleSlideshow() {
    const list = currentFilteredArtworks();
    if (!list.length) return;

    if (slideshowInterval) {
        stopSlideshow();
        return;
    }

    playToggle.textContent = 'Stop slideshow';
    slideshowInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % list.length;
        openLightbox(list);
        playToggle.textContent = 'Stop slideshow';
    }, 2500);
}

searchInput.addEventListener('input', () => {
    renderGallery();
    renderArtists();
});

lightboxClose.addEventListener('click', closeLightbox);
playToggle.addEventListener('click', toggleSlideshow);

zoomToggle.addEventListener('click', () => {
    lightboxImage.classList.toggle('zoomed');
    zoomToggle.textContent = lightboxImage.classList.contains('zoomed') ? 'Zoom out' : 'Zoom in';
});

lightboxImage.addEventListener('click', () => {
    lightboxImage.classList.toggle('zoomed');
    zoomToggle.textContent = lightboxImage.classList.contains('zoomed') ? 'Zoom out' : 'Zoom in';
});

document.addEventListener('keydown', (event) => {
    if (lightbox.classList.contains('hidden')) return;
    const list = currentFilteredArtworks();
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % list.length;
        openLightbox(list);
    }
    if (event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + list.length) % list.length;
        openLightbox(list);
    }
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
});

renderFilters();
renderGallery();
renderArtists();
updateCounters();
