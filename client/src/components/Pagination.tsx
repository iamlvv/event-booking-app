import ReactPaginate from "react-paginate";
type Props = {
  handlePageClick: (e: any) => void;
  pageCount: number;
};

const Pagination = (props: Props) => {
  return (
    <div>
      <ReactPaginate
        previousLabel={"Previous"}
        breakLabel={"..."}
        nextLabel={"Next"}
        pageCount={props.pageCount}
        onPageChange={props.handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName="font-bold text-2xl cursor-pointer"
        pageClassName="py-2 px-3 hover:shadow-md hover:bg-black hover:text-white bg-white text-black transition ease-in rounded-md cursor-pointer text-2xl"
        className="flex justify-center items-center px-5 font-medium rounded-md mb-5 gap-x-5"
      />
    </div>
  );
};

export default Pagination;
