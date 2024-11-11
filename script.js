document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = [
        { thumbnailPath: 'images/flowers-pink-small.jpg', fullPath: 'images/flowers-pink-large.jpg', caption: 'Pink Flowers' },
        { thumbnailPath: 'images/flowers-purple-small.jpg', fullPath: 'images/flowers-purple-large.jpg', caption: 'Purple Flowers' },
        { thumbnailPath: 'images/flowers-red-small.jpg', fullPath: 'images/flowers-red-large.jpg', caption: 'Red Flowers' },
        { thumbnailPath: 'images/flowers-white-small.jpg', fullPath: 'images/flowers-white-large.jpg', caption: 'White Flowers' },
        { thumbnailPath: 'images/flowers-yellow-small.jpg', fullPath: 'images/flowers-yellow-large.jpg', caption: 'Yellow Flowers' }
    ];

    const mainImage = document.querySelector("figure img");
    const mainCaption = document.querySelector("figcaption");
    const thumbnailsContainer = document.querySelector(".thumbnail-list");

    const blurredBackground = document.createElement("div");
    blurredBackground.classList.add("background-blur");
    document.body.appendChild(blurredBackground);

    function updateMainImage(selectedImage) {
        mainImage.src = selectedImage.fullPath;
        mainCaption.textContent = selectedImage.caption;
        blurredBackground.style.backgroundImage = `url('${selectedImage.fullPath}')`;

        document.querySelectorAll(".thumbnail-list li").forEach(thumbnail => thumbnail.classList.remove("active"));
        selectedImage.thumbnailElement.classList.add("active");
    }

    galleryImages.forEach(imageData => {
        const thumbnailItem = document.createElement("li");
        const thumbnailImage = document.createElement("img");
        thumbnailImage.src = imageData.thumbnailPath;
        thumbnailImage.alt = imageData.caption;

        thumbnailItem.appendChild(thumbnailImage);
        thumbnailsContainer.appendChild(thumbnailItem);

        thumbnailItem.addEventListener("click", () => updateMainImage(imageData));
        imageData.thumbnailElement = thumbnailItem;
    });

    updateMainImage(galleryImages[0]);
});
