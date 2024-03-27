import React from 'react'
import {useNavigate} from "react-router-dom";


export default function Juz() {

    const juzLinks = Array.from({length: 30}, (_, i) => ({
        name: `Juz ${i + 1}`,
        link: `/juz/${i + 1}`
    }));

    const navi = useNavigate();

    function juzOpen(index) {
        navi("/juz-detail", { state: { index: index } });
    }


    return (
        <section>
            <div className="whiteBg mx-auto max-w-6xl py-4 px-8">
                <h1 className='text-center my-2 text-gray-700 text-2xl lg:text-5xl font'>بِسْمِ ٱللّٰهِ الرَّحْمٰنِ
                    الرَّحِيْمِ</h1>
                <h1 className="text-lg lg:text-2xl mt-4 mb-2">Read the Quran by Juz</h1>
                <hr/>
                <div className="grid grid-cols-2 lg:grid-cols-5 py-2 gap-2">
                    {juzLinks.map((juz, index) => (
                        <button onClick={() => juzOpen(index + 1)} key={index}
                                className="border py-3 px-6 text-center hover:bg-blue-500 hover:text-white">{juz.name}</button>
                    ))}
                </div>
            </div>
        </section>
    )
        ;
}


