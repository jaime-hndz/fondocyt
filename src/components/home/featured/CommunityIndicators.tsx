export const CommunityIndicators = () => {
  return (
    <div className="w-[80vw] h-[80vh] p-10">
      <h2 className="text-4xl font-bold mb-12 text-coral-500">
        Indicadores comunales
      </h2>
      <iframe style={{width: '100%', height: '100%'}} src="https://arcoiris.maps.arcgis.com/apps/dashboards/5efe3e50a42e48018f7702402bfe8818" />
    </div>
  );
};
