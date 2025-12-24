// Christmas Wish Generator Components
const wishPrefixes = [
    "May the love of Christ",
    "May God's grace",
    "May the joy of the season",
    "May the peace of our Lord",
    "May Heaven's blessings",
    "May the light of Christ",
    "May divine love",
    "May the Holy Spirit",
    "May God's abundant mercy",
    "May the warmth of fellowship",
    "May angelic blessings",
    "May the promise of Emmanuel",
    "May the gift of salvation",
    "May God's unfailing love",
    "May the wonder of His birth",
    "May the star of Bethlehem",
    "May the blessing of the Nativity",
    "May Christ's eternal love",
    "May the joy of angels",
    "May God's tender mercies"
];

const wishMiddles = [
    "fill your heart",
    "surround you",
    "guide your path",
    "bring you comfort",
    "illuminate your life",
    "strengthen your faith",
    "renew your spirit",
    "bless your home",
    "embrace your family",
    "inspire your soul",
    "overflow in your life",
    "shine upon you",
    "dwell richly within you",
    "be your constant companion",
    "transform your days",
    "uplift your spirit",
    "refresh your soul",
    "guard your heart",
    "enrich your journey",
    "sustain you always"
];

const wishEndings = [
    "this Christmas and always.",
    "throughout this holy season.",
    "now and forevermore.",
    "today and every day ahead.",
    "in this blessed time of celebration.",
    "as we celebrate our Savior's birth.",
    "this Christmas and in the new year.",
    "during this season of hope and joy.",
    "as we rejoice in His coming.",
    "in this sacred season of wonder.",
    "through all your days to come.",
    "in this time of divine celebration.",
    "as we remember the greatest gift.",
    "throughout the twelve days of Christmas.",
    "in this season of light and love.",
    "as we worship the newborn King.",
    "in these days of holy reflection.",
    "through Advent and beyond.",
    "as we celebrate God's perfect gift.",
    "in the glow of His glorious presence."
];

const additionalWishes = [
    "Wishing you a Christmas filled with worship, wonder, and the warmth of Christian fellowship.",
    "May your Advent journey lead you to deeper faith and Christmas joy beyond measure.",
    "Praying that the star of Bethlehem guides you to peace, hope, and everlasting joy.",
    "May the miracle of Christmas morning bring renewal and rejoicing to your soul.",
    "Blessed Christmas to you and yours, may the angels' song echo in your heart.",
    "May you experience the profound joy of knowing Jesus, our Emmanuel, this Christmas.",
    "Wishing you a season wrapped in prayer, tied with gratitude, and filled with grace.",
    "May the Christ child's love fill your home with laughter, light, and lasting peace.",
    "Praying your Christmas is blessed with sacred moments and cherished memories.",
    "May the shepherds' wonder and the wise men's devotion inspire your celebration.",
    "Wishing you the peace that passes understanding this holy Christmas season.",
    "May your heart be a manger where Christ's love is born anew each day.",
    "Blessed Advent and joyous Christmas! May your faith shine bright as the Christmas star.",
    "May the carols we sing and prayers we share bring you closer to our Savior.",
    "Wishing you a Christmas blessed with community, communion, and Christ's presence.",
    "May the glory of the newborn King illuminate every corner of your life this season.",
    "Praying that Christmas brings you closer to God and those you hold dear.",
    "May the humble stable remind you of God's perfect plan and boundless love.",
    "Wishing you a season of reflection, rejoicing, and renewed faith in our Lord.",
    "May the greatest gift ever given inspire you to share love generously this Christmas."
];

// Generate Random Wish
function generateWish() {
    const useTemplate = Math.random() > 0.25; // 75% use template, 25% use pre-written
    
    if (useTemplate) {
        const prefix = wishPrefixes[Math.floor(Math.random() * wishPrefixes.length)];
        const middle = wishMiddles[Math.floor(Math.random() * wishMiddles.length)];
        const ending = wishEndings[Math.floor(Math.random() * wishEndings.length)];
        return `${prefix} ${middle} ${ending}`;
    } else {
        return additionalWishes[Math.floor(Math.random() * additionalWishes.length)];
    }
}

// DOM Elements
const giftBox = document.getElementById('giftBox');
const openBtn = document.getElementById('openBtn');
const surpriseContent = document.getElementById('surpriseContent');
const wishText = document.getElementById('wishText');
const tryAgainBtn = document.getElementById('tryAgainBtn');

// Open Gift Box
openBtn.addEventListener('click', () => {
    giftBox.classList.add('opening');
    openBtn.style.display = 'none';
    
    setTimeout(() => {
        giftBox.style.display = 'none';
        surpriseContent.classList.add('active');
        
        // Generate wish
        wishText.textContent = generateWish();
    }, 800);
});

// Try Again
tryAgainBtn.addEventListener('click', () => {
    surpriseContent.classList.remove('active');
    giftBox.style.display = 'block';
    giftBox.classList.remove('opening');
    openBtn.style.display = 'inline-block';
});ar.",
    "during this season of hope and joy.",
    "as we rejoice in His coming.",
    "in this sacred season of wonder.",
    "through all your days to come.",
    "in this time of divine celebration.",
    "as we remember the greatest gift.",
    "throughout the twelve days of Christmas.",
    "in this season of light and love."
];

const additionalWishes = [
    "Wishing you a Christmas filled with worship, wonder, and the warmth of Christian fellowship.",
    "May your Advent journey lead you to deeper faith and Christmas joy beyond measure.",
    "Praying that the star of Bethlehem guides you to peace, hope, and everlasting joy.",
    "May the miracle of Christmas morning bring renewal and rejoicing to your soul.",
    "Blessed Christmas to you and yours, may the angels' song echo in your heart.",
    "May you experience the profound joy of knowing Jesus, our Emmanuel, this Christmas.",
    "Wishing you a season wrapped in prayer, tied with gratitude, and filled with grace.",
    "May the Christ child's love fill your home with laughter, light, and lasting peace.",
    "Praying your Christmas is blessed with sacred moments and cherished memories.",
    "May the shepherds' wonder and the wise men's devotion inspire your celebration.",
    "Wishing you the peace that passes understanding this holy Christmas season.",
    "May your heart be a manger where Christ's love is born anew each day.",
    "Blessed Advent and joyous Christmas! May your faith shine bright as the Christmas star.",
    "May the carols we sing and prayers we share bring you closer to our Savior.",
    "Wishing you a Christmas blessed with community, communion, and Christ's presence."
];

// Christmas Songs Array (You can add YouTube links or actual audio file paths)
const christmasSongs = [
    { title: "Silent Night", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { title: "O Holy Night", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { title: "Hark! The Herald Angels Sing", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
    { title: "Joy to the World", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
    { title: "O Come, All Ye Faithful", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
    { title: "The First Noel", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
    { title: "Angels We Have Heard on High", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
    { title: "Away in a Manger", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" }
];

// Note: The URLs above are placeholders. Replace them with:
// 1. Your own audio files in the project folder (e.g., "songs/silent-night.mp3")
// 2. Links to royalty-free Christmas music
// 3. YouTube embed links (you'll need to modify the audio player to iframe)

// Generate Random Wish
function generateWish() {
    const useTemplate = Math.random() > 0.2; // 80% use template, 20% use pre-written
    
    if (useTemplate) {
        const prefix = wishPrefixes[Math.floor(Math.random() * wishPrefixes.length)];
        const middle = wishMiddles[Math.floor(Math.random() * wishMiddles.length)];
        const ending = wishEndings[Math.floor(Math.random() * wishEndings.length)];
        return `${prefix} ${middle} ${ending}`;
    } else {
        return additionalWishes[Math.floor(Math.random() * additionalWishes.length)];
    }
}

// Get Random Song
function getRandomSong() {
    return christmasSongs[Math.floor(Math.random() * christmasSongs.length)];
}

// DOM Elements
const giftBox = document.getElementById('giftBox');
const openBtn = document.getElementById('openBtn');
const surpriseContent = document.getElementById('surpriseContent');
const wishText = document.getElementById('wishText');
const songTitle = document.getElementById('songTitle');
const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');
const tryAgainBtn = document.getElementById('tryAgainBtn');

// Open Gift Box
openBtn.addEventListener('click', () => {
    giftBox.classList.add('opening');
    openBtn.style.display = 'none';
    
    setTimeout(() => {
        giftBox.style.display = 'none';
        surpriseContent.classList.add('active');
        
        // Generate wish and song
        wishText.textContent = generateWish();
        const song = getRandomSong();
        songTitle.textContent = song.title;
        audioSource.src = song.url;
        audioPlayer.load();
    }, 800);
});

// Try Again
tryAgainBtn.addEventListener('click', () => {
    surpriseContent.classList.remove('active');
    giftBox.style.display = 'block';
    giftBox.classList.remove('opening');
    openBtn.style.display = 'inline-block';
    audioPlayer.pause();
});
