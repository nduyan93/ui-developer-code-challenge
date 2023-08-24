export default function PopularitySlider({ popularity, onChange }) {
  const handlePopularityChange = (event) => {
    onChange(event);
  };

  return (
    <div className="h-24 flex justify-start items-center ">
      <label htmlFor="popularity" className="text-xl lg:text-[28px] font-normal">Popularity</label>
      <input
        className="ml-4 lg:ml-8 w-full"
        type="range"
        id="popularity"
        name="popularity"
        min="1"
        max="10"
        value={popularity}
        onChange={handlePopularityChange}
      />
    </div>
  );
}
