interface Data {
    title: string,
    description: string
    tag: string,
    color: string
}

export default function Card({title, description, tag, color}: Data) {
    return (
        <div className="bg-white mx-2 my-2 rounded-md shadow-md"> 
        <h1 className="font-semibold px-2 py-2 text-base">{title}</h1> 
        <p className="text-gray-600 px-2">{description}</p>
        <button disabled className={`rounded-sm ${color} mx-2 my-2 items-center`}>
          <p className="px-2 text-gray-800">{tag}</p>
        </button>
      </div>
    )
}