import { folio } from '../../data/index';


const WebsitesCard=(item:any)=>{

    return (
        <a
        href={item.websiteUrl}
        className="flex flex-col bg-base-100 relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
    >
        <span
            className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
        ></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
            <div>
                <h3 className="text-lg font-bold  sm:text-xl">
                    {item.title}
                </h3> 
                <p className="max-w-[40ch] text-sm ">
            {item.description}            </p>
            </div>

            <div className="hidden sm:block sm:shrink-0">
                <img
                    alt="Paul Clapton"
                    src={item.imageUrl}
                    className="h-32 w-32 rounded-lg object-cover shadow-sm"
                />
            </div>
        </div>
 
        <dl className="mt-6 flex gap-4 sm:gap-6">
            <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium ">Delivered</dt>
                <dd className="text-xs ">Development</dd>
            </div>

            <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium ">Demo Link</dt>
                <dd className="text-xs  font-medium ">click here</dd>
            </div>
        </dl>
    </a>
    )
}

export default WebsitesCard;