const PreviewSidebarTab = ({ leftText, rightText }) => {
  return (
    <div>
      <div className="flex justify-between font-light">
        <p className=" opacity-60">{leftText}</p>
        <div>
          <p className=" text-right">{rightText}</p>
        </div>
      </div>
      <hr className="opacity-20 mt-2" />
    </div>
  );
};
export default PreviewSidebarTab;
