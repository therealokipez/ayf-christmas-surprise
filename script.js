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
    "May the wonder of His birth"
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
    "transform your days"
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

// Generate Random Wish
function generateWish() {
    const useTemplate = Math.random() > 0.2;
    
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
openBtn.addEventListener('click', function() {
    giftBox.classList.add('opening');
    openBtn.style.display = 'none';
    
    setTimeout(function() {
        giftBox.style.display = 'none';
        surpriseContent.classList.add('active');
        wishText.textContent = generateWish();
    }, 800);
});

// Try Again
tryAgainBtn.addEventListener('click', function() {
    surpriseContent.classList.remove('active');
    giftBox.style.display = 'block';
    giftBox.classList.remove('opening');
    openBtn.style.display = 'inline-block';
});
