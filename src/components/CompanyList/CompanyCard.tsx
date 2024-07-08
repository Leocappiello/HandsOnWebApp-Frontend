
const CompanyCard = ({name}: {name: string}) => {
  return (
    <div className='h-24 w-24 rounded-md bg-purple-300 mx-3 text-center break-words p-3 overflow-hidden shadow-md cursor-pointer'>
        <p className="text-purple-100 font-bold">{name}</p>
    </div>
  )
}

export default CompanyCard