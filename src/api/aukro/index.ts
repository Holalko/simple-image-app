import { IGetAukroItems, ItemType } from "./types";

// could add some fancy error handling, but for the sake of this example, i'll just let it like this
const verySophisticatedValidation = (
  data: Record<string, unknown>
): data is IGetAukroItems => {
  return (
    "mainPart" in data &&
    Array.isArray(data.mainPart) &&
    data.mainPart.find((item) => item.type === "CrazyPricesItems")
  );
};

const pickRandomItems = (items: ItemType[], numberOfItems: number) => {
  const shuffled = items.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numberOfItems);
};

const AukroAPI = {
  getPhotos: async () => {
    const response = await fetch("https://aukro.cz/backend/api/homepage");
    const data = await response.json();

    if (verySophisticatedValidation(data)) {
      const crazyPricesItems = data.mainPart.find(
        (item) => item.type === "CrazyPricesItems"
      );

      if (crazyPricesItems) {
        // simulate API returning random data every time
        return pickRandomItems(crazyPricesItems.content.items, 4);
      }
    }

    throw new Error("Invalid data");
  },
};

export { AukroAPI };
