function Pagination(props) {
  const getPages = () => {
    const result = [];
    for (let i = 0; i < props.total; i++) {
      let page = i + 1;
      result.push(
        <a
          onClick={() => props.onChange(page)}
          className={props.page === page ? "active" : ""}
        >
          {page}
        </a>
      );
    }
    return result;
  };

  return (
    <div class="topbar-filter">
      <div class="pagination2">
        <span>
          Page {props.page} of {props.total}:
        </span>

        {getPages()}
      </div>
    </div>
  );
}

export default Pagination;
