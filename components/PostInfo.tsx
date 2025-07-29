import ImageComp from "./ImageComp";

export default function PostInfo() {
    return (
        <div className="cursor-pointer w-4 h-4 relative">
            <ImageComp src="/icons/infoMore.svg" alt="..." w={16} h={16} />
        </div>
    );
}
