/* ======= Delivery Address Toggle ======= */
const deliverySelect = document.getElementById('delivery-method');
const deliveryAddressContainer = document.getElementById('delivery-address-container');
const deliveryAddressInput = document.getElementById('delivery-address');

deliverySelect.addEventListener('change', function() {
    if (this.value === 'delivery') {
        deliveryAddressContainer.classList.add('active');
        deliveryAddressInput.required = true;
    } else {
        deliveryAddressContainer.classList.remove('active');
        deliveryAddressInput.required = false;
    }
});

/* ======= Collage Section Cycling ======= */
const collageImages = [
    "https://static.wixstatic.com/media/3730ae_ce88e046e94a465ba2a9b4013147b321~mv2.jpg",
    "https://static.wixstatic.com/media/3730ae_9adfdbc1792e49efb083aa00ac7751f2~mv2.jpg",
    "https://static.wixstatic.com/media/3730ae_2bf3dc4694924e1c9cab8a9d289907d9~mv2.jpeg"
];
let collageCurrent = 0;
const mainImg = document.getElementById("mainImg");
const prevImg = document.getElementById("prevImg");
const nextImg = document.getElementById("nextImg");

function updateCollageImages() {
    mainImg.classList.remove("active");
    setTimeout(() => {
        mainImg.src = collageImages[collageCurrent];
        prevImg.src = collageImages[(collageCurrent - 1 + collageImages.length) % collageImages.length];
        nextImg.src = collageImages[(collageCurrent + 1) % collageImages.length];
        mainImg.classList.add("active");
    }, 200);
}
updateCollageImages();
setInterval(() => { collageCurrent = (collageCurrent + 1) % collageImages.length; updateCollageImages(); }, 3500);

/* ======= Menu Section Cycling ======= */
const menuImages = [
    "https://static.wixstatic.com/media/3730ae_dbb92d9a77da44fbbfc0af0ae425d114~mv2.jpg",
    "https://static.wixstatic.com/media/3730ae_fc06b5e27bf7432e972f8083808337a2~mv2.jpg",
    "https://static.wixstatic.com/media/3730ae_e640bf07e78c47dcb3a1f36a131c5cfe~mv2.jpg",
    "https://static.wixstatic.com/media/3730ae_769374457f1d44c48877959194cfdd23~mv2.jpg",
    "https://static.wixstatic.com/media/3730ae_b4e7d69310eb4a3e8aff4fbd29e2ba83~mv2.jpg"
];

let menuCurrent = 0;
const menuMain = document.getElementById("menuMain");
const menuPrev = document.getElementById("menuPrev");
const menuNext = document.getElementById("menuNext");

function updateMenuImages() {
    menuMain.classList.remove("active");
    setTimeout(() => {
        menuMain.src = menuImages[menuCurrent];
        menuPrev.src = menuImages[(menuCurrent - 1 + menuImages.length) % menuImages.length];
        menuNext.src = menuImages[(menuCurrent + 1) % menuImages.length];
        menuMain.classList.add("active");
    }, 200);
}
updateMenuImages();
setInterval(() => { menuCurrent = (menuCurrent + 1) % menuImages.length; updateMenuImages(); }, 3500);
