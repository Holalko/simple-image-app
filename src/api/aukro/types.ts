/**
 * Something like this could be generated from OpenAPI spec
 * I just used json to TS generator to make my life easier
 */

export type ItemType = {
  endingTime: string;
  id: number;
  name: string;
  aukroPlus: boolean;
  paymentOnline: boolean;
  images: Images;
  itemTypeEnumCode: string;
  seoUrl: string;
  paymentViaAukro: boolean;
  statusAdultContent: boolean;
};

export type Image = {
  id: number;
  position: number;
  titleImage: boolean;
  url: string;
  size: string;
  thumbnailReady: boolean;
};

export type Images = {
  lists: {
    small: Array<Image>;
    original: Array<Image>;
    large: Array<Image>;
    medium: Array<Image>;
  };
};

export type IGetAukroItems = {
  mainPart: Array<{
    type: "CrazyPricesItems";
    content: {
      items: Array<ItemType>;
    };
  }>;
};
