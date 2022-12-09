import { useQuery } from "@tanstack/react-query";
import { AukroAPI } from "./index";

export const usePhotos = () => {
  return useQuery({
    queryKey: ["photos"],
    queryFn: AukroAPI.getPhotos,
  });
};
