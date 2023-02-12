export const getImageUrlDimensions = async (
    url: string,
    cb: (width: number, height: number) => void,
): Promise<void> => {
    const img = document.createElement("img");
    img.addEventListener("load", () => {
        cb(img.naturalWidth, img.naturalHeight);
    });
    img.src = url;
};
