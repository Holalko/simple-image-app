import { HomeSection } from "../sections/home";
import { usePhotos } from "../api/aukro/hooks";

export function Home() {
  const { data, status, refetch } = usePhotos();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!data || status === "error") {
    return <div>Something went wrong</div>;
  }

  return <HomeSection data={data} refetchData={refetch} />;
}
