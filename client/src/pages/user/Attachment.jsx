import { useRef } from "react";

const Attachment = ({ url }) => {
  const attachmentRef = useRef();

  const showFullScreen = () => {
    if (attachmentRef?.current?.requestFullscreen) {
      attachmentRef?.current?.requestFullscreen();
    } else if (attachmentRef?.current?.msRequestFullscreen) {
      attachmentRef?.current?.msRequestFullscreen();
    } else if (attachmentRef?.current?.mozRequestFullScreen) {
      attachmentRef?.current?.mozRequestFullScreen();
    } else if (attachmentRef?.current?.webkitRequestFullscreen) {
      attachmentRef?.current?.webkitRequestFullscreen();
    } else {
      console.log("Fullscreen API is not supported");
    }
  };

  return (
    <img
      src={url}
      ref={attachmentRef}
      alt=""
      className="w-full h-full object-cover object-center"
      onClick={showFullScreen}
    />
  );
};
export default Attachment;
