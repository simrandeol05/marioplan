import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  FacebookShareCount,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  InstapaperIcon,
  TwitterIcon,
} from "react-share";

const Share = () => {
  const shareFBUrl = "https://facebook.com";
  const shareEmailUrl = "https://gmail.com";
  const shareInstaUrl = "https://instagram.com";
  const shareWhatsappUrl = "https://whatsapp.com";
  const title = "Facebook";
  const emailTitle = "Gmail";
  const instaTitle = "Instagram";
  const whatsappTitle = "Whatsapp";

  return (
    <div className="Demo_container remove-padding">
      <div className="row">
        <div className="col l3 s6 m3">
          {/* Email share */}
          <EmailShareButton
            url={shareEmailUrl}
            quote={emailTitle}
            className="Demo__some-network__share-button"
          >
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
        </div>

        {/* InstaPaper Share */}
        <div className="col l3 s6 m3">
          <InstapaperShareButton
            url={shareInstaUrl}
            title={instaTitle}
            className="Demo__some-network__share-button"
          >
            <InstapaperIcon size={32} round />
          </InstapaperShareButton>
        </div>

        {/* whatsapp share */}
        <div className="col l3 s6 m3">
          <WhatsappShareButton
            url={shareWhatsappUrl}
            title={whatsappTitle}
            className="Demo__some-network__share-button"
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>

        {/* facebook share */}
        <div className="col l3 s6 m3">
          <FacebookShareButton
            url={shareFBUrl}
            quote={title}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <div>
            <FacebookShareCount
              url={shareFBUrl}
              className="Demo__some-network__share-count"
            >
              {(count) => count}
            </FacebookShareCount>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
