import { Elements } from "@kontent-ai/delivery-sdk";
import { FC } from "react";
import ButtonLink from "./ButtonLink";
import { createElementSmartLink, createItemSmartLink } from "../utils/smartlink";
import { PortableText } from "@kontent-ai/rich-text-resolver/utils/react";
import { transformToPortableText } from "@kontent-ai/rich-text-resolver";
import { defaultPortableRichTextResolvers } from "../utils/richtext";
import { CoreContentType } from "../model/system";

type HeroImageProps = Readonly<{
  data: {
    headline?: Elements.TextElement;
    subheadline?: Elements.TextElement;
    heroImage?: Elements.AssetsElement;
    heroButtonText?: Elements.TextElement;
    heroContent?: Elements.RichTextElement<CoreContentType>;
    itemId?: string;
  };
  buttonLink?: string;
  imageBackgroundColor?: string;

}>;


const HeroImage: FC<HeroImageProps> = ({ data, buttonLink, imageBackgroundColor }) => {
  return (
    <div className="epac-dark-blue-theme flex flex-col py-10 lg:py-0 lg:flex-row lg:gap-8 max-w-[1100px] mx-auto">
      <div className="lg:basis-1/2 max-w-[550px] pt-10 lg:pt-[104px] pb-10 lg:pb-[160px] flex flex-col items-center lg:items-start gap-10">
        <h1 className="text-center lg:text-left font-sans text-[64px] md:text-[64px] text-heading-1-color leading-[64px] md:leading-[78px] font-semibold"
          {...createItemSmartLink(data.itemId)}
          {...createElementSmartLink("headline")}
        >
          {data.headline?.value}
        </h1>
        <p className="text-center lg:text-left font-sans text-body-color text-sm leading-[150%]"
          {...createItemSmartLink(data.itemId)}
          {...createElementSmartLink("subheadline")}
        >{data.subheadline?.value}</p>

        {buttonLink != "nolink" && (
          <ButtonLink href={buttonLink ?? "services"}>
            <p>{data.heroButtonText?.value || "Get a free quote"}</p>
          </ButtonLink>
        )}

        {data.heroContent && data.heroContent.value && (
          <div className="text-center lg:text-left font-sans text-lg text-body-color rich-text-body w-full max-w-[550px]"
            {...createItemSmartLink(data.itemId)}
            {...createElementSmartLink("hero_content")}
          >
            <PortableText value={transformToPortableText(data.heroContent.value)} components={defaultPortableRichTextResolvers} />
          </div>
        )}

      </div>
      <div className={`lg:basis-1/2 max-w-[550px] ${imageBackgroundColor || 'bg-epacDarkBlue'}`}
        {...createItemSmartLink(data.itemId)}
        {...createElementSmartLink("hero_image")}
      >
        {data.heroImage?.value[0]
          ? (
            data.heroImage.value[0].type?.startsWith('image') ? (
              <img
                className="object-contain w-full h-full mx-auto"
                width={520}
                height={770}
                src={`${data.heroImage.value[0].url}?auto=format&w=800`}
                alt={data.heroImage.value[0].description ?? "image-alt"}
              />
            ) : (
              <video
                src={data.heroImage.value[0].url}
                autoPlay={true}
                loop={true}
                muted={true}
                width={660}
                height={770}
                className="object-contain w-full h-full mx-auto"
              />
            )
          ) : <></>}
      </div>
    </div>
  );
};

export default HeroImage;