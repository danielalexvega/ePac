import { FC } from "react";
// import { Elements } from "@kontent-ai/delivery-sdk";
import ButtonLink from "./ButtonLink";
import { createElementSmartLink, createItemSmartLink } from "../utils/smartlink";
import { type CustomerSpotlight } from "../model";

type CustomerSpotlightProps = Readonly<{
  data: CustomerSpotlight;
}>;

const CustomerSpotlight: FC<CustomerSpotlightProps> = ({ data }) => {
  return (
    <div className="relative w-full min-h-[600px] flex items-center">
      {/* Background Image */}
      {data.elements.background_image?.value[0] && (
        <div className="absolute inset-0 z-0">
          <img
            src={`${data.elements.background_image.value[0].url}?auto=format&w=1920`}
            alt={data.elements.background_image.value[0].description ?? "Background"}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white">
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4"
                {...createItemSmartLink(data.system.id)}
                {...createElementSmartLink("headline")}
              >
                Customer Spotlight
              </h2>
              <div className="w-16 h-1 bg-white mb-6"></div>
            </div>
            
            {data.elements.referral_text?.value && (
              <blockquote className="text-lg lg:text-xl leading-relaxed mb-6"
                {...createItemSmartLink(data.system.id)}
                {...createElementSmartLink("referral_text")}
              >
                "{data.elements.referral_text.value}"
              </blockquote>
            )}
          </div>

          {/* Right Column - Images and Button */}
          <div className="relative">
            {/* Brand Image */}
            {data.elements.brand_image?.value[0] && (
              <div className="mb-6"
                {...createItemSmartLink(data.system.id)}
                {...createElementSmartLink("brand_image")}
              >
                <img
                  src={`${data.elements.brand_image.value[0].url}?auto=format&w=600`}
                  alt={data.elements.brand_image.value[0].description ?? "Brand"}
                  className="w-full max-w-md mx-auto object-contain"
                />
              </div>
            )}

            {/* Product Image */}
            {data.elements.product_image?.value[0] && (
              <div className="mb-8"
                {...createItemSmartLink(data.system.id)}
                {...createElementSmartLink("product_image")}
              >
                <img
                  src={`${data.elements.product_image.value[0].url}?auto=format&w=600`}
                  alt={data.elements.product_image.value[0].description ?? "Products"}
                  className="w-full max-w-lg mx-auto object-contain"
                />
              </div>
            )}

            {/* Case Study Button */}
            <div className="text-center">
              <ButtonLink href="/" style="orange" className="mb-4">
                VIEW THE CASE STUDY
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSpotlight;
