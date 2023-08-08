import { env } from "@/next.config";
import { useRouter } from "next/router";
import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

export default function ShareButtons() {
  const router = useRouter();

  const baseUrl = env.BASE_URL_FLUFFY;
  const shareUrl = baseUrl + router.asPath;
  const title = "Sprawdź ten artykuł!";

  return (
    <>
      <p className="mt-20 mb-10 font-semibold">
        Artykuł Ci się podobał? Udostępnij na swoich mediach społecznościowych:
      </p>
      <div className="flex gap-3 justify-center items-center">
        <FacebookShareButton
          url={shareUrl}
          quote={title}
          className="shadow-none"
        >
          <i className="fa-brands fa-square-facebook text-3xl hover:text-acc-light dark:hover:text-acc-dark"></i>
        </FacebookShareButton>
        <TwitterShareButton
          url={shareUrl}
          title={title}
          className="shadow-none"
        >
          <i className="fa-brands fa-square-twitter text-3xl hover:text-acc-light dark:hover:text-acc-dark"></i>
        </TwitterShareButton>
        <WhatsappShareButton
          url={shareUrl}
          title={title}
          className="shadow-none"
        >
          <i className="fa-brands fa-square-whatsapp text-3xl hover:text-acc-light dark:hover:text-acc-dark"></i>
        </WhatsappShareButton>
        <LinkedinShareButton url={shareUrl} className="shadow-none">
          <i className="fa-brands fa-linkedin text-3xl hover:text-acc-light dark:hover:text-acc-dark"></i>
        </LinkedinShareButton>
        <RedditShareButton
          url={shareUrl}
          title={title}
          windowWidth={660}
          windowHeight={460}
          className="shadow-none"
        >
          <i className="fa-brands fa-square-reddit text-3xl hover:text-acc-light dark:hover:text-acc-dark"></i>
        </RedditShareButton>
        <TumblrShareButton url={shareUrl} title={title} className="shadow-none">
          <i className="fa-brands fa-square-tumblr text-3xl hover:text-acc-light dark:hover:text-acc-dark"></i>
        </TumblrShareButton>
      </div>
    </>
  );
}
