import type { FeatureCollection } from "geojson";
import { MapContainer, TileLayer } from "react-leaflet";

import { api } from "~/trpc/react";
import FeatureGroupFC from "./feature-group";

interface Props {
  geojson: FeatureCollection;
  setGeojson: (geojson: FeatureCollection) => void;
}

export default function EditControl({ geojson, setGeojson }: Props) {
  const [url] = api.cityPlanning.getGoogleMaps.useSuspenseQuery();
  return (
    <MapContainer
      className="h-full w-full"
      center={[32.972534, -94.597279]}
      zoom={18}
      zoomControl={true}
    >
      <TileLayer url={url} />
      <FeatureGroupFC geojson={geojson} setGeojson={setGeojson} />
    </MapContainer>
  );
}