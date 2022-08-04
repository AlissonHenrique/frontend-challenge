
interface paginationProps{
    currentPage:number;
    pages:number[];
    handleCurrentPage:(page:number)=> void;
    handlePrev:()=> void;
    handleNext:()=> void;
}


export function Paginate ({currentPage,pages,handleCurrentPage,handlePrev,handleNext}:paginationProps){

    return (
        <>
        <div className="container-buttons">
            {currentPage > 1 && (  
                        <button type='button' onClick={handlePrev}  >
                            Anterior
                        </button>
                )} 
                
                    {pages.map(page =>(
                        <button type='button' key={page} onClick={() => handleCurrentPage(page)} className={page === currentPage ? 'active' : ''} >
                            {page}
                        </button>
                    ))}  
                
                {currentPage < pages.length && (  
                        <button type='button'  onClick={handleNext} >
                            Próximo
                        </button>
                        )}  
                    </div>
        </>
    )

}