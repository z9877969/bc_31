import Button from "../Button/Button";

const Paginator = ({ updatePage, page }) => {
  const handleBtnNext = () => updatePage("next");
  const handleBtnPrev = () => updatePage("prev");

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
      <Button isDisbaled={page <= 1} cbOnClick={handleBtnPrev} title={"Prev"} />
      <Button isDisbaled={false} cbOnClick={handleBtnNext} title={"Next"} />
    </div>
  );
};

export default Paginator;
