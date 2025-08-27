// Modal.jsx
export default function Modal({ onClose, image }) {
    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50"
            onClick={onClose} // 배경 클릭 시 닫힘
        >
            <div
                className="bg-white rounded-lg max-w-3xl w-full relative max-h-[80vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()} // 내부 클릭 시 닫히지 않도록
            >
                {/* 헤더 부분 */}
                <div className="sticky top-0 z-10 bg-yellow-100 px-4 py-6 ">
                    <button
                        className="absolute top-2 right-2 text-gray-600 hover:text-black"
                        onClick={onClose}
                        aria-label="Close modal"
                    >
                        ✕
                    </button>
                    <h3 className=" text-2xl font-bold">{image.caption}</h3>

                </div>
                <div className="p-6 space-y-4 max-h-[calc(80vh-100px)] overflow-y-auto">
                    {/* <img src={image.src} alt={image.caption} className="w-full rounded mb-4" /> */}
                    <div className="text-lg font-bold">{image.description}</div>
                    <div className="flex flex-col"><span className="font-semibold">수행기간</span>{image.date}</div>
                    <div>
                        <span className="font-semibold">역할</span>
                        <ul>{image.role.map((role, idx) => (
                            <li key={idx}>{role}</li>
                        ))}</ul>
                    </div>
                    <div className="">
                        <span className="font-semibold">기술스택</span>
                        <div className="flex flex-wrap text-sm rounded-md my-2">
                            {Array.isArray(image.skills) && image.skills.length > 0 && image.skills.map((skill, index) => (
                                <div key={index} className="flex items-center px-2 rounded-xl border-orange-200 border mb-1 mr-1 bg-lime-100">
                                    {skill.icon} <span className="pl-1  text-gray-700">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 주요 특징 */}
                    <div className="">
                        <span className="font-semibold">주요 특징</span>
                        <ul className="list-disc list-inside">
                            {image.detail.map((item, idx) => (
                                <li key={idx}>
                                    <span className="font-semibold">{item.title}</span>
                                    <ul className="pl-4">
                                        {item.contents.map((content, subIdx) => (
                                            <li key={subIdx}>{content}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>



                </div>
            </div>
        </div>
    );
}
