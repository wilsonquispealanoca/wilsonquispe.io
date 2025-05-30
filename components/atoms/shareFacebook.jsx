import { FacebookShareButton, FacebookIcon } from "react-share";

const ShareFacebook = ({ url, title }) => {
  return (
    <div className="mx-2">
      <FacebookShareButton url={url} title={title}>
        <FacebookIcon size={64} round={true} />
      </FacebookShareButton>
    </div>
  );
};

export default ShareFacebook;
