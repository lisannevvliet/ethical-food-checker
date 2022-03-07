import { $ } from "./$.js"

// https://daily-dev-tips.com/posts/detecting-barcodes-from-the-webcam/
export async function detect() {
    // Check if a video object already exists. If so, remove the old video object. 
    if ($('video') != null) {
        $('video').remove()
    }

    // Create a video object and add it to the HTML.
    const video = document.createElement("video")
    video.srcObject = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    video.autoplay = true
    $("#sort").before(video)

    // Search for barcodes within the video object.
    function render() {
        new BarcodeDetector()
            .detect(video)
            .then((barcodes) => {
                barcodes.forEach((barcode) => {
                    // Fill the search query with the barcode.
                    $('form input').value = barcode.rawValue
                    // Submit the form (executes too early).
                    // document.getElementById("submit").click();
                    // $("form").submit()

                    // Remove the video object.
                    $('video').remove()
                })
            })
            // Catch an error and show it in the console.
            .catch(console.error)
    }

    // Keep searching for barcodes within the video object.
    (function loop() {
        // Only keep searching if a video object exists.
        if ($('video')) {
            requestAnimationFrame(loop)
            render()
        }
    })()
}