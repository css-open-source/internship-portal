
const LetterCard = ({name,status}) => {
  return (
      <>
          <div className="w-full  p-6">
            <div className="bg-white rounded shadow-md p-4">
              <img
                src="\src\assets\loginpic.jpg"
                alt="Image 1"
                className="w-full h-80 object-cover mb-4"
              />
              <div className=" rounded-lg shadow-md p-4 border-2 border-b-8 border-r-4 border-blue-600">
                <h2 className="text-lg text-blue-700 font-bold mb-2">
                  Company Name: {name} 
                </h2>
                      <p className="text-gray-600">Status :{status }</p>
              </div>
            </div>
          </div>
      </>
  )
}

export default LetterCard