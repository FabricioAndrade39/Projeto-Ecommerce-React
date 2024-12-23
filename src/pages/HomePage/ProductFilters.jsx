const ProductFilters = ({ setFemaleProducts }) => {
  return (
    <section className='flex justify-center items-center py-8'>
      <input
        id='filter-0'
        type='radio'
        name='filter-select'
        className='hidden'
        onClick={() => setFemaleProducts(null)}
      />
      <label
        htmlFor='filter-0'
        className='rounded-s-lg bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer'
      >
        Todos
      </label>

      <input
        id='filter-1'
        type='radio'
        name='filter-select'
        className='hidden'
        onClick={() => setFemaleProducts(false)}
      />
      <label
        htmlFor='filter-1'
        className='bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer'
      >
        Masculino
      </label>
      <input
        id='filter-2'
        type='radio'
        name='filter-select'
        className='hidden'
        onClick={() => setFemaleProducts(true)}
      />
      <label
        htmlFor='filter-2'
        dir='rtl'
        className='bg-slate-950 rounded-s-lg hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer'
      >
        Feminino
      </label>
    </section>
  );
};

export default ProductFilters;
