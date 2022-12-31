import { TwitterShareButton, TwitterIcon } from 'react-share';

const ShareTwitter = ({ url, title, twitterHandle }) => {
	return (
		<div className="mx-2">
			<TwitterShareButton url={url} title={title} via={twitterHandle.split('@').join('')}>
				<TwitterIcon size={64} round={true} />
			</TwitterShareButton>
		</div>
	);
};

export default ShareTwitter;