import { imageUrls } from "@/data/constant";

export const getNineRandomPreviewImages = (count: number) => {
    return [...imageUrls].sort(() => Math.random() - 0.5).slice(0, count);
};
