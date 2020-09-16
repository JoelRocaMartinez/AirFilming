import React from 'react'
import {FacebookShareButton, LinkedinShareButton, PinterestShareButton} from "react-share";
import {FacebookIcon, LinkedinIcon, PinterestIcon} from "react-share";

function Footer() {

    return (

        <div>
            <div>
              <FacebookShareButton className="sharing-logo" url={"https:www.facebook.com"}><FacebookIcon size={30} /></FacebookShareButton>
              <LinkedinShareButton className="sharing-logo" url={"https:www.LinkedIn.com"}><LinkedinIcon size={30} /></LinkedinShareButton>
              <PinterestShareButton className="sharing-logo" url={"https:www.Pinterest.es"}><PinterestIcon size={30} /></PinterestShareButton>  
            </div>  
            <p>© 2020 by Joel Roca Martinez</p>
        </div>
    )
}

export default Footer
