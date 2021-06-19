export const ToggleTodos = () => {
  return (
    <>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        readOnly
        checked={false}
      />
      <label htmlFor="toggle-all" /*onClick={this.props.onCompleteAll} */ />
    </>
  );
};
